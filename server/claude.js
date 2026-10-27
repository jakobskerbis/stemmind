// Klic Claude API (pretakanje) in preizkusni način brez ključa.
import Anthropic from "@anthropic-ai/sdk";

export const MODEL = process.env.STEMMIND_MODEL || "claude-opus-5-5";
// Inštruiranje je pogovor, zato je "medium" razumna osnova; za
// tekmovalne naloge strežnik zviša na "high".
const EFFORT = process.env.STEMMIND_EFFORT || "medium";
const EFFORT_COMPETITION = process.env.STEMMIND_EFFORT_COMPETITION || "high";

export const REFUSAL_TEXT =
  "Pri tem ti žal ne morem pomagati. Lahko pa skupaj rešiva kakšno nalogo iz matematike, fizike ali kemije – kaj imaš pred sabo?";
export const ERROR_TEXT = "Ups, nekaj je šlo narobe pri povezavi. Poskusi znova čez trenutek.";

export function isMockMode() {
  if (process.env.STEMMIND_MOCK === "1") return true;
  return !process.env.ANTHROPIC_API_KEY && !process.env.ANTHROPIC_AUTH_TOKEN;
}

let client = null;
function getClient() {
  if (!client) client = new Anthropic();
  return client;
}

/**
 * Pretoči odgovor modela.
 * @returns {Promise<{content: Array, text: string, stopReason: string}>}
 *   content = bloki za zgodovino (nespremenjeni), text = surovo besedilo z META.
 */
export async function streamReply({ system, messages, competition = false, onText, signal }) {
  if (isMockMode()) return mockReply({ messages, onText, signal });

  const stream = getClient().beta.messages.stream(
    {
      model: MODEL,
      max_tokens: 64000,
      system,
      messages,
      thinking: { type: "adaptive" },
      output_config: { effort: competition ? EFFORT_COMPETITION : EFFORT },
      // Če model zahtevo zavrne iz varnostnih razlogov, jo strežnik
      // samodejno preusmeri na privzeti nadomestni model.
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
    },
    { signal },
  );

  for await (const event of stream) {
    if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
      onText(event.delta.text);
    }
  }
  const final = await stream.finalMessage();
  const text = final.content
    .filter((b) => b.type === "text")
    .map((b) => b.text)
    .join("");
  return { content: final.content, text, stopReason: final.stop_reason };
}

// ---------------------------------------------------------------------------
// Preizkusni način: brez API ključa vrne vnaprej pripravljen odgovor, da lahko
// preizkusiš vmesnik, shranjevanje in analitiko.

function lastUserText(messages) {
  const last = messages[messages.length - 1];
  if (!last) return "";
  if (typeof last.content === "string") return last.content;
  return last.content
    .filter((b) => b.type === "text")
    .map((b) => b.text)
    .join(" ");
}

function mockAnswer(userText) {
  const t = userText.toLowerCase();
  if (/sistemsk|prompt|navodil|ignoriraj/.test(t)) {
    return '»Žal ti teh informacij o svojem delovanju ne morem razkriti. 🛡️ Sem tvoj osebni AI inštruktor za naravoslovne predmete. Povej mi raje, katero nalogo rešuješ, da jo pogledava skupaj!«\n<<META subject=MAT topic="-" error=0 mode=A flag=injection>>';
  }
  if (/kemij/.test(t)) {
    return 'Prav, preklopil sem na kemijo. 🧪\n\nKatero nalogo imaš? Napiši jo ali jo fotografiraj.\n<<META subject=KEM topic="-" error=0 mode=A flag=none>>';
  }
  if (/x\s*=\s*4|rezultat je 4/.test(t)) {
    return 'Ni čisto prav, a si blizu. Poglej drugi korak: ko si odštel $3$ na obeh straneh, koliko ostane na desni?\n<<META subject=MAT topic="linearne enačbe" error=1 mode=A flag=none>>';
  }
  return (
    "*(Preizkusni način – brez povezave s Claude.)*\n\n" +
    "Poglejva skupaj. Pri enačbi $2x + 3 = 11$ želimo, da $x$ ostane sam.\n\n" +
    "Kaj bi naredil najprej, da se znebiš števila $3$ na levi strani?\n" +
    '<<META subject=MAT topic="linearne enačbe" error=0 mode=A flag=none>>'
  );
}

async function mockReply({ messages, onText, signal }) {
  const text = mockAnswer(lastUserText(messages));
  const delay = Number(process.env.STEMMIND_MOCK_DELAY_MS ?? 15);
  for (let i = 0; i < text.length; i += 6) {
    if (signal?.aborted) break;
    onText(text.slice(i, i + 6));
    if (delay) await new Promise((r) => setTimeout(r, delay));
  }
  return { content: [{ type: "text", text }], text, stopReason: "end_turn" };
}
