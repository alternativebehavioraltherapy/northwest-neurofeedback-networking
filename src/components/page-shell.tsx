import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-cream text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-paper focus:px-3 focus:py-2 focus:text-navy"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  deck,
}: {
  eyebrow?: string;
  title: string;
  deck?: string;
}) {
  return (
    <header className="border-b border-line bg-paper">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        {eyebrow ? (
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-teal-dark">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-display text-3xl text-navy sm:text-4xl">{title}</h1>
        {deck ? <p className="mt-4 text-lg text-muted">{deck}</p> : null}
      </div>
    </header>
  );
}

export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-12">
      <div className="space-y-5 text-base leading-relaxed text-ink">{children}</div>
    </div>
  );
}
