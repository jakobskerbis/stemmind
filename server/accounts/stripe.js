// Tanek odjemalec za Stripe REST API (brez dodatne knjižnice) in preverjanje webhookov.
import crypto from "node:crypto";
import { plansFor } from "./plans.js";

const API = "https://api.stripe.com/v1";

// {a: {b: 1}, c: [{d: 2}], e: ["x"]} -> a[b]=1&c[0][d]=2&e[0]=x
export function formEncode(obj, prefix = "", out = new URLSearchParams()) {
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined || v === null) continue;
    const key = prefix ? `${prefix}[${k}]` : k;
    if (typeof v === "object") formEncode(v, key, out);
    else out.append(key, String(v));
  }
  return out;
}

export class Stripe {
  constructor({ secretKey = process.env.STRIPE_SECRET_KEY, fetchFn = globalThis.fetch, kv } = {}) {
    this.key = secretKey;
    this.fetch = fetchFn;
    this.kv = kv; // { get(key), set(key, value) }
  }
  get enabled() {
    return !!this.key;
  }
  async request(method, path, params) {
    if (!this.key) throw new Error("STRIPE_SECRET_KEY ni nastavljen.");
    let url = API + path;
    const init = { method, headers: { Authorization: `Bearer ${this.key}`, "Stripe-Version": "2024-06-20" } };
    if (params && method === "GET") url += "?" + formEncode(params).toString();
    else if (params) {
      init.headers["Content-Type"] = "application/x-www-form-urlencoded";
      init.body = formEncode(params).toString();
    }
    const res = await this.fetch(url, init);
    const body = await res.json().catch(() => ({}));
    if (!res.ok) {
      const err = new Error(body?.error?.message || `Stripe ${res.status}`);
      err.status = res.status;
      err.stripe = body?.error;
      throw err;
    }
    return body;
  }

  // Izdelek in štiri cene v valuti (po lookup_key). Ustvari jih, če manjkajo.
  // EUR: dosedanje cene; regijske valute (INR, NGN …) imajo svoje cene istega izdelka.
  async ensurePrices(currency = "EUR") {
    const cacheKey = currency === "EUR" ? "stripe_prices" : `stripe_prices_${currency}`;
    const cached = this.kv?.get(cacheKey);
    if (cached) return JSON.parse(cached);
    const plans = plansFor(currency);
    const found = await this.request("GET", "/prices", { lookup_keys: plans.map((p) => p.key), active: "true", limit: 10 });
    const byKey = Object.fromEntries(found.data.map((p) => [p.lookup_key, p.id]));
    let product = found.data[0]?.product;
    if (!product && currency !== "EUR") product = (await this.ensurePrices("EUR")).product;
    if (!product) {
      product = (await this.request("POST", "/products", { name: "STEMMind", description: "AI inštruktor za matematiko, fiziko in kemijo" })).id;
    }
    for (const plan of plans) {
      if (byKey[plan.key]) continue;
      const price = await this.request("POST", "/prices", {
        product,
        currency: currency.toLowerCase(),
        unit_amount: plan.amount,
        tax_behavior: "inclusive",
        lookup_key: plan.key,
        nickname: currency === "EUR" ? plan.label : `${plan.label} (${currency})`,
        recurring: { interval: plan.interval },
        metadata: { seats: plan.seats },
      });
      byKey[plan.key] = price.id;
    }
    const result = { product, prices: byKey };
    this.kv?.set(cacheKey, JSON.stringify(result));
    return result;
  }

  // Nastavitve portala za stranke: preklop paketa, odpoved, kartica, računi.
  async ensurePortalConfig() {
    const cached = this.kv?.get("stripe_portal_config");
    if (cached) return cached;
    const { product, prices } = await this.ensurePrices();
    const conf = await this.request("POST", "/billing_portal/configurations", {
      business_profile: { headline: "STEMMind – upravljanje naročnine" },
      features: {
        customer_update: { enabled: true, allowed_updates: ["email", "address", "name"] },
        invoice_history: { enabled: true },
        payment_method_update: { enabled: true },
        subscription_cancel: { enabled: true, mode: "at_period_end" },
        subscription_update: {
          enabled: true,
          default_allowed_updates: ["price"],
          proration_behavior: "create_prorations",
          products: [{ product, prices: Object.values(prices) }],
        },
      },
    });
    this.kv?.set("stripe_portal_config", conf.id);
    return conf.id;
  }
}

// Preverjanje podpisa Stripe-Signature: t=…,v1=…
export function verifyWebhook(rawBody, header, secret, toleranceSec = 300, now = Date.now()) {
  if (!secret || !header) return false;
  let t = null;
  const sigs = [];
  for (const item of String(header).split(",")) {
    const [k, v] = item.split("=");
    if (k === "t") t = Number(v);
    if (k === "v1") sigs.push(v);
  }
  if (!t || !sigs.length || Math.abs(now / 1000 - t) > toleranceSec) return false;
  const expected = crypto.createHmac("sha256", secret).update(`${t}.${rawBody}`).digest("hex");
  return sigs.some((s) => s.length === expected.length && crypto.timingSafeEqual(Buffer.from(s), Buffer.from(expected)));
}

export function signWebhook(rawBody, secret, t = Math.floor(Date.now() / 1000)) {
  const v1 = crypto.createHmac("sha256", secret).update(`${t}.${rawBody}`).digest("hex");
  return `t=${t},v1=${v1}`;
}
