import { peopleSrc } from "@/data/media";

export const CONTACT = {
  orgLine: "Northwest Neurofeedback Networking",
  careOf: "c/o Alternative Behavioral Therapy",
  address1: "3000 SE 164th Ave, Suite 108",
  address2: "Vancouver, WA 98683",
  phone: "(360) 553-1350",
  phoneHref: "tel:3605531350",
  email: "office@altbehtherapy.com",
  emailHref: "mailto:office@altbehtherapy.com",
  web: "https://www.neurofeedbackcare.com",
  webLabel: "neurofeedbackcare.com",
} as const;

export const COLLISION =
  "Northwest Neurofeedback Networking is an independent advocacy and networking group. It is not the Neurofeedback Advocacy Project and is not affiliated with clinics that trade as Northwest Neurofeedback.";

export const MISSION =
  "Education, civic advocacy, and networking for neurofeedback in the Northwest.";

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/neurofeedback", label: "Learn" },
  { to: "/advocate", label: "Advocate" },
  { to: "/people", label: "Team" },
  { to: "/lectures", label: "Lectures", badge: "Soon" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
] as const;

export const ORG_LINKS = [
  {
    slug: "nap",
    name: "Neurofeedback Advocacy Project (NAP)",
    href: "https://www.neurofeedbackadvocacyproject.com",
    blurb:
      "A 501(c)(3) working to expand neurofeedback capacity in agencies that serve underserved populations. Independent of NNN.",
  },
  {
    slug: "eeginfo",
    name: "EEG Info",
    href: "https://www.eeginfo.com",
    blurb: "Training and clinical-education organization associated with the Othmer method.",
  },
  {
    slug: "bcia",
    name: "Biofeedback Certification International Alliance (BCIA)",
    href: "https://www.bcia.org",
    blurb: "Board certification in biofeedback and neurofeedback. Certification is not a state license.",
  },
  {
    slug: "aapb",
    name: "Association for Applied Psychophysiology and Biofeedback (AAPB)",
    href: "https://www.aapb.org",
    blurb: "Professional association for biofeedback and applied psychophysiology.",
  },
] as const;

export const CIVIC_LINKS = [
  {
    slug: "cityclub",
    name: "City Club of Portland",
    href: "https://www.pdxcityclub.org",
    blurb: "Civic forum. NNN does not speak for City Club.",
  },
  {
    slug: "orleg",
    name: "Oregon Legislature — find your legislators",
    href: "https://www.oregonlegislature.gov/findyourlegislator/leg-districts.html",
    blurb: "Look up Oregon House and Senate districts.",
  },
  {
    slug: "waleg",
    name: "Washington Legislature — find your district",
    href: "https://app.leg.wa.gov/DistrictFinder/",
    blurb: "Look up Washington legislative districts.",
  },
] as const;

export type PersonCard = {
  id: "kaiser" | "moore" | "ward" | "hardman_woung" | "stewart";
  name: string;
  credentials?: string;
  role: string;
  practice?: string;
  city: string;
  lines: string[];
  sites: { slug: string; href: string; label: string }[];
  disclaimer?: string;
  contactLines?: string[];
  photo?: { src: string; alt: string };
  logos?: { src: string; alt: string; wide?: boolean; banner?: boolean }[];
};

