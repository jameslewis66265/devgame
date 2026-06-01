import { Paylock } from "@paylock/js";

export type PaylockState = {
  projectStatus?: string;
  entitlements?: string[];
  [key: string]: unknown;
};

export type PaylockBootstrapOptions = {
  projectId: string;
  projectSecret: string;
  licenseKey?: string;
  invalidBehavior?: "modal" | "redirect" | "soft";
};

let bootstrapPromise: Promise<PaylockState> | null = null;

export function initPaylock(opts: PaylockBootstrapOptions): Promise<PaylockState> {
  if (bootstrapPromise) return bootstrapPromise;

  bootstrapPromise = new Promise((resolve, reject) => {
    Paylock.bootstrap({
      projectId: opts.projectId,
      projectSecret: opts.projectSecret,
      licenseKey: opts.licenseKey,
      invalidBehavior: opts.invalidBehavior ?? "modal",
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
