export const PAYLOCK_KEYS = {
  production: "pk_live_274692d18349f3cec2cd940cb5ba1c9495f938ec3faad39117d9129e0438d1e9",
  staging: "pk_staging_8560260fc09d67fd62fab61be9c505a644094ad7e736c6a03c93c6d08b2e3138",
  development: "pk_test_5ba1e1e2782bb130eeee70bcd930e277912116b653f3c90df8c6903b41e2cbb4",
} as const;

export function getPaylockApiKey(): string {
  if (typeof window === "undefined") return PAYLOCK_KEYS.development;
  const host = window.location.hostname;
  if (host === "localhost" || host.endsWith(".local")) return PAYLOCK_KEYS.development;
  if (host.includes("staging") || host.includes("preview") || host.includes("lovable.app"))
    return PAYLOCK_KEYS.staging;
  return PAYLOCK_KEYS.production;
}
