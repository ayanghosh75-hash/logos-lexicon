// Logos Lexicon Guided Tour Configuration & Narration Scripts
// 15 Interactive Steps covering every major capability of the application.
// Fully editable through the secure /admin/lexi administrative dashboard.

export interface TourStep {
  id: number;
  title: string;
  targetSelector?: string; // CSS selector or data attribute to highlight
  narration: string;
  actionHint?: string;
  enabled: boolean;
}

export const OPENING_NARRATION =
  "Welcome to Logos Lexicon—your multilingual guide to biblical and theological words. I’m Lexi, and I’m here to help you explore Christian terminology in English, Indian languages, Korean, Biblical Greek and Biblical Hebrew. Would you like a short tour?";

export const CLOSING_NARRATION =
  "You’re ready to explore Logos Lexicon. Search for any biblical or theological term, change your language whenever you wish, or select Ask Lexi if you need help. May your study bring understanding, wisdom and truth.";

export const DEFAULT_TOUR_STEPS: TourStep[] = [
  {
    id: 1,
    title: 'Welcome to Logos Lexicon',
    targetSelector: '[data-tour="hero-logo"]',
    narration:
      'Logos Lexicon is an academically rigorous Christian theological dictionary built to bring clarity to biblical truth across 15 modern and ancient languages.',
    actionHint: 'Notice our core emblem unifying the scriptures, divine light, and speech.',
    enabled: true,
  },
  {
    id: 2,
    title: 'Selecting a Language',
    targetSelector: '[data-tour="nav-language"]',
    narration:
      'You can switch your interface and dictionary between 15 languages at any time—including Bengali, Hindi, Urdu in native Nastaliq script, Korean, and regional Indian languages.',
    actionHint: 'Tap the language button in the navigation bar to preview all languages.',
    enabled: true,
  },
  {
    id: 3,
    title: 'Searching for a Term',
    targetSelector: '[data-tour="hero-search"]',
    narration:
      'Our multilingual search understands English headwords, local scripts, transliterations, and biblical Greek and Hebrew terms with typo tolerance.',
    actionHint: 'Type any theological word in your own script or transliterated Latin.',
    enabled: true,
  },
  {
    id: 4,
    title: 'Browsing the A–Z Dictionary',
    targetSelector: '[data-tour="browse-dictionary"]',
    narration:
      'Browse through all master-controlled concepts organized alphabetically or filter by doctrinal discipline such as Systematic Theology, Biblical Theology, or Church History.',
    actionHint: 'Use the A–Z index to explore theological vocabulary systematically.',
    enabled: true,
  },
  {
    id: 5,
    title: 'Choosing Simple, Study or Academic Explanation',
    targetSelector: '[data-tour="reading-levels"]',
    narration:
      'Every concept is presented in three distinct reading levels: Simple for newcomers, Study for pastors and teachers, and Academic for seminary students with citations.',
    actionHint: 'Toggle between Simple, Study, and Academic without leaving the entry.',
    enabled: true,
  },
  {
    id: 6,
    title: 'Comparing a Term Across Languages',
    targetSelector: '[data-tour="nav-compare"]',
    narration:
      'Our Compare tool presents a side-by-side linguistic matrix showing local scripts, transliterations, pronunciation guides, and translation nuances across 15 languages.',
    actionHint: 'Export, print, or share cross-language comparative studies.',
    enabled: true,
  },
  {
    id: 7,
    title: 'Exploring Biblical Greek',
    targetSelector: '[data-tour="nav-original-languages"]',
    narration:
      'Examine Greek New Testament lemmas with Strong’s numbers, morphology, and semantic ranges—equipped with warnings against illegitimate root fallacies.',
    actionHint: 'Discover the exact Greek terms used by the Apostles.',
    enabled: true,
  },
  {
    id: 8,
    title: 'Exploring Biblical Hebrew',
    targetSelector: '[data-tour="nav-original-languages"]',
    narration:
      'Study Old Testament Hebrew and Aramaic roots rendered in authentic right-to-left typography with contextual covenantal fidelity.',
    actionHint: 'Understand the depth of terms like Chesed and Berith.',
    enabled: true,
  },
  {
    id: 9,
    title: 'Saving a Word',
    targetSelector: '[data-tour="entry-bookmark"]',
    narration:
      'Bookmark any concept or write private research notes. Your saved entries remain securely stored right on your device for immediate retrieval.',
    actionHint: 'Tap the bookmark icon on any card to save it.',
    enabled: true,
  },
  {
    id: 10,
    title: 'Using Learning Collections',
    targetSelector: '[data-tour="nav-learn"]',
    narration:
      'Deepen your biblical knowledge with daily five-minute lessons, formative quizzes, and healthy opt-in learning goals without guilt or false urgency.',
    actionHint: 'Take five minutes each morning for structured theological growth.',
    enabled: true,
  },
  {
    id: 11,
    title: 'Installing the Application (PWA)',
    targetSelector: '[data-tour="nav-install"]',
    narration:
      'Install Logos Lexicon as a native-quality app on your Windows, Mac, Android, iPhone, iPad, or Chromebook for lightning-fast performance and offline study.',
    actionHint: 'Download localized offline language packs to study without internet.',
    enabled: true,
  },
  {
    id: 12,
    title: 'Checking for Updates',
    targetSelector: '[data-tour="update-system"]',
    narration:
      'When new theological entries or language packs are published, Logos Lexicon updates smoothly without ever losing your bookmarks or personal notes.',
    actionHint: 'Non-disruptive update notifications keep your study materials current.',
    enabled: true,
  },
  {
    id: 13,
    title: 'Sharing an Entry & Permanent QR Codes',
    targetSelector: '[data-tour="entry-share"]',
    narration:
      'Circulate theological definitions with verified permanent links or generate high-resolution QR codes in vector SVG or PNG for print bulletins and study guides.',
    actionHint: 'Share directly to WhatsApp, Telegram, Email, or SMS.',
    enabled: true,
  },
  {
    id: 14,
    title: 'Managing Accessibility Settings',
    targetSelector: '[data-tour="nav-theme"]',
    narration:
      'Customize your experience with high-contrast mode, text size scaling, light/dark themes, and reduced-motion settings adhering to WCAG 2.2 AA standards.',
    actionHint: 'Toggle between themes or enable high-contrast readability anytime.',
    enabled: true,
  },
  {
    id: 15,
    title: 'Understanding Free and Premium Features',
    targetSelector: '[data-tour="theological-standards"]',
    narration:
      'Essential dictionary definitions, original languages, and multilingual search are completely free for all readers. Advanced institutional research tools support our sustainability.',
    actionHint: 'Our mission is to make biblical truth freely accessible worldwide.',
    enabled: true,
  },
];

const STORAGE_KEY = 'logos_tour_config_v1';

export function getStoredTourSteps(): TourStep[] {
  if (typeof window === 'undefined') return DEFAULT_TOUR_STEPS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_TOUR_STEPS;
    return JSON.parse(raw) as TourStep[];
  } catch (e) {
    return DEFAULT_TOUR_STEPS;
  }
}

export function saveTourSteps(steps: TourStep[]): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(steps));
  }
}

export function resetTourSteps(): TourStep[] {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY);
  }
  return DEFAULT_TOUR_STEPS;
}
