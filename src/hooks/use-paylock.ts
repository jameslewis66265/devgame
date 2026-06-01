import { useEffect, useState } from "react";
import { initPaylock, type PaylockBootstrapOptions, type PaylockState } from "@/lib/paylock";

type Status = "idle" | "loading" | "ready" | "invalid";

export function usePaylock(opts: PaylockBootstrapOptions | null | undefined) {
  const [status, setStatus] = useState<Status>("idle");
  const [state, setState] = useState<PaylockState | null>(null);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    if (!opts?.projectId || !opts.projectSecret) return;
    setStatus("loading");
    initPaylock(opts)
      .then((data) => {
        setState(data);
        setStatus("ready");
      })
      .catch((err) => {
        setError(err);
        setStatus("invalid");
      });
  }, [opts?.projectId, opts?.projectSecret, opts?.licenseKey, opts?.invalidBehavior]);

  return { status, state, error };
}
