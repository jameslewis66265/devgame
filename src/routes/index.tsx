import { createFileRoute, Link } from "@tanstack/react-router";
import { Trophy, Zap, Code2, Target, Sparkles, ArrowRight, Github, Twitter } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DevGame — Level up your engineering team" },
      {
        name: "description",
        content:
          "DevGame turns pull requests, deploys, and reviews into XP. Gamify your dev workflow and ship faster.",
      },
      { property: "og:title", content: "DevGame — Level up your engineering team" },
      {
        property: "og:description",
        content: "Gamify pull requests, deploys, and reviews. Ship faster with DevGame.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Logos />
      <Features />
      <HowItWorks />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-md bg-gradient-primary shadow-glow">
            <Code2 className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold tracking-tight">DevGame</span>
        </Link>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#features" className="hover:text-foreground">Features</a>
          <a href="#how" className="hover:text-foreground">How it works</a>
          <a href="#pricing" className="hover:text-foreground">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="hidden text-sm text-muted-foreground hover:text-foreground sm:inline">
            Sign in
          </a>
          <a
            href="#cta"
            className="inline-flex items-center gap-1.5 rounded-md bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
          >
            Get started <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <Sparkles className="h-3 w-3 text-primary" /> New: Season 1 leaderboards
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Turn your dev workflow <span className="text-gradient">into a game.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            DevGame plugs into GitHub, Linear & CI to award XP for the work that actually
            ships. Quests, streaks, and team leaderboards built for engineers.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              Start free trial <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-6 py-3 text-sm font-medium text-foreground backdrop-blur hover:bg-card"
            >
              See how it works
            </a>
          </div>
        </div>

        <HeroPreview />
      </div>
    </section>
  );
}

