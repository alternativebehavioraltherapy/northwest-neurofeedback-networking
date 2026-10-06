import { Link } from "@tanstack/react-router";
import { ExtLink, NnnEdit } from "@/components/nnn-edit";
import { BrandMark } from "@/components/brand-mark";
import { COLLISION, CONTACT, ORG_LINKS } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-navy text-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <div className="mb-4 inline-block rounded-md bg-cream px-3 py-2">
            <BrandMark className="h-10 w-auto max-w-[12rem] object-contain" />
          </div>
          <p className="font-display text-lg text-paper">Northwest Neurofeedback Networking</p>
          <p className="mt-4 text-sm text-cream">
            Educational / advocacy site — not medical advice and not a clinic.
          </p>
          <NnnEdit
            id="org.legal_form"
            status="HOLD"
            note="do not print 501c3/EIN until supplied"
            className="hidden"
          />
          <NnnEdit
            id="study.irb"
            status="HOLD"
            note="double-blind in process under IRB review only; do not name QuietMIND"
            className="hidden"
          />
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-teal">Contact</p>
          <p className="mt-3 text-sm">
            {CONTACT.careOf}
            <br />
            {CONTACT.address1}
            <br />
            {CONTACT.address2}
          </p>
          <p className="mt-3 text-sm">
            <a className="underline decoration-teal/50 underline-offset-2" href={CONTACT.phoneHref}>
              {CONTACT.phone}
            </a>
            <br />
            <a className="underline decoration-teal/50 underline-offset-2" href={CONTACT.emailHref}>
              {CONTACT.email}
            </a>
          </p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-teal">Field organizations</p>
          <ul className="mt-3 space-y-2 text-sm">
            {ORG_LINKS.map((org) => (
              <li key={org.slug}>
                <ExtLink
                  slug={org.slug}
                  href={org.href}
                  className="underline decoration-teal/50 underline-offset-2"
                >
                  {org.name}
                </ExtLink>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm">
            <Link to="/resources" className="underline decoration-teal/50 underline-offset-2">
              All resources
            </Link>
          </p>
        </div>
      </div>
      <NnnEdit id="footer.collision" status="CONFIRMED" note="keep NAP + clinic distinction">
        <p className="border-t border-navy-deep px-4 py-4 text-center text-xs leading-relaxed text-cream/90 sm:px-6">
          {COLLISION}
        </p>
      </NnnEdit>
    </footer>
  );
}
