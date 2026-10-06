import { createFileRoute, Link } from "@tanstack/react-router";
import { ExtLink } from "@/components/nnn-edit";
import { PageHeader, PageShell, Prose } from "@/components/page-shell";
import { PhotoCarousel, ProcessFigure } from "@/components/photo-carousel";
import { CAROUSEL_SETS, photoById, photosByIds } from "@/data/photos";
import { CIVIC_LINKS, ORG_LINKS } from "@/data/site";

export const Route = createFileRoute("/advocate")({
  head: () => ({ meta: [{ title: "Advocate — Northwest Neurofeedback Networking" }] }),
  component: AdvocatePage,
});

function AdvocatePage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Civic participation"
        title="Advocate"
        deck="Public and professional voice around neurofeedback education and access. NNN is not a PAC and is not a registered lobbyist."
      />
      <Prose>
        <h2 className="font-display text-2xl text-navy">Why public voice matters</h2>
        <p>
          Health and mental-health policy is shaped in legislatures, county and
          city committees, and professional bodies. Accurate information and
          clear civic participation help keep that conversation honest. NNN
          does not publish a partisan slate or named bills.
        </p>
        <ProcessFigure photo={photoById("brain-maps")} />

        <h2 className="pt-4 font-display text-2xl text-navy">How to advocate locally</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Find your state legislators and county or city health and public-safety committees.</li>
          <li>Offer public comment at hearings; submit written testimony; write or call elected officials.</li>
          <li>
            Attend civic forums. City Club of Portland is one example; NNN does
            not speak for City Club.
          </li>
        </ul>
        <ul className="space-y-2 pt-2">
          {CIVIC_LINKS.map((link) => (
            <li key={link.slug}>
              <ExtLink
                slug={link.slug}
                href={link.href}
                className="underline decoration-teal underline-offset-2"
              >
                {link.name}
              </ExtLink>
              <span className="text-muted"> — {link.blurb}</span>
            </li>
          ))}
        </ul>

        <h2 className="pt-4 font-display text-2xl text-navy">How to advocate in the profession</h2>
        <p>
          Professional organizations such as AAPB and BCIA set standards and
          host education. NAP focuses on agency-capacity work with underserved
          populations. Public education — talks at libraries, civic groups, and
          classrooms — is another path. Speaking requests for NNN go through
          the{" "}
          <Link to="/lectures" className="underline decoration-teal underline-offset-2">
            Lectures
          </Link>{" "}
          page.
        </p>
        <ul className="space-y-2">
          {ORG_LINKS.map((org) => (
            <li key={org.slug}>
              <ExtLink
                slug={org.slug}
                href={org.href}
                className="underline decoration-teal underline-offset-2"
              >
                {org.name}
              </ExtLink>
            </li>
          ))}
        </ul>

        <h2 className="pt-4 font-display text-2xl text-navy">Guardrails</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Do not present personal stories as clinical proof.</li>
          <li>Do not claim neurofeedback is a covered benefit or a mandated treatment.</li>
          <li>
            When writing officials, separate “I am a patient or family member”
            from “I am a licensed clinician.”
          </li>
        </ul>

        <p className="pt-2">
          Contact NNN if you want help framing an educational talk or finding
          the right organization link. That is not clinical intake.
        </p>
        <p>
          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center rounded-md bg-navy px-5 py-2.5 text-sm font-medium text-paper no-underline hover:bg-navy-deep"
          >
            Contact NNN
          </Link>
        </p>
      </Prose>
      <PhotoCarousel
        photos={photosByIds(CAROUSEL_SETS.advocate)}
        heading="Show the process, not a promised result"
        startIndex={1}
      />
    </PageShell>
  );
}
