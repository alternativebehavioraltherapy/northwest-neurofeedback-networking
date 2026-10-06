import type { ProcessPhoto } from "@/data/photos";
import { learnSrc } from "@/data/media";

export type ConditionSection = {
  id: string;
  title: string;
  status: "ready" | "soon";
  rating?: {
    score: string;
    label: string;
    source: string;
    href: string;
  };
  blurb?: string;
  studies?: {
    id: string;
    kind: string;
    cite: string;
    href: string;
    point: string;
  }[];
  slides?: ProcessPhoto[];
  citations?: { text: string; href?: string }[];
  protocols?: { name: string; note: string }[];
};

export const AAPB_2023 = {
  source:
    "Khazan I, Shaffer F, Moss D, Lyle RR, Rosenthal S (eds) (2023). Evidence-based practice in biofeedback and neurofeedback, 4th edn. Association for Applied Psychophysiology and Biofeedback.",
  href: "https://www.aapb.org",
  short: "Khazan et al. (eds), 2023 — AAPB, 4th ed.",
};

function rating(score: string, label: string) {
  return {
    score,
    label,
    source: AAPB_2023.short,
    href: AAPB_2023.href,
  };
}

export const CONDITIONS: ConditionSection[] = [
  {
    id: "trauma",
    title: "Trauma / PTSD",
    status: "ready",
    rating: rating("4 / 5", "Efficacious"),
    blurb:
      "Field rating of published biofeedback and neurofeedback evidence. Not a promise of individual results.",
    protocols: [
      {
        name: "Alpha-theta and alpha-down",
        note: "Most cited EEG approaches in recent PTSD meta-analyses.",
      },
      {
        name: "Infra-low frequency (ILF)",
        note: "Very slow rhythms; used to settle arousal.",
      },
      {
        name: "SMR (sensorimotor rhythm)",
        note: "12–15 Hz training for physical calm and focus.",
      },
    ],
    studies: [
      {
        id: "askovic-2023",
        kind: "Meta-analysis",
        cite: "Askovic et al., 2023",
        href: "https://doi.org/10.1080/20008066.2023.2257435",
        point:
          "Ten clinical trials; seven RCTs in the pool. Authors report moderate benefit for PTSD symptoms. Pooled effect was large (SMD −1.76) with very low certainty.",
      },
      {
        id: "berman-2025",
        kind: "Meta-analysis",
        cite: "Berman et al., 2025",
        href: "https://doi.org/10.3389/fnins.2025.1658652",
        point:
          "EEG neurofeedback: moderate-to-large vs passive controls (SMD −1.32); smaller and uncertain vs active controls (SMD −0.43, CI crossed zero).",
      },
    ],
    slides: [
      {
        id: "berman-slide",
        src: learnSrc("berman-2025.jpg"),
        alt: "Slide summarizing Berman et al. 2025 meta-analysis of neurofeedback for PTSD",
        caption: "Berman et al., 2025 — systematic review and meta-analysis",
      },
      {
        id: "vdk-slide",
        src: learnSrc("van-der-kolk-2016.jpg"),
        alt: "Slide summarizing van der Kolk et al. 2016 randomized study of neurofeedback for chronic PTSD",
        caption: "van der Kolk et al., 2016 — randomized controlled study",
      },
      {
        id: "peniston-slide",
        src: learnSrc("peniston-1991.jpg"),
        alt: "Slide summarizing Peniston and Kulkosky 1991 alpha-theta study with Vietnam veterans",
        caption: "Peniston & Kulkosky, 1991 — early alpha-theta study",
      },
      {
        id: "gapen-slide",
        src: learnSrc("gapen-2016.jpg"),
        alt: "Slide summarizing Gapen et al. 2016 pilot study of neurofeedback for chronic PTSD",
        caption: "Gapen et al., 2016 — pilot study",
      },
      {
        id: "emerging-slide",
        src: learnSrc("emerging-use.jpg"),
        alt: "Slide on emerging clinical applications, CPT coding, and efficacy rating potential",
        caption: "Emerging use — coding, ratings, and field growth",
      },
    ],
    citations: [
      {
        text: AAPB_2023.source,
        href: AAPB_2023.href,
      },
      {
        text: "Askovic, M., Soh, N., Elhindi, J., & Harris, A. W. F. (2023). Neurofeedback for post-traumatic stress disorder: Systematic review and meta-analysis of clinical and neurophysiological outcomes. European Journal of Psychotraumatology, 14(2), Article 2257435.",
        href: "https://doi.org/10.1080/20008066.2023.2257435",
      },
      {
        text: "Berman, D. E., Cowansage, K. P., Bellanti, D. M., Nair, R., Boyd, C. C., Beech, E. H., Reddy, M. K., Recker, R. S., Belsher, B. E., & Kelber, M. S. (2025). Systematic review and meta-analysis of neurofeedback training efficacy and neural mechanisms in the treatment of posttraumatic stress disorder. Frontiers in Neuroscience, 19, 1658652.",
        href: "https://doi.org/10.3389/fnins.2025.1658652",
      },
      {
        text: "van der Kolk, B. A., Hodgdon, H., Gapen, M., Musicaro, R., Suvak, M. K., Hamlin, E., & Spinazzola, J. (2016). A randomized controlled study of neurofeedback for chronic PTSD. PLoS ONE, 11(12), e0166752.",
        href: "https://doi.org/10.1371/journal.pone.0166752",
      },
      {
        text: "Gapen, M., van der Kolk, B. A., Hamlin, E., Hirshberg, L., Suvak, M., & Spinazzola, J. (2016). A pilot study of neurofeedback for chronic PTSD. Applied Psychophysiology and Biofeedback, 41(3), 251–261.",
        href: "https://doi.org/10.1007/s10484-015-9326-5",
      },
      {
        text: "Peniston, E. G., & Kulkosky, P. J. (1991). Alpha-theta brainwave neurofeedback therapy for Vietnam veterans with combat-related post-traumatic disorder. Medical Psychotherapy: An International Journal, 4, 47–60.",
      },
    ],
  },
  {
    id: "adhd",
    title: "ADHD",
    status: "soon",
    rating: rating("5 / 5", "Efficacious and specific"),
    protocols: [
      {
        name: "Theta/beta ratio (TBR)",
        note: "Down-train theta, up-train beta. Lubar line; one of three standard ADHD protocols.",
      },
      {
        name: "SMR",
        note: "Reward 12–15 Hz over the sensorimotor strip.",
      },
      {
        name: "Slow cortical potentials (SCP)",
        note: "Train slow EEG shifts; common in European ADHD trials.",
      },
    ],
  },
  {
    id: "epilepsy",
    title: "Epilepsy",
    status: "soon",
    rating: rating("4 / 5", "Efficacious"),
    protocols: [
      {
        name: "SMR at the motor strip",
        note: "Sterman’s original clinical protocol. Sites near C3, C4, or Cz.",
      },
      {
        name: "Slow cortical potentials",
        note: "Used in some seizure-reduction trials alongside SMR.",
      },
    ],
  },
  {
    id: "depression",
    title: "Depression",
    status: "soon",
    rating: rating("5 / 5", "Efficacious and specific"),
    protocols: [
      {
        name: "Frontal alpha asymmetry (ALAY)",
        note: "Balance left/right alpha at F3 and F4. Best-known EEG protocol for mood.",
      },
      {
        name: "Left-frontal beta up / alpha down",
        note: "Alternate amplitude protocol used in some depression trials.",
      },
      {
        name: "HRV biofeedback",
        note: "Peripheral biofeedback often paired with EEG work.",
      },
    ],
  },
  {
    id: "anxiety",
    title: "Anxiety",
    status: "soon",
    rating: rating("4 / 5", "Efficacious"),
    protocols: [
      {
        name: "Alpha enhancement",
        note: "Eyes-closed alpha reward for lower arousal.",
      },
      {
        name: "SMR and alpha-theta",
        note: "Calm-focus SMR, or eyes-closed alpha-theta for deeper settling.",
      },
      {
        name: "HRV, EMG, and temperature",
        note: "Peripheral biofeedback used alone or with EEG.",
      },
    ],
  },
  {
    id: "more",
    title: "More applications",
    status: "soon",
  },
];
