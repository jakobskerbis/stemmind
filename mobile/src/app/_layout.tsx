// Korenska postavitev: prijava → izbira profila → zavihki. Zasloni nad zavihki (lekcija, vaje,
// pogovor, naročnina) se odprejo kot naravni sklad (iOS: potisk z robu nazaj, Android: gumb nazaj).
import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Alert, Modal, Text, View } from "react-native";
import { Stack, router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import * as Notifications from "expo-notifications";
import { StatusBar } from "expo-status-bar";
import { SessionProvider, useSession } from "@/lib/session";
import { t, useLanguage } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { watchPurchases } from "@/lib/billing";
import { useAppUpdates } from "@/lib/updates";
import { api, setTakenHandler } from "@/lib/api";

SplashScreen.preventAutoHideAsync().catch(() => {});

function Root() {
  const { ready, signedIn, student, refresh, select } = useSession();
  const th = useTheme();
  useLanguage();
  // Nova različica: ob prijavi (in po nekaj urah v ozadju) ponudi posodobitev na en klik (src/lib/updates.ts).
  const [updating, cancelUpdate] = useAppUpdates(ready && signedIn);

  useEffect(() => {
    if (ready) SplashScreen.hideAsync().catch(() => {});
  }, [ready]);

  // Nakupi v trgovini, ki niso prišli prek gumba (prekinjeni, potrjeni pozneje), se zapišejo ob zagonu.
  useEffect(() => (signedIn ? watchPurchases(() => refresh().catch(() => {})) : undefined), [signedIn, refresh]);

  // Profil je hkrati odprt samo na eni napravi. Če ga ima druga (npr. brskalnik), ponudimo prevzem kot splet
  // (public/account.js): »Nadaljuj tukaj« ga zapre na drugi napravi in znova naloži zaslone.
  const [epoch, setEpoch] = useState(0);
  const askingTaken = useRef(false);
  useEffect(() => {
    setTakenHandler((id) => {
      if (askingTaken.current || !id) return;
      askingTaken.current = true;
      const done = () => (askingTaken.current = false);
      Alert.alert(t("mob.takenTitle"), t("mob.takenText"), [
        { text: t("mob.takenOther"), style: "cancel", onPress: () => (done(), select(null)) },
        {
          text: t("mob.takenHere"),
          onPress: () =>
            api(`/api/students/${id}/claim`, { body: {} })
              .then(() => setEpoch((e) => e + 1))
              // Brez povezave ali druga napaka: povemo zakaj; naslednja zahteva profila vprašanje ponovi.
              .catch((err) => Alert.alert((err as Error).message))
              .finally(done),
        },
      ], { cancelable: false });
    });
    return () => setTakenHandler(null);
  }, [select]);

  // Dotik obvestila odpre učno pot.
  useEffect(() => {
    const sub = Notifications.addNotificationResponseReceivedListener(() => {
      if (signedIn && student) router.navigate("/");
    });
    return () => sub.remove();
  }, [signedIn, student]);

  if (!ready) return null;
  const header = { headerTintColor: th.accent, headerStyle: { backgroundColor: th.bg }, headerTitleStyle: { color: th.text }, contentStyle: { backgroundColor: th.bg }, headerBackButtonDisplayMode: "minimal" as const };
  return (
    <>
      <StatusBar style="auto" />
      <Stack key={epoch} screenOptions={header}>
        <Stack.Protected guard={!signedIn}>
          <Stack.Screen name="sign-in" options={{ headerShown: false }} />
          <Stack.Screen name="register" options={{ title: t("mob.register") }} />
          <Stack.Screen name="forgot" options={{ title: t("mob.forgot"), presentation: "modal" }} />
        </Stack.Protected>
        <Stack.Protected guard={signedIn && !student}>
          <Stack.Screen name="profiles" options={{ title: t("mob.profiles"), headerLargeTitle: true }} />
        </Stack.Protected>
        <Stack.Protected guard={signedIn && !!student}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="topic/[id]" options={{ title: "" }} />
          <Stack.Screen name="practice" options={{ title: t("mob.practice") }} />
          <Stack.Screen name="chat/[id]" options={{ title: t("nav.chat") }} />
          <Stack.Screen name="subscription" options={{ title: t("mob.subscription"), presentation: "modal" }} />
          <Stack.Screen name="delete-account" options={{ title: t("mob.deleteAccount"), presentation: "modal" }} />
        </Stack.Protected>
      </Stack>
      {/* Prenos novega APK; gumb nazaj prekliče prenos. */}
      <Modal transparent visible={updating !== null} animationType="fade" statusBarTranslucent onRequestClose={cancelUpdate}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0,0,0,0.4)", padding: 24 }}>
          <View style={{ backgroundColor: th.surface, borderColor: th.border, borderWidth: 1, borderRadius: 16, padding: 24, alignItems: "center", gap: 12, minWidth: 240 }}>
            <ActivityIndicator color={th.accent} />
            {/* po 10 %, da bralnik zaslona ne bere vsakega odstotka */}
            <Text style={{ color: th.text, fontSize: 16, textAlign: "center" }} accessibilityLiveRegion="polite">
              {t("mob.updateDownloading", { pct: Math.floor((updating ?? 0) / 10) * 10 })}
            </Text>
          </View>
        </View>
      </Modal>
    </>
  );
}

export default function Layout() {
  return (
    <SessionProvider>
      <Root />
    </SessionProvider>
  );
}
