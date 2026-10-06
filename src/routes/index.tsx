import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Landmark, Users } from "lucide-react";
import { NnnEdit } from "@/components/nnn-edit";
import { BrandMark } from "@/components/brand-mark";
import { PageShell } from "@/components/page-shell";
import { PhotoCarousel, ProcessFigure } from "@/components/photo-carousel";
import { CAROUSEL_SETS, photoById, photosByIds } from "@/data/photos";
import { MISSION } from "@/data/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <PageShell>
      {/*
        HOLD items still empty (edit via data-nnn-id hooks):
        org.legal_form, study.irb, people.kaiser.practice_url,
        people.moore.license_number, people.ward.address,
        people.ward.extra_certs, people.hardman_woung.path_center,
        people.hardman_woung.phone, people.stewart.modality
      */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-teal-dark">
              Oregon and Washington
            </p>
            <h1 className="mt-3 font-display text-4xl text-navy sm:text-5xl">
              Northwest Neurofeedback Networking
            </h1>
            <NnnEdit
              id="org.mission_paragraph"
              status="CONFIRMED"
              note="current one-liner only; replace when they write a longer purpose"
            >
              <p className="mt-5 max-w-xl text-lg text-muted">{MISSION}</p>
            </NnnEdit>
            <NnnEdit
              id="org.service_area"
              status="CONFIRMED"
              note="OR/WA; add ID/MT/BC only if later specified"
            >
              <p className="mt-4 max-w-xl text-base text-ink">
                An Oregon and Washington advocacy network for education, civic
                voice, and professional connection around neurofeedback.
              </p>
            </NnnEdit>
            <p className="mt-4 max-w-xl text-base text-ink">
              NNN does not provide treatment. It helps the public and
              practitioners find accurate information, civic channels, and one
              another.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/advocate"
                className="inline-flex min-h-11 items-center rounded-md bg-navy px-5 py-2.5 text-sm font-medium text-paper no-underline hover:bg-navy-deep"
              >
                Advocate
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-11 items-center rounded-md border border-navy px-5 py-2.5 text-sm font-medium text-navy no-underline hover:bg-cream"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <BrandMark
              alt="NNN wordmark with an EEG wave through the letters"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-4 py-12 sm:px-6 md:grid-cols-3">
        <HomeCard
          to="/neurofeedback"
          icon={<BookOpen className="size-5" aria-hidden />}
          title="Learn"
          body="A plain-language explanation of what neurofeedback is — and how clinical practice differs from general-wellness training."
        />
        <HomeCard
          to="/advocate"
          icon={<Landmark className="size-5" aria-hidden />}
          title="Advocate"
          body="Civic paths in Oregon and Washington: legislators, hearings, professional organizations, and public education."
        />
        <HomeCard
          to="/people"
          icon={<Users className="size-5" aria-hidden />}
          title="Meet the team"
          body="Current participants, with links to their own sites. Photos and practice logos will be added after permission."
        />
      </section>

      <div className="mx-auto grid max-w-6xl gap-6 px-4 pb-4 sm:px-6 md:grid-cols-2">
        <ProcessFigure photo={photoById("eeg-traces")} />
        <ProcessFigure photo={photoById("cap-front")} />
      </div>

      <PhotoCarousel
        photos={photosByIds(CAROUSEL_SETS.home)}
        heading="What neurofeedback can look like"
      />
    </PageShell>
  );
}

function HomeCard({
  to,
  icon,
  title,
  body,
}: {
  to: "/neurofeedback" | "/advocate" | "/people";
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <Link
      to={to}
      className="group rounded-lg border border-line bg-paper p-6 no-underline transition-colors hover:border-teal"
    >
      <span className="inline-flex size-10 items-center justify-center rounded-md bg-cream text-teal-dark">
        {icon}
      </span>
      <h2 className="mt-4 font-display text-2xl text-navy">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
      <span className="mt-4 inline-block text-sm font-medium text-teal-dark group-hover:underline">
        Continue
      </span>
    </Link>
  );
}
