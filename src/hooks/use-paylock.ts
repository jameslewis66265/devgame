import { useEffect, useState } from "react";
import { initPaylock, type PaylockState } from "@/lib/paylock";

type Status = "idle" | "loading" | "ready" | "invalid";

export function usePaylock(apiKey: string | undefined) {
  const [status, setStatus] = useState<Status>("idle");
  const [state, setState] = useState<PaylockState | null>(null);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    if (!apiKey) return;
    setStatus("loading");
    initPaylock(apiKey)
      .then((data) => {
        setState(data);
        setStatus("ready");
      })
      .catch((err) => {
        setError(err);
        setStatus("invalid");
      });
  }, [apiKey]);

  return { status, state, error };
}
