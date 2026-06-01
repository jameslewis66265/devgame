import { createFileRoute } from "@tanstack/react-router";
import { usePaylock } from "@/hooks/use-paylock";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paylock Demo" },
      { name: "description", content: "Paylock React SDK integration demo." },
    ],
  }),
  component: Index,
});

function Index() {
  const apiKey = import.meta.env.VITE_PAYLOCK_API_KEY as string | undefined;
  const { status, state, error } = usePaylock(apiKey);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6">
      <div className="w-full max-w-xl rounded-lg border border-border bg-card p-8 shadow-sm">
        <h1 className="text-2xl font-semibold text-foreground">Paylock SDK</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          @paylock/js installed and wired into React.
        </p>

        <div className="mt-6 space-y-3 text-sm">
          {!apiKey && (
            <p className="rounded-md bg-muted p-3 text-muted-foreground">
              Set <code className="font-mono">VITE_PAYLOCK_API_KEY</code> to bootstrap.
            </p>
          )}
          {status === "loading" && <p>Initializing Paylock…</p>}
          {status === "ready" && (
            <pre className="overflow-auto rounded-md bg-muted p-3 text-xs">
              {JSON.stringify(state, null, 2)}
            </pre>
          )}
          {status === "invalid" && (
            <p className="text-destructive">
              License invalid: {String((error as Error)?.message ?? error)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
