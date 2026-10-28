// Klic Claude API (pretakanje), izbira modela, strošek, preizkusni način.
import Anthropic from "@anthropic-ai/sdk";
import { systemBlocks } from "./prompt.js";

const env = (k, d) => (process.env[k] === undefined || process.env[k] === "" ? d : process.env[k]);

// Privzeto poceni hiter model; zmogljivejši za »Razloži podrobneje« in tekmovanja.
export const MODEL = env("STEMMIND_MODEL", "claude-haiku-5-5");
export const MODEL_DEEP = env("STEMMIND_MODEL_DEEP", "claude-opus-5-5");
const EFFORT = env("STEMMIND_EFFORT", "low");
// »Razloži podrobneje« je druga razlaga snovi, ne težko sklepanje: Opus pri effort low
// razloži enako dobro z manj razmišljanja (manj izhodnih žetonov). Prej: medium.
const EFFORT_DEEP = env("STEMMIND_EFFORT_DEEP", "low");
// Stalni del prompta za Opus ostane v predpomnilniku 1 uro (klici Opusa so redki,
// 5 minut bi pogosto poteklo in vsakič bi znova plačali zapis).
const DEEP_CACHE_TTL = env("STEMMIND_DEEP_CACHE_TTL", "1h");
// Hitri model z več razmisleka: Tekmovanja in »Razloži podrobneje«, ko je dnevna
// ali mesečna omejitev za zmogljivejši model porabljena.
const EFFORT_THINK = env("STEMMIND_EFFORT_THINK", "high");

// Največ žetonov odgovora (z razmišljanjem vred) po načinu. Preprečuje predolge
// (in drage) odgovore; običajen odgovor inštruktorja ima nekaj sto žetonov.
export const MAX_TOKENS = {
  chat: Number(env("STEMMIND_MAX_TOKENS", 3000)),
  lite: Number(env("STEMMIND_MAX_TOKENS_LITE", 1200)),
  think: Number(env("STEMMIND_MAX_TOKENS_THINK", 5000)),
  deep: Number(env("STEMMIND_MAX_TOKENS_DEEP", 6000)),
};

// Način klica: "chat" (Haiku, malo razmisleka), "lite" (Haiku, kratko),
// "think" (Haiku, več razmisleka), "deep" (Opus).
export function modeParams(mode = "chat") {
  if (mode === "deep") return { model: MODEL_DEEP, effort: EFFORT_DEEP, max_tokens: MAX_TOKENS.deep };
  if (mode === "think") return { model: MODEL, effort: EFFORT_THINK, max_tokens: MAX_TOKENS.think };
  if (mode === "lite") return { model: MODEL, effort: EFFORT, max_tokens: MAX_TOKENS.lite };
  return { model: MODEL, effort: EFFORT, max_tokens: MAX_TOKENS.chat };
}

// Cene v USD na milijon žetonov (vhod, izhod, branje predpomnilnika, zapis v predpomnilnik).
// Preveri na https://claude.com/pricing in po potrebi popravi.
export const PRICES = {
  "claude-haiku-5-5": { in: 0.1, out: 0.5, cacheRead: 0.01, cacheWrite: 0.125 },
  "claude-sonnet-5-5": { in: 2, out: 10, cacheRead: 0.2, cacheWrite: 2.5 },
  "claude-opus-5-5": { in: 4, out: 20, cacheRead: 0.2, cacheWrite: 5 },
  "claude-fable-5-1": { in: 10, out: 50, cacheRead: 0.25, cacheWrite: 12.5 },
};

export function costUsd(model, u) {
  const p = PRICES[model] || PRICES["claude-opus-5-5"];
  return (
    ((u.input_tokens || 0) * p.in +
      (u.output_tokens || 0) * p.out +
      (u.cache_read_input_tokens || 0) * p.cacheRead +
      (u.cache_creation_input_tokens || 0) * p.cacheWrite) /
    1e6
  );
}

export const REFUSAL_TEXT =
  "Pri tem ti žal ne morem pomagati. Lahko pa skupaj rešiva kakšno nalogo iz matematike, fizike ali kemije – kaj imaš pred sabo?";
export const ERROR_TEXT = "Ups, nekaj je šlo narobe pri povezavi. Poskusi znova čez trenutek.";

export function isMockMode() {
  if (process.env.STEMMIND_MOCK === "1") return true;
  return !process.env.ANTHROPIC_API_KEY && !process.env.ANTHROPIC_AUTH_TOKEN;
}

let client = null;
export function getClient() {
  if (!client) client = new Anthropic();
  return client;
}

// Kratka opravila (prepis, anketa): brez razmišljanja, kjer model to dovoli
// (Haiku 5.5 pri effort low); Opus 5.5 razmišljanja ne dovoli izklopiti.
export function quickParams(model) {
  return /haiku/.test(model) ? { thinking: { type: "disabled" }, output_config: { effort: "low" } } : { output_config: { effort: "low" } };
}

// Strežniški nadomestni model ob zavrnitvi podpirajo modeli Opus/Sonnet/Fable, Haiku ne.
const supportsFallback = (model) => !/haiku/.test(model);

/**
 * Pretoči odgovor modela.
 * @returns {Promise<{content, text, stopReason, usage, model}>}
 */
