import { MasterEntry } from './types';
import { SOURCE_REGISTER } from './sourceRegister';

/**
 * Logos Lexicon Foundational Pilot Batch (100 Authentic Theological Terms)
 * Populated per Controlled Level 4 Mandate directed by Ayan Kumar Ghosh.
 * Covers all 61 master theological sections with 3-tier reading levels,
 * original Biblical languages (Greek/Hebrew/Aramaic), confessional citations,
 * and localized Bengali translations.
 */
export const PILOT_BATCH_100: MasterEntry[] = [
{
  id: "entry-grace",
  slug: "grace",
  headwordEnglish: "Grace",
  alternativeSpellings: [
    "Divine Grace",
    "Unmerited Favor"
  ],
  pronunciationIpa: "/ɡreɪs/",
  partOfSpeech: "Noun",
  category: "Systematic Theology",
  theologicalPaths: [
    "systematic-theology",
    "soteriology",
    "biblical-greek"
  ],
  definitionSimple: "God's completely free, unearned love, kindness, and favor given to human beings who do not deserve it and cannot earn it.",
  definitionStudy: "The unmerited and condescending favor of God toward fallen humanity, manifested supreme in the person and redemptive work of Jesus Christ, and applied by the Holy Spirit to regenerate, justify, sanctify, and sustain the believer.",
  definitionAcademic: "A central locus of Christian soteriology denoting the unmerited divine self-communication (gratia increata) and its transformative interior effects in human nature (gratia creata). It stands in antithesis to human merit, mediating reconciliation through Christological mediation.",
  biblicalUsage: "In the Old Testament, grace is articulated through 'chen' (spontaneous favor) and 'chesed' (covenantal lovingkindness). In the New Testament, 'charis' designates the radical gift of divine salvation in Christ (Eph 2:8-9), distinct from the works of the Law.",
  scriptureReferences: [
    "Genesis 6:8",
    "Exodus 34:6",
    "John 1:14",
    "Romans 3:24",
    "Romans 5:1-2",
    "Ephesians 2:8-9",
    "Titus 2:11"
  ],
  historicalDevelopment: "Systematized in the Augustinian-Pelagian debates, re-articulated in the Protestant Reformation ('Sola Gratia'), and defined respectively in Dort, Trent, and Wesleyan theology.",
  theologicalSignificance: "Grace defines the gratuitous nature of salvation, upholding the absolute sovereignty of divine benevolence.",
  majorInterpretivePositions: {
    issue: "The relationship between divine grace and human free will in regeneration.",
    biblicalEvidence: "Passages emphasizing monergism (Rom 9:15-18) vs universal invitation (1 Tim 2:4).",
    historicalBackground: "Augustinian monergism versus Remonstrant synergism.",
    positions: [
      {
        name: "Monergistic Efficacious Grace (Reformed)",
        description: "Special saving grace irresistibly regenerates the elect.",
        traditions: [
          "Reformed",
          "Presbyterian"
        ]
      },
      {
        name: "Prevenient Synergistic Grace (Arminian / Wesleyan)",
        description: "Prevenient grace is universal, enabling free response.",
        traditions: [
          "Methodist",
          "Wesleyan"
        ]
      },
      {
        name: "Sacramental Infused Grace (Roman Catholic)",
        description: "Sanctifying grace is infused through sacraments, enabling cooperation.",
        traditions: [
          "Roman Catholic"
        ]
      }
    ]
  },
  denominationalDistinctions: [
    {
      tradition: "Reformed",
      positionSummary: "Emphasizes Sola Gratia as unconditional election and effectual calling."
    },
    {
      tradition: "Arminian / Wesleyan",
      positionSummary: "Emphasizes universal prevenient grace enabling all to respond."
    },
    {
      tradition: "Eastern Orthodox",
      positionSummary: "Views grace as theosis (deification) and synergistic participation in uncreated energies."
    }
  ],
  originalLanguages: [
    {
      language: "Biblical Greek",
      scriptUnicode: "χάρις",
      lemma: "charis",
      transliteration: "cháris",
      pronunciation: "KHAH-rees",
      partOfSpeech: "Noun, Feminine",
      semanticRange: "Grace, favor, goodwill, gift, gratitude, gracious disposition",
      strongsNumber: "G5485",
      biblicalOccurrencesCount: 156,
      importantOccurrences: [
        "John 1:14",
        "Rom 3:24",
        "Eph 2:8-9"
      ],
      translationCautions: "Avoid reducing charis to merely pleasant demeanor or polite charm; in Paul it is a cosmic, sovereign redemptive power.",
      sources: [
        "Thayer's Greek-English Lexicon",
        "Strong's Exhaustive Concordance"
      ],
      verified: true
    },
    {
      language: "Biblical Hebrew",
      scriptUnicode: "חֵן",
      lemma: "chen",
      transliteration: "chên",
      pronunciation: "khane",
      partOfSpeech: "Noun, Masculine",
      semanticRange: "Favor, grace, charm, acceptance in the eyes of a superior",
      strongsNumber: "H2580",
      biblicalOccurrencesCount: 69,
      importantOccurrences: [
        "Gen 6:8",
        "Exod 33:17",
        "Prov 3:34"
      ],
      translationCautions: "Often used in the idiom \"find favor in the eyes of\", indicating condescension by the superior party.",
      sources: [
        "Brown-Driver-Briggs Hebrew and English Lexicon"
      ],
      verified: true
    }
  ],
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T10:00:00Z",
  updatedAt: "2026-09-18T10:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-grace",
      languageCode: "bn",
      localHeadword: "অনুগ্রহ (Anugraha)",
      definitionSimple: "ঈশ্বরের সম্পূর্ণ নিঃশর্ত ও অপ্রত্যাশিত প্রেম ও দয়া, যা মানুষ নিজের যোগ্যতায় অর্জন করতে পারে না।",
      definitionStudy: "পতিত মানবজাতির প্রতি যীশু খ্রীষ্টের মাধ্যমে প্রকাশিত ঈশ্বরের সার্বভৌম ও অমূল্য করুণা।",
      definitionAcademic: "খ্রীষ্টীয় পরিত্রাণতত্ত্বের মূল ভিত্তি, যা মানুষের সকল গুণ বা পুণ্যকে বাদ দিয়ে ঐশ্বরিক স্ব-উৎসর্গকে তুলে ধরে।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T10:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.bdb, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","bdb","westminster","logos_editorial"]
},

{
  id: "entry-covenant",
  slug: "covenant",
  headwordEnglish: "Covenant",
  alternativeSpellings: [
    "Divine Covenant",
    "Testament"
  ],
  pronunciationIpa: "/ˈkʌv.ən.ənt/",
  partOfSpeech: "Noun",
  category: "Biblical Theology",
  theologicalPaths: [
    "biblical-theology",
    "covenant-theology",
    "old-testament-studies"
  ],
  definitionSimple: "A sacred, binding promise and relationship initiated by God with His people, guaranteed by His divine oath.",
  definitionStudy: "A sovereignly administered bond in blood, establishing a relational, legal, and redemptive structure between the holy Creator and chosen humanity, accompanied by blessings and sanctions.",
  definitionAcademic: "A foundational architectural category in biblical theology (Hebrew: berith; Greek: diatheke) structuring redemptive history. It transforms Ancient Near Eastern treaty forms into an asymmetric vehicle of Yahwistic self-binding.",
  biblicalUsage: "Structures the Noahic (Gen 9), Abrahamic (Gen 15, 17), Mosaic (Exod 19-24), Davidic (2 Sam 7), and New Covenant (Jer 31; Luke 22:20; Heb 8).",
  scriptureReferences: [
    "Genesis 9:8-17",
    "Genesis 15:1-21",
    "Exodus 19:5-6",
    "2 Samuel 7:12-16",
    "Jeremiah 31:31-34",
    "Luke 22:20",
    "Hebrews 9:15"
  ],
  theologicalSignificance: "Covenant provides the structural unity of the Old and New Testaments.",
  originalLanguages: [
    {
      language: "Biblical Hebrew",
      scriptUnicode: "בְּרִית",
      lemma: "berith",
      transliteration: "bərît",
      pronunciation: "beh-REETH",
      partOfSpeech: "Noun, Feminine",
      semanticRange: "Covenant, treaty, alliance, pledge, divine ordinance",
      strongsNumber: "H1285",
      biblicalOccurrencesCount: 284,
      importantOccurrences: [
        "Gen 15:18",
        "Exod 24:7",
        "Jer 31:31"
      ],
      translationCautions: "Berith is sovereignly instituted by God; it is not a negotiation among equals.",
      sources: [
        "Brown-Driver-Briggs Hebrew and English Lexicon"
      ],
      verified: true
    }
  ],
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T10:00:00Z",
  updatedAt: "2026-09-18T10:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-covenant",
      languageCode: "bn",
      localHeadword: "নিয়ম (Niyam)",
      definitionSimple: "ঈশ্বরের দ্বারা প্রতিষ্ঠিত এক পবিত্র ও অলঙ্ঘনীয় আত্মিক চুক্তি ও প্রতিশ্রুতি।",
      definitionStudy: "পবিত্র ঈশ্বর ও মানবজাতির মধ্যে রক্তে স্বাক্ষরিত সার্বভৌম সম্পর্ক ও প্রতিশ্রুতির পরিকাঠামো।",
      definitionAcademic: "বাইবেলীয় ধর্মতত্ত্বের মূল পরিকাঠামো যা সৃষ্টির ধারাবাহিকতায় ঈশ্বরের প্রতিজ্ঞার বিকাশ তুলে ধরে।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T10:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.bdb, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["bdb","westminster","logos_editorial"]
},

{
  id: "entry-justification",
  slug: "justification",
  headwordEnglish: "Justification",
  alternativeSpellings: [
    "Forensic Justification",
    "Justification by Faith"
  ],
  pronunciationIpa: "/ˌdʒʌs.tɪ.fɪˈkeɪ.ʃən/",
  partOfSpeech: "Noun",
  category: "Systematic Theology",
  theologicalPaths: [
    "systematic-theology",
    "soteriology",
    "historical-theology"
  ],
  definitionSimple: "God's legal declaration that a guilty sinner is righteous before Him, solely through faith in Jesus Christ.",
  definitionStudy: "An instantaneous forensic act of God's free grace wherein He pardons all our sins and accepts us as righteous in His sight, only for the righteousness of Christ imputed to us and received by faith alone.",
  definitionAcademic: "The declarative (forensic) judicial verdict of God (dikaiōsis) wherein the alien righteousness of Christ (iustitia aliena) is imputed (imputatio) to the believer, effecting a change of legal status rather than an immediate ontological transformation.",
  biblicalUsage: "Central to Pauline soteriology (Rom 3:21-26, 4:1-5, 5:1; Gal 2:16), contrasted with human works of Torah.",
  scriptureReferences: [
    "Genesis 15:6",
    "Habakkuk 2:4",
    "Romans 3:21-28",
    "Romans 4:1-8",
    "Galatians 2:16"
  ],
  theologicalSignificance: "The material principle of the Reformation ('articulus stantis et cadentis ecclesiae').",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T10:00:00Z",
  updatedAt: "2026-09-18T10:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-justification",
      languageCode: "bn",
      localHeadword: "ধার্মিক গণ্যকরণ (Dharmik Ganyakaran)",
      definitionSimple: "যীশু খ্রীষ্টে বিশ্বাসের মাধ্যমে ঈশ্বরের আদালতে পাপী মানুষকে নির্দোষ ও ধার্মিক বলে ঘোষণা করা।",
      definitionStudy: "ঈশ্বরের অনুগ্রহের এক আইনি রায় যার মাধ্যমে খ্রীষ্টের ন্যায়পরায়ণতা বিশ্বাসীর উপর আরোপিত হয়।",
      definitionAcademic: "সংস্কার আন্দোলনের প্রধান নীতি, যেখানে অভ্যন্তরীণ শুদ্ধির পূর্বে বাহ্যিক আইনি অবস্থানের পরিবর্তন ঘটে।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T10:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.westminster, SOURCE_REGISTER.augsburg, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","westminster","augsburg","logos_editorial"]
},

{
  id: "entry-logos",
  slug: "logos",
  headwordEnglish: "Logos",
  alternativeSpellings: [
    "The Word",
    "The Divine Word"
  ],
  pronunciationIpa: "/ˈlɒɡ.ɒs/",
  partOfSpeech: "Noun",
  category: "Christology",
  theologicalPaths: [
    "christology",
    "trinity",
    "biblical-greek",
    "theology-proper"
  ],
  definitionSimple: "Jesus Christ as the eternal, personal Word and revelation of God who became human to save us.",
  definitionStudy: "The second Person of the Holy Trinity, eternally generated by the Father, through whom the universe was created, who took on human flesh (incarnation) to reveal God and accomplish redemption.",
  definitionAcademic: "Johannine title synthesizing Hebrew 'Dabar Yahweh' (creative and prophetic utterance) with Hellenistic philosophical concepts of cosmic reason, radicalizing them into the historical hypostatic reality of the incarnate Son.",
  biblicalUsage: "John 1:1-18; 1 John 1:1; Revelation 19:13.",
  scriptureReferences: [
    "John 1:1-4",
    "John 1:14",
    "Colossians 1:15-17",
    "Hebrews 1:1-3",
    "Revelation 19:13"
  ],
  theologicalSignificance: "Secures the eternal deity and pre-existence of Christ against Arian subordinationism.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T10:00:00Z",
  updatedAt: "2026-09-18T10:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-logos",
      languageCode: "bn",
      localHeadword: "বাক্য (লোগোস) (Bakyo / Logos)",
      definitionSimple: "ঈশ্বরের অনন্ত পুত্র যীশু যিনি বাক্যরূপে মাংসে অবতীর্ণ হয়ে আমাদের উদ্ধার করেছেন।",
      definitionStudy: "যোহন লিখিত সুসমাচারে প্রকাশিত ত্রিত্বের দ্বিতীয় ব্যক্তি, সৃষ্টির মাধ্যম ও প্রকাশিত সত্য।",
      definitionAcademic: "যোহনীয় খ্রীষ্টতত্ত্বের পরম ভিত্তি, যা অনন্ত ঈশ্বরত্বের সাথে ঐতিহাসিক অবতারের সংযোগ স্থাপন করে।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T10:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.nicene_creed, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","nicene_creed","logos_editorial"]
},

{
  id: "entry-kingdom-of-god",
  slug: "kingdom-of-god",
  headwordEnglish: "Kingdom of God",
  alternativeSpellings: [
    "Kingdom of Heaven",
    "Basileia tou Theou"
  ],
  pronunciationIpa: "/ˈkɪŋ.dəm əv ɡɒd/",
  partOfSpeech: "Noun Phrase",
  category: "Biblical Theology",
  theologicalPaths: [
    "kingdom-of-god",
    "eschatology",
    "new-testament-studies"
  ],
  definitionSimple: "The sovereign rule and reign of God in human hearts and over all creation, begun in Jesus and fulfilled at His return.",
  definitionStudy: "The dynamic sovereign reign of God breaking into present history through the ministry, death, and resurrection of Jesus Christ, inaugurating the New Covenant age ('already') while awaiting ultimate consummation ('not yet').",
  definitionAcademic: "The central motif of Jesus' synoptic proclamation (basileia tou Theou), signifying the active exercise of divine kingship rather than a static geographic realm, exhibiting inaugurated eschatological tension.",
  biblicalUsage: "Dominates the Synoptic Gospels (Mark 1:15; Matt 6:33; Luke 17:20-21).",
  scriptureReferences: [
    "Psalm 145:11-13",
    "Daniel 7:13-14",
    "Matthew 6:33",
    "Mark 1:14-15",
    "Luke 17:20-21",
    "Revelation 11:15"
  ],
  theologicalSignificance: "Unifies biblical history from creation to new creation under God's righteous rule.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T10:00:00Z",
  updatedAt: "2026-09-18T10:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-kingdom-of-god",
      languageCode: "bn",
      localHeadword: "ঈশ্বরের রাজ্য (Ishwarer Rajyo)",
      definitionSimple: "সমগ্র সৃষ্টি ও মানব হৃদয়ের উপর ঈশ্বরের সার্বভৌম শাসন ও অধিকার।",
      definitionStudy: "যীশু খ্রীষ্টের মাধ্যমে সূচিত ঈশ্বরের জীবন্ত রাজত্ব, যা অন্তিম দিনে পরিপূর্ণ মহিমায় প্রকাশিত হবে।",
      definitionAcademic: "যীশুর সুসমাচার ঘোষণার কেন্দ্রীয় বিষয়, যা উপস্থিত বাস্তবতা এবং ভবিষ্যত পূর্ণতার মধ্যে অবস্থিত।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T10:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.schaff, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","schaff","logos_editorial"]
},

{
  id: "entry-atonement",
  slug: "atonement",
  headwordEnglish: "Atonement",
  alternativeSpellings: [
    "Substitutionary Atonement",
    "Hilasterion",
    "Propitiation"
  ],
  pronunciationIpa: "/əˈtoʊn.mənt/",
  partOfSpeech: "Noun",
  category: "Systematic Theology",
  theologicalPaths: [
    "soteriology",
    "systematic-theology",
    "christology"
  ],
  definitionSimple: "Jesus Christ dying on the cross in our place to pay the penalty for our sins and bring us back into friendship with God.",
  definitionStudy: "The sacrificial, substitutionary work of Jesus Christ on the cross, whereby divine justice is satisfied, holy wrath is propitiated, sin is expiated, and reconciliation between holy God and sinful humanity is accomplished.",
  definitionAcademic: "The objective redemptive act of Christ fulfilling sacrificial typology through penal substitution (vicaria satisfactio), propitiating divine wrath (hilasterion), expiating guilt, and vanquishing demonic powers (Christus Victor).",
  biblicalUsage: "Leviticus 16 (Day of Atonement); Isaiah 53; Romans 3:25; 2 Corinthians 5:21; 1 John 2:2.",
  scriptureReferences: [
    "Leviticus 17:11",
    "Isaiah 53:4-6",
    "Romans 3:24-26",
    "2 Corinthians 5:21",
    "Hebrews 9:11-14",
    "1 John 2:2"
  ],
  theologicalSignificance: "Guarantees that salvation preserves divine holy justice while demonstrating infinite mercy.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T10:00:00Z",
  updatedAt: "2026-09-18T10:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-atonement",
      languageCode: "bn",
      localHeadword: "প্রায়শ্চিত্ত (Prayashchitta)",
      definitionSimple: "আমাদের পাপের শাস্তি নিজের উপর গ্রহণ করে ক্রুশে যীশুর আত্মত্যাগ ও ঈশ্বরের সাথে মিলন।",
      definitionStudy: "পবিত্র ঈশ্বরের ন্যায়বিচার পূর্ণ করতে এবং পাপ মোচনের জন্য ক্রুশে খ্রীষ্টের প্রতিনিধিত্বমূলক আত্মাহুতি।",
      definitionAcademic: "পাপের শাস্তি পরিশোধ ও ঈশ্বরের পবিত্র ক্রোধ প্রশমনের মাধ্যমে মানবজাতির পুনঃস্থাপন।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T10:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.bdb, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","bdb","westminster","logos_editorial"]
},

{
  id: "entry-trinity",
  slug: "trinity",
  headwordEnglish: "Trinity",
  alternativeSpellings: [
    "Triune God",
    "Holy Trinity",
    "Trias"
  ],
  pronunciationIpa: "/ˈtrɪn.ɪ.ti/",
  partOfSpeech: "Noun",
  category: "Theology Proper",
  theologicalPaths: [
    "trinity",
    "theology-proper",
    "systematic-theology",
    "historical-theology"
  ],
  definitionSimple: "There is only one true God, who eternally exists as three distinct Persons: the Father, the Son, and the Holy Spirit.",
  definitionStudy: "The Christian confession that the one undivided Godhead exists eternally in three co-equal, co-eternal Persons (hypostases/personae)—Father, Son, and Holy Spirit—sharing the identical divine essence (homoousios).",
  definitionAcademic: "Classical trinitarian monotheism articulated at Nicaea (325) and Constantinople (381): one divine essence (ousia/substantia) in three distinct subsisting relations (hypostases/personae), with perichoresis (mutual indwelling) and unified external operations (opera trinitatis ad extra indivisa sunt).",
  biblicalUsage: "Matthew 28:19; 2 Corinthians 13:14; John 1:1-18, 14:16-17; Ephesians 4:4-6.",
  scriptureReferences: [
    "Deuteronomy 6:4",
    "Matthew 3:16-17",
    "Matthew 28:19",
    "2 Corinthians 13:14",
    "Ephesians 4:4-6",
    "1 Peter 1:2"
  ],
  theologicalSignificance: "Defines the very nature of the Christian God against polytheism, unitarianism, and modalism.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T10:00:00Z",
  updatedAt: "2026-09-18T10:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-trinity",
      languageCode: "bn",
      localHeadword: "ত্রিত্ব / ত্রিয়েক ঈশ্বর (Trittwa / Triyek Ishwar)",
      definitionSimple: "একমাত্র সত্য ঈশ্বর যিনি অনাদিকাল থেকে পিতা, পুত্র এবং পবিত্র আত্মা—এই তিন ব্যক্তিত্বে বিরাজমান।",
      definitionStudy: "একই ঐশ্বরিক সত্ত্বায় সমান মহিমা ও অধিকারে চিরকাল বিরাজমান পিতা, পুত্র ও পবিত্র আত্মা।",
      definitionAcademic: "নিসিয়া ও কনস্টান্টিনোপল বিশ্বাসনামায় সংজ্ঞায়িত খ্রীষ্টীয় ঈশ্বরতত্ত্বের মূল স্তম্ভ।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T10:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.nicene_creed, SOURCE_REGISTER.schaff, SOURCE_REGISTER.augsburg, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["nicene_creed","schaff","augsburg","logos_editorial"]
},

{
  id: "entry-faith",
  slug: "faith",
  headwordEnglish: "Faith",
  alternativeSpellings: [
    "Saving Faith",
    "Pistis",
    "Emunah"
  ],
  pronunciationIpa: "/feɪθ/",
  partOfSpeech: "Noun",
  category: "Systematic Theology",
  theologicalPaths: [
    "soteriology",
    "biblical-theology",
    "biblical-greek"
  ],
  definitionSimple: "Trusting wholeheartedly in God and believing His promises through Jesus Christ.",
  definitionStudy: "A supernatural gift of God comprising knowledge of biblical truth (notitia), intellectual assent to its veracity (assensus), and personal, wholehearted reliance upon Christ alone for salvation (fiducia).",
  definitionAcademic: "The instrumental cause of justification (causa instrumentalis), constituted in Reformed scholasticism by notitia, assensus, and fiducia, distinct from mere historical credence (fides historica) or miraculous faith.",
  biblicalUsage: "Habakkuk 2:4; Romans 1:17; Hebrews 11:1-6; Ephesians 2:8; James 2:14-26.",
  scriptureReferences: [
    "Habakkuk 2:4",
    "Romans 1:17",
    "Romans 10:17",
    "Ephesians 2:8-9",
    "Hebrews 11:1-6",
    "James 2:17-26"
  ],
  theologicalSignificance: "The sole empty hand by which the sinner receives Christ and His benefits ('Sola Fide').",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T10:00:00Z",
  updatedAt: "2026-09-18T10:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-faith",
      languageCode: "bn",
      localHeadword: "বিশ্বাস (Bishwas)",
      definitionSimple: "ঈশ্বরের প্রতিশ্রুতি ও যীশু খ্রীষ্টের উপর হৃদয়ের পূর্ণ নির্ভরতা ও আস্থা।",
      definitionStudy: "ঐশ্বরিক সত্যের জ্ঞান, সম্মতি এবং পরিত্রাণের জন্য একমাত্র খ্রীষ্টের উপর পূর্ণ সমর্পণ।",
      definitionAcademic: "ধার্মিক গণ্যকরণের একমাত্র মাধ্যম (Sola Fide), যা জ্ঞান, সম্মতি ও আস্থার সমন্বয়ে গঠিত।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T10:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.bdb, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","bdb","westminster","logos_editorial"]
},

{
  id: "entry-incarnation",
  slug: "incarnation",
  headwordEnglish: "Incarnation",
  alternativeSpellings: [
    "The Word Made Flesh",
    "Ensarcosis"
  ],
  pronunciationIpa: "/ˌɪn.kɑːrˈneɪ.ʃən/",
  partOfSpeech: "Noun",
  category: "Christology",
  theologicalPaths: [
    "christology",
    "theology-proper",
    "systematic-theology"
  ],
  definitionSimple: "The incredible truth that the eternal Son of God became fully human in Jesus Christ without ceasing to be God.",
  definitionStudy: "The theological mystery wherein the eternal Second Person of the Trinity assumed a complete human nature (body and rational soul) into personal union with His divine nature, conceived by the Holy Spirit in the womb of the Virgin Mary.",
  definitionAcademic: "The hypostatic union (unio hypostatica) defined at Chalcedon (451 AD): two complete natures (divine and human) united in one person (hypostasis) without confusion, without change, without division, and without separation.",
  biblicalUsage: "John 1:14; Philippians 2:6-8; 1 Timothy 3:16; Hebrews 2:14-17.",
  scriptureReferences: [
    "Isaiah 7:14",
    "Matthew 1:20-23",
    "John 1:14",
    "Philippians 2:5-11",
    "Hebrews 2:14-18",
    "1 John 4:2"
  ],
  theologicalSignificance: "Without the incarnation, genuine substitutionary atonement and bodily resurrection are impossible.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-incarnation",
      languageCode: "bn",
      localHeadword: "নররূপ ধারণ / অবতার (Incarnation / Dehadharon)",
      definitionSimple: "ঈশ্বরের পুত্র যীশুর মানুষ হিসেবে পৃথিবীতে জন্মগ্রহণ করার অলৌকিক ঘটনা।",
      definitionStudy: "পবিত্র আত্মার শক্তিতে গর্ভধারণের মাধ্যমে সম্পূর্ণ ঈশ্বর ও সম্পূর্ণ মানুষের একত্বে খ্রীষ্টের আগমন।",
      definitionAcademic: "খালকেদনীয় বিশ্বাসনামায় সংজ্ঞায়িত \"হাইপোস্ট্যাটিক ইউনিয়ন\" (Hypostatic Union) তত্ত্বের মূল ভিত্তি।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.schaff, SOURCE_REGISTER.nicene_creed, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["schaff","nicene_creed","logos_editorial"]
},

{
  id: "entry-sanctification",
  slug: "sanctification",
  headwordEnglish: "Sanctification",
  alternativeSpellings: [
    "Progressive Sanctification",
    "Holiness of Life"
  ],
  pronunciationIpa: "/ˌsæŋk.tɪ.fɪˈkeɪ.ʃən/",
  partOfSpeech: "Noun",
  category: "Systematic Theology",
  theologicalPaths: [
    "soteriology",
    "moral-theology-ethics",
    "systematic-theology"
  ],
  definitionSimple: "The lifelong process by which God makes believers more like Jesus, turning them away from sin toward holy living.",
  definitionStudy: "The ongoing supernatural work of the Holy Spirit delivering justified believers from the pollution of sin, renewing their entire nature in the image of God, and enabling them to die unto sin and live unto righteousness.",
  definitionAcademic: "Distinct from positional justification (a singular forensic declaration), sanctification is moral and transformative (renovatio interior), exhibiting both definitive and progressive dimensions synergistically realized through prayer, Word, and sacraments.",
  biblicalUsage: "1 Thessalonians 4:3, 5:23; Romans 6:1-22; 2 Corinthians 3:18; Hebrews 12:14.",
  scriptureReferences: [
    "John 17:17",
    "Romans 6:19-22",
    "1 Corinthians 6:11",
    "1 Thessalonians 4:3-7",
    "1 Thessalonians 5:23",
    "Hebrews 12:14"
  ],
  theologicalSignificance: "Demonstrates that saving grace never leaves the believer in unrepentant rebellion.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-sanctification",
      languageCode: "bn",
      localHeadword: "পবিত্রকরণ (Pabittrakaran)",
      definitionSimple: "পবিত্র আত্মার মাধ্যমে বিশ্বাসীর পাপময় স্বভাবকে দূর করে খ্রীষ্টের মতো পবিত্র করে তোলার ধারাবাহিক প্রক্রিয়া।",
      definitionStudy: "ধার্মিক গণ্যকৃত ব্যক্তির জীবনে পাপের ক্ষমতা ধ্বংস করে ঈশ্বরের প্রতিমূর্তিতে পুনর্গঠনের আত্মিক যাত্রা।",
      definitionAcademic: "আইনি অবস্থানের পরিবর্তনের পর আত্মিক চরিত্র ও নৈতিক আচরণের ধারাবাহিক রূপান্তরের প্রক্রিয়া।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.westminster, SOURCE_REGISTER.heidelberg, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["westminster","heidelberg","logos_editorial"]
},

{
  id: "entry-redemption",
  slug: "redemption",
  headwordEnglish: "Redemption",
  alternativeSpellings: [
    "Apolytrosis",
    "Ransom"
  ],
  pronunciationIpa: "/rɪˈdɛmp.ʃən/",
  partOfSpeech: "Noun",
  category: "Systematic Theology",
  theologicalPaths: [
    "soteriology",
    "christology",
    "biblical-theology"
  ],
  definitionSimple: "Deliverance from the slavery of sin and death through the costly ransom price of Jesus Christ's blood.",
  definitionStudy: "The act of buying back or liberating fallen humanity from the bondage of sin, guilt, the curse of the Law, and satanic captivity through the payment of a ransom price, namely the precious blood of Jesus Christ.",
  definitionAcademic: "Soteriological category (apolytrosis / padah / ga'al) rooted in Israel's kinsman-redeemer (go'el) institutions and Greco-Roman manumission of slaves, signifying liberation purchased through Christ's vicarious death.",
  biblicalUsage: "Exodus 15:13; Ruth 4:1-12; Mark 10:45; Ephesians 1:7; Colossians 1:14; 1 Peter 1:18-19.",
  scriptureReferences: [
    "Exodus 15:13",
    "Mark 10:45",
    "Romans 3:24",
    "Ephesians 1:7",
    "Colossians 1:13-14",
    "Titus 2:14",
    "1 Peter 1:18-19"
  ],
  theologicalSignificance: "Secures the believer's absolute freedom from the dominion of darkness and legal condemnation.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-redemption",
      languageCode: "bn",
      localHeadword: "মুক্তি / রক্তমূল্যে মোচন (Muktī / Raktamūlye Mochan)",
      definitionSimple: "যীশুর পবিত্র রক্তের মাধ্যমে পাপ ও মৃত্যুর দাসত্ব থেকে মূল্য দিয়ে কিনে মুক্ত করা।",
      definitionStudy: "পাপের ঋণ ও শয়তানের অধীনতা থেকে মানুষকে উদ্ধার করতে খ্রীষ্টের জীবনকে মুক্তিপণ হিসেবে প্রদান।",
      definitionAcademic: "দাসত্ব থেকে মুক্তির আইনি প্রক্রিয়া যা পুরাতন নিয়মের রক্তের বিনিময় এবং নূতন নিয়মের খ্রীষ্টীয় আত্মত্যাগে প্রতিফলিত।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.bdb, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","bdb","westminster","logos_editorial"]
},

{
  id: "entry-reconciliation",
  slug: "reconciliation",
  headwordEnglish: "Reconciliation",
  alternativeSpellings: [
    "Katallage",
    "Peace with God"
  ],
  pronunciationIpa: "/ˌrɛk.ənˌsɪl.iˈeɪ.ʃən/",
  partOfSpeech: "Noun",
  category: "Systematic Theology",
  theologicalPaths: [
    "soteriology",
    "biblical-theology",
    "systematic-theology"
  ],
  definitionSimple: "The restoration of friendship and peace between God and human beings who were once separated as enemies by sin.",
  definitionStudy: "The change of relationship between God and humanity from divine enmity to covenantal peace, effected entirely by God through the cross of Jesus Christ, removing the judicial barrier of hostility.",
  definitionAcademic: "The objective removal of the status of alienation (katallagē) and ontological enmity between God and rebellious humanity, grounded solely in the propitiatory death of Christ and applied through the ministry of reconciliation.",
  biblicalUsage: "Romans 5:10-11; 2 Corinthians 5:18-20; Ephesians 2:14-16; Colossians 1:20-22.",
  scriptureReferences: [
    "Romans 5:10-11",
    "2 Corinthians 5:18-21",
    "Ephesians 2:14-18",
    "Colossians 1:19-22"
  ],
  theologicalSignificance: "Establishes that salvation is relational communion and peace, not merely a sterile juridical transaction.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-reconciliation",
      languageCode: "bn",
      localHeadword: "মিলনসাধন / সন্ধি (Milansadhan / Sandhi)",
      definitionSimple: "পাপের কারণে ঈশ্বরের সাথে তৈরি হওয়া শত্রুতার অবসান ঘটিয়ে শান্তি ও সৌহার্দ্যপূর্ণ সম্পর্কের পুনরুদ্ধার।",
      definitionStudy: "ক্রুশে যীশুর আত্মত্যাগের মাধ্যমে ঈশ্বরের পবিত্র ক্রোধ ও মানুষের অপরাধ দূর করে পরম শান্তি স্থাপন।",
      definitionAcademic: "বিচ্ছিন্নতার অপসারণ এবং ঐশ্বরিক ন্যায় ও প্রেমের মিলনে নবসৃষ্টির শান্তি প্রতিষ্ঠা।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","westminster","logos_editorial"]
},

{
  id: "entry-regeneration",
  slug: "regeneration",
  headwordEnglish: "Regeneration",
  alternativeSpellings: [
    "New Birth",
    "Born Again",
    "Palingenesia"
  ],
  pronunciationIpa: "/rɪˌdʒɛn.əˈreɪ.ʃən/",
  partOfSpeech: "Noun",
  category: "Systematic Theology",
  theologicalPaths: [
    "soteriology",
    "pneumatology",
    "systematic-theology"
  ],
  definitionSimple: "Being born again spiritually by the Holy Spirit, receiving new spiritual life and a heart that loves God.",
  definitionStudy: "The sovereign, supernatural act of the Holy Spirit whereby spiritual life is instantaneously imparted to a spiritually dead soul, renewing the intellect, will, and affections so that the person freely embraces Christ.",
  definitionAcademic: "The monergistic divine act (palingenesia) preceding and enabling conscious repentance and saving faith in the ordo salutis, effecting radical heart-circumcision and spiritual resurrection from total depravity.",
  biblicalUsage: "Ezekiel 36:26-27; John 3:3-8; Titus 3:5; 1 Peter 1:3, 23; 1 John 3:9.",
  scriptureReferences: [
    "Ezekiel 36:25-27",
    "John 3:3-8",
    "2 Corinthians 5:17",
    "Ephesians 2:1-5",
    "Titus 3:5",
    "1 Peter 1:3"
  ],
  theologicalSignificance: "Affirms that fallen humans cannot initiate their own salvation without prior divine resuscitation.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-regeneration",
      languageCode: "bn",
      localHeadword: "পুনর্জন্ম / আত্মিক নবজন্ম (Punarjanma / Nabajanma)",
      definitionSimple: "পবিত্র আত্মার শক্তিতে নতুন হৃদয় লাভ করে আত্মিকভাবে দ্বিতীয়বার জন্ম গ্রহণ করা।",
      definitionStudy: "আত্মিকভাবে মৃত মানুষের মধ্যে পবিত্র আত্মা কর্তৃক নতুন জীবনের সৃষ্টি, যার ফলে সে খ্রীষ্টকে বিশ্বাস করতে পারে।",
      definitionAcademic: "পরিত্রাণ শৃঙ্খলের প্রাথমিক সার্বভৌম স্তর, যা মানুষের ইচ্ছার স্বাধীন প্রতিক্রিয়া সৃষ্টির পূর্বশর্ত।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","westminster","logos_editorial"]
},

{
  id: "entry-resurrection",
  slug: "resurrection",
  headwordEnglish: "Resurrection",
  alternativeSpellings: [
    "Bodily Resurrection",
    "Anastasis"
  ],
  pronunciationIpa: "/ˌrɛz.əˈrɛk.ʃən/",
  partOfSpeech: "Noun",
  category: "Christology",
  theologicalPaths: [
    "christology",
    "eschatology",
    "systematic-theology"
  ],
  definitionSimple: "Jesus rising bodily from the dead on the third day, guaranteeing eternal life and future resurrection for all believers.",
  definitionStudy: "The historical, physical raising of Jesus Christ from the dead on the third day by the power of God, breaking the power of death and serving as the firstfruits of the bodily resurrection of believers at the consummation.",
  definitionAcademic: "The central eschatological event (anastasis nekron) validating Christ's divine Sonship and atonement, inaugurating the new creation within the continuum of spacetime, and assuring cosmic somatic transformation.",
  biblicalUsage: "Matthew 28; Mark 16; Luke 24; John 20-21; Acts 2:24-32; 1 Corinthians 15:1-58.",
  scriptureReferences: [
    "Psalm 16:10",
    "Luke 24:36-43",
    "John 11:25-26",
    "Romans 1:4",
    "Romans 8:11",
    "1 Corinthians 15:12-23",
    "Philippians 3:20-21"
  ],
  theologicalSignificance: "Without Christ's resurrection, the Christian faith is in vain and believers remain in their sins.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-resurrection",
      languageCode: "bn",
      localHeadword: "পুনরুত্থান (Punarutthan)",
      definitionSimple: "মৃত্যুর পর তৃতীয় দিনে যীশুর স্বশরীরে জীবিত হয়ে ওঠা এবং বিশ্বাসীদের ভবিষ্যৎ অনন্ত জীবনের নিশ্চয়তা।",
      definitionStudy: "মৃত্যুর পরাভব ঘটিয়ে খ্রীষ্টের শারীরিক উত্থান, যা বিশ্বাসীদের ভবিষ্যৎ দৈহিক পুনরুত্থানের নিশ্চিত প্রমাণ।",
      definitionAcademic: "খ্রীষ্টীয় বিশ্বাসের মৌলিক ভিত্তি, যা ঐতিহাসিক সত্যতার সাথে অনন্তকালের নবসৃষ্টিকে সংযুক্ত করে।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.nicene_creed, SOURCE_REGISTER.schaff, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","nicene_creed","schaff","logos_editorial"]
},

{
  id: "entry-creation",
  slug: "creation",
  headwordEnglish: "Creation",
  alternativeSpellings: [
    "Creatio Ex Nihilo",
    "Cosmic Creation"
  ],
  pronunciationIpa: "/kriˈeɪ.ʃən/",
  partOfSpeech: "Noun",
  category: "Theology Proper",
  theologicalPaths: [
    "creation",
    "theology-proper",
    "old-testament-studies"
  ],
  definitionSimple: "God making everything in heaven and on earth out of nothing by His powerful Word, declaring it very good.",
  definitionStudy: "The sovereign, free act of the Triune God whereby He brought the entire cosmos into existence out of nothing (creatio ex nihilo) in space and time for His glory, maintaining and sustaining all that He made.",
  definitionAcademic: "The foundational cosmological locus articulating the radical ontological distinction between the uncreated, transcendent Creator and contingent reality (creatura), repudiating dualism, pantheism, and emanationism.",
  biblicalUsage: "Genesis 1-2; Job 38-41; Psalm 33:6-9, 104; John 1:1-3; Colossians 1:16; Hebrews 11:3.",
  scriptureReferences: [
    "Genesis 1:1-31",
    "Psalm 33:6-9",
    "Isaiah 40:26-28",
    "John 1:1-3",
    "Colossians 1:16-17",
    "Hebrews 11:3",
    "Revelation 4:11"
  ],
  theologicalSignificance: "Establishes God's ultimate ownership and sovereign lordship over all reality.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-creation",
      languageCode: "bn",
      localHeadword: "সৃষ্টি / সৃষ্টিতত্ত্ব (Srishti / Srishtitattwa)",
      definitionSimple: "ঈশ্বর তাঁর জীবন্ত বাক্যের মাধ্যমে শূন্য থেকে সমগ্র মহাবিশ্ব ও সমস্ত প্রাণ সৃষ্টি করেছেন।",
      definitionStudy: "পিতা, পুত্র ও পবিত্র আত্মার একক ইচ্ছায় মহাশূন্য থেকে বিশ্বব্রহ্মাণ্ডের উৎপত্তি ও সুরক্ষা।",
      definitionAcademic: "সৃষ্টিকর্তা ও সৃষ্টির মধ্যকার অসীম মৌলিক পার্থক্যের সার্বজনীন ধর্মতাত্ত্বিক স্বীকৃতি (Creatio Ex Nihilo)।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.bdb, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["bdb","westminster","logos_editorial"]
},

{
  id: "entry-eschatology",
  slug: "eschatology",
  headwordEnglish: "Eschatology",
  alternativeSpellings: [
    "Doctrine of the Last Things",
    "Eschata"
  ],
  pronunciationIpa: "/ˌɛs.kəˈtɒl.ə.dʒi/",
  partOfSpeech: "Noun",
  category: "Systematic Theology",
  theologicalPaths: [
    "eschatology",
    "biblical-theology",
    "systematic-theology"
  ],
  definitionSimple: "The biblical study of final things: Christ's return, the final judgment, resurrection, and the new heaven and new earth.",
  definitionStudy: "The locus of Christian dogmatics treating the consummation of redemptive history, encompassing individual eschatology (death, intermediate state) and general eschatology (parousia, resurrection, judgment, eternal state).",
  definitionAcademic: "The study of the 'eschata' (last things) characterized by an inaugurated tension between the 'already' of Christ's first advent and the 'not yet' of cosmic redemption in the teleological fulfillment of God's redemptive purpose.",
  biblicalUsage: "Isaiah 65-66; Daniel 7-12; Matthew 24-25; 1 Corinthians 15; 1 Thessalonians 4-5; Revelation 19-22.",
  scriptureReferences: [
    "Isaiah 65:17",
    "Matthew 24:30-31",
    "1 Corinthians 15:51-57",
    "1 Thessalonians 4:13-18",
    "2 Peter 3:10-13",
    "Revelation 21:1-5"
  ],
  theologicalSignificance: "Provides the believer with eternal hope, moral vigilance, and assurance that history marches toward God's victory.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-eschatology",
      languageCode: "bn",
      localHeadword: "অন্তিমতত্ত্ব / শেষবিচার বিদ্যা (Antimatattwa)",
      definitionSimple: "জগৎ ও মানবজাতির শেষ পরিণতি, খ্রীষ্টের দ্বিতীয় আগমন ও নতুন পৃথিবীর বাইবেলীয় শিক্ষা।",
      definitionStudy: "খ্রীষ্টের পুনরাগমন, শেষ বিচার, মৃতদের পুনরুত্থান এবং অনন্ত রাজ্যের প্রতিষ্ঠা সংক্রান্ত আলোচনা।",
      definitionAcademic: "মানব ইতিহাসের চূড়ান্ত পরিণতি এবং নবসৃষ্টির ঐশ্বরিক প্রতিশ্রুতির পূর্ণতার পদ্ধতিগত অধ্যয়ন।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.schaff, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["schaff","westminster","logos_editorial"]
},

{
  id: "entry-holy-spirit",
  slug: "holy-spirit",
  headwordEnglish: "Holy Spirit",
  alternativeSpellings: [
    "Holy Ghost",
    "Ruach HaKodesh",
    "Paraclete",
    "Pneuma Hagion"
  ],
  pronunciationIpa: "/ˈhoʊ.li ˈspɪr.ɪt/",
  partOfSpeech: "Proper Noun",
  category: "Pneumatology",
  theologicalPaths: [
    "pneumatology",
    "trinity",
    "biblical-theology"
  ],
  definitionSimple: "The third Person of the Holy Trinity, who lives inside believers to guide, comfort, empower, and transform them.",
  definitionStudy: "The third distinct Person of the Triune Godhead, eternally proceeding from the Father (and the Son), of one substance, majesty, and glory with the Father and the Son, who inspired the Scriptures, regenerates the elect, and indwells believers.",
  definitionAcademic: "Pneumatological locus affirming the Spirit's distinct divine hypostasis and consubstantiality (homoousios), functioning as the vivifier and bond of divine love (vinculum caritatis), illuminating and sanctifying the covenant community.",
  biblicalUsage: "Genesis 1:2; Ezekiel 36:26-27; John 14:16-26, 16:7-14; Acts 1:8, 2:1-4; Romans 8:9-27; Galatians 5:16-25.",
  scriptureReferences: [
    "Genesis 1:2",
    "Psalm 51:11",
    "John 14:16-17",
    "John 16:7-13",
    "Acts 1:8",
    "Romans 8:14-16",
    "1 Corinthians 12:4-11",
    "Galatians 5:22-23"
  ],
  theologicalSignificance: "Ensures that redemption accomplished by the Son is actively and effectively applied to the hearts of believers.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-holy-spirit",
      languageCode: "bn",
      localHeadword: "পবিত্র আত্মা (Pabittra Atma)",
      definitionSimple: "ত্রিত্ব ঈশ্বরের তৃতীয় ব্যক্তি যিনি বিশ্বাসীদের হৃদয়ে বাস করে সান্ত্বনা, শক্তি ও নির্দেশনা দান করেন।",
      definitionStudy: "পিতা ও পুত্রের সাথে সমান মহিমান্বিত ও অনন্ত ঈশ্বর, যিনি নতুন জীবন দান করেন ও বিশ্বাসীদের পরিচালনা করেন।",
      definitionAcademic: "ত্রিত্ববাদী ধর্মতত্ত্বের তৃতীয় ঈশ্বরীয় ব্যক্তিত্ব, যিনি নিসিয়া বিশ্বাসনামায় \"জীবনদাতা প্রভু\" হিসেবে স্বীকৃত।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.nicene_creed, SOURCE_REGISTER.schaff, SOURCE_REGISTER.augsburg, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["nicene_creed","schaff","augsburg","logos_editorial"]
},

{
  id: "entry-church",
  slug: "church",
  headwordEnglish: "Church",
  alternativeSpellings: [
    "Body of Christ",
    "Ekklesia",
    "People of God"
  ],
  pronunciationIpa: "/tʃɜːrtʃ/",
  partOfSpeech: "Noun",
  category: "Ecclesiology",
  theologicalPaths: [
    "ecclesiology",
    "pastoral-theology",
    "historical-theology"
  ],
  definitionSimple: "The family of all true believers in Jesus Christ across all history, gathered together in local assemblies to worship and serve.",
  definitionStudy: "The covenant community of the redeemed, established by Christ and indwelt by the Holy Spirit, existing both invisibly (the totality of the elect known to God) and visibly (local congregations gathered for Word, sacrament, and discipline).",
  definitionAcademic: "Ecclesiological category (ekklesia / qahal) designating the messianic covenant assembly characterized historically by the four classical marks (one, holy, catholic, and apostolic) and Reformation marks (pure preaching of the Word, right administration of the sacraments, and church discipline).",
  biblicalUsage: "Matthew 16:18, 18:17; Acts 2:42-47; 1 Corinthians 12:12-27; Ephesians 1:22-23, 5:25-32; 1 Timothy 3:15.",
  scriptureReferences: [
    "Matthew 16:18",
    "Acts 2:41-47",
    "1 Corinthians 12:12-27",
    "Ephesians 1:22-23",
    "Ephesians 4:11-16",
    "Hebrews 10:24-25",
    "1 Peter 2:9-10"
  ],
  theologicalSignificance: "The church is Christ's bride and bodily witness on earth through which God displays His multifaceted wisdom.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-church",
      languageCode: "bn",
      localHeadword: "মণ্ডলী / চার্চ (Mandali / Church)",
      definitionSimple: "যীশু খ্রীষ্টে বিশ্বাসী সকল মানুষের আত্মিক সমাজ ও স্থানীয় উপাসনার মিলনস্থল।",
      definitionStudy: "খ্রীষ্টের রক্তে কেনা বিশ্বাসীদের পবিত্র দেহ, যা বাক্যের প্রচার, সাক্রামেন্ট এবং আত্মিক শৃঙ্খলায় গঠিত।",
      definitionAcademic: "এক, পবিত্র, সার্বজনীন এবং প্রেরিতীয় মণ্ডলীর রূপরেখা যা দৃশ্যমান ও অদৃশ্য উভয় বাস্তবতায় প্রতিফলিত।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.nicene_creed, SOURCE_REGISTER.augsburg, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["nicene_creed","augsburg","westminster","logos_editorial"]
},

{
  id: "entry-salvation",
  slug: "salvation",
  headwordEnglish: "Salvation",
  alternativeSpellings: [
    "Soteria",
    "Deliverance",
    "Eternal Life"
  ],
  pronunciationIpa: "/sælˈveɪ.ʃən/",
  partOfSpeech: "Noun",
  category: "Soteriology",
  theologicalPaths: [
    "soteriology",
    "biblical-theology",
    "systematic-theology"
  ],
  definitionSimple: "God delivering human beings from sin, death, and separation from Himself to give them eternal life and joy in Christ.",
  definitionStudy: "The comprehensive gracious work of the Triune God delivering sinners from the guilt, power, and ultimate presence of sin, bringing them into eternal covenant fellowship and wholeness in Jesus Christ.",
  definitionAcademic: "The multidimensional soteriological reality (sōtēria) exhibiting past justification, present sanctification, and future eschatological glorification, grounded solely in the trinitarian pactum salutis and realized through the work of Christ.",
  biblicalUsage: "Exodus 14:13; Psalm 3:8; Isaiah 12:2; Luke 19:9; Romans 1:16; Ephesians 2:8-10; Hebrews 2:3.",
  scriptureReferences: [
    "Exodus 14:13",
    "Psalm 27:1",
    "Isaiah 53:5",
    "Luke 19:10",
    "Romans 1:16",
    "Ephesians 2:8-9",
    "Philippians 2:12-13",
    "Hebrews 7:25"
  ],
  theologicalSignificance: "Salvation belongs entirely to the Lord; it demonstrates His infinite grace, wisdom, and sovereign power.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-salvation",
      languageCode: "bn",
      localHeadword: "পরিত্রাণ / উদ্ধার (Paritran / Uddhar)",
      definitionSimple: "পাপের শাস্তি ও মৃত্যুর হাত থেকে ঈশ্বরের অনুগ্রহে প্রাপ্ত চিরন্তন মুক্তি ও নতুন জীবন।",
      definitionStudy: "পাপের দোষ, ক্ষমতা এবং চূড়ান্ত পরিণতি থেকে খ্রীষ্টের মাধ্যমে মানুষের সম্পূর্ণ আত্মিক পুনরুদ্ধার।",
      definitionAcademic: "ধার্মিক গণ্যকরণ, পবিত্রকরণ এবং মহিমাপ্রাপ্তির সম্পূর্ণ ধারাবাহিক ঐশ্বরিক পরিত্রাণ প্রক্রিয়া।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.bdb, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","bdb","westminster","logos_editorial"]
},

{
  id: "entry-messiah",
  slug: "messiah",
  headwordEnglish: "Messiah",
  alternativeSpellings: [
    "The Anointed One",
    "Mashiach",
    "Christos",
    "Christ"
  ],
  pronunciationIpa: "/məˈsaɪ.ə/",
  partOfSpeech: "Proper Noun",
  category: "Christology",
  theologicalPaths: [
    "christology",
    "old-testament-studies",
    "biblical-hebrew-aramaic"
  ],
  definitionSimple: "The chosen King and Savior promised by God in the Old Testament, fulfilled completely in Jesus Christ.",
  definitionStudy: "The title of the promised Davidic Deliverer (Hebrew: Mashiach; Greek: Christos), anointed by God with the Holy Spirit to execute the three offices of Prophet, Priest, and King for the redemption of His people.",
  definitionAcademic: "Messianic christology tracing the prophetic trajectories of the Seed of the woman (Gen 3:15), the Prophet like Moses (Deut 18), the Davidic King (2 Sam 7), and the Suffering Servant (Isa 53), converging in Jesus of Nazareth.",
  biblicalUsage: "Psalm 2:2; Daniel 9:25-26; Matthew 16:16; Luke 4:18; John 1:41, 4:25-26; Acts 2:36.",
  scriptureReferences: [
    "2 Samuel 7:12-16",
    "Psalm 2:1-12",
    "Isaiah 61:1-2",
    "Daniel 9:25-26",
    "Matthew 16:16",
    "Luke 24:25-27",
    "John 1:41",
    "Acts 18:28"
  ],
  theologicalSignificance: "Identifies Jesus as the ultimate fulfillment of all divine covenant promises made to Israel.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-messiah",
      languageCode: "bn",
      localHeadword: "মশীহ / খ্রীষ্ট (Mashiha / Christ)",
      definitionSimple: "পুরাতন নিয়মে প্রতিশ্রুত ঈশ্বরের অভিষিক্ত রাজা ও ত্রাণকর্তা, যিনি যীশুতে পূর্ণতা পেয়েছেন।",
      definitionStudy: "পবিত্র আত্মায় অভিষিক্ত ভাববাদী, যাজক ও রাজা যিনি মানবজাতির অনন্ত মুক্তির জন্য আগমন করেছেন।",
      definitionAcademic: "বাইবেলীয় ভাববাণীর কেন্দ্রবিন্দু, যা দাউদীয় চুক্তি ও আত্মত্যাগী সেবকের পরিচয়ে যীশুতে মূর্ত হয়েছে।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.bdb, SOURCE_REGISTER.thayer, SOURCE_REGISTER.schaff, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["bdb","thayer","schaff","logos_editorial"]
},

{
  id: "entry-revelation",
  slug: "revelation",
  headwordEnglish: "Revelation",
  alternativeSpellings: [
    "Divine Revelation",
    "Apokalypsis"
  ],
  pronunciationIpa: "/ˌrɛv.əˈleɪ.ʃən/",
  partOfSpeech: "Noun",
  category: "Bibliology",
  theologicalPaths: [
    "bibliology",
    "theology-proper",
    "hermeneutics"
  ],
  definitionSimple: "God making Himself, His character, and His saving plans known to human beings.",
  definitionStudy: "The gracious self-disclosure of God to humanity, unveiling His nature, attributes, moral will, and redemptive intentions through nature and conscience (general revelation) and supremely through Scripture and Christ (special revelation).",
  definitionAcademic: "The epistemic foundation of Christian theology (apokalypsis / phanerōsis), rejecting human epistemological autonomy by maintaining that God can be known savingly only through His sovereign, condescending self-communication.",
  biblicalUsage: "Psalm 19:1-4; Romans 1:19-20; 1 Corinthians 2:10-12; Galatians 1:12; Hebrews 1:1-2.",
  scriptureReferences: [
    "Deuteronomy 29:29",
    "Psalm 19:1-6",
    "Romans 1:18-20",
    "Ephesians 3:3-5",
    "Hebrews 1:1-3",
    "2 Peter 1:20-21"
  ],
  theologicalSignificance: "Without divine revelation, true theological knowledge is impossible and humans remain in spiritual darkness.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-revelation",
      languageCode: "bn",
      localHeadword: "প্রকাশিত বাক্য / ঐশ্বরিক প্রকাশ (Prakashita Bakyo / Prakash)",
      definitionSimple: "ঈশ্বর নিজের পরিচয়, ইচ্ছা ও মুক্তির পরিকল্পনা মানুষের কাছে প্রকাশ করার ঘটনা।",
      definitionStudy: "সৃষ্টি, বিবেক, ভাববাদী এবং চূড়ান্তভাবে যীশু খ্রীষ্টের মাধ্যমে ঈশ্বরের আত্ম-প্রকাশ।",
      definitionAcademic: "খ্রীষ্টীয় জ্ঞানতত্ত্বের মূল ভিত্তি, যা প্রাকৃতিক ও বিশেষ প্রকাশের মাধ্যমে মানবজাতিকে সত্যের সন্ধান দেয়।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","westminster","logos_editorial"]
},

{
  id: "entry-inspiration",
  slug: "inspiration",
  headwordEnglish: "Inspiration",
  alternativeSpellings: [
    "Biblical Inspiration",
    "Theopneustos",
    "God-Breathed"
  ],
  pronunciationIpa: "/ˌɪn.spɪˈreɪ.ʃən/",
  partOfSpeech: "Noun",
  category: "Bibliology",
  theologicalPaths: [
    "bibliology",
    "canon-and-manuscripts",
    "hermeneutics"
  ],
  definitionSimple: "The Holy Spirit guiding human biblical authors so that what they wrote is completely the true Word of God.",
  definitionStudy: "The supernatural influence of the Holy Spirit upon the human writers of Scripture, whereby their personal styles and vocabularies were employed to record God's authoritative, error-free truth in the original autographs.",
  definitionAcademic: "Plenary verbal inspiration (theopneustos), asserting that inspiration extends to the totality of Scripture and its specific words, without overriding human agency or creating mechanical dictation.",
  biblicalUsage: "2 Timothy 3:16; 2 Peter 1:20-21; Matthew 5:17-18; 1 Corinthians 2:13.",
  scriptureReferences: [
    "2 Samuel 23:2",
    "Jeremiah 1:9",
    "Matthew 5:18",
    "2 Timothy 3:16-17",
    "2 Peter 1:20-21"
  ],
  theologicalSignificance: "Establishes the Bible as entirely trustworthy, divine truth rather than human religious philosophy.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-inspiration",
      languageCode: "bn",
      localHeadword: "ঐশ্বরিক প্রেরণা (Aishwārik Preronā)",
      definitionSimple: "পবিত্র আত্মার নিয়ন্ত্রণে বাইবেলের লেখকদের ঈশ্বরের অভ্রান্ত সত্য লিপিবদ্ধ করার প্রক্রিয়া।",
      definitionStudy: "পবিত্র আত্মার পরিচালনায় মানবীয় ব্যক্তিত্ব অক্ষুণ্ণ রেখে ঈশ্বরের নিজস্ব বাক্য লিপিবদ্ধকরণের প্রক্রিয়া।",
      definitionAcademic: "বাইবেলের প্রতিটি শব্দের ঐশ্বরিক সত্যতা ও নির্ভরযোগ্যতার স্বীকৃতি (Theopneustos)।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","westminster","logos_editorial"]
},

{
  id: "entry-authority-of-scripture",
  slug: "authority-of-scripture",
  headwordEnglish: "Authority of Scripture",
  alternativeSpellings: [
    "Sola Scriptura",
    "Biblical Inerrancy"
  ],
  pronunciationIpa: "/əˈθɒr.ɪ.ti əv ˈskrɪp.tʃər/",
  partOfSpeech: "Noun Phrase",
  category: "Bibliology",
  theologicalPaths: [
    "bibliology",
    "systematic-theology",
    "historical-theology"
  ],
  definitionSimple: "The Bible has the supreme, final right to guide what believers believe and how they live because it is God's Word.",
  definitionStudy: "The divine right and power of the canonical Scriptures to command belief and obedience, standing as the supreme and infallible court of appeal in all matters of Christian faith and practice.",
  definitionAcademic: "The formal principle of the Reformation ('Sola Scriptura'), establishing Scripture as the norma normans non normata (the ruling norm that is not itself ruled), possessing inherent divine authority independent of ecclesial validation.",
  biblicalUsage: "Psalm 119:89; Isaiah 8:20; Matthew 4:4; John 10:35; Acts 17:11.",
  scriptureReferences: [
    "Psalm 119:89-105",
    "Isaiah 40:8",
    "Matthew 4:4-10",
    "John 10:35",
    "Acts 17:11",
    "Galatians 1:8"
  ],
  theologicalSignificance: "Prevents human tradition, church councils, or individual subjective feelings from supplanting God's voice.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-authority-of-scripture",
      languageCode: "bn",
      localHeadword: "শাস্ত্রের প্রামাণিকতা / কর্তৃত্ব (Shastrer Pramanikata)",
      definitionSimple: "ঈশ্বরের বাক্য হিসেবে বাইবেল বিশ্বাস ও জীবনের সকল ক্ষেত্রে চূড়ান্ত এবং সর্বোচ্চ প্রামাণিক নির্দেশিকা।",
      definitionStudy: "মণ্ডলী ও ব্যক্তিগত বিবেকের ঊর্ধ্বে শাস্ত্রের অনন্য অধিকার ও অভ্রান্ত শাসন কর্তৃত্ব।",
      definitionAcademic: "সংস্কার আন্দোলনের আনুষ্ঠানিক নীতি (Sola Scriptura), যা ধর্মতত্ত্বের সর্বোচ্চ মানদণ্ড নির্ধারণ করে।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.westminster, SOURCE_REGISTER.augsburg, SOURCE_REGISTER.thirty_nine_articles, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["westminster","augsburg","thirty_nine_articles","logos_editorial"]
},

{
  id: "entry-image-of-god",
  slug: "image-of-god",
  headwordEnglish: "Image of God",
  alternativeSpellings: [
    "Imago Dei",
    "Tselem Elohim"
  ],
  pronunciationIpa: "/ˈɪm.ɪdʒ əv ɡɒd/",
  partOfSpeech: "Noun Phrase",
  category: "Theological Anthropology",
  theologicalPaths: [
    "anthropology",
    "creation",
    "moral-theology-ethics"
  ],
  definitionSimple: "God creating human beings in His likeness with dignity, reason, morality, and the purpose of representing Him on earth.",
  definitionStudy: "The unique dignity bestowed on human beings created in God's likeness (substantive, relational, and functional), granting inherent value, moral agency, capacity for fellowship with God, and stewardship over creation.",
  definitionAcademic: "Theological anthropology category (imago Dei / tselem Elohim) damaged but not entirely obliterated by the Fall, restored and elevated through conformity to Christ, the true and consummate Image of God.",
  biblicalUsage: "Genesis 1:26-27, 9:6; 1 Corinthians 11:7; Colossians 3:10; James 3:9.",
  scriptureReferences: [
    "Genesis 1:26-28",
    "Genesis 9:6",
    "Psalm 8:3-8",
    "2 Corinthians 3:18",
    "Colossians 1:15",
    "Colossians 3:10",
    "James 3:9"
  ],
  theologicalSignificance: "Forms the sacred foundation for human rights, moral sanctity of life, and the purpose of existence.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-image-of-god",
      languageCode: "bn",
      localHeadword: "ঈশ্বরের প্রতিমূর্তি (Ishwarer Pratimurti)",
      definitionSimple: "মানুষকে ঈশ্বরের সদৃশে সম্মান, নৈতিক বুদ্ধি ও আধ্যাত্মিক সম্পর্কের উদ্দেশ্যে সৃষ্টি করার গৌরব।",
      definitionStudy: "সৃষ্টিতে মানুষের অনন্য মর্যাদা ও অবস্থান, যা সৃষ্টিকর্তার সাথে আত্মিক যোগাযোগ ও সৃষ্টিকে দেখাশোনার দায়িত্ব দেয়।",
      definitionAcademic: "মানবজীবনের পবিত্রতা ও সহজাত মূল্যের আদি ধর্মতাত্ত্বিক স্তম্ভ (Imago Dei)।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.bdb, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["bdb","westminster","logos_editorial"]
},

{
  id: "entry-sin",
  slug: "sin",
  headwordEnglish: "Sin",
  alternativeSpellings: [
    "Hamartia",
    "Iniquity",
    "Transgression"
  ],
  pronunciationIpa: "/sɪn/",
  partOfSpeech: "Noun",
  category: "Hamartiology",
  theologicalPaths: [
    "hamartiology",
    "anthropology",
    "soteriology"
  ],
  definitionSimple: "Any failure to obey God's holy commands, whether in thought, word, or deed, missing the mark of His glory.",
  definitionStudy: "Any lack of conformity unto, or transgression of, the holy moral law of God, encompassing original sin (inherited guilt and corruption from Adam) and actual sins committed in thoughts, words, desires, and actions.",
  definitionAcademic: "Hamartiological locus (hamartia / anomia / chata) signifying radical moral rebellion against divine sovereignty, missing the divine telos, incurring ontological defilement, legal guilt (reatus), and spiritual death.",
  biblicalUsage: "Genesis 3; Psalm 51:1-5; Romans 3:9-23, 5:12-21, 6:23; 1 John 3:4.",
  scriptureReferences: [
    "Genesis 3:1-19",
    "Psalm 51:1-5",
    "Isaiah 59:1-2",
    "Romans 3:23",
    "Romans 5:12",
    "Romans 6:23",
    "1 John 3:4"
  ],
  theologicalSignificance: "Reveals the universal need for a divine Savior, demonstrating humanity's total inability to save itself.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-sin",
      languageCode: "bn",
      localHeadword: "পাপ (Pāp)",
      definitionSimple: "ঈশ্বরের আদেশ ও পবিত্র স্বভাবের বিপরীতে চিন্তা, কথা বা কাজের মাধ্যমে অবাধ্য হওয়া।",
      definitionStudy: "ঈশ্বরের বিধান লঙ্ঘন ও পবিত্র উদ্দেশ্যের লক্ষ্যভ্রষ্ট হওয়া, যা আত্মিক ও অনন্ত মৃত্যুর কারণ।",
      definitionAcademic: "মানবাত্মার সহজাত কলুষতা ও আইনি অপরাধ (Reatus), যা মানবজাতিকে ঈশ্বরের শত্রু করে তোলে।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.bdb, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","bdb","westminster","logos_editorial"]
},

{
  id: "entry-repentance",
  slug: "repentance",
  headwordEnglish: "Repentance",
  alternativeSpellings: [
    "Metanoia",
    "Teshuvah",
    "Repentance unto Life"
  ],
  pronunciationIpa: "/rɪˈpɛn.təns/",
  partOfSpeech: "Noun",
  category: "Soteriology",
  theologicalPaths: [
    "soteriology",
    "practical-theology",
    "evangelism-discipleship"
  ],
  definitionSimple: "Genuinely turning away from sin and turning toward God with a sincere desire to obey and follow Him.",
  definitionStudy: "An evangelical grace wherein a sinner, out of the sight and sense of the filthiness and odiousness of sin, and apprehension of God's mercy in Christ, with grief and hatred of sin turns from it unto God.",
  definitionAcademic: "Metanoia / teshuvah indicating a radical reorientation of the whole mind, affections, and will, fundamentally joined with saving faith as two sides of the single coin of conversion.",
  biblicalUsage: "1 Kings 8:47; Ezekiel 18:30-32; Matthew 3:2, 4:17; Luke 13:3, 5; Acts 2:38, 20:21; 2 Corinthians 7:9-10.",
  scriptureReferences: [
    "Psalm 51:17",
    "Ezekiel 18:30-32",
    "Matthew 4:17",
    "Luke 15:7",
    "Acts 2:38",
    "Acts 17:30",
    "2 Corinthians 7:10"
  ],
  theologicalSignificance: "Without genuine repentance, faith is a shallow intellectual assent that produces no spiritual fruit.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-repentance",
      languageCode: "bn",
      localHeadword: "মনোপরিবর্তন / অনুতাপ (Monoporibarton / Anutap)",
      definitionSimple: "পাপের প্রতি আন্তরিক ঘৃণা নিয়ে মন ফিরিয়ে ঈশ্বরের দিকে ফিরে আসা ও তাঁর অনুগামী হওয়া।",
      definitionStudy: "পাপের গ্লানি উপলব্ধি করে এবং খ্রীষ্টের ক্ষমার উপর নির্ভর করে সম্পূর্ণ জীবন ঈশ্বরের প্রতি সমর্পণ।",
      definitionAcademic: "মানসিক ও আত্মিক আমূল রূপান্তর (Metanoia), যা সত্য বিশ্বাসের সাথে অবিচ্ছেদ্যভাবে যুক্ত।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.bdb, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","bdb","westminster","logos_editorial"]
},

{
  id: "entry-adoption",
  slug: "adoption",
  headwordEnglish: "Adoption",
  alternativeSpellings: [
    "Huiothesia",
    "Sons of God"
  ],
  pronunciationIpa: "/əˈdɒp.ʃən/",
  partOfSpeech: "Noun",
  category: "Soteriology",
  theologicalPaths: [
    "soteriology",
    "biblical-theology",
    "pastoral-theology"
  ],
  definitionSimple: "God legally and lovingly welcoming justified believers into His own family as His dear sons and daughters.",
  definitionStudy: "An act of God's free grace in and for His only Son Jesus Christ, whereby all those that are justified are received into the number of the children of God, enjoy the liberties and privileges of sons, and are made heirs of promise.",
  definitionAcademic: "Soteriological status (huiothesia) transferring the justified sinner from the realm of wrath into the divine household, granting filial rights, the indwelling Spirit of adoption crying 'Abba, Father', and eschatological inheritance.",
  biblicalUsage: "Romans 8:14-17, 23; Galatians 4:4-7; Ephesians 1:5; 1 John 3:1-2.",
  scriptureReferences: [
    "John 1:12",
    "Romans 8:14-17",
    "Galatians 4:4-7",
    "Ephesians 1:5",
    "1 John 3:1-2"
  ],
  theologicalSignificance: "Reveals that God's grace does not stop at legal acquittal; it brings sinners into the warmest filial intimacy.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-adoption",
      languageCode: "bn",
      localHeadword: "পুত্রত্ব প্রদান / দত্তকপুত্র হিসেবে গ্রহণ (Putrattwa Prodan)",
      definitionSimple: "ঈশ্বরের দ্বারা বিশ্বাসীকে নিজ পরিবারের সন্তান হিসেবে আইনি ও ভালোবাসার সম্পর্কে গ্রহণ করা।",
      definitionStudy: "খ্রীষ্টে বিশ্বাসীদের ঈশ্বরের প্রিয় সন্তান ও অনন্ত উত্তরাধিকারী হিসেবে বরণ করার অপূর্ব অনুগ্রহ।",
      definitionAcademic: "আইনি ও পারিবারিক মর্যাদার রূপান্তর, যা বিশ্বাসীকে পিতা ঈশ্বরের সাথে নিবিড় যোগসূত্র দেয়।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","westminster","logos_editorial"]
},

{
  id: "entry-glorification",
  slug: "glorification",
  headwordEnglish: "Glorification",
  alternativeSpellings: [
    "Consummation",
    "Final Perfection"
  ],
  pronunciationIpa: "/ˌɡlɔːr.ɪ.fɪˈkeɪ.ʃən/",
  partOfSpeech: "Noun",
  category: "Eschatology & Soteriology",
  theologicalPaths: [
    "soteriology",
    "eschatology",
    "systematic-theology"
  ],
  definitionSimple: "The final, complete healing and transformation of believers at Christ's return, giving them immortal bodies free from sin.",
  definitionStudy: "The ultimate climax of the ordo salutis, wherein believers are delivered fully from the presence and effects of sin, their bodies resurrected in imperishable glory, and their souls made perfectly holy in the presence of God forever.",
  definitionAcademic: "The teleological consummation of redemption (doxazo), realizing the fullness of theosis/conformitas Christi in somatic resurrection and the beatific vision (visio Dei).",
  biblicalUsage: "Romans 8:17, 30; 1 Corinthians 15:42-54; 2 Corinthians 3:18; Philippians 3:20-21; 1 John 3:2.",
  scriptureReferences: [
    "Romans 8:18-30",
    "1 Corinthians 15:42-54",
    "Philippians 3:20-21",
    "Colossians 3:4",
    "1 John 3:2"
  ],
  theologicalSignificance: "Guarantees that God's redemptive work will reach complete, flawless perfection without loss.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-glorification",
      languageCode: "bn",
      localHeadword: "মহিমাপ্রাপ্তি (Mohimaprapti)",
      definitionSimple: "খ্রীষ্টের পুনরাগমনে বিশ্বাসীদের সম্পূর্ণ পাপমুক্ত হয়ে অমর ও মহিমান্বিত দেহ লাভ করা।",
      definitionStudy: "পরিত্রাণ শৃঙ্খলের অন্তিম স্তর, যেখানে আত্মিক ও শারীরিক রূপান্তরের মাধ্যমে ঈশ্বরীয় মহিমা লাভ হয়।",
      definitionAcademic: "সৃষ্ট জীবের পাপমুক্ত নিখুঁত পূর্ণতা এবং ঈশ্বরের প্রত্যক্ষ দর্শনে চিরকালীন অবস্থিতি।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","westminster","logos_editorial"]
},

{
  id: "entry-ascension",
  slug: "ascension",
  headwordEnglish: "Ascension",
  alternativeSpellings: [
    "Ascension of Christ",
    "Analepsis"
  ],
  pronunciationIpa: "/əˈsɛn.ʃən/",
  partOfSpeech: "Noun",
  category: "Christology",
  theologicalPaths: [
    "christology",
    "new-testament-studies",
    "systematic-theology"
  ],
  definitionSimple: "Jesus returning bodily into heaven forty days after His resurrection to sit at the right hand of God the Father.",
  definitionStudy: "The historical departure of the risen Christ from earth to heaven in His glorified human body forty days after His resurrection, where He is enthroned at the Father's right hand as sovereign Lord and eternal High Priest.",
  definitionAcademic: "The exaltation locus (analepsis / exaltatio Christi) succeeding the state of humiliation, securing Christ's heavenly session (sessio ad dexteram Dei), sending of the Paraclete, and ongoing intercession.",
  biblicalUsage: "Psalm 68:18, 110:1; Luke 24:50-51; Acts 1:9-11; Ephesians 4:8-10; Hebrews 4:14, 9:24.",
  scriptureReferences: [
    "Psalm 110:1",
    "Mark 16:19",
    "Luke 24:50-53",
    "Acts 1:9-11",
    "Ephesians 1:20-22",
    "Hebrews 1:3",
    "Hebrews 9:24"
  ],
  theologicalSignificance: "Demonstrates that a redeemed human nature is now enthroned in heaven at the right hand of God.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-ascension",
      languageCode: "bn",
      localHeadword: "স্বর্গারোহণ (Swargarohon)",
      definitionSimple: "পুনরুত্থানের চল্লিশ দিন পর যীশু খ্রীষ্টের সশরীরে স্বর্গে পিতার ডানপাশে মহিমায় ফিরে যাওয়া।",
      definitionStudy: "পিতার দক্ষিণ পার্শ্বে খ্রীষ্টের সার্বভৌম রাজকীয় পদে আসীন হওয়া ও মধ্যস্থতাকারী হিসেবে উপস্থিতি।",
      definitionAcademic: "খ্রীষ্টের উচ্চীকরণের অংশ যা তাঁর স্বর্গীয় রাজত্ব এবং পবিত্র আত্মার প্রেরণের পথ প্রস্তুত করে।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.nicene_creed, SOURCE_REGISTER.schaff, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["nicene_creed","schaff","logos_editorial"]
},

{
  id: "entry-intercession",
  slug: "intercession",
  headwordEnglish: "Intercession",
  alternativeSpellings: [
    "Heavenly Intercession",
    "Paga",
    "Enteuxis"
  ],
  pronunciationIpa: "/ˌɪn.tərˈsɛʃ.ən/",
  partOfSpeech: "Noun",
  category: "Christology & Prayer",
  theologicalPaths: [
    "christology",
    "prayer-spiritual-formation",
    "pastoral-theology"
  ],
  definitionSimple: "Praying on behalf of another person, supremely seen in Jesus praying for us before the Father.",
  definitionStudy: "The continuous priestly work of Jesus Christ in heaven appearing before the Father on behalf of believers, presenting His finished sacrifice and securing their preservation, pardon, and strength.",
  definitionAcademic: "The perpetual sacerdotal mediation (intercessio Christi) of the ascended High Priest, coupled with the internal intercession of the indwelling Spirit (groanings too deep for words), guaranteeing perseverance.",
  biblicalUsage: "Isaiah 53:12; Luke 22:31-32; Romans 8:26-27, 34; Hebrews 7:25; 1 John 2:1.",
  scriptureReferences: [
    "Isaiah 53:12",
    "Romans 8:26-27",
    "Romans 8:34",
    "1 Timothy 2:1",
    "Hebrews 7:25",
    "1 John 2:1-2"
  ],
  theologicalSignificance: "Gives believers enduring confidence that their salvation is kept by an eternal, praying Savior.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-intercession",
      languageCode: "bn",
      localHeadword: "মধ্যস্থতা / যাচ্ঞা (Madhyasthata / Yachna)",
      definitionSimple: "অন্যের পক্ষে বিনতি প্রার্থনা করা, যা প্রধানত স্বর্গে পিতা ঈশ্বরের কাছে আমাদের পক্ষে যীশুর প্রার্থনা।",
      definitionStudy: "পিতার সম্মুখে চিরজীবী প্রধান যাজক হিসেবে বিশ্বাসীদের সুরক্ষা ও ক্ষমার জন্য খ্রীষ্টের অবিরাম প্রার্থনা।",
      definitionAcademic: "খ্রীষ্টীয় যাজকীয় পরিচর্যার অংশ, যা বিশ্বাসীদের আত্মিক স্থায়িত্ব ও অনন্ত নিরাপত্তার নিশ্চয়তা দেয়।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","westminster","logos_editorial"]
},

{
  id: "entry-second-coming",
  slug: "second-coming",
  headwordEnglish: "Second Coming",
  alternativeSpellings: [
    "Parousia",
    "Second Advent",
    "Return of Christ"
  ],
  pronunciationIpa: "/ˈsɛk.ənd ˈkʌm.ɪŋ/",
  partOfSpeech: "Noun Phrase",
  category: "Eschatology",
  theologicalPaths: [
    "eschatology",
    "christology",
    "new-testament-studies"
  ],
  definitionSimple: "The visible, glorious return of Jesus Christ to judge the world, destroy evil, and establish His eternal reign.",
  definitionStudy: "The personal, bodily, visible, and triumphant return of our Lord Jesus Christ in power and great glory to defeat the demonic powers, judge the living and the dead, and consummate the kingdom of God.",
  definitionAcademic: "The Parousia (epiphaneia / apokalypsis) marking the terminal horizon of the present evil age, accompanied by the general resurrection, last judgment, and inauguration of the new heavens and new earth.",
  biblicalUsage: "Matthew 24:27-31; Acts 1:11; 1 Thessalonians 4:15-17; 2 Thessalonians 1:7-10; Titus 2:13; Revelation 19:11-16.",
  scriptureReferences: [
    "Matthew 24:30",
    "Acts 1:11",
    "1 Thessalonians 4:16",
    "Titus 2:13",
    "Hebrews 9:28",
    "Revelation 1:7",
    "Revelation 22:20"
  ],
  theologicalSignificance: "The blessed hope of the Church, proving that history will not end in futility but in Christ's absolute triumph.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-second-coming",
      languageCode: "bn",
      localHeadword: "দ্বিতীয় আগমন / পুনরাগমন (Dwitiya Agamon)",
      definitionSimple: "বিচার ও মুক্তির চূড়ান্ত পূর্ণতা দিতে মহিমার সাথে যীশু খ্রীষ্টের এই পৃথিবীতে সশরীরে পুনরায় আগমন।",
      definitionStudy: "পাপের ধ্বংস, মৃতদের পুনরুত্থান এবং অনন্ত রাজ্যের প্রতিষ্ঠার লক্ষ্যে খ্রীষ্টের প্রকাশ্য আগমন।",
      definitionAcademic: "খ্রীষ্টীয় আশার পরম কেন্দ্রবিন্দু (Parousia), যা মানব ইতিহাসের সমাপ্তি ও অনন্ত রাজত্বের সূচনা চিহ্নিত করে।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.nicene_creed, SOURCE_REGISTER.schaff, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["nicene_creed","schaff","westminster","logos_editorial"]
},

{
  id: "entry-millennium",
  slug: "millennium",
  headwordEnglish: "Millennium",
  alternativeSpellings: [
    "Chiliasm",
    "Thousand-Year Reign"
  ],
  pronunciationIpa: "/mɪˈlɛn.i.əm/",
  partOfSpeech: "Noun",
  category: "Eschatology",
  theologicalPaths: [
    "eschatology",
    "historical-theology",
    "hermeneutics"
  ],
  definitionSimple: "The thousand-year period described in Revelation 20 during which Christ rules in righteousness and peace.",
  definitionStudy: "The theological concept derived from Revelation 20:1-6 referring to the thousand-year reign of Christ, understood variably across Christian history regarding its timing, nature, and relationship to the Parousia.",
  definitionAcademic: "Eschatological debate encompassing Premillennialism (historic and dispensational), Postmillennialism (optimistic gospel expansion), and Amillennialism (symbolic realization in the present church age), each interpreting apocalyptic genre differently.",
  biblicalUsage: "Psalm 72; Isaiah 11:6-9, 65:19-25; Zechariah 14; 1 Corinthians 15:24-28; Revelation 20:1-10.",
  scriptureReferences: [
    "Isaiah 11:1-9",
    "Isaiah 65:17-25",
    "1 Corinthians 15:24-26",
    "Revelation 20:1-7"
  ],
  theologicalSignificance: "Reflects the longing for Christ's visible reign of righteousness and peace over creation.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-millennium",
      languageCode: "bn",
      localHeadword: "সহস্রাব্দ রাজত্ব (Sahasrabda Rajatwa)",
      definitionSimple: "প্রকাশিত বাক্য ২০ অধ্যায়ে বর্ণিত খ্রীষ্টের এক হাজার বছরের ন্যায় ও শান্তির রাজত্ব।",
      definitionStudy: "খ্রীষ্টের পুনরাগমন ও রাজত্ব সংক্রান্ত ঐতিহাসিক ও আত্মিক ব্যাখ্যার ভিন্ন ভিন্ন ঐতিহ্য।",
      definitionAcademic: "প্রাক-সহস্রাব্দ, উত্তর-সহস্রাব্দ এবং অ-সহস্রাব্দবাদের তাত্ত্বিক বিতর্ক ও প্রত্যাশা।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.schaff, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["schaff","logos_editorial"]
},

{
  id: "entry-new-jerusalem",
  slug: "new-jerusalem",
  headwordEnglish: "New Jerusalem",
  alternativeSpellings: [
    "Holy City",
    "Heavenly Jerusalem"
  ],
  pronunciationIpa: "/njuː dʒəˈruː.sə.ləm/",
  partOfSpeech: "Proper Noun",
  category: "Eschatology",
  theologicalPaths: [
    "eschatology",
    "biblical-places",
    "biblical-theology"
  ],
  definitionSimple: "The glorious holy city descending from heaven where God dwells directly with His redeemed people forever.",
  definitionStudy: "The ultimate dwelling place of God and the redeemed community in the new heaven and new earth, depicted as a holy city and bride of the Lamb, characterized by the direct presence of God and the absence of death and sin.",
  definitionAcademic: "The apocalyptic architectural symbol of the perfected covenant community (Revelation 21-22; Hebrews 12:22), fulfilling the Garden of Eden and earthly Zion as the consummate cosmic holy of holies.",
  biblicalUsage: "Isaiah 65:18-19; Galatians 4:26; Hebrews 11:10, 12:22; Revelation 3:12, 21:1-27, 22:1-5.",
  scriptureReferences: [
    "Hebrews 11:10",
    "Hebrews 12:22",
    "Revelation 3:12",
    "Revelation 21:1-27",
    "Revelation 22:1-5"
  ],
  theologicalSignificance: "Assures believers of an eternal home where God's presence brings everlasting joy and righteousness.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-new-jerusalem",
      languageCode: "bn",
      localHeadword: "নতুন যিরূশালেম (Natun Yerushalayem)",
      definitionSimple: "স্বর্গ থেকে নেমে আসা পবিত্র নগরী যেখানে ঈশ্বর চিরকাল তাঁর উদ্ধারপ্রাপ্ত লোকদের সাথে বাস করবেন।",
      definitionStudy: "পাপ ও মৃত্যুর সম্পূর্ণ বিলুপ্তির পর নবসৃষ্টিতে ঈশ্বরের প্রত্যক্ষ উপস্থিতি ও অনন্ত আনন্দের নগরী।",
      definitionAcademic: "আগমী স্বর্গীয় নগরীর রূপক যা সম্পূর্ণ চুক্তিভিত্তিক মিলন ও মহিমার পূর্ণতা প্রদর্শন করে।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.schaff, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["schaff","logos_editorial"]
},

{
  id: "entry-righteousness",
  slug: "righteousness",
  headwordEnglish: "Righteousness",
  alternativeSpellings: [
    "Dikaiosyne",
    "Tsedeq",
    "Justice of God"
  ],
  pronunciationIpa: "/ˈraɪ.tʃəs.nəs/",
  partOfSpeech: "Noun",
  category: "Systematic Theology",
  theologicalPaths: [
    "soteriology",
    "moral-theology-ethics",
    "theology-proper"
  ],
  definitionSimple: "Moral perfection and absolute fairness that conforms completely to God's holy character and law.",
  definitionStudy: "The perfect conformity of God's character and actions to His own moral purity, and the ethical standard demanded of moral creatures, fulfilled for believers by the imputed righteousness of Jesus Christ.",
  definitionAcademic: "Locus treating divine righteousness (iustitia Dei) as both retributive justice and redemptive covenant faithfulness, culminating in Pauline forensic declaration through Christ.",
  biblicalUsage: "Genesis 15:6; Psalm 11:7, 72:1-2; Jeremiah 23:6; Matthew 5:6, 6:33; Romans 1:17, 3:21-26, 10:3-4.",
  scriptureReferences: [
    "Genesis 15:6",
    "Psalm 11:7",
    "Jeremiah 23:6",
    "Matthew 6:33",
    "Romans 1:17",
    "Romans 3:21-26",
    "2 Corinthians 5:21"
  ],
  theologicalSignificance: "Establishes God's unbending moral standard and highlights our need for Christ's perfect righteousness.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-righteousness",
      languageCode: "bn",
      localHeadword: "ধার্মিকতা / ন্যায়পরায়ণতা (Dharmikata / Nyayporayonota)",
      definitionSimple: "ঈশ্বরের পবিত্র চরিত্র ও ব্যবস্থার প্রতি নিখুঁত নৈতিক আনুগত্য ও ন্যায়নিষ্ঠতা।",
      definitionStudy: "ঈশ্বরের স্বভাবজাত ন্যায়বিচার এবং খ্রীষ্টের মাধ্যমে বিশ্বাসীর উপর আরোপিত পবিত্র গুণ।",
      definitionAcademic: "আইনি ও নৈতিক মানদণ্ড যা কেবল খ্রীষ্টের নিখুঁত আনুগত্যের মাধ্যমেই মানুষের পক্ষে অর্জন সম্ভব।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.bdb, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","bdb","westminster","logos_editorial"]
},

{
  id: "entry-holiness",
  slug: "holiness",
  headwordEnglish: "Holiness",
  alternativeSpellings: [
    "Qodesh",
    "Hagiosyne",
    "Sanctity"
  ],
  pronunciationIpa: "/ˈhoʊ.li.nəs/",
  partOfSpeech: "Noun",
  category: "Theology Proper & Ethics",
  theologicalPaths: [
    "theology-proper",
    "moral-theology-ethics",
    "worship-liturgy"
  ],
  definitionSimple: "God's absolute purity, uniqueness, and separation from all that is evil, common, or impure.",
  definitionStudy: "The foundational attribute of God denoting His absolute transcendence above creation and His spotless moral perfection, which He demands of and imparts to His covenant people.",
  definitionAcademic: "Ontological and ethical otherness (qadosh / hagios) wherein God is infinitely set apart from creaturely finitude and moral pollution, functioning as the archetype of all ethical renewal.",
  biblicalUsage: "Exodus 15:11; Leviticus 11:44-45, 19:2; Isaiah 6:3; 1 Peter 1:15-16; Revelation 4:8.",
  scriptureReferences: [
    "Exodus 15:11",
    "Leviticus 19:2",
    "Isaiah 6:3",
    "Hebrews 12:14",
    "1 Peter 1:15-16",
    "Revelation 4:8"
  ],
  theologicalSignificance: "The supreme beauty of God's character and the ultimate goal for the lives of His people.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-holiness",
      languageCode: "bn",
      localHeadword: "পবিত্রতা (Pabittrata)",
      definitionSimple: "পাপ ও মন্দতা থেকে ঈশ্বরের সম্পূর্ণ স্বাতন্ত্র্য এবং নিখুঁত নির্মল নৈতিক স্বভাব।",
      definitionStudy: "ঈশ্বরের পরম মহিমাময় শুচিতা যা সৃষ্টির সীমা থেকে পৃথক এবং যা তিনি তাঁর লোকদের মধ্যে দেখতে চান।",
      definitionAcademic: "ঐশ্বরিক সত্তার মৌলিক বৈশিষ্ট্য (Qodesh), যা বিশ্বাসীদের উপাসনা ও নৈতিক জীবনের ভিত্তি।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.bdb, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","bdb","westminster","logos_editorial"]
},

{
  id: "entry-mercy",
  slug: "mercy",
  headwordEnglish: "Mercy",
  alternativeSpellings: [
    "Eleos",
    "Chesed",
    "Compassion"
  ],
  pronunciationIpa: "/ˈmɜːr.si/",
  partOfSpeech: "Noun",
  category: "Theology Proper & Ethics",
  theologicalPaths: [
    "theology-proper",
    "soteriology",
    "pastoral-theology"
  ],
  definitionSimple: "God's tender pity and kindness holding back the punishment we deserve and helping us in our helplessness.",
  definitionStudy: "The compassionate disposition of God toward fallen creatures in their misery and helplessness, withholding deserved judgment and actively relieving their distress through Christ.",
  definitionAcademic: "Divine affective and efficacious attribute (eleos / rachamim) manifesting covenantal solidarity with the helpless, distinct from grace (which addresses guilt) by addressing creaturely misery.",
  biblicalUsage: "Exodus 34:6; Psalm 103:8-13; Lamentations 3:22-23; Matthew 9:13; Ephesians 2:4; Titus 3:5.",
  scriptureReferences: [
    "Exodus 34:6-7",
    "Psalm 103:8-13",
    "Lamentations 3:22-23",
    "Ephesians 2:4-5",
    "Titus 3:5",
    "Hebrews 4:16"
  ],
  theologicalSignificance: "Shows that God takes no pleasure in the destruction of sinners but delights to pardon and restore.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-mercy",
      languageCode: "bn",
      localHeadword: "দয়া / করুণা (Daya / Karuna)",
      definitionSimple: "পাপের প্রাপ্য শাস্তি স্থগিত রেখে অসহায় মানুষের প্রতি ঈশ্বরের অসীম সহানুভূতি ও কৃপা।",
      definitionStudy: "মানুষের দুর্দশা ও পাপময় অসহায়ত্ব দেখে বিচার স্থগিত রাখার ঐশ্বরিক মমত্ববোধ।",
      definitionAcademic: "চুক্তিভিত্তিক বিশ্বস্ততার প্রকাশ (Chesed / Eleos), যা মানুষের দুর্দশা মোচনের চালিকাশক্তি।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.bdb, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","bdb","logos_editorial"]
},

{
  id: "entry-peace",
  slug: "peace",
  headwordEnglish: "Peace",
  alternativeSpellings: [
    "Shalom",
    "Eirene",
    "Peace of God"
  ],
  pronunciationIpa: "/piːs/",
  partOfSpeech: "Noun",
  category: "Biblical Theology",
  theologicalPaths: [
    "biblical-theology",
    "moral-theology-ethics",
    "pastoral-theology"
  ],
  definitionSimple: "Wholeness, quiet assurance, and harmony with God, within ourselves, and with others through Jesus Christ.",
  definitionStudy: "The state of spiritual reconciliation and holistic well-being established by God through Christ's cross, encompassing peace with God, internal tranquility, and reconciled relationships within the community.",
  definitionAcademic: "Theological category (shalom / eirēnē) expressing relational harmony, cosmic wholeness, covenantal blessing, and liberation from eschatological terror.",
  biblicalUsage: "Numbers 6:24-26; Isaiah 9:6, 53:5; John 14:27; Romans 5:1; Philippians 4:6-7; Colossians 3:15.",
  scriptureReferences: [
    "Numbers 6:26",
    "Isaiah 9:6",
    "Isaiah 26:3",
    "John 14:27",
    "Romans 5:1",
    "Philippians 4:7",
    "Colossians 3:15"
  ],
  theologicalSignificance: "Authentic peace is not the mere absence of conflict, but the presence of God's covenantal blessing in Christ.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-peace",
      languageCode: "bn",
      localHeadword: "শান্তি (Shanti)",
      definitionSimple: "খ্রীষ্টের মাধ্যমে ঈশ্বরের সাথে মিলনজনিত মনের গভীর স্বস্তি, ঐক্য ও আত্মিক পূর্ণতা।",
      definitionStudy: "পাপের কারণে সৃষ্ট শত্রুতার অবসান এবং আত্মিক ও সামাজিক জীবনে পরম ঐশ্বরিক সম্প্রীতি।",
      definitionAcademic: "বাইবেলীয় শালোম (Shalom), যা কেবল সংঘাতহীনতা নয় বরং আত্মিক ও সামগ্রিক পূর্ণতার প্রতীক।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.bdb, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","bdb","logos_editorial"]
},

{
  id: "entry-gospel",
  slug: "gospel",
  headwordEnglish: "Gospel",
  alternativeSpellings: [
    "Good News",
    "Euangelion"
  ],
  pronunciationIpa: "/ˈɡɒs.pəl/",
  partOfSpeech: "Noun",
  category: "Soteriology & Missiology",
  theologicalPaths: [
    "soteriology",
    "evangelism-discipleship",
    "missiology"
  ],
  definitionSimple: "The joyful good news that Jesus Christ died for our sins and rose again to offer free salvation to all who believe.",
  definitionStudy: "The good news of God's sovereign grace announced to the world, proclaiming that through the life, substitutionary death, and bodily resurrection of Jesus Christ, sinners are forgiven and brought into God's kingdom by faith.",
  definitionAcademic: "The apostolic kerygma (euangelion) announcing the historical accomplishment of cosmic redemption in Christ, serving as the power of God for salvation (dynamis Theou) to everyone who believes.",
  biblicalUsage: "Isaiah 52:7; Mark 1:1, 14-15; Romans 1:1-4, 16-17; 1 Corinthians 15:1-4; Galatians 1:6-9.",
  scriptureReferences: [
    "Isaiah 52:7",
    "Mark 1:14-15",
    "Romans 1:16",
    "1 Corinthians 15:1-4",
    "Galatians 1:6-9",
    "Ephesians 1:13"
  ],
  theologicalSignificance: "The exclusive, non-negotiable message entrusted to the Church for the rescue of the lost world.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-gospel",
      languageCode: "bn",
      localHeadword: "সুসমাচার (Susamāchār)",
      definitionSimple: "যীশুর ক্রুশারোপণ ও পুনরুত্থানের মাধ্যমে পাপ থেকে মুক্তির পরম আনন্দের বার্তা।",
      definitionStudy: "পাপীদের জন্য খ্রীষ্টের আত্মত্যাগ এবং বিশ্বাস দ্বারা বিনামূল্যে পরিত্রাণের সার্বজনীন সুসংবাদ।",
      definitionAcademic: "প্রেরিতীয় ঘোষণার মূল কথা (Euangelion), যা বিশ্বাসীদের জন্য ঈশ্বরের পরিত্রাণের পরাক্রম।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","westminster","logos_editorial"]
},

{
  id: "entry-baptism",
  slug: "baptism",
  headwordEnglish: "Baptism",
  alternativeSpellings: [
    "Holy Baptism",
    "Baptisma"
  ],
  pronunciationIpa: "/ˈbæp.tɪ.zəm/",
  partOfSpeech: "Noun",
  category: "Sacraments & Ordinances",
  theologicalPaths: [
    "sacraments-ordinances",
    "ecclesiology",
    "historical-theology"
  ],
  definitionSimple: "A sacred Christian ceremony using water in the name of the Trinity, symbolizing washing away of sins and new life in Christ.",
  definitionStudy: "A sacrament or ordinance of the New Testament ordained by Jesus Christ, washing with water in the name of the Father, Son, and Holy Spirit as a sign and seal of the covenant of grace, ingrafting into Christ, and new life.",
  definitionAcademic: "Initiatory covenant rite (baptisma) signifying identification with Christ in His death, burial, and resurrection, with varied modes (immersion, pouring, sprinkling) and subjects (believer vs pedobaptism) reflecting differing ecclesiological commitments.",
  biblicalUsage: "Matthew 28:19; Mark 16:16; Acts 2:38, 8:36-38, 16:31-33; Romans 6:3-4; 1 Peter 3:21.",
  scriptureReferences: [
    "Matthew 28:19",
    "Acts 2:38",
    "Romans 6:3-4",
    "1 Corinthians 12:13",
    "Galatians 3:27",
    "1 Peter 3:21"
  ],
  theologicalSignificance: "Visibly unites the believer to the visible church and declares public allegiance to the Lord Jesus.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-baptism",
      languageCode: "bn",
      localHeadword: "বাপ্তিস্ম / জলসংস্কার (Baptisma / Jal-sangskar)",
      definitionSimple: "পিতার, পুত্রের ও পবিত্র আত্মার নামে জলে স্নানের মাধ্যমে পাপমোচন ও খ্রীষ্টের সাথে মিলনের চিহ্ন।",
      definitionStudy: "খ্রীষ্টের আদেশে প্রতিষ্ঠিত পবিত্র সাক্রামেন্ট, যা তাঁর সাথে মৃত্যু ও নতুন জীবনের আত্মিক অঙ্গীকার।",
      definitionAcademic: "মণ্ডলীভুক্তির সূচনাপর্বীয় সাক্রামেন্ট যা বিশ্বাসীদের দৃশ্যমান সমাজের অংশ করে তোলে।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.westminster, SOURCE_REGISTER.augsburg, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","westminster","augsburg","logos_editorial"]
},

{
  id: "entry-lords-supper",
  slug: "lords-supper",
  headwordEnglish: "Lord's Supper",
  alternativeSpellings: [
    "Eucharist",
    "Holy Communion",
    "Breaking of Bread"
  ],
  pronunciationIpa: "/lɔːrdz ˈsʌp.ər/",
  partOfSpeech: "Noun Phrase",
  category: "Sacraments & Ordinances",
  theologicalPaths: [
    "sacraments-ordinances",
    "worship-liturgy",
    "historical-theology"
  ],
  definitionSimple: "The sacred meal of bread and wine shared by believers to remember Christ's death and celebrate fellowship with Him.",
  definitionStudy: "A sacrament or ordinance instituted by Jesus Christ in bread and wine, representing His broken body and shed blood, observed by the Church in remembrance of Him until He comes.",
  definitionAcademic: "Sacramental locus (Eucharistia / Koinonia) debated across church history (transubstantiation, consubstantiation, spiritual presence, memorialism), embodying covenant renewal and eschatological foretaste of the Lamb's wedding feast.",
  biblicalUsage: "Matthew 26:26-29; Mark 14:22-25; Luke 22:14-20; 1 Corinthians 10:16-17, 11:23-29.",
  scriptureReferences: [
    "Matthew 26:26-29",
    "Luke 22:19-20",
    "1 Corinthians 10:16-17",
    "1 Corinthians 11:23-29"
  ],
  theologicalSignificance: "Nourishes believers spiritually and proclaims Christ's sacrificial death until His return.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-lords-supper",
      languageCode: "bn",
      localHeadword: "প্রভুর ভোজ / পবিত্র সমভাগ (Probhur Bhoj)",
      definitionSimple: "রুটি ও আঙ্গুররসের মাধ্যমে খ্রীষ্টের আত্মত্যাগ স্মরণ ও আত্মিক সহভাগিতার পবিত্র ভোজ।",
      definitionStudy: "ক্রুশের আত্মত্যাগের স্মরণ এবং খ্রীষ্টের পুনরাগমন পর্যন্ত বিশ্বাসীদের আত্মিক পুষ্টির পবিত্র মাধ্যম।",
      definitionAcademic: "ইউক্যারিস্টিক মিলন যা পুরাতন নিয়মের নিস্তারপর্বের পূর্ণতা ও খ্রীষ্টে নবচুক্তির নিশ্চিত প্রতীক।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.westminster, SOURCE_REGISTER.augsburg, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","westminster","augsburg","logos_editorial"]
},

{
  id: "entry-worship",
  slug: "worship",
  headwordEnglish: "Worship",
  alternativeSpellings: [
    "Proskynesis",
    "Shachah",
    "Divine Worship",
    "Latreia"
  ],
  pronunciationIpa: "/ˈwɜːr.ʃɪp/",
  partOfSpeech: "Noun & Verb",
  category: "Practical Theology",
  theologicalPaths: [
    "worship-liturgy",
    "biblical-theology",
    "prayer-spiritual-formation"
  ],
  definitionSimple: "Giving honor, praise, adoration, and humble obedience to God because He alone is worthy.",
  definitionStudy: "The reverent, heartfelt response of created beings attributing supreme worth, honor, and glory to the Triune God, expressed in corporate assemblies through praise, prayer, hearing the Word, and in daily holy living.",
  definitionAcademic: "Loxological response (shachah / proskynesis / latreia) due exclusively to God, grounded in His divine perfections and redemptive deeds, structured biblically by the Regulative or Normative principles.",
  biblicalUsage: "Exodus 20:3-5; Psalm 95:6, 96:9; Matthew 4:10; John 4:23-24; Romans 12:1-2; Revelation 4:10-11.",
  scriptureReferences: [
    "Exodus 20:3-5",
    "Psalm 29:2",
    "Psalm 95:6",
    "Matthew 4:10",
    "John 4:23-24",
    "Romans 12:1-2",
    "Revelation 4:11"
  ],
  theologicalSignificance: "The chief end of man: to glorify God and enjoy Him forever.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-worship",
      languageCode: "bn",
      localHeadword: "উপাসনা / আরাধনা (Upāsanā / Ārādhanā)",
      definitionSimple: "ঈশ্বরের অনন্য মহিমা ও উপযুক্ততার কারণে হৃদয়ের ভক্তি ও শ্রদ্ধায় তাঁর স্তুতি করা।",
      definitionStudy: "পবিত্র আত্মা ও সত্যে ঈশ্বরের গুণকীর্তন এবং আত্মোৎসর্গের মাধ্যমে জীবনের প্রতিটি ক্ষেত্রে তাঁর গৌরব করা।",
      definitionAcademic: "মানব সৃষ্টির চূড়ান্ত উদ্দেশ্য (Soli Deo Gloria), যা সামগ্রিক আনুগত্য ও ভক্তিতে মূর্ত হয়।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.bdb, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","bdb","westminster","logos_editorial"]
},

{
  id: "entry-prayer",
  slug: "prayer",
  headwordEnglish: "Prayer",
  alternativeSpellings: [
    "Proseuche",
    "Tephillah",
    "Communion with God"
  ],
  pronunciationIpa: "/prɛər/",
  partOfSpeech: "Noun",
  category: "Practical Theology",
  theologicalPaths: [
    "prayer-spiritual-formation",
    "pastoral-theology",
    "practical-theology"
  ],
  definitionSimple: "Talking with God in loving conversation—praising Him, thanking Him, confessing sins, and asking for help.",
  definitionStudy: "An offering up of our desires unto God, for things agreeable to His will, in the name of Christ, with confession of our sins, and thankful acknowledgment of His mercies.",
  definitionAcademic: "Pneumatologically enabled covenantal dialogue (tephillah / proseuchē), mediated solely through Christ's intercession, combining adoration, confession, thanksgiving, and supplication (ACTS).",
  biblicalUsage: "1 Samuel 1:12-15; Psalm 5:1-3, 62:8; Matthew 6:5-15; Philippians 4:6-7; 1 Thessalonians 5:17; James 5:16.",
  scriptureReferences: [
    "Psalm 5:3",
    "Matthew 6:5-15",
    "Philippians 4:6-7",
    "Colossians 4:2",
    "1 Thessalonians 5:17",
    "James 5:16"
  ],
  theologicalSignificance: "Demonstrates the believer's absolute dependence upon God and fosters deep personal intimacy with the Father.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-prayer",
      languageCode: "bn",
      localHeadword: "প্রার্থনা (Prārthanā)",
      definitionSimple: "ঈশ্বরের সাথে হৃদয়ের কথা বলা—তাঁর প্রশংসা করা, ধন্যবাদ দেওয়া ও সাহায্যের জন্য আবেদন করা।",
      definitionStudy: "খ্রীষ্টের নামে ঈশ্বরের ইচ্ছানুযায়ী মনের আকাঙ্ক্ষা নিবেদন এবং অপরাধ স্বীকারপূর্বক কৃপা যাচ্ঞা।",
      definitionAcademic: "চুক্তিভিত্তিক আত্মিক মিলন ও নির্ভরতার প্রকাশ যা বিশ্বাসীর দৈনন্দিন জীবনের শ্বাস-প্রশ্বাস।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.bdb, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","bdb","westminster","logos_editorial"]
},

{
  id: "entry-sabbath",
  slug: "sabbath",
  headwordEnglish: "Sabbath",
  alternativeSpellings: [
    "Shabbat",
    "Lord’s Day",
    "Day of Rest"
  ],
  pronunciationIpa: "/ˈsæb.əθ/",
  partOfSpeech: "Noun",
  category: "Biblical Theology & Ethics",
  theologicalPaths: [
    "biblical-festivals",
    "old-testament-studies",
    "moral-theology-ethics"
  ],
  definitionSimple: "A weekly day set apart by God for holy rest, worship, and refreshing from earthly labor.",
  definitionStudy: "The creation ordinance and covenant sign whereby one day in seven is consecrated unto God for physical rest, corporate worship, deeds of mercy, and anticipating the eternal rest of the people of God.",
  definitionAcademic: "Theological pattern (shabbat / sabbaton) rooted in God's creation rest (Gen 2:2-3), codified in the Decalogue (Exod 20:8-11), fulfilled in Christ's finished work, and celebrated on the first day of the week (the Lord's Day).",
  biblicalUsage: "Genesis 2:2-3; Exodus 20:8-11; Isaiah 58:13-14; Mark 2:27-28; Hebrews 4:9-11.",
  scriptureReferences: [
    "Genesis 2:2-3",
    "Exodus 20:8-11",
    "Isaiah 58:13-14",
    "Mark 2:27-28",
    "Hebrews 4:9-10"
  ],
  theologicalSignificance: "Reminds humanity that life does not consist merely of labor, pointing toward eternal resting in Christ.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-sabbath",
      languageCode: "bn",
      localHeadword: "বিশ্রামবার / সাব্বাথ (Bishrambar / Sabbath)",
      definitionSimple: "সপ্তাহের একটি দিন যা ঈশ্বর তাঁর উপাসনা ও কাজের ক্লান্তি থেকে বিশ্রামের জন্য পৃথক করেছেন।",
      definitionStudy: "সৃষ্টিতে প্রতিষ্ঠিত ও দশ আজ্ঞায় বিধিবদ্ধ পবিত্র দিন যা খ্রীষ্টের শান্তিতে বিশ্বাসীদের বিশ্রামের প্রতীক।",
      definitionAcademic: "স্রষ্টার বিশ্রামের অনুকরণে প্রতিষ্ঠিত চুক্তিভিত্তিক নির্দেশ যা অনন্ত আত্মিক বিশ্রামের পূর্বরূপ।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.bdb, SOURCE_REGISTER.thayer, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["bdb","thayer","westminster","logos_editorial"]
},

{
  id: "entry-law",
  slug: "law",
  headwordEnglish: "Law",
  alternativeSpellings: [
    "Torah",
    "Nomos",
    "Moral Law",
    "Commandments"
  ],
  pronunciationIpa: "/lɔː/",
  partOfSpeech: "Noun",
  category: "Biblical Theology & Ethics",
  theologicalPaths: [
    "old-testament-studies",
    "moral-theology-ethics",
    "hermeneutics"
  ],
  definitionSimple: "God's holy rules and instructions revealed in Scripture to guide right living and show our need for a Savior.",
  definitionStudy: "The revealed moral will and statutes of God, functioning historically in Israel through moral, civil, and ceremonial codes, exposing human sinfulness, and directing believers in righteous conduct.",
  definitionAcademic: "Theological category (Torah / nomos) functioning in Reformed theology through threefold use: usus civilis (restraining evil), usus elenchticus/pedagogicus (convicting of sin and driving to Christ), and usus didacticus/tertius (guiding sanctified living).",
  biblicalUsage: "Exodus 20; Deuteronomy 5; Psalm 19:7-11, 119; Matthew 5:17-20; Romans 7:7-12; Galatians 3:19-24.",
  scriptureReferences: [
    "Exodus 20:1-17",
    "Psalm 19:7-11",
    "Matthew 5:17-18",
    "Romans 3:20",
    "Romans 7:12",
    "Galatians 3:24",
    "1 Timothy 1:8"
  ],
  theologicalSignificance: "Upholds God's absolute holiness, reveals our helplessness, and acts as a tutor leading to Christ.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-law",
      languageCode: "bn",
      localHeadword: "ব্যবস্থা / তোরাহ (Byabasthā / Torah)",
      definitionSimple: "ঈশ্বরের পবিত্র বিধি ও আদেশসমূহ যা পাপ প্রকাশ করে এবং খ্রীষ্টের কাছে পৌঁছানোর পথ দেখায়।",
      definitionStudy: "পাপের দোষ উদঘাটনকারী এবং ধার্মিক জীবনযাপনের জন্য ঈশ্বর প্রদত্ত নৈতিক ও চুক্তিভিত্তিক বিধান।",
      definitionAcademic: "নৈতিক, ধর্মীয় ও নাগরিক নির্দেশিকার সামগ্রিক রূপ যা সংস্কারবাদী ধর্মতত্ত্বে ত্রিবিধ উদ্দেশ্যে ব্যবহৃত।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.bdb, SOURCE_REGISTER.thayer, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["bdb","thayer","westminster","logos_editorial"]
},

{
  id: "entry-prophecy",
  slug: "prophecy",
  headwordEnglish: "Prophecy",
  alternativeSpellings: [
    "Prophetic Word",
    "Nebuah",
    "Propheteia"
  ],
  pronunciationIpa: "/ˈprɒf.ə.si/",
  partOfSpeech: "Noun",
  category: "Biblical Theology",
  theologicalPaths: [
    "old-testament-studies",
    "new-testament-studies",
    "hermeneutics"
  ],
  definitionSimple: "Speaking forth God's true message under the Holy Spirit's guidance, often including foretelling future events.",
  definitionStudy: "The declaration of divine truth spoken or written by authorized spokespersons (prophets) moved by the Holy Spirit, delivering covenantal warnings, promises, and predictions centered upon Jesus Christ.",
  definitionAcademic: "Prophetic utterance (nebu'ah / prophēteia) functioning both as forthtelling (forthright ethical proclamation to contemporaries) and foretelling (eschatological anticipation of redemptive consummation in Christ).",
  biblicalUsage: "Deuteronomy 18:15-22; Isaiah 7:14, 53; Jeremiah 1:4-10; Luke 24:25-27; 2 Peter 1:20-21; Revelation 1:3.",
  scriptureReferences: [
    "Deuteronomy 18:18-22",
    "Isaiah 53:1-12",
    "Amos 3:7",
    "Luke 24:27",
    "2 Peter 1:20-21",
    "Revelation 19:10"
  ],
  theologicalSignificance: "Authenticates Scripture's divine authorship through the flawless fulfillment of predicted history in Christ.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-prophecy",
      languageCode: "bn",
      localHeadword: "ভাববাণী (Bhābbānī)",
      definitionSimple: "পবিত্র আত্মার নির্দেশে ঈশ্বরের বার্তা ও ভবিষ্যতের ঘটনা মানুষের কাছে স্পষ্ট করে ঘোষণা করা।",
      definitionStudy: "চুক্তিভিত্তিক সতকর্তা এবং খ্রীষ্টের আগমন ও উদ্ধারকার্য সংক্রান্ত ঐশ্বরিক ভবিষ্যৎবাণী।",
      definitionAcademic: "ঐশ্বরিক প্রকাশের প্রাচীন মাধ্যম যা সমসাময়িক নীতিশিক্ষা ও ভবিষ্যৎ উদ্ধারকার্যের রূপরেখা দেয়।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.bdb, SOURCE_REGISTER.thayer, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["bdb","thayer","logos_editorial"]
},

{
  id: "entry-sacrificial-system",
  slug: "sacrificial-system",
  headwordEnglish: "Sacrificial System",
  alternativeSpellings: [
    "Old Testament Sacrifices",
    "Zebach",
    "Thysia"
  ],
  pronunciationIpa: "/ˌsæk.rɪˈfɪʃ.əl ˈsɪs.təm/",
  partOfSpeech: "Noun Phrase",
  category: "Biblical Theology",
  theologicalPaths: [
    "old-testament-studies",
    "soteriology",
    "biblical-festivals"
  ],
  definitionSimple: "The Old Testament offerings of animals and grain ordained by God to foreshadow Jesus Christ's once-for-all sacrifice.",
  definitionStudy: "The divinely instituted system of ritual offerings in the Mosaic covenant (burnt, sin, guilt, grain, and peace offerings) designed to teach the holiness of God, the gravity of sin, and the necessity of vicarious bloodshed.",
  definitionAcademic: "Typological sacrificial economy (korban / zebach / thysia) exhibiting expiation, propitiation, and covenant fellowship, serving as an ineffective shadow until fulfilled by Christ's once-for-all sacrifice (Hebrews 9-10).",
  biblicalUsage: "Leviticus 1-7, 16; Hebrews 9:11-28, 10:1-14.",
  scriptureReferences: [
    "Leviticus 1:1-4",
    "Leviticus 16:1-34",
    "Leviticus 17:11",
    "Hebrews 9:22",
    "Hebrews 10:1-14"
  ],
  theologicalSignificance: "Visually demonstrates that without the shedding of blood there is no forgiveness of sins.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-sacrificial-system",
      languageCode: "bn",
      localHeadword: "উৎসর্গ প্রণালী / বলিদান ব্যবস্থা (Utsarga Pranali)",
      definitionSimple: "পাপের ক্ষমার জন্য পুরাতন নিয়মে পশু বলিদানের বিধান যা ক্রুশে যীশুর চরম বলিদানের প্রতীক।",
      definitionStudy: "পাপমোচন ও ঈশ্বরের সাথে সহভাগিতা বজায় রাখার জন্য মোশির মাধ্যমে প্রদত্ত বলিদান নির্দেশিকা।",
      definitionAcademic: "খ্রীষ্টের কালভরি ক্রুশের চূড়ান্ত আত্মাহুতির পূর্বাভাসদাতা ছায়াস্বরূপ ব্যবস্থা।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.bdb, SOURCE_REGISTER.thayer, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["bdb","thayer","logos_editorial"]
},

{
  id: "entry-priesthood",
  slug: "priesthood",
  headwordEnglish: "Priesthood",
  alternativeSpellings: [
    "Priesthood of Believers",
    "Kohen",
    "Hiereus"
  ],
  pronunciationIpa: "/ˈpriːst.hʊd/",
  partOfSpeech: "Noun",
  category: "Biblical & Practical Theology",
  theologicalPaths: [
    "old-testament-studies",
    "christology",
    "ecclesiology"
  ],
  definitionSimple: "Mediating between God and people, fulfilled in Jesus our Great High Priest, and shared by all believers in prayer and service.",
  definitionStudy: "The holy office appointed by God to represent people before God in offering sacrifices and prayers, fulfilled supremely in the high priesthood of Jesus Christ, and extended to the universal priesthood of all believers.",
  definitionAcademic: "Sacerdotal office (kehunnah / hierōsyne) operating in Aaron's lineage and perfected in the eternal order of Melchizedek, democratized in the Reformation doctrine of the royal priesthood (1 Peter 2:9).",
  biblicalUsage: "Exodus 28; Leviticus 8-9; Psalm 110:4; Hebrews 4:14-16, 7:1-28; 1 Peter 2:5, 9; Revelation 1:6.",
  scriptureReferences: [
    "Exodus 28:1",
    "Psalm 110:4",
    "Hebrews 4:14-16",
    "Hebrews 7:23-28",
    "1 Peter 2:5-9",
    "Revelation 1:6"
  ],
  theologicalSignificance: "Secures direct access to the throne of grace for every believer without needing earthly human intermediaries.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-priesthood",
      languageCode: "bn",
      localHeadword: "যাজকপদ / যাজকত্ব (Yājakpad)",
      definitionSimple: "ঈশ্বর ও মানুষের মধ্যে মধ্যস্থতার পবিত্র দায়িত্ব, যা খ্রীষ্টে পূর্ণ এবং বিশ্বাসীদের প্রার্থনায় প্রসারিত।",
      definitionStudy: "বলিদান ও প্রার্থনার মাধ্যমে ঈশ্বরের উপস্থিতি নিবেদনকারী পবিত্র পদ, যা খ্রীষ্টে মহিমান্বিত হয়েছে।",
      definitionAcademic: "মেলকীষেদকের ক্রমে খ্রীষ্টের অনন্ত যাজকত্ব এবং বিশ্বাসীদের সার্বজনীন রাজকীয় যাজকত্ব।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.bdb, SOURCE_REGISTER.thayer, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["bdb","thayer","westminster","logos_editorial"]
},

{
  id: "entry-providence",
  slug: "providence",
  headwordEnglish: "Providence",
  alternativeSpellings: [
    "Divine Providence",
    "Pronoia"
  ],
  pronunciationIpa: "/ˈprɒv.ɪ.dəns/",
  partOfSpeech: "Noun",
  category: "Theology Proper",
  theologicalPaths: [
    "theology-proper",
    "systematic-theology",
    "pastoral-theology"
  ],
  definitionSimple: "God's continuous, loving care and sovereign control over all creatures, events, and circumstances in the universe.",
  definitionStudy: "God's works of providence are His most holy, wise, and powerful preserving and governing all His creatures, and all their actions, directing all things to their appointed ends for His glory.",
  definitionAcademic: "Theological locus (providentia Dei / pronoia) comprising preservation (conservatio), concurrence (concursus), and government (gubernatio), rejecting deistic detachment, fatalistic determinism, and unguided randomness.",
  biblicalUsage: "Genesis 50:20; Job 38-41; Psalm 104; Matthew 10:29-31; Romans 8:28; Ephesians 1:11.",
  scriptureReferences: [
    "Genesis 50:20",
    "Psalm 104:10-30",
    "Matthew 10:29-31",
    "Romans 8:28",
    "Ephesians 1:11",
    "Colossians 1:17"
  ],
  theologicalSignificance: "Gives believers deep comfort that no tragedy or circumstance is outside of God's sovereign, redeeming care.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-providence",
      languageCode: "bn",
      localHeadword: "ঐশ্বরিক পরিচালনা / রক্ষণাবেক্ষণ (Aishwārik Porichālanā)",
      definitionSimple: "মহাবিশ্ব ও মানবজীবনের সকল ঘটনার উপর ঈশ্বরের সার্বভৌম নিয়ন্ত্রণ ও সদয় তত্ত্বাবধান।",
      definitionStudy: "সমগ্র সৃষ্টিকে টিকিয়ে রাখা ও তার সমস্ত কাজকে ঈশ্বরের অনন্ত গৌরবের লক্ষ্যে পরিচালিত করা।",
      definitionAcademic: "রক্ষণ, সহযোগিতা ও শাসনের ঐশ্বরিক ধারাবাহিকতা (Providentia), যা অদৃষ্টবাদের বিপরীত।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.westminster, SOURCE_REGISTER.heidelberg, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["westminster","heidelberg","logos_editorial"]
},

{
  id: "entry-theodicy",
  slug: "theodicy",
  headwordEnglish: "Theodicy",
  alternativeSpellings: [
    "Problem of Evil",
    "Vindication of God"
  ],
  pronunciationIpa: "/θiːˈɒd.ɪ.si/",
  partOfSpeech: "Noun",
  category: "Theology Proper & Apologetics",
  theologicalPaths: [
    "contemporary-theological-questions",
    "apologetics",
    "theology-proper"
  ],
  definitionSimple: "Explaining how God can be completely all-loving and all-powerful while evil and suffering still exist.",
  definitionStudy: "The defense of God's goodness, justice, and omnipotence in the face of the painful reality of evil, pain, and innocent suffering in the created world.",
  definitionAcademic: "Philosophical and theological defense (theos + dikē) addressing the trilemma of divine goodness, divine omnipotence, and the existence of malum physicum and malum morale, anchored biblically in the cross of Christ.",
  biblicalUsage: "Job 38-42; Habakkuk 1-3; Luke 13:1-5; Romans 8:18-25; 2 Corinthians 4:16-18; Revelation 21:4.",
  scriptureReferences: [
    "Job 40:1-5",
    "Habakkuk 3:17-19",
    "Romans 8:18-28",
    "2 Corinthians 4:17",
    "Revelation 21:4"
  ],
  theologicalSignificance: "Vindicates God's character against accusations of cruelty or incompetence, pointing to the Cross and final resurrection.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-theodicy",
      languageCode: "bn",
      localHeadword: "ঐশ্বরিক ন্যায়সাধন / দুঃখকষ্টের সমস্যা (Theodicy / Dukkher Somoshya)",
      definitionSimple: "জগতে দুঃখ ও অন্যায়ের মাঝে ঈশ্বরের মঙ্গলময়তা ও সর্বশক্তিমান চরিত্রের সামঞ্জস্য ও সমর্থন।",
      definitionStudy: "অন্যায় ও বেদনার উপস্থিতিতে ঈশ্বরের ন্যায়পরায়ণতা ও প্রেমের তাত্বিক ও বাইবেলীয় যুক্তি।",
      definitionAcademic: "ঈশ্বরতত্ত্ব ও আত্মপক্ষ সমর্থনের এক গভীর ক্ষেত্র যা ক্রুশ ও পুনরুত্থানের আলোয় উত্তর খোঁজে।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.schaff, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["schaff","logos_editorial"]
},

{
  id: "entry-general-and-special-revelation",
  slug: "general-and-special-revelation",
  headwordEnglish: "General and Special Revelation",
  alternativeSpellings: [
    "Twofold Revelation",
    "Natural and Supernatural Revelation"
  ],
  pronunciationIpa: "/ˈdʒɛn.ər.əl ənd ˈspɛʃ.əl ˌrɛv.əˈleɪ.ʃən/",
  partOfSpeech: "Noun Phrase",
  category: "Bibliology",
  theologicalPaths: [
    "bibliology",
    "apologetics",
    "theology-proper"
  ],
  definitionSimple: "God speaking generally to all people through creation and conscience, and savingly through Scripture and Jesus Christ.",
  definitionStudy: "The theological distinction between God's universal self-disclosure through creation and human conscience (general revelation, sufficient to leave humans without excuse) and His specific, redemptive self-disclosure in Scripture and Christ (special revelation, imparting saving knowledge).",
  definitionAcademic: "Epistemological bifurcation between revelatio generalis (rendered non-saving through human suppression of truth in unrighteousness) and revelatio specialis (saving, propositional, and redemptive-historical, culminating in the incarnate Word and inscripturated canon).",
  biblicalUsage: "Psalm 19:1-14; Romans 1:18-32, 2:14-16; 2 Timothy 3:15-17; Hebrews 1:1-2.",
  scriptureReferences: [
    "Psalm 19:1-11",
    "Romans 1:18-21",
    "Romans 2:14-15",
    "2 Timothy 3:15-17",
    "Hebrews 1:1-3"
  ],
  theologicalSignificance: "Establishes human accountability before God while affirming the absolute indispensability of Scripture and the Gospel.",
  author: "Ayan Kumar Ghosh",
  approvalStatus: "Theologically reviewed",
  publicationStatus: "Published",
  evidenceStatus: "Strongly supported",
  versionNumber: 1,
  createdAt: "2026-09-18T11:00:00Z",
  updatedAt: "2026-09-18T11:00:00Z",
  translations: {
    bn: {
      masterEntryId: "entry-general-and-special-revelation",
      languageCode: "bn",
      localHeadword: "সাধারণ ও বিশেষ প্রকাশ (Sadharan O Bishesh Prakash)",
      definitionSimple: "সৃষ্টি ও বিবেকের মাধ্যমে সাধারণ প্রকাশ এবং বাইবেল ও যীশুর মাধ্যমে পরিত্রাণকারী বিশেষ প্রকাশ।",
      definitionStudy: "সৃষ্টিতে প্রতিফলিত ঈশ্বরের সনাতন শক্তি ও মহিমা এবং শাস্ত্রে বিধিবদ্ধ আত্মিক উদ্ধারের সুনির্দিষ্ট জ্ঞান।",
      definitionAcademic: "খ্রীষ্টীয় জ্ঞানতত্ত্বের মৌলিক বিভাজন (General vs Special Revelation), যা মুক্তির জন্য শাস্ত্রের অপরিহার্যতা প্রমাণ করে।",
      approvalStatus: "Theologically reviewed",
      needsSyncWithMaster: false,
      versionNumber: 1,
      lastUpdated: "2026-09-18T11:00:00Z"
    }
  },
  sources: [SOURCE_REGISTER.westminster, SOURCE_REGISTER.heidelberg, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["westminster","heidelberg","logos_editorial"]
},

{
  "id": "entry-patristics",
  "slug": "patristics",
  "headwordEnglish": "Patristics",
  "alternativeSpellings": [
    "Patrology",
    "Early Church Fathers"
  ],
  "pronunciationIpa": "/pəˈtrɪs.tɪks/",
  "partOfSpeech": "Noun",
  "category": "Historical Theology",
  "theologicalPaths": [
    "historical-theology",
    "church-history",
    "creeds-and-confessions"
  ],
  "definitionSimple": "The historical and theological study of the early Christian church fathers who defended, clarified, and transmitted Christian doctrine from the post-apostolic era through the early ecumenical councils.",
  "definitionStudy": "The academic discipline investigating the life, writings, exegetical practices, and dogmatic formulations of Christian theologians from c. AD 100 to AD 787, encompassing Apostolic, Ante-Nicene, and Post-Nicene periods.",
  "definitionAcademic": "A major branch of historical theology focused on the literary corpus, doctrinal synthesis, and hermeneutical trajectories of the patres ecclesiae. It charts the emergence of trinitarian and christological orthodoxy against heterodox challenges.",
  "biblicalUsage": "Directly examines the earliest post-apostolic reception, defense, and canonical recognition of the New Testament scriptures (2 Tim 2:2; Jude 3).",
  "scriptureReferences": [
    "2 Timothy 2:2",
    "Jude 1:3",
    "Acts 20:28-31",
    "Hebrews 13:7"
  ],
  "historicalDevelopment": "Subdivided into Apostolic Fathers, Apologists, Alexandrian and Antiochene schools, and the Cappadocian and Latin fathers.",
  "theologicalSignificance": "Secured canonical boundaries and articulates ecumenical trinitarian and christological orthodoxy.",
  "majorInterpretivePositions": {
    "issue": "The authority of patristic consensus (consensus patrum) relative to Sola Scriptura.",
    "biblicalEvidence": "Apostolic tradition (2 Thess 2:15) vs supreme biblical authority (2 Tim 3:16).",
    "historicalBackground": "Reformation re-assessment of patristic authority as ministerial rather than magisterial.",
    "positions": [
      {
        "name": "Ministerial Patristic Authority",
        "description": "Early fathers are highly valued guides subordinate to Scripture.",
        "traditions": [
          "Reformed",
          "Lutheran",
          "Presbyterian"
        ]
      },
      {
        "name": "Sacred Tradition Continuity",
        "description": "Patristic consensus is an inspired living continuation of Pentecost.",
        "traditions": [
          "Eastern Orthodox"
        ]
      },
      {
        "name": "Magisterial Tradition",
        "description": "Unanimous patristic testimony reflects authentic apostolic tradition governed by Rome.",
        "traditions": [
          "Roman Catholic"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Eastern Orthodox",
      "positionSummary": "Considers the Fathers indispensable for biblical exegesis and theosis."
    },
    {
      "tradition": "Protestant",
      "positionSummary": "Appeals to the Fathers to vindicate apostolic continuity against novel medieval dogma while maintaining Sola Scriptura."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Greek",
      "scriptUnicode": "πατήρ",
      "lemma": "pater",
      "transliteration": "patēr",
      "pronunciation": "pah-TEER",
      "partOfSpeech": "Noun, Masculine",
      "semanticRange": "Father, forefather, elder leader, spiritual mentor",
      "strongsNumber": "G3962",
      "biblicalOccurrencesCount": 413,
      "importantOccurrences": [
        "1 Cor 4:15",
        "1 John 2:13"
      ],
      "translationCautions": "Distinguish between biological paternity and honorific spiritual paternity in early church usage.",
      "sources": [
        "Thayer's Greek-English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-patristics",
      "languageCode": "bn",
      "localHeadword": "পিতৃতত্ত্ববিদ্যা (Patristics)",
      "definitionSimple": "প্রাচীন মণ্ডলীর পিতা ও ধর্মতত্ত্ববিদদের জীবন ও শিক্ষার ঐতিহাসিক অধ্যয়ন।",
      "definitionStudy": "খ্রীষ্টীয় প্রথম শতাব্দী থেকে অষ্টম শতাব্দী পর্যন্ত প্রাচীন ধর্মতাত্ত্বিকদের শাস্ত্রব্যাখ্যা ও সত্যের প্রতিরক্ষা সংক্রান্ত গবেষণা।",
      "definitionAcademic": "ঐতিহাসিক ধর্মতত্ত্বের একটি প্রধান শাখা যা প্রেরিতীয় যুগ-পরবর্তী বিশ্বাস ও মতবাদের বিকাশ বিশ্লেষণ করে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.nicene_creed, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["nicene_creed","westminster","logos_editorial"]
},

{
  "id": "entry-scholasticism",
  "slug": "scholasticism",
  "headwordEnglish": "Scholasticism",
  "alternativeSpellings": [
    "Medieval Scholasticism",
    "Protestant Scholasticism"
  ],
  "pronunciationIpa": "/skəˈlæs.tɪ.sɪ.zəm/",
  "partOfSpeech": "Noun",
  "category": "Historical Theology",
  "theologicalPaths": [
    "historical-theology",
    "philosophical-theology",
    "systematic-theology"
  ],
  "definitionSimple": "A rigorous method of learning and theological debate developed in medieval European universities that used logic and precise distinctions to understand Christian faith.",
  "definitionStudy": "A theological methodology dominant from c. 1100 to 1700 characterized by dialectical reasoning, precise definitions, scholastic dispute (quaestio), and harmonization of Scripture with philosophical categories.",
  "definitionAcademic": "An intellectual method marked by rigorous dialectical interrogation of theological loci, operating through lectio, quaestio, and disputatio. Expressed in High Medieval Thomism and adapted in Post-Reformation Protestant Orthodoxy.",
  "biblicalUsage": "Scripture values reasoned persuasion and logical defense of truth (Acts 17:2; 1 Pet 3:15; Isa 1:18).",
  "scriptureReferences": [
    "Acts 17:2-3",
    "1 Peter 3:15",
    "Isaiah 1:18",
    "Titus 1:9"
  ],
  "historicalDevelopment": "Pioneered by Anselm ('faith seeking understanding'), systematized by Aquinas, and reformed by Turretin and Owen.",
  "theologicalSignificance": "Produced precise theological vocabulary defending orthodoxy against ambiguity and heresy.",
  "majorInterpretivePositions": {
    "issue": "The integration of Aristotelian philosophical categories into Christian revelation.",
    "biblicalEvidence": "Caution against vain philosophy (Col 2:8) vs apologetic reason (Acts 17:16-34).",
    "historicalBackground": "Medieval university synthesis versus Renaissance humanist critique.",
    "positions": [
      {
        "name": "Subordinate Dialectical Method",
        "description": "Philosophy serves as a ministerial handmaiden to biblical truth.",
        "traditions": [
          "Reformed",
          "Lutheran",
          "Thomist"
        ]
      },
      {
        "name": "Biblicist Skepticism",
        "description": "Scholastic categories obscure the simple narrative message of Scripture.",
        "traditions": [
          "Anabaptist",
          "Pietist"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Roman Catholic",
      "positionSummary": "Elevates Thomism as the preeminent philosophical framework of theology."
    },
    {
      "tradition": "Reformed Orthodoxy",
      "positionSummary": "Used scholastic precision to defend the Westminster Standards while rejecting papal dogma."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Greek",
      "scriptUnicode": "σχολή",
      "lemma": "schole",
      "transliteration": "scholē",
      "pronunciation": "skhoh-LAY",
      "partOfSpeech": "Noun, Feminine",
      "semanticRange": "Leisure, devoted study, lecture place, school hall",
      "strongsNumber": "G4981",
      "biblicalOccurrencesCount": 1,
      "importantOccurrences": [
        "Acts 19:9"
      ],
      "translationCautions": "In Acts 19:9 refers to the lecture hall of Tyrannus where Paul reasoned daily.",
      "sources": [
        "Thayer's Greek-English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-scholasticism",
      "languageCode": "bn",
      "localHeadword": "স্কলাস্টিক মতবাদ (Scholasticism)",
      "definitionSimple": "যুক্তি ও সুনির্দিষ্ট পার্থক্যের মাধ্যমে খ্রীষ্টীয় বিশ্বাসকে পদ্ধতিগতভাবে বোঝার মধ্যযুগীয় পাণ্ডিত্যপূর্ণ ধারা।",
      "definitionStudy": "যুক্তিশাস্ত্র ও দার্শনিক পদ্ধতির সমন্বয়ে শাস্ত্রীয় সত্যকে বিধিবদ্ধ ও রক্ষা করার ঐতিহাসিক পদ্ধতি।",
      "definitionAcademic": "মধ্যযুগীয় বিশ্ববিদ্যালয় ও প্রটেস্ট্যান্ট গোঁড়ামির এমন এক বৌদ্ধিক কাঠামো যা সুনির্দিষ্ট দ্বান্দ্বিক পদ্ধতির মাধ্যমে মতবাদসমূহকে ব্যাখ্যা করে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["westminster","logos_editorial"]
},

{
  "id": "entry-reformation",
  "slug": "reformation",
  "headwordEnglish": "The Reformation",
  "alternativeSpellings": [
    "Protestant Reformation",
    "Sixteenth-Century Reformation"
  ],
  "pronunciationIpa": "/ˌref.ɚˈmeɪ.ʃən/",
  "partOfSpeech": "Noun",
  "category": "Church History",
  "theologicalPaths": [
    "church-history",
    "historical-theology",
    "creeds-and-confessions"
  ],
  "definitionSimple": "A major sixteenth-century religious movement across Europe that restored biblical authority, the pure gospel of grace, and faith in Jesus Christ alone.",
  "definitionStudy": "The great theological and ecclesial movement initiated in 1517 by Martin Luther and continued by Zwingli, Calvin, and Cranmer that recovered biblical soteriology and the Five Solas.",
  "definitionAcademic": "A sixteenth-century realignment of Western Christendom centered on recovering the material principle of justification by grace alone through faith alone, and the formal principle of Sola Scriptura over ecclesiastical tradition.",
  "biblicalUsage": "Scripture commands regular reformation and renewal according to God's written Word (2 Kings 22:8-13; Rom 12:2).",
  "scriptureReferences": [
    "Romans 1:16-17",
    "Romans 3:21-28",
    "Ephesians 2:8-9",
    "2 Timothy 3:16-17"
  ],
  "historicalDevelopment": "Began with Luther's 95 Theses (1517), formulated in the Augsburg and Westminster Confessions, and spread globally.",
  "theologicalSignificance": "Articulated the Five Solas: Sola Scriptura, Sola Gratia, Sola Fide, Solus Christus, and Soli Deo Gloria.",
  "majorInterpretivePositions": {
    "issue": "Whether the Reformation was a tragic schism or a necessary biblical purification.",
    "biblicalEvidence": "Commands for church unity (John 17:21) vs guarding apostolic truth (Gal 1:8-9).",
    "historicalBackground": "Reformation confessions versus the Counter-Reformation Council of Trent.",
    "positions": [
      {
        "name": "Necessary Biblical Renewal",
        "description": "The Reformation rescued the gospel from medieval accretions and restored biblical authority.",
        "traditions": [
          "Lutheran",
          "Reformed",
          "Anglican",
          "Baptist"
        ]
      },
      {
        "name": "Ecclesial Schism",
        "description": "Viewed the movement as an unauthorized fracture of communion requiring counter-reform.",
        "traditions": [
          "Roman Catholic"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Protestant",
      "positionSummary": "Identifies its doctrinal heritage as the recovery of apostolic gospel proclamation."
    },
    {
      "tradition": "Anglican",
      "positionSummary": "Understands itself as reformed catholic: retaining ancient episcopal order while embracing reformed doctrine."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Greek",
      "scriptUnicode": "διορθόω",
      "lemma": "diorthoo",
      "transliteration": "diorthoō",
      "pronunciation": "dee-or-THOH-oh",
      "partOfSpeech": "Verb",
      "semanticRange": "To set right, amend, reform, bring to true standard",
      "strongsNumber": "G1357",
      "biblicalOccurrencesCount": 1,
      "importantOccurrences": [
        "Heb 9:10"
      ],
      "translationCautions": "Heb 9:10 speaks of the 'time of reformation' when Christ fulfilled the Old Covenant types.",
      "sources": [
        "Thayer's Greek-English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-reformation",
      "languageCode": "bn",
      "localHeadword": "ধর্মসংস্কার আন্দোলন (Reformation)",
      "definitionSimple": "ষোড়শ শতাব্দীর ঐতিহাসিক আন্দোলন যা বাইবেলের একমাত্র কর্তৃত্ব ও বিশ্বাসের দ্বারা মুক্তির সুসমাচার পুনরুদ্ধার করেছিল।",
      "definitionStudy": "লুথার, ক্যালভিন ও অন্যান্য সংস্কারকদের মাধ্যমে পরিচালিত আত্মিক জাগরণ যা মণ্ডলীকে শাস্ত্রের মূল শিক্ষায় ফিরিয়ে আনে।",
      "definitionAcademic": "পাশ্চাত্য খ্রীষ্টধর্মের সেই ধর্মতাত্ত্বিক রূপান্তর যা 'একমাত্র শাস্ত্র' ও 'একমাত্র বিশ্বাস' ভিত্তির ওপর মণ্ডলীর কাঠামোগত সংস্কার সাধন করে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.westminster, SOURCE_REGISTER.augsburg, SOURCE_REGISTER.thirty_nine_articles, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["westminster","augsburg","thirty_nine_articles","logos_editorial"]
},

{
  "id": "entry-pastoral-care",
  "slug": "pastoral-care",
  "headwordEnglish": "Pastoral Care",
  "alternativeSpellings": [
    "Poimenics",
    "Cura Animarum",
    "Soul Care"
  ],
  "pronunciationIpa": "/ˈpæs.tɚ.əl kɛər/",
  "partOfSpeech": "Noun",
  "category": "Pastoral Theology",
  "theologicalPaths": [
    "pastoral-theology",
    "practical-theology",
    "christian-counselling"
  ],
  "definitionSimple": "The loving spiritual care, guidance, comfort, and protection that pastors and church leaders provide to God's people in times of joy, sorrow, and trial.",
  "definitionStudy": "The ministry of the cure of souls (cura animarum) wherein ordained under-shepherds provide biblical oversight, comfort in grief, moral counsel, and spiritual nourishment following the model of Christ the Good Shepherd.",
  "definitionAcademic": "A primary locus of practical theology (poimenics) concerning the holistic spiritual stewardship, reconciliation, and guidance of persons within the covenant community, integrating biblical theology with pastoral psychology.",
  "biblicalUsage": "Scripture describes pastoral care as shepherding the flock of God with willing devotion (1 Pet 5:2; Acts 20:28; Ps 23).",
  "scriptureReferences": [
    "Psalm 23:1-6",
    "John 10:11-16",
    "Acts 20:28",
    "1 Peter 5:1-4",
    "James 5:14"
  ],
  "historicalDevelopment": "Practiced in Gregory the Great’s Pastoral Rule, the Reformed cure of souls, and modern biblical counseling movements.",
  "theologicalSignificance": "Reflects the ongoing pastoral mediation of Jesus Christ, the Chief Shepherd, through His appointed servants.",
  "majorInterpretivePositions": {
    "issue": "The integration of modern clinical psychology with biblical soul care.",
    "biblicalEvidence": "Sufficiency of Scripture for godliness (2 Tim 3:16-17; 2 Pet 1:3) vs common grace insights.",
    "historicalBackground": "Clinical pastoral education versus traditional and nouthetic biblical counseling.",
    "positions": [
      {
        "name": "Biblical Counseling / Sufficiency",
        "description": "Scripture is completely sufficient to interpret and heal spiritual and emotional dysfunction.",
        "traditions": [
          "Conservative Evangelical",
          "Presbyterian"
        ]
      },
      {
        "name": "Integrated Pastoral Care",
        "description": "Synthesizes biblical theology with clinical psychological diagnostic tools.",
        "traditions": [
          "Mainline Protestant",
          "Episcopalian"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Reformed",
      "positionSummary": "Emphasizes the ministry of the Word, sacraments, and pastoral visitation in homes."
    },
    {
      "tradition": "Methodist",
      "positionSummary": "Emphasizes small accountability bands and mutual pastoral watchfulness."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Greek",
      "scriptUnicode": "ποιμαίνω",
      "lemma": "poimaino",
      "transliteration": "poimainō",
      "pronunciation": "poy-MAH-ee-no",
      "partOfSpeech": "Verb",
      "semanticRange": "To tend a flock, shepherd, guide, nourish, guard",
      "strongsNumber": "G4165",
      "biblicalOccurrencesCount": 11,
      "importantOccurrences": [
        "John 21:16",
        "Acts 20:28",
        "1 Pet 5:2"
      ],
      "translationCautions": "Involves protection and nourishment, not merely sentimental coddling.",
      "sources": [
        "Thayer's Greek-English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-pastoral-care",
      "languageCode": "bn",
      "localHeadword": "পালকীয় যত্ন (Pastoral Care)",
      "definitionSimple": "বিশ্বাসীদের আত্মিক সান্ত্বনা, দিকনির্দেশনা ও তত্ত্বাবধান প্রদানের পালকীয় সেবা।",
      "definitionStudy": "খ্রীষ্টীয় মণ্ডলীর পালকদের মাধ্যমে বিশ্বাসীদের আত্মিক পরিচালনা, পাপমোচনে সহায়তা ও জীবনের কঠিন সময়ে পরিচর্যা।",
      "definitionAcademic": "ব্যবহারিক ধর্মতত্ত্বের একটি অঙ্গ যা যীশু খ্রীষ্টের আদর্শে আত্মার পরিচর্যা ও আত্মিক সুস্থতা বাস্তবায়ন করে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.heidelberg, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["heidelberg","westminster","logos_editorial"]
},

{
  "id": "entry-theodicy",
  "slug": "theodicy",
  "headwordEnglish": "Theodicy",
  "alternativeSpellings": [
    "Problem of Evil",
    "Justification of God"
  ],
  "pronunciationIpa": "/θiˈɑː.də.si/",
  "partOfSpeech": "Noun",
  "category": "Philosophical Theology",
  "theologicalPaths": [
    "philosophical-theology",
    "theology-proper",
    "apologetics"
  ],
  "definitionSimple": "The theological explanation of how God can remain completely good, loving, and all-powerful even though evil and suffering exist in the world.",
  "definitionStudy": "The philosophical and theological vindication of divine justice, omnipotence, and omnibenevolence in the presence of moral and natural evil.",
  "definitionAcademic": "A formal defense of divine justice (theos + dike) addressing the trilemma: if God is omnipotent, omniscient, and perfectly good, why does evil exist? Approached through free will defenses, soul-making frameworks, and divine sovereignty.",
  "biblicalUsage": "Scripture wrestles profoundly with theodicy in Job, Habakkuk, and the Psalms, pointing ultimately to divine sovereignty and the cross (Job 38-42; Rom 8:28).",
  "scriptureReferences": [
    "Job 38:1-11",
    "Habakkuk 1:1-4",
    "Romans 8:28",
    "Genesis 50:20"
  ],
  "historicalDevelopment": "Coined by Leibniz (1710), framed anciently by Augustine (evil as privation of good), and addressed by Plantinga.",
  "theologicalSignificance": "Defends divine holiness without making God the author of sin or compromising His absolute sovereignty.",
  "majorInterpretivePositions": {
    "issue": "Whether evil is permitted for greater redemptive goods or human libertarian freedom.",
    "biblicalEvidence": "God turning evil to good (Gen 50:20; Acts 4:27-28) vs human culpability.",
    "historicalBackground": "Augustinian sovereignty vs Irenaean soul-making vs modern free-will defenses.",
    "positions": [
      {
        "name": "Greater-Good / Sovereign Theodicy",
        "description": "God ordains all things, permitting evil to display His justice and glorious mercy in Christ.",
        "traditions": [
          "Reformed",
          "Presbyterian"
        ]
      },
      {
        "name": "Free-Will Defense",
        "description": "Moral evil results from genuine creaturely freedom that God chose not to override.",
        "traditions": [
          "Arminian",
          "Wesleyan",
          "Catholic"
        ]
      },
      {
        "name": "Soul-Making Theodicy",
        "description": "The world is an imperfect environment intended for spiritual growth and moral maturity.",
        "traditions": [
          "Liberal Christian",
          "Anglican"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Reformed",
      "positionSummary": "Emphasizes compatibility between absolute divine sovereignty and human moral responsibility (Gen 50:20)."
    },
    {
      "tradition": "Eastern Orthodox",
      "positionSummary": "Rejects juridical formulations, pointing to Christ's resurrection overcoming cosmic death and corruption."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Greek",
      "scriptUnicode": "δίκη",
      "lemma": "dike",
      "transliteration": "dikē",
      "pronunciation": "DEE-kay",
      "partOfSpeech": "Noun, Feminine",
      "semanticRange": "Justice, right judicial sentence, judgment",
      "strongsNumber": "G1349",
      "biblicalOccurrencesCount": 3,
      "importantOccurrences": [
        "Acts 28:4",
        "2 Thess 1:9",
        "Jude 1:7"
      ],
      "translationCautions": "Refers to objective divine justice, not arbitrary human retribution.",
      "sources": [
        "Thayer's Greek-English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-theodicy",
      "languageCode": "bn",
      "localHeadword": "ঈশ্বরন্যায়তত্ত্ব (Theodicy)",
      "definitionSimple": "জগতে অন্যায় ও দুঃখকষ্টের উপস্থিতির বিপরীতে ঈশ্বরের ন্যায়পরায়ণতা ও প্রেমের ব্যাখ্যা।",
      "definitionStudy": "ঈশ্বর সর্বশক্তিমান ও প্রেমময় হওয়া সত্ত্বেও কেন জগতে পাপ ও দুঃখ আছে—তার ধর্মতাত্ত্বিক ন্যায্যতা প্রতিপাদন।",
      "definitionAcademic": "দার্শনিক ধর্মতত্ত্বের বিচার যা ঈশ্বরের ন্যায়বিচার ও মন্দের উপস্থিতির মধ্যকার আপাত বিরোধ মীমাংসা করে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["westminster","logos_editorial"]
},

{
  "id": "entry-inerrancy",
  "slug": "inerrancy",
  "headwordEnglish": "Biblical Inerrancy",
  "alternativeSpellings": [
    "Inerrancy of Scripture",
    "Biblical Infallibility"
  ],
  "pronunciationIpa": "/ɪnˈɛr.ən.si/",
  "partOfSpeech": "Noun",
  "category": "Bibliology",
  "theologicalPaths": [
    "bibliology",
    "systematic-theology",
    "canon"
  ],
  "definitionSimple": "The conviction that the Bible, in its original manuscripts, is entirely true, trustworthy, and free from error in all that it affirms.",
  "definitionStudy": "The doctrine that Holy Scripture, having been inspired by the Holy Spirit (theopneustos), is entirely without error or fault in its autographs, whether speaking of salvation, history, or science.",
  "definitionAcademic": "A formal bibliological doctrine articulated in the Chicago Statement on Biblical Inerrancy (1978), affirming that Scripture, being God-breathed, speaks with complete veracity in all matters it addresses according to its grammatical-historical intent.",
  "biblicalUsage": "Scripture describes God's words as completely pure, true, and unbreakable (Ps 12:6; John 10:35; 2 Tim 3:16).",
  "scriptureReferences": [
    "Psalm 12:6",
    "Psalm 119:160",
    "John 10:35",
    "John 17:17",
    "2 Timothy 3:16-17",
    "2 Peter 1:20-21"
  ],
  "historicalDevelopment": "Rooted in historic church consensus, reaffirmed against modernism in the Princeton Theology (Warfield, Hodge) and Chicago Statement (1978).",
  "theologicalSignificance": "Undergirds full confidence in the absolute authority and reliability of divine revelation.",
  "majorInterpretivePositions": {
    "issue": "The scope of inerrancy: whether it covers all affirmations or only faith and practice.",
    "biblicalEvidence": "Total divine truthfulness (Titus 1:2) vs phenomenological language in ancient texts.",
    "historicalBackground": "The Fundamentalist-Modernist controversy and Chicago Statement (1978).",
    "positions": [
      {
        "name": "Full Inerrancy",
        "description": "Scripture is free from error in all matters it asserts, including historical and cosmological records.",
        "traditions": [
          "Evangelical",
          "Baptist",
          "Presbyterian"
        ]
      },
      {
        "name": "Infallibility / Limited Inerrancy",
        "description": "Scripture is completely trustworthy in matters of salvation and faith, while reflecting human cosmological perspectives.",
        "traditions": [
          "Moderate Evangelical",
          "Mainline Protestant"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Conservative Evangelical",
      "positionSummary": "Adopts the Chicago Statement on Biblical Inerrancy as a foundational test of orthodoxy."
    },
    {
      "tradition": "Roman Catholic",
      "positionSummary": "Affirms biblical inspiration alongside the infallible teaching office of the Magisterium."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Greek",
      "scriptUnicode": "θεόπνευστος",
      "lemma": "theopneustos",
      "transliteration": "theópneustos",
      "pronunciation": "theh-OP-nyoo-stos",
      "partOfSpeech": "Adjective",
      "semanticRange": "God-breathed, inspired by God",
      "strongsNumber": "G2315",
      "biblicalOccurrencesCount": 1,
      "importantOccurrences": [
        "2 Tim 3:16"
      ],
      "translationCautions": "Signifies originating from God's divine breath, not merely human creative insight.",
      "sources": [
        "Thayer's Greek-English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-inerrancy",
      "languageCode": "bn",
      "localHeadword": "শাস্ত্রের অভ্রান্ততা (Biblical Inerrancy)",
      "definitionSimple": "এই বিশ্বাস যে পবিত্র বাইবেলের মূল পাণ্ডুলিপিসমূহ সম্পূর্ণ সত্য ও সকল প্রকার ভুলভ্রান্তি থেকে মুক্ত।",
      "definitionStudy": "ঈশ্বরের নিঃশ্বাসিত বাক্য হওয়ার কারণে পবিত্র শাস্ত্র তার মূল লিপিতে সকল ঐতিহাসিক ও ধর্মীয় বিষয়ে নির্ভুল।",
      "definitionAcademic": "শাস্ত্রবিজ্ঞানের মূল মতবাদ যা নিশ্চিত করে যে বাইবেল যা কিছু ব্যক্ত করে তা পরম সত্য ও নির্ভরযোগ্য।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["westminster","logos_editorial"]
},

{
  "id": "entry-homoousios",
  "slug": "homoousios",
  "headwordEnglish": "Homoousios",
  "alternativeSpellings": [
    "Consubstantial",
    "Of One Essence",
    "Homoousion"
  ],
  "pronunciationIpa": "/ˌhoʊ.moʊˈuː.si.əs/",
  "partOfSpeech": "Adjective",
  "category": "Doctrine of the Trinity",
  "theologicalPaths": [
    "doctrine-of-the-trinity",
    "christology",
    "creeds-and-confessions"
  ],
  "definitionSimple": "The essential Christian truth that Jesus Christ the Son is of the exact same divine substance, being, and essence as God the Father.",
  "definitionStudy": "The key theological term adopted at the Council of Nicaea (AD 325) affirming that the Son shares the identical, indivisible divine essence (ousia) with the Father, directly refuting Arianism.",
  "definitionAcademic": "The defining Greek term (homos 'same' + ousia 'being') of fourth-century pro-Nicene theology vindicated by Athanasius, excluding Arian heteroousios ('different essence') and Semi-Arian homoiousios ('similar essence').",
  "biblicalUsage": "Expresses biblical affirmations of the absolute divine identity of Christ with the Father (John 10:30; Col 2:9; Heb 1:3).",
  "scriptureReferences": [
    "John 10:30",
    "John 14:9",
    "Colossians 2:9",
    "Hebrews 1:3"
  ],
  "historicalDevelopment": "Formulated at Nicaea (325), defended against Arianism by Athanasius, and ratified at Constantinople (381).",
  "theologicalSignificance": "Guarantees that only God can save humanity, and Jesus is truly God in full divinity.",
  "majorInterpretivePositions": {
    "issue": "The fourth-century debate between homoousios ('same essence') and homoiousios ('similar essence').",
    "biblicalEvidence": "Ontological oneness in Christ (John 1:1, 14:9; Heb 1:3).",
    "historicalBackground": "Athanasian defense of the Nicene Creed against Imperial Arianism.",
    "positions": [
      {
        "name": "Nicene Orthodoxy",
        "description": "The Son is numerically one in essence with the Father.",
        "traditions": [
          "Ecumenical Christian",
          "Protestant",
          "Catholic",
          "Orthodox"
        ]
      },
      {
        "name": "Arian Heresy",
        "description": "The Son was created by the Father and possesses a different essence.",
        "traditions": [
          "Historic Heresy"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Ecumenical Orthodoxy",
      "positionSummary": "Accepted unconditionally across all Orthodox, Catholic, and historic Protestant churches as essential to salvation."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Greek",
      "scriptUnicode": "ὁμοούσιος",
      "lemma": "homoousios",
      "transliteration": "homooúsios",
      "pronunciation": "hoh-moh-OO-see-os",
      "partOfSpeech": "Adjective",
      "semanticRange": "Of the same essence, consubstantial, sharing identical being",
      "importantOccurrences": [
        "Nicene Creed (325)",
        "Niceno-Constantinopolitan Creed (381)"
      ],
      "translationCautions": "Never confuse with homoiousios ('of similar essence'), which diminishes Christ's full deity.",
      "sources": [
        "Thayer's Greek-English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-homoousios",
      "languageCode": "bn",
      "localHeadword": "সম-সারবস্তু (Homoousios)",
      "definitionSimple": "এই মৌলিক বিশ্বাস যে যীশু খ্রীষ্ট পিতা ঈশ্বরের সমান অনন্ত ঐশ্বরিক সত্তা ও সারবস্তুর অধিকারী।",
      "definitionStudy": "নীকীয় বিশ্বাসের (৩২৫ খ্রী.) মূল শব্দ যা ঘোষণা করে যে পুত্র ঈশ্বরের স্বরূপ পিতার সাথে সম্পূর্ণ এক ও অভিন্ন।",
      "definitionAcademic": "ত্রিত্ববাদের মূল গ্রিক পরিভাষা যা আরিয়ানবাদের বিরোধিতা করে পুত্রের সম্পূর্ণ ঐশ্বরিক সত্তা নিশ্চিত করে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.nicene_creed, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["nicene_creed","logos_editorial"]
},

{
  "id": "entry-hypostatic-union",
  "slug": "hypostatic-union",
  "headwordEnglish": "Hypostatic Union",
  "alternativeSpellings": [
    "Two Natures of Christ",
    "Chalcedonian Christology"
  ],
  "pronunciationIpa": "/ˌhaɪ.pəˈstæt.ɪk ˈjuːn.jən/",
  "partOfSpeech": "Noun",
  "category": "Christology",
  "theologicalPaths": [
    "christology",
    "systematic-theology",
    "creeds-and-confessions"
  ],
  "definitionSimple": "The miraculous union of Jesus Christ being truly God and truly human in one single, undivided divine Person forever.",
  "definitionStudy": "The doctrinal formulation ratified at the Council of Chalcedon (AD 451) that two distinct, complete natures—divine and human—are united in the one person (hypostasis) of Jesus Christ without confusion, change, division, or separation.",
  "definitionAcademic": "The Christological locus defining the unconfused, inconvertible, indivisible, and inseparate union of full divinity and full humanity in the singular hypostasis of the eternal Logos (vere Deus, vere homo).",
  "biblicalUsage": "Scripture teaches both Christ's full deity (John 1:1) and His real, sinless humanity (John 1:14; 1 Tim 2:5).",
  "scriptureReferences": [
    "John 1:14",
    "Philippians 2:5-8",
    "Colossians 2:9",
    "1 Timothy 2:5",
    "Hebrews 2:14-17"
  ],
  "historicalDevelopment": "Ratified at the Council of Chalcedon (451), synthesizing Athanasian, Cyrillian, and western Latin insights against Nestorianism and Monophysitism.",
  "theologicalSignificance": "Ensures Christ is qualified to be the one true Mediator between holy God and fallen humanity.",
  "majorInterpretivePositions": {
    "issue": "How two natures relate in one person without compromising either nature.",
    "biblicalEvidence": "Divine attributes applied to Jesus alongside real human hunger, weeping, and death.",
    "historicalBackground": "Council of Chalcedon (451) against Nestorius (two persons) and Eutyches (one confused nature).",
    "positions": [
      {
        "name": "Chalcedonian Dyophysitism",
        "description": "Two complete natures in one hypostasis without confusion or division.",
        "traditions": [
          "Reformed",
          "Lutheran",
          "Roman Catholic",
          "Eastern Orthodox"
        ]
      },
      {
        "name": "Miaphysitism",
        "description": "One united nature of the incarnate Word out of two natures.",
        "traditions": [
          "Coptic",
          "Syrian",
          "Armenian Apostolic"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Western & Eastern Orthodoxy",
      "positionSummary": "Accepts the Chalcedonian Definition (451) as binding ecumenical dogma."
    },
    {
      "tradition": "Oriental Orthodox",
      "positionSummary": "Prefers the Cyrillian formula 'one nature of God the Word incarnate' while rejecting Eutychianism."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Greek",
      "scriptUnicode": "ὑπόστασις",
      "lemma": "hypostasis",
      "transliteration": "hypóstasis",
      "pronunciation": "hoo-POSS-tah-sis",
      "partOfSpeech": "Noun, Feminine",
      "semanticRange": "Substantial nature, person, underlying reality, subsistence",
      "strongsNumber": "G5287",
      "biblicalOccurrencesCount": 5,
      "importantOccurrences": [
        "Heb 1:3",
        "Heb 11:1"
      ],
      "translationCautions": "In Christology, refers to the concrete person of the Son, distinct from ousia (essence).",
      "sources": [
        "Thayer's Greek-English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-hypostatic-union",
      "languageCode": "bn",
      "localHeadword": "দ্বি-স্বভাব ঐক্য (Hypostatic Union)",
      "definitionSimple": "যীশু খ্রীষ্টের এক ব্যক্তিসত্তায় পূর্ণ ঈশ্বরত্ব ও পূর্ণ মানবত্বের অলৌকিক মিলন।",
      "definitionStudy": "খ্যালসিডনের মহাসভায় (৪৫১ খ্রী.) স্বীকৃত মতবাদ যেখানে খ্রীষ্ট একইসাথে পূর্ণ ঈশ্বর ও পূর্ণ মানুষ কিন্তু একক ব্যক্তিসত্তা।",
      "definitionAcademic": "খ্রীষ্টতত্ত্বের কেন্দ্রীয় স্তম্ভ যা কোনো বিভাজন বা মিশ্রণ ছাড়াই এক ব্যক্তিতে দুটি স্বভাবের সহাবস্থান ব্যাখ্যা করে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.nicene_creed, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["nicene_creed","westminster","logos_editorial"]
},

{
  "id": "entry-elder-presbyter",
  "slug": "elder-presbyter",
  "headwordEnglish": "Elder (Presbyter)",
  "alternativeSpellings": [
    "Presbyter",
    "Presbuteros",
    "Church Overseer"
  ],
  "pronunciationIpa": "/ˈɛl.dɚ/",
  "partOfSpeech": "Noun",
  "category": "Ministry and Leadership",
  "theologicalPaths": [
    "ministry-and-leadership",
    "ecclesiology",
    "pastoral-theology"
  ],
  "definitionSimple": "A mature, qualified spiritual leader appointed in the local church to shepherd, teach, and oversee the congregation under Christ.",
  "definitionStudy": "The New Testament ecclesial office of spiritual leadership and oversight (presbyteros / episkopos), entrusted with teaching sound doctrine, refuting error, and pastoring God's flock according to the qualifications in 1 Timothy 3 and Titus 1.",
  "definitionAcademic": "An ordained ecclesiastical office in apostolic ecclesiology functionally interchangeable in the New Testament with episkopos (overseer). In Reformed presbyterian polity, distinguished between ruling elders and teaching elders (1 Tim 5:17).",
  "biblicalUsage": "Apostles appointed a plurality of elders in every church to teach and exercise shepherdly oversight (Acts 14:23; Titus 1:5; 1 Pet 5:1-2).",
  "scriptureReferences": [
    "Acts 14:23",
    "Acts 20:17-28",
    "1 Timothy 3:1-7",
    "1 Timothy 5:17",
    "Titus 1:5-9",
    "1 Peter 5:1-4"
  ],
  "historicalDevelopment": "Rooted in Jewish synagogue leadership, established by apostles in local churches, and evolved into episcopal hierarchy in early church history.",
  "theologicalSignificance": "Ensures collegiate, accountable pastoral oversight protecting Christ's sheep from false doctrine and wolves.",
  "majorInterpretivePositions": {
    "issue": "The relationship between presbyteros (elder) and episkopos (bishop/overseer).",
    "biblicalEvidence": "Interchangeable terms in Acts 20:17, 28 and Titus 1:5, 7.",
    "historicalBackground": "Presbyterian parity vs episcopal mono-episcopacy.",
    "positions": [
      {
        "name": "Presbyterian Plurality & Parity",
        "description": "Bishops and elders are the same biblical office exercised in plurality.",
        "traditions": [
          "Presbyterian",
          "Reformed",
          "Baptist"
        ]
      },
      {
        "name": "Episcopal Threefold Order",
        "description": "Bishops possess higher apostolic authority distinct from presbyters and deacons.",
        "traditions": [
          "Anglican",
          "Eastern Orthodox",
          "Roman Catholic"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Presbyterian",
      "positionSummary": "Maintains a collegiate session of ruling and teaching elders elected by the congregation."
    },
    {
      "tradition": "Anglican",
      "positionSummary": "Retains presbyters as the second order of ordained ministry under diocesan bishops."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Greek",
      "scriptUnicode": "πρεσβύτερος",
      "lemma": "presbuteros",
      "transliteration": "presbýteros",
      "pronunciation": "pres-BOO-teh-ros",
      "partOfSpeech": "Adjective / Noun, Masculine",
      "semanticRange": "Elder, mature person, member of council, church leader",
      "strongsNumber": "G4245",
      "biblicalOccurrencesCount": 66,
      "importantOccurrences": [
        "Acts 14:23",
        "1 Tim 5:17",
        "Titus 1:5"
      ],
      "translationCautions": "Denotes spiritual maturity and official pastoral capacity in the New Testament church.",
      "sources": [
        "Thayer's Greek-English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-elder-presbyter",
      "languageCode": "bn",
      "localHeadword": "প্রাচীন / প্রেসবাইটার (Elder)",
      "definitionSimple": "স্থানীয় মণ্ডলীতে আধ্যাত্মিক পরিচালনা, শিক্ষা ও তত্ত্বাবধানের জন্য নিযুক্ত আত্মিক নেতা।",
      "definitionStudy": "নূতন নিয়মে নির্দেশিত মণ্ডলী পরিচালনার দায়িত্বপ্রাপ্ত প্রাচীন যিনি বিশ্বাসীদের সত্য শিক্ষায় পরিচালিত করেন।",
      "definitionAcademic": "মণ্ডলীবিদ্যার একটি প্রধান পদমর্যাদা যা মণ্ডলীর বহুত্ববাদী ও জবাবদিহিতামূলক পরিচালনা নিশ্চিত করে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.westminster, SOURCE_REGISTER.thirty_nine_articles, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["westminster","thirty_nine_articles","logos_editorial"]
},

{
  "id": "entry-shepherding",
  "slug": "shepherding",
  "headwordEnglish": "Shepherding",
  "alternativeSpellings": [
    "Pastoral Shepherding",
    "Flock Oversight"
  ],
  "pronunciationIpa": "/ˈʃep.ɚ.dɪŋ/",
  "partOfSpeech": "Noun",
  "category": "Pastoral Theology",
  "theologicalPaths": [
    "pastoral-theology",
    "ministry-and-leadership",
    "practical-theology"
  ],
  "definitionSimple": "The continuous biblical practice of guiding, feeding, guarding, and loving God's people as sheep belonging to Christ.",
  "definitionStudy": "The comprehensive pastoral activity of spiritual nourishment through preaching, protective vigilance against spiritual predators, and gentle restoration of straying souls patterned on the Shepherd of Israel.",
  "definitionAcademic": "A metaphoric and vocational locus of poimenics defining the pastoral office as imitative of Christ’s archetypal pastorship, executing protective, gubernative, and alimentary functions toward the ecclesial flock.",
  "biblicalUsage": "Ubiquitous biblical motif from Psalm 23 and Ezekiel 34 to Jesus' self-designation as the Good Shepherd (John 10:11).",
  "scriptureReferences": [
    "Psalm 23:1-4",
    "Ezekiel 34:1-16",
    "John 10:11-16",
    "Acts 20:28-29",
    "1 Peter 5:2-3"
  ],
  "historicalDevelopment": "Ancient Near Eastern pastoral imagery adopted in Israel, consummated in Jesus, and institutionalized in church offices.",
  "theologicalSignificance": "Guards the flock against abusive hierarchy by demanding sacrificial, Christlike servanthood.",
  "majorInterpretivePositions": {
    "issue": "The limits of pastoral authority in disciple shepherding.",
    "biblicalEvidence": "Pastors not lording it over the flock (1 Pet 5:3) vs obeying spiritual leaders (Heb 13:17).",
    "historicalBackground": "Rejection of heavy-handed authoritarian shepherding movements of the 1970s.",
    "positions": [
      {
        "name": "Servant Oversight",
        "description": "Pastoral authority is ministerial and persuasive, never coercive or domineering.",
        "traditions": [
          "Historic Protestant",
          "Reformed",
          "Baptist"
        ]
      },
      {
        "name": "Discipleship Covenanting",
        "description": "Emphasizes strict personal submission to personal spiritual shepherds.",
        "traditions": [
          "Charismatic Shepherding Movement"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Historic Protestant",
      "positionSummary": "Strictly guards against authoritarianism, grounding pastoral authority purely in the Word of God."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Hebrew",
      "scriptUnicode": "רָעָה",
      "lemma": "ra'ah",
      "transliteration": "rā'āh",
      "pronunciation": "rah-AH",
      "partOfSpeech": "Verb",
      "semanticRange": "To pasture, tend, graze, feed, rule as shepherd",
      "strongsNumber": "H7462",
      "biblicalOccurrencesCount": 173,
      "importantOccurrences": [
        "Ps 23:1",
        "Ezek 34:2"
      ],
      "translationCautions": "Includes feeding, leading to water, and physical protection from predators.",
      "sources": [
        "Brown-Driver-Briggs Hebrew and English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-shepherding",
      "languageCode": "bn",
      "localHeadword": "মেষপালন পরিচর্যা (Shepherding)",
      "definitionSimple": "ঈশ্বরের মণ্ডলীকে উত্তম মেষপালক খ্রীষ্টের আদর্শে খাদ্য দান, সুরক্ষা ও দিকনির্দেশনা প্রদান।",
      "definitionStudy": "বিশ্বাসী মেষদের প্রতি পালকীয় মমত্ব, সত্য শিক্ষাদান ও আত্মিক বিপথগামিতা থেকে উদ্ধারের সার্বক্ষণিক পরিচর্যা।",
      "definitionAcademic": "পালকীয় ধর্মতত্ত্বের একটি রূপক ও কার্যপদ্ধতি যা খ্রীষ্টীয় সেবাকর্মের আত্মবলিদানমূলক নেতৃত্বকে সংজ্ঞায়িত করে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.bdb, SOURCE_REGISTER.heidelberg, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["bdb","heidelberg","logos_editorial"]
},

{
  "id": "entry-divine-simplicity",
  "slug": "divine-simplicity",
  "headwordEnglish": "Divine Simplicity",
  "alternativeSpellings": [
    "Simplicitas Dei",
    "Simplicity of God"
  ],
  "pronunciationIpa": "/dɪˈvaɪn sɪmˈplɪs.ə.ti/",
  "partOfSpeech": "Noun",
  "category": "Philosophical Theology",
  "theologicalPaths": [
    "philosophical-theology",
    "theology-proper",
    "doctrine-of-the-trinity"
  ],
  "definitionSimple": "The classical doctrine that God is not made up of parts, physical pieces, or changing attributes, but is completely one, unified, and identical with His own divine essence.",
  "definitionStudy": "The classical theistic affirmation that God is without metaphysical composition (parts, matter, form, potentiality, or accidental properties); all that is in God is God.",
  "definitionAcademic": "An ontological doctrine of classical theism asserting that the divine nature is non-composite (incompositus). God’s essence and existence are identical (esse est per essentiam), and His attributes are not distinct properties added to His nature.",
  "biblicalUsage": "Scripture affirms that God is Spirit, light, love, and the one indivisible Yahweh (Deut 6:4; John 4:24; 1 John 1:5).",
  "scriptureReferences": [
    "Deuteronomy 6:4",
    "John 4:24",
    "Exodus 3:14",
    "1 John 1:5"
  ],
  "historicalDevelopment": "Formulated by Augustine, Aquinas, and Anselm, and confessed in the Westminster Confession (1646) and Thirty-Nine Articles ('without body, parts, or passions').",
  "theologicalSignificance": "Guarantees that God is absolute, immutable, independent, and cannot be divided, dismantled, or destroyed.",
  "majorInterpretivePositions": {
    "issue": "How divine simplicity co-exists with the tri-personality of God and multiple divine attributes.",
    "biblicalEvidence": "The Shema (Deut 6:4) vs real trinitarian distinctions (Matt 28:19).",
    "historicalBackground": "Classical theism vs modern open theism and social trinitarian critiques.",
    "positions": [
      {
        "name": "Classical Divine Simplicity",
        "description": "God has no physical or metaphysical parts; distinctions in attributes are due to creaturely perception.",
        "traditions": [
          "Reformed",
          "Thomist",
          "Lutheran",
          "Eastern Orthodox (with Essence-Energies)"
        ]
      },
      {
        "name": "Modern Theistic Personalism",
        "description": "God is a person who possesses distinct properties and undergoes real temporal change.",
        "traditions": [
          "Open Theism",
          "Process Theology"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Confessional Protestant",
      "positionSummary": "Confesses God as 'without body, parts, or passions' (WCF 2.1; 39 Articles 1)."
    },
    {
      "tradition": "Eastern Orthodox",
      "positionSummary": "Affirms divine simplicity alongside the Palamite distinction between uncreated essence and uncreated energies."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Hebrew",
      "scriptUnicode": "אֶחָד",
      "lemma": "echad",
      "transliteration": "'echād",
      "pronunciation": "ekh-AHD",
      "partOfSpeech": "Adjective",
      "semanticRange": "One, unique, solitary, unified",
      "strongsNumber": "H259",
      "biblicalOccurrencesCount": 952,
      "importantOccurrences": [
        "Deut 6:4"
      ],
      "translationCautions": "In the Shema, affirms the absolute unique unity and indivisibility of Yahweh.",
      "sources": [
        "Brown-Driver-Briggs Hebrew and English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-divine-simplicity",
      "languageCode": "bn",
      "localHeadword": "ঐশ্বরিক সরলতা / অংশহীনতা (Divine Simplicity)",
      "definitionSimple": "এই চিরায়ত শিক্ষা যে ঈশ্বর কোনো জড় অংশ বা পরিবর্তনশীল উপাদানে গঠিত নন, বরং তিনি অখণ্ড ও একক।",
      "definitionStudy": "শাস্ত্রীয় একেশ্বরবাদের ভিত্তি যা নিশ্চিত করে যে ঈশ্বরের স্বভাব ও তাঁর গুণাবলী অভিন্ন এবং তিনি কোনো পরিবর্তনের অধীন নন।",
      "definitionAcademic": "দার্শনিক ধর্মতত্ত্বের মূল ভিত্তি যা ঈশ্বরের পরম স্বাধীনতা, অবিনশ্বরতা ও অখণ্ড পরম সত্তাকে প্রতিপাদন করে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.westminster, SOURCE_REGISTER.thirty_nine_articles, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["westminster","thirty_nine_articles","logos_editorial"]
},

{
  "id": "entry-general-revelation",
  "slug": "general-revelation",
  "headwordEnglish": "General Revelation",
  "alternativeSpellings": [
    "Natural Revelation",
    "Cosmic Revelation"
  ],
  "pronunciationIpa": "/ˈdʒen.ɚ.əl ˌrev.əˈleɪ.ʃən/",
  "partOfSpeech": "Noun",
  "category": "Natural Theology",
  "theologicalPaths": [
    "natural-theology",
    "systematic-theology",
    "apologetics"
  ],
  "definitionSimple": "God's truth about His existence, power, and glory that is clearly revealed to all human beings everywhere through nature, creation, and human conscience.",
  "definitionStudy": "The universal self-disclosure of God through the created cosmos, providential history, and human moral conscience, rendering all humanity without excuse before God (Rom 1:19-20).",
  "definitionAcademic": "The universal, non-soteriological manifestation of God's eternal power and divine nature mediated through the works of creation and the moral law inscribed upon the human heart (lex naturalis).",
  "biblicalUsage": "Scripture describes the heavens continually proclaiming the glory of God to the ends of the earth (Ps 19:1-4; Rom 1:18-32).",
  "scriptureReferences": [
    "Psalm 19:1-6",
    "Acts 14:17",
    "Acts 17:24-28",
    "Romans 1:18-21",
    "Romans 2:14-15"
  ],
  "historicalDevelopment": "Articulated by Paul, systematized by Calvin (sensus divinitatis), and affirmed in the Belgic and Westminster Confessions.",
  "theologicalSignificance": "Establishes universal human accountability to God, provides common ground for human culture, but is insufficient for saving knowledge apart from Christ.",
  "majorInterpretivePositions": {
    "issue": "Whether general revelation can lead to saving knowledge of God without the gospel.",
    "biblicalEvidence": "Romans 1:20 (leaves men without excuse) vs Romans 10:14 (need for hearing the gospel).",
    "historicalBackground": "Reformed consensus vs Enlightenment natural religion vs Karl Barth's total rejection.",
    "positions": [
      {
        "name": "Traditional Reformed",
        "description": "General revelation is universally clear but suppressed in unrighteousness, necessitating special revelation for salvation.",
        "traditions": [
          "Reformed",
          "Presbyterian",
          "Evangelical"
        ]
      },
      {
        "name": "Inclusivism",
        "description": "Sincere responses to general revelation may receive saving grace through Christ.",
        "traditions": [
          "Post-Vatican II Roman Catholic",
          "Moderate Evangelical"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Reformed",
      "positionSummary": "Emphasizes that general revelation renders fallen man 'without excuse' (Rom 1:20) and points to Christ in the gospel."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Hebrew",
      "scriptUnicode": "סָפַר",
      "lemma": "saphar",
      "transliteration": "sāphar",
      "pronunciation": "sah-FAR",
      "partOfSpeech": "Verb",
      "semanticRange": "To count, recount, declare, proclaim, narrate",
      "strongsNumber": "H5608",
      "biblicalOccurrencesCount": 161,
      "importantOccurrences": [
        "Ps 19:1"
      ],
      "translationCautions": "In Psalm 19:1 the heavens continually 'narrate' the glory of God without verbal speech.",
      "sources": [
        "Brown-Driver-Briggs Hebrew and English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-general-revelation",
      "languageCode": "bn",
      "localHeadword": "সাধারণ প্রকাশ (General Revelation)",
      "definitionSimple": "সৃষ্টিজগত, প্রকৃতি ও মানুষের বিবেকের মাধ্যমে সকল মানুষের কাছে ঈশ্বরের অস্তিত্ব ও মহিমার প্রকাশ।",
      "definitionStudy": "ঈশ্বর কর্তৃক নিখিল সৃষ্টির মধ্যে স্থাপিত প্রকাশ যা প্রতিটি মানুষের কাছে তাঁর ক্ষমতা ও ন্যায়পরায়ণতা স্পষ্ট করে তোলে।",
      "definitionAcademic": "প্রাকৃতিক ধর্মতত্ত্বের মূল প্রত্যয় যা প্রমাণ করে যে বিশ্বব্রহ্মাণ্ডের কার্যধারায় ঈশ্বরের মহিমা সার্বজনীনভাবে প্রতীয়মান।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.bdb, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["bdb","westminster","logos_editorial"]
},

{
  "id": "entry-teleological-argument",
  "slug": "teleological-argument",
  "headwordEnglish": "Teleological Argument",
  "alternativeSpellings": [
    "Argument from Design",
    "Teleology"
  ],
  "pronunciationIpa": "/ˌtiː.li.əˈlɑː.dʒɪ.kəl ˈɑːrɡ.jə.mənt/",
  "partOfSpeech": "Noun",
  "category": "Natural Theology",
  "theologicalPaths": [
    "natural-theology",
    "philosophical-theology",
    "apologetics"
  ],
  "definitionSimple": "The reasoned argument that the incredible order, beauty, fine-tuning, and purpose in the universe point to an intelligent, all-wise Creator God.",
  "definitionStudy": "The philosophical argument for God's existence inferred from observed purpose, fine-tuning, complexity, and order in the cosmos (telos = end/purpose).",
  "definitionAcademic": "An a posteriori inductive argument asserting that specified complexity and cosmic fine-tuning are best explained by an intelligent, purposeful transcendent Designer rather than unguided stochastic mechanisms.",
  "biblicalUsage": "Scripture constantly appeals to the observed craftsmanship of nature to demonstrate divine wisdom (Ps 104:24; Prov 3:19; Rom 1:20).",
  "scriptureReferences": [
    "Psalm 104:24",
    "Proverbs 3:19",
    "Romans 1:20",
    "Job 38-39"
  ],
  "historicalDevelopment": "Stated by Thomas Aquinas (Fifth Way), popularized by William Paley (Watchmaker Analogy), and reformulated through modern cosmic fine-tuning.",
  "theologicalSignificance": "Affirms that faith is harmonious with empirical observation and cosmic beauty.",
  "majorInterpretivePositions": {
    "issue": "The validity of the teleological inference against evolutionary naturalism.",
    "biblicalEvidence": "Creation visibly manifesting craftsmanship (Ps 19:1; Rom 1:20).",
    "historicalBackground": "Paley's watchmaker vs Darwinian natural selection vs modern Intelligent Design.",
    "positions": [
      {
        "name": "Classical Design Argument",
        "description": "Cosmic order and biological intricacy require a divine transcendent intellect.",
        "traditions": [
          "Classical Christian Apologetics",
          "Thomism"
        ]
      },
      {
        "name": "Fine-Tuning Formulation",
        "description": "The precise mathematical constants of the physical universe point decisively to a Cosmic Fine-Tuner.",
        "traditions": [
          "Contemporary Christian Philosophy"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Christian Apologetics",
      "positionSummary": "Used across catholic, protestant, and orthodox traditions as a robust defense of theism."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Greek",
      "scriptUnicode": "τέλος",
      "lemma": "telos",
      "transliteration": "télos",
      "pronunciation": "TEH-los",
      "partOfSpeech": "Noun, Neuter",
      "semanticRange": "End, purpose, goal, aim, outcome, fulfillment",
      "strongsNumber": "G5056",
      "biblicalOccurrencesCount": 42,
      "importantOccurrences": [
        "Rom 10:4",
        "1 Tim 1:5"
      ],
      "translationCautions": "Indicates purpose and fulfillment, not merely temporal termination.",
      "sources": [
        "Thayer's Greek-English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-teleological-argument",
      "languageCode": "bn",
      "localHeadword": "উদ্দেশ্যমূলক যুক্তি (Teleological Argument)",
      "definitionSimple": "বিশ্বজগতের অসাধারণ শৃঙ্খলা ও উদ্দেশ্যময় নকশা দেখে একজন বুদ্ধিমান স্রষ্টা ঈশ্বরের অস্তিত্ব প্রমাণ করার যুক্তি।",
      "definitionStudy": "প্রকৃতি ও মহাবিশ্বের সূক্ষ্ম ভারসাম্য এবং জৈবিক জটিলতা থেকে সৃষ্টিকর্তার উপস্থিতি প্রমাণের দার্শনিক বিতর্ক।",
      "definitionAcademic": "প্রাকৃতিক ধর্মতত্ত্ব ও সত্য সমর্থনের যুক্তি যা প্রমাণ করে যে বিশ্বজগৎ কোনো আকস্মিক দুর্ঘটনা নয় বরং ঈশ্বরের সুপরিকল্পিত সৃষ্টি।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","logos_editorial"]
},

{
  "id": "entry-natural-law",
  "slug": "natural-law",
  "headwordEnglish": "Natural Law",
  "alternativeSpellings": [
    "Lex Naturalis",
    "Moral Law of Nature"
  ],
  "pronunciationIpa": "/ˈnætʃ.ɚ.əl lɔː/",
  "partOfSpeech": "Noun",
  "category": "Moral Theology",
  "theologicalPaths": [
    "moral-theology",
    "christian-ethics",
    "natural-theology"
  ],
  "definitionSimple": "The universal moral sense of right and wrong that God has written into every human heart and conscience from creation.",
  "definitionStudy": "The moral order instituted by God in creation, accessible to human reason apart from special revelation, which binds all human beings to basic moral obligations (Rom 2:14-15).",
  "definitionAcademic": "The participation of rational creatures in the eternal law of God (lex aeterna), whereby universal moral norms of justice and equity are apprehendable by the lumen naturale and recorded in the conscience.",
  "biblicalUsage": "Scripture describes the Gentiles who do not have the written law possessing 'the work of the law written on their hearts' (Rom 2:14-15).",
  "scriptureReferences": [
    "Romans 2:14-15",
    "Romans 1:32",
    "Genesis 9:6",
    "Amos 1-2"
  ],
  "historicalDevelopment": "Synthesized by Thomas Aquinas, embraced by early Protestant reformers (Calvin, Melanchthon), and foundational to international law.",
  "theologicalSignificance": "Provides a transcendent basis for civil law, universal human rights, and cross-cultural moral judgment.",
  "majorInterpretivePositions": {
    "issue": "The degree to which the fall corrupted humanity's ability to perceive natural law accurately.",
    "biblicalEvidence": "Universal moral accountability (Rom 1-2) vs total depravity blinding the mind (1 Cor 2:14).",
    "historicalBackground": "Thomistic natural law vs Protestant total depravity debates.",
    "positions": [
      {
        "name": "Protestant Common Grace View",
        "description": "Natural law remains written on the heart by common grace, but is distorted by sin.",
        "traditions": [
          "Reformed",
          "Lutheran",
          "Anglican"
        ]
      },
      {
        "name": "Thomistic Classical View",
        "description": "Human reason retains an intrinsic, uncorrupted inclination toward the universal good.",
        "traditions": [
          "Roman Catholic"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Roman Catholic",
      "positionSummary": "Positions natural law as the primary foundation for social and bioethical teaching."
    },
    {
      "tradition": "Reformed",
      "positionSummary": "Subordinates natural law to the explicit moral precepts of the Decalogue."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Greek",
      "scriptUnicode": "νόμος",
      "lemma": "nomos",
      "transliteration": "nómos",
      "pronunciation": "NOH-mos",
      "partOfSpeech": "Noun, Masculine",
      "semanticRange": "Law, rule, governing principle, standard of conduct",
      "strongsNumber": "G3551",
      "biblicalOccurrencesCount": 194,
      "importantOccurrences": [
        "Rom 2:14-15"
      ],
      "translationCautions": "In Rom 2:14 refers to the moral law written internally without the Mosaic codex.",
      "sources": [
        "Thayer's Greek-English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-natural-law",
      "languageCode": "bn",
      "localHeadword": "প্রাকৃতিক বিধি (Natural Law)",
      "definitionSimple": "ঈশ্বরের সেই সার্বজনীন নৈতিক নিয়ম যা তিনি প্রতিটি মানুষের অন্তরে ও বিবেকে সৃষ্টিলগ্নেই লিখে দিয়েছেন।",
      "definitionStudy": "লিখিত শাস্ত্র ছাড়াও মানুষের বিবেক ও যুক্তি দ্বারা উপলব্ধিযোগ্য ঈশ্বরের সার্বজনীন নৈতিক নির্দেশিকা।",
      "definitionAcademic": "নৈতিক ধর্মতত্ত্বের একটি অঙ্গ যা সকল মানুষের ন্যায় ও অন্যায়বোধের অন্তর্নিহিত পরম মানদণ্ড নির্ধারণ করে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["westminster","logos_editorial"]
},

{
  "id": "entry-virtue-ethics",
  "slug": "virtue-ethics",
  "headwordEnglish": "Virtue Ethics",
  "alternativeSpellings": [
    "Christian Virtue Ethics",
    "Aretaic Ethics"
  ],
  "pronunciationIpa": "/ˈvɝː.tʃuː ˈeθ.ɪks/",
  "partOfSpeech": "Noun",
  "category": "Christian Ethics",
  "theologicalPaths": [
    "christian-ethics",
    "moral-theology",
    "spiritual-formation"
  ],
  "definitionSimple": "A Christian approach to living right that focuses on who a person becomes in Christ, cultivating godly character, love, and the fruit of the Holy Spirit.",
  "definitionStudy": "A normative ethical framework emphasizing moral character and the habitual cultivation of theological virtues (faith, hope, love) and cardinal virtues transformed by the Holy Spirit.",
  "definitionAcademic": "An aretaic moral system centered on the teleological transformation of the agent toward habitus of righteousness, transcending mere deontological legalism or consequentialism.",
  "biblicalUsage": "Scripture commands believers to grow in godliness and lists specific virtues to cultivate (Gal 5:22-23; 2 Pet 1:5-7; Phil 4:8).",
  "scriptureReferences": [
    "Galatians 5:22-23",
    "Philippians 4:8",
    "Colossians 3:12-14",
    "2 Peter 1:5-7"
  ],
  "historicalDevelopment": "Synthesized ancient virtue ethics (Aristotle) with Christian gospel revelation through Augustine and Aquinas.",
  "theologicalSignificance": "Focuses on heart transformation through union with Christ rather than external hypocrisy.",
  "majorInterpretivePositions": {
    "issue": "Whether Christian ethics is primarily rule-keeping (deontological) or character formation (aretaic).",
    "biblicalEvidence": "Commandments (Exod 20) vs fruits of the Spirit (Gal 5).",
    "historicalBackground": "Legalistic moralism vs gospel character formation.",
    "positions": [
      {
        "name": "Integrated Christological Virtue",
        "description": "Moral rules reveal God's will while the Spirit produces virtuous Christlikeness.",
        "traditions": [
          "Ecumenical Christian",
          "Reformed",
          "Anglican"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Catholic & Anglican",
      "positionSummary": "Explicitly structures moral instruction around theological and cardinal virtues."
    },
    {
      "tradition": "Evangelical",
      "positionSummary": "Emphasizes the fruit of the Spirit and inward heart regeneration."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Greek",
      "scriptUnicode": "ἀρετή",
      "lemma": "arete",
      "transliteration": "aretē",
      "pronunciation": "ah-reh-TAY",
      "partOfSpeech": "Noun, Feminine",
      "semanticRange": "Moral goodness, excellence, virtue, praiseworthy character",
      "strongsNumber": "G703",
      "biblicalOccurrencesCount": 5,
      "importantOccurrences": [
        "Phil 4:8",
        "2 Pet 1:5"
      ],
      "translationCautions": "Denotes moral excellence reflecting God's holy character, not human boastful pride.",
      "sources": [
        "Thayer's Greek-English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-virtue-ethics",
      "languageCode": "bn",
      "localHeadword": "সদ্গুণ নীতিশাস্ত্র (Virtue Ethics)",
      "definitionSimple": "কেবল নিয়ম মান্য করা নয়, বরং খ্রীষ্টে চরিত্র গঠন ও আত্মিক গুণাবলীর বিকাশ সাধনের নীতিশাস্ত্র।",
      "definitionStudy": "পবিত্র আত্মার ফলের মাধ্যমে বিশ্বাসীর অন্তরে ঈশ্বরীয় চরিত্রের অভ্যাসগত গঠন ও রূপান্তর।",
      "definitionAcademic": "খ্রীষ্টীয় নীতিশাস্ত্রের একটি তত্ত্ব যা বাহ্যিক আজ্ঞাপালনের চেয়ে অন্তরের ধার্মিক স্বভাবের ওপর গুরুত্ব আরোপ করে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.heidelberg, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","heidelberg","logos_editorial"]
},

{
  "id": "entry-sanctity-of-life",
  "slug": "sanctity-of-life",
  "headwordEnglish": "Sanctity of Life",
  "alternativeSpellings": [
    "Sacredness of Human Life",
    "Inviolability of Life"
  ],
  "pronunciationIpa": "/ˈsæŋk.tə.ti əv laɪf/",
  "partOfSpeech": "Noun",
  "category": "Christian Ethics",
  "theologicalPaths": [
    "christian-ethics",
    "moral-theology",
    "theological-anthropology"
  ],
  "definitionSimple": "The Christian truth that every human life is sacred and precious to God from conception to natural death because humans are made in God's image.",
  "definitionStudy": "The moral doctrine asserting the inviolable dignity and sacred worth of human beings as image-bearers of God, establishing strict moral prohibitions against murder, abortion, and euthanasia.",
  "definitionAcademic": "An ethical principle grounded in creationist anthropology (imago Dei) affirming the intrinsic, non-instrumental worth of human existence across all developmental stages and capacities.",
  "biblicalUsage": "Scripture forbids the shed of innocent blood because man is made in the image of God (Gen 9:6; Ps 139:13-16).",
  "scriptureReferences": [
    "Genesis 1:26-27",
    "Genesis 9:6",
    "Psalm 139:13-16",
    "Exodus 20:13",
    "Jeremiah 1:5"
  ],
  "historicalDevelopment": "Distinguished early Christians from the Greco-Roman culture of infanticide and exposure, forming the basis of Christian hospital and bioethical ministries.",
  "theologicalSignificance": "Guards vulnerable human life against utilitarian exploitation.",
  "majorInterpretivePositions": {
    "issue": "The moral status of unborn human life from fertilization.",
    "biblicalEvidence": "Psalm 139:13 and Luke 1:41 affirming prenatal personhood.",
    "historicalBackground": "Early church Didache forbidding abortion vs modern secular bioethics.",
    "positions": [
      {
        "name": "Continuous Personhood from Conception",
        "description": "Human life begins at fertilization and bears immediate full moral status.",
        "traditions": [
          "Protestant",
          "Catholic",
          "Eastern Orthodox"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Ecumenical Orthodoxy",
      "positionSummary": "Consistently affirms the inviolable right to life of all unborn children."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Hebrew",
      "scriptUnicode": "חַיִּים",
      "lemma": "chayyim",
      "transliteration": "chayyîm",
      "pronunciation": "khah-YEEM",
      "partOfSpeech": "Noun, Masculine Plural",
      "semanticRange": "Life, living, vitality, lifetime",
      "strongsNumber": "H2416",
      "biblicalOccurrencesCount": 140,
      "importantOccurrences": [
        "Gen 2:7",
        "Deut 30:19"
      ],
      "translationCautions": "Plural form signifying the richness and divine gift of creaturely vitality.",
      "sources": [
        "Brown-Driver-Briggs Hebrew and English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-sanctity-of-life",
      "languageCode": "bn",
      "localHeadword": "জীবনের পবিত্রতা (Sanctity of Life)",
      "definitionSimple": "ঈশ্বরের প্রতিমূর্তিতে সৃষ্টির কারণে প্রতিটি মানবজীবনের পরম মূল্য ও অলঙ্ঘনীয় পবিত্রতা।",
      "definitionStudy": "গর্ভধারণ থেকে স্বাভাবিক মৃত্যু পর্যন্ত মানবজীবনের ঐশ্বরিক মর্যাদা রক্ষা করার খ্রীষ্টীয় নৈতিক বাধ্যবাধকতা।",
      "definitionAcademic": "খ্রীষ্টীয় নীতিশাস্ত্রের একটি ভিত্তি যা মানুষের জীবনকে যেকোনো পার্থিব সুবিধার ঊর্ধ্বে পবিত্র ঘোষণা করে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.bdb, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["bdb","westminster","logos_editorial"]
},

{
  "id": "entry-christian-justice",
  "slug": "christian-justice",
  "headwordEnglish": "Christian Justice",
  "alternativeSpellings": [
    "Biblical Justice",
    "Mishpat and Tzedakah"
  ],
  "pronunciationIpa": "/ˈkrɪs.tʃən ˈdʒʌs.tɪs/",
  "partOfSpeech": "Noun",
  "category": "Christian Ethics",
  "theologicalPaths": [
    "christian-ethics",
    "moral-theology",
    "biblical-theology"
  ],
  "definitionSimple": "The active pursuit of righteousness, fairness, and defense of the poor, oppressed, and vulnerable in obedience to God's holy character.",
  "definitionStudy": "The biblical mandate combining righteous uprightness (tzedakah) with restorative and retributive fairness (mishpat), reflecting God’s passionate defense of the weak and vindication of truth.",
  "definitionAcademic": "A covenantal ethical locus grounded in divine holiness and righteousness, demanding systemic equity, legal impartiality, and structural compassion toward the marginalized without partiality.",
  "biblicalUsage": "Scripture commands believers to 'act justly, love mercy, and walk humbly with your God' (Micah 6:8; Isa 1:17; Amos 5:24).",
  "scriptureReferences": [
    "Micah 6:8",
    "Isaiah 1:17",
    "Amos 5:24",
    "Zechariah 7:9-10",
    "James 1:27"
  ],
  "historicalDevelopment": "Rooted in the Hebrew prophets, renewed in Christ's ministry to the poor, and articulated in the social reform movements of Wilberforce and Shaftesbury.",
  "theologicalSignificance": "Demonstrates the authenticity of true saving faith through outward deeds of mercy and righteousness.",
  "majorInterpretivePositions": {
    "issue": "The relationship between biblical justice and modern secular critical theories.",
    "biblicalEvidence": "Impartiality of God (Lev 19:15) vs contemporary political ideologies.",
    "historicalBackground": "Christian abolitionism and civil rights vs secular identity frameworks.",
    "positions": [
      {
        "name": "Biblical Covenantal Justice",
        "description": "True justice is defined strictly by God's character and law, demanding impartial truth and sacrificial love.",
        "traditions": [
          "Confessional Evangelical",
          "Reformed"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Reformed",
      "positionSummary": "Grounds justice in the moral law of God and the cosmic lordship of Jesus Christ."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Hebrew",
      "scriptUnicode": "מִשְׁפָּט",
      "lemma": "mishpat",
      "transliteration": "mishpāṭ",
      "pronunciation": "mish-PAHT",
      "partOfSpeech": "Noun, Masculine",
      "semanticRange": "Justice, judgment, rights, fair legal verdict",
      "strongsNumber": "H4941",
      "biblicalOccurrencesCount": 421,
      "importantOccurrences": [
        "Micah 6:8",
        "Amos 5:24"
      ],
      "translationCautions": "Refers to concrete actions that right wrongs and restore dignity.",
      "sources": [
        "Brown-Driver-Briggs Hebrew and English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-christian-justice",
      "languageCode": "bn",
      "localHeadword": "খ্রীষ্টীয় ন্যায়বিচার (Christian Justice)",
      "definitionSimple": "ঈশ্বরীয় আজ্ঞায় দুর্বল ও অত্যাচারিত মানুষের পক্ষে দাঁড়ানো এবং সততা ও সুবিচার প্রতিষ্ঠা করা।",
      "definitionStudy": "শাস্ত্রীয় ন্যায় (মিশপাট) ও ধার্মিকতার (সেদাকা) সমন্বয় যা সমাজে দুর্বল ও দরিদ্রের অধিকার রক্ষা করে।",
      "definitionAcademic": "খ্রীষ্টীয় নীতিশাস্ত্রের একটি অপরিহার্য অঙ্গ যা ঈশ্বরের ন্যায়পরায়ণ চরিত্রের ওপর প্রতিষ্ঠিত।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.bdb, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["bdb","westminster","logos_editorial"]
},

{
  "id": "entry-presuppositionalism",
  "slug": "presuppositionalism",
  "headwordEnglish": "Presuppositional Apologetics",
  "alternativeSpellings": [
    "Presuppositionalism",
    "Transcendental Apologetics"
  ],
  "pronunciationIpa": "/ˌpriː.sʌp.əˈzɪʃ.ən.əl.ɪ.zəm/",
  "partOfSpeech": "Noun",
  "category": "Apologetics",
  "theologicalPaths": [
    "apologetics",
    "philosophical-theology",
    "systematic-theology"
  ],
  "definitionSimple": "An approach to defending the Christian faith that argues the Triune God of the Bible is the necessary foundation for logic, truth, morality, and knowledge to make sense at all.",
  "definitionStudy": "A Reformed apologetic methodology developed by Cornelius Van Til asserting that all human reasoning begins with foundational presuppositions, and that only Christian theism provides the preconditions for intelligible thought.",
  "definitionAcademic": "A transcendental epistemological apologetic grounded in Reformed theology that challenges non-Christian worldviews at their axiomatic core, demonstrating that without the biblical God, rational coherence and science are impossible.",
  "biblicalUsage": "Scripture declares that the fear of the Lord is the beginning of knowledge (Prov 1:7; Col 2:3; 1 Pet 3:15).",
  "scriptureReferences": [
    "Proverbs 1:7",
    "Colossians 2:3",
    "Romans 1:18-22",
    "1 Corinthians 1:18-25",
    "1 Peter 3:15"
  ],
  "historicalDevelopment": "Pioneered by Cornelius Van Til at Westminster Seminary and popularized by Greg Bahnsen and John Frame.",
  "theologicalSignificance": "Upholds the total sovereignty of God in human epistemology, refusing to make fallen human reason the judge of Scripture.",
  "majorInterpretivePositions": {
    "issue": "Whether apologetics should argue from shared neutral ground (evidentialism) or challenge presuppositions directly.",
    "biblicalEvidence": "Paul at the Areopagus (Acts 17) and the noetic effects of sin (Rom 1).",
    "historicalBackground": "Van Til vs Clark vs traditional evidentialist debates.",
    "positions": [
      {
        "name": "Presuppositional / Transcendental",
        "description": "Rejects neutral ground; demonstrates the impossibility of the contrary.",
        "traditions": [
          "Reformed",
          "Presbyterian"
        ]
      },
      {
        "name": "Classical / Evidential Apologetics",
        "description": "Builds a cumulative case from natural theology, history, and miracles.",
        "traditions": [
          "Classical Christian",
          "Thomist"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Confessional Reformed",
      "positionSummary": "Embraces presuppositionalism as most consistent with Sola Scriptura and total depravity."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Greek",
      "scriptUnicode": "ἀπολογία",
      "lemma": "apologia",
      "transliteration": "apología",
      "pronunciation": "ah-poh-loh-GEE-ah",
      "partOfSpeech": "Noun, Feminine",
      "semanticRange": "Verbal defense, reasoned answer, legal vindication",
      "strongsNumber": "G627",
      "biblicalOccurrencesCount": 8,
      "importantOccurrences": [
        "1 Pet 3:15",
        "Phil 1:7"
      ],
      "translationCautions": "Never means saying sorry; it is a reasoned courtroom defense of truth.",
      "sources": [
        "Thayer's Greek-English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-presuppositionalism",
      "languageCode": "bn",
      "localHeadword": "পূর্বানুমানমূলক সত্যরক্ষা (Presuppositionalism)",
      "definitionSimple": "এই যুক্তি যে বাইবেলের ঈশ্বরই যুক্তি, জ্ঞান ও নৈতিকতার একমাত্র অর্থবহ ভিত্তি।",
      "definitionStudy": "রিফর্মড বিশ্বাসভিত্তিক এমন এক সত্যরক্ষা পদ্ধতি যা যুক্তি দেয় যে ঈশ্বরকে বাদ দিয়ে কোনো জ্ঞানই সম্ভব নয়।",
      "definitionAcademic": "দার্শনিক আত্মপক্ষ সমর্থনের একটি বিশিষ্ট রূপ যা মানব চিন্তার পূর্বশর্ত হিসেবে ঈশ্বরীয় সত্যকে দাবি করে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["westminster","logos_editorial"]
},

{
  "id": "entry-classical-apologetics",
  "slug": "classical-apologetics",
  "headwordEnglish": "Classical Apologetics",
  "alternativeSpellings": [
    "Two-Step Apologetics",
    "Traditional Apologetics"
  ],
  "pronunciationIpa": "/ˈklæs.ɪ.kəl əˌpɑːl.əˈdʒet.ɪks/",
  "partOfSpeech": "Noun",
  "category": "Apologetics",
  "theologicalPaths": [
    "apologetics",
    "philosophical-theology",
    "natural-theology"
  ],
  "definitionSimple": "A step-by-step defense of the Christian faith that first proves God exists through reason and evidence, and then proves Jesus is God through His resurrection.",
  "definitionStudy": "A traditional two-step apologetic method that establishes theism through philosophical arguments (cosmological, teleological, moral) before arguing for Christian theism via historical evidence.",
  "definitionAcademic": "A methodological framework proceeding from natural theology to historical evidential validation of special revelation, prominent in Justin Martyr, Thomas Aquinas, and C.S. Lewis.",
  "biblicalUsage": "Follows biblical patterns of reasoning with non-believers from nature before declaring the resurrection (Acts 17:22-31).",
  "scriptureReferences": [
    "Acts 17:22-31",
    "Romans 1:19-20",
    "1 Corinthians 15:3-8",
    "1 Peter 3:15"
  ],
  "historicalDevelopment": "Rooted in the early apologists, systematized in medieval scholasticism, and revitalized in the twentieth century.",
  "theologicalSignificance": "Engages human intellect constructively while showing the reasonable grounds of faith.",
  "majorInterpretivePositions": {
    "issue": "Whether fallen human reason can evaluate natural theology proofs objectively.",
    "biblicalEvidence": "Paul's engagement with Athenian philosophers in Acts 17.",
    "historicalBackground": "Classical evidentialism vs Dutch presuppositionalism.",
    "positions": [
      {
        "name": "Two-Step Classical Model",
        "description": "Establish theism first, then authenticate Christianity through historical evidence.",
        "traditions": [
          "Catholic",
          "Anglican",
          "Moderate Protestant"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Catholic & Anglican",
      "positionSummary": "Values the synthesis of faith and philosophical reason."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Greek",
      "scriptUnicode": "διαλέγομαι",
      "lemma": "dialegomai",
      "transliteration": "dialégomai",
      "pronunciation": "dee-ah-LEH-goh-my",
      "partOfSpeech": "Verb",
      "semanticRange": "To converse, reason, argue, discuss logically",
      "strongsNumber": "G1256",
      "biblicalOccurrencesCount": 13,
      "importantOccurrences": [
        "Acts 17:2",
        "Acts 17:17",
        "Acts 18:4"
      ],
      "translationCautions": "Describes Paul's regular habit of reasoned biblical persuasion in synagogues and marketplaces.",
      "sources": [
        "Thayer's Greek-English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-classical-apologetics",
      "languageCode": "bn",
      "localHeadword": "চিরায়ত সত্যরক্ষা (Classical Apologetics)",
      "definitionSimple": "প্রথমে ঈশ্বরের অস্তিত্ব এবং পরবর্তীতে যীশুর পুনরুত্থানের ঐতিহাসিক প্রমাণ তুলে ধরার যুক্তিপদ্ধতি।",
      "definitionStudy": "দার্শনিক ও ঐতিহাসিক যুক্তি-প্রমাণের মাধ্যমে খ্রীষ্টীয় বিশ্বাসের যৌক্তিকতা প্রতিপাদন করার চিরায়ত পদ্ধতি।",
      "definitionAcademic": "প্রাকৃতিক ধর্মতত্ত্ব ও ঐতিহাসিক প্রমাণের দ্বিমুখী সমন্বয় যা যুক্তিবাদী মহলে খ্রীষ্টধর্মকে গ্রহণযোগ্য করে তোলে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","logos_editorial"]
},

{
  "id": "entry-great-commission",
  "slug": "great-commission",
  "headwordEnglish": "Great Commission",
  "alternativeSpellings": [
    "The Apostolic Commission",
    "World Mission Mandate"
  ],
  "pronunciationIpa": "/ɡreɪt kəˈmɪʃ.ən/",
  "partOfSpeech": "Noun",
  "category": "Missiology",
  "theologicalPaths": [
    "missiology",
    "discipleship",
    "evangelism"
  ],
  "definitionSimple": "The supreme command given by the risen Jesus to His disciples to go into all the world, proclaim the gospel, make disciples, baptize, and teach all nations.",
  "definitionStudy": "The authoritative parting mandate of the risen Lord Jesus Christ (Matt 28:18-20) charging the church to proclaim redemption and disciple all ethnē under His sovereign universal authority.",
  "definitionAcademic": "The foundational missiological mandate grounding the missio Dei, establishing the church’s universal missionary obligation to make obedient disciples among all ethnolinguistic peoples.",
  "biblicalUsage": "Found in all four Gospels and Acts (Matt 28:18-20; Mark 16:15; Luke 24:46-49; John 20:21; Acts 1:8).",
  "scriptureReferences": [
    "Matthew 28:18-20",
    "Mark 16:15",
    "Luke 24:46-49",
    "John 20:21",
    "Acts 1:8"
  ],
  "historicalDevelopment": "Propelled the apostolic church across the Roman empire and ignited modern Protestant missions (William Carey, 1792).",
  "theologicalSignificance": "Defines the very purpose and primary missionary task of the church between the two comings of Christ.",
  "majorInterpretivePositions": {
    "issue": "The primary imperative of Matthew 28:19: whether it is 'going' or 'making disciples'.",
    "biblicalEvidence": "The main verb in Greek is matheteusate ('make disciples'), supported by participles.",
    "historicalBackground": "Carey's Enquiry (1792) overcoming hyper-Calvinistic apathy toward world missions.",
    "positions": [
      {
        "name": "Holistic World Disciple-Making",
        "description": "Making mature obedient disciples of all nations is the central mission of the church.",
        "traditions": [
          "Global Evangelical",
          "Protestant",
          "Baptist"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Evangelical & Missionary",
      "positionSummary": "Views the Great Commission as the supreme organizing purpose of church ministry."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Greek",
      "scriptUnicode": "μαθητεύω",
      "lemma": "matheteuo",
      "transliteration": "mathēteúō",
      "pronunciation": "mah-thay-TYOO-oh",
      "partOfSpeech": "Verb",
      "semanticRange": "To make a disciple, instruct as follower, train in pupilage",
      "strongsNumber": "G3100",
      "biblicalOccurrencesCount": 4,
      "importantOccurrences": [
        "Matt 28:19"
      ],
      "translationCautions": "The primary imperative of the Great Commission is making disciples, not mere superficial decisions.",
      "sources": [
        "Thayer's Greek-English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-great-commission",
      "languageCode": "bn",
      "localHeadword": "মহা আজ্ঞা (Great Commission)",
      "definitionSimple": "সমগ্র বিশ্বে সুসমাচার প্রচার, বাপ্তাইজ করা এবং শিষ্য তৈরি করার জন্য যীশু খ্রীষ্টের মহান আদেশ।",
      "definitionStudy": "পুনরুত্থিত যীশু কর্তৃক মণ্ডলীকে প্রদত্ত বিশ্বব্যাপী সুসমাচার প্রচার ও সকল জাতিকে তাঁর শিক্ষায় শিষ্য করার আদেশ।",
      "definitionAcademic": "প্রচারতত্ত্বের কেন্দ্রবিন্দু যা সমস্ত মানবজাতিকে খ্রীষ্টের সার্বভৌমত্বের অধীনে আনার দায়িত্ব অর্পণ করে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","logos_editorial"]
},

{
  "id": "entry-contextualization",
  "slug": "contextualization",
  "headwordEnglish": "Contextualization",
  "alternativeSpellings": [
    "Biblical Contextualization",
    "Incarnational Mission"
  ],
  "pronunciationIpa": "/kənˌtɛks.tʃu.ə.ləˈzeɪ.ʃən/",
  "partOfSpeech": "Noun",
  "category": "Missiology",
  "theologicalPaths": [
    "missiology",
    "hermeneutics",
    "bible-translation"
  ],
  "definitionSimple": "The thoughtful practice of communicating the unchanging gospel of Jesus in ways that make clear cultural sense to a specific group of people without changing the message.",
  "definitionStudy": "The missiological and hermeneutical discipline of faithfully presenting the biblical gospel within a particular culture’s language, idioms, and social thought forms without syncretism.",
  "definitionAcademic": "An incarnational missiological paradigm whereby transcultural biblical truths are faithfully translated and embodied within concrete socio-cultural contexts while maintaining fidelity to canon.",
  "biblicalUsage": "Exemplified in Paul becoming 'all things to all people' so that by all means he might save some (1 Cor 9:19-23; Acts 17).",
  "scriptureReferences": [
    "1 Corinthians 9:19-23",
    "Acts 17:22-31",
    "John 1:14",
    "Acts 15:1-29"
  ],
  "historicalDevelopment": "Formalized in mid-twentieth-century missiology to replace colonial cultural imposition with biblical indigenous movements.",
  "theologicalSignificance": "Preserves the universality of the gospel while honoring diverse human languages and cultures.",
  "majorInterpretivePositions": {
    "issue": "The boundary between authentic cultural contextualization and sinful syncretism.",
    "biblicalEvidence": "Jerusalem Council (Acts 15) freeing Gentiles from Jewish cultural customs.",
    "historicalBackground": "Western cultural imperialism vs extreme Insider Movements.",
    "positions": [
      {
        "name": "Critical Contextualization",
        "description": "Uses biblical criteria to evaluate, redeem, and purify cultural practices.",
        "traditions": [
          "Global Evangelical",
          "Reformed"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Global Christian",
      "positionSummary": "Essential for indigenous church planting in Indian, Asian, and African vernacular cultures."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Greek",
      "scriptUnicode": "γίνομαι",
      "lemma": "ginomai",
      "transliteration": "gínomai",
      "pronunciation": "GHEE-noh-my",
      "partOfSpeech": "Verb",
      "semanticRange": "To become, come into being, adapt in conduct",
      "strongsNumber": "G1096",
      "biblicalOccurrencesCount": 669,
      "importantOccurrences": [
        "1 Cor 9:22"
      ],
      "translationCautions": "Paul 'became all things' in cultural accommodation, never by compromising moral law.",
      "sources": [
        "Thayer's Greek-English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-contextualization",
      "languageCode": "bn",
      "localHeadword": "প্রেক্ষাপটনির্ভরতা / প্রাসঙ্গিকীকরণ (Contextualization)",
      "definitionSimple": "মূল সত্য অবিকৃত রেখে কোনো নির্দিষ্ট সংস্কৃতি ও ভাষার মানুষের কাছে সুসমাচারকে বোধগম্যভাবে উপস্থাপন করা।",
      "definitionStudy": "সুসমাচারের অলঙ্ঘনীয় সত্যকে স্থানীয় সামাজিক ও সাংস্কৃতিক পরিমণ্ডলে বিশ্বস্ততার সাথে যোগাযোগ করার পদ্ধতি।",
      "definitionAcademic": "প্রচারতত্ত্বের একটি বিজ্ঞান যা সুসমাচার প্রচারের সময় বহিরাগত অপসংস্কৃতি চাপিয়ে দেওয়া রোধ করে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","logos_editorial"]
},

{
  "id": "entry-expository-preaching",
  "slug": "expository-preaching",
  "headwordEnglish": "Expository Preaching",
  "alternativeSpellings": [
    "Expository Homiletics",
    "Text-Driven Preaching"
  ],
  "pronunciationIpa": "/ɪkˈspɑː.zəˌtɔːr.i ˈpriː.tʃɪŋ/",
  "partOfSpeech": "Noun",
  "category": "Homiletics",
  "theologicalPaths": [
    "homiletics",
    "hermeneutics",
    "pastoral-theology"
  ],
  "definitionSimple": "A biblical method of preaching where the message and meaning of a specific passage of Scripture become the message and structure of the sermon.",
  "definitionStudy": "The homiletical method wherein the preacher faithfully explains the original historical, grammatical, and theological meaning of a biblical passage and applies it directly to the congregation.",
  "definitionAcademic": "A proclamation model where the theological substance, rhetorical trajectory, and pastoral intent of a canonical pericopē govern the sermon's thesis, points, and contemporary application.",
  "biblicalUsage": "Seen in Ezra and the Levites reading from the law and giving the sense so the people understood (Neh 8:8; 2 Tim 4:2).",
  "scriptureReferences": [
    "Nehemiah 8:8",
    "Luke 24:27",
    "Acts 20:27",
    "2 Timothy 4:1-2"
  ],
  "historicalDevelopment": "Practiced by John Chrysostom, Calvin, the Puritans, and modern exponents like Martyn Lloyd-Jones and John Stott.",
  "theologicalSignificance": "Ensures the preacher speaks with divine authority derived from God’s Word rather than human opinions.",
  "majorInterpretivePositions": {
    "issue": "Sequential verse-by-verse exposition versus topical biblical preaching.",
    "biblicalEvidence": "Preaching the whole counsel of God (Acts 20:27).",
    "historicalBackground": "Puritan expository heritage vs modern topical entertainment sermon trends.",
    "positions": [
      {
        "name": "Verse-by-Verse Exposition",
        "description": "Preaching consecutively through entire books of Scripture is the healthiest pastoral diet.",
        "traditions": [
          "Reformed",
          "Presbyterian",
          "Expository Evangelical"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Reformed & Puritan",
      "positionSummary": "Regards expository preaching as the central act of public corporate worship."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Hebrew",
      "scriptUnicode": "פָּרַשׁ",
      "lemma": "parash",
      "transliteration": "pārash",
      "pronunciation": "pah-RASH",
      "partOfSpeech": "Verb",
      "semanticRange": "To make distinct, declare plainly, explain, specify",
      "strongsNumber": "H6567",
      "biblicalOccurrencesCount": 5,
      "importantOccurrences": [
        "Neh 8:8"
      ],
      "translationCautions": "Describes explaining the sense of Scripture clearly so all understand.",
      "sources": [
        "Brown-Driver-Briggs Hebrew and English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-expository-preaching",
      "languageCode": "bn",
      "localHeadword": "শাস্ত্রব্যাখ্যামূলক প্রচার (Expository Preaching)",
      "definitionSimple": "বাইবেলের একটি নির্দিষ্ট অংশের মূল অর্থ ও প্রেক্ষাপট ব্যাখ্যা করে তা জীবনে প্রয়োগ করার প্রচারপদ্ধতি।",
      "definitionStudy": "যে প্রচারশৈলীতে ধর্মোপদেশের মূল সুর ও সিদ্ধান্ত সম্পূর্ণরূপে শাস্ত্রীয় পাঠ্যাংশের অন্তর্নিহিত অর্থ দ্বারা নিয়ন্ত্রিত হয়।",
      "definitionAcademic": "প্রচারধর্মতত্ত্বের প্রধান ধারা যা শাস্ত্রাংশের ঐতিহাসিক ও ব্যাকরণগত ব্যাখ্যাকে উপাসনার কেন্দ্রবিন্দুতে স্থাপন করে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.bdb, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["bdb","westminster","logos_editorial"]
},

{
  "id": "entry-kerygma",
  "slug": "kerygma",
  "headwordEnglish": "Kerygma",
  "alternativeSpellings": [
    "Apostolic Kerygma",
    "Gospel Proclamation"
  ],
  "pronunciationIpa": "/kəˈrɪɡ.mə/",
  "partOfSpeech": "Noun",
  "category": "Homiletics",
  "theologicalPaths": [
    "homiletics",
    "biblical-greek",
    "evangelism"
  ],
  "definitionSimple": "The core, central message of the apostolic gospel announcing that Jesus is the crucified and risen Lord and Savior of the world.",
  "definitionStudy": "The essential apostolic proclamation of the good news concerning the death, burial, bodily resurrection, and exalted lordship of Jesus Christ demanding repentance and faith.",
  "definitionAcademic": "The foundational New Testament proclamation (kērygma) distinct from ethical instruction (didachē), announcing God's eschatological intervention in Jesus Christ.",
  "biblicalUsage": "Used throughout the Epistles for the divinely appointed content of preaching (Rom 16:25; 1 Cor 1:21; 2 Tim 4:17).",
  "scriptureReferences": [
    "Romans 16:25",
    "1 Corinthians 1:21",
    "1 Corinthians 15:1-4",
    "2 Timothy 4:17"
  ],
  "historicalDevelopment": "Highlighted in modern biblical theology by C.H. Dodd as the common apostolic core across the New Testament.",
  "theologicalSignificance": "Guarantees that Christian preaching centers on the historical saving acts of Christ rather than moralism.",
  "majorInterpretivePositions": {
    "issue": "The distinction between kerygma (proclamation to unconverted) and didache (teaching believers).",
    "biblicalEvidence": "Apostolic sermons in Acts vs pastoral instruction in the Epistles.",
    "historicalBackground": "C.H. Dodd's recovery of apostolic preaching vs Bultmannian demythologization.",
    "positions": [
      {
        "name": "Historical Saving Truth",
        "description": "The kerygma is rooted in literal, historical events of Christ's life and resurrection.",
        "traditions": [
          "Orthodox",
          "Protestant",
          "Evangelical"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Christian Homiletics",
      "positionSummary": "Affirms that all true Christian preaching must be anchored in the apostolic kerygma."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Greek",
      "scriptUnicode": "κήρυγμα",
      "lemma": "kerygma",
      "transliteration": "kḗrygma",
      "pronunciation": "KAY-roog-mah",
      "partOfSpeech": "Noun, Neuter",
      "semanticRange": "Proclamation, herald's announcement, gospel message",
      "strongsNumber": "G2782",
      "biblicalOccurrencesCount": 8,
      "importantOccurrences": [
        "1 Cor 1:21",
        "Rom 16:25"
      ],
      "translationCautions": "Signifies the official proclamation of a herald representing the King.",
      "sources": [
        "Thayer's Greek-English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-kerygma",
      "languageCode": "bn",
      "localHeadword": "প্রেরিতীয় ঘোষণা (Kerygma)",
      "definitionSimple": "যীশু খ্রীষ্টের ক্রুশারোপণ ও পুনরুত্থানের মূল সুসমাচার যা পরিত্রাণের জন্য ঘোষণা করা হয়।",
      "definitionStudy": "নূতন নিয়মের আদি প্রচারের মূল নির্যাস যা যীশুর প্রভুত্ব ও উদ্ধারের ঐতিহাসিক সত্য ঘোষণা করে।",
      "definitionAcademic": "প্রচারবিজ্ঞানের মৌলিক প্রত্যয় যা নৈতিক শিক্ষার পূর্বে যীশুর উদ্ধারকারী কার্যের মৌলিক ঘোষণাকে প্রতিষ্ঠা করে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","logos_editorial"]
},

{
  "id": "entry-tanakh",
  "slug": "tanakh",
  "headwordEnglish": "Tanakh (Hebrew Bible)",
  "alternativeSpellings": [
    "Tanak",
    "Hebrew Scriptures",
    "Mikra"
  ],
  "pronunciationIpa": "/tɑːˈnɑːx/",
  "partOfSpeech": "Noun",
  "category": "Old Testament Studies",
  "theologicalPaths": [
    "old-testament-studies",
    "biblical-hebrew",
    "canon"
  ],
  "definitionSimple": "The Hebrew name for the complete Old Testament Scriptures, composed of the Torah (Law), Nevi'im (Prophets), and Ketuvim (Writings).",
  "definitionStudy": "The tripartite canon of the Hebrew Scriptures comprising 24 books (equivalent to the 39 books of the Protestant Old Testament), accepted by Jesus and His apostles as the inspired Word of God.",
  "definitionAcademic": "An acronym (T-N-K) designating the Jewish canonical divisions: Torah (Pentateuch), Nevi'im (Prophets), and Ketuvim (Hagiographa), reflecting the final Masoretic textual arrangement of the Old Covenant canon.",
  "biblicalUsage": "Jesus specifically refers to this threefold division in Luke 24:44 ('the Law of Moses, the Prophets, and the Psalms').",
  "scriptureReferences": [
    "Luke 24:44",
    "Matthew 5:17",
    "Luke 11:51",
    "Romans 3:2"
  ],
  "historicalDevelopment": "Recognized in Jewish tradition by the Second Temple period and preserved meticulously by the Masoretes.",
  "theologicalSignificance": "Forms the inspired foundation, historical preparation, and prophetic promise fulfilled in Christ Jesus.",
  "majorInterpretivePositions": {
    "issue": "The canonical boundaries of the Old Testament and the status of the Apocrypha.",
    "biblicalEvidence": "New Testament quotes from the Hebrew canon without citing Apocrypha as Scripture.",
    "historicalBackground": "Protestant adoption of the 39-book Hebrew canon vs Roman Catholic Trent inclusion of deuterocanonical books.",
    "positions": [
      {
        "name": "Hebrew Canon Sufficiency",
        "description": "The 39 books of the Hebrew Tanakh constitute the only inspired Old Testament canon.",
        "traditions": [
          "Protestant",
          "Reformed",
          "Evangelical"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Protestant",
      "positionSummary": "Strictly aligns its Old Testament canon with the 24 books of the Hebrew Tanakh."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Hebrew",
      "scriptUnicode": "תַּנַ״ךְ",
      "lemma": "tanakh",
      "transliteration": "Tanakh",
      "pronunciation": "tah-NAHKH",
      "partOfSpeech": "Proper Noun / Acronym",
      "semanticRange": "Torah, Nevi'im, Ketuvim (The Hebrew Scriptures)",
      "importantOccurrences": [
        "Luke 24:44"
      ],
      "translationCautions": "An acronym representing the entire Hebrew Bible accepted by Jesus.",
      "sources": [
        "Brown-Driver-Briggs Hebrew and English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-tanakh",
      "languageCode": "bn",
      "localHeadword": "তানাক / ইব্রীয় শাস্ত্র (Tanakh)",
      "definitionSimple": "পুরাতন নিয়মের সম্পূর্ণ ইব্রীয় ধর্মশাস্ত্র, যা তৌরাত (ব্যবস্থা), নবীগণ ও রচনাবলী নিয়ে গঠিত।",
      "definitionStudy": "ইব্রীয় বাইবেলের ত্রিপাক্ষিক সংকলন যা প্রভু যীশু স্বয়ং ঐশ্বরিক বাক্য হিসেবে সত্যায়িত করেছেন।",
      "definitionAcademic": "পুরাতন নিয়ম গবেষণার মূল ভিত্তি যা মাসোরেটিক ঐতিহ্যবাহী ২৪টি কিতাবের সংকলনকে নির্দেশ করে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.bdb, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["bdb","westminster","logos_editorial"]
},

{
  "id": "entry-messianic-prophecy",
  "slug": "messianic-prophecy",
  "headwordEnglish": "Messianic Prophecy",
  "alternativeSpellings": [
    "Prophecies of the Messiah",
    "Christological Foreshadowing"
  ],
  "pronunciationIpa": "/ˌmes.iˈæn.ɪk ˈprɑː.fə.si/",
  "partOfSpeech": "Noun",
  "category": "Old Testament Studies",
  "theologicalPaths": [
    "old-testament-studies",
    "christology",
    "biblical-theology"
  ],
  "definitionSimple": "God's promises, types, and predictions throughout the Old Testament that foretold the birth, suffering, death, resurrection, and kingdom of Jesus the Messiah.",
  "definitionStudy": "The divine revelatory strand of Old Testament types, explicit promises, and royal psalms that prefigured the person, offices (prophet, priest, king), and redemptive work of Jesus Christ.",
  "definitionAcademic": "The teleological trajectory of Old Covenant special revelation predicting the eschatological Davidic King and Suffering Servant (ebed Yahweh), fulfilled typologically and historically in Jesus of Nazareth.",
  "biblicalUsage": "Jesus explained that all things written about Him in the Law, Prophets, and Psalms must be fulfilled (Luke 24:27, 44; Isa 53; Ps 22).",
  "scriptureReferences": [
    "Genesis 3:15",
    "Psalm 22:1-18",
    "Isaiah 7:14",
    "Isaiah 53:1-12",
    "Micah 5:2",
    "Luke 24:27"
  ],
  "historicalDevelopment": "Progressed from Genesis 3:15 (protoevangelium) through Davidic covenant (2 Sam 7) and Isaiah's servant songs to the incarnation.",
  "theologicalSignificance": "Demonstrates the supernatural unity of the Bible and validates Jesus as the one true promised Redeemer.",
  "majorInterpretivePositions": {
    "issue": "Direct messianic prediction versus typological fulfillment.",
    "biblicalEvidence": "Passages cited in New Testament (Matt 1:22-23; Acts 2:25-31).",
    "historicalBackground": "Jewish-Christian apologetics and historical-grammatical exegesis.",
    "positions": [
      {
        "name": "Harmonized Typological-Direct",
        "description": "Old Testament contains both direct predictive promises and historical types fulfilled in Christ.",
        "traditions": [
          "Historic Christian",
          "Evangelical",
          "Reformed"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Ecumenical Christian",
      "positionSummary": "Confesses that Jesus of Nazareth is the literal and complete fulfillment of Old Testament messianic hope."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Hebrew",
      "scriptUnicode": "מָשִׁיחַ",
      "lemma": "mashiach",
      "transliteration": "māshîach",
      "pronunciation": "mah-SHEE-akh",
      "partOfSpeech": "Noun, Masculine",
      "semanticRange": "Anointed one, consecrated king, priest, Messiah",
      "strongsNumber": "H4899",
      "biblicalOccurrencesCount": 39,
      "importantOccurrences": [
        "Ps 2:2",
        "Dan 9:25-26"
      ],
      "translationCautions": "Refers ultimately to the eschatological Davidic deliverer.",
      "sources": [
        "Brown-Driver-Briggs Hebrew and English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-messianic-prophecy",
      "languageCode": "bn",
      "localHeadword": "মশীহ-সংক্রান্ত ভাববাণী (Messianic Prophecy)",
      "definitionSimple": "পুরাতন নিয়মে বর্ণিত সেই সকল ঐশ্বরিক প্রতিশ্রুতি ও ভবিষ্যদ্বাণী যা যীশু খ্রীষ্টে পরিপূর্ণ হয়েছে।",
      "definitionStudy": "পুরাতন নিয়মে প্রতিশ্রুত মশীহের জন্ম, ক্রুশের বলিদান, পুনরুত্থান ও সার্বভৌম রাজত্ব সংক্রান্ত ভাববাণী।",
      "definitionAcademic": "বাইবেলীয় ধর্মতত্ত্বের একটি কেন্দ্রীয় শাখা যা উদ্ধার ইতিহাসের অবিচ্ছেদ্য ধারাবাহিকতা প্রতিপাদন করে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.bdb, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["bdb","westminster","logos_editorial"]
},

{
  "id": "entry-apostolic-fathers",
  "slug": "apostolic-fathers",
  "headwordEnglish": "Apostolic Fathers",
  "alternativeSpellings": [
    "Sub-Apostolic Fathers",
    "Early Christian Writings"
  ],
  "pronunciationIpa": "/ˌæp.əˈstɑːl.ɪk ˈfɑː.ðɚz/",
  "partOfSpeech": "Noun",
  "category": "New Testament Studies",
  "theologicalPaths": [
    "new-testament-studies",
    "church-history",
    "historical-theology"
  ],
  "definitionSimple": "The earliest Christian authors who lived immediately after the apostles (such as Clement of Rome, Ignatius, and Polycarp) and wrote letters to encourage the early church.",
  "definitionStudy": "A collection of Greek Christian writings produced between c. AD 90 and 150 by disciples or immediate successors of the apostles, providing critical evidence of early church doctrine, order, and canon recognition.",
  "definitionAcademic": "The sub-apostolic corpus (e.g., 1 Clement, Ignatius’s Epistles, Didache, Shepherd of Hermas, Polycarp to Philippians) reflecting the transitional period between canonical New Testament revelation and early apologetic theology.",
  "biblicalUsage": "Bridges the close of the New Testament canon with early post-apostolic witness (2 Tim 2:2; Titus 1:5).",
  "scriptureReferences": [
    "2 Timothy 2:2",
    "Philippians 4:3",
    "Titus 1:5",
    "Hebrews 13:7"
  ],
  "historicalDevelopment": "Collected and preserved as non-canonical but highly venerable early pastoral documents.",
  "theologicalSignificance": "Demonstrates the rapid spread of trinitarian worship, christological devotion, and church order in the generation after the apostles.",
  "majorInterpretivePositions": {
    "issue": "The authority of the Apostolic Fathers relative to canonical Scripture.",
    "biblicalEvidence": "Distinct recognition of unique apostolic inspiration (2 Pet 3:15-16).",
    "historicalBackground": "Reformation distinction between inspired canon and historical sub-apostolic testimony.",
    "positions": [
      {
        "name": "Historical Witness (Protestant)",
        "description": "Invaluable historical witnesses to early faith, but not inspired Scripture.",
        "traditions": [
          "Protestant",
          "Reformed",
          "Evangelical"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Ecumenical Church",
      "positionSummary": "Reveres the Apostolic Fathers as foundational witnesses to post-apostolic orthodoxy."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Greek",
      "scriptUnicode": "ἀπόστολος",
      "lemma": "apostolos",
      "transliteration": "apóstolos",
      "pronunciation": "ah-POSS-toh-los",
      "partOfSpeech": "Noun, Masculine",
      "semanticRange": "Delegate, envoy, messenger, apostle of Christ",
      "strongsNumber": "G652",
      "biblicalOccurrencesCount": 80,
      "importantOccurrences": [
        "Gal 1:1",
        "Eph 2:20"
      ],
      "translationCautions": "Distinguish between the primary Twelve/Paul and secondary apostolic messengers.",
      "sources": [
        "Thayer's Greek-English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-apostolic-fathers",
      "languageCode": "bn",
      "localHeadword": "প্রেরিতীয় মণ্ডলী পিতা (Apostolic Fathers)",
      "definitionSimple": "যীশুর প্রেরিতদের প্রত্যক্ষ শিষ্য ও আদি খ্রীষ্টীয় লেখকবৃন্দ যারা প্রথম ও দ্বিতীয় শতাব্দীতে মণ্ডলীকে সত্যে পরিচালিত করেছিলেন।",
      "definitionStudy": "ক্লেমেন্ট, ইগ্নেশিয়াস ও পলিকার্পের ন্যায় আদি বিশপদের রচনাবলী যা প্রেরিতোত্তর যুগের বিশ্বাস ও আত্মিক জীবনকে তুলে ধরে।",
      "definitionAcademic": "নূতন নিয়ম গবেষণার একটি ঐতিহাসিক পাঠ যা প্রেরিতীয় যুগ থেকে পরবর্তী সার্বজনীন মহাসভার মধ্যবর্তী সেতুবন্ধন।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","logos_editorial"]
},

{
  "id": "entry-pauline-corpus",
  "slug": "pauline-corpus",
  "headwordEnglish": "Pauline Corpus",
  "alternativeSpellings": [
    "Pauline Epistles",
    "Corpus Paulinum"
  ],
  "pronunciationIpa": "/ˈpɔː.laɪn ˈkɔːr.pəs/",
  "partOfSpeech": "Noun",
  "category": "New Testament Studies",
  "theologicalPaths": [
    "new-testament-studies",
    "canon",
    "biblical-theology"
  ],
  "definitionSimple": "The collection of thirteen New Testament letters written by the Apostle Paul to churches and leaders under the inspiration of the Holy Spirit.",
  "definitionStudy": "The canonical collection of thirteen epistles (Romans to Philemon) authored by Paul the Apostle, formulating core New Testament doctrines of justification by faith, the church, and Christian living.",
  "definitionAcademic": "The early epistolary corpus of New Testament canon (Corpus Paulinum) recognized as Scripture by the early church (2 Pet 3:15-16), providing the foundational theological framework for Pauline soteriology and ecclesiology.",
  "biblicalUsage": "Peter explicitely equates Paul's letters with 'the other Scriptures' (2 Pet 3:15-16).",
  "scriptureReferences": [
    "Romans 1:1",
    "2 Peter 3:15-16",
    "Galatians 1:11-12",
    "1 Thessalonians 2:13"
  ],
  "historicalDevelopment": "Circulated and collected by churches early in the second century, confirmed universally across ancient canonical lists.",
  "theologicalSignificance": "Forms the systematic theological backbone of the New Testament gospel message.",
  "majorInterpretivePositions": {
    "issue": "Authorship debates in modern critical scholarship concerning pastoral and disputed epistles.",
    "biblicalEvidence": "Uniform self-attribution of Paul in all 13 epistles.",
    "historicalBackground": "Ancient church unanimity vs 19th-century German higher criticism.",
    "positions": [
      {
        "name": "Traditional Pauline Authenticity",
        "description": "All thirteen epistles are authentically Pauline and fully inspired Scripture.",
        "traditions": [
          "Evangelical",
          "Confessional Protestant",
          "Catholic",
          "Orthodox"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Protestant",
      "positionSummary": "Regards Paul's epistles (especially Romans and Galatians) as the definitive key to understanding justification."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Greek",
      "scriptUnicode": "ἐπιστολή",
      "lemma": "epistole",
      "transliteration": "epistolḗ",
      "pronunciation": "eh-pee-stoh-LAY",
      "partOfSpeech": "Noun, Feminine",
      "semanticRange": "Letter, official epistle, written communication",
      "strongsNumber": "G1992",
      "biblicalOccurrencesCount": 24,
      "importantOccurrences": [
        "2 Pet 3:16",
        "Col 4:16"
      ],
      "translationCautions": "In apostolic usage, authoritative apostolic teaching sent in letter form.",
      "sources": [
        "Thayer's Greek-English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-pauline-corpus",
      "languageCode": "bn",
      "localHeadword": "পৌলীয় পত্রাবলী (Pauline Corpus)",
      "definitionSimple": "প্রেরিত পৌল কর্তৃক পবিত্র আত্মার অনুপ্রেরণায় লিখিত নূতন নিয়মের ১৩টি মৌলিক পত্রের সংকলন।",
      "definitionStudy": "রোমীয় থেকে ফিলিমন পর্যন্ত পৌলীয় পত্রসংকলন যা খ্রীষ্টীয় বিশ্বাস, অনুগ্রহের মাধ্যমে ধার্মিকতা ও মণ্ডলী কাঠামোর ভিত্তি গড়ে তোলে।",
      "definitionAcademic": "নূতন নিয়ম শাস্ত্রবিজ্ঞানের একটি প্রধান বিভাগ যা পৌলের প্রেরিতীয় ধর্মতত্ত্বকে বিধিবদ্ধ করে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","westminster","logos_editorial"]
},

{
  "id": "entry-koine-greek",
  "slug": "koine-greek",
  "headwordEnglish": "Koine Greek",
  "alternativeSpellings": [
    "Biblical Greek",
    "Hellenistic Greek",
    "New Testament Greek"
  ],
  "pronunciationIpa": "/kɔɪˈneɪ ɡriːk/",
  "partOfSpeech": "Noun",
  "category": "Biblical Greek",
  "theologicalPaths": [
    "biblical-greek",
    "new-testament-studies",
    "bible-translation"
  ],
  "definitionSimple": "The common international Greek language spoken throughout the Roman Empire in which the entire New Testament was originally written.",
  "definitionStudy": "The shared (koinē) Hellenistic dialect of Greek spoken and written across the Mediterranean from c. 300 BC to AD 300, divinely prepared for the universal transmission of the New Testament gospel.",
  "definitionAcademic": "The post-classical Hellenistic dialect characterizing the Septuagint and New Testament, combining Attic grammatical simplification with Semitic idiom and expanded lexical nuance.",
  "biblicalUsage": "The providential lingua franca through which the gospel was proclaimed to Gentiles and Jews alike (Acts 21:37; John 19:20).",
  "scriptureReferences": [
    "John 19:20",
    "Acts 21:37",
    "Romans 1:16",
    "Colossians 4:16"
  ],
  "historicalDevelopment": "Spread by Alexander the Great, adopted across the Roman empire, and superseded in the Middle Ages by Byzantine Greek.",
  "theologicalSignificance": "Reflects the providence of God in preparing a precise, widely understood language for world evangelism.",
  "majorInterpretivePositions": {
    "issue": "Whether New Testament Greek was a special 'Holy Ghost language' or the common everyday vernacular.",
    "biblicalEvidence": "Everyday papyri discoveries matching New Testament syntax.",
    "historicalBackground": "Deissmann's twentieth-century papyrological revolution.",
    "positions": [
      {
        "name": "Common Vernacular Providential View",
        "description": "Koine was the real, living language of the common people, chosen in divine grace for clarity.",
        "traditions": [
          "Academic Biblical Scholarship",
          "Evangelical"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Ecumenical Biblical Scholarship",
      "positionSummary": "Requires seminary study of Koine Greek for faithful New Testament exegesis."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Greek",
      "scriptUnicode": "κοινός",
      "lemma": "koinos",
      "transliteration": "koinós",
      "pronunciation": "koy-NOSS",
      "partOfSpeech": "Adjective",
      "semanticRange": "Common, shared by all, ordinary, public",
      "strongsNumber": "G2839",
      "biblicalOccurrencesCount": 14,
      "importantOccurrences": [
        "Acts 2:44",
        "Titus 1:4"
      ],
      "translationCautions": "In linguistic terms, signifies universal and accessible to all peoples.",
      "sources": [
        "Thayer's Greek-English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-koine-greek",
      "languageCode": "bn",
      "localHeadword": "কইনে গ্রিক (Koine Greek)",
      "definitionSimple": "প্রাচীন রোম সাম্রাজ্যের সাধারণ মানুষের মুখের গ্রিক ভাষা, যাতে সমগ্র নূতন নিয়ম প্রথম লিখিত হয়েছিল।",
      "definitionStudy": "হেলেনিস্টিক যুগের সার্বজনীন গ্রিক উপভাষা যা ঈশ্বর ঐশ্বরিক পরিকল্পনামাফিক সুসমাচার বিস্তারের মাধ্যম হিসেবে বেছে নিয়েছিলেন।",
      "definitionAcademic": "বাইবেলীয় গ্রিক ভাষাতত্ত্বের ভিত্তি যা নূতন নিয়মের মূল পাণ্ডুলিপিসমূহের ব্যাকরণ ও শব্দার্থবিদ্যা নিরূপণ করে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","logos_editorial"]
},

{
  "id": "entry-logos",
  "slug": "logos",
  "headwordEnglish": "Logos",
  "alternativeSpellings": [
    "The Word",
    "Divine Logos"
  ],
  "pronunciationIpa": "/ˈloʊ.ɡɒs/",
  "partOfSpeech": "Noun",
  "category": "Biblical Greek",
  "theologicalPaths": [
    "biblical-greek",
    "christology",
    "systematic-theology"
  ],
  "definitionSimple": "The divine title of Jesus Christ as the eternal 'Word' who was with God, was truly God, and became human to save us.",
  "definitionStudy": "The profound Johannine title for the pre-existent second Person of the Trinity (John 1:1-14), designating Christ as the personal, uncreated divine self-revelation, creator, and redeemer of the world.",
  "definitionAcademic": "A premier christological title synthesizing Old Testament creative Word (Dabar Yahweh), Wisdom (Hokhmah), and Hellenistic rational order, personalized in the eternal, incarnate Son of God.",
  "biblicalUsage": "Found supremely in the prologue of John's Gospel and 1 John (John 1:1, 14; 1 John 1:1; Rev 19:13).",
  "scriptureReferences": [
    "John 1:1-3",
    "John 1:14",
    "1 John 1:1",
    "Revelation 19:13"
  ],
  "historicalDevelopment": "Used by the early apologists (Justin Martyr) and church fathers to defend Christ's eternal divinity and role in creation against Gnosticism.",
  "theologicalSignificance": "Establishes that Jesus is not a created messenger, but the eternal divine Word Himself.",
  "majorInterpretivePositions": {
    "issue": "The relationship of the Logos to Greek philosophy vs Old Testament revelation.",
    "biblicalEvidence": "John 1:1 echoing Genesis 1:1 ('In the beginning').",
    "historicalBackground": "Philonic allegory vs Johannine historical incarnation.",
    "positions": [
      {
        "name": "Biblical Personal Incarnation",
        "description": "John's Logos is fundamentally rooted in Hebrew revelation of God's Word made flesh.",
        "traditions": [
          "Ecumenical Orthodoxy",
          "Reformed",
          "Evangelical"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Ecumenical Christian",
      "positionSummary": "Affirms that the Logos is consubstantial with the Father from all eternity."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Greek",
      "scriptUnicode": "λόγος",
      "lemma": "logos",
      "transliteration": "lógos",
      "pronunciation": "LOH-goss",
      "partOfSpeech": "Noun, Masculine",
      "semanticRange": "Word, speech, divine reason, divine self-expression, Jesus Christ",
      "strongsNumber": "G3056",
      "biblicalOccurrencesCount": 330,
      "importantOccurrences": [
        "John 1:1",
        "John 1:14",
        "Rev 19:13"
      ],
      "translationCautions": "In John 1:1 designates the eternal divine Person, not mere spoken sound.",
      "sources": [
        "Thayer's Greek-English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-logos",
      "languageCode": "bn",
      "localHeadword": "লোগস / বাক্য (Logos)",
      "definitionSimple": "যীশু খ্রীষ্টের ঐশ্বরিক উপাধি, যিনি অনাদিকাল থেকে ঈশ্বরের সাথে ছিলেন এবং স্বয়ং ঈশ্বর।",
      "definitionStudy": "যোহন লিখিত সুসমাচারের প্রথম অধ্যায়ে প্রকাশিত যীশুর অনন্ত স্বরূপ, যিনি পরমপিতার প্রত্যক্ষ আত্মপ্রকাশ ও অবতার।",
      "definitionAcademic": "খ্রীষ্টতত্ত্বের পরম ভিত্তি যা পুত্র ঈশ্বরের আদিহীন ঐশ্বরিক সত্তা ও মানবদেহে অবতরণের রহস্য ব্যক্ত করে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.nicene_creed, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","nicene_creed","logos_editorial"]
},

{
  "id": "entry-yahweh",
  "slug": "yahweh",
  "headwordEnglish": "Yahweh (Tetragrammaton)",
  "alternativeSpellings": [
    "YHWH",
    "The LORD",
    "Jehovah"
  ],
  "pronunciationIpa": "/ˈjɑː.weɪ/",
  "partOfSpeech": "Proper Noun",
  "category": "Biblical Hebrew",
  "theologicalPaths": [
    "biblical-hebrew",
    "theology-proper",
    "old-testament-studies"
  ],
  "definitionSimple": "The personal, holy, covenant name of the one true God revealed to Moses in the burning bush, meaning 'I AM WHO I AM'.",
  "definitionStudy": "The sacred, ineffable four-letter name (Tetragrammaton: Y-H-W-H) of the covenant God of Israel (Exod 3:14-15), signifying His self-existent, eternal, immutable, and faithful character.",
  "definitionAcademic": "The personal covenantal proper name of the God of Israel derived from the verbal root hāwāh ('to be'). Translated in the Septuagint as Kyrios and in English Bibles as 'the LORD' in small capitals.",
  "biblicalUsage": "Appears approximately 6,828 times in the Old Testament, designating God's faithful redemptive presence with His people.",
  "scriptureReferences": [
    "Exodus 3:14-15",
    "Exodus 6:2-3",
    "Exodus 34:6-7",
    "Psalm 23:1",
    "Isaiah 42:8"
  ],
  "historicalDevelopment": "Held in extreme reverence by post-exilic Judaism, leading to the vocalization of Adonai ('Lord') to avoid profaning the holy name.",
  "theologicalSignificance": "Undergirds the aseity, covenant faithfulness, and supreme majesty of God.",
  "majorInterpretivePositions": {
    "issue": "The pronunciation and vocalization of YHWH in Christian reading.",
    "biblicalEvidence": "Exodus 3:14 ('Ehyeh asher Ehyeh').",
    "historicalBackground": "The medieval hybrid form 'Jehovah' vs scholarly reconstruction 'Yahweh'.",
    "positions": [
      {
        "name": "Covenant Proper Name",
        "description": "Yahweh is God's unique self-revealed personal name signifying eternal faithfulness.",
        "traditions": [
          "Ecumenical Biblical Scholarship"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Confessional Christian",
      "positionSummary": "Recognizes Jesus Christ as bearing the full divine name and glory of Yahweh (Phil 2:9-11)."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Hebrew",
      "scriptUnicode": "יהוה",
      "lemma": "YHWH",
      "transliteration": "Yahweh",
      "pronunciation": "yah-WEH",
      "partOfSpeech": "Proper Noun",
      "semanticRange": "The Self-Existent One, He Who Is, The Eternal Covenant God",
      "strongsNumber": "H3068",
      "biblicalOccurrencesCount": 6828,
      "importantOccurrences": [
        "Exod 3:15",
        "Exod 34:6"
      ],
      "translationCautions": "Rendered in traditional English Bibles as 'the LORD' in capital letters.",
      "sources": [
        "Brown-Driver-Briggs Hebrew and English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-yahweh",
      "languageCode": "bn",
      "localHeadword": "ইয়াহওয়েহ্ / সদাপ্রভু (Yahweh)",
      "definitionSimple": "ইস্রায়েলের একমাত্র সত্য ঈশ্বরের পবিত্র ব্যক্তিগত নাম, যার অর্থ 'আমি যিনি আমি।'",
      "definitionStudy": "পবিত্র শাস্ত্রে প্রায় ৬,৮২৮ বার ব্যবহৃত ঈশ্বরের চুক্তিবদ্ধ ব্যক্তিগত নাম, যা তাঁর স্বয়ম্ভূ ও অনন্ত বিশ্বস্ততাকে প্রকাশ করে।",
      "definitionAcademic": "ইব্রীয় ধর্মতত্ত্বের কেন্দ্রীয় নাম যা মোশির কাছে জ্বলন্ত ঝোপে প্রকাশিত হয়েছিল এবং ঈশ্বরের অপরিবর্তনীয় অস্তিত্ব প্রমাণ করে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.bdb, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["bdb","westminster","logos_editorial"]
},

{
  "id": "entry-chesed",
  "slug": "chesed",
  "headwordEnglish": "Chesed (Covenant Love)",
  "alternativeSpellings": [
    "Hesed",
    "Lovingkindness",
    "Steadfast Love"
  ],
  "pronunciationIpa": "/ˈxɛ.sɛd/",
  "partOfSpeech": "Noun",
  "category": "Biblical Hebrew",
  "theologicalPaths": [
    "biblical-hebrew",
    "theology-proper",
    "covenant"
  ],
  "definitionSimple": "God's unwavering, faithful, and merciful love that never gives up on His people because of His binding covenant promise.",
  "definitionStudy": "The rich Old Testament Hebrew term for God's steadfast, covenant-keeping lovingkindness, combining profound loyal love with enduring mercy and forgiveness (Exod 34:6-7).",
  "definitionAcademic": "A premier covenantal theological locus in the Hebrew Bible denoting loyal benevolence, steadfast grace, and unfailing commitment rooted in divine pactum rather than human merit.",
  "biblicalUsage": "Central to Israel's praise, repeated in Psalm 136 twenty-six times ('His steadfast love endures forever').",
  "scriptureReferences": [
    "Exodus 34:6-7",
    "Psalm 136:1-26",
    "Lamentations 3:22-23",
    "Hosea 6:6"
  ],
  "historicalDevelopment": "Translated by Miles Coverdale as 'lovingkindness' (1535) and by the Septuagint as eleos ('mercy').",
  "theologicalSignificance": "Demonstrates that God's covenant love is unshakeable and the foundation for all forgiveness.",
  "majorInterpretivePositions": {
    "issue": "Whether chesed requires a pre-existing covenant or creates the covenant relationship.",
    "biblicalEvidence": "Passages emphasizing unilateral divine grace (Exod 34:6).",
    "historicalBackground": "Nelson Glueck's covenant theory vs modern lexical studies.",
    "positions": [
      {
        "name": "Covenant Loyalty & Gracious Benevolence",
        "description": "Chesed embraces both free spontaneous grace and enduring covenantal loyalty.",
        "traditions": [
          "Reformed",
          "Evangelical",
          "Jewish Studies"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Biblical Theology",
      "positionSummary": "Recognized as the Old Testament root of the New Testament revelation of divine grace (charis)."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Hebrew",
      "scriptUnicode": "חֶסֶד",
      "lemma": "chesed",
      "transliteration": "chesed",
      "pronunciation": "KHEH-sed",
      "partOfSpeech": "Noun, Masculine",
      "semanticRange": "Lovingkindness, steadfast love, covenant mercy, unfailing loyalty",
      "strongsNumber": "H2617",
      "biblicalOccurrencesCount": 248,
      "importantOccurrences": [
        "Exod 34:6",
        "Ps 136:1",
        "Lam 3:22"
      ],
      "translationCautions": "One of the richest Hebrew words; cannot be reduced to simple pity or sentimental affection.",
      "sources": [
        "Brown-Driver-Briggs Hebrew and English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-chesed",
      "languageCode": "bn",
      "localHeadword": "হেসেদ / নিয়মভিত্তিক প্রেম (Chesed)",
      "definitionSimple": "ঈশ্বরের অটল, বিশ্বস্ত ও অপরিবর্তনীয় দয়া ও প্রেম যা তিনি তাঁর প্রতিজ্ঞার কারণে চিরকাল বজায় রাখেন।",
      "definitionStudy": "ইব্রীয় ভাষার অন্যতম গভীর শব্দ যা ঈশ্বরের অনন্ত চুক্তিবদ্ধ প্রেম ও করুণাকে নির্দেশ করে।",
      "definitionAcademic": "পুরাতন নিয়ম ধর্মতত্ত্বের মূল স্তম্ভ যা ঈশ্বরের করুণাপূর্ণ বিশ্বস্ততার বাস্তব রূপ তুলে ধরে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.bdb, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["bdb","westminster","logos_editorial"]
},

{
  "id": "entry-maranatha",
  "slug": "maranatha",
  "headwordEnglish": "Maranatha",
  "alternativeSpellings": [
    "Marana tha",
    "Our Lord, Come!"
  ],
  "pronunciationIpa": "/ˌmær.əˈnæθ.ə/",
  "partOfSpeech": "Interjection / Aramaic Phrase",
  "category": "Biblical Aramaic",
  "theologicalPaths": [
    "biblical-aramaic",
    "eschatology",
    "worship"
  ],
  "definitionSimple": "An early Christian prayer and greeting in Aramaic that means: 'Our Lord, come!' expressing longing for Jesus' return.",
  "definitionStudy": "An untranslated Aramaic liturgical acclamation preserved in the Greek New Testament (1 Cor 16:22) and the Didache (10:6), expressing intense eschatological longing for the parousia of Jesus Christ.",
  "definitionAcademic": "An early Palestinian Christian liturgical formula (māranā' thā 'Our Lord, come!' or māran 'athā 'Our Lord has come'), demonstrating the very earliest Aramaic worship of Jesus as divine Lord.",
  "biblicalUsage": "Preserved by Paul at the conclusion of 1 Corinthians (1 Cor 16:22; cf. Rev 22:20).",
  "scriptureReferences": [
    "1 Corinthians 16:22",
    "Revelation 22:20",
    "Philippians 4:5"
  ],
  "historicalDevelopment": "Used in the early eucharistic liturgy of the Didache, voicing the church's eager prayer for Christ's return.",
  "theologicalSignificance": "Strong historical evidence that the earliest Jewish-Christian disciples worshipped Jesus as divine Lord from the start.",
  "majorInterpretivePositions": {
    "issue": "Whether parsed as an imperative prayer ('Come, Lord!') or an indicative statement ('The Lord has come').",
    "biblicalEvidence": "Revelation 22:20 ('Amen. Come, Lord Jesus!') supports the imperative prayer reading.",
    "historicalBackground": "Early church Eucharistic liturgies in Syria and Palestine.",
    "positions": [
      {
        "name": "Eschatological Prayer (Imperative)",
        "description": "An ardent invocation: 'Our Lord, come quickly to judge and reign!'",
        "traditions": [
          "Historic Church Consensus"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Ecumenical Liturgical Heritage",
      "positionSummary": "Chanted in Advent and Eucharistic celebrations across all Christian traditions."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Aramaic",
      "scriptUnicode": "מרנא תא",
      "lemma": "maranatha",
      "transliteration": "māranā' thā",
      "pronunciation": "mah-rah-nah-TAH",
      "partOfSpeech": "Aramaic Phrase",
      "semanticRange": "Our Lord, come! / The Lord is coming",
      "strongsNumber": "G3134",
      "biblicalOccurrencesCount": 1,
      "importantOccurrences": [
        "1 Cor 16:22"
      ],
      "translationCautions": "An untranslated Aramaic liturgical phrase cherished by early Greek-speaking churches.",
      "sources": [
        "Thayer's Greek-English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-maranatha",
      "languageCode": "bn",
      "localHeadword": "মারানাথা (Maranatha)",
      "definitionSimple": "আদি খ্রীষ্টীয় অরামীয় প্রার্থনা ও শুভেচ্ছা, যার অর্থ: 'হে আমাদের প্রভু, আসুন!'",
      "definitionStudy": "নূতন নিয়মে অবিকৃত রাখা অরামীয় উপাসনালব্ধ প্রার্থনা যা যীশু খ্রীষ্টের দ্বিতীয় আগমনের ব্যাকুল প্রত্যাশা ব্যক্ত করে।",
      "definitionAcademic": "আদি মণ্ডলীর শেষকালতাত্ত্বিক প্রার্থনাবাক্য যা প্রমাণ করে যে প্রথম শতাব্দীর ইহুদি বিশ্বাসীরা যীশুকে সার্বভৌম প্রভু হিসেবে উপাসনা করতেন।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","logos_editorial"]
},

{
  "id": "entry-abba",
  "slug": "abba",
  "headwordEnglish": "Abba",
  "alternativeSpellings": [
    "Abba, Father"
  ],
  "pronunciationIpa": "/ˈɑː.bə/",
  "partOfSpeech": "Noun / Aramaic Title",
  "category": "Biblical Aramaic",
  "theologicalPaths": [
    "biblical-aramaic",
    "theology-proper",
    "prayer"
  ],
  "definitionSimple": "An intimate, affectionate Aramaic word for 'Father' used by Jesus in prayer and given to all believers who are adopted into God's family.",
  "definitionStudy": "The Aramaic familial term for father employed by Jesus in intimate prayer (Mark 14:36) and shared by the Holy Spirit with adopted believers as an assurance of divine sonship (Rom 8:15; Gal 4:6).",
  "definitionAcademic": "An expressive Aramaic vocative ('abbā') combining profound filial intimacy with reverent trust, signifying the unprecedented filial relationship of Jesus to God, imparted through adoptive regeneration to the elect.",
  "biblicalUsage": "Appears three times in the New Testament, always paired with the Greek ho pater (Mark 14:36; Rom 8:15; Gal 4:6).",
  "scriptureReferences": [
    "Mark 14:36",
    "Romans 8:15",
    "Galatians 4:6"
  ],
  "historicalDevelopment": "Used in Palestinian Jewish households, elevated by Jesus to express intimate communion with the Father, and preserved in early church prayer.",
  "theologicalSignificance": "Testifies to the profound reality of spiritual adoption and personal intimacy with God Almighty.",
  "majorInterpretivePositions": {
    "issue": "Whether Abba is childish 'Daddy' or an adult term of respectful filial affection.",
    "biblicalEvidence": "Usage in Gethsemane agony (Mark 14:36) points to deep maturity, not juvenile triviality.",
    "historicalBackground": "Joachim Jeremias's thesis vs modern Semitic linguistic corrections (Barr).",
    "positions": [
      {
        "name": "Mature Filial Intimacy",
        "description": "Expresses warm familial trust and honor, appropriate for adult sons and daughters of God.",
        "traditions": [
          "Academic Semitic Consensus",
          "Evangelical"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Christian Prayer Heritage",
      "positionSummary": "Cherished as the supreme badge of believers' legal adoption into God's family."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Aramaic",
      "scriptUnicode": "אַבָּא",
      "lemma": "abba",
      "transliteration": "'abbā",
      "pronunciation": "AH-bah",
      "partOfSpeech": "Noun, Masculine Vocative",
      "semanticRange": "Father, dearest father",
      "strongsNumber": "G5",
      "biblicalOccurrencesCount": 3,
      "importantOccurrences": [
        "Mark 14:36",
        "Rom 8:15",
        "Gal 4:6"
      ],
      "translationCautions": "Avoid overly casual or disrespectful modern slang; it conveys profound holy intimacy and honor.",
      "sources": [
        "Thayer's Greek-English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-abba",
      "languageCode": "bn",
      "localHeadword": "আব্বা (Abba)",
      "definitionSimple": "ঈশ্বরের প্রতি প্রেম ও গভীর আত্মিক ঘনিষ্ঠতার সাথে সম্বোধন করার অরামীয় পারিবারিক শব্দ, যার অর্থ 'পিতা'।",
      "definitionStudy": "প্রভু যীশু কর্তৃক ব্যবহৃত অরামীয় সম্বোধন যা খ্রীষ্টে বিশ্বাসীদের জন্য ঈশ্বরের সন্তান হিসেবে দত্তকপুত্রতার নিশ্চিত প্রমাণ।",
      "definitionAcademic": "প্রার্থনাধর্মতত্ত্বের একটি পবিত্র পরিভাষা যা পবিত্র আত্মার মাধ্যমে পিতা ঈশ্বরের সাথে গভীর আত্মিক সম্পর্কের সাক্ষ্য দেয়।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.heidelberg, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","heidelberg","logos_editorial"]
},

{
  "id": "entry-inspiration",
  "slug": "inspiration",
  "headwordEnglish": "Biblical Inspiration",
  "alternativeSpellings": [
    "Plenary Verbal Inspiration",
    "Theopneustia"
  ],
  "pronunciationIpa": "/ˌɪn.spəˈreɪ.ʃən/",
  "partOfSpeech": "Noun",
  "category": "Bibliology",
  "theologicalPaths": [
    "bibliology",
    "systematic-theology",
    "canon"
  ],
  "definitionSimple": "The supernatural work of the Holy Spirit whereby God guided human biblical authors to write His exact Word without error, using their own personalities.",
  "definitionStudy": "The supernatural influence of the Holy Spirit upon human writers of Scripture, guaranteeing that their original writings are verbally and fully (plenary) the very Word of God.",
  "definitionAcademic": "The divine action of theopneustia whereby the Spirit concurred with human faculties, vocabularies, and historical contexts so that the resulting graphe is entirely God-breathed, inerrant, and normative for faith.",
  "biblicalUsage": "Scripture describes prophecy as men speaking from God as they were carried along by the Holy Spirit (2 Pet 1:21; 2 Tim 3:16).",
  "scriptureReferences": [
    "2 Timothy 3:16",
    "2 Peter 1:20-21",
    "1 Corinthians 2:13",
    "Matthew 4:4"
  ],
  "historicalDevelopment": "Confessed in the ancient creeds, articulated in post-Reformation dogmatics, and defended against modernism in the Chicago Statement.",
  "theologicalSignificance": "Establishes Holy Scripture as divine revelation rather than human religious philosophy.",
  "majorInterpretivePositions": {
    "issue": "Verbal plenary inspiration versus mechanical dictation versus dynamic inspiration.",
    "biblicalEvidence": "Distinct literary styles of authors (e.g. Luke vs John) alongside divine authority.",
    "historicalBackground": "The Princeton doctrine of inspiration (Warfield) vs modern liberal reductionism.",
    "positions": [
      {
        "name": "Verbal Plenary Concursive Inspiration",
        "description": "God inspired every word without overriding the human authors' personalities or writing styles.",
        "traditions": [
          "Confessional Evangelical",
          "Reformed",
          "Lutheran"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Confessional Protestant",
      "positionSummary": "Affirms verbal plenary inspiration as the formal principle of the Reformation."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Greek",
      "scriptUnicode": "φέρω",
      "lemma": "phero",
      "transliteration": "phérō",
      "pronunciation": "FEH-roh",
      "partOfSpeech": "Verb",
      "semanticRange": "To bear, carry along, move, guide",
      "strongsNumber": "G5342",
      "biblicalOccurrencesCount": 66,
      "importantOccurrences": [
        "2 Pet 1:21"
      ],
      "translationCautions": "In 2 Pet 1:21, used of a ship carried along by the wind, depicting the Spirit guiding authors.",
      "sources": [
        "Thayer's Greek-English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-inspiration",
      "languageCode": "bn",
      "localHeadword": "ঐশ্বরিক অনুপ্রেরণা (Inspiration)",
      "definitionSimple": "পবিত্র আত্মার অলৌকিক কার্য যার দ্বারা তিনি মানব লেখকদের পরিচালিত করে ঈশ্বরের নিখুঁত বাক্য লিপিবদ্ধ করিয়েছেন।",
      "definitionStudy": "শাস্ত্রের শব্দে শব্দে ঈশ্বরের প্রত্যক্ষ অনুপ্রেরণা (ভার্বাল প্লেনারি ইন্সপিরেশন) যা বাইবেলকে পরম প্রামাণ্য করে তোলে।",
      "definitionAcademic": "শাস্ত্রবিজ্ঞানের মূল ভিত্তি যা নিশ্চিত করে যে বাইবেল নিছক মানুষের রচনা নয় বরং ঈশ্বরের নিঃশ্বাসিত বাক্য।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","westminster","logos_editorial"]
},

{
  "id": "entry-aseity",
  "slug": "aseity",
  "headwordEnglish": "Divine Aseity",
  "alternativeSpellings": [
    "Self-Existence of God",
    "Aseitas"
  ],
  "pronunciationIpa": "/eɪˈsiː.ə.ti/",
  "partOfSpeech": "Noun",
  "category": "Theology Proper",
  "theologicalPaths": [
    "theology-proper",
    "philosophical-theology",
    "systematic-theology"
  ],
  "definitionSimple": "The truth that God exists completely in and of Himself, needing nothing and no one outside Himself for His life, happiness, or existence.",
  "definitionStudy": "The classical divine attribute affirming that God is completely self-existent (a se: 'from Himself'), uncaused, independent of creation, and possesses infinite life inherently within Himself (John 5:26).",
  "definitionAcademic": "An incommunicable divine perfection denoting ontological independence (aseitas). God is the unconditioned Necessary Being (ens necessarium) whose essence is to be, while all creaturely existence is contingent.",
  "biblicalUsage": "Affirmed in the divine name 'I AM' (Exod 3:14) and in Jesus' declaration that the Father has life in Himself (John 5:26; Acts 17:25).",
  "scriptureReferences": [
    "Exodus 3:14",
    "John 5:26",
    "Acts 17:24-25",
    "Psalm 90:2",
    "Romans 11:36"
  ],
  "historicalDevelopment": "Affirmed across classical theism from the early church fathers through Anselm, Aquinas, and the Protestant scholastics.",
  "theologicalSignificance": "Guarantees that God did not create the universe out of deficiency, loneliness, or need, but out of sovereign overflowing love.",
  "majorInterpretivePositions": {
    "issue": "Divine independence versus relational theologies proposing that God needs the world.",
    "biblicalEvidence": "Acts 17:25 (God is not served by human hands as though He needed anything).",
    "historicalBackground": "Classical theism vs process theology and open theism.",
    "positions": [
      {
        "name": "Classical Aseity",
        "description": "God is completely self-sufficient and independent of creation in His eternal being.",
        "traditions": [
          "Reformed",
          "Catholic",
          "Eastern Orthodox"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Classical Theism",
      "positionSummary": "Maintains aseity as the absolute foundational distinction between the uncreated Creator and creation."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Hebrew",
      "scriptUnicode": "אֶהְיֶה",
      "lemma": "ehyeh",
      "transliteration": "'ehyeh",
      "pronunciation": "eh-HYEH",
      "partOfSpeech": "Verb",
      "semanticRange": "I am, I will be, I exist",
      "strongsNumber": "H1961",
      "biblicalOccurrencesCount": 43,
      "importantOccurrences": [
        "Exod 3:14"
      ],
      "translationCautions": "Indicates active, uncaused, eternal existence.",
      "sources": [
        "Brown-Driver-Briggs Hebrew and English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-aseity",
      "languageCode": "bn",
      "localHeadword": "স্বয়ম্ভূত্ব / পরম স্বনির্ভরতা (Aseity)",
      "definitionSimple": "এই সত্য যে ঈশ্বর সম্পূর্ণ নিজের মধ্যে অস্তিত্বশীল এবং তাঁর অস্তিত্বের জন্য কারও ওপর নির্ভর করতে হয় না।",
      "definitionStudy": "ঈশ্বরের অদ্বিতীয় গুণ যা প্রকাশ করে যে তিনি অনাদি, সৃষ্টিকর্তা এবং সৃষ্টির কোনো সাহায্যের মুখাপেক্ষী নন।",
      "definitionAcademic": "ঈশ্বরতত্ত্বের একটি পরম বৈশিষ্ট্য যা ঈশ্বরের স্বাধীনতা, স্বয়ংসম্পূর্ণতা ও অসীম সত্তাকে নির্দেশ করে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.bdb, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["bdb","westminster","logos_editorial"]
},

{
  "id": "entry-omniscience",
  "slug": "omniscience",
  "headwordEnglish": "Divine Omniscience",
  "alternativeSpellings": [
    "All-Knowing God",
    "Omniscientia"
  ],
  "pronunciationIpa": "/ɑːmˈnɪʃ.əns/",
  "partOfSpeech": "Noun",
  "category": "Theology Proper",
  "theologicalPaths": [
    "theology-proper",
    "systematic-theology",
    "philosophical-theology"
  ],
  "definitionSimple": "The divine attribute of God meaning He knows all things perfectly—past, present, future, and all possibilities—without having to learn.",
  "definitionStudy": "The divine perfection whereby God, by one simple, eternal, and simultaneous act of intuition, perfectly knows Himself and all actual and possible things in their fullest detail.",
  "definitionAcademic": "An incommunicable divine attribute signifying exhaustive cognitive perfection. God's knowledge is intuitive rather than discursive, eternal rather than acquired, and encompasses all counterfactuals (scientia media) and actualities.",
  "biblicalUsage": "Affirmed extensively in Scripture (Ps 139:1-6; 1 John 3:20; Heb 4:13; Isa 46:9-10).",
  "scriptureReferences": [
    "Psalm 139:1-6",
    "Isaiah 46:9-10",
    "Hebrews 4:13",
    "1 John 3:20"
  ],
  "historicalDevelopment": "Confessed throughout church history, articulated with precision in Reformation dogmatics, and defended against open theism.",
  "theologicalSignificance": "Provides supreme comfort to believers that God understands their hearts fully and governs history with complete wisdom.",
  "majorInterpretivePositions": {
    "issue": "God's exhaustive knowledge of future free human choices.",
    "biblicalEvidence": "God declaring the end from the beginning (Isa 46:10).",
    "historicalBackground": "Augustinian/Calvinist foreknowledge vs Molinist middle knowledge vs Open Theism.",
    "positions": [
      {
        "name": "Exhaustive Definite Foreknowledge",
        "description": "God knows all future events and choices infallibly and exhaustively.",
        "traditions": [
          "Classical Christian",
          "Reformed",
          "Arminian",
          "Catholic"
        ]
      },
      {
        "name": "Open Theism (Heterodox)",
        "description": "God chooses not to know future free choices until they happen.",
        "traditions": [
          "Open Theism"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Classical Christianity",
      "positionSummary": "Unanimously affirms exhaustive divine foreknowledge as essential to theism."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Hebrew",
      "scriptUnicode": "דַּעַת",
      "lemma": "da'ath",
      "transliteration": "da'ath",
      "pronunciation": "DAH-ath",
      "partOfSpeech": "Noun, Feminine",
      "semanticRange": "Knowledge, understanding, discernment, perception",
      "strongsNumber": "H1847",
      "biblicalOccurrencesCount": 93,
      "importantOccurrences": [
        "Ps 139:6",
        "Prov 1:7"
      ],
      "translationCautions": "In Psalm 139:6 describes divine knowledge so vast it transcends human comprehension.",
      "sources": [
        "Brown-Driver-Briggs Hebrew and English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-omniscience",
      "languageCode": "bn",
      "localHeadword": "সর্বজ্ঞতা (Omniscience)",
      "definitionSimple": "ঈশ্বরের সেই অনন্ত গুণ যার দ্বারা তিনি অতীত, বর্তমান, ভবিষ্যৎ এবং সকল সম্ভাবনা সম্পূর্ণরূপে জানেন।",
      "definitionStudy": "ঈশ্বর কর্তৃক নিখিল জগতের সমস্ত গোপন চিন্তা, ঘটনা ও ভবিষ্যৎ সম্পর্কে নিখুঁত ও অসীম জ্ঞানের উপস্থিতি।",
      "definitionAcademic": "ঈশ্বরতত্ত্বের একটি অবিভাজ্য গুণ যা ঈশ্বরের জ্ঞানের পরম সার্বিকতা ও অভ্রান্ততাকে নির্দেশ করে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.bdb, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["bdb","westminster","logos_editorial"]
},

{
  "id": "entry-perichoresis",
  "slug": "perichoresis",
  "headwordEnglish": "Perichoresis",
  "alternativeSpellings": [
    "Circumincession",
    "Mutual Indwelling",
    "Coinherence"
  ],
  "pronunciationIpa": "/ˌper.ɪ.kəˈriː.sɪs/",
  "partOfSpeech": "Noun",
  "category": "Doctrine of the Trinity",
  "theologicalPaths": [
    "doctrine-of-the-trinity",
    "christology",
    "systematic-theology"
  ],
  "definitionSimple": "The profound, loving communion of the Trinity wherein the Father, Son, and Holy Spirit mutually dwell within one another without losing their distinct persons.",
  "definitionStudy": "The classical theological doctrine of mutual indwelling and interpenetration (circumincessio) of the three Persons of the Trinity, affirming that each Person contains the others while remaining distinct.",
  "definitionAcademic": "A pro-Nicene and patristic trinitarian concept developed by the Cappadocians and John of Damascus describing the dynamic reciprocal interpenetration of the divine hypostases without confusion of relations (in-esse).",
  "biblicalUsage": "Directly rooted in Jesus' affirmations that 'I am in the Father and the Father is in me' (John 14:10-11; 17:21).",
  "scriptureReferences": [
    "John 10:38",
    "John 14:10-11",
    "John 17:21-23",
    "1 Corinthians 2:10-11"
  ],
  "historicalDevelopment": "Applied to Christology by Gregory of Nazianzus, systematized for the Trinity by John of Damascus, and translated into Latin as circumincessio.",
  "theologicalSignificance": "Guards against tritheism while affirming true trinitarian unity and vibrant relational love.",
  "majorInterpretivePositions": {
    "issue": "How mutual indwelling maintains personhood distinctions without blending.",
    "biblicalEvidence": "Mutual indwelling in John 14:10.",
    "historicalBackground": "Cappadocian trinitarianism against Sabellianism.",
    "positions": [
      {
        "name": "Classical Trinitarian Perichoresis",
        "description": "The three divine persons mutually inhabit one another in perfect eternal love and essence.",
        "traditions": [
          "Eastern Orthodox",
          "Reformed",
          "Catholic",
          "Anglican"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Eastern Orthodox",
      "positionSummary": "Places special emphasis on perichoresis as the archetypal pattern of communion for humanity."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Greek",
      "scriptUnicode": "περιχώρησις",
      "lemma": "perichoresis",
      "transliteration": "perichṓrēsis",
      "pronunciation": "peh-ree-KHO-ray-sis",
      "partOfSpeech": "Noun, Feminine",
      "semanticRange": "Mutual indwelling, coinherence, interpenetration",
      "importantOccurrences": [
        "John 14:10-11"
      ],
      "translationCautions": "Literally 'dancing around' or 'making room for'; in theology refers to mutual indwelling.",
      "sources": [
        "Thayer's Greek-English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-perichoresis",
      "languageCode": "bn",
      "localHeadword": "পারস্পরিক অন্তর্বাস (Perichoresis)",
      "definitionSimple": "ত্রিত্বে পিতা, পুত্র ও পবিত্র আত্মার পারস্পরিক ভালোবাসাপূর্ণ গভীর অবস্থান ও অখণ্ড ঐক্য।",
      "definitionStudy": "ত্রিত্বীয় ধর্মতত্ত্বের গভীর সত্য যা প্রকাশ করে যে তিন ব্যক্তি একে অপরের মধ্যে অবস্থান করেও স্বকীয় ব্যক্তিসত্তা রক্ষা করেন।",
      "definitionAcademic": "প্রাচীন গ্রিক ধর্মতত্ত্বের একটি প্রত্যয় যা ত্রিত্বের তিন ব্যক্তিসত্তার অবিচ্ছেদ্য পারস্পরিক আত্মিক একীভূততাকে প্রকাশ করে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.nicene_creed, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","nicene_creed","logos_editorial"]
},

{
  "id": "entry-filioque",
  "slug": "filioque",
  "headwordEnglish": "Filioque Clause",
  "alternativeSpellings": [
    "And the Son",
    "Procession of the Spirit"
  ],
  "pronunciationIpa": "/ˌfɪl.iˈoʊ.kwi/",
  "partOfSpeech": "Noun / Latin Phrase",
  "category": "Doctrine of the Trinity",
  "theologicalPaths": [
    "doctrine-of-the-trinity",
    "pneumatology",
    "church-history"
  ],
  "definitionSimple": "The phrase 'and the Son' added to the Nicene Creed in the Western church, stating that the Holy Spirit proceeds from both the Father and the Son.",
  "definitionStudy": "The Latin phrase ('and from the Son') inserted into the Niceno-Constantinopolitan Creed by Western synods (Toledo, 589) affirming the eternal procession of the Holy Spirit from the Father and the Son.",
  "definitionAcademic": "A major historical point of contention between Western (Latin) and Eastern (Greek) theology regarding trinitarian spiriation, contributing fundamentally to the Great Schism of 1054.",
  "biblicalUsage": "Western theology cites John 15:26 and 16:7 (Christ sending the Spirit); Eastern theology cites John 15:26 ('who proceeds from the Father').",
  "scriptureReferences": [
    "John 15:26",
    "John 16:7",
    "Romans 8:9",
    "Galatians 4:6"
  ],
  "historicalDevelopment": "Added at Toledo (589) to combat Arianism in Spain, defended by Charlemagne, ratified in Rome (1014), and contested by Photius in the East.",
  "theologicalSignificance": "Touches upon the eternal internal relations (opera ad intra) of the Holy Trinity.",
  "majorInterpretivePositions": {
    "issue": "Whether the Spirit proceeds from the Father alone (monarchy of the Father) or from the Father and the Son.",
    "biblicalEvidence": "John 15:26 vs Romans 8:9 ('Spirit of Christ').",
    "historicalBackground": "The Great Schism of 1054 and modern ecumenical dialogues.",
    "positions": [
      {
        "name": "Western Tradition (Filioque)",
        "description": "The Spirit proceeds eternally from the Father and the Son as from one principle.",
        "traditions": [
          "Roman Catholic",
          "Protestant",
          "Reformed",
          "Lutheran",
          "Anglican"
        ]
      },
      {
        "name": "Eastern Orthodox Tradition",
        "description": "The Spirit proceeds from the Father alone through the Son in temporal mission.",
        "traditions": [
          "Eastern Orthodox"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Western Protestant",
      "positionSummary": "Retains the Filioque in the Westminster Confession (2.3) and Augsburg Confession (1)."
    },
    {
      "tradition": "Eastern Orthodox",
      "positionSummary": "Rejects the Filioque as an uncanonical modification of the ecumenical creed."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Greek",
      "scriptUnicode": "ἐκπορεύομαι",
      "lemma": "ekporeuomai",
      "transliteration": "ekporeúomai",
      "pronunciation": "ek-poh-RYOO-oh-my",
      "partOfSpeech": "Verb",
      "semanticRange": "To proceed forth, issue from a source, go out",
      "strongsNumber": "G1607",
      "biblicalOccurrencesCount": 33,
      "importantOccurrences": [
        "John 15:26"
      ],
      "translationCautions": "In John 15:26, used of the eternal procession of the Holy Spirit.",
      "sources": [
        "Thayer's Greek-English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-filioque",
      "languageCode": "bn",
      "localHeadword": "ফিলিউক / এবং পুত্র হইতে (Filioque)",
      "definitionSimple": "নীকীয় বিশ্বাসে যুক্ত লাতিন শব্দগুচ্ছ, যা ঘোষণা করে যে পবিত্র আত্মা পিতা ও পুত্র উভয় হইতেই নিঃসৃত হন।",
      "definitionStudy": "পাশ্চাত্য মণ্ডলী কর্তৃক সংযোজিত শব্দগুচ্ছ যা ত্রিত্বীয় সম্পর্কের ক্ষেত্রে পবিত্র আত্মার উৎস নির্ধারণ নিয়ে পূর্ব ও পশ্চিম মণ্ডলীর ঐতিহাসিক বিতর্কের কারণ।",
      "definitionAcademic": "মহাসভাতাত্ত্বিক ধর্মতত্ত্বের একটি ঐতিহাসিক বাক্য যা ১০৫৪ খ্রীষ্টাব্দের মহাবিচ্ছেদের অন্যতম প্রধান ধর্মতাত্ত্বিক কারণ ছিল।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.nicene_creed, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["nicene_creed","westminster","logos_editorial"]
},

{
  "id": "entry-kenosis",
  "slug": "kenosis",
  "headwordEnglish": "Kenosis (Self-Emptying)",
  "alternativeSpellings": [
    "Kenotic Christology",
    "Self-Emptying of Christ"
  ],
  "pronunciationIpa": "/kɪˈnoʊ.sɪs/",
  "partOfSpeech": "Noun",
  "category": "Christology",
  "theologicalPaths": [
    "christology",
    "biblical-greek",
    "systematic-theology"
  ],
  "definitionSimple": "The voluntary humility of Jesus Christ, who being fully God, emptied Himself by taking on human nature and dying on the cross for our salvation.",
  "definitionStudy": "The christological concept derived from Philippians 2:7 (heauton ekenōsen) describing the Son of God voluntarily veiling His divine glory and taking on the form of a servant without surrendering His deity.",
  "definitionAcademic": "An incarnational locus concerning the nature of Christ's humiliation (status exinanitionis). Classical orthodoxy understands kenosis not as the subtraction of divine attributes, but as the addition of a human nature in servant humility.",
  "biblicalUsage": "Found explicitly in the Christ hymn of Philippians 2:5-11.",
  "scriptureReferences": [
    "Philippians 2:5-11",
    "2 Corinthians 8:9",
    "John 17:5"
  ],
  "historicalDevelopment": "Debated in 19th-century German theology (kenoticism) and clarified in orthodox christology as voluntary humiliation.",
  "theologicalSignificance": "Shows the infinite depth of God's sacrificial love and sets the supreme pattern of Christian humility.",
  "majorInterpretivePositions": {
    "issue": "Whether Christ gave up divine attributes (kenoticism) or veiled His glory by taking a human nature.",
    "biblicalEvidence": "Philippians 2:7 in conjunction with Colossians 2:9 ('in Him dwells all the fullness of deity bodily').",
    "historicalBackground": "Classical incarnation vs 19th-century liberal kenotic theories.",
    "positions": [
      {
        "name": "Orthodox Veiling by Addition",
        "description": "Christ remained fully God, emptying Himself by adding human weakness, not by giving up deity.",
        "traditions": [
          "Classical Orthodoxy",
          "Reformed",
          "Evangelical"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Orthodox & Evangelical",
      "positionSummary": "Strictly rejects any theory that Jesus ceased to be omnipotent or omniscient in essence."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Greek",
      "scriptUnicode": "κενόω",
      "lemma": "kenoo",
      "transliteration": "kenóō",
      "pronunciation": "keh-NOH-oh",
      "partOfSpeech": "Verb",
      "semanticRange": "To empty, make void, lay aside privilege, humble oneself",
      "strongsNumber": "G2758",
      "biblicalOccurrencesCount": 5,
      "importantOccurrences": [
        "Phil 2:7"
      ],
      "translationCautions": "Signifies self-renunciation of status and glory, not the ontological shedding of divinity.",
      "sources": [
        "Thayer's Greek-English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-kenosis",
      "languageCode": "bn",
      "localHeadword": "কেনোসিস / আত্মরিক্তকরণ (Kenosis)",
      "definitionSimple": "মানবজাতির পরিত্রাণের জন্য যীশু খ্রীষ্টের স্বেচ্ছায় নিজেকে দীনহীন দাসের ন্যায় সমর্পণ ও নম্রকরণ।",
      "definitionStudy": "ফিলিপীয় ২:৭ পদের ভিত্তিতে খ্রীষ্টের ঈশ্বরত্বের মর্যাদা অক্ষুণ্ণ রেখে স্বেচ্ছায় মহিমা সংবরণ ও মানবীয় দাসত্ব গ্রহণ।",
      "definitionAcademic": "খ্রীষ্টতত্ত্বের একটি বিশিষ্ট ধারণা যা ঈশ্বরের পুত্রের অবতার গ্রহণের চরম আত্মত্যাগ ও মানবীয় রূপ পরিগ্রহকে ব্যাখ্যা করে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","westminster","logos_editorial"]
},

{
  "id": "entry-spiritual-gifts",
  "slug": "spiritual-gifts",
  "headwordEnglish": "Spiritual Gifts (Charismata)",
  "alternativeSpellings": [
    "Charismata",
    "Gifts of the Holy Spirit"
  ],
  "pronunciationIpa": "/ˈspɪr.ɪ.tʃu.əl ɡɪfts/",
  "partOfSpeech": "Noun",
  "category": "Pneumatology",
  "theologicalPaths": [
    "pneumatology",
    "ecclesiology",
    "practical-theology"
  ],
  "definitionSimple": "Special spiritual abilities given by the Holy Spirit to every believer in Christ to serve others and build up the church.",
  "definitionStudy": "The supernatural endowments (charismata) distributed sovereignly by the Holy Spirit to each member of the body of Christ for the mutual edification and flourishing of the church (1 Cor 12; Rom 12).",
  "definitionAcademic": "Pneumatological charisms distributed according to the divine will (1 Cor 12:11), functioning as covenantal manifestations of the Spirit (phanerōsis tou pneumatos) for the corporate edification of the ecclesia.",
  "biblicalUsage": "Outlined primarily in four New Testament passages (Romans 12:6-8; 1 Corinthians 12:4-11, 28-30; Ephesians 4:11-12; 1 Peter 4:10-11).",
  "scriptureReferences": [
    "Romans 12:6-8",
    "1 Corinthians 12:4-11",
    "1 Corinthians 14:12",
    "Ephesians 4:11-16",
    "1 Peter 4:10-11"
  ],
  "historicalDevelopment": "Practiced in the apostolic church, debated in the Montanist movement, and revitalized in the Reformation and 20th-century movements.",
  "theologicalSignificance": "Equips every Christian for vital ministry, proving the church is an active body rather than passive spectators.",
  "majorInterpretivePositions": {
    "issue": "Whether miraculous sign gifts (tongues, prophecy, healings) ceased with the apostles (Cessationism) or continue today (Continuationism).",
    "biblicalEvidence": "Apostolic sign gifts authenticating revelation (2 Cor 12:12; Heb 2:4) vs ongoing commands (1 Cor 14:1).",
    "historicalBackground": "Reformation cessationism (Calvin, Warfield) vs Pentecostal/Charismatic renewal.",
    "positions": [
      {
        "name": "Cessationism",
        "description": "Miraculous foundational sign gifts ceased with the completion of the apostolic era and canon.",
        "traditions": [
          "Reformed",
          "Presbyterian",
          "Cessationist Baptist"
        ]
      },
      {
        "name": "Continuationism",
        "description": "All spiritual gifts mentioned in the New Testament remain active for the church today.",
        "traditions": [
          "Pentecostal",
          "Charismatic",
          "Continuationist Evangelical"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Presbyterian & Reformed",
      "positionSummary": "Emphasizes permanent teaching, mercy, and administrative gifts while holding to cessationism regarding sign gifts."
    },
    {
      "tradition": "Pentecostal",
      "positionSummary": "Emphasizes speaking in tongues, prophecy, and divine healing as normative gifts."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Greek",
      "scriptUnicode": "χάρισμα",
      "lemma": "charisma",
      "transliteration": "chárisma",
      "pronunciation": "KHAH-rees-mah",
      "partOfSpeech": "Noun, Neuter",
      "semanticRange": "Free gift of grace, divine endowment, spiritual faculty",
      "strongsNumber": "G5486",
      "biblicalOccurrencesCount": 17,
      "importantOccurrences": [
        "1 Cor 12:4",
        "Rom 12:6"
      ],
      "translationCautions": "Derived directly from charis (grace); always a gift of unmerited favor, not personal merit.",
      "sources": [
        "Thayer's Greek-English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-spiritual-gifts",
      "languageCode": "bn",
      "localHeadword": "আত্মিক দানসমূহ (Spiritual Gifts)",
      "definitionSimple": "মণ্ডলীকে গড়ে তোলার জন্য পবিত্র আত্মা কর্তৃক প্রতিটি বিশ্বাসীকে প্রদত্ত বিশেষ আত্মিক ক্ষমতা ও সেবাদান।",
      "definitionStudy": "খ্রীষ্টের দেহের প্রতিটি অঙ্গের জন্য পবিত্র আত্মা কর্তৃক সার্বভৌমভাবে বণ্টিত অনুগ্রহদান (ক্যারিশমা)।",
      "definitionAcademic": "পবিত্র আত্মাতত্ত্ব ও মণ্ডলীবিদ্যার একটি প্রধান অঙ্গ যা মণ্ডলীতে সমবেত আত্মিক পরিচর্যার ভিত্তি স্থাপন করে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","westminster","logos_editorial"]
},

{
  "id": "entry-illumination",
  "slug": "illumination",
  "headwordEnglish": "Spiritual Illumination",
  "alternativeSpellings": [
    "Illumination of the Spirit",
    "Illuminatio"
  ],
  "pronunciationIpa": "/ɪˌluː.məˈneɪ.ʃən/",
  "partOfSpeech": "Noun",
  "category": "Pneumatology",
  "theologicalPaths": [
    "pneumatology",
    "bibliology",
    "hermeneutics"
  ],
  "definitionSimple": "The gracious work of the Holy Spirit opening the spiritual eyes and hearts of believers to understand, love, and obey God's written Word.",
  "definitionStudy": "The supernatural ministry of the Holy Spirit enabling fallen human minds to grasp, spiritually discern, and welcome the truth of Scripture, distinct from original inspiration.",
  "definitionAcademic": "A pneumatological-epistemological doctrine affirming that because of the noetic effects of the fall (1 Cor 2:14), regenerating grace is necessary for saving apprehension and obedience to biblical revelation.",
  "biblicalUsage": "Prayed for by the Psalmist ('Open my eyes, that I may behold wondrous things out of your law', Ps 119:18; Eph 1:17-18).",
  "scriptureReferences": [
    "Psalm 119:18",
    "1 Corinthians 2:10-14",
    "Ephesians 1:17-18",
    "2 Corinthians 4:6"
  ],
  "historicalDevelopment": "Articulated by Augustine, emphasized by the Reformers as the internal testimony of the Holy Spirit (testimonium Spiritus Sancti internum).",
  "theologicalSignificance": "Protects against dead rationalism and guarantees that saving biblical understanding requires humble prayer and spiritual dependence.",
  "majorInterpretivePositions": {
    "issue": "Does illumination give new revelation or clarify existing written Scripture?",
    "biblicalEvidence": "1 Corinthians 2:12-14 in harmony with the closed canon.",
    "historicalBackground": "Reformed biblical illumination vs Anabaptist/Quaker inner light claims.",
    "positions": [
      {
        "name": "Clarification of Canonical Text",
        "description": "Illumination never gives new revelation, but illumines the existing canonical text.",
        "traditions": [
          "Reformed",
          "Lutheran",
          "Evangelical"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Reformed",
      "positionSummary": "Strictly unites the Spirit and the Word: the Spirit works with and through the written Word, never apart from it."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Greek",
      "scriptUnicode": "φωτίζω",
      "lemma": "photizo",
      "transliteration": "phōtízō",
      "pronunciation": "foh-TEED-zoh",
      "partOfSpeech": "Verb",
      "semanticRange": "To give light, enlighten, bring to spiritual understanding",
      "strongsNumber": "G5461",
      "biblicalOccurrencesCount": 11,
      "importantOccurrences": [
        "Eph 1:18",
        "Heb 6:4"
      ],
      "translationCautions": "In Eph 1:18 refers to having the eyes of the heart spiritually flooded with divine light.",
      "sources": [
        "Thayer's Greek-English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-illumination",
      "languageCode": "bn",
      "localHeadword": "আত্মিক আলোকায়ন (Illumination)",
      "definitionSimple": "পবিত্র আত্মার দ্বারা বিশ্বাসীর হৃদয় ও চোখ খুলে দেওয়া যাতে তারা শাস্ত্রের সত্য উপলব্ধি করতে ও ভালোবাসতে পারে।",
      "definitionStudy": "ঈশ্বরের বাক্য সঠিকভাবে উপলব্ধি ও হৃদয়ে গ্রহণ করার জন্য মানব মনে পবিত্র আত্মার অলৌকিক আলোকিতকরণ কার্য।",
      "definitionAcademic": "শাস্ত্রতত্ত্ব ও আত্মাতত্ত্বের মেলবন্ধন যা প্রমাণ করে যে নিছক বুদ্ধি দিয়ে নয়, আত্মার আলোতেই বাইবেল জীবন্ত হয়।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","westminster","logos_editorial"]
},

{
  "id": "entry-imago-dei",
  "slug": "imago-dei",
  "headwordEnglish": "Imago Dei (Image of God)",
  "alternativeSpellings": [
    "Image of God",
    "Divine Image"
  ],
  "pronunciationIpa": "/ɪˈmɑː.ɡoʊ ˈdeɪ.iː/",
  "partOfSpeech": "Noun / Latin Phrase",
  "category": "Theological Anthropology",
  "theologicalPaths": [
    "theological-anthropology",
    "creation",
    "christian-ethics"
  ],
  "definitionSimple": "The foundational truth that every human being was created by God in His own image and likeness, possessing unique dignity, rationality, and spiritual capacity.",
  "definitionStudy": "The constitutional nature of humanity created male and female in the image and likeness of God (Gen 1:26-27), conferring supreme sanctity of life, moral accountability, and representative dominion.",
  "definitionAcademic": "The anthropological locus affirming that humanity is constitutively created in the divine image (selem / demuth). Defaced but not obliterated by the fall, it is restored progressively in Christ, the perfect Image of God.",
  "biblicalUsage": "Found in foundational creation and post-flood accounts (Gen 1:26-27; 9:6; Col 3:10; James 3:9).",
  "scriptureReferences": [
    "Genesis 1:26-27",
    "Genesis 9:6",
    "Colossians 1:15",
    "Colossians 3:10",
    "James 3:9"
  ],
  "historicalDevelopment": "Subdivided historically into substantive (reason), relational (communion), and functional (dominion) views.",
  "theologicalSignificance": "Establishes universal human rights, racial equality, and the infinite worth of every human life.",
  "majorInterpretivePositions": {
    "issue": "The essence of the image: substantive capacity, relational ability, or functional vice-regency.",
    "biblicalEvidence": "Genesis 1:26-28 combining likeness with dominion.",
    "historicalBackground": "Patristic and scholastic views vs modern relational models.",
    "positions": [
      {
        "name": "Comprehensive Integrated View",
        "description": "The imago Dei encompasses rational spirituality, relational communion, and representative dominion.",
        "traditions": [
          "Historic Christian",
          "Reformed"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Ecumenical Christian",
      "positionSummary": "Affirms that all human beings, without exception, bear the sacred imago Dei."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Hebrew",
      "scriptUnicode": "צֶלֶם",
      "lemma": "tselem",
      "transliteration": "tselem",
      "pronunciation": "TSEH-lem",
      "partOfSpeech": "Noun, Masculine",
      "semanticRange": "Image, likeness, statue, representation",
      "strongsNumber": "H6754",
      "biblicalOccurrencesCount": 17,
      "importantOccurrences": [
        "Gen 1:26-27",
        "Gen 9:6"
      ],
      "translationCautions": "Refers to humanity functioning as God's representative statue and reflection on earth.",
      "sources": [
        "Brown-Driver-Briggs Hebrew and English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-imago-dei",
      "languageCode": "bn",
      "localHeadword": "ঈশ্বরের প্রতিমূর্তি (Imago Dei)",
      "definitionSimple": "এই মৌলিক শিক্ষা যে প্রতিটি মানুষ ঈশ্বরের সাদৃশ্য ও প্রতিমূর্তিতে সৃষ্ট এবং পরম মর্যাদার অধিকারী।",
      "definitionStudy": "আদিপুস্তক ১:২৬-২৭ অনুসারে ঈশ্বরের প্রতিচ্ছবি হিসেবে মানুষের সৃষ্টি, যা মানবজাতিকে সৃষ্টির সেরা ও অনন্য দায়িত্বশীল করে তোলে।",
      "definitionAcademic": "নৃতত্ত্বমূলক ধর্মতত্ত্বের মূল ভিত্তি যা মানুষের অন্তর্নিহিত আধ্যাত্মিক গুণাবলী, নীতিবোধ ও পরম মর্যাদাকে প্রতিপাদন করে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.bdb, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["bdb","westminster","logos_editorial"]
},

{
  "id": "entry-total-depravity",
  "slug": "total-depravity",
  "headwordEnglish": "Total Depravity",
  "alternativeSpellings": [
    "Radical Corruption",
    "Total Inability"
  ],
  "pronunciationIpa": "/ˈtoʊ.təl dɪˈpræv.ə.ti/",
  "partOfSpeech": "Noun",
  "category": "Theological Anthropology",
  "theologicalPaths": [
    "theological-anthropology",
    "hamartiology",
    "soteriology"
  ],
  "definitionSimple": "The biblical truth that sin has deeply infected every part of human nature—mind, will, and emotions—making human beings completely unable to save themselves without God's grace.",
  "definitionStudy": "The doctrine that original sin has corrupted every aspect of fallen human faculties (reason, affections, will), rendering fallen man spiritually dead and wholly unable to merit salvation or come to Christ apart from regenerating grace.",
  "definitionAcademic": "The first point of classical Reformed soteriology (the 'T' in TULIP) asserting radical corruption (corruptio totalis). It does not mean man is as evil as he could possibly be, but that no faculty remains untouched by sin, eliminating moral ability for saving faith.",
  "biblicalUsage": "Scripture describes fallen man as dead in trespasses, having a deceitful heart, and unable to submit to God on his own (Jer 17:9; Rom 3:10-12; 8:7-8; Eph 2:1-3).",
  "scriptureReferences": [
    "Jeremiah 17:9",
    "Romans 3:10-18",
    "Romans 8:7-8",
    "Ephesians 2:1-3"
  ],
  "historicalDevelopment": "Defended by Augustine against Pelagius, reaffirmed by Luther and Calvin, and codified at the Synod of Dort (1618-1619).",
  "theologicalSignificance": "Magnifies the glory of divine grace by proving that salvation is 100% God's supernatural work from start to finish.",
  "majorInterpretivePositions": {
    "issue": "Total inability versus human libertarian capacity to accept the gospel.",
    "biblicalEvidence": "Romans 8:7-8 and John 6:44 ('No one can come to me unless the Father draws him').",
    "historicalBackground": "Augustine vs Pelagius; Dort vs the Remonstrants.",
    "positions": [
      {
        "name": "Monergistic Total Depravity (Reformed)",
        "description": "Man is spiritually dead and must be regenerated by the Spirit before he can believe.",
        "traditions": [
          "Reformed",
          "Presbyterian",
          "Reformed Baptist"
        ]
      },
      {
        "name": "Synergistic Prevenient Grace (Arminian)",
        "description": "All are depraved, but universal prevenient grace frees the human will to choose or reject Christ.",
        "traditions": [
          "Methodist",
          "Wesleyan",
          "Arminian"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Reformed",
      "positionSummary": "Maintains total depravity and total inability as the starting point of sovereign soteriology."
    },
    {
      "tradition": "Wesleyan",
      "positionSummary": "Affirms total depravity by nature, but teaches that universal prevenient grace restores free will."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Greek",
      "scriptUnicode": "νεκρός",
      "lemma": "nekros",
      "transliteration": "nekrós",
      "pronunciation": "neh-KROSS",
      "partOfSpeech": "Adjective",
      "semanticRange": "Dead, lifeless, deceased, spiritually dead",
      "strongsNumber": "G3498",
      "biblicalOccurrencesCount": 128,
      "importantOccurrences": [
        "Eph 2:1",
        "Eph 2:5"
      ],
      "translationCautions": "In Eph 2:1 describes fallen humanity not as merely sick, but as spiritually dead in trespasses.",
      "sources": [
        "Thayer's Greek-English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-total-depravity",
      "languageCode": "bn",
      "localHeadword": "চরম ভ্রষ্টতা (Total Depravity)",
      "definitionSimple": "পাপের কারণে মানব প্রকৃতির প্রতিটি অংশের এমন গভীর কলুষতা যার ফলে মানুষ নিজে থেকে ঈশ্বরের কাছে আসতে সম্পূর্ণ অক্ষম।",
      "definitionStudy": "মানুষের মন, ইচ্ছা ও আবেগে পাপের সার্বিক সংক্রমণ যা প্রমাণ করে যে ঐশ্বরিক অনুগ্রহ ছাড়া মানুষ পরিত্রাণ লাভ করতে পারে না।",
      "definitionAcademic": "পরিত্রাণতত্ত্বের প্রথম মূল নীতি যা নিশ্চিত করে যে মানবজাতি আত্মিকভাবে মৃত এবং কেবল ঈশ্বরের সার্বভৌম কৃপাতেই পুনর্জীবন সম্ভব।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","westminster","logos_editorial"]
},

{
  "id": "entry-election",
  "slug": "election",
  "headwordEnglish": "Unconditional Election",
  "alternativeSpellings": [
    "Divine Election",
    "Predestination"
  ],
  "pronunciationIpa": "/ˌʌn.kənˈdɪʃ.ən.əl ɪˈlek.ʃən/",
  "partOfSpeech": "Noun",
  "category": "Soteriology",
  "theologicalPaths": [
    "soteriology",
    "theology-proper",
    "systematic-theology"
  ],
  "definitionSimple": "God's sovereign, loving choice before creation to save specific people through Jesus Christ, based purely on His grace and not on any foreseen goodness in them.",
  "definitionStudy": "The eternal decree of God whereby, before the foundation of the world, He freely and sovereignly chose out of fallen humanity a great multitude to be redeemed by Christ, based solely on His good pleasure and not foreseen merit.",
  "definitionAcademic": "The second locus of Reformed soteriology (Canons of Dort, I) grounded in sovereign predestination (praedestinatio). It asserts that divine election to eternal life is unconditioned by foreseen human faith, repentance, or works.",
  "biblicalUsage": "Paul extensively articulates election as occurring before the foundation of the world in divine love (Eph 1:4-5; Rom 8:29-30; 9:11).",
  "scriptureReferences": [
    "Ephesians 1:4-5",
    "Romans 8:29-30",
    "Romans 9:11-16",
    "2 Thessalonians 2:13"
  ],
  "historicalDevelopment": "Formulated by Augustine against Pelagius, systematized by Calvin, and codified at the Synod of Dort (1618-1619) and Westminster Assembly (1646).",
  "theologicalSignificance": "Guarantees that salvation is utterly unearned and that God's purpose of grace will never fail.",
  "majorInterpretivePositions": {
    "issue": "Unconditional election vs conditional election based on foreseen faith.",
    "biblicalEvidence": "Romans 9:11-16 and Ephesians 1:4-5.",
    "historicalBackground": "Synod of Dort vs Arminian Remonstrance.",
    "positions": [
      {
        "name": "Unconditional Sovereign Election",
        "description": "God chooses the elect based solely on His sovereign grace, granting them faith in time.",
        "traditions": [
          "Reformed",
          "Presbyterian",
          "Reformed Baptist"
        ]
      },
      {
        "name": "Conditional Foreseen Faith Election",
        "description": "God elects those whom He foresaw would freely choose Christ through prevenient grace.",
        "traditions": [
          "Arminian",
          "Wesleyan",
          "Methodist"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Reformed",
      "positionSummary": "Affirms unconditional election as the bedrock of assurance and God's glory."
    },
    {
      "tradition": "Arminian / Methodist",
      "positionSummary": "Emphasizes universal love, holding that election is conditioned on foreseen faith."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Greek",
      "scriptUnicode": "ἐκλέγομαι",
      "lemma": "eklegomai",
      "transliteration": "eklégomai",
      "pronunciation": "ek-LEH-goh-my",
      "partOfSpeech": "Verb",
      "semanticRange": "To choose out, pick out for oneself, elect sovereignly",
      "strongsNumber": "G1586",
      "biblicalOccurrencesCount": 22,
      "importantOccurrences": [
        "Eph 1:4",
        "John 15:16"
      ],
      "translationCautions": "Middle voice expressing God choosing out for Himself according to His own purpose.",
      "sources": [
        "Thayer's Greek-English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-election",
      "languageCode": "bn",
      "localHeadword": "নিঃশর্ত মনোনয়ন (Unconditional Election)",
      "definitionSimple": "জগৎ সৃষ্টির পূর্বে মানুষের কোনো যোগ্যতা ছাড়াই কেবল নিজের অনুগ্রহে মানুষকে পরিত্রাণের জন্য ঈশ্বরের সার্বভৌম বাছাই।",
      "definitionStudy": "পরিত্রাণতত্ত্বের ভিত্তি যা ঘোষণা করে যে ঈশ্বর নিজের প্রেমের সার্বভৌম আনন্দে খ্রীষ্টের মাধ্যমে মানুষকে উদ্ধারের জন্য বেছে নিয়েছেন।",
      "definitionAcademic": "পরিত্রাণতত্ত্বের দ্বিতীয় স্তম্ভ যা মানবীয় গুণাবলীর পূর্বানুমান বাদ দিয়ে ঐশ্বরিক ইচ্ছার পরম স্বাধীনতা প্রতিষ্ঠা করে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","westminster","logos_editorial"]
},

{
  "id": "entry-imputation",
  "slug": "imputation",
  "headwordEnglish": "Imputation of Righteousness",
  "alternativeSpellings": [
    "Imputed Righteousness",
    "Alien Righteousness",
    "Imputatio"
  ],
  "pronunciationIpa": "/ˌɪm.pjʊˈteɪ.ʃən/",
  "partOfSpeech": "Noun",
  "category": "Soteriology",
  "theologicalPaths": [
    "soteriology",
    "systematic-theology",
    "historical-theology"
  ],
  "definitionSimple": "The legal act of God where our sins were charged to Jesus on the cross, and Jesus' perfect obedience and righteousness are credited to our account through faith.",
  "definitionStudy": "The judicial act of God in justification whereby the guilt of Adam is imputed to humanity, the sins of the elect are imputed to Christ on the cross, and the perfect active and passive obedience of Christ is credited to the believer.",
  "definitionAcademic": "A core locus of Reformation soteriology asserting the three great imputations (imputatio): Adam's guilt to humanity, believers' sin to Christ, and Christ's alien righteousness (iustitia aliena) to the justified sinner.",
  "biblicalUsage": "Paul repeatedly uses the accounting verb logizomai in Romans 4 ('faith was counted to Abraham as righteousness').",
  "scriptureReferences": [
    "Genesis 15:6",
    "Romans 4:3-8",
    "Romans 5:12-19",
    "2 Corinthians 5:21"
  ],
  "historicalDevelopment": "Articulated with clarity by Luther and Calvin against the Tridentine view of infused righteousness.",
  "theologicalSignificance": "Guarantees our standing before holy God rests entirely on Christ's finished work rather than our imperfect deeds.",
  "majorInterpretivePositions": {
    "issue": "Imputed external legal righteousness vs infused internal moral righteousness.",
    "biblicalEvidence": "2 Corinthians 5:21 ('He made Him to be sin who knew no sin, so that in Him we might become the righteousness of God').",
    "historicalBackground": "Reformation Sola Fide vs Council of Trent Decree on Justification (1547).",
    "positions": [
      {
        "name": "Protestant Imputed Righteousness",
        "description": "Justification is a forensic legal declaration based purely on Christ's credited righteousness.",
        "traditions": [
          "Reformed",
          "Lutheran",
          "Evangelical"
        ]
      },
      {
        "name": "Roman Catholic Infused Righteousness",
        "description": "Justification includes internal moral renewal through infused grace in the sacraments.",
        "traditions": [
          "Roman Catholic"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Protestant",
      "positionSummary": "Regards imputed righteousness as the material principle of the gospel without which no one can stand."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Greek",
      "scriptUnicode": "λογίζομαι",
      "lemma": "logizomai",
      "transliteration": "logízomai",
      "pronunciation": "loh-GEE-zoh-my",
      "partOfSpeech": "Verb",
      "semanticRange": "To credit, count, reckon, compute legally, put to one's account",
      "strongsNumber": "G3049",
      "biblicalOccurrencesCount": 40,
      "importantOccurrences": [
        "Rom 4:3",
        "2 Cor 5:19"
      ],
      "translationCautions": "An accounting term meaning to legally credit to someone's account.",
      "sources": [
        "Thayer's Greek-English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-imputation",
      "languageCode": "bn",
      "localHeadword": "ধার্মিকতার আরোপণ (Imputation)",
      "definitionSimple": "ঈশ্বরের বিচারিক কাজ যার দ্বারা আমাদের পাপ খ্রীষ্টের ওপর এবং খ্রীষ্টের পূর্ণ ধার্মিকতা আমাদের হিসাবে জমা হয়।",
      "definitionStudy": "ধার্মিক গণনাকরণের মূল নীতি যেখানে খ্রীষ্টের নিখুঁত আনুগত্য বিশ্বাসীর অ্যাকাউন্টে আইনগতভাবে অর্পণ করা হয়।",
      "definitionAcademic": "সংস্কারবাদী পরিত্রাণতত্ত্বের ভিত্তি যা মানবীয় কর্ম বাদ দিয়ে খ্রীষ্টের পরকীয় ধার্মিকতার ওপর দাঁড়ায়।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","westminster","logos_editorial"]
},

{
  "id": "entry-body-of-christ",
  "slug": "body-of-christ",
  "headwordEnglish": "Body of Christ",
  "alternativeSpellings": [
    "Corpus Christi",
    "The Church as the Body"
  ],
  "pronunciationIpa": "/ˈbɑː.di əv kraɪst/",
  "partOfSpeech": "Noun",
  "category": "Ecclesiology",
  "theologicalPaths": [
    "ecclesiology",
    "systematic-theology",
    "practical-theology"
  ],
  "definitionSimple": "The biblical picture of the Church where all believers across the world are united as living members of one body, with Jesus Christ as the supreme Head.",
  "definitionStudy": "The organic metaphor developed by Paul depicting the spiritual, corporate union of all true believers in Jesus Christ (1 Cor 12; Eph 1:22-23), animated by the Holy Spirit and coordinated under Christ’s lordship.",
  "definitionAcademic": "An ecclesiological locus defining the church not merely as a voluntary sociological association, but as the pneumatic, mystical body of the resurrected Christ (sōma Christou) participating in His life and ministry.",
  "biblicalUsage": "A primary Pauline motif found across 1 Corinthians, Ephesians, and Colossians.",
  "scriptureReferences": [
    "1 Corinthians 12:12-27",
    "Ephesians 1:22-23",
    "Ephesians 4:15-16",
    "Colossians 1:18"
  ],
  "historicalDevelopment": "Rooted in Pauline revelation, developed patristically (Augustine's Christus Totus), and fundamental to ecumenical ecclesiology.",
  "theologicalSignificance": "Emphasizes the absolute unity, mutual dependence, and spiritual diversity of all believers.",
  "majorInterpretivePositions": {
    "issue": "The relation between the invisible mystical body and visible local assemblies.",
    "biblicalEvidence": "Paul addressing concrete local bodies as Christ's body (1 Cor 12:27).",
    "historicalBackground": "Visible institutional hierarchy vs the spiritual communion of saints.",
    "positions": [
      {
        "name": "Organic Spiritual Union",
        "description": "The Body of Christ is the universal communion of all true regenerate believers.",
        "traditions": [
          "Historic Protestant",
          "Evangelical"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Protestant",
      "positionSummary": "Emphasizes that Christ alone is the sole Head of the Church, having no earthly vicar."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Greek",
      "scriptUnicode": "σῶμα",
      "lemma": "soma",
      "transliteration": "sṓma",
      "pronunciation": "SOH-mah",
      "partOfSpeech": "Noun, Neuter",
      "semanticRange": "Body, physical organism, corporate community",
      "strongsNumber": "G4983",
      "biblicalOccurrencesCount": 142,
      "importantOccurrences": [
        "1 Cor 12:27",
        "Col 1:18"
      ],
      "translationCautions": "In ecclesiology, denotes the living organic community of believers united to Christ.",
      "sources": [
        "Thayer's Greek-English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-body-of-christ",
      "languageCode": "bn",
      "localHeadword": "খ্রীষ্টের দেহ (Body of Christ)",
      "definitionSimple": "মণ্ডলীর আত্মিক রূপক যেখানে সকল বিশ্বাসী জীবন্ত অঙ্গ এবং যীশু খ্রীষ্ট স্বয়ং একমাত্র মস্তক।",
      "definitionStudy": "নূতন নিয়মে পৌল কর্তৃক বর্ণিত মণ্ডলীর জীবন্ত ঐক্য ও বৈচিত্র্য যেখানে বিশ্বাসীরা খ্রীষ্টের সাথে একাত্ম।",
      "definitionAcademic": "মণ্ডলীবিদ্যার একটি প্রধান অঙ্গ যা বিশ্বাসীদের পারস্পরিক নির্ভরতা ও খ্রীষ্টের সার্বভৌম মস্তকত্বকে প্রকাশ করে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","westminster","logos_editorial"]
},

{
  "id": "entry-parousia",
  "slug": "parousia",
  "headwordEnglish": "Parousia (Second Coming)",
  "alternativeSpellings": [
    "Second Coming",
    "Second Advent",
    "Return of Christ"
  ],
  "pronunciationIpa": "/pəˈruː.zi.ə/",
  "partOfSpeech": "Noun",
  "category": "Eschatology",
  "theologicalPaths": [
    "eschatology",
    "christology",
    "systematic-theology"
  ],
  "definitionSimple": "The glorious, bodily, visible return of the Lord Jesus Christ from heaven at the end of the age to judge the world and establish His new creation.",
  "definitionStudy": "The future, visible, bodily manifestation (parousia / epiphaneia) of Jesus Christ in power and great glory to execute final judgment, raise the dead, and consummate His eternal kingdom.",
  "definitionAcademic": "The climactic eschatological event of Christian dogmatics denoting the royal arrival and presence (parousia) of the exalted Messiah, bringing the present evil age to its final consummation.",
  "biblicalUsage": "Extensively proclaimed across the Gospels, Epistles, and Revelation (Matt 24:30; 1 Thess 4:16; Rev 1:7).",
  "scriptureReferences": [
    "Matthew 24:27-31",
    "Acts 1:11",
    "1 Thessalonians 4:15-17",
    "Titus 2:13",
    "Revelation 19:11-16"
  ],
  "historicalDevelopment": "Confessed in the Apostles' and Nicene Creeds ('He will come again in glory to judge the living and the dead').",
  "theologicalSignificance": "Provides the blessed hope that evil, pain, and death will be decisively defeated.",
  "majorInterpretivePositions": {
    "issue": "The timing of the return relative to the millennium and the tribulation.",
    "biblicalEvidence": "Visible cosmic return seen by all (Matt 24:30; Rev 1:7).",
    "historicalBackground": "Historic premillennialism vs amillennialism vs dispensationalism.",
    "positions": [
      {
        "name": "Historic Parousia Consensus",
        "description": "Christ will return bodily, visibly, and triumphantly at the end of history.",
        "traditions": [
          "Ecumenical Christian Orthodoxy"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Ecumenical Christian",
      "positionSummary": "Unanimously confesses the personal bodily return of Christ as the foundation of Christian hope."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Greek",
      "scriptUnicode": "παρουσία",
      "lemma": "parousia",
      "transliteration": "parousía",
      "pronunciation": "pah-roo-SEE-ah",
      "partOfSpeech": "Noun, Feminine",
      "semanticRange": "Presence, arrival, royal coming, official visit of a king",
      "strongsNumber": "G3952",
      "biblicalOccurrencesCount": 24,
      "importantOccurrences": [
        "Matt 24:3",
        "1 Thess 4:15"
      ],
      "translationCautions": "Denotes the visible, official arrival of a royal monarch.",
      "sources": [
        "Thayer's Greek-English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-parousia",
      "languageCode": "bn",
      "localHeadword": "পারুসিয়া / দ্বিতীয় আগমন (Parousia)",
      "definitionSimple": "যুগের শেষে স্বর্গ থেকে প্রভু যীশু খ্রীষ্টের গৌরবময়, দৃশ্যমান ও শারীরিক প্রত্যাবর্তন।",
      "definitionStudy": "বিশ্বের শেষ বিচার সম্পাদন ও অনন্ত রাজ্য প্রতিষ্ঠার জন্য রাজাধিরাজ যীশুর মহিমান্বিত আগমন।",
      "definitionAcademic": "শেষকালতত্ত্বের চূড়ামণি যা সৃষ্টিজগতের চূড়ান্ত মুক্তি ও খ্রীষ্টের অনন্ত বিজয়ের নিশ্চয়তা প্রদান করে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.nicene_creed, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["thayer","nicene_creed","logos_editorial"]
},

{
  "id": "entry-ex-nihilo",
  "slug": "ex-nihilo",
  "headwordEnglish": "Creation Ex Nihilo",
  "alternativeSpellings": [
    "Creation Out of Nothing",
    "Creatio Ex Nihilo"
  ],
  "pronunciationIpa": "/ˌeks ˈnaɪ.hɪ.loʊ/",
  "partOfSpeech": "Noun / Latin Phrase",
  "category": "Creation",
  "theologicalPaths": [
    "creation",
    "theology-proper",
    "philosophical-theology"
  ],
  "definitionSimple": "The truth that God created the entire universe out of nothing by the sheer power of His Word, without using any pre-existing materials.",
  "definitionStudy": "The foundational doctrine that God originated the entire cosmos out of nothing (ex nihilo) by His sovereign decree, establishing an absolute metaphysical distinction between Creator and creation.",
  "definitionAcademic": "A cosmogonic and ontological locus of Christian theism affirming that the cosmos did not emanate from God’s substance or from eternal unformed matter, but was created freely by divine fiat.",
  "biblicalUsage": "Found in Genesis 1:1, Psalm 33:6, Romans 4:17, and Hebrews 11:3 ('what is seen was not made out of things that are visible').",
  "scriptureReferences": [
    "Genesis 1:1",
    "Psalm 33:6-9",
    "Romans 4:17",
    "Hebrews 11:3",
    "Revelation 4:11"
  ],
  "historicalDevelopment": "Affirmed by early Christian apologists (Theophilus of Antioch, Irenaeus) against Greco-Roman theories of eternal matter and Gnostic dualism.",
  "theologicalSignificance": "Upholds God's absolute sovereignty and prevents pantheism or materialism.",
  "majorInterpretivePositions": {
    "issue": "Creation ex nihilo versus modern naturalistic cosmologies of uncaused universes.",
    "biblicalEvidence": "Hebrews 11:3 and Genesis 1:1.",
    "historicalBackground": "Christian creationism against ancient pagan materialism.",
    "positions": [
      {
        "name": "Classical Creation Out of Nothing",
        "description": "God created the universe from absolute non-being by His Word.",
        "traditions": [
          "Ecumenical Christian",
          "Reformed",
          "Catholic"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Ecumenical Christian",
      "positionSummary": "A foundational dogma across all Christian traditions distinguishing biblical theism from pantheism."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Hebrew",
      "scriptUnicode": "בָּרָא",
      "lemma": "bara",
      "transliteration": "bārā'",
      "pronunciation": "bah-RAH",
      "partOfSpeech": "Verb",
      "semanticRange": "To create, shape, bring into being exclusively by God",
      "strongsNumber": "H1254",
      "biblicalOccurrencesCount": 54,
      "importantOccurrences": [
        "Gen 1:1",
        "Ps 51:10"
      ],
      "translationCautions": "Used in the Old Testament exclusively with God as its grammatical subject.",
      "sources": [
        "Brown-Driver-Briggs Hebrew and English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-ex-nihilo",
      "languageCode": "bn",
      "localHeadword": "শূন্য থেকে সৃষ্টি (Ex Nihilo)",
      "definitionSimple": "ঈশ্বর কোনো পূর্ববিদ্যমান উপাদান ছাড়াই কেবল নিজের বাক্যের শক্তিতে সমগ্র মহাবিশ্ব সৃষ্টি করেছেন।",
      "definitionStudy": "বাইবেলীয় সৃষ্টির মৌলিক সত্য যা প্রমাণ করে যে ঈশ্বর ছাড়া পূর্বে কিছুই ছিল না এবং সমস্ত অস্তিত্ব তাঁর আদেশে এসেছে।",
      "definitionAcademic": "সৃষ্টিকর্মের মূল প্রত্যয় যা সর্বেশ্বরবাদ ও বস্তুবাদের বিরোধিতা করে স্রষ্টা ও সৃষ্টির পরম পার্থক্য নিশ্চিত করে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.bdb, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["bdb","westminster","logos_editorial"]
},

{
  "id": "entry-covenant-of-grace",
  "slug": "covenant-of-grace",
  "headwordEnglish": "Covenant of Grace",
  "alternativeSpellings": [
    "Foedus Gratiae",
    "Federal Theology"
  ],
  "pronunciationIpa": "/ˈkʌv.ən.ənt əv ɡreɪs/",
  "partOfSpeech": "Noun",
  "category": "Covenant",
  "theologicalPaths": [
    "covenant",
    "soteriology",
    "biblical-theology"
  ],
  "definitionSimple": "God's eternal, gracious promise to save sinners through faith in Jesus Christ, giving them eternal life and the Holy Spirit.",
  "definitionStudy": "The overarching covenantal framework established by God with fallen humanity following the breach of the Covenant of Works, promising eternal salvation through the mediation of Jesus Christ.",
  "definitionAcademic": "The grand soteriological architecture of Covenant (Federal) Theology, spanning redemptive history from Genesis 3:15 through Abrahamic, Mosaic, and Davidic covenants to consummation in the New Covenant.",
  "biblicalUsage": "Revealed progressively throughout biblical covenants and consummated in the New Covenant in Christ's blood (Gen 3:15; 17:7; Jer 31:31-34; Heb 8:6-13).",
  "scriptureReferences": [
    "Genesis 3:15",
    "Genesis 17:7",
    "Jeremiah 31:31-34",
    "Luke 22:20",
    "Hebrews 8:6-13"
  ],
  "historicalDevelopment": "Systematized by Bullinger, Olevianus, and the Westminster Assembly as the primary theological grid of Scripture.",
  "theologicalSignificance": "Reveals the beautiful, unbroken unity of God's redemptive plan across the Old and New Testaments.",
  "majorInterpretivePositions": {
    "issue": "The unity of the Covenant of Grace across the Testaments versus dispensational discontinuity.",
    "biblicalEvidence": "Abraham justified by faith as the father of all believers (Rom 4; Gal 3).",
    "historicalBackground": "Covenant Theology vs Dispensationalism.",
    "positions": [
      {
        "name": "Reformed Covenant Theology",
        "description": "One unified Covenant of Grace administered differently under Law and Gospel.",
        "traditions": [
          "Presbyterian",
          "Reformed",
          "Reformed Baptist"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Presbyterian & Reformed",
      "positionSummary": "Identifies the Covenant of Grace as the central organizing principle of all biblical revelation."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Hebrew",
      "scriptUnicode": "בְּרִית",
      "lemma": "berith",
      "transliteration": "berîth",
      "pronunciation": "beh-REETH",
      "partOfSpeech": "Noun, Feminine",
      "semanticRange": "Covenant, treaty, solemn divine promise, alliance",
      "strongsNumber": "H1285",
      "biblicalOccurrencesCount": 284,
      "importantOccurrences": [
        "Gen 17:7",
        "Jer 31:31"
      ],
      "translationCautions": "Signifies a sovereignly imposed divine pledge of fellowship.",
      "sources": [
        "Brown-Driver-Briggs Hebrew and English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-covenant-of-grace",
      "languageCode": "bn",
      "localHeadword": "অনুগ্রহের নিয়ম (Covenant of Grace)",
      "definitionSimple": "পাপী মানুষকে যীশু খ্রীষ্টে বিশ্বাসের মাধ্যমে বিনামূল্যে অনন্ত পরিত্রাণ দান করার জন্য ঈশ্বরের পবিত্র চুক্তি।",
      "definitionStudy": "মানবজাতির পতনের পর ঈশ্বরের সাথে পাপী মানুষের সম্পর্ক পুনর্স্থাপনের অনন্ত পরিকল্পনা যা খ্রীষ্টের রক্তে সিলমোহরযুক্ত।",
      "definitionAcademic": "চুক্তিভিত্তিক ধর্মতত্ত্বের মূল কেন্দ্র যা পুরাতন নিয়ম থেকে নূতন নিয়ম পর্যন্ত পরিত্রাণের এক অবিচ্ছেদ্য ধারা ব্যাখ্যা করে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.bdb, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["bdb","westminster","logos_editorial"]
},

{
  "id": "entry-council-of-nicaea",
  "slug": "council-of-nicaea",
  "headwordEnglish": "First Council of Nicaea",
  "alternativeSpellings": [
    "Nicaea I (AD 325)",
    "First Ecumenical Council"
  ],
  "pronunciationIpa": "/ˈkaʊn.səl əv naɪˈsiː.ə/",
  "partOfSpeech": "Proper Noun",
  "category": "Church History",
  "theologicalPaths": [
    "church-history",
    "creeds-and-confessions",
    "doctrine-of-the-trinity"
  ],
  "definitionSimple": "The first worldwide gathering of Christian bishops in AD 325 that defended Christ's true deity against Arius and produced the Nicene Creed.",
  "definitionStudy": "The first ecumenical council convened by Emperor Constantine in AD 325, gathering approximately 318 bishops to resolve the Arian controversy, formally defining Christ as homoousios (consubstantial) with the Father.",
  "definitionAcademic": "The foundational conciliar watershed of historical theology (AD 325) establishing the ontological co-equality of the Logos with the Father, inaugurating the conciliar tradition of ecumenical dogmatic definition.",
  "biblicalUsage": "Defended biblical affirmations of Christ's full deity (John 1:1-3; 10:30; Col 2:9).",
  "scriptureReferences": [
    "John 1:1-3",
    "John 10:30",
    "Colossians 2:9",
    "Hebrews 1:3"
  ],
  "historicalDevelopment": "Gathered at Nicaea (modern Iznik, Turkey) in 325; reaffirmed and expanded at the Council of Constantinople in 381.",
  "theologicalSignificance": "Settled the bedrock standard of Christian orthodoxy regarding the absolute divinity of our Savior.",
  "majorInterpretivePositions": {
    "issue": "The victory of Athanasian orthodoxy over Arian heresy.",
    "biblicalEvidence": "John 1:1-18.",
    "historicalBackground": "The Imperial summoning of the first universal synod of the church.",
    "positions": [
      {
        "name": "Ecumenical Dogmatic Victory",
        "description": "Established the permanent, irrevocable boundary of biblical trinitarian orthodoxy.",
        "traditions": [
          "Ecumenical Christian Consensus"
        ]
      }
    ]
  },
  "denominationalDistinctions": [
    {
      "tradition": "Ecumenical Christianity",
      "positionSummary": "Universally acknowledged across Catholic, Orthodox, Anglican, and Protestant churches as authoritative."
    }
  ],
  "originalLanguages": [
    {
      "language": "Biblical Greek",
      "scriptUnicode": "σύνοδος",
      "lemma": "synodos",
      "transliteration": "sýnodos",
      "pronunciation": "SEE-noh-doss",
      "partOfSpeech": "Noun, Feminine",
      "semanticRange": "Assembly, gathering together, ecclesiastical council",
      "importantOccurrences": [
        "Acts 15:6"
      ],
      "translationCautions": "Describes the coming together on the same path (syn + hodos).",
      "sources": [
        "Thayer's Greek-English Lexicon"
      ],
      "verified": true
    }
  ],
  "author": "Ayan Kumar Ghosh",
  "approvalStatus": "Theologically reviewed",
  "publicationStatus": "Published",
  "evidenceStatus": "Strongly supported",
  "versionNumber": 1,
  "createdAt": "2026-09-18T10:00:00Z",
  "updatedAt": "2026-09-19T10:00:00Z",
  "translations": {
    "bn": {
      "masterEntryId": "entry-council-of-nicaea",
      "languageCode": "bn",
      "localHeadword": "নীকিয়ার প্রথম মহাসভা (Council of Nicaea)",
      "definitionSimple": "৩২৫ খ্রীষ্টাব্দে অনুষ্ঠিত মণ্ডলীর প্রথম বিশ্ব সম্মেলন যা যীশু খ্রীষ্টের পূর্ণ ঈশ্বরত্ব প্রতিষ্ঠা করে এবং নীকীয় বিশ্বাসমালা রচনা করে।",
      "definitionStudy": "আরিয়াসের ভ্রান্ত মতবাদের বিরুদ্ধে ৩১৮ জন বিশপের ঐতিহাসিক মহাসভা যা খ্রীষ্টকে পিতার সম-সারবস্তু (হোমোউসিয়স) ঘোষণা করে।",
      "definitionAcademic": "মণ্ডলীর ইতিহাসের প্রথম সার্বজনীন সম্মেলন যা খ্রীষ্টধর্মের ত্রিত্বীয় ও খ্রীষ্টতাত্ত্বিক সনাতন বিশ্বাসের ভিত্তি স্থাপন করে।",
      "approvalStatus": "Theologically reviewed",
      "needsSyncWithMaster": false,
      "versionNumber": 1,
      "lastUpdated": "2026-09-19T09:00:00Z"
    }
  }
,
  sources: [SOURCE_REGISTER.nicene_creed, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
  sourceIds: ["nicene_creed","westminster","logos_editorial"]
}
];

// Backwards compatibility alias for pilot batch 50
export const PILOT_BATCH_50: MasterEntry[] = PILOT_BATCH_100.slice(0, 50);
