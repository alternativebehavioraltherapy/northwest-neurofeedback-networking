import { createFileRoute } from "@tanstack/react-router";
import { ExtLink } from "@/components/nnn-edit";
import { PageHeader, PageShell } from "@/components/page-shell";
import { PhotoCarousel } from "@/components/photo-carousel";
import { CAROUSEL_SETS, photosByIds } from "@/data/photos";
import { CONTACT } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Northwest Neurofeedback Networking" }] }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Program contact"
        title="Contact"
        deck="Joshua Moore manages NNN. Call or email Alternative Behavioral Therapy staff, who receive NNN correspondence."
      />
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <div className="rounded-lg border border-line bg-paper p-6 sm:p-8">
          <p className="text-xs font-medium uppercase tracking-widest text-teal-dark">
            Call or email
          </p>
          <p className="mt-4">
            <a
              href={CONTACT.phoneHref}
              className="block font-display text-3xl font-bold text-navy no-underline hover:text-teal-dark sm:text-4xl"
            >
              {CONTACT.phone}
            </a>
          </p>
          <p className="mt-3">
            <a
              href={CONTACT.emailHref}
              className="block break-all text-xl font-bold text-navy no-underline hover:text-teal-dark sm:text-2xl"
            >
              {CONTACT.email}
            </a>
          </p>
          <p className="mt-6 text-sm text-muted">
            This is advocacy and education contact, not a clinical intake line
            for NNN.
          </p>
        </div>

        <address className="mt-8 not-italic text-base leading-relaxed">
          <p className="font-display text-2xl text-navy">{CONTACT.orgLine}</p>
          <p className="mt-3">
            {CONTACT.careOf}
            <br />
            {CONTACT.address1}
            <br />
            {CONTACT.address2}
          </p>
          <p className="mt-4 text-sm text-muted">
            Web{" "}
            <ExtLink
              slug="abt"
              href={CONTACT.web}
              className="underline decoration-teal underline-offset-2"
            >
              {CONTACT.webLabel}
            </ExtLink>
          </p>
        </address>
      </div>
      <PhotoCarousel
        photos={photosByIds(CAROUSEL_SETS.contact)}
        heading="A look at the rooms behind the work"
        startIndex={0}
      />
    </PageShell>
  );
}
