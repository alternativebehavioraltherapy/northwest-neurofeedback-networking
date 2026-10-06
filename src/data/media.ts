const PHOTO_FILES = import.meta.glob("../assets/photos/*", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const LEARN_FILES = import.meta.glob("../assets/learn/*", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const PEOPLE_FILES = import.meta.glob("../assets/people/*", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function url(map: Record<string, string>, file: string): string {
  const hit = Object.entries(map).find(([key]) => key.endsWith(`/${file}`));
  if (!hit) throw new Error(`Missing bundled image: ${file}`);
  return hit[1];
}

export const photoSrc = (file: string) => url(PHOTO_FILES, file);
export const learnSrc = (file: string) => url(LEARN_FILES, file);
export const peopleSrc = (file: string) => url(PEOPLE_FILES, file);
