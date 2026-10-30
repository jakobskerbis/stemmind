// Besedilo z Markdownom in formulami. Kratko besedilo brez formul je naravno besedilo; ostalo
// izriše WebView brez drsenja, ki je visok toliko kot vsebina (povezave se odprejo v brskalniku).
// html: že pripravljen HTML (npr. slika k nalogi). Ko se besedilo spreminja (odgovor inštruktorja
// prihaja sproti), WebView ostane naložen in se zamenja le vsebina, brez utripanja.
import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import { Text, useWindowDimensions, View } from "react-native";
import { WebView } from "react-native-webview";
import * as WebBrowser from "expo-web-browser";
import { docHtml, isPlain, MEASURE_JS, toHtml } from "@/lib/rich";
import { useTheme } from "@/lib/theme";

type Props = { text: string; html?: string; ai?: boolean; streaming?: boolean; size?: number; center?: boolean; minHeight?: number };

const replaceJs = (body: string) => `(function(){var c=document.getElementById('c');if(c)c.innerHTML=${JSON.stringify(body)};})();true;`;

function RichTextImpl({ text, html: rawHtml, ai = false, streaming = false, size = 17, center = false, minHeight = 0 }: Props) {
  const th = useTheme();
  // Velikost pisave v WebView sledi nastavitvi telefona (Dynamic Type, Android »Velikost pisave«), kot pri Text.
  const { fontScale } = useWindowDimensions();
  const plain = !rawHtml && isPlain(text);
  const body = useMemo(() => (plain ? "" : (rawHtml ?? toHtml(text, { ai, streaming }))), [plain, rawHtml, text, ai, streaming]);
  const [height, setHeight] = useState(minHeight || size * 1.6);
  const ref = useRef<React.ComponentRef<typeof WebView>>(null);
  const loaded = useRef(false);
  const latest = useRef(body);
  latest.current = body;
  // Dokument se zgradi znova samo ob menjavi teme ali velikosti; vsebina se nato zamenja na mestu.
  const doc = useMemo(() => {
    loaded.current = false;
    return docHtml(latest.current, th, { size: Math.round(size * fontScale), center });
  }, [th, size, center, fontScale]);

  useEffect(() => {
    if (loaded.current) ref.current?.injectJavaScript(replaceJs(body));
  }, [body]);

  if (plain) {
    return <Text style={{ color: th.text, fontSize: size, lineHeight: size * 1.5, textAlign: center ? "center" : undefined }} selectable>{text.trim()}</Text>;
  }
  return (
    <View style={{ height, minHeight }}>
      <WebView
        ref={ref}
        source={{ html: doc }}
        originWhitelist={["about:blank", "data:*"]}
        style={{ backgroundColor: "transparent", flex: 1 }}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        injectedJavaScript={MEASURE_JS}
        onLoadEnd={() => {
          loaded.current = true;
          ref.current?.injectJavaScript(replaceJs(latest.current));
        }}
        onMessage={(e: { nativeEvent: { data: string } }) => {
          const h = Number(e.nativeEvent.data);
          if (h > 0) setHeight(Math.max(minHeight, h));
        }}
        onShouldStartLoadWithRequest={(req: { url: string }) => {
          if (/^https?:/.test(req.url)) {
            WebBrowser.openBrowserAsync(req.url).catch(() => {});
            return false;
          }
          return true;
        }}
        javaScriptEnabled
        allowsLinkPreview={false}
        textInteractionEnabled
        setSupportMultipleWindows={false}
        accessible
      />
    </View>
  );
}

export const RichText = memo(RichTextImpl);
