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
  NNN-EDIT:lectures.catalog | status:PLACEHOLDER | note:members add title, speaker, description, youtubeUrl; set published true to show
  The lead pin is reserved — do not publish into that slot until the planned first video arrives.
*/

export const LECTURES: Lecture[] = [
  {
    id: "reserved-lead",
    title: "Featured lecture",
    speaker: "NNN member",
    description:
      "This first slot is reserved for an upcoming NNN lecture. The ORPARC feature below is published in the meantime.",
    youtubeUrl: "",
    published: false,
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
