import { Paylock } from "@paylock/js";

export type PaylockState = {
  projectStatus?: string;
  entitlements?: string[];
  [key: string]: unknown;
};

let bootstrapPromise: Promise<PaylockState> | null = null;

export function initPaylock(apiKey: string): Promise<PaylockState> {
  if (bootstrapPromise) return bootstrapPromise;

  bootstrapPromise = new Promise((resolve, reject) => {
    Paylock.bootstrap({
      apiKey,
      onReady: (data: PaylockState) => resolve(data),
      onInvalid: (error: unknown) => reject(error),
    });
  });

  return bootstrapPromise;
}

export function getPaylockState(): PaylockState | null {
  try {
    return (Paylock as unknown as { getState: () => PaylockState }).getState();
  } catch {
    return null;
  }
}

export { Paylock };
