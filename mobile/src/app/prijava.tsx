// Prijava iz brskalnika: stran /prenesi v brskalniku, kjer je račun prijavljen, odpre
// evklid://prijava?t=… (server/mobile/app-link.js). Žeton velja enkrat; aplikacija dobi svojo sejo,
// profil iz brskalnika je odprt brez gesla.
import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { api } from "@/lib/api";
import { useSession } from "@/lib/session";
import { t } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { Banner, Body, Button, Screen } from "@/components/ui";

export default function Prijava() {
  const th = useTheme();
  const { t: token } = useLocalSearchParams<{ t?: string }>();
  const { refresh, select } = useSession();
  const [error, setError] = useState<string | null>(null);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return; // žeton velja samo enkrat
    started.current = true;
    (async () => {
      if (!token) return router.replace("/");
      try {
        const r = await api<{ student_id?: number | null }>("/api/auth/app-link", { body: { token } });
        if (r.student_id) await select(r.student_id);
        await refresh();
        router.replace("/");
      } catch (err: any) {
        setError(err.message);
      }
    })();
  }, [token, refresh, select]);

  return (
    <Screen contentContainerStyle={{ padding: 24, paddingTop: 96, gap: 16, maxWidth: 520, width: "100%", alignSelf: "center" }}>
      {error ? (
        <>
          <Banner text={error} tone="danger" />
          <Button title={t("mob.signIn")} onPress={() => router.replace("/")} />
        </>
      ) : (
        <View style={{ alignItems: "center", gap: 12 }}>
          <ActivityIndicator color={th.accent} />
          <Body muted center>
            {t("mob.linkBusy")}
          </Body>
        </View>
      )}
    </Screen>
  );
}
