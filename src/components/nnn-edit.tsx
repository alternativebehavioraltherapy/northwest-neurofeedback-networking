type Status = "PLACEHOLDER" | "HOLD" | "CONSENT_PENDING" | "CONFIRMED" | "DO_NOT_PRINT";

type Props = {
  id: string;
  status: Status;
  note: string;
  className?: string;
  children?: React.ReactNode;
};

export function NnnEdit({ id, status, note, className, children }: Props) {
  const comment = ` NNN-EDIT:${id} | status:${status} | note:${note} `;
  return (
    <div
      className={className}
      data-nnn-id={id}
      data-nnn-status={status}
      data-nnn-note={note}
    >
      <span
        hidden
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: `<!--${comment}-->` }}
      />
      {children}
    </div>
  );
}

export function ExtLink({
  slug,
  href,
  children,
  className,
}: {
  slug: string;
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      data-nnn-id={`link.${slug}`}
      data-nnn-status="CONFIRMED"
    >
      <span
        hidden
        aria-hidden="true"
        dangerouslySetInnerHTML={{
          __html: `<!-- NNN-EDIT:link.${slug} | status:CONFIRMED | note:url check on publish -->`,
        }}
      />
      {children}
    </a>
  );
}
