import { learnSrc } from "@/data/media";
import type { ProcessPhoto } from "@/data/photos";

/*
  NNN-EDIT:learn.overview | status:CONFIRMED | note:slides from Joshua Moore trauma lecture deck
*/

export const OVERVIEW_SLIDES: ProcessPhoto[] = [
  {
    id: "history",
    src: learnSrc("overview-history.jpg"),
    alt: "History of neurofeedback from Sterman’s 1960s lab work to current efficacy ratings",
    caption: "History — Sterman lab, 1960s, through current efficacy ratings",
  },
  {
    id: "what",
    src: learnSrc("overview-what.jpg"),
    alt: "Diagram of EEG biofeedback as a self-regulation loop",
    caption: "What it is — EEG biofeedback and the self-regulation loop",
  },
  {
    id: "session",
    src: learnSrc("overview-session.jpg"),
    alt: "Illustrated session: sensors, feedback display, and practitioner",
    caption: "A session — sensors, feedback, and the practitioner’s role",
  },
  {
    id: "protocols",
    src: learnSrc("overview-protocols.jpg"),
    alt: "Three common PTSD protocols: ILF, alpha-theta / alpha-down, and SMR",
    caption: "Common PTSD protocols — ILF, alpha-theta / alpha-down, SMR",
  },
  {
    id: "outcomes",
    src: learnSrc("overview-outcomes.jpg"),
    alt: "Slide contrasting reported benefits with clinical and practical considerations",
    caption: "Outcomes and limits — adjunctive, not a standalone cure",
  },
  {
    id: "neurobiology",
    src: learnSrc("overview-neurobiology.jpg"),
    alt: "Slide comparing PTSD dysregulation with the regulation goal of neurofeedback",
    caption: "Neurobiology — dysregulation and the training goal",
  },
];

export const OVERVIEW_POINTS = [
  "EEG neurofeedback is a form of biofeedback: sensors on the scalp read brain electrical activity and return sound or visuals in real time so a person can practice self-regulation.",
  "The method grew from M. Barry Sterman’s 1960s UCLA / NASA work and a 1969 validation study. It is operant conditioning applied to EEG.",
  "A typical session is about 30–45 minutes. Sensors are placed after an assessment. A practitioner watches the live signal and adjusts thresholds. Many sessions are used, not one.",
  "The lecture deck lists ILF, alpha-theta / alpha-down, and SMR as common PTSD protocols. Choice of protocol is a clinical decision, not a website claim.",
  "The same deck treats neurofeedback as adjunctive to psychotherapy, not a standalone cure, and notes the time and training required.",
];

export const OVERVIEW_CITATIONS: { text: string; href?: string }[] = [
  {
    text: "Sterman, M. B., LoPresti, R. W., & Fairchild, M. D. (1969). Electroencephalographic and behavioral studies of monomethylhydrazine toxicity in the cat (AMRL-TR-69-3). Aerospace Medical Research Laboratory.",
    href: "https://apps.dtic.mil/sti/pdfs/AD0691474.pdf",
  },
  {
    text: "Khazan I, Shaffer F, Moss D, Lyle RR, Rosenthal S (eds) (2023). Evidence-based practice in biofeedback and neurofeedback, 4th edn. Association for Applied Psychophysiology and Biofeedback. The history slide’s “4 out of 5” line uses this edition.",
    href: "https://www.aapb.org",
  },
];