function HeroPreview() {
  return (
    <div className="relative mx-auto mt-20 max-w-4xl">
      <div className="rounded-2xl border border-border bg-card/80 p-2 shadow-card backdrop-blur">
        <div className="rounded-xl bg-background/80 p-6 font-mono text-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-chart-4/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
            <span className="ml-3 text-xs text-muted-foreground">devgame ~ season 1</span>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {[
              { name: "@ada", xp: 4820, rank: 1 },
              { name: "@linus", xp: 4310, rank: 2 },
              { name: "@grace", xp: 3990, rank: 3 },
            ].map((p) => (
              <div key={p.name} className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>#{p.rank}</span>
                  <Trophy className="h-3.5 w-3.5 text-primary" />
                </div>
                <div className="mt-2 text-base text-foreground">{p.name}</div>
                <div className="mt-1 text-2xl font-bold text-gradient">{p.xp} XP</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute -inset-x-12 -bottom-12 h-40 bg-gradient-primary opacity-20 blur-3xl" />
    </div>
  );
}

function Logos() {
  const names = ["Acme", "Vercel", "Linear", "Stripe", "Notion", "Supabase"];
  return (
    <section className="border-y border-border/60 bg-card/30 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs uppercase tracking-widest text-muted-foreground">
          Trusted by engineering teams at
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-70">
          {names.map((n) => (
            <span key={n} className="font-display text-lg font-semibold text-muted-foreground">
              {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    {
      icon: Trophy,
      title: "XP for real work",
      body: "Merged PRs, code reviews, green deploys, and resolved incidents all earn XP automatically.",
    },
    {
      icon: Target,
      title: "Weekly quests",
      body: "Ship a feature, kill a flaky test, mentor a teammate. Quests align rewards with team goals.",
    },
    {
      icon: Zap,
      title: "Streaks & combos",
      body: "Daily commit streaks and review combos keep momentum high without the burnout.",
    },
    {
      icon: Sparkles,
      title: "Team seasons",
      body: "Quarterly leaderboards reset the playing field so new joiners can climb fast.",
    },
    {
      icon: Code2,
      title: "Native integrations",
      body: "GitHub, GitLab, Linear, Jira, Slack, and your CI of choice. Setup in under 5 minutes.",
    },
    {
      icon: ArrowRight,
      title: "Engineering insights",
      body: "See where momentum is building and where bottlenecks live, without surveillance vibes.",
    },
  ];
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          Built for teams that <span className="text-gradient">ship</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Every feature is designed to celebrate the engineering work that already matters.
        </p>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((f) => (
          <div
            key={f.title}
            className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow"
          >
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-primary text-primary-foreground">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", title: "Connect your stack", body: "Plug in GitHub, Linear, and Slack with a click." },
    { n: "02", title: "Pick your quests", body: "Choose XP rules and seasonal goals for your team." },
    { n: "03", title: "Ship & level up", body: "Watch the leaderboard light up as PRs merge." },
  ];
  return (
    <section id="how" className="border-y border-border/60 bg-card/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">From zero to season one</h2>
          <p className="mt-4 text-muted-foreground">Setup takes a coffee break, not a sprint.</p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-xl border border-border bg-background p-8">
              <span className="font-mono text-sm text-primary">{s.n}</span>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    {
      name: "Indie",
      price: "$0",
      desc: "For solo devs and small squads.",
      features: ["Up to 5 players", "GitHub integration", "Weekly quests"],
      cta: "Start free",
      featured: false,
    },
    {
      name: "Studio",
      price: "$12",
      desc: "Per player / month. Everything to keep your team leveling.",
      features: ["Unlimited quests", "Seasons & leaderboards", "Slack + Linear", "Insights dashboard"],
      cta: "Start trial",
      featured: true,
    },
    {
      name: "Guild",
      price: "Custom",
      desc: "For larger orgs that need SSO & SLAs.",
      features: ["SAML SSO", "Audit logs", "Priority support", "Custom integrations"],
      cta: "Talk to us",
      featured: false,
    },
  ];
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Simple pricing</h2>
        <p className="mt-4 text-muted-foreground">Start free. Upgrade when your team levels up.</p>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`rounded-2xl border p-8 ${
              t.featured
                ? "border-primary/60 bg-card shadow-glow"
                : "border-border bg-card"
            }`}
          >
            <div className="flex items-baseline justify-between">
              <h3 className="text-lg font-semibold">{t.name}</h3>
              {t.featured && (
                <span className="rounded-full bg-gradient-primary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                  Popular
                </span>
              )}
            </div>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-bold">{t.price}</span>
              {t.price !== "Custom" && (
                <span className="text-sm text-muted-foreground">/ player</span>
              )}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
            <ul className="mt-6 space-y-2 text-sm">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {f}
                </li>
              ))}
            </ul>
            <a
              href="#cta"
              className={`mt-8 inline-flex w-full items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                t.featured
                  ? "bg-gradient-primary text-primary-foreground"
                  : "border border-border bg-background text-foreground hover:bg-secondary"
              }`}
            >
              {t.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="mx-auto max-w-5xl px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-12 text-center shadow-card">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -top-20 left-1/2 h-40 w-2/3 -translate-x-1/2 bg-gradient-primary opacity-30 blur-3xl" />
        <div className="relative">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Ready to <span className="text-gradient">press start?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Join 1,200+ engineering teams making shipping feel less like a chore.
          </p>
          <form className="mx-auto mt-8 flex max-w-md flex-col gap-2 sm:flex-row">
            <input
              type="email"
              required
              placeholder="you@yourcompany.com"
              className="flex-1 rounded-md border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              className="rounded-md bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              Get started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="grid h-6 w-6 place-items-center rounded bg-gradient-primary">
            <Code2 className="h-3 w-3 text-primary-foreground" />
          </div>
          © {new Date().getFullYear()} DevGame. All rights reserved.
        </div>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="#" aria-label="GitHub" className="hover:text-foreground">
            <Github className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-foreground">
            <Twitter className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
