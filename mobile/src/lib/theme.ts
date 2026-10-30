// Barve sloga »Čist« iz docs/oblikovanje.md (svetlo in temno), za vse zaslone aplikacije.
// Zasloni barv ne pišejo neposredno, vedno vzamejo barvo iz useTheme().
import { useColorScheme } from "react-native";

const light = {
  bg: "#F6F7F9",
  surface: "#FFFFFF",
  surface2: "#EEF1F6",
  text: "#0F172A",
  muted: "#5B6474",
  border: "#E3E7EE",
  accent: "#2353D1",
  accentSoft: "#E8EEFC",
  accentText: "#FFFFFF",
  ok: "#15803D",
  okSoft: "#E7F6EC",
  danger: "#C62828",
  dangerSoft: "#FDECEC",
  gold: "#B7791F",
  goldSoft: "#FFF6E0",
  warm: "#E8590C",
  heroA: "#2353D1",
  heroB: "#5B3FD6",
};

const dark: typeof light = {
  bg: "#0D1117",
  surface: "#161B22",
  surface2: "#1F2630",
  text: "#E6EDF3",
  muted: "#9AA4B2",
  border: "#30363D",
  accent: "#6E9BFF",
  accentSoft: "#1B2A4A",
  accentText: "#0D1117",
  ok: "#4ADE80",
  okSoft: "#12301E",
  danger: "#F87171",
  dangerSoft: "#3A1717",
  gold: "#F6C453",
  goldSoft: "#3A2E10",
  warm: "#FF8A4C",
  heroA: "#2A4FB8",
  heroB: "#5636B8",
};

export type Theme = typeof light & { dark: boolean };

// Isti predmet pri vsakem izrisu (stabilne odvisnosti za useMemo in WebView).
const LIGHT: Theme = { ...light, dark: false };
const DARK: Theme = { ...dark, dark: true };

export function useTheme(): Theme {
  return useColorScheme() === "dark" ? DARK : LIGHT;
}

export const radius = { card: 14, button: 10, pill: 999 };
export const space = (n: number) => n * 4;
