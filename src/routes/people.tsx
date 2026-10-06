import { createFileRoute } from "@tanstack/react-router";
import { ExtLink, NnnEdit } from "@/components/nnn-edit";
import { PageHeader, PageShell } from "@/components/page-shell";
import { PhotoCarousel } from "@/components/photo-carousel";
import { LogoPlaceholder, PhotoPlaceholder } from "@/components/placeholder-media";
import { PROCESS_PHOTOS } from "@/data/photos";
import { PEOPLE, type PersonCard } from "@/data/site";

export const Route = createFileRoute("/people")({
  head: () => ({ meta: [{ title: "Team — Northwest Neurofeedback Networking" }] }),
  component: PeoplePage,
});

function PeoplePage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="The network"
        title="Team"
        deck="Current participants. Photos and practice logos appear when a member provides them."
      />
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-2 xl:grid-cols-3">
        {PEOPLE.map((person) => (
          <PersonBlock key={person.id} person={person} />
        ))}
      </div>
      <PhotoCarousel
        photos={PROCESS_PHOTOS}
        heading="The process in the room — member portraits appear on their cards when provided"
        startIndex={4}
      />
      <HiddenPersonHooks />
    </PageShell>
  );
}

function PersonBlock({ person }: { person: PersonCard }) {
  return (
    <article className="flex flex-col rounded-lg border border-line bg-paper p-5">
      <div className="flex flex-col items-start gap-4">
        {person.photo || !person.logos?.some((logo) => logo.banner) ? (
          <PhotoPlaceholder personId={person.id} photo={person.photo} />
        ) : null}
        {person.logos?.length ? (
          <LogoPlaceholder personId={person.id} logos={person.logos} />
        ) : null}
      </div>
      <h2 className="mt-5 font-display text-2xl text-navy">
        {person.name}
        {person.credentials ? (
          <span className="block font-sans text-sm font-medium text-muted">
            {person.credentials}
          </span>
        ) : null}
      </h2>
      <p className="mt-2 text-sm font-medium text-teal-dark">{person.role}</p>
      <p className="mt-1 text-sm text-muted">
        {person.practice ? `${person.practice} · ` : null}
        {person.city}
      </p>
      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink">
        {person.lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      {person.contactLines ? (
        <ul className="mt-3 space-y-1 text-sm text-muted">
          {person.contactLines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      ) : null}
      {person.disclaimer ? (
        <p className="mt-3 text-xs leading-relaxed text-muted">{person.disclaimer}</p>
      ) : null}
      {person.sites.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {person.sites.map((site) => (
            <ExtLink
              key={site.slug}
              slug={site.slug}
              href={site.href}
              className="inline-flex min-h-10 items-center rounded-md border border-navy px-3 py-1.5 text-sm text-navy no-underline hover:bg-cream"
            >
              {site.label}
            </ExtLink>
          ))}
        </div>
      ) : (
        <NnnEdit
          id="people.kaiser.practice_url"
          status="HOLD"
          note="none confirmed"
          className="mt-3 text-xs text-muted"
        >
          No public practice site on file.
        </NnnEdit>
      )}
    </article>
  );
}

function HiddenPersonHooks() {
  return (
    <div className="hidden" aria-hidden="true">
      <NnnEdit id="people.moore.speaking" status="CONFIRMED" note="speaking page" />
      <NnnEdit id="people.moore.beemedic" status="CONFIRMED" note="user-confirmed training partner" />
      <NnnEdit
        id="people.moore.license_number"
        status="HOLD"
        note="print LMHC; do not print a number unless he chooses LH60711967"
      />
      <NnnEdit id="people.ward.address" status="HOLD" note="site is source of truth" />
      <NnnEdit id="people.ward.extra_certs" status="HOLD" note="Amen/Access/BodyTalk off-card" />
      <NnnEdit
        id="people.hardman_woung.path_center"
        status="CONFIRMED"
        note="AKA The PATH Center; same Sandy Blvd address"
      />
      <NnnEdit
        id="people.hardman_woung.phone"
        status="CONFIRMED"
        note="971-940-2601; clinic email info@portlandneurofeedback.org"
      />
      <NnnEdit
        id="people.stewart.modality"
        status="HOLD"
        note="do not print NeurOptimal unless confirmed"
      />
      <NnnEdit
        id="people.stewart.credential_line"
        status="CONFIRMED"
        note="Certified Brain Health Coach; role listed as Neurofeedback Practitioner per member bio"
      />
      <NnnEdit
        id="people.stewart.condition_list"
        status="CONFIRMED"
        note="condition list removed; bio is member-supplied services only"
      />
    </div>
  );
}
