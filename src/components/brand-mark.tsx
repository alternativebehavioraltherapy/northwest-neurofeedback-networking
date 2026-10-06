import nnnWordmark from "@/assets/nnn-wordmark.png";

type Props = {
  alt?: string;
  className?: string;
};

export function BrandMark({ alt = "NNN", className }: Props) {
  return <img src={nnnWordmark} alt={alt} className={className} />;
}
