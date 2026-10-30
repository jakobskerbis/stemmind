// Korenska postavitev: prijava → izbira profila → zavihki. Zasloni nad zavihki (lekcija, vaje,
// pogovor, naročnina) se odprejo kot naravni sklad (iOS: potisk z robu nazaj, Android: gumb nazaj).
import React, { useEffect } from "react";
import { Stack, router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import * as Notifications from "expo-notifications";
import { StatusBar } from "expo-status-bar";
import { SessionProvider, useSession } from "@/lib/session";
import { t, useLanguage } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { watchPurchases } from "@/lib/billing";

SplashScreen.preventAutoHideAsync().catch(() => {});

function Root() {
  const { ready, signedIn, student, refresh } = useSession();
  const th = useTheme();
  useLanguage();

  useEffect(() => {
    if (ready) SplashScreen.hideAsync().catch(() => {});
  }, [ready]);

  // Nakupi v trgovini, ki niso prišli prek gumba (prekinjeni, potrjeni pozneje), se zapišejo ob zagonu.
  useEffect(() => (signedIn ? watchPurchases(() => refresh().catch(() => {})) : undefined), [signedIn, refresh]);

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
      <Stack screenOptions={header}>
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
