// Skupni klic Claude API za digitalne učence in ocenjevalca (strukturiran odgovor JSON).
import Anthropic from "@anthropic-ai/sdk";

let client = null;
const getClient = () => (client ??= new Anthropic());
// Za teste: nadomestni odjemalec z enakim vmesnikom (beta.messages.stream().finalMessage()).
export const setClient = (c) => (client = c);

export const hasCredentials = () => !!(process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_AUTH_TOKEN);

const PRICES = {
  "claude-haiku-5-5": { in: 0.1, out: 0.5, cacheRead: 0.01, cacheWrite: 0.125 },
  "claude-sonnet-5-5": { in: 2, out: 10, cacheRead: 0.2, cacheWrite: 2.5 },
  "claude-opus-5-5": { in: 4, out: 20, cacheRead: 0.2, cacheWrite: 5 },
  "claude-fable-5-1": { in: 10, out: 50, cacheRead: 0.25, cacheWrite: 12.5 },
};

export function costUsd(model, u = {}) {
  const p = PRICES[model] || PRICES["claude-opus-5-5"];
  return (
    ((u.input_tokens || 0) * p.in + (u.output_tokens || 0) * p.out + (u.cache_read_input_tokens || 0) * p.cacheRead + (u.cache_creation_input_tokens || 0) * p.cacheWrite) /
    1e6
  );
}

/**
 * Pokliče model in vrne razčlenjen JSON po shemi.
 * @returns {Promise<{data: object, usage: object, model: string, cost: number}>}
 */
export async function callJson({ model, effort = "medium", system, messages, schema, maxTokens = 16000 }) {
  const params = {
    model,
    max_tokens: maxTokens,
    system: [{ type: "text", text: system, cache_control: { type: "ephemeral" } }],
    messages,
    thinking: { type: "adaptive" },
    output_config: { effort, format: { type: "json_schema", schema } },
  };
  // Haiku ne podpira nadomestnega modela ob zavrnitvi.
  if (!/haiku/.test(model)) {
    params.betas = ["server-side-fallback-2026-07-01"];
    params.fallbacks = "default";
  }
  const final = await getClient().beta.messages.stream(params).finalMessage();
  if (final.stop_reason === "refusal") throw new Error(`Model je zavrnil zahtevo (${final.stop_details?.category ?? "?"}).`);
  const text = final.content
    .filter((b) => b.type === "text")
    .map((b) => b.text)
    .join("");
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error(`Neveljaven JSON od modela: ${text.slice(0, 200)}`);
  }
  const used = final.model || model;
  return { data, usage: final.usage, model: used, cost: costUsd(used, final.usage) };
}
