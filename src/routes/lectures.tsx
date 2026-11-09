import { createFileRoute, Link } from "@tanstack/react-router";
import { NnnEdit } from "@/components/nnn-edit";
import { PageHeader, PageShell } from "@/components/page-shell";
import { PhotoCarousel } from "@/components/photo-carousel";
import { CAROUSEL_SETS, photosByIds } from "@/data/photos";
import { LEAD_LECTURE, PUBLISHED_LECTURES, youtubeEmbedId, type Lecture } from "@/data/lectures";
import { CONTACT } from "@/data/site";

export const Route = createFileRoute("/lectures")({
  head: () => ({
    meta: [{ title: "Lectures & Courses — Northwest Neurofeedback Networking" }],
  }),
  component: LecturesPage,
});

function LecturesPage() {
  const lectures = PUBLISHED_LECTURES;

  return (
    <PageShell>
      <PageHeader
        eyebrow="Free education"
        title="Lectures and courses"
        deck="Recorded talks and short courses from NNN members. Educational only — not treatment and not a consult."
      />

      <div className="mx-auto max-w-5xl space-y-8 px-4 py-10 sm:px-6">
        <NnnEdit
          id="lectures.catalog"
          status="CONFIRMED"
          note="lead is Trauma Class Pt 1; ward ORPARC video is second"
        >
          <div className="space-y-8">
            {LEAD_LECTURE?.published ? (
              <LectureCard lecture={LEAD_LECTURE} linkToLearn />
            ) : (
              <EmptyLectureSlot
                label={LEAD_LECTURE?.title ?? "Featured lecture"}
                hint={
                  LEAD_LECTURE?.description ??
                  "Reserved for the next NNN lecture."
                }
              />
            )}
            {lectures
              .filter((lecture) => lecture.id !== LEAD_LECTURE?.id)
              .map((lecture) => (
                <LectureCard key={lecture.id} lecture={lecture} />
              ))}
          </div>
        </NnnEdit>
      </div>

      <section id="speaking" className="border-t border-line bg-paper">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
          <p className="text-xs font-medium uppercase tracking-widest text-teal-dark">
            Live talks
          </p>
          <h2 className="mt-2 font-display text-2xl text-navy">Request a lecture</h2>
          <NnnEdit id="people.moore.speaking" status="CONFIRMED" note="speaker availability">
            <p className="mt-4 text-base leading-relaxed">
              Joshua Moore, MA, LMHC, BCN is available on request to speak on
              research and efficacy as an educational survey of the literature
              (not a promise of results), the history of neurofeedback,
              professional organizations, and specialized topics.
            </p>
          </NnnEdit>
          <p className="mt-4 text-base">
            Call{" "}
            <a href={CONTACT.phoneHref} className="font-semibold text-navy">
              {CONTACT.phone}
            </a>{" "}
            or email{" "}
            <a href={CONTACT.emailHref} className="font-semibold text-navy">
              {CONTACT.email}
            </a>
            .
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex min-h-11 items-center rounded-md bg-navy px-5 py-2.5 text-sm font-medium text-paper no-underline hover:bg-navy-deep"
          >
            Contact NNN
          </Link>
        </div>
      </section>

      <PhotoCarousel
        photos={photosByIds(CAROUSEL_SETS.speaking)}
        heading="What the work looks like in the room"
        startIndex={2}
      />
    </PageShell>
  );
}

function LectureCard({
  lecture,
  linkToLearn = false,
}: {
  lecture: Lecture;
  linkToLearn?: boolean;
}) {
  const embedId = linkToLearn ? null : youtubeEmbedId(lecture.youtubeUrl);

  return (
    <article className="overflow-hidden rounded-lg border border-line bg-paper">
      {embedId ? (
        <div className="aspect-video bg-navy-deep">
          <iframe
            title={lecture.title}
            src={`https://www.youtube-nocookie.com/embed/${embedId}`}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : null}
      <div className="p-5 sm:p-6">
        <h2 className="font-display text-2xl text-navy">{lecture.title}</h2>
        <p className="mt-1 text-sm font-medium text-teal-dark">{lecture.speaker}</p>
        <p className="mt-3 text-base leading-relaxed text-ink">{lecture.description}</p>
        {linkToLearn ? (
          <Link
            to="/neurofeedback"
            hash="featured-lecture"
            className="mt-5 inline-flex min-h-11 items-center rounded-md bg-navy px-5 py-2.5 text-sm font-medium text-paper no-underline hover:bg-navy-deep"
          >
            Watch on the Learn page
          </Link>
        ) : null}
      </div>
    </article>
  );
}

function EmptyLectureSlot({ label, hint }: { label: string; hint: string }) {
  return (
    <article className="overflow-hidden rounded-lg border border-dashed border-line bg-paper">
      <LectureFrame label="Coming soon" />
      <div className="p-5 sm:p-6">
        <h2 className="font-display text-2xl text-navy">{label}</h2>
        <p className="mt-2 text-base text-muted">{hint}</p>
      </div>
    </article>
  );
}

function LectureFrame({ label }: { label: string }) {
  return (
    <div className="relative aspect-video overflow-hidden bg-navy-deep">
      <img
        src="/photos/5Q8A0214.jpg"
        alt=""
        className="h-full w-full object-cover opacity-40"
      />
      <p className="absolute inset-0 flex items-center justify-center font-display text-xl text-paper sm:text-2xl">
        {label}
      </p>
    </div>
  );
}
