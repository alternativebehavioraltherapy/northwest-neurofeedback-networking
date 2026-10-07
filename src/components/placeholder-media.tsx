import { NnnEdit } from "@/components/nnn-edit";

export function PhotoPlaceholder({
  personId,
  photo,
}: {
  personId: string;
  photo?: { src: string; alt: string; focus?: string };
}) {
  if (photo) {
    return (
      <NnnEdit
        id={`people.${personId}.photo`}
        status="CONFIRMED"
        note="member-supplied headshot"
        className="overflow-hidden rounded-md border border-line bg-cream-warm"
      >
        <img
          src={photo.src}
          alt={photo.alt}
          className={`h-64 w-full object-cover ${photo.focus ?? "object-top"}`}
        />
      </NnnEdit>
    );
  }

  return (
    <NnnEdit
      id={`people.${personId}.photo`}
      status="CONSENT_PENDING"
      note="replace when permission is given"
      className="flex size-60 max-w-full items-center justify-center rounded-md border border-dashed border-line bg-cream-warm text-center"
    >
      <span className="px-4 font-sans text-sm font-medium tracking-wide text-muted">
        Photo — pending permission
      </span>
    </NnnEdit>
  );
}

export function LogoPlaceholder({
  personId,
  logos,
}: {
  personId: string;
  logos?: { src: string; alt: string; wide?: boolean; banner?: boolean }[];
}) {
  if (!logos?.length) return null;

  return (
    <NnnEdit
      id={`people.${personId}.logo`}
      status="CONFIRMED"
      note="member-supplied marks"
      className="flex w-full flex-wrap items-center gap-3"
    >
      {logos.map((logo) => (
        <img
          key={logo.src}
          src={logo.src}
          alt={logo.alt}
          className={
            logo.banner
              ? "h-28 w-full rounded-md border border-line object-cover object-center"
              : logo.wide
                ? "h-10 w-auto max-w-[14rem] object-contain object-left"
                : "h-16 w-16 object-contain"
          }
        />
      ))}
    </NnnEdit>
  );
}