export const PEOPLE: PersonCard[] = [
  {
    id: "kaiser",
    name: "Henry M. Kaiser",
    credentials: "PsyD, MBA, QMHP",
    role: "Founder, Northwest Neurofeedback Networking",
    city: "Portland, Oregon",
    photo: {
      src: peopleSrc("henry-kaiser.jpg"),
      alt: "Portrait of Henry M. Kaiser",
    },
    logos: [
      {
        src: peopleSrc("bright-minds.png"),
        alt: "Bright Minds mark",
      },
    ],
    lines: [
      "Founder of Northwest Neurofeedback Networking.",
      "Board Member Emeritus, Neurofeedback Advocacy Project.",
      "Co-Chair, Health & Safety Committee, City Club of Portland.",
      "Executive Advisor to 3 H Bio.",
      "Advisor to Individual Centricity Corporation™.",
    ],
    sites: [],
  },
  {
    id: "moore",
    name: "Joshua Moore",
    credentials: "MA, LMHC, BCN",
    role: "Program manager, NNN contact; clinician and educator",
    practice: "Alternative Behavioral Therapy (teaching clinic)",
    city: "Vancouver, Washington",
    photo: {
      src: peopleSrc("joshua-moore.jpg"),
      alt: "Portrait of Joshua Moore",
    },
    logos: [
      {
        src: peopleSrc("abt-logo.png"),
        alt: "Alternative Behavioral Therapy",
        wide: true,
      },
      {
        src: peopleSrc("beemedic-partner.png"),
        alt: "Authorized BeeMedic training partner",
      },
    ],
    lines: [
      "Licensed Mental Health Counselor (Washington) and BCIA Board Certified in Neurofeedback.",
      "Teaching clinic and teaching platform (qeegcourses.com).",
      "Author of Neurofeedback For All: A Beginner’s Introduction.",
      "Approved training partner for BeeMedic.",
      "Available, by request, to speak or educate on neurofeedback related to research and efficacy, history, organizations, and specialized topics.",
    ],
    sites: [
      {
        slug: "abt",
        href: "https://www.neurofeedbackcare.com",
        label: "neurofeedbackcare.com",
      },
      {
        slug: "qeeg",
        href: "https://www.qeegcourses.com",
        label: "qeegcourses.com",
      },
      {
        slug: "beemedic",
        href: "https://beemedic.com/en/joshua-moore-ma-lmhc-bcn",
        label: "Bee Medic instructor page",
      },
    ],
  },
  {
    id: "ward",
    name: "Olga Ward",
    role: "Neurofeedback practitioner",
    practice: "Beaverton Neurofeedback",
    city: "Beaverton, Oregon",
    photo: {
      src: peopleSrc("olga-ward.jpg"),
      alt: "Portrait of Olga Ward",
    },
    lines: [
      "Founder of Beaverton Neurofeedback (established 2018).",
      "Works with children and adults who want support with stress, focus, and sleep. She describes her method as neurofeedback training for self-regulation, without medication as the service she offers.",
      "Clients include professionals, students, and families. Practice note: treat every customer like a family member.",
      "Basic and Advanced NeurOptimal® certifications; authorized NeurOptimal® representative (Zengar Institute).",
      "Featured in ORPARC’s Neurofeedback Adoption Access Program (NAAP) collaboration.",
    ],
    sites: [
      {
        slug: "beaverton",
        href: "https://www.beavertonneurofeedback.com",
        label: "beavertonneurofeedback.com",
      },
    ],
  },
  {
    id: "hardman_woung",
    name: "Gail Hardman-Woung",
    credentials: "LCSW, EMDR Consultant",
    role: "Clinical Director and Clinical Supervisor",
    practice: "Portland Neurofeedback, LLC / The PATH Center",
    city: "Portland, Oregon",
    photo: {
      src: peopleSrc("gail-hardman-woung.jpg"),
      alt: "Portrait of Gail Hardman-Woung",
    },
    lines: [
      "Portland Neurofeedback is a licensed mental health clinic with an Oregon certificate of approval (established 2017).",
      "Staffing: bachelor-level technicians and master’s-level clinicians. Credentialed professionals; five types of neurofeedback.",
      "Accepts HSA accounts, workers’ compensation, motor-vehicle, and MODA insurance for neurofeedback.",
    ],
    contactLines: [
      "1785 N.E. Sandy Blvd., Ste. 270, Portland, OR 97232",
      "971-940-2601",
      "info@portlandneurofeedback.org",
    ],
    sites: [
      {
        slug: "pdxnf",
        href: "https://www.portlandneurofeedback.org",
        label: "portlandneurofeedback.org",
      },
      {
        slug: "path-center",
        href: "https://www.thepathcenter.org",
        label: "thepathcenter.org",
      },
    ],
  },
  {
    id: "stewart",
    name: "Tanya M. Stewart",
    credentials: "Certified Brain Health Coach",
    role: "Neurofeedback Practitioner",
    practice: "NeuroFLEX General Wellness Neurofeedback LLC",
    city: "Battle Ground, Washington",
    photo: {
      src: peopleSrc("tanya-stewart.jpg"),
      alt: "Portrait of Tanya M. Stewart",
    },
    logos: [
      {
        src: peopleSrc("neuroflex-banner.jpg"),
        alt: "NeuroFLEX — Train your brain. Stretch your potential.",
        banner: true,
      },
    ],
    lines: [
      "Founder of NeuroFLEX General Wellness Neurofeedback LLC.",
      "Works with businesses, professionals, families, and individuals.",
      "Provides neurofeedback, with an emphasis on sleep, mood, energy, focus, and help with stress, plus instructions, tips, education, symptom tracking, and goal-setting support. Newer offerings include light therapy, biofeedback, TNT coaching cards, and employee benefits.",
      "Accepts HSA and FSA.",
      "A brain-type and stress quiz is available on the NeuroFLEX site.",
    ],
    contactLines: [
      "209 E. Main St., Suite 121, Battle Ground, WA 98604",
      "(360) 209-4465",
      "neuroflexneurofeedback@gmail.com",
    ],
    sites: [
      {
        slug: "neuroflex",
        href: "https://neuroflexneurofeed.wixsite.com/neuroflex-general-we",
        label: "NeuroFLEX site",
      },
    ],
  },
];

export const PARTICIPANT_RESOURCE_LINKS = [
  {
    slug: "abt",
    name: "Alternative Behavioral Therapy / Joshua Moore",
    href: "https://www.neurofeedbackcare.com",
  },
  {
    slug: "qeeg",
    name: "qEEG courses",
    href: "https://www.qeegcourses.com",
  },
  {
    slug: "beaverton",
    name: "Beaverton Neurofeedback / Olga Ward",
    href: "https://www.beavertonneurofeedback.com",
  },
  {
    slug: "pdxnf",
    name: "Portland Neurofeedback / Gail Hardman-Woung",
    href: "https://www.portlandneurofeedback.org",
  },
  {
    slug: "path-center",
    name: "The PATH Center",
    href: "https://www.thepathcenter.org",
  },
  {
    slug: "neuroflex",
    name: "NeuroFLEX General Wellness Neurofeedback / Tanya M. Stewart",
    href: "https://neuroflexneurofeed.wixsite.com/neuroflex-general-we",
  },
] as const;
