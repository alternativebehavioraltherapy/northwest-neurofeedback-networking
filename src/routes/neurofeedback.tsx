import { createFileRoute } from "@tanstack/react-router";
import { ExtLink, NnnEdit } from "@/components/nnn-edit";
import { PageHeader, PageShell } from "@/components/page-shell";
import { PhotoCarousel } from "@/components/photo-carousel";
import { CONDITIONS, type ConditionSection } from "@/data/conditions";
import {
  OVERVIEW_CITATIONS,
  OVERVIEW_POINTS,
  OVERVIEW_SLIDES,
} from "@/data/overview";

const LEARN_TITLE = "font-display text-4xl text-navy sm:text-5xl";
const LEARN_RATING =
  "rounded-full bg-navy px-4 py-2 text-xl font-semibold leading-none text-paper sm:text-2xl";

export const Route = createFileRoute("/neurofeedback")({
  head: () => ({
    meta: [{ title: "What Is Neurofeedback — Northwest Neurofeedback Networking" }],
  }),
  component: NeurofeedbackPage,
});

function NeurofeedbackPage() {
  return (
    <PageShell>
      <PageHeader eyebrow="Learn" title="What is neurofeedback?" />

      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
          <NnnEdit
            id="learn.overview"
            status="CONFIRMED"
            note="overview slides from the trauma lecture deck"
          >
            <PhotoCarousel
              photos={OVERVIEW_SLIDES}
              heading="Overview"
              headingClassName={LEARN_TITLE}
              variant="embed"
              fit="contain"
              intervalMs={14000}
            />
            <ul className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-ink">
              {OVERVIEW_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="mt-8 max-w-3xl border-t border-line pt-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-dark">
                Citations
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-xs leading-relaxed text-muted">
                {OVERVIEW_CITATIONS.map((citation) => (
                  <li key={citation.text}>
                    {citation.href ? (
                      <ExtLink
                        slug={`overview-${citation.text.slice(0, 20)}`}
                        href={citation.href}
                        className="underline decoration-teal underline-offset-2"
                      >
                        {citation.text}
                      </ExtLink>
                    ) : (
                      citation.text
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </NnnEdit>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
          <p className="text-xs font-medium uppercase tracking-widest text-teal-dark">
            Applications
          </p>
          <h2 className="mt-2 font-display text-3xl text-navy">
            What the evidence says
          </h2>
          <NnnEdit
            id="learn.conditions"
            status="PLACEHOLDER"
            note="soon-cards fill when members send best-study notes"
            className="mt-8 grid gap-4 md:grid-cols-2"
          >
            {CONDITIONS.map((condition) => (
              <ConditionCard key={condition.id} condition={condition} />
            ))}
          </NnnEdit>
        </div>
      </section>
    </PageShell>
  );
}

function ProtocolList({
  protocols,
}: {
  protocols?: ConditionSection["protocols"];
}) {
  if (!protocols?.length) return null;
  return (
    <div className="mt-5">
      <p className="text-xs font-semibold uppercase tracking-widest text-teal-dark">
        Common protocols
      </p>
      <p className="mt-1 text-xs text-muted">
        Names used in the literature. Not a protocol prescription.
      </p>
      <ul className="mt-3 space-y-2">
        {protocols.map((protocol) => (
          <li key={protocol.name} className="text-sm leading-relaxed">
            <span className="font-semibold text-navy">{protocol.name}. </span>
            <span className="text-ink">{protocol.note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ConditionCard({ condition }: { condition: ConditionSection }) {
  if (condition.status === "soon") {
    return (
      <article className="flex flex-col rounded-lg border border-dashed border-line bg-cream p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3 className={LEARN_TITLE}>{condition.title}</h3>
          {condition.rating ? (
            <p className={LEARN_RATING}>
              {condition.rating.score} · {condition.rating.label}
            </p>
          ) : null}
        </div>
        {condition.rating ? (
          <p className="mt-3 text-sm text-muted">
            <ExtLink
              slug={`learn-${condition.id}-rating`}
              href={condition.rating.href}
              className="underline decoration-teal underline-offset-2"
            >
              {condition.rating.source}
            </ExtLink>
          </p>
        ) : null}
        <ProtocolList protocols={condition.protocols} />
        <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-teal-dark">
          Coming soon
        </p>
      </article>
    );
  }

  return (
    <article className="rounded-lg border border-line bg-cream p-5 md:col-span-2">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className={LEARN_TITLE}>{condition.title}</h3>
        {condition.rating ? (
          <p className={LEARN_RATING}>
            {condition.rating.score} · {condition.rating.label}
          </p>
        ) : null}
      </div>
      {condition.rating ? (
        <p className="mt-3 text-sm text-muted">
          <ExtLink
            slug={`learn-${condition.id}-rating`}
            href={condition.rating.href}
            className="underline decoration-teal underline-offset-2"
          >
            {condition.rating.source}
          </ExtLink>
        </p>
      ) : null}
      {condition.blurb ? <p className="mt-2 text-sm text-ink">{condition.blurb}</p> : null}
      <ProtocolList protocols={condition.protocols} />
      {condition.slides?.length ? (
        <PhotoCarousel
          photos={condition.slides}
          heading=""
          variant="embed"
          fit="contain"
          intervalMs={14000}
        />
      ) : null}
      {condition.studies?.length ? (
        <ul className="mt-4 space-y-3">
          {condition.studies.map((study) => (
            <li key={study.id} className="border-t border-line pt-3 text-sm leading-relaxed">
              <span className="font-semibold text-teal-dark">{study.kind}. </span>
              <ExtLink
                slug={`learn-${study.id}`}
                href={study.href}
                className="font-medium underline decoration-teal underline-offset-2"
              >
                {study.cite}
              </ExtLink>
              <span className="text-ink"> — {study.point}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {condition.citations?.length ? (
        <div className="mt-6 border-t border-line pt-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-dark">
            Citations
          </p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-xs leading-relaxed text-muted">
            {condition.citations.map((citation) => (
              <li key={citation.text}>
                {citation.href ? (
                  <ExtLink
                    slug={`cite-${citation.text.slice(0, 24)}`}
                    href={citation.href}
                    className="underline decoration-teal underline-offset-2"
                  >
                    {citation.text}
                  </ExtLink>
                ) : (
                  citation.text
                )}
              </li>
            ))}
          </ol>
        </div>
      ) : null}
    </article>
  );
}
