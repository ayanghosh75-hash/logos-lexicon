import fs from 'fs';
import path from 'path';

const pilotBatchPath = path.resolve('lib/db/pilotBatch50.ts');

const scriptContent = `import { MasterEntry } from './types';
import { SOURCE_REGISTER } from './sourceRegister';

export const PILOT_BATCH_50: MasterEntry[] = [
  // 1. Grace
  {
    id: 'entry-grace',
    slug: 'grace',
    headwordEnglish: 'Grace',
    alternativeSpellings: ['Divine Grace', 'Unmerited Favor'],
    pronunciationIpa: '/ɡreɪs/',
    partOfSpeech: 'Noun',
    category: 'Systematic Theology',
    theologicalPaths: ['systematic-theology', 'soteriology', 'biblical-greek'],
    definitionSimple: "God's completely free, unearned love, kindness, and favor given to human beings who do not deserve it and cannot earn it.",
    definitionStudy: "The unmerited and condescending favor of God toward fallen humanity, manifested supreme in the person and redemptive work of Jesus Christ, and applied by the Holy Spirit to regenerate, justify, sanctify, and sustain the believer.",
    definitionAcademic: "A central locus of Christian soteriology denoting the unmerited divine self-communication (gratia increata) and its transformative interior effects in human nature (gratia creata). It stands in antithesis to human merit, mediating reconciliation through Christological mediation.",
    biblicalUsage: "In the Old Testament, grace is articulated through 'chen' (spontaneous favor) and 'chesed' (covenantal lovingkindness). In the New Testament, 'charis' designates the radical gift of divine salvation in Christ (Eph 2:8-9), distinct from the works of the Law.",
    scriptureReferences: ['Genesis 6:8', 'Exodus 34:6', 'John 1:14', 'Romans 3:24', 'Romans 5:1-2', 'Ephesians 2:8-9', 'Titus 2:11'],
    historicalDevelopment: "Systematized in the Augustinian-Pelagian debates, re-articulated in the Protestant Reformation ('Sola Gratia'), and defined respectively in Dort, Trent, and Wesleyan theology.",
    theologicalSignificance: "Grace defines the gratuitous nature of salvation, upholding the absolute sovereignty of divine benevolence.",
    majorInterpretivePositions: {
      issue: "The relationship between divine grace and human free will in regeneration.",
      biblicalEvidence: "Passages emphasizing monergism (Rom 9:15-18) vs universal invitation (1 Tim 2:4).",
      historicalBackground: "Augustinian monergism versus Remonstrant synergism.",
      positions: [
        { name: "Monergistic Efficacious Grace (Reformed)", description: "Special saving grace irresistibly regenerates the elect.", traditions: ["Reformed", "Presbyterian"] },
        { name: "Prevenient Synergistic Grace (Arminian / Wesleyan)", description: "Prevenient grace is universal, enabling free response.", traditions: ["Methodist", "Wesleyan"] },
        { name: "Sacramental Infused Grace (Roman Catholic)", description: "Sanctifying grace is infused through sacraments, enabling cooperation.", traditions: ["Roman Catholic"] }
      ]
    },
    denominationalDistinctions: [
      { tradition: "Reformed", positionSummary: "Emphasizes Sola Gratia as unconditional election and effectual calling." },
      { tradition: "Arminian / Wesleyan", positionSummary: "Emphasizes universal prevenient grace enabling all to respond." },
      { tradition: "Eastern Orthodox", positionSummary: "Views grace as theosis (deification) and synergistic participation in uncreated energies." }
    ],
    originalLanguages: [
      {
        language: 'Biblical Greek',
        scriptUnicode: 'χάρις',
        lemma: 'charis',
        transliteration: 'cháris',
        pronunciation: 'KHAH-rees',
        partOfSpeech: 'Noun, Feminine',
        semanticRange: 'Grace, favor, goodwill, gift, gratitude, gracious disposition',
        strongsNumber: 'G5485',
        biblicalOccurrencesCount: 156,
        importantOccurrences: ['John 1:14', 'Rom 3:24', 'Eph 2:8-9'],
        translationCautions: 'Avoid reducing charis to merely pleasant demeanor or polite charm; in Paul it is a cosmic, sovereign redemptive power.',
        sources: ["Thayer's Greek-English Lexicon", "Strong's Exhaustive Concordance"],
        verified: true
      },
      {
        language: 'Biblical Hebrew',
        scriptUnicode: 'חֵן',
        lemma: 'chen',
        transliteration: 'chên',
        pronunciation: 'khane',
        partOfSpeech: 'Noun, Masculine',
        semanticRange: 'Favor, grace, charm, acceptance in the eyes of a superior',
        strongsNumber: 'H2580',
        biblicalOccurrencesCount: 69,
        importantOccurrences: ['Gen 6:8', 'Exod 33:17', 'Prov 3:34'],
        translationCautions: 'Often used in the idiom "find favor in the eyes of", indicating condescension by the superior party.',
        sources: ["Brown-Driver-Briggs Hebrew and English Lexicon"],
        verified: true
      }
    ],
    sources: [
      SOURCE_REGISTER.thayer,
      SOURCE_REGISTER.bdb,
      SOURCE_REGISTER.westminster,
      SOURCE_REGISTER.logos_editorial
    ],
    sourceIds: ['thayer', 'bdb', 'westminster', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T10:00:00Z',
    updatedAt: '2026-09-18T10:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-grace',
        languageCode: 'bn',
        localHeadword: 'অনুগ্রহ (Anugraha)',
        definitionSimple: 'ঈশ্বরের সম্পূর্ণ নিঃশর্ত ও অপ্রত্যাশিত প্রেম ও দয়া, যা মানুষ নিজের যোগ্যতায় অর্জন করতে পারে না।',
        definitionStudy: 'পতিত মানবজাতির প্রতি যীশু খ্রীষ্টের মাধ্যমে প্রকাশিত ঈশ্বরের সার্বভৌম ও অমূল্য করুণা।',
        definitionAcademic: 'খ্রীষ্টীয় পরিত্রাণতত্ত্বের মূল ভিত্তি, যা মানুষের সকল গুণ বা পুণ্যকে বাদ দিয়ে ঐশ্বরিক স্ব-উৎসর্গকে তুলে ধরে।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T10:00:00Z'
      }
    }
  },

  // 2. Covenant
  {
    id: 'entry-covenant',
    slug: 'covenant',
    headwordEnglish: 'Covenant',
    alternativeSpellings: ['Divine Covenant', 'Testament'],
    pronunciationIpa: '/ˈkʌv.ən.ənt/',
    partOfSpeech: 'Noun',
    category: 'Biblical Theology',
    theologicalPaths: ['biblical-theology', 'covenant-theology', 'old-testament-studies'],
    definitionSimple: "A sacred, binding promise and relationship initiated by God with His people, guaranteed by His divine oath.",
    definitionStudy: "A sovereignly administered bond in blood, establishing a relational, legal, and redemptive structure between the holy Creator and chosen humanity, accompanied by blessings and sanctions.",
    definitionAcademic: "A foundational architectural category in biblical theology (Hebrew: berith; Greek: diatheke) structuring redemptive history. It transforms Ancient Near Eastern treaty forms into an asymmetric vehicle of Yahwistic self-binding.",
    biblicalUsage: "Structures the Noahic (Gen 9), Abrahamic (Gen 15, 17), Mosaic (Exod 19-24), Davidic (2 Sam 7), and New Covenant (Jer 31; Luke 22:20; Heb 8).",
    scriptureReferences: ['Genesis 9:8-17', 'Genesis 15:1-21', 'Exodus 19:5-6', '2 Samuel 7:12-16', 'Jeremiah 31:31-34', 'Luke 22:20', 'Hebrews 9:15'],
    theologicalSignificance: "Covenant provides the structural unity of the Old and New Testaments.",
    originalLanguages: [
      {
        language: 'Biblical Hebrew',
        scriptUnicode: 'בְּרִית',
        lemma: 'berith',
        transliteration: 'bərît',
        pronunciation: 'beh-REETH',
        partOfSpeech: 'Noun, Feminine',
        semanticRange: 'Covenant, treaty, alliance, pledge, divine ordinance',
        strongsNumber: 'H1285',
        biblicalOccurrencesCount: 284,
        importantOccurrences: ['Gen 15:18', 'Exod 24:7', 'Jer 31:31'],
        translationCautions: 'Berith is sovereignly instituted by God; it is not a negotiation among equals.',
        sources: ["Brown-Driver-Briggs Hebrew and English Lexicon"],
        verified: true
      }
    ],
    sources: [SOURCE_REGISTER.bdb, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
    sourceIds: ['bdb', 'westminster', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T10:00:00Z',
    updatedAt: '2026-09-18T10:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-covenant',
        languageCode: 'bn',
        localHeadword: 'নিয়ম (Niyam)',
        definitionSimple: 'ঈশ্বরের দ্বারা প্রতিষ্ঠিত এক পবিত্র ও অলঙ্ঘনীয় আত্মিক চুক্তি ও প্রতিশ্রুতি।',
        definitionStudy: 'পবিত্র ঈশ্বর ও মানবজাতির মধ্যে রক্তে স্বাক্ষরিত সার্বভৌম সম্পর্ক ও প্রতিশ্রুতির পরিকাঠামো।',
        definitionAcademic: 'বাইবেলীয় ধর্মতত্ত্বের মূল পরিকাঠামো যা সৃষ্টির ধারাবাহিকতায় ঈশ্বরের প্রতিজ্ঞার বিকাশ তুলে ধরে।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T10:00:00Z'
      }
    }
  },

  // 3. Justification
  {
    id: 'entry-justification',
    slug: 'justification',
    headwordEnglish: 'Justification',
    alternativeSpellings: ['Forensic Justification', 'Justification by Faith'],
    pronunciationIpa: '/ˌdʒʌs.tɪ.fɪˈkeɪ.ʃən/',
    partOfSpeech: 'Noun',
    category: 'Systematic Theology',
    theologicalPaths: ['systematic-theology', 'soteriology', 'historical-theology'],
    definitionSimple: "God's legal declaration that a guilty sinner is righteous before Him, solely through faith in Jesus Christ.",
    definitionStudy: "An instantaneous forensic act of God's free grace wherein He pardons all our sins and accepts us as righteous in His sight, only for the righteousness of Christ imputed to us and received by faith alone.",
    definitionAcademic: "The declarative (forensic) judicial verdict of God (dikaiōsis) wherein the alien righteousness of Christ (iustitia aliena) is imputed (imputatio) to the believer, effecting a change of legal status rather than an immediate ontological transformation.",
    biblicalUsage: "Central to Pauline soteriology (Rom 3:21-26, 4:1-5, 5:1; Gal 2:16), contrasted with human works of Torah.",
    scriptureReferences: ['Genesis 15:6', 'Habakkuk 2:4', 'Romans 3:21-28', 'Romans 4:1-8', 'Galatians 2:16'],
    theologicalSignificance: "The material principle of the Reformation ('articulus stantis et cadentis ecclesiae').",
    sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.westminster, SOURCE_REGISTER.augsburg, SOURCE_REGISTER.logos_editorial],
    sourceIds: ['thayer', 'westminster', 'augsburg', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T10:00:00Z',
    updatedAt: '2026-09-18T10:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-justification',
        languageCode: 'bn',
        localHeadword: 'ধার্মিক গণ্যকরণ (Dharmik Ganyakaran)',
        definitionSimple: 'যীশু খ্রীষ্টে বিশ্বাসের মাধ্যমে ঈশ্বরের আদালতে পাপী মানুষকে নির্দোষ ও ধার্মিক বলে ঘোষণা করা।',
        definitionStudy: 'ঈশ্বরের অনুগ্রহের এক আইনি রায় যার মাধ্যমে খ্রীষ্টের ন্যায়পরায়ণতা বিশ্বাসীর উপর আরোপিত হয়।',
        definitionAcademic: 'সংস্কার আন্দোলনের প্রধান নীতি, যেখানে অভ্যন্তরীণ শুদ্ধির পূর্বে বাহ্যিক আইনি অবস্থানের পরিবর্তন ঘটে।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T10:00:00Z'
      }
    }
  },

  // 4. Logos
  {
    id: 'entry-logos',
    slug: 'logos',
    headwordEnglish: 'Logos',
    alternativeSpellings: ['The Word', 'The Divine Word'],
    pronunciationIpa: '/ˈlɒɡ.ɒs/',
    partOfSpeech: 'Noun',
    category: 'Christology',
    theologicalPaths: ['christology', 'trinity', 'biblical-greek', 'theology-proper'],
    definitionSimple: "Jesus Christ as the eternal, personal Word and revelation of God who became human to save us.",
    definitionStudy: "The second Person of the Holy Trinity, eternally generated by the Father, through whom the universe was created, who took on human flesh (incarnation) to reveal God and accomplish redemption.",
    definitionAcademic: "Johannine title synthesizing Hebrew 'Dabar Yahweh' (creative and prophetic utterance) with Hellenistic philosophical concepts of cosmic reason, radicalizing them into the historical hypostatic reality of the incarnate Son.",
    biblicalUsage: "John 1:1-18; 1 John 1:1; Revelation 19:13.",
    scriptureReferences: ['John 1:1-4', 'John 1:14', 'Colossians 1:15-17', 'Hebrews 1:1-3', 'Revelation 19:13'],
    theologicalSignificance: "Secures the eternal deity and pre-existence of Christ against Arian subordinationism.",
    sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.nicene_creed, SOURCE_REGISTER.logos_editorial],
    sourceIds: ['thayer', 'nicene_creed', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T10:00:00Z',
    updatedAt: '2026-09-18T10:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-logos',
        languageCode: 'bn',
        localHeadword: 'বাক্য (লোগোস) (Bakyo / Logos)',
        definitionSimple: 'ঈশ্বরের অনন্ত পুত্র যীশু যিনি বাক্যরূপে মাংসে অবতীর্ণ হয়ে আমাদের উদ্ধার করেছেন।',
        definitionStudy: 'যোহন লিখিত সুসমাচারে প্রকাশিত ত্রিত্বের দ্বিতীয় ব্যক্তি, সৃষ্টির মাধ্যম ও প্রকাশিত সত্য।',
        definitionAcademic: 'যোহনীয় খ্রীষ্টতত্ত্বের পরম ভিত্তি, যা অনন্ত ঈশ্বরত্বের সাথে ঐতিহাসিক অবতারের সংযোগ স্থাপন করে।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T10:00:00Z'
      }
    }
  },

  // 5. Kingdom of God
  {
    id: 'entry-kingdom-of-god',
    slug: 'kingdom-of-god',
    headwordEnglish: 'Kingdom of God',
    alternativeSpellings: ['Kingdom of Heaven', 'Basileia tou Theou'],
    pronunciationIpa: '/ˈkɪŋ.dəm əv ɡɒd/',
    partOfSpeech: 'Noun Phrase',
    category: 'Biblical Theology',
    theologicalPaths: ['kingdom-of-god', 'eschatology', 'new-testament-studies'],
    definitionSimple: "The sovereign rule and reign of God in human hearts and over all creation, begun in Jesus and fulfilled at His return.",
    definitionStudy: "The dynamic sovereign reign of God breaking into present history through the ministry, death, and resurrection of Jesus Christ, inaugurating the New Covenant age ('already') while awaiting ultimate consummation ('not yet').",
    definitionAcademic: "The central motif of Jesus' synoptic proclamation (basileia tou Theou), signifying the active exercise of divine kingship rather than a static geographic realm, exhibiting inaugurated eschatological tension.",
    biblicalUsage: "Dominates the Synoptic Gospels (Mark 1:15; Matt 6:33; Luke 17:20-21).",
    scriptureReferences: ['Psalm 145:11-13', 'Daniel 7:13-14', 'Matthew 6:33', 'Mark 1:14-15', 'Luke 17:20-21', 'Revelation 11:15'],
    theologicalSignificance: "Unifies biblical history from creation to new creation under God's righteous rule.",
    sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.schaff, SOURCE_REGISTER.logos_editorial],
    sourceIds: ['thayer', 'schaff', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T10:00:00Z',
    updatedAt: '2026-09-18T10:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-kingdom-of-god',
        languageCode: 'bn',
        localHeadword: 'ঈশ্বরের রাজ্য (Ishwarer Rajyo)',
        definitionSimple: 'সমগ্র সৃষ্টি ও মানব হৃদয়ের উপর ঈশ্বরের সার্বভৌম শাসন ও অধিকার।',
        definitionStudy: 'যীশু খ্রীষ্টের মাধ্যমে সূচিত ঈশ্বরের জীবন্ত রাজত্ব, যা অন্তিম দিনে পরিপূর্ণ মহিমায় প্রকাশিত হবে।',
        definitionAcademic: 'যীশুর সুসমাচার ঘোষণার কেন্দ্রীয় বিষয়, যা উপস্থিত বাস্তবতা এবং ভবিষ্যত পূর্ণতার মধ্যে অবস্থিত।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T10:00:00Z'
      }
    }
  },

  // 6. Atonement
  {
    id: 'entry-atonement',
    slug: 'atonement',
    headwordEnglish: 'Atonement',
    alternativeSpellings: ['Substitutionary Atonement', 'Hilasterion', 'Propitiation'],
    pronunciationIpa: '/əˈtoʊn.mənt/',
    partOfSpeech: 'Noun',
    category: 'Systematic Theology',
    theologicalPaths: ['soteriology', 'systematic-theology', 'christology'],
    definitionSimple: "Jesus Christ dying on the cross in our place to pay the penalty for our sins and bring us back into friendship with God.",
    definitionStudy: "The sacrificial, substitutionary work of Jesus Christ on the cross, whereby divine justice is satisfied, holy wrath is propitiated, sin is expiated, and reconciliation between holy God and sinful humanity is accomplished.",
    definitionAcademic: "The objective redemptive act of Christ fulfilling sacrificial typology through penal substitution (vicaria satisfactio), propitiating divine wrath (hilasterion), expiating guilt, and vanquishing demonic powers (Christus Victor).",
    biblicalUsage: "Leviticus 16 (Day of Atonement); Isaiah 53; Romans 3:25; 2 Corinthians 5:21; 1 John 2:2.",
    scriptureReferences: ['Leviticus 17:11', 'Isaiah 53:4-6', 'Romans 3:24-26', '2 Corinthians 5:21', 'Hebrews 9:11-14', '1 John 2:2'],
    theologicalSignificance: "Guarantees that salvation preserves divine holy justice while demonstrating infinite mercy.",
    sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.bdb, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
    sourceIds: ['thayer', 'bdb', 'westminster', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T10:00:00Z',
    updatedAt: '2026-09-18T10:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-atonement',
        languageCode: 'bn',
        localHeadword: 'প্রায়শ্চিত্ত (Prayashchitta)',
        definitionSimple: 'আমাদের পাপের শাস্তি নিজের উপর গ্রহণ করে ক্রুশে যীশুর আত্মত্যাগ ও ঈশ্বরের সাথে মিলন।',
        definitionStudy: 'পবিত্র ঈশ্বরের ন্যায়বিচার পূর্ণ করতে এবং পাপ মোচনের জন্য ক্রুশে খ্রীষ্টের প্রতিনিধিত্বমূলক আত্মাহুতি।',
        definitionAcademic: 'পাপের শাস্তি পরিশোধ ও ঈশ্বরের পবিত্র ক্রোধ প্রশমনের মাধ্যমে মানবজাতির পুনঃস্থাপন।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T10:00:00Z'
      }
    }
  },

  // 7. Trinity
  {
    id: 'entry-trinity',
    slug: 'trinity',
    headwordEnglish: 'Trinity',
    alternativeSpellings: ['Triune God', 'Holy Trinity', 'Trias'],
    pronunciationIpa: '/ˈtrɪn.ɪ.ti/',
    partOfSpeech: 'Noun',
    category: 'Theology Proper',
    theologicalPaths: ['trinity', 'theology-proper', 'systematic-theology', 'historical-theology'],
    definitionSimple: "There is only one true God, who eternally exists as three distinct Persons: the Father, the Son, and the Holy Spirit.",
    definitionStudy: "The Christian confession that the one undivided Godhead exists eternally in three co-equal, co-eternal Persons (hypostases/personae)—Father, Son, and Holy Spirit—sharing the identical divine essence (homoousios).",
    definitionAcademic: "Classical trinitarian monotheism articulated at Nicaea (325) and Constantinople (381): one divine essence (ousia/substantia) in three distinct subsisting relations (hypostases/personae), with perichoresis (mutual indwelling) and unified external operations (opera trinitatis ad extra indivisa sunt).",
    biblicalUsage: "Matthew 28:19; 2 Corinthians 13:14; John 1:1-18, 14:16-17; Ephesians 4:4-6.",
    scriptureReferences: ['Deuteronomy 6:4', 'Matthew 3:16-17', 'Matthew 28:19', '2 Corinthians 13:14', 'Ephesians 4:4-6', '1 Peter 1:2'],
    theologicalSignificance: "Defines the very nature of the Christian God against polytheism, unitarianism, and modalism.",
    sources: [SOURCE_REGISTER.nicene_creed, SOURCE_REGISTER.schaff, SOURCE_REGISTER.augsburg, SOURCE_REGISTER.logos_editorial],
    sourceIds: ['nicene_creed', 'schaff', 'augsburg', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T10:00:00Z',
    updatedAt: '2026-09-18T10:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-trinity',
        languageCode: 'bn',
        localHeadword: 'ত্রিত্ব / ত্রিয়েক ঈশ্বর (Trittwa / Triyek Ishwar)',
        definitionSimple: 'একমাত্র সত্য ঈশ্বর যিনি অনাদিকাল থেকে পিতা, পুত্র এবং পবিত্র আত্মা—এই তিন ব্যক্তিত্বে বিরাজমান।',
        definitionStudy: 'একই ঐশ্বরিক সত্ত্বায় সমান মহিমা ও অধিকারে চিরকাল বিরাজমান পিতা, পুত্র ও পবিত্র আত্মা।',
        definitionAcademic: 'নিসিয়া ও কনস্টান্টিনোপল বিশ্বাসনামায় সংজ্ঞায়িত খ্রীষ্টীয় ঈশ্বরতত্ত্বের মূল স্তম্ভ।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T10:00:00Z'
      }
    }
  },

  // 8. Faith
  {
    id: 'entry-faith',
    slug: 'faith',
    headwordEnglish: 'Faith',
    alternativeSpellings: ['Saving Faith', 'Pistis', 'Emunah'],
    pronunciationIpa: '/feɪθ/',
    partOfSpeech: 'Noun',
    category: 'Systematic Theology',
    theologicalPaths: ['soteriology', 'biblical-theology', 'biblical-greek'],
    definitionSimple: "Trusting wholeheartedly in God and believing His promises through Jesus Christ.",
    definitionStudy: "A supernatural gift of God comprising knowledge of biblical truth (notitia), intellectual assent to its veracity (assensus), and personal, wholehearted reliance upon Christ alone for salvation (fiducia).",
    definitionAcademic: "The instrumental cause of justification (causa instrumentalis), constituted in Reformed scholasticism by notitia, assensus, and fiducia, distinct from mere historical credence (fides historica) or miraculous faith.",
    biblicalUsage: "Habakkuk 2:4; Romans 1:17; Hebrews 11:1-6; Ephesians 2:8; James 2:14-26.",
    scriptureReferences: ['Habakkuk 2:4', 'Romans 1:17', 'Romans 10:17', 'Ephesians 2:8-9', 'Hebrews 11:1-6', 'James 2:17-26'],
    theologicalSignificance: "The sole empty hand by which the sinner receives Christ and His benefits ('Sola Fide').",
    sources: [SOURCE_REGISTER.thayer, SOURCE_REGISTER.bdb, SOURCE_REGISTER.westminster, SOURCE_REGISTER.logos_editorial],
    sourceIds: ['thayer', 'bdb', 'westminster', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T10:00:00Z',
    updatedAt: '2026-09-18T10:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-faith',
        languageCode: 'bn',
        localHeadword: 'বিশ্বাস (Bishwas)',
        definitionSimple: 'ঈশ্বরের প্রতিশ্রুতি ও যীশু খ্রীষ্টের উপর হৃদয়ের পূর্ণ নির্ভরতা ও আস্থা।',
        definitionStudy: 'ঐশ্বরিক সত্যের জ্ঞান, সম্মতি এবং পরিত্রাণের জন্য একমাত্র খ্রীষ্টের উপর পূর্ণ সমর্পণ।',
        definitionAcademic: 'ধার্মিক গণ্যকরণের একমাত্র মাধ্যম (Sola Fide), যা জ্ঞান, সম্মতি ও আস্থার সমন্বয়ে গঠিত।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T10:00:00Z'
      }
    }
  },

  // 9. Incarnation
  {
    id: 'entry-incarnation',
    slug: 'incarnation',
    headwordEnglish: 'Incarnation',
    alternativeSpellings: ['The Word Made Flesh', 'Ensarcosis'],
    pronunciationIpa: '/ˌɪn.kɑːrˈneɪ.ʃən/',
    partOfSpeech: 'Noun',
    category: 'Christology',
    theologicalPaths: ['christology', 'theology-proper', 'systematic-theology'],
    definitionSimple: "The incredible truth that the eternal Son of God became fully human in Jesus Christ without ceasing to be God.",
    definitionStudy: "The theological mystery wherein the eternal Second Person of the Trinity assumed a complete human nature (body and rational soul) into personal union with His divine nature, conceived by the Holy Spirit in the womb of the Virgin Mary.",
    definitionAcademic: "The hypostatic union (unio hypostatica) defined at Chalcedon (451 AD): two complete natures (divine and human) united in one person (hypostasis) without confusion, without change, without division, and without separation.",
    biblicalUsage: "John 1:14; Philippians 2:6-8; 1 Timothy 3:16; Hebrews 2:14-17.",
    scriptureReferences: ['Isaiah 7:14', 'Matthew 1:20-23', 'John 1:14', 'Philippians 2:5-11', 'Hebrews 2:14-18', '1 John 4:2'],
    theologicalSignificance: "Without the incarnation, genuine substitutionary atonement and bodily resurrection are impossible.",
    sources: [SOURCE_REGISTER.schaff, SOURCE_REGISTER.nicene_creed, SOURCE_REGISTER.logos_editorial],
    sourceIds: ['schaff', 'nicene_creed', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-incarnation',
        languageCode: 'bn',
        localHeadword: 'নররূপ ধারণ / অবতার (Incarnation / Dehadharon)',
        definitionSimple: 'ঈশ্বরের পুত্র যীশুর মানুষ হিসেবে পৃথিবীতে জন্মগ্রহণ করার অলৌকিক ঘটনা।',
        definitionStudy: 'পবিত্র আত্মার শক্তিতে গর্ভধারণের মাধ্যমে সম্পূর্ণ ঈশ্বর ও সম্পূর্ণ মানুষের একত্বে খ্রীষ্টের আগমন।',
        definitionAcademic: 'খালকেদনীয় বিশ্বাসনামায় সংজ্ঞায়িত "হাইপোস্ট্যাটিক ইউনিয়ন" (Hypostatic Union) তত্ত্বের মূল ভিত্তি।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 10. Sanctification
  {
    id: 'entry-sanctification',
    slug: 'sanctification',
    headwordEnglish: 'Sanctification',
    alternativeSpellings: ['Progressive Sanctification', 'Holiness of Life'],
    pronunciationIpa: '/ˌsæŋk.tɪ.fɪˈkeɪ.ʃən/',
    partOfSpeech: 'Noun',
    category: 'Systematic Theology',
    theologicalPaths: ['soteriology', 'moral-theology-ethics', 'systematic-theology'],
    definitionSimple: "The lifelong process by which God makes believers more like Jesus, turning them away from sin toward holy living.",
    definitionStudy: "The ongoing supernatural work of the Holy Spirit delivering justified believers from the pollution of sin, renewing their entire nature in the image of God, and enabling them to die unto sin and live unto righteousness.",
    definitionAcademic: "Distinct from positional justification (a singular forensic declaration), sanctification is moral and transformative (renovatio interior), exhibiting both definitive and progressive dimensions synergistically realized through prayer, Word, and sacraments.",
    biblicalUsage: "1 Thessalonians 4:3, 5:23; Romans 6:1-22; 2 Corinthians 3:18; Hebrews 12:14.",
    scriptureReferences: ['John 17:17', 'Romans 6:19-22', '1 Corinthians 6:11', '1 Thessalonians 4:3-7', '1 Thessalonians 5:23', 'Hebrews 12:14'],
    theologicalSignificance: "Demonstrates that saving grace never leaves the believer in unrepentant rebellion.",
    sources: [SOURCE_REGISTER.westminster, SOURCE_REGISTER.heidelberg, SOURCE_REGISTER.logos_editorial],
    sourceIds: ['westminster', 'heidelberg', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-sanctification',
        languageCode: 'bn',
        localHeadword: 'পবিত্রকরণ (Pabittrakaran)',
        definitionSimple: 'পবিত্র আত্মার মাধ্যমে বিশ্বাসীর পাপময় স্বভাবকে দূর করে খ্রীষ্টের মতো পবিত্র করে তোলার ধারাবাহিক প্রক্রিয়া।',
        definitionStudy: 'ধার্মিক গণ্যকৃত ব্যক্তির জীবনে পাপের ক্ষমতা ধ্বংস করে ঈশ্বরের প্রতিমূর্তিতে পুনর্গঠনের আত্মিক যাত্রা।',
        definitionAcademic: 'আইনি অবস্থানের পরিবর্তনের পর আত্মিক চরিত্র ও নৈতিক আচরণের ধারাবাহিক রূপান্তরের প্রক্রিয়া।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  }
];

export function getPilotBatch(): MasterEntry[] {
  return PILOT_BATCH_50;
}
`;

fs.writeFileSync(pilotBatchPath, scriptContent, 'utf-8');
console.log('Successfully wrote base pilot batch (1-10)');
