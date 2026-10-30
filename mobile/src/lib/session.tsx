// Stanje prijave: račun (starš ali dijak sam), profili in izbrani profil.
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import Storage from "expo-sqlite/kv-store";
import { api, ApiError, clearSession, hasSession, loadSession, onSessionChange } from "./api";
import { setLanguage } from "./i18n";
import { key } from "./keys";

export type Parent = {
  id: number;
  email: string | null;
  name: string;
  minor: boolean;
  verified: boolean;
  trial_ends_at: string | null;
  subscription: { status: string; plan: string; seats: number; period_end: string | null; cancel_at_period_end: boolean } | null;
};
export type Student = {
  id: number;
  name: string;
  locked?: boolean;
  needs_password?: boolean;
  birth_year?: number;
  settings?: Record<string, any>;
};

type Ctx = {
  ready: boolean;
  parent: Parent | null;
  students: Student[];
  student: Student | null;
  signedIn: boolean;
  refresh: () => Promise<void>;
  select: (id: number | null) => Promise<void>;
  setParent: (p: Parent | null) => void;
  updateStudent: (s: Student) => void;
  signOut: () => Promise<void>;
};

const SessionCtx = createContext<Ctx | null>(null);
const STUDENT_KEY = key("student");

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [parent, setParent] = useState<Parent | null>(null);
  const [students, setStudents] = useState<Student[]>([]);
  const [studentId, setStudentId] = useState<number | null>(null);

  const refresh = useCallback(async () => {
    if (!hasSession()) {
      setParent(null);
      setStudents([]);
      return;
    }
    try {
      const [status, list] = await Promise.all([api("/api/account/status"), api<Student[]>("/api/students")]);
      setParent(status.parent);
      setStudents(list);
      const saved = Number(await Storage.getItem(STUDENT_KEY)) || null;
      const pick = list.find((s) => s.id === saved && !s.locked) || (list.length === 1 && !list[0].locked ? list[0] : null);
      setStudentId(pick?.id ?? null);
    } catch (err) {
      // Brez povezave ostane zadnje znano stanje (vaje brez povezave delujejo iz paketa).
      if (!(err instanceof ApiError) || !err.offline) throw err;
    }
  }, []);

  useEffect(() => {
    (async () => {
      await loadSession();
      setSignedIn(hasSession());
      await refresh().catch(() => {});
      setReady(true);
    })();
    return onSessionChange(() => {
      setSignedIn(hasSession());
      if (!hasSession()) {
        setParent(null);
        setStudents([]);
        setStudentId(null);
      }
    });
  }, [refresh]);

  const student = students.find((s) => s.id === studentId) || null;
  useEffect(() => setLanguage(student?.settings?.language || null), [student?.settings?.language]);

  const select = useCallback(async (id: number | null) => {
    setStudentId(id);
    if (id) await Storage.setItem(STUDENT_KEY, String(id));
    else await Storage.removeItem(STUDENT_KEY);
  }, []);

  const signOut = useCallback(async () => {
    await api("/api/auth/logout", { body: {} }).catch(() => {});
    await clearSession();
    await Storage.removeItem(STUDENT_KEY);
  }, []);

  const updateStudent = useCallback((s: Student) => setStudents((list) => list.map((x) => (x.id === s.id ? { ...x, ...s } : x))), []);

  const value = useMemo(
    () => ({ ready, parent, students, student, signedIn, refresh, select, setParent, updateStudent, signOut }),
    [ready, parent, students, student, signedIn, refresh, select, updateStudent, signOut],
  );
  return <SessionCtx.Provider value={value}>{children}</SessionCtx.Provider>;
}

export function useSession() {
  const c = useContext(SessionCtx);
  if (!c) throw new Error("useSession zunaj SessionProvider");
  return c;
}

// Izbrani profil (zasloni pod zavihki ga vedno imajo).
export function useStudent() {
  const { student } = useSession();
  if (!student) throw new Error("ni izbranega profila");
  return student;
}
