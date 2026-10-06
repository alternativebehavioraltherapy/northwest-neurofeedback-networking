import { createFileRoute } from "@tanstack/react-router";
import { ExtLink } from "@/components/nnn-edit";
import { PageHeader, PageShell } from "@/components/page-shell";
import { PhotoCarousel } from "@/components/photo-carousel";
import { CAROUSEL_SETS, photosByIds } from "@/data/photos";
import { CIVIC_LINKS, ORG_LINKS, PARTICIPANT_RESOURCE_LINKS } from "@/data/site";

export const Route = createFileRoute("/resources")({
  head: () => ({ meta: [{ title: "Resources — Northwest Neurofeedback Networking" }] }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Links"
        title="Resources"
        deck="Field organizations, civic lookups, and participant sites. Each link opens in a new tab."
      />
      <div className="mx-auto max-w-3xl space-y-10 px-4 py-10 sm:px-6">
        <section>
          <h2 className="font-display text-2xl text-navy">Field organizations</h2>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {ORG_LINKS.map((org) => (
              <li key={org.slug} className="py-4">
                <ExtLink
                  slug={org.slug}
                  href={org.href}
                  className="font-medium text-navy underline decoration-teal underline-offset-2"
                >
                  {org.name}
                </ExtLink>
                <p className="mt-1 text-sm text-muted">{org.blurb}</p>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="font-display text-2xl text-navy">Participant sites</h2>
          <ul className="mt-4 space-y-3">
            {PARTICIPANT_RESOURCE_LINKS.map((link) => (
              <li key={link.slug}>
                <ExtLink
                  slug={link.slug}
                  href={link.href}
                  className="underline decoration-teal underline-offset-2"
                >
                  {link.name}
                </ExtLink>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="font-display text-2xl text-navy">Civic</h2>
          <ul className="mt-4 space-y-3">
            {CIVIC_LINKS.map((link) => (
              <li key={link.slug}>
                <ExtLink
                  slug={link.slug}
                  href={link.href}
                  className="underline decoration-teal underline-offset-2"
                >
                  {link.name}
                </ExtLink>
                <span className="text-sm text-muted"> — {link.blurb}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <PhotoCarousel
        photos={photosByIds(CAROUSEL_SETS.resources)}
        heading="What the instruments show"
        startIndex={0}
      />
    </PageShell>
  );
}
