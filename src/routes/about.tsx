import { createFileRoute, Link } from "@tanstack/react-router";
import { ExtLink, NnnEdit } from "@/components/nnn-edit";
import { PageHeader, PageShell, Prose } from "@/components/page-shell";
import { PhotoCarousel, ProcessFigure } from "@/components/photo-carousel";
import { CAROUSEL_SETS, photoById, photosByIds } from "@/data/photos";
import { COLLISION, MISSION } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — Northwest Neurofeedback Networking" }] }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About NNN"
        title="A Northwest advocacy network"
        deck={MISSION}
      />
      <Prose>
        <p>
          Northwest Neurofeedback Networking is an advocacy and networking group
          in Oregon and Washington. It is organized around three purposes, in
          this order: education about neurofeedback; public and political
          advocacy pathways; and links to field organizations and participant
          practices.
        </p>
        <ProcessFigure photo={photoById("practitioner-view")} />
        <p>
          NNN does not deliver care, take clinical intake, or operate as a
          referral service. Participant sites remain independent.
        </p>
        <h2 className="pt-4 font-display text-2xl text-navy">Leadership</h2>
        <p>
          Founder: Henry M. Kaiser, PsyD, MBA, QMHP. Board Member Emeritus,
          Neurofeedback Advocacy Project. Co-Chair, Health & Safety Committee,
          City Club of Portland. Executive Advisor to 3 H Bio. Advisor to
          Individual Centricity Corporation™.
        </p>
        <p>
          Program contact and manager: Joshua Moore, MA, LMHC, BCN. Correspondence
          for NNN is received through{" "}
          <ExtLink
            slug="abt"
            href="https://www.neurofeedbackcare.com"
            className="underline decoration-teal underline-offset-2"
          >
            Alternative Behavioral Therapy
          </ExtLink>
          .
        </p>
        <NnnEdit
          id="people.kaiser.license"
          status="DO_NOT_PRINT"
          note="PsyD only; not currently licensed"
          className="hidden"
        />
        <NnnEdit
          id="people.kaiser.nap_emeritus"
          status="CONFIRMED"
          note="user-supplied for print"
          className="hidden"
        />
        <NnnEdit
          id="people.kaiser.3h_bio"
          status="CONFIRMED"
          note="user-supplied for print"
          className="hidden"
        />
        <NnnEdit
          id="people.kaiser.centricity"
          status="CONFIRMED"
          note="user-supplied for print"
          className="hidden"
        />
        <NnnEdit
          id="people.kaiser.qmhp"
          status="CONFIRMED"
          note="user-supplied credential line"
          className="hidden"
        />
        <h2 className="pt-4 font-display text-2xl text-navy">Relation to NAP</h2>
        <p>
          NNN is not a chapter of the Neurofeedback Advocacy Project, and Kaiser
          is not current NAP leadership. Kaiser was involved in the early period
          of NAP; current NAP leadership is separate. NAP remains a related
          access-and-capacity organization and is linked from{" "}
          <Link to="/resources" className="underline decoration-teal underline-offset-2">
            Resources
          </Link>
          .
        </p>
        <p className="text-sm text-muted">{COLLISION}</p>
      </Prose>
      <PhotoCarousel
        photos={photosByIds(CAROUSEL_SETS.about)}
        heading="The work in rooms across the Northwest"
        startIndex={2}
      />
    </PageShell>
  );
}