export async function streamReply({ system, messages, deep = false, mode = deep ? "deep" : "chat", onText, signal }) {
  const { model, effort, max_tokens } = modeParams(mode);
  if (isMockMode()) return mockReply({ messages, onText, signal, model });

  const params = {
    model,
    max_tokens,
    // Stalni del prompta (enak za vse učence) ima svojo oznako predpomnilnika,
    // zato se deli med vsemi pogovori; nastavitve učenca so v drugem bloku.
    system: typeof system === "string" ? systemBlocks(system, { ttl: mode === "deep" && DEEP_CACHE_TTL === "1h" ? "1h" : null }) : system,
    messages,
    thinking: { type: "adaptive" },
    output_config: { effort },
    // Samodejni predpomnilnik še za zgodovino pogovora: ob naslednjem
    // sporočilu se prebere iz predpomnilnika za ~10 % cene.
    cache_control: { type: "ephemeral" },
  };
  if (supportsFallback(model)) {
    params.betas = ["server-side-fallback-2026-07-01"];
    params.fallbacks = "default";
  }

  const stream = getClient().beta.messages.stream(params, { signal });
  for await (const event of stream) {
    if (event.type === "content_block_delta" && event.delta.type === "text_delta") onText(event.delta.text);
  }
  const final = await stream.finalMessage();
  const text = final.content
    .filter((b) => b.type === "text")
    .map((b) => b.text)
    .join("");
  return { content: final.content, text, stopReason: final.stop_reason, usage: final.usage, model: final.model || model };
}

// ---------------------------------------------------------------------------
// Preizkusni način: brez API ključa vrne vnaprej pripravljen odgovor.

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
    return '»Žal ti teh informacij o svojem delovanju ne morem razkriti. 🛡️ Sem tvoj osebni AI inštruktor za naravoslovne predmete. Povej mi raje, katero nalogo rešuješ, da jo pogledava skupaj!«\n<<META subject=MAT topic="-" error=0 mode=A flag=injection done=0>>';
  }
  if (/kemij/.test(t)) {
    return 'Prav, preklopil sem na kemijo. 🧪\n\nKatero nalogo imaš? Napiši jo ali jo fotografiraj.\n<<META subject=KEM topic="-" error=0 mode=A flag=none done=0>>';
  }
  if (/x\s*=\s*4|rezultat je 4/.test(t)) {
    return 'Ni čisto prav, a si blizu. Poglej drugi korak: ko si odštel $3$ na obeh straneh, koliko ostane na desni?\n<<META subject=MAT topic="linearne enačbe" error=1 mode=A flag=none done=0>>';
  }
  if (/začniva s temo/.test(t)) {
    return "*(Preizkusni način.)*\n\nPreden razložim: kaj že veš o tej temi? Poskusi odgovoriti na kratko vprašanje:\n\nKoliko je $3 \\cdot 4$?\n" + '<<META subject=MAT topic="-" error=0 mode=A flag=none done=0>>';
  }
  return (
    "*(Preizkusni način – brez povezave s Claude.)*\n\n" +
    "Poglejva skupaj. Pri enačbi $2x + 3 = 11$ želimo, da $x$ ostane sam.\n\n" +
    "Kaj bi naredil najprej, da se znebiš števila $3$ na levi strani?\n" +
    '<<META subject=MAT topic="linearne enačbe" error=0 mode=A flag=none done=0>>'
  );
}

async function mockReply({ messages, onText, signal, model }) {
  const text = mockAnswer(lastUserText(messages));
  const delay = Number(process.env.STEMMIND_MOCK_DELAY_MS ?? 15);
  for (let i = 0; i < text.length; i += 6) {
    if (signal?.aborted) break;
    onText(text.slice(i, i + 6));
    if (delay) await new Promise((r) => setTimeout(r, delay));
  }
  return { content: [{ type: "text", text }], text, stopReason: "end_turn", usage: { input_tokens: 0, output_tokens: 0 }, model };
}

// ---------------------------------------------------------------------------
// Branje rokopisa: učenec odgovor napiše s prstom ali miško, model ga prepiše.
// Model NE preverja pravilnosti (to naredi koda), samo prebere zapisano.

const OCR_MODEL = env("STEMMIND_OCR_MODEL", MODEL);

export async function readHandwriting({ imageBase64, mediaType = "image/png", answerType = "number", unit = null }) {
  if (isMockMode()) return { text: null, mock: true, usage: null, model: OCR_MODEL };
  const kind =
    answerType === "fraction"
      ? "ulomek (zapiši kot a/b)"
      : answerType === "coefficients"
        ? "zaporedje koeficientov, ločenih z vejico (npr. 2, 1, 2)"
        : unit
          ? `število z enoto (npr. 12,5 ${unit})`
          : "število ali kratek izraz";
  const final = await getClient().messages.create({
    model: OCR_MODEL,
    max_tokens: 200,
    // Samo prepis: brez razmišljanja (manj izhodnih žetonov, odgovor se ne odreže).
    ...quickParams(OCR_MODEL),
    messages: [
      {
        role: "user",
        content: [
          { type: "image", source: { type: "base64", media_type: mediaType, data: imageBase64 } },
          {
            type: "text",
            text:
              `Na sliki je učenčev ročno napisan zapis pri nalogi iz matematike, fizike ali kemije. Pričakovan odgovor je ${kind}.\n` +
              "Prepiši KONČNI odgovor točno tako, kot je napisan (tudi če je napačen). Ne računaj in ne popravljaj. " +
              "Decimalno vejico zapiši z vejico. Če je zapisanih več vrstic, je končni odgovor običajno zadnja vrstica ali zapis za »=«.\n" +
              "Odgovori samo z eno vrstico: <odgovor>prepis</odgovor>. Če zapisa ni mogoče prebrati, odgovori <odgovor>?</odgovor>.",
          },
        ],
      },
    ],
  });
  const raw = final.content.filter((b) => b.type === "text").map((b) => b.text).join("");
  const m = raw.match(/<odgovor>([\s\S]*?)<\/odgovor>/);
  let text = (m ? m[1] : raw).trim().slice(0, 80);
  if (!text || text === "?") text = null;
  return { text, usage: final.usage, model: final.model || OCR_MODEL };
}
