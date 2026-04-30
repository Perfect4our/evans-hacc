export type HeroFact = {
  title: string;
  text: string;
};

export type HeroContent = {
  title: string;
  lead: string[];
  facts: HeroFact[];
};

export type StorySectionData = {
  id: string;
  title: string;
  body: string[];
  bullets: string[];
  aside?: {
    title: string;
    items: string[];
  };
};

export type EvidenceCardData = {
  title: string;
  body: string[];
  bullets: string[];
  source: string;
};

export type TransferStep = {
  title: string;
  description: string;
};

export type Citation = {
  label: string;
  description: string;
};

export const siteNavLinks = [
  { id: "the-city-of-baghdad", label: "The City of Baghdad" },
  { id: "why-baghdad-is-the-most-important-stop", label: "Why Baghdad is the Most Important Stop" },
  { id: "baghdad-in-the-larger-story", label: "Baghdad in the Larger Story" },
  { id: "conclusion", label: "Conclusion" },
  { id: "works-cited", label: "Works Cited" },
] as const;

export const heroContent: HeroContent = {
  title: "Baghdad",
  lead: [
    "Baghdad, founded in 762 CE by the Abbasid Caliph al-Mansur, quickly became one of the most important cities in the Afro-Eurasian world.",
    "Located along the Tigris River, it served as a major hub of trade, culture, and intellectual exchange.",
  ],
  facts: [
    {
      title: "Population",
      text: "Its population included Arabs, Persians, Turks, Jews, and Christians.",
    },
    {
      title: "Learning",
      text: "Harun al-Rashid and al-Ma'mun were major patrons of learning.",
    },
    {
      title: "House of Wisdom",
      text: "A center for translation, scholarship, and scientific advancement.",
    },
    {
      title: "Translation movement",
      text: "Scholars translated works from Greek, Persian, and Indian sources into Arabic.",
    },
  ],
};

export const citySection: StorySectionData = {
  id: "the-city-of-baghdad",
  title: "The City of Baghdad",
  body: [
    "Baghdad was a diverse and cosmopolitan city.",
    "Islam was the dominant religion, but the city was known for its religious tolerance, allowing Jewish and Christian scholars to live and work there.",
    "The Abbasid caliphs, especially Harun al-Rashid and al-Ma'mun, were major patrons of learning.",
    "One of the most important institutions in Baghdad was the House of Wisdom, a center for translation, scholarship, and scientific advancement.",
    "Scholars there translated works from Greek, Persian, and Indian sources into Arabic.",
  ],
  bullets: [
    "This created connections between Greek philosophy and science, Indian mathematics, and Persian administrative knowledge.",
    "Because of this exchange, Baghdad became a central node in the Afro-Eurasian network of knowledge, linking the Mediterranean, the Middle East, and Asia.",
  ],
  aside: {
    title: "Background of the city",
    items: [
      "Arabs, Persians, Turks, Jews, and Christians lived in the city.",
      "Religious tolerance allowed Jewish and Christian scholars to work there.",
      "The House of Wisdom linked Greek, Persian, and Indian learning.",
    ],
  },
};

export const importanceIntro = [
  "Baghdad stands out as the most important stop in the story because it acted as a bridge of knowledge. Without Baghdad, much of ancient Greek learning might have been lost.",
];

export const mathematicsCard: EvidenceCardData = {
  title: "Advancements in Mathematics",
  body: [
    "Baghdad played a key role in developing algebra and spreading the Hindu-Arabic numeral system.",
    "The mathematician al-Khwarizmi worked in Baghdad and wrote influential texts that introduced algebraic methods still used today.",
  ],
  bullets: [
    "According to Oxford Reference, the translation movement in Baghdad led to major developments in mathematics, including algebra and numerical systems that later spread to Europe.",
  ],
  source: "Oxford Reference, \"House of Wisdom.\" Oxford University Press.",
};

export const medicineCard: EvidenceCardData = {
  title: "Advancements in Medicine",
  body: [
    "Baghdad was also a leader in medicine.",
    "Hospitals in the city were advanced for their time, and physicians studied both Greek and Islamic medical texts.",
  ],
  bullets: [
    "A study from JSTOR explains that Abbasid-era scholars combined earlier Greek medical knowledge with new observations, leading to improved medical practices and hospital systems.",
  ],
  source: "JSTOR, \"Medicine in the Medieval Islamic World.\"",
};

export const transferSteps: TransferStep[] = [
  {
    title: "Greek texts survive",
    description: "After the fall of the Western Roman Empire, many Greek texts survived in the Byzantine Empire.",
  },
  {
    title: "Baghdad translates",
    description: "Abbasid leaders sponsored translation into Arabic, bringing Greek, Persian, and Indian learning together.",
  },
  {
    title: "Al-Andalus receives",
    description: "From Baghdad, knowledge spread westward into Islamic Spain.",
  },
  {
    title: "Christian Europe reopens",
    description: "European scholars later translated Arabic texts into Latin during the Renaissance.",
  },
];

export const networkSection: StorySectionData = {
  id: "baghdad-in-the-larger-story",
  title: "Baghdad in the Larger Story",
  body: [
    "Baghdad plays a crucial role in the broader story of how knowledge moved across civilizations.",
    "After the fall of the Western Roman Empire, many Greek texts survived in the Byzantine Empire. These works were later brought into the Islamic world through trade, conquest, and scholarly exchange. Abbasid leaders actively sponsored their translation into Arabic.",
  ],
  bullets: [
    "From Baghdad, this knowledge spread westward into Islamic Spain (Al-Andalus) and then into Christian Europe.",
    "European scholars later translated Arabic texts into Latin, reintroducing classical Greek ideas during the Renaissance.",
  ],
};

export const conclusionSection: StorySectionData = {
  id: "conclusion",
  title: "Conclusion",
  body: [
    "Baghdad was more than just a city - it was a center of innovation, translation, and cultural exchange.",
    "Its scholars preserved and expanded knowledge that shaped mathematics, medicine, and science for centuries.",
    "Without Baghdad, the intellectual history of both the Islamic world and Europe would look very different.",
  ],
  bullets: [],
};

export const citations: Citation[] = [
  {
    label: "Oxford Reference",
    description: "House of Wisdom. Oxford University Press.",
  },
  {
    label: "JSTOR",
    description: "Medicine in the Medieval Islamic World.",
  },
];

