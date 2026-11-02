export type Lecture = {
  id: string;
  title: string;
  speaker: string;
  description: string;
  youtubeUrl: string;
  published: boolean;
  pin?: "lead";
};

/*
  NNN-EDIT:lectures.catalog | status:CONFIRMED | note:lead is Joshua Moore Trauma Class Pt 1; ward ORPARC stays second
*/

export const LECTURES: Lecture[] = [
  {
    id: "moore-trauma-class-pt1",
    title: "Trauma Class Pt 1",
    speaker: "Joshua Moore, MA, LMHC, BCN",
    description:
      "A class on neurofeedback related to history, practice, and research for trauma, for survivors and providers. Educational only — not a treatment claim by NNN.",
    youtubeUrl: "https://www.youtube.com/watch?v=t6FieaUsSek",
    published: true,
    pin: "lead",
  },
  {
    id: "ward-orparc-naap",
    title: "Trauma-informed neurofeedback support for families in Oregon",
    speaker: "Olga Ward, Beaverton Neurofeedback",
    description:
      "A Beaverton Neurofeedback feature on ORPARC’s Neurofeedback Adoption Access Program (NAAP). Educational context for how one Northwest practice has worked with adoptive and guardianship families. Not a treatment claim by NNN.",
    youtubeUrl: "https://www.youtube.com/watch?v=ffiGJJdq2J4",
    published: true,
  },
];

export function youtubeEmbedId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/,
  );
  return match?.[1] ?? null;
}

export const LEAD_LECTURE = LECTURES.find((lecture) => lecture.pin === "lead");
export const PUBLISHED_LECTURES = LECTURES.filter((lecture) => lecture.published);
