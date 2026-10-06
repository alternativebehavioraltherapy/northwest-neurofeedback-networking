import { photoSrc } from "@/data/media";

export type ProcessPhoto = {
  id: string;
  src: string;
  alt: string;
  caption: string;
};

export const PROCESS_PHOTOS: ProcessPhoto[] = [
  {
    id: "sensor-crown",
    src: photoSrc("5Q8A0298.jpg"),
    alt: "Sensors and thin leads placed along the crown of the head during a session",
    caption: "Sensors on the scalp record EEG. Nothing is delivered into the brain.",
  },
  {
    id: "cap-front",
    src: photoSrc("5Q8A0100.jpg"),
    alt: "Glass teaching head wearing a red-and-blue electrode cap",
    caption: "An electrode cap maps many scalp sites at once for assessment or training.",
  },
  {
    id: "sensors-profile",
    src: photoSrc("5Q8A0050.jpg"),
    alt: "Profile view of a person resting with small sensors at the scalp and ear",
    caption: "Sessions are typically quiet and seated. Sensors sit on the skin, not under it.",
  },
  {
    id: "cap-side",
    src: photoSrc("5Q8A0094.jpg"),
    alt: "Side view of a glass teaching head in an electrode cap",
    caption: "Cap layouts follow standard EEG site maps used in teaching and practice.",
  },
  {
    id: "session-software",
    src: photoSrc("5Q8A0102.jpg"),
    alt: "Neurofeedback software showing raw EEG traces and inhibit thresholds",
    caption: "Software displays live EEG so a practitioner can watch the signal in real time.",
  },
  {
    id: "gel-prep",
    src: photoSrc("5Q8A0113.jpg"),
    alt: "Close-up of conductive paste being placed in an electrode cup on a cap",
    caption: "Conductive paste helps each sensor make a clean reading.",
  },
  {
    id: "monitor-angle",
    src: photoSrc("5Q8A0108.jpg"),
    alt: "Angled view of a session monitor with EEG traces and inhibit readouts",
    caption: "The display is a mirror of brain electrical activity, not a treatment device by itself.",
  },
  {
    id: "headphones-chair",
    src: photoSrc("357A6535.jpg"),
    alt: "A young person seated in a reclining chair wearing headphones during a session",
    caption: "Feedback is often sound or a simple visual while the person sits still.",
  },
  {
    id: "seated-sensors",
    src: photoSrc("5Q8A0286.jpg"),
    alt: "A person seated with several scalp sensors and a small instrument cart nearby",
    caption: "Setup is visible and brief. The person remains awake and can stop at any time.",
  },
  {
    id: "practitioner-view",
    src: photoSrc("5Q8A0182.jpg"),
    alt: "Practitioner at a laptop facing a young person wearing an electrode cap",
    caption: "A practitioner watches the live signal and adjusts the session from a nearby desk.",
  },
  {
    id: "cap-session",
    src: photoSrc("5Q8A0166.jpg"),
    alt: "Side view of a young person wearing an orange electrode cap in a clinic chair",
    caption: "Full-cap recordings use many sites; other methods use only a few sensors.",
  },
  {
    id: "eeg-traces",
    src: photoSrc("5Q8A0214.jpg"),
    alt: "Rows of blue-and-white EEG waveforms on a dark monitor",
    caption: "Each line is electrical activity from a different scalp site.",
  },
  {
    id: "eeg-detail",
    src: photoSrc("5Q8A0222.jpg"),
    alt: "Close, slightly blurred view of EEG waveforms on a screen",
    caption: "The trace moves continuously. Practitioners read patterns, not a single number.",
  },
  {
    id: "brain-maps",
    src: photoSrc("5Q8A0229.jpg"),
    alt: "Grid of circular brain-map thumbnails on an analysis screen",
    caption: "Some practices also review quantitative EEG maps after a recording.",
  },
  {
    id: "maps-and-cap",
    src: photoSrc("5Q8A0236.jpg"),
    alt: "Young person in an electrode cap with a brain-map display in the foreground",
    caption: "Maps and live traces are teaching tools. They are not a diagnosis on this site.",
  },
];

export const CAROUSEL_SETS = {
  home: [
    "sensor-crown",
    "cap-front",
    "session-software",
    "headphones-chair",
    "eeg-traces",
    "practitioner-view",
    "gel-prep",
  ],
  learn: [
    "eeg-traces",
    "brain-maps",
    "session-software",
    "monitor-angle",
    "cap-side",
    "gel-prep",
    "eeg-detail",
    "maps-and-cap",
  ],
  about: [
    "practitioner-view",
    "seated-sensors",
    "cap-session",
    "headphones-chair",
    "sensor-crown",
  ],
  advocate: [
    "cap-front",
    "eeg-traces",
    "sensors-profile",
    "brain-maps",
    "monitor-angle",
  ],
  speaking: [
    "practitioner-view",
    "session-software",
    "maps-and-cap",
    "eeg-detail",
    "cap-front",
  ],
  contact: [
    "seated-sensors",
    "sensor-crown",
    "headphones-chair",
    "cap-session",
  ],
  resources: [
    "brain-maps",
    "eeg-traces",
    "session-software",
    "cap-side",
    "gel-prep",
  ],
} as const;

export function photosByIds(ids: readonly string[]): ProcessPhoto[] {
  return ids
    .map((id) => PROCESS_PHOTOS.find((p) => p.id === id))
    .filter((p): p is ProcessPhoto => Boolean(p));
}

export function photoById(id: string): ProcessPhoto {
  const found = PROCESS_PHOTOS.find((p) => p.id === id);
  if (!found) throw new Error(`Unknown photo id: ${id}`);
  return found;
}
