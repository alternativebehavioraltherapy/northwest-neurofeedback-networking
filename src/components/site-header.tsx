import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { NnnEdit } from "@/components/nnn-edit";
import { BrandMark } from "@/components/brand-mark";
import { NAV } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="border-b border-line bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-3 no-underline"
          onClick={() => setOpen(false)}
        >
          <NnnEdit
            id="brand.logo"
            status="CONFIRMED"
            note="NNN wordmark with EEG wave; transparent PNG on paper"
            className="shrink-0"
          >
            <BrandMark
              className="h-10 w-auto max-w-[11.5rem] object-contain object-left sm:h-12 sm:max-w-[14rem]"
            />
          </NnnEdit>
          <span className="min-w-0 truncate font-sans text-xs tracking-wide text-muted sm:text-sm">
            Northwest Neurofeedback Networking
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`rounded-md px-2.5 py-2 text-sm no-underline transition-colors ${
                  active
                    ? "bg-cream text-navy font-medium"
                    : "text-ink hover:bg-cream hover:text-navy"
                }`}
              >
                {item.label}
                {"badge" in item && item.badge ? (
                  <span className="ml-1.5 rounded-full bg-cream px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-teal-dark">
                    {item.badge}
                  </span>
                ) : null}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md border border-line text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-paper px-4 py-3 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="flex min-h-11 items-center py-2.5 text-base text-navy no-underline"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                  {"badge" in item && item.badge ? (
                    <span className="ml-2 rounded-full bg-cream px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-teal-dark">
                      {item.badge}
                    </span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
