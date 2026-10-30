// Spodnja vrstica z zavihki: sistemska (iOS Liquid Glass, Android Material), kot v spletni aplikaciji
// na telefonu: Učna pot, Učbenik, Skeniraj, Inštruktor, Jaz.
import React from "react";
import { NativeTabs } from "expo-router/native-tabs";
import { t, useLanguage } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

export default function TabLayout() {
  useLanguage();
  const th = useTheme();
  return (
    <NativeTabs tintColor={th.accent}>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Icon sf={{ default: "map", selected: "map.fill" }} md="route" />
        <NativeTabs.Trigger.Label>{t("nav.path")}</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="textbook">
        <NativeTabs.Trigger.Icon sf={{ default: "book", selected: "book.fill" }} md="menu_book" />
        <NativeTabs.Trigger.Label>{t("nav.textbook")}</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="scan">
        <NativeTabs.Trigger.Icon sf={{ default: "camera.viewfinder", selected: "camera.viewfinder" }} md="document_scanner" />
        <NativeTabs.Trigger.Label>{t("mob.scan")}</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="tutor">
        <NativeTabs.Trigger.Icon sf={{ default: "bubble.left.and.bubble.right", selected: "bubble.left.and.bubble.right.fill" }} md="forum" />
        <NativeTabs.Trigger.Label>{t("nav.chat")}</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="me">
        <NativeTabs.Trigger.Icon sf={{ default: "person.crop.circle", selected: "person.crop.circle.fill" }} md="account_circle" />
        <NativeTabs.Trigger.Label>{t("nav.me")}</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
