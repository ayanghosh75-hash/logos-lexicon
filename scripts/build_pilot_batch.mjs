import fs from 'fs';
import path from 'path';

const entries = [
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
    sourceKeys: ['thayer', 'bdb', 'westminster', 'logos_editorial'],
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
    sourceKeys: ['bdb', 'westminster', 'logos_editorial'],
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
    sourceKeys: ['thayer', 'westminster', 'augsburg', 'logos_editorial'],
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
    sourceKeys: ['thayer', 'nicene_creed', 'logos_editorial'],
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
    sourceKeys: ['thayer', 'schaff', 'logos_editorial'],
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
    sourceKeys: ['thayer', 'bdb', 'westminster', 'logos_editorial'],
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
    sourceKeys: ['nicene_creed', 'schaff', 'augsburg', 'logos_editorial'],
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
    sourceKeys: ['thayer', 'bdb', 'westminster', 'logos_editorial'],
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
    sourceKeys: ['schaff', 'nicene_creed', 'logos_editorial'],
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
    sourceKeys: ['westminster', 'heidelberg', 'logos_editorial'],
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
  },

  // 11. Redemption
  {
    id: 'entry-redemption',
    slug: 'redemption',
    headwordEnglish: 'Redemption',
    alternativeSpellings: ['Apolytrosis', 'Ransom'],
    pronunciationIpa: '/rɪˈdɛmp.ʃən/',
    partOfSpeech: 'Noun',
    category: 'Systematic Theology',
    theologicalPaths: ['soteriology', 'christology', 'biblical-theology'],
    definitionSimple: "Deliverance from the slavery of sin and death through the costly ransom price of Jesus Christ's blood.",
    definitionStudy: "The act of buying back or liberating fallen humanity from the bondage of sin, guilt, the curse of the Law, and satanic captivity through the payment of a ransom price, namely the precious blood of Jesus Christ.",
    definitionAcademic: "Soteriological category (apolytrosis / padah / ga'al) rooted in Israel's kinsman-redeemer (go'el) institutions and Greco-Roman manumission of slaves, signifying liberation purchased through Christ's vicarious death.",
    biblicalUsage: "Exodus 15:13; Ruth 4:1-12; Mark 10:45; Ephesians 1:7; Colossians 1:14; 1 Peter 1:18-19.",
    scriptureReferences: ['Exodus 15:13', 'Mark 10:45', 'Romans 3:24', 'Ephesians 1:7', 'Colossians 1:13-14', 'Titus 2:14', '1 Peter 1:18-19'],
    theologicalSignificance: "Secures the believer's absolute freedom from the dominion of darkness and legal condemnation.",
    sourceKeys: ['thayer', 'bdb', 'westminster', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-redemption',
        languageCode: 'bn',
        localHeadword: 'মুক্তি / রক্তমূল্যে মোচন (Muktī / Raktamūlye Mochan)',
        definitionSimple: 'যীশুর পবিত্র রক্তের মাধ্যমে পাপ ও মৃত্যুর দাসত্ব থেকে মূল্য দিয়ে কিনে মুক্ত করা।',
        definitionStudy: 'পাপের ঋণ ও শয়তানের অধীনতা থেকে মানুষকে উদ্ধার করতে খ্রীষ্টের জীবনকে মুক্তিপণ হিসেবে প্রদান।',
        definitionAcademic: 'দাসত্ব থেকে মুক্তির আইনি প্রক্রিয়া যা পুরাতন নিয়মের রক্তের বিনিময় এবং নূতন নিয়মের খ্রীষ্টীয় আত্মত্যাগে প্রতিফলিত।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 12. Reconciliation
  {
    id: 'entry-reconciliation',
    slug: 'reconciliation',
    headwordEnglish: 'Reconciliation',
    alternativeSpellings: ['Katallage', 'Peace with God'],
    pronunciationIpa: '/ˌrɛk.ənˌsɪl.iˈeɪ.ʃən/',
    partOfSpeech: 'Noun',
    category: 'Systematic Theology',
    theologicalPaths: ['soteriology', 'biblical-theology', 'systematic-theology'],
    definitionSimple: "The restoration of friendship and peace between God and human beings who were once separated as enemies by sin.",
    definitionStudy: "The change of relationship between God and humanity from divine enmity to covenantal peace, effected entirely by God through the cross of Jesus Christ, removing the judicial barrier of hostility.",
    definitionAcademic: "The objective removal of the status of alienation (katallagē) and ontological enmity between God and rebellious humanity, grounded solely in the propitiatory death of Christ and applied through the ministry of reconciliation.",
    biblicalUsage: "Romans 5:10-11; 2 Corinthians 5:18-20; Ephesians 2:14-16; Colossians 1:20-22.",
    scriptureReferences: ['Romans 5:10-11', '2 Corinthians 5:18-21', 'Ephesians 2:14-18', 'Colossians 1:19-22'],
    theologicalSignificance: "Establishes that salvation is relational communion and peace, not merely a sterile juridical transaction.",
    sourceKeys: ['thayer', 'westminster', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-reconciliation',
        languageCode: 'bn',
        localHeadword: 'মিলনসাধন / সন্ধি (Milansadhan / Sandhi)',
        definitionSimple: 'পাপের কারণে ঈশ্বরের সাথে তৈরি হওয়া শত্রুতার অবসান ঘটিয়ে শান্তি ও সৌহার্দ্যপূর্ণ সম্পর্কের পুনরুদ্ধার।',
        definitionStudy: 'ক্রুশে যীশুর আত্মত্যাগের মাধ্যমে ঈশ্বরের পবিত্র ক্রোধ ও মানুষের অপরাধ দূর করে পরম শান্তি স্থাপন।',
        definitionAcademic: 'বিচ্ছিন্নতার অপসারণ এবং ঐশ্বরিক ন্যায় ও প্রেমের মিলনে নবসৃষ্টির শান্তি প্রতিষ্ঠা।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 13. Regeneration
  {
    id: 'entry-regeneration',
    slug: 'regeneration',
    headwordEnglish: 'Regeneration',
    alternativeSpellings: ['New Birth', 'Born Again', 'Palingenesia'],
    pronunciationIpa: '/rɪˌdʒɛn.əˈreɪ.ʃən/',
    partOfSpeech: 'Noun',
    category: 'Systematic Theology',
    theologicalPaths: ['soteriology', 'pneumatology', 'systematic-theology'],
    definitionSimple: "Being born again spiritually by the Holy Spirit, receiving new spiritual life and a heart that loves God.",
    definitionStudy: "The sovereign, supernatural act of the Holy Spirit whereby spiritual life is instantaneously imparted to a spiritually dead soul, renewing the intellect, will, and affections so that the person freely embraces Christ.",
    definitionAcademic: "The monergistic divine act (palingenesia) preceding and enabling conscious repentance and saving faith in the ordo salutis, effecting radical heart-circumcision and spiritual resurrection from total depravity.",
    biblicalUsage: "Ezekiel 36:26-27; John 3:3-8; Titus 3:5; 1 Peter 1:3, 23; 1 John 3:9.",
    scriptureReferences: ['Ezekiel 36:25-27', 'John 3:3-8', '2 Corinthians 5:17', 'Ephesians 2:1-5', 'Titus 3:5', '1 Peter 1:3'],
    theologicalSignificance: "Affirms that fallen humans cannot initiate their own salvation without prior divine resuscitation.",
    sourceKeys: ['thayer', 'westminster', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-regeneration',
        languageCode: 'bn',
        localHeadword: 'পুনর্জন্ম / আত্মিক নবজন্ম (Punarjanma / Nabajanma)',
        definitionSimple: 'পবিত্র আত্মার শক্তিতে নতুন হৃদয় লাভ করে আত্মিকভাবে দ্বিতীয়বার জন্ম গ্রহণ করা।',
        definitionStudy: 'আত্মিকভাবে মৃত মানুষের মধ্যে পবিত্র আত্মা কর্তৃক নতুন জীবনের সৃষ্টি, যার ফলে সে খ্রীষ্টকে বিশ্বাস করতে পারে।',
        definitionAcademic: 'পরিত্রাণ শৃঙ্খলের প্রাথমিক সার্বভৌম স্তর, যা মানুষের ইচ্ছার স্বাধীন প্রতিক্রিয়া সৃষ্টির পূর্বশর্ত।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 14. Resurrection
  {
    id: 'entry-resurrection',
    slug: 'resurrection',
    headwordEnglish: 'Resurrection',
    alternativeSpellings: ['Bodily Resurrection', 'Anastasis'],
    pronunciationIpa: '/ˌrɛz.əˈrɛk.ʃən/',
    partOfSpeech: 'Noun',
    category: 'Christology',
    theologicalPaths: ['christology', 'eschatology', 'systematic-theology'],
    definitionSimple: "Jesus rising bodily from the dead on the third day, guaranteeing eternal life and future resurrection for all believers.",
    definitionStudy: "The historical, physical raising of Jesus Christ from the dead on the third day by the power of God, breaking the power of death and serving as the firstfruits of the bodily resurrection of believers at the consummation.",
    definitionAcademic: "The central eschatological event (anastasis nekron) validating Christ's divine Sonship and atonement, inaugurating the new creation within the continuum of spacetime, and assuring cosmic somatic transformation.",
    biblicalUsage: "Matthew 28; Mark 16; Luke 24; John 20-21; Acts 2:24-32; 1 Corinthians 15:1-58.",
    scriptureReferences: ['Psalm 16:10', 'Luke 24:36-43', 'John 11:25-26', 'Romans 1:4', 'Romans 8:11', '1 Corinthians 15:12-23', 'Philippians 3:20-21'],
    theologicalSignificance: "Without Christ's resurrection, the Christian faith is in vain and believers remain in their sins.",
    sourceKeys: ['thayer', 'nicene_creed', 'schaff', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-resurrection',
        languageCode: 'bn',
        localHeadword: 'পুনরুত্থান (Punarutthan)',
        definitionSimple: 'মৃত্যুর পর তৃতীয় দিনে যীশুর স্বশরীরে জীবিত হয়ে ওঠা এবং বিশ্বাসীদের ভবিষ্যৎ অনন্ত জীবনের নিশ্চয়তা।',
        definitionStudy: 'মৃত্যুর পরাভব ঘটিয়ে খ্রীষ্টের শারীরিক উত্থান, যা বিশ্বাসীদের ভবিষ্যৎ দৈহিক পুনরুত্থানের নিশ্চিত প্রমাণ।',
        definitionAcademic: 'খ্রীষ্টীয় বিশ্বাসের মৌলিক ভিত্তি, যা ঐতিহাসিক সত্যতার সাথে অনন্তকালের নবসৃষ্টিকে সংযুক্ত করে।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 15. Creation
  {
    id: 'entry-creation',
    slug: 'creation',
    headwordEnglish: 'Creation',
    alternativeSpellings: ['Creatio Ex Nihilo', 'Cosmic Creation'],
    pronunciationIpa: '/kriˈeɪ.ʃən/',
    partOfSpeech: 'Noun',
    category: 'Theology Proper',
    theologicalPaths: ['creation', 'theology-proper', 'old-testament-studies'],
    definitionSimple: "God making everything in heaven and on earth out of nothing by His powerful Word, declaring it very good.",
    definitionStudy: "The sovereign, free act of the Triune God whereby He brought the entire cosmos into existence out of nothing (creatio ex nihilo) in space and time for His glory, maintaining and sustaining all that He made.",
    definitionAcademic: "The foundational cosmological locus articulating the radical ontological distinction between the uncreated, transcendent Creator and contingent reality (creatura), repudiating dualism, pantheism, and emanationism.",
    biblicalUsage: "Genesis 1-2; Job 38-41; Psalm 33:6-9, 104; John 1:1-3; Colossians 1:16; Hebrews 11:3.",
    scriptureReferences: ['Genesis 1:1-31', 'Psalm 33:6-9', 'Isaiah 40:26-28', 'John 1:1-3', 'Colossians 1:16-17', 'Hebrews 11:3', 'Revelation 4:11'],
    theologicalSignificance: "Establishes God's ultimate ownership and sovereign lordship over all reality.",
    sourceKeys: ['bdb', 'westminster', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-creation',
        languageCode: 'bn',
        localHeadword: 'সৃষ্টি / সৃষ্টিতত্ত্ব (Srishti / Srishtitattwa)',
        definitionSimple: 'ঈশ্বর তাঁর জীবন্ত বাক্যের মাধ্যমে শূন্য থেকে সমগ্র মহাবিশ্ব ও সমস্ত প্রাণ সৃষ্টি করেছেন।',
        definitionStudy: 'পিতা, পুত্র ও পবিত্র আত্মার একক ইচ্ছায় মহাশূন্য থেকে বিশ্বব্রহ্মাণ্ডের উৎপত্তি ও সুরক্ষা।',
        definitionAcademic: 'সৃষ্টিকর্তা ও সৃষ্টির মধ্যকার অসীম মৌলিক পার্থক্যের সার্বজনীন ধর্মতাত্ত্বিক স্বীকৃতি (Creatio Ex Nihilo)।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 16. Eschatology
  {
    id: 'entry-eschatology',
    slug: 'eschatology',
    headwordEnglish: 'Eschatology',
    alternativeSpellings: ['Doctrine of the Last Things', 'Eschata'],
    pronunciationIpa: '/ˌɛs.kəˈtɒl.ə.dʒi/',
    partOfSpeech: 'Noun',
    category: 'Systematic Theology',
    theologicalPaths: ['eschatology', 'biblical-theology', 'systematic-theology'],
    definitionSimple: "The biblical study of final things: Christ's return, the final judgment, resurrection, and the new heaven and new earth.",
    definitionStudy: "The locus of Christian dogmatics treating the consummation of redemptive history, encompassing individual eschatology (death, intermediate state) and general eschatology (parousia, resurrection, judgment, eternal state).",
    definitionAcademic: "The study of the 'eschata' (last things) characterized by an inaugurated tension between the 'already' of Christ's first advent and the 'not yet' of cosmic redemption in the teleological fulfillment of God's redemptive purpose.",
    biblicalUsage: "Isaiah 65-66; Daniel 7-12; Matthew 24-25; 1 Corinthians 15; 1 Thessalonians 4-5; Revelation 19-22.",
    scriptureReferences: ['Isaiah 65:17', 'Matthew 24:30-31', '1 Corinthians 15:51-57', '1 Thessalonians 4:13-18', '2 Peter 3:10-13', 'Revelation 21:1-5'],
    theologicalSignificance: "Provides the believer with eternal hope, moral vigilance, and assurance that history marches toward God's victory.",
    sourceKeys: ['schaff', 'westminster', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-eschatology',
        languageCode: 'bn',
        localHeadword: 'অন্তিমতত্ত্ব / শেষবিচার বিদ্যা (Antimatattwa)',
        definitionSimple: 'জগৎ ও মানবজাতির শেষ পরিণতি, খ্রীষ্টের দ্বিতীয় আগমন ও নতুন পৃথিবীর বাইবেলীয় শিক্ষা।',
        definitionStudy: 'খ্রীষ্টের পুনরাগমন, শেষ বিচার, মৃতদের পুনরুত্থান এবং অনন্ত রাজ্যের প্রতিষ্ঠা সংক্রান্ত আলোচনা।',
        definitionAcademic: 'মানব ইতিহাসের চূড়ান্ত পরিণতি এবং নবসৃষ্টির ঐশ্বরিক প্রতিশ্রুতির পূর্ণতার পদ্ধতিগত অধ্যয়ন।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 17. Holy Spirit
  {
    id: 'entry-holy-spirit',
    slug: 'holy-spirit',
    headwordEnglish: 'Holy Spirit',
    alternativeSpellings: ['Holy Ghost', 'Ruach HaKodesh', 'Paraclete', 'Pneuma Hagion'],
    pronunciationIpa: '/ˈhoʊ.li ˈspɪr.ɪt/',
    partOfSpeech: 'Proper Noun',
    category: 'Pneumatology',
    theologicalPaths: ['pneumatology', 'trinity', 'biblical-theology'],
    definitionSimple: "The third Person of the Holy Trinity, who lives inside believers to guide, comfort, empower, and transform them.",
    definitionStudy: "The third distinct Person of the Triune Godhead, eternally proceeding from the Father (and the Son), of one substance, majesty, and glory with the Father and the Son, who inspired the Scriptures, regenerates the elect, and indwells believers.",
    definitionAcademic: "Pneumatological locus affirming the Spirit's distinct divine hypostasis and consubstantiality (homoousios), functioning as the vivifier and bond of divine love (vinculum caritatis), illuminating and sanctifying the covenant community.",
    biblicalUsage: "Genesis 1:2; Ezekiel 36:26-27; John 14:16-26, 16:7-14; Acts 1:8, 2:1-4; Romans 8:9-27; Galatians 5:16-25.",
    scriptureReferences: ['Genesis 1:2', 'Psalm 51:11', 'John 14:16-17', 'John 16:7-13', 'Acts 1:8', 'Romans 8:14-16', '1 Corinthians 12:4-11', 'Galatians 5:22-23'],
    theologicalSignificance: "Ensures that redemption accomplished by the Son is actively and effectively applied to the hearts of believers.",
    sourceKeys: ['nicene_creed', 'schaff', 'augsburg', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-holy-spirit',
        languageCode: 'bn',
        localHeadword: 'পবিত্র আত্মা (Pabittra Atma)',
        definitionSimple: 'ত্রিত্ব ঈশ্বরের তৃতীয় ব্যক্তি যিনি বিশ্বাসীদের হৃদয়ে বাস করে সান্ত্বনা, শক্তি ও নির্দেশনা দান করেন।',
        definitionStudy: 'পিতা ও পুত্রের সাথে সমান মহিমান্বিত ও অনন্ত ঈশ্বর, যিনি নতুন জীবন দান করেন ও বিশ্বাসীদের পরিচালনা করেন।',
        definitionAcademic: 'ত্রিত্ববাদী ধর্মতত্ত্বের তৃতীয় ঈশ্বরীয় ব্যক্তিত্ব, যিনি নিসিয়া বিশ্বাসনামায় "জীবনদাতা প্রভু" হিসেবে স্বীকৃত।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 18. Church
  {
    id: 'entry-church',
    slug: 'church',
    headwordEnglish: 'Church',
    alternativeSpellings: ['Body of Christ', 'Ekklesia', 'People of God'],
    pronunciationIpa: '/tʃɜːrtʃ/',
    partOfSpeech: 'Noun',
    category: 'Ecclesiology',
    theologicalPaths: ['ecclesiology', 'pastoral-theology', 'historical-theology'],
    definitionSimple: "The family of all true believers in Jesus Christ across all history, gathered together in local assemblies to worship and serve.",
    definitionStudy: "The covenant community of the redeemed, established by Christ and indwelt by the Holy Spirit, existing both invisibly (the totality of the elect known to God) and visibly (local congregations gathered for Word, sacrament, and discipline).",
    definitionAcademic: "Ecclesiological category (ekklesia / qahal) designating the messianic covenant assembly characterized historically by the four classical marks (one, holy, catholic, and apostolic) and Reformation marks (pure preaching of the Word, right administration of the sacraments, and church discipline).",
    biblicalUsage: "Matthew 16:18, 18:17; Acts 2:42-47; 1 Corinthians 12:12-27; Ephesians 1:22-23, 5:25-32; 1 Timothy 3:15.",
    scriptureReferences: ['Matthew 16:18', 'Acts 2:41-47', '1 Corinthians 12:12-27', 'Ephesians 1:22-23', 'Ephesians 4:11-16', 'Hebrews 10:24-25', '1 Peter 2:9-10'],
    theologicalSignificance: "The church is Christ's bride and bodily witness on earth through which God displays His multifaceted wisdom.",
    sourceKeys: ['nicene_creed', 'augsburg', 'westminster', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-church',
        languageCode: 'bn',
        localHeadword: 'মণ্ডলী / চার্চ (Mandali / Church)',
        definitionSimple: 'যীশু খ্রীষ্টে বিশ্বাসী সকল মানুষের আত্মিক সমাজ ও স্থানীয় উপাসনার মিলনস্থল।',
        definitionStudy: 'খ্রীষ্টের রক্তে কেনা বিশ্বাসীদের পবিত্র দেহ, যা বাক্যের প্রচার, সাক্রামেন্ট এবং আত্মিক শৃঙ্খলায় গঠিত।',
        definitionAcademic: 'এক, পবিত্র, সার্বজনীন এবং প্রেরিতীয় মণ্ডলীর রূপরেখা যা দৃশ্যমান ও অদৃশ্য উভয় বাস্তবতায় প্রতিফলিত।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 19. Salvation
  {
    id: 'entry-salvation',
    slug: 'salvation',
    headwordEnglish: 'Salvation',
    alternativeSpellings: ['Soteria', 'Deliverance', 'Eternal Life'],
    pronunciationIpa: '/sælˈveɪ.ʃən/',
    partOfSpeech: 'Noun',
    category: 'Soteriology',
    theologicalPaths: ['soteriology', 'biblical-theology', 'systematic-theology'],
    definitionSimple: "God delivering human beings from sin, death, and separation from Himself to give them eternal life and joy in Christ.",
    definitionStudy: "The comprehensive gracious work of the Triune God delivering sinners from the guilt, power, and ultimate presence of sin, bringing them into eternal covenant fellowship and wholeness in Jesus Christ.",
    definitionAcademic: "The multidimensional soteriological reality (sōtēria) exhibiting past justification, present sanctification, and future eschatological glorification, grounded solely in the trinitarian pactum salutis and realized through the work of Christ.",
    biblicalUsage: "Exodus 14:13; Psalm 3:8; Isaiah 12:2; Luke 19:9; Romans 1:16; Ephesians 2:8-10; Hebrews 2:3.",
    scriptureReferences: ['Exodus 14:13', 'Psalm 27:1', 'Isaiah 53:5', 'Luke 19:10', 'Romans 1:16', 'Ephesians 2:8-9', 'Philippians 2:12-13', 'Hebrews 7:25'],
    theologicalSignificance: "Salvation belongs entirely to the Lord; it demonstrates His infinite grace, wisdom, and sovereign power.",
    sourceKeys: ['thayer', 'bdb', 'westminster', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-salvation',
        languageCode: 'bn',
        localHeadword: 'পরিত্রাণ / উদ্ধার (Paritran / Uddhar)',
        definitionSimple: 'পাপের শাস্তি ও মৃত্যুর হাত থেকে ঈশ্বরের অনুগ্রহে প্রাপ্ত চিরন্তন মুক্তি ও নতুন জীবন।',
        definitionStudy: 'পাপের দোষ, ক্ষমতা এবং চূড়ান্ত পরিণতি থেকে খ্রীষ্টের মাধ্যমে মানুষের সম্পূর্ণ আত্মিক পুনরুদ্ধার।',
        definitionAcademic: 'ধার্মিক গণ্যকরণ, পবিত্রকরণ এবং মহিমাপ্রাপ্তির সম্পূর্ণ ধারাবাহিক ঐশ্বরিক পরিত্রাণ প্রক্রিয়া।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 20. Messiah
  {
    id: 'entry-messiah',
    slug: 'messiah',
    headwordEnglish: 'Messiah',
    alternativeSpellings: ['The Anointed One', 'Mashiach', 'Christos', 'Christ'],
    pronunciationIpa: '/məˈsaɪ.ə/',
    partOfSpeech: 'Proper Noun',
    category: 'Christology',
    theologicalPaths: ['christology', 'old-testament-studies', 'biblical-hebrew-aramaic'],
    definitionSimple: "The chosen King and Savior promised by God in the Old Testament, fulfilled completely in Jesus Christ.",
    definitionStudy: "The title of the promised Davidic Deliverer (Hebrew: Mashiach; Greek: Christos), anointed by God with the Holy Spirit to execute the three offices of Prophet, Priest, and King for the redemption of His people.",
    definitionAcademic: "Messianic christology tracing the prophetic trajectories of the Seed of the woman (Gen 3:15), the Prophet like Moses (Deut 18), the Davidic King (2 Sam 7), and the Suffering Servant (Isa 53), converging in Jesus of Nazareth.",
    biblicalUsage: "Psalm 2:2; Daniel 9:25-26; Matthew 16:16; Luke 4:18; John 1:41, 4:25-26; Acts 2:36.",
    scriptureReferences: ['2 Samuel 7:12-16', 'Psalm 2:1-12', 'Isaiah 61:1-2', 'Daniel 9:25-26', 'Matthew 16:16', 'Luke 24:25-27', 'John 1:41', 'Acts 18:28'],
    theologicalSignificance: "Identifies Jesus as the ultimate fulfillment of all divine covenant promises made to Israel.",
    sourceKeys: ['bdb', 'thayer', 'schaff', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-messiah',
        languageCode: 'bn',
        localHeadword: 'মশীহ / খ্রীষ্ট (Mashiha / Christ)',
        definitionSimple: 'পুরাতন নিয়মে প্রতিশ্রুত ঈশ্বরের অভিষিক্ত রাজা ও ত্রাণকর্তা, যিনি যীশুতে পূর্ণতা পেয়েছেন।',
        definitionStudy: 'পবিত্র আত্মায় অভিষিক্ত ভাববাদী, যাজক ও রাজা যিনি মানবজাতির অনন্ত মুক্তির জন্য আগমন করেছেন।',
        definitionAcademic: 'বাইবেলীয় ভাববাণীর কেন্দ্রবিন্দু, যা দাউদীয় চুক্তি ও আত্মত্যাগী সেবকের পরিচয়ে যীশুতে মূর্ত হয়েছে।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 21. Revelation
  {
    id: 'entry-revelation',
    slug: 'revelation',
    headwordEnglish: 'Revelation',
    alternativeSpellings: ['Divine Revelation', 'Apokalypsis'],
    pronunciationIpa: '/ˌrɛv.əˈleɪ.ʃən/',
    partOfSpeech: 'Noun',
    category: 'Bibliology',
    theologicalPaths: ['bibliology', 'theology-proper', 'hermeneutics'],
    definitionSimple: "God making Himself, His character, and His saving plans known to human beings.",
    definitionStudy: "The gracious self-disclosure of God to humanity, unveiling His nature, attributes, moral will, and redemptive intentions through nature and conscience (general revelation) and supremely through Scripture and Christ (special revelation).",
    definitionAcademic: "The epistemic foundation of Christian theology (apokalypsis / phanerōsis), rejecting human epistemological autonomy by maintaining that God can be known savingly only through His sovereign, condescending self-communication.",
    biblicalUsage: "Psalm 19:1-4; Romans 1:19-20; 1 Corinthians 2:10-12; Galatians 1:12; Hebrews 1:1-2.",
    scriptureReferences: ['Deuteronomy 29:29', 'Psalm 19:1-6', 'Romans 1:18-20', 'Ephesians 3:3-5', 'Hebrews 1:1-3', '2 Peter 1:20-21'],
    theologicalSignificance: "Without divine revelation, true theological knowledge is impossible and humans remain in spiritual darkness.",
    sourceKeys: ['thayer', 'westminster', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-revelation',
        languageCode: 'bn',
        localHeadword: 'প্রকাশিত বাক্য / ঐশ্বরিক প্রকাশ (Prakashita Bakyo / Prakash)',
        definitionSimple: 'ঈশ্বর নিজের পরিচয়, ইচ্ছা ও মুক্তির পরিকল্পনা মানুষের কাছে প্রকাশ করার ঘটনা।',
        definitionStudy: 'সৃষ্টি, বিবেক, ভাববাদী এবং চূড়ান্তভাবে যীশু খ্রীষ্টের মাধ্যমে ঈশ্বরের আত্ম-প্রকাশ।',
        definitionAcademic: 'খ্রীষ্টীয় জ্ঞানতত্ত্বের মূল ভিত্তি, যা প্রাকৃতিক ও বিশেষ প্রকাশের মাধ্যমে মানবজাতিকে সত্যের সন্ধান দেয়।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 22. Inspiration
  {
    id: 'entry-inspiration',
    slug: 'inspiration',
    headwordEnglish: 'Inspiration',
    alternativeSpellings: ['Biblical Inspiration', 'Theopneustos', 'God-Breathed'],
    pronunciationIpa: '/ˌɪn.spɪˈreɪ.ʃən/',
    partOfSpeech: 'Noun',
    category: 'Bibliology',
    theologicalPaths: ['bibliology', 'canon-and-manuscripts', 'hermeneutics'],
    definitionSimple: "The Holy Spirit guiding human biblical authors so that what they wrote is completely the true Word of God.",
    definitionStudy: "The supernatural influence of the Holy Spirit upon the human writers of Scripture, whereby their personal styles and vocabularies were employed to record God's authoritative, error-free truth in the original autographs.",
    definitionAcademic: "Plenary verbal inspiration (theopneustos), asserting that inspiration extends to the totality of Scripture and its specific words, without overriding human agency or creating mechanical dictation.",
    biblicalUsage: "2 Timothy 3:16; 2 Peter 1:20-21; Matthew 5:17-18; 1 Corinthians 2:13.",
    scriptureReferences: ['2 Samuel 23:2', 'Jeremiah 1:9', 'Matthew 5:18', '2 Timothy 3:16-17', '2 Peter 1:20-21'],
    theologicalSignificance: "Establishes the Bible as entirely trustworthy, divine truth rather than human religious philosophy.",
    sourceKeys: ['thayer', 'westminster', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-inspiration',
        languageCode: 'bn',
        localHeadword: 'ঐশ্বরিক প্রেরণা (Aishwārik Preronā)',
        definitionSimple: 'পবিত্র আত্মার নিয়ন্ত্রণে বাইবেলের লেখকদের ঈশ্বরের অভ্রান্ত সত্য লিপিবদ্ধ করার প্রক্রিয়া।',
        definitionStudy: 'পবিত্র আত্মার পরিচালনায় মানবীয় ব্যক্তিত্ব অক্ষুণ্ণ রেখে ঈশ্বরের নিজস্ব বাক্য লিপিবদ্ধকরণের প্রক্রিয়া।',
        definitionAcademic: 'বাইবেলের প্রতিটি শব্দের ঐশ্বরিক সত্যতা ও নির্ভরযোগ্যতার স্বীকৃতি (Theopneustos)।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 23. Authority of Scripture
  {
    id: 'entry-authority-of-scripture',
    slug: 'authority-of-scripture',
    headwordEnglish: 'Authority of Scripture',
    alternativeSpellings: ['Sola Scriptura', 'Biblical Inerrancy'],
    pronunciationIpa: '/əˈθɒr.ɪ.ti əv ˈskrɪp.tʃər/',
    partOfSpeech: 'Noun Phrase',
    category: 'Bibliology',
    theologicalPaths: ['bibliology', 'systematic-theology', 'historical-theology'],
    definitionSimple: "The Bible has the supreme, final right to guide what believers believe and how they live because it is God's Word.",
    definitionStudy: "The divine right and power of the canonical Scriptures to command belief and obedience, standing as the supreme and infallible court of appeal in all matters of Christian faith and practice.",
    definitionAcademic: "The formal principle of the Reformation ('Sola Scriptura'), establishing Scripture as the norma normans non normata (the ruling norm that is not itself ruled), possessing inherent divine authority independent of ecclesial validation.",
    biblicalUsage: "Psalm 119:89; Isaiah 8:20; Matthew 4:4; John 10:35; Acts 17:11.",
    scriptureReferences: ['Psalm 119:89-105', 'Isaiah 40:8', 'Matthew 4:4-10', 'John 10:35', 'Acts 17:11', 'Galatians 1:8'],
    theologicalSignificance: "Prevents human tradition, church councils, or individual subjective feelings from supplanting God's voice.",
    sourceKeys: ['westminster', 'augsburg', 'thirty_nine_articles', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-authority-of-scripture',
        languageCode: 'bn',
        localHeadword: 'শাস্ত্রের প্রামাণিকতা / কর্তৃত্ব (Shastrer Pramanikata)',
        definitionSimple: 'ঈশ্বরের বাক্য হিসেবে বাইবেল বিশ্বাস ও জীবনের সকল ক্ষেত্রে চূড়ান্ত এবং সর্বোচ্চ প্রামাণিক নির্দেশিকা।',
        definitionStudy: 'মণ্ডলী ও ব্যক্তিগত বিবেকের ঊর্ধ্বে শাস্ত্রের অনন্য অধিকার ও অভ্রান্ত শাসন কর্তৃত্ব।',
        definitionAcademic: 'সংস্কার আন্দোলনের আনুষ্ঠানিক নীতি (Sola Scriptura), যা ধর্মতত্ত্বের সর্বোচ্চ মানদণ্ড নির্ধারণ করে।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 24. Image of God
  {
    id: 'entry-image-of-god',
    slug: 'image-of-god',
    headwordEnglish: 'Image of God',
    alternativeSpellings: ['Imago Dei', 'Tselem Elohim'],
    pronunciationIpa: '/ˈɪm.ɪdʒ əv ɡɒd/',
    partOfSpeech: 'Noun Phrase',
    category: 'Theological Anthropology',
    theologicalPaths: ['anthropology', 'creation', 'moral-theology-ethics'],
    definitionSimple: "God creating human beings in His likeness with dignity, reason, morality, and the purpose of representing Him on earth.",
    definitionStudy: "The unique dignity bestowed on human beings created in God's likeness (substantive, relational, and functional), granting inherent value, moral agency, capacity for fellowship with God, and stewardship over creation.",
    definitionAcademic: "Theological anthropology category (imago Dei / tselem Elohim) damaged but not entirely obliterated by the Fall, restored and elevated through conformity to Christ, the true and consummate Image of God.",
    biblicalUsage: "Genesis 1:26-27, 9:6; 1 Corinthians 11:7; Colossians 3:10; James 3:9.",
    scriptureReferences: ['Genesis 1:26-28', 'Genesis 9:6', 'Psalm 8:3-8', '2 Corinthians 3:18', 'Colossians 1:15', 'Colossians 3:10', 'James 3:9'],
    theologicalSignificance: "Forms the sacred foundation for human rights, moral sanctity of life, and the purpose of existence.",
    sourceKeys: ['bdb', 'westminster', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-image-of-god',
        languageCode: 'bn',
        localHeadword: 'ঈশ্বরের প্রতিমূর্তি (Ishwarer Pratimurti)',
        definitionSimple: 'মানুষকে ঈশ্বরের সদৃশে সম্মান, নৈতিক বুদ্ধি ও আধ্যাত্মিক সম্পর্কের উদ্দেশ্যে সৃষ্টি করার গৌরব।',
        definitionStudy: 'সৃষ্টিতে মানুষের অনন্য মর্যাদা ও অবস্থান, যা সৃষ্টিকর্তার সাথে আত্মিক যোগাযোগ ও সৃষ্টিকে দেখাশোনার দায়িত্ব দেয়।',
        definitionAcademic: 'মানবজীবনের পবিত্রতা ও সহজাত মূল্যের আদি ধর্মতাত্ত্বিক স্তম্ভ (Imago Dei)।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 25. Sin
  {
    id: 'entry-sin',
    slug: 'sin',
    headwordEnglish: 'Sin',
    alternativeSpellings: ['Hamartia', 'Iniquity', 'Transgression'],
    pronunciationIpa: '/sɪn/',
    partOfSpeech: 'Noun',
    category: 'Hamartiology',
    theologicalPaths: ['hamartiology', 'anthropology', 'soteriology'],
    definitionSimple: "Any failure to obey God's holy commands, whether in thought, word, or deed, missing the mark of His glory.",
    definitionStudy: "Any lack of conformity unto, or transgression of, the holy moral law of God, encompassing original sin (inherited guilt and corruption from Adam) and actual sins committed in thoughts, words, desires, and actions.",
    definitionAcademic: "Hamartiological locus (hamartia / anomia / chata) signifying radical moral rebellion against divine sovereignty, missing the divine telos, incurring ontological defilement, legal guilt (reatus), and spiritual death.",
    biblicalUsage: "Genesis 3; Psalm 51:1-5; Romans 3:9-23, 5:12-21, 6:23; 1 John 3:4.",
    scriptureReferences: ['Genesis 3:1-19', 'Psalm 51:1-5', 'Isaiah 59:1-2', 'Romans 3:23', 'Romans 5:12', 'Romans 6:23', '1 John 3:4'],
    theologicalSignificance: "Reveals the universal need for a divine Savior, demonstrating humanity's total inability to save itself.",
    sourceKeys: ['thayer', 'bdb', 'westminster', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-sin',
        languageCode: 'bn',
        localHeadword: 'পাপ (Pāp)',
        definitionSimple: 'ঈশ্বরের আদেশ ও পবিত্র স্বভাবের বিপরীতে চিন্তা, কথা বা কাজের মাধ্যমে অবাধ্য হওয়া।',
        definitionStudy: 'ঈশ্বরের বিধান লঙ্ঘন ও পবিত্র উদ্দেশ্যের লক্ষ্যভ্রষ্ট হওয়া, যা আত্মিক ও অনন্ত মৃত্যুর কারণ।',
        definitionAcademic: 'মানবাত্মার সহজাত কলুষতা ও আইনি অপরাধ (Reatus), যা মানবজাতিকে ঈশ্বরের শত্রু করে তোলে।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 26. Repentance
  {
    id: 'entry-repentance',
    slug: 'repentance',
    headwordEnglish: 'Repentance',
    alternativeSpellings: ['Metanoia', 'Teshuvah', 'Repentance unto Life'],
    pronunciationIpa: '/rɪˈpɛn.təns/',
    partOfSpeech: 'Noun',
    category: 'Soteriology',
    theologicalPaths: ['soteriology', 'practical-theology', 'evangelism-discipleship'],
    definitionSimple: "Genuinely turning away from sin and turning toward God with a sincere desire to obey and follow Him.",
    definitionStudy: "An evangelical grace wherein a sinner, out of the sight and sense of the filthiness and odiousness of sin, and apprehension of God's mercy in Christ, with grief and hatred of sin turns from it unto God.",
    definitionAcademic: "Metanoia / teshuvah indicating a radical reorientation of the whole mind, affections, and will, fundamentally joined with saving faith as two sides of the single coin of conversion.",
    biblicalUsage: "1 Kings 8:47; Ezekiel 18:30-32; Matthew 3:2, 4:17; Luke 13:3, 5; Acts 2:38, 20:21; 2 Corinthians 7:9-10.",
    scriptureReferences: ['Psalm 51:17', 'Ezekiel 18:30-32', 'Matthew 4:17', 'Luke 15:7', 'Acts 2:38', 'Acts 17:30', '2 Corinthians 7:10'],
    theologicalSignificance: "Without genuine repentance, faith is a shallow intellectual assent that produces no spiritual fruit.",
    sourceKeys: ['thayer', 'bdb', 'westminster', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-repentance',
        languageCode: 'bn',
        localHeadword: 'মনোপরিবর্তন / অনুতাপ (Monoporibarton / Anutap)',
        definitionSimple: 'পাপের প্রতি আন্তরিক ঘৃণা নিয়ে মন ফিরিয়ে ঈশ্বরের দিকে ফিরে আসা ও তাঁর অনুগামী হওয়া।',
        definitionStudy: 'পাপের গ্লানি উপলব্ধি করে এবং খ্রীষ্টের ক্ষমার উপর নির্ভর করে সম্পূর্ণ জীবন ঈশ্বরের প্রতি সমর্পণ।',
        definitionAcademic: 'মানসিক ও আত্মিক আমূল রূপান্তর (Metanoia), যা সত্য বিশ্বাসের সাথে অবিচ্ছেদ্যভাবে যুক্ত।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 27. Adoption
  {
    id: 'entry-adoption',
    slug: 'adoption',
    headwordEnglish: 'Adoption',
    alternativeSpellings: ['Huiothesia', 'Sons of God'],
    pronunciationIpa: '/əˈdɒp.ʃən/',
    partOfSpeech: 'Noun',
    category: 'Soteriology',
    theologicalPaths: ['soteriology', 'biblical-theology', 'pastoral-theology'],
    definitionSimple: "God legally and lovingly welcoming justified believers into His own family as His dear sons and daughters.",
    definitionStudy: "An act of God's free grace in and for His only Son Jesus Christ, whereby all those that are justified are received into the number of the children of God, enjoy the liberties and privileges of sons, and are made heirs of promise.",
    definitionAcademic: "Soteriological status (huiothesia) transferring the justified sinner from the realm of wrath into the divine household, granting filial rights, the indwelling Spirit of adoption crying 'Abba, Father', and eschatological inheritance.",
    biblicalUsage: "Romans 8:14-17, 23; Galatians 4:4-7; Ephesians 1:5; 1 John 3:1-2.",
    scriptureReferences: ['John 1:12', 'Romans 8:14-17', 'Galatians 4:4-7', 'Ephesians 1:5', '1 John 3:1-2'],
    theologicalSignificance: "Reveals that God's grace does not stop at legal acquittal; it brings sinners into the warmest filial intimacy.",
    sourceKeys: ['thayer', 'westminster', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-adoption',
        languageCode: 'bn',
        localHeadword: 'পুত্রত্ব প্রদান / দত্তকপুত্র হিসেবে গ্রহণ (Putrattwa Prodan)',
        definitionSimple: 'ঈশ্বরের দ্বারা বিশ্বাসীকে নিজ পরিবারের সন্তান হিসেবে আইনি ও ভালোবাসার সম্পর্কে গ্রহণ করা।',
        definitionStudy: 'খ্রীষ্টে বিশ্বাসীদের ঈশ্বরের প্রিয় সন্তান ও অনন্ত উত্তরাধিকারী হিসেবে বরণ করার অপূর্ব অনুগ্রহ।',
        definitionAcademic: 'আইনি ও পারিবারিক মর্যাদার রূপান্তর, যা বিশ্বাসীকে পিতা ঈশ্বরের সাথে নিবিড় যোগসূত্র দেয়।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 28. Glorification
  {
    id: 'entry-glorification',
    slug: 'glorification',
    headwordEnglish: 'Glorification',
    alternativeSpellings: ['Consummation', 'Final Perfection'],
    pronunciationIpa: '/ˌɡlɔːr.ɪ.fɪˈkeɪ.ʃən/',
    partOfSpeech: 'Noun',
    category: 'Eschatology & Soteriology',
    theologicalPaths: ['soteriology', 'eschatology', 'systematic-theology'],
    definitionSimple: "The final, complete healing and transformation of believers at Christ's return, giving them immortal bodies free from sin.",
    definitionStudy: "The ultimate climax of the ordo salutis, wherein believers are delivered fully from the presence and effects of sin, their bodies resurrected in imperishable glory, and their souls made perfectly holy in the presence of God forever.",
    definitionAcademic: "The teleological consummation of redemption (doxazo), realizing the fullness of theosis/conformitas Christi in somatic resurrection and the beatific vision (visio Dei).",
    biblicalUsage: "Romans 8:17, 30; 1 Corinthians 15:42-54; 2 Corinthians 3:18; Philippians 3:20-21; 1 John 3:2.",
    scriptureReferences: ['Romans 8:18-30', '1 Corinthians 15:42-54', 'Philippians 3:20-21', 'Colossians 3:4', '1 John 3:2'],
    theologicalSignificance: "Guarantees that God's redemptive work will reach complete, flawless perfection without loss.",
    sourceKeys: ['thayer', 'westminster', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-glorification',
        languageCode: 'bn',
        localHeadword: 'মহিমাপ্রাপ্তি (Mohimaprapti)',
        definitionSimple: 'খ্রীষ্টের পুনরাগমনে বিশ্বাসীদের সম্পূর্ণ পাপমুক্ত হয়ে অমর ও মহিমান্বিত দেহ লাভ করা।',
        definitionStudy: 'পরিত্রাণ শৃঙ্খলের অন্তিম স্তর, যেখানে আত্মিক ও শারীরিক রূপান্তরের মাধ্যমে ঈশ্বরীয় মহিমা লাভ হয়।',
        definitionAcademic: 'সৃষ্ট জীবের পাপমুক্ত নিখুঁত পূর্ণতা এবং ঈশ্বরের প্রত্যক্ষ দর্শনে চিরকালীন অবস্থিতি।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 29. Ascension
  {
    id: 'entry-ascension',
    slug: 'ascension',
    headwordEnglish: 'Ascension',
    alternativeSpellings: ['Ascension of Christ', 'Analepsis'],
    pronunciationIpa: '/əˈsɛn.ʃən/',
    partOfSpeech: 'Noun',
    category: 'Christology',
    theologicalPaths: ['christology', 'new-testament-studies', 'systematic-theology'],
    definitionSimple: "Jesus returning bodily into heaven forty days after His resurrection to sit at the right hand of God the Father.",
    definitionStudy: "The historical departure of the risen Christ from earth to heaven in His glorified human body forty days after His resurrection, where He is enthroned at the Father's right hand as sovereign Lord and eternal High Priest.",
    definitionAcademic: "The exaltation locus (analepsis / exaltatio Christi) succeeding the state of humiliation, securing Christ's heavenly session (sessio ad dexteram Dei), sending of the Paraclete, and ongoing intercession.",
    biblicalUsage: "Psalm 68:18, 110:1; Luke 24:50-51; Acts 1:9-11; Ephesians 4:8-10; Hebrews 4:14, 9:24.",
    scriptureReferences: ['Psalm 110:1', 'Mark 16:19', 'Luke 24:50-53', 'Acts 1:9-11', 'Ephesians 1:20-22', 'Hebrews 1:3', 'Hebrews 9:24'],
    theologicalSignificance: "Demonstrates that a redeemed human nature is now enthroned in heaven at the right hand of God.",
    sourceKeys: ['nicene_creed', 'schaff', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-ascension',
        languageCode: 'bn',
        localHeadword: 'স্বর্গারোহণ (Swargarohon)',
        definitionSimple: 'পুনরুত্থানের চল্লিশ দিন পর যীশু খ্রীষ্টের সশরীরে স্বর্গে পিতার ডানপাশে মহিমায় ফিরে যাওয়া।',
        definitionStudy: 'পিতার দক্ষিণ পার্শ্বে খ্রীষ্টের সার্বভৌম রাজকীয় পদে আসীন হওয়া ও মধ্যস্থতাকারী হিসেবে উপস্থিতি।',
        definitionAcademic: 'খ্রীষ্টের উচ্চীকরণের অংশ যা তাঁর স্বর্গীয় রাজত্ব এবং পবিত্র আত্মার প্রেরণের পথ প্রস্তুত করে।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 30. Intercession
  {
    id: 'entry-intercession',
    slug: 'intercession',
    headwordEnglish: 'Intercession',
    alternativeSpellings: ['Heavenly Intercession', 'Paga', 'Enteuxis'],
    pronunciationIpa: '/ˌɪn.tərˈsɛʃ.ən/',
    partOfSpeech: 'Noun',
    category: 'Christology & Prayer',
    theologicalPaths: ['christology', 'prayer-spiritual-formation', 'pastoral-theology'],
    definitionSimple: "Praying on behalf of another person, supremely seen in Jesus praying for us before the Father.",
    definitionStudy: "The continuous priestly work of Jesus Christ in heaven appearing before the Father on behalf of believers, presenting His finished sacrifice and securing their preservation, pardon, and strength.",
    definitionAcademic: "The perpetual sacerdotal mediation (intercessio Christi) of the ascended High Priest, coupled with the internal intercession of the indwelling Spirit (groanings too deep for words), guaranteeing perseverance.",
    biblicalUsage: "Isaiah 53:12; Luke 22:31-32; Romans 8:26-27, 34; Hebrews 7:25; 1 John 2:1.",
    scriptureReferences: ['Isaiah 53:12', 'Romans 8:26-27', 'Romans 8:34', '1 Timothy 2:1', 'Hebrews 7:25', '1 John 2:1-2'],
    theologicalSignificance: "Gives believers enduring confidence that their salvation is kept by an eternal, praying Savior.",
    sourceKeys: ['thayer', 'westminster', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-intercession',
        languageCode: 'bn',
        localHeadword: 'মধ্যস্থতা / যাচ্ঞা (Madhyasthata / Yachna)',
        definitionSimple: 'অন্যের পক্ষে বিনতি প্রার্থনা করা, যা প্রধানত স্বর্গে পিতা ঈশ্বরের কাছে আমাদের পক্ষে যীশুর প্রার্থনা।',
        definitionStudy: 'পিতার সম্মুখে চিরজীবী প্রধান যাজক হিসেবে বিশ্বাসীদের সুরক্ষা ও ক্ষমার জন্য খ্রীষ্টের অবিরাম প্রার্থনা।',
        definitionAcademic: 'খ্রীষ্টীয় যাজকীয় পরিচর্যার অংশ, যা বিশ্বাসীদের আত্মিক স্থায়িত্ব ও অনন্ত নিরাপত্তার নিশ্চয়তা দেয়।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 31. Second Coming
  {
    id: 'entry-second-coming',
    slug: 'second-coming',
    headwordEnglish: 'Second Coming',
    alternativeSpellings: ['Parousia', 'Second Advent', 'Return of Christ'],
    pronunciationIpa: '/ˈsɛk.ənd ˈkʌm.ɪŋ/',
    partOfSpeech: 'Noun Phrase',
    category: 'Eschatology',
    theologicalPaths: ['eschatology', 'christology', 'new-testament-studies'],
    definitionSimple: "The visible, glorious return of Jesus Christ to judge the world, destroy evil, and establish His eternal reign.",
    definitionStudy: "The personal, bodily, visible, and triumphant return of our Lord Jesus Christ in power and great glory to defeat the demonic powers, judge the living and the dead, and consummate the kingdom of God.",
    definitionAcademic: "The Parousia (epiphaneia / apokalypsis) marking the terminal horizon of the present evil age, accompanied by the general resurrection, last judgment, and inauguration of the new heavens and new earth.",
    biblicalUsage: "Matthew 24:27-31; Acts 1:11; 1 Thessalonians 4:15-17; 2 Thessalonians 1:7-10; Titus 2:13; Revelation 19:11-16.",
    scriptureReferences: ['Matthew 24:30', 'Acts 1:11', '1 Thessalonians 4:16', 'Titus 2:13', 'Hebrews 9:28', 'Revelation 1:7', 'Revelation 22:20'],
    theologicalSignificance: "The blessed hope of the Church, proving that history will not end in futility but in Christ's absolute triumph.",
    sourceKeys: ['nicene_creed', 'schaff', 'westminster', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-second-coming',
        languageCode: 'bn',
        localHeadword: 'দ্বিতীয় আগমন / পুনরাগমন (Dwitiya Agamon)',
        definitionSimple: 'বিচার ও মুক্তির চূড়ান্ত পূর্ণতা দিতে মহিমার সাথে যীশু খ্রীষ্টের এই পৃথিবীতে সশরীরে পুনরায় আগমন।',
        definitionStudy: 'পাপের ধ্বংস, মৃতদের পুনরুত্থান এবং অনন্ত রাজ্যের প্রতিষ্ঠার লক্ষ্যে খ্রীষ্টের প্রকাশ্য আগমন।',
        definitionAcademic: 'খ্রীষ্টীয় আশার পরম কেন্দ্রবিন্দু (Parousia), যা মানব ইতিহাসের সমাপ্তি ও অনন্ত রাজত্বের সূচনা চিহ্নিত করে।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 32. Millennium
  {
    id: 'entry-millennium',
    slug: 'millennium',
    headwordEnglish: 'Millennium',
    alternativeSpellings: ['Chiliasm', 'Thousand-Year Reign'],
    pronunciationIpa: '/mɪˈlɛn.i.əm/',
    partOfSpeech: 'Noun',
    category: 'Eschatology',
    theologicalPaths: ['eschatology', 'historical-theology', 'hermeneutics'],
    definitionSimple: "The thousand-year period described in Revelation 20 during which Christ rules in righteousness and peace.",
    definitionStudy: "The theological concept derived from Revelation 20:1-6 referring to the thousand-year reign of Christ, understood variably across Christian history regarding its timing, nature, and relationship to the Parousia.",
    definitionAcademic: "Eschatological debate encompassing Premillennialism (historic and dispensational), Postmillennialism (optimistic gospel expansion), and Amillennialism (symbolic realization in the present church age), each interpreting apocalyptic genre differently.",
    biblicalUsage: "Psalm 72; Isaiah 11:6-9, 65:19-25; Zechariah 14; 1 Corinthians 15:24-28; Revelation 20:1-10.",
    scriptureReferences: ['Isaiah 11:1-9', 'Isaiah 65:17-25', '1 Corinthians 15:24-26', 'Revelation 20:1-7'],
    theologicalSignificance: "Reflects the longing for Christ's visible reign of righteousness and peace over creation.",
    sourceKeys: ['schaff', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-millennium',
        languageCode: 'bn',
        localHeadword: 'সহস্রাব্দ রাজত্ব (Sahasrabda Rajatwa)',
        definitionSimple: 'প্রকাশিত বাক্য ২০ অধ্যায়ে বর্ণিত খ্রীষ্টের এক হাজার বছরের ন্যায় ও শান্তির রাজত্ব।',
        definitionStudy: 'খ্রীষ্টের পুনরাগমন ও রাজত্ব সংক্রান্ত ঐতিহাসিক ও আত্মিক ব্যাখ্যার ভিন্ন ভিন্ন ঐতিহ্য।',
        definitionAcademic: 'প্রাক-সহস্রাব্দ, উত্তর-সহস্রাব্দ এবং অ-সহস্রাব্দবাদের তাত্ত্বিক বিতর্ক ও প্রত্যাশা।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 33. New Jerusalem
  {
    id: 'entry-new-jerusalem',
    slug: 'new-jerusalem',
    headwordEnglish: 'New Jerusalem',
    alternativeSpellings: ['Holy City', 'Heavenly Jerusalem'],
    pronunciationIpa: '/njuː dʒəˈruː.sə.ləm/',
    partOfSpeech: 'Proper Noun',
    category: 'Eschatology',
    theologicalPaths: ['eschatology', 'biblical-places', 'biblical-theology'],
    definitionSimple: "The glorious holy city descending from heaven where God dwells directly with His redeemed people forever.",
    definitionStudy: "The ultimate dwelling place of God and the redeemed community in the new heaven and new earth, depicted as a holy city and bride of the Lamb, characterized by the direct presence of God and the absence of death and sin.",
    definitionAcademic: "The apocalyptic architectural symbol of the perfected covenant community (Revelation 21-22; Hebrews 12:22), fulfilling the Garden of Eden and earthly Zion as the consummate cosmic holy of holies.",
    biblicalUsage: "Isaiah 65:18-19; Galatians 4:26; Hebrews 11:10, 12:22; Revelation 3:12, 21:1-27, 22:1-5.",
    scriptureReferences: ['Hebrews 11:10', 'Hebrews 12:22', 'Revelation 3:12', 'Revelation 21:1-27', 'Revelation 22:1-5'],
    theologicalSignificance: "Assures believers of an eternal home where God's presence brings everlasting joy and righteousness.",
    sourceKeys: ['schaff', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-new-jerusalem',
        languageCode: 'bn',
        localHeadword: 'নতুন যিরূশালেম (Natun Yerushalayem)',
        definitionSimple: 'স্বর্গ থেকে নেমে আসা পবিত্র নগরী যেখানে ঈশ্বর চিরকাল তাঁর উদ্ধারপ্রাপ্ত লোকদের সাথে বাস করবেন।',
        definitionStudy: 'পাপ ও মৃত্যুর সম্পূর্ণ বিলুপ্তির পর নবসৃষ্টিতে ঈশ্বরের প্রত্যক্ষ উপস্থিতি ও অনন্ত আনন্দের নগরী।',
        definitionAcademic: 'আগমী স্বর্গীয় নগরীর রূপক যা সম্পূর্ণ চুক্তিভিত্তিক মিলন ও মহিমার পূর্ণতা প্রদর্শন করে।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 34. Righteousness
  {
    id: 'entry-righteousness',
    slug: 'righteousness',
    headwordEnglish: 'Righteousness',
    alternativeSpellings: ['Dikaiosyne', 'Tsedeq', 'Justice of God'],
    pronunciationIpa: '/ˈraɪ.tʃəs.nəs/',
    partOfSpeech: 'Noun',
    category: 'Systematic Theology',
    theologicalPaths: ['soteriology', 'moral-theology-ethics', 'theology-proper'],
    definitionSimple: "Moral perfection and absolute fairness that conforms completely to God's holy character and law.",
    definitionStudy: "The perfect conformity of God's character and actions to His own moral purity, and the ethical standard demanded of moral creatures, fulfilled for believers by the imputed righteousness of Jesus Christ.",
    definitionAcademic: "Locus treating divine righteousness (iustitia Dei) as both retributive justice and redemptive covenant faithfulness, culminating in Pauline forensic declaration through Christ.",
    biblicalUsage: "Genesis 15:6; Psalm 11:7, 72:1-2; Jeremiah 23:6; Matthew 5:6, 6:33; Romans 1:17, 3:21-26, 10:3-4.",
    scriptureReferences: ['Genesis 15:6', 'Psalm 11:7', 'Jeremiah 23:6', 'Matthew 6:33', 'Romans 1:17', 'Romans 3:21-26', '2 Corinthians 5:21'],
    theologicalSignificance: "Establishes God's unbending moral standard and highlights our need for Christ's perfect righteousness.",
    sourceKeys: ['thayer', 'bdb', 'westminster', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-righteousness',
        languageCode: 'bn',
        localHeadword: 'ধার্মিকতা / ন্যায়পরায়ণতা (Dharmikata / Nyayporayonota)',
        definitionSimple: 'ঈশ্বরের পবিত্র চরিত্র ও ব্যবস্থার প্রতি নিখুঁত নৈতিক আনুগত্য ও ন্যায়নিষ্ঠতা।',
        definitionStudy: 'ঈশ্বরের স্বভাবজাত ন্যায়বিচার এবং খ্রীষ্টের মাধ্যমে বিশ্বাসীর উপর আরোপিত পবিত্র গুণ।',
        definitionAcademic: 'আইনি ও নৈতিক মানদণ্ড যা কেবল খ্রীষ্টের নিখুঁত আনুগত্যের মাধ্যমেই মানুষের পক্ষে অর্জন সম্ভব।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 35. Holiness
  {
    id: 'entry-holiness',
    slug: 'holiness',
    headwordEnglish: 'Holiness',
    alternativeSpellings: ['Qodesh', 'Hagiosyne', 'Sanctity'],
    pronunciationIpa: '/ˈhoʊ.li.nəs/',
    partOfSpeech: 'Noun',
    category: 'Theology Proper & Ethics',
    theologicalPaths: ['theology-proper', 'moral-theology-ethics', 'worship-liturgy'],
    definitionSimple: "God's absolute purity, uniqueness, and separation from all that is evil, common, or impure.",
    definitionStudy: "The foundational attribute of God denoting His absolute transcendence above creation and His spotless moral perfection, which He demands of and imparts to His covenant people.",
    definitionAcademic: "Ontological and ethical otherness (qadosh / hagios) wherein God is infinitely set apart from creaturely finitude and moral pollution, functioning as the archetype of all ethical renewal.",
    biblicalUsage: "Exodus 15:11; Leviticus 11:44-45, 19:2; Isaiah 6:3; 1 Peter 1:15-16; Revelation 4:8.",
    scriptureReferences: ['Exodus 15:11', 'Leviticus 19:2', 'Isaiah 6:3', 'Hebrews 12:14', '1 Peter 1:15-16', 'Revelation 4:8'],
    theologicalSignificance: "The supreme beauty of God's character and the ultimate goal for the lives of His people.",
    sourceKeys: ['thayer', 'bdb', 'westminster', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-holiness',
        languageCode: 'bn',
        localHeadword: 'পবিত্রতা (Pabittrata)',
        definitionSimple: 'পাপ ও মন্দতা থেকে ঈশ্বরের সম্পূর্ণ স্বাতন্ত্র্য এবং নিখুঁত নির্মল নৈতিক স্বভাব।',
        definitionStudy: 'ঈশ্বরের পরম মহিমাময় শুচিতা যা সৃষ্টির সীমা থেকে পৃথক এবং যা তিনি তাঁর লোকদের মধ্যে দেখতে চান।',
        definitionAcademic: 'ঐশ্বরিক সত্তার মৌলিক বৈশিষ্ট্য (Qodesh), যা বিশ্বাসীদের উপাসনা ও নৈতিক জীবনের ভিত্তি।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 36. Mercy
  {
    id: 'entry-mercy',
    slug: 'mercy',
    headwordEnglish: 'Mercy',
    alternativeSpellings: ['Eleos', 'Chesed', 'Compassion'],
    pronunciationIpa: '/ˈmɜːr.si/',
    partOfSpeech: 'Noun',
    category: 'Theology Proper & Ethics',
    theologicalPaths: ['theology-proper', 'soteriology', 'pastoral-theology'],
    definitionSimple: "God's tender pity and kindness holding back the punishment we deserve and helping us in our helplessness.",
    definitionStudy: "The compassionate disposition of God toward fallen creatures in their misery and helplessness, withholding deserved judgment and actively relieving their distress through Christ.",
    definitionAcademic: "Divine affective and efficacious attribute (eleos / rachamim) manifesting covenantal solidarity with the helpless, distinct from grace (which addresses guilt) by addressing creaturely misery.",
    biblicalUsage: "Exodus 34:6; Psalm 103:8-13; Lamentations 3:22-23; Matthew 9:13; Ephesians 2:4; Titus 3:5.",
    scriptureReferences: ['Exodus 34:6-7', 'Psalm 103:8-13', 'Lamentations 3:22-23', 'Ephesians 2:4-5', 'Titus 3:5', 'Hebrews 4:16'],
    theologicalSignificance: "Shows that God takes no pleasure in the destruction of sinners but delights to pardon and restore.",
    sourceKeys: ['thayer', 'bdb', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-mercy',
        languageCode: 'bn',
        localHeadword: 'দয়া / করুণা (Daya / Karuna)',
        definitionSimple: 'পাপের প্রাপ্য শাস্তি স্থগিত রেখে অসহায় মানুষের প্রতি ঈশ্বরের অসীম সহানুভূতি ও কৃপা।',
        definitionStudy: 'মানুষের দুর্দশা ও পাপময় অসহায়ত্ব দেখে বিচার স্থগিত রাখার ঐশ্বরিক মমত্ববোধ।',
        definitionAcademic: 'চুক্তিভিত্তিক বিশ্বস্ততার প্রকাশ (Chesed / Eleos), যা মানুষের দুর্দশা মোচনের চালিকাশক্তি।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 37. Peace
  {
    id: 'entry-peace',
    slug: 'peace',
    headwordEnglish: 'Peace',
    alternativeSpellings: ['Shalom', 'Eirene', 'Peace of God'],
    pronunciationIpa: '/piːs/',
    partOfSpeech: 'Noun',
    category: 'Biblical Theology',
    theologicalPaths: ['biblical-theology', 'moral-theology-ethics', 'pastoral-theology'],
    definitionSimple: "Wholeness, quiet assurance, and harmony with God, within ourselves, and with others through Jesus Christ.",
    definitionStudy: "The state of spiritual reconciliation and holistic well-being established by God through Christ's cross, encompassing peace with God, internal tranquility, and reconciled relationships within the community.",
    definitionAcademic: "Theological category (shalom / eirēnē) expressing relational harmony, cosmic wholeness, covenantal blessing, and liberation from eschatological terror.",
    biblicalUsage: "Numbers 6:24-26; Isaiah 9:6, 53:5; John 14:27; Romans 5:1; Philippians 4:6-7; Colossians 3:15.",
    scriptureReferences: ['Numbers 6:26', 'Isaiah 9:6', 'Isaiah 26:3', 'John 14:27', 'Romans 5:1', 'Philippians 4:7', 'Colossians 3:15'],
    theologicalSignificance: "Authentic peace is not the mere absence of conflict, but the presence of God's covenantal blessing in Christ.",
    sourceKeys: ['thayer', 'bdb', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-peace',
        languageCode: 'bn',
        localHeadword: 'শান্তি (Shanti)',
        definitionSimple: 'খ্রীষ্টের মাধ্যমে ঈশ্বরের সাথে মিলনজনিত মনের গভীর স্বস্তি, ঐক্য ও আত্মিক পূর্ণতা।',
        definitionStudy: 'পাপের কারণে সৃষ্ট শত্রুতার অবসান এবং আত্মিক ও সামাজিক জীবনে পরম ঐশ্বরিক সম্প্রীতি।',
        definitionAcademic: 'বাইবেলীয় শালোম (Shalom), যা কেবল সংঘাতহীনতা নয় বরং আত্মিক ও সামগ্রিক পূর্ণতার প্রতীক।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 38. Gospel
  {
    id: 'entry-gospel',
    slug: 'gospel',
    headwordEnglish: 'Gospel',
    alternativeSpellings: ['Good News', 'Euangelion'],
    pronunciationIpa: '/ˈɡɒs.pəl/',
    partOfSpeech: 'Noun',
    category: 'Soteriology & Missiology',
    theologicalPaths: ['soteriology', 'evangelism-discipleship', 'missiology'],
    definitionSimple: "The joyful good news that Jesus Christ died for our sins and rose again to offer free salvation to all who believe.",
    definitionStudy: "The good news of God's sovereign grace announced to the world, proclaiming that through the life, substitutionary death, and bodily resurrection of Jesus Christ, sinners are forgiven and brought into God's kingdom by faith.",
    definitionAcademic: "The apostolic kerygma (euangelion) announcing the historical accomplishment of cosmic redemption in Christ, serving as the power of God for salvation (dynamis Theou) to everyone who believes.",
    biblicalUsage: "Isaiah 52:7; Mark 1:1, 14-15; Romans 1:1-4, 16-17; 1 Corinthians 15:1-4; Galatians 1:6-9.",
    scriptureReferences: ['Isaiah 52:7', 'Mark 1:14-15', 'Romans 1:16', '1 Corinthians 15:1-4', 'Galatians 1:6-9', 'Ephesians 1:13'],
    theologicalSignificance: "The exclusive, non-negotiable message entrusted to the Church for the rescue of the lost world.",
    sourceKeys: ['thayer', 'westminster', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-gospel',
        languageCode: 'bn',
        localHeadword: 'সুসমাচার (Susamāchār)',
        definitionSimple: 'যীশুর ক্রুশারোপণ ও পুনরুত্থানের মাধ্যমে পাপ থেকে মুক্তির পরম আনন্দের বার্তা।',
        definitionStudy: 'পাপীদের জন্য খ্রীষ্টের আত্মত্যাগ এবং বিশ্বাস দ্বারা বিনামূল্যে পরিত্রাণের সার্বজনীন সুসংবাদ।',
        definitionAcademic: 'প্রেরিতীয় ঘোষণার মূল কথা (Euangelion), যা বিশ্বাসীদের জন্য ঈশ্বরের পরিত্রাণের পরাক্রম।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 39. Baptism
  {
    id: 'entry-baptism',
    slug: 'baptism',
    headwordEnglish: 'Baptism',
    alternativeSpellings: ['Holy Baptism', 'Baptisma'],
    pronunciationIpa: '/ˈbæp.tɪ.zəm/',
    partOfSpeech: 'Noun',
    category: 'Sacraments & Ordinances',
    theologicalPaths: ['sacraments-ordinances', 'ecclesiology', 'historical-theology'],
    definitionSimple: "A sacred Christian ceremony using water in the name of the Trinity, symbolizing washing away of sins and new life in Christ.",
    definitionStudy: "A sacrament or ordinance of the New Testament ordained by Jesus Christ, washing with water in the name of the Father, Son, and Holy Spirit as a sign and seal of the covenant of grace, ingrafting into Christ, and new life.",
    definitionAcademic: "Initiatory covenant rite (baptisma) signifying identification with Christ in His death, burial, and resurrection, with varied modes (immersion, pouring, sprinkling) and subjects (believer vs pedobaptism) reflecting differing ecclesiological commitments.",
    biblicalUsage: "Matthew 28:19; Mark 16:16; Acts 2:38, 8:36-38, 16:31-33; Romans 6:3-4; 1 Peter 3:21.",
    scriptureReferences: ['Matthew 28:19', 'Acts 2:38', 'Romans 6:3-4', '1 Corinthians 12:13', 'Galatians 3:27', '1 Peter 3:21'],
    theologicalSignificance: "Visibly unites the believer to the visible church and declares public allegiance to the Lord Jesus.",
    sourceKeys: ['thayer', 'westminster', 'augsburg', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-baptism',
        languageCode: 'bn',
        localHeadword: 'বাপ্তিস্ম / জলসংস্কার (Baptisma / Jal-sangskar)',
        definitionSimple: 'পিতার, পুত্রের ও পবিত্র আত্মার নামে জলে স্নানের মাধ্যমে পাপমোচন ও খ্রীষ্টের সাথে মিলনের চিহ্ন।',
        definitionStudy: 'খ্রীষ্টের আদেশে প্রতিষ্ঠিত পবিত্র সাক্রামেন্ট, যা তাঁর সাথে মৃত্যু ও নতুন জীবনের আত্মিক অঙ্গীকার।',
        definitionAcademic: 'মণ্ডলীভুক্তির সূচনাপর্বীয় সাক্রামেন্ট যা বিশ্বাসীদের দৃশ্যমান সমাজের অংশ করে তোলে।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 40. Lord's Supper
  {
    id: 'entry-lords-supper',
    slug: 'lords-supper',
    headwordEnglish: "Lord's Supper",
    alternativeSpellings: ['Eucharist', 'Holy Communion', 'Breaking of Bread'],
    pronunciationIpa: '/lɔːrdz ˈsʌp.ər/',
    partOfSpeech: 'Noun Phrase',
    category: 'Sacraments & Ordinances',
    theologicalPaths: ['sacraments-ordinances', 'worship-liturgy', 'historical-theology'],
    definitionSimple: "The sacred meal of bread and wine shared by believers to remember Christ's death and celebrate fellowship with Him.",
    definitionStudy: "A sacrament or ordinance instituted by Jesus Christ in bread and wine, representing His broken body and shed blood, observed by the Church in remembrance of Him until He comes.",
    definitionAcademic: "Sacramental locus (Eucharistia / Koinonia) debated across church history (transubstantiation, consubstantiation, spiritual presence, memorialism), embodying covenant renewal and eschatological foretaste of the Lamb's wedding feast.",
    biblicalUsage: "Matthew 26:26-29; Mark 14:22-25; Luke 22:14-20; 1 Corinthians 10:16-17, 11:23-29.",
    scriptureReferences: ['Matthew 26:26-29', 'Luke 22:19-20', '1 Corinthians 10:16-17', '1 Corinthians 11:23-29'],
    theologicalSignificance: "Nourishes believers spiritually and proclaims Christ's sacrificial death until His return.",
    sourceKeys: ['thayer', 'westminster', 'augsburg', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-lords-supper',
        languageCode: 'bn',
        localHeadword: 'প্রভুর ভোজ / পবিত্র সমভাগ (Probhur Bhoj)',
        definitionSimple: 'রুটি ও আঙ্গুররসের মাধ্যমে খ্রীষ্টের আত্মত্যাগ স্মরণ ও আত্মিক সহভাগিতার পবিত্র ভোজ।',
        definitionStudy: 'ক্রুশের আত্মত্যাগের স্মরণ এবং খ্রীষ্টের পুনরাগমন পর্যন্ত বিশ্বাসীদের আত্মিক পুষ্টির পবিত্র মাধ্যম।',
        definitionAcademic: 'ইউক্যারিস্টিক মিলন যা পুরাতন নিয়মের নিস্তারপর্বের পূর্ণতা ও খ্রীষ্টে নবচুক্তির নিশ্চিত প্রতীক।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 41. Worship
  {
    id: 'entry-worship',
    slug: 'worship',
    headwordEnglish: 'Worship',
    alternativeSpellings: ['Proskynesis', 'Shachah', 'Divine Worship', 'Latreia'],
    pronunciationIpa: '/ˈwɜːr.ʃɪp/',
    partOfSpeech: 'Noun & Verb',
    category: 'Practical Theology',
    theologicalPaths: ['worship-liturgy', 'biblical-theology', 'prayer-spiritual-formation'],
    definitionSimple: "Giving honor, praise, adoration, and humble obedience to God because He alone is worthy.",
    definitionStudy: "The reverent, heartfelt response of created beings attributing supreme worth, honor, and glory to the Triune God, expressed in corporate assemblies through praise, prayer, hearing the Word, and in daily holy living.",
    definitionAcademic: "Loxological response (shachah / proskynesis / latreia) due exclusively to God, grounded in His divine perfections and redemptive deeds, structured biblically by the Regulative or Normative principles.",
    biblicalUsage: "Exodus 20:3-5; Psalm 95:6, 96:9; Matthew 4:10; John 4:23-24; Romans 12:1-2; Revelation 4:10-11.",
    scriptureReferences: ['Exodus 20:3-5', 'Psalm 29:2', 'Psalm 95:6', 'Matthew 4:10', 'John 4:23-24', 'Romans 12:1-2', 'Revelation 4:11'],
    theologicalSignificance: "The chief end of man: to glorify God and enjoy Him forever.",
    sourceKeys: ['thayer', 'bdb', 'westminster', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-worship',
        languageCode: 'bn',
        localHeadword: 'উপাসনা / আরাধনা (Upāsanā / Ārādhanā)',
        definitionSimple: 'ঈশ্বরের অনন্য মহিমা ও উপযুক্ততার কারণে হৃদয়ের ভক্তি ও শ্রদ্ধায় তাঁর স্তুতি করা।',
        definitionStudy: 'পবিত্র আত্মা ও সত্যে ঈশ্বরের গুণকীর্তন এবং আত্মোৎসর্গের মাধ্যমে জীবনের প্রতিটি ক্ষেত্রে তাঁর গৌরব করা।',
        definitionAcademic: 'মানব সৃষ্টির চূড়ান্ত উদ্দেশ্য (Soli Deo Gloria), যা সামগ্রিক আনুগত্য ও ভক্তিতে মূর্ত হয়।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 42. Prayer
  {
    id: 'entry-prayer',
    slug: 'prayer',
    headwordEnglish: 'Prayer',
    alternativeSpellings: ['Proseuche', 'Tephillah', 'Communion with God'],
    pronunciationIpa: '/prɛər/',
    partOfSpeech: 'Noun',
    category: 'Practical Theology',
    theologicalPaths: ['prayer-spiritual-formation', 'pastoral-theology', 'practical-theology'],
    definitionSimple: "Talking with God in loving conversation—praising Him, thanking Him, confessing sins, and asking for help.",
    definitionStudy: "An offering up of our desires unto God, for things agreeable to His will, in the name of Christ, with confession of our sins, and thankful acknowledgment of His mercies.",
    definitionAcademic: "Pneumatologically enabled covenantal dialogue (tephillah / proseuchē), mediated solely through Christ's intercession, combining adoration, confession, thanksgiving, and supplication (ACTS).",
    biblicalUsage: "1 Samuel 1:12-15; Psalm 5:1-3, 62:8; Matthew 6:5-15; Philippians 4:6-7; 1 Thessalonians 5:17; James 5:16.",
    scriptureReferences: ['Psalm 5:3', 'Matthew 6:5-15', 'Philippians 4:6-7', 'Colossians 4:2', '1 Thessalonians 5:17', 'James 5:16'],
    theologicalSignificance: "Demonstrates the believer's absolute dependence upon God and fosters deep personal intimacy with the Father.",
    sourceKeys: ['thayer', 'bdb', 'westminster', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-prayer',
        languageCode: 'bn',
        localHeadword: 'প্রার্থনা (Prārthanā)',
        definitionSimple: 'ঈশ্বরের সাথে হৃদয়ের কথা বলা—তাঁর প্রশংসা করা, ধন্যবাদ দেওয়া ও সাহায্যের জন্য আবেদন করা।',
        definitionStudy: 'খ্রীষ্টের নামে ঈশ্বরের ইচ্ছানুযায়ী মনের আকাঙ্ক্ষা নিবেদন এবং অপরাধ স্বীকারপূর্বক কৃপা যাচ্ঞা।',
        definitionAcademic: 'চুক্তিভিত্তিক আত্মিক মিলন ও নির্ভরতার প্রকাশ যা বিশ্বাসীর দৈনন্দিন জীবনের শ্বাস-প্রশ্বাস।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 43. Sabbath
  {
    id: 'entry-sabbath',
    slug: 'sabbath',
    headwordEnglish: 'Sabbath',
    alternativeSpellings: ['Shabbat', 'Lord’s Day', 'Day of Rest'],
    pronunciationIpa: '/ˈsæb.əθ/',
    partOfSpeech: 'Noun',
    category: 'Biblical Theology & Ethics',
    theologicalPaths: ['biblical-festivals', 'old-testament-studies', 'moral-theology-ethics'],
    definitionSimple: "A weekly day set apart by God for holy rest, worship, and refreshing from earthly labor.",
    definitionStudy: "The creation ordinance and covenant sign whereby one day in seven is consecrated unto God for physical rest, corporate worship, deeds of mercy, and anticipating the eternal rest of the people of God.",
    definitionAcademic: "Theological pattern (shabbat / sabbaton) rooted in God's creation rest (Gen 2:2-3), codified in the Decalogue (Exod 20:8-11), fulfilled in Christ's finished work, and celebrated on the first day of the week (the Lord's Day).",
    biblicalUsage: "Genesis 2:2-3; Exodus 20:8-11; Isaiah 58:13-14; Mark 2:27-28; Hebrews 4:9-11.",
    scriptureReferences: ['Genesis 2:2-3', 'Exodus 20:8-11', 'Isaiah 58:13-14', 'Mark 2:27-28', 'Hebrews 4:9-10'],
    theologicalSignificance: "Reminds humanity that life does not consist merely of labor, pointing toward eternal resting in Christ.",
    sourceKeys: ['bdb', 'thayer', 'westminster', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-sabbath',
        languageCode: 'bn',
        localHeadword: 'বিশ্রামবার / সাব্বাথ (Bishrambar / Sabbath)',
        definitionSimple: 'সপ্তাহের একটি দিন যা ঈশ্বর তাঁর উপাসনা ও কাজের ক্লান্তি থেকে বিশ্রামের জন্য পৃথক করেছেন।',
        definitionStudy: 'সৃষ্টিতে প্রতিষ্ঠিত ও দশ আজ্ঞায় বিধিবদ্ধ পবিত্র দিন যা খ্রীষ্টের শান্তিতে বিশ্বাসীদের বিশ্রামের প্রতীক।',
        definitionAcademic: 'স্রষ্টার বিশ্রামের অনুকরণে প্রতিষ্ঠিত চুক্তিভিত্তিক নির্দেশ যা অনন্ত আত্মিক বিশ্রামের পূর্বরূপ।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 44. Law
  {
    id: 'entry-law',
    slug: 'law',
    headwordEnglish: 'Law',
    alternativeSpellings: ['Torah', 'Nomos', 'Moral Law', 'Commandments'],
    pronunciationIpa: '/lɔː/',
    partOfSpeech: 'Noun',
    category: 'Biblical Theology & Ethics',
    theologicalPaths: ['old-testament-studies', 'moral-theology-ethics', 'hermeneutics'],
    definitionSimple: "God's holy rules and instructions revealed in Scripture to guide right living and show our need for a Savior.",
    definitionStudy: "The revealed moral will and statutes of God, functioning historically in Israel through moral, civil, and ceremonial codes, exposing human sinfulness, and directing believers in righteous conduct.",
    definitionAcademic: "Theological category (Torah / nomos) functioning in Reformed theology through threefold use: usus civilis (restraining evil), usus elenchticus/pedagogicus (convicting of sin and driving to Christ), and usus didacticus/tertius (guiding sanctified living).",
    biblicalUsage: "Exodus 20; Deuteronomy 5; Psalm 19:7-11, 119; Matthew 5:17-20; Romans 7:7-12; Galatians 3:19-24.",
    scriptureReferences: ['Exodus 20:1-17', 'Psalm 19:7-11', 'Matthew 5:17-18', 'Romans 3:20', 'Romans 7:12', 'Galatians 3:24', '1 Timothy 1:8'],
    theologicalSignificance: "Upholds God's absolute holiness, reveals our helplessness, and acts as a tutor leading to Christ.",
    sourceKeys: ['bdb', 'thayer', 'westminster', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-law',
        languageCode: 'bn',
        localHeadword: 'ব্যবস্থা / তোরাহ (Byabasthā / Torah)',
        definitionSimple: 'ঈশ্বরের পবিত্র বিধি ও আদেশসমূহ যা পাপ প্রকাশ করে এবং খ্রীষ্টের কাছে পৌঁছানোর পথ দেখায়।',
        definitionStudy: 'পাপের দোষ উদঘাটনকারী এবং ধার্মিক জীবনযাপনের জন্য ঈশ্বর প্রদত্ত নৈতিক ও চুক্তিভিত্তিক বিধান।',
        definitionAcademic: 'নৈতিক, ধর্মীয় ও নাগরিক নির্দেশিকার সামগ্রিক রূপ যা সংস্কারবাদী ধর্মতত্ত্বে ত্রিবিধ উদ্দেশ্যে ব্যবহৃত।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 45. Prophecy
  {
    id: 'entry-prophecy',
    slug: 'prophecy',
    headwordEnglish: 'Prophecy',
    alternativeSpellings: ['Prophetic Word', 'Nebuah', 'Propheteia'],
    pronunciationIpa: '/ˈprɒf.ə.si/',
    partOfSpeech: 'Noun',
    category: 'Biblical Theology',
    theologicalPaths: ['old-testament-studies', 'new-testament-studies', 'hermeneutics'],
    definitionSimple: "Speaking forth God's true message under the Holy Spirit's guidance, often including foretelling future events.",
    definitionStudy: "The declaration of divine truth spoken or written by authorized spokespersons (prophets) moved by the Holy Spirit, delivering covenantal warnings, promises, and predictions centered upon Jesus Christ.",
    definitionAcademic: "Prophetic utterance (nebu'ah / prophēteia) functioning both as forthtelling (forthright ethical proclamation to contemporaries) and foretelling (eschatological anticipation of redemptive consummation in Christ).",
    biblicalUsage: "Deuteronomy 18:15-22; Isaiah 7:14, 53; Jeremiah 1:4-10; Luke 24:25-27; 2 Peter 1:20-21; Revelation 1:3.",
    scriptureReferences: ['Deuteronomy 18:18-22', 'Isaiah 53:1-12', 'Amos 3:7', 'Luke 24:27', '2 Peter 1:20-21', 'Revelation 19:10'],
    theologicalSignificance: "Authenticates Scripture's divine authorship through the flawless fulfillment of predicted history in Christ.",
    sourceKeys: ['bdb', 'thayer', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-prophecy',
        languageCode: 'bn',
        localHeadword: 'ভাববাণী (Bhābbānī)',
        definitionSimple: 'পবিত্র আত্মার নির্দেশে ঈশ্বরের বার্তা ও ভবিষ্যতের ঘটনা মানুষের কাছে স্পষ্ট করে ঘোষণা করা।',
        definitionStudy: 'চুক্তিভিত্তিক সতকর্তা এবং খ্রীষ্টের আগমন ও উদ্ধারকার্য সংক্রান্ত ঐশ্বরিক ভবিষ্যৎবাণী।',
        definitionAcademic: 'ঐশ্বরিক প্রকাশের প্রাচীন মাধ্যম যা সমসাময়িক নীতিশিক্ষা ও ভবিষ্যৎ উদ্ধারকার্যের রূপরেখা দেয়।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 46. Sacrificial System
  {
    id: 'entry-sacrificial-system',
    slug: 'sacrificial-system',
    headwordEnglish: 'Sacrificial System',
    alternativeSpellings: ['Old Testament Sacrifices', 'Zebach', 'Thysia'],
    pronunciationIpa: '/ˌsæk.rɪˈfɪʃ.əl ˈsɪs.təm/',
    partOfSpeech: 'Noun Phrase',
    category: 'Biblical Theology',
    theologicalPaths: ['old-testament-studies', 'soteriology', 'biblical-festivals'],
    definitionSimple: "The Old Testament offerings of animals and grain ordained by God to foreshadow Jesus Christ's once-for-all sacrifice.",
    definitionStudy: "The divinely instituted system of ritual offerings in the Mosaic covenant (burnt, sin, guilt, grain, and peace offerings) designed to teach the holiness of God, the gravity of sin, and the necessity of vicarious bloodshed.",
    definitionAcademic: "Typological sacrificial economy (korban / zebach / thysia) exhibiting expiation, propitiation, and covenant fellowship, serving as an ineffective shadow until fulfilled by Christ's once-for-all sacrifice (Hebrews 9-10).",
    biblicalUsage: "Leviticus 1-7, 16; Hebrews 9:11-28, 10:1-14.",
    scriptureReferences: ['Leviticus 1:1-4', 'Leviticus 16:1-34', 'Leviticus 17:11', 'Hebrews 9:22', 'Hebrews 10:1-14'],
    theologicalSignificance: "Visually demonstrates that without the shedding of blood there is no forgiveness of sins.",
    sourceKeys: ['bdb', 'thayer', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-sacrificial-system',
        languageCode: 'bn',
        localHeadword: 'উৎসর্গ প্রণালী / বলিদান ব্যবস্থা (Utsarga Pranali)',
        definitionSimple: 'পাপের ক্ষমার জন্য পুরাতন নিয়মে পশু বলিদানের বিধান যা ক্রুশে যীশুর চরম বলিদানের প্রতীক।',
        definitionStudy: 'পাপমোচন ও ঈশ্বরের সাথে সহভাগিতা বজায় রাখার জন্য মোশির মাধ্যমে প্রদত্ত বলিদান নির্দেশিকা।',
        definitionAcademic: 'খ্রীষ্টের কালভরি ক্রুশের চূড়ান্ত আত্মাহুতির পূর্বাভাসদাতা ছায়াস্বরূপ ব্যবস্থা।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 47. Priesthood
  {
    id: 'entry-priesthood',
    slug: 'priesthood',
    headwordEnglish: 'Priesthood',
    alternativeSpellings: ['Priesthood of Believers', 'Kohen', 'Hiereus'],
    pronunciationIpa: '/ˈpriːst.hʊd/',
    partOfSpeech: 'Noun',
    category: 'Biblical & Practical Theology',
    theologicalPaths: ['old-testament-studies', 'christology', 'ecclesiology'],
    definitionSimple: "Mediating between God and people, fulfilled in Jesus our Great High Priest, and shared by all believers in prayer and service.",
    definitionStudy: "The holy office appointed by God to represent people before God in offering sacrifices and prayers, fulfilled supremely in the high priesthood of Jesus Christ, and extended to the universal priesthood of all believers.",
    definitionAcademic: "Sacerdotal office (kehunnah / hierōsyne) operating in Aaron's lineage and perfected in the eternal order of Melchizedek, democratized in the Reformation doctrine of the royal priesthood (1 Peter 2:9).",
    biblicalUsage: "Exodus 28; Leviticus 8-9; Psalm 110:4; Hebrews 4:14-16, 7:1-28; 1 Peter 2:5, 9; Revelation 1:6.",
    scriptureReferences: ['Exodus 28:1', 'Psalm 110:4', 'Hebrews 4:14-16', 'Hebrews 7:23-28', '1 Peter 2:5-9', 'Revelation 1:6'],
    theologicalSignificance: "Secures direct access to the throne of grace for every believer without needing earthly human intermediaries.",
    sourceKeys: ['bdb', 'thayer', 'westminster', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-priesthood',
        languageCode: 'bn',
        localHeadword: 'যাজকপদ / যাজকত্ব (Yājakpad)',
        definitionSimple: 'ঈশ্বর ও মানুষের মধ্যে মধ্যস্থতার পবিত্র দায়িত্ব, যা খ্রীষ্টে পূর্ণ এবং বিশ্বাসীদের প্রার্থনায় প্রসারিত।',
        definitionStudy: 'বলিদান ও প্রার্থনার মাধ্যমে ঈশ্বরের উপস্থিতি নিবেদনকারী পবিত্র পদ, যা খ্রীষ্টে মহিমান্বিত হয়েছে।',
        definitionAcademic: 'মেলকীষেদকের ক্রমে খ্রীষ্টের অনন্ত যাজকত্ব এবং বিশ্বাসীদের সার্বজনীন রাজকীয় যাজকত্ব।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 48. Providence
  {
    id: 'entry-providence',
    slug: 'providence',
    headwordEnglish: 'Providence',
    alternativeSpellings: ['Divine Providence', 'Pronoia'],
    pronunciationIpa: '/ˈprɒv.ɪ.dəns/',
    partOfSpeech: 'Noun',
    category: 'Theology Proper',
    theologicalPaths: ['theology-proper', 'systematic-theology', 'pastoral-theology'],
    definitionSimple: "God's continuous, loving care and sovereign control over all creatures, events, and circumstances in the universe.",
    definitionStudy: "God's works of providence are His most holy, wise, and powerful preserving and governing all His creatures, and all their actions, directing all things to their appointed ends for His glory.",
    definitionAcademic: "Theological locus (providentia Dei / pronoia) comprising preservation (conservatio), concurrence (concursus), and government (gubernatio), rejecting deistic detachment, fatalistic determinism, and unguided randomness.",
    biblicalUsage: "Genesis 50:20; Job 38-41; Psalm 104; Matthew 10:29-31; Romans 8:28; Ephesians 1:11.",
    scriptureReferences: ['Genesis 50:20', 'Psalm 104:10-30', 'Matthew 10:29-31', 'Romans 8:28', 'Ephesians 1:11', 'Colossians 1:17'],
    theologicalSignificance: "Gives believers deep comfort that no tragedy or circumstance is outside of God's sovereign, redeeming care.",
    sourceKeys: ['westminster', 'heidelberg', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-providence',
        languageCode: 'bn',
        localHeadword: 'ঐশ্বরিক পরিচালনা / রক্ষণাবেক্ষণ (Aishwārik Porichālanā)',
        definitionSimple: 'মহাবিশ্ব ও মানবজীবনের সকল ঘটনার উপর ঈশ্বরের সার্বভৌম নিয়ন্ত্রণ ও সদয় তত্ত্বাবধান।',
        definitionStudy: 'সমগ্র সৃষ্টিকে টিকিয়ে রাখা ও তার সমস্ত কাজকে ঈশ্বরের অনন্ত গৌরবের লক্ষ্যে পরিচালিত করা।',
        definitionAcademic: 'রক্ষণ, সহযোগিতা ও শাসনের ঐশ্বরিক ধারাবাহিকতা (Providentia), যা অদৃষ্টবাদের বিপরীত।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 49. Theodicy
  {
    id: 'entry-theodicy',
    slug: 'theodicy',
    headwordEnglish: 'Theodicy',
    alternativeSpellings: ['Problem of Evil', 'Vindication of God'],
    pronunciationIpa: '/θiːˈɒd.ɪ.si/',
    partOfSpeech: 'Noun',
    category: 'Theology Proper & Apologetics',
    theologicalPaths: ['contemporary-theological-questions', 'apologetics', 'theology-proper'],
    definitionSimple: "Explaining how God can be completely all-loving and all-powerful while evil and suffering still exist.",
    definitionStudy: "The defense of God's goodness, justice, and omnipotence in the face of the painful reality of evil, pain, and innocent suffering in the created world.",
    definitionAcademic: "Philosophical and theological defense (theos + dikē) addressing the trilemma of divine goodness, divine omnipotence, and the existence of malum physicum and malum morale, anchored biblically in the cross of Christ.",
    biblicalUsage: "Job 38-42; Habakkuk 1-3; Luke 13:1-5; Romans 8:18-25; 2 Corinthians 4:16-18; Revelation 21:4.",
    scriptureReferences: ['Job 40:1-5', 'Habakkuk 3:17-19', 'Romans 8:18-28', '2 Corinthians 4:17', 'Revelation 21:4'],
    theologicalSignificance: "Vindicates God's character against accusations of cruelty or incompetence, pointing to the Cross and final resurrection.",
    sourceKeys: ['schaff', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-theodicy',
        languageCode: 'bn',
        localHeadword: 'ঐশ্বরিক ন্যায়সাধন / দুঃখকষ্টের সমস্যা (Theodicy / Dukkher Somoshya)',
        definitionSimple: 'জগতে দুঃখ ও অন্যায়ের মাঝে ঈশ্বরের মঙ্গলময়তা ও সর্বশক্তিমান চরিত্রের সামঞ্জস্য ও সমর্থন।',
        definitionStudy: 'অন্যায় ও বেদনার উপস্থিতিতে ঈশ্বরের ন্যায়পরায়ণতা ও প্রেমের তাত্বিক ও বাইবেলীয় যুক্তি।',
        definitionAcademic: 'ঈশ্বরতত্ত্ব ও আত্মপক্ষ সমর্থনের এক গভীর ক্ষেত্র যা ক্রুশ ও পুনরুত্থানের আলোয় উত্তর খোঁজে।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  },

  // 50. General and Special Revelation
  {
    id: 'entry-general-and-special-revelation',
    slug: 'general-and-special-revelation',
    headwordEnglish: 'General and Special Revelation',
    alternativeSpellings: ['Twofold Revelation', 'Natural and Supernatural Revelation'],
    pronunciationIpa: '/ˈdʒɛn.ər.əl ənd ˈspɛʃ.əl ˌrɛv.əˈleɪ.ʃən/',
    partOfSpeech: 'Noun Phrase',
    category: 'Bibliology',
    theologicalPaths: ['bibliology', 'apologetics', 'theology-proper'],
    definitionSimple: "God speaking generally to all people through creation and conscience, and savingly through Scripture and Jesus Christ.",
    definitionStudy: "The theological distinction between God's universal self-disclosure through creation and human conscience (general revelation, sufficient to leave humans without excuse) and His specific, redemptive self-disclosure in Scripture and Christ (special revelation, imparting saving knowledge).",
    definitionAcademic: "Epistemological bifurcation between revelatio generalis (rendered non-saving through human suppression of truth in unrighteousness) and revelatio specialis (saving, propositional, and redemptive-historical, culminating in the incarnate Word and inscripturated canon).",
    biblicalUsage: "Psalm 19:1-14; Romans 1:18-32, 2:14-16; 2 Timothy 3:15-17; Hebrews 1:1-2.",
    scriptureReferences: ['Psalm 19:1-11', 'Romans 1:18-21', 'Romans 2:14-15', '2 Timothy 3:15-17', 'Hebrews 1:1-3'],
    theologicalSignificance: "Establishes human accountability before God while affirming the absolute indispensability of Scripture and the Gospel.",
    sourceKeys: ['westminster', 'heidelberg', 'logos_editorial'],
    author: 'Rev. Ayan Kumar Ghosh',
    approvalStatus: 'Theologically reviewed',
    publicationStatus: 'Published',
    evidenceStatus: 'Strongly supported',
    versionNumber: 1,
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-09-18T11:00:00Z',
    translations: {
      bn: {
        masterEntryId: 'entry-general-and-special-revelation',
        languageCode: 'bn',
        localHeadword: 'সাধারণ ও বিশেষ প্রকাশ (Sadharan O Bishesh Prakash)',
        definitionSimple: 'সৃষ্টি ও বিবেকের মাধ্যমে সাধারণ প্রকাশ এবং বাইবেল ও যীশুর মাধ্যমে পরিত্রাণকারী বিশেষ প্রকাশ।',
        definitionStudy: 'সৃষ্টিতে প্রতিফলিত ঈশ্বরের সনাতন শক্তি ও মহিমা এবং শাস্ত্রে বিধিবদ্ধ আত্মিক উদ্ধারের সুনির্দিষ্ট জ্ঞান।',
        definitionAcademic: 'খ্রীষ্টীয় জ্ঞানতত্ত্বের মৌলিক বিভাজন (General vs Special Revelation), যা মুক্তির জন্য শাস্ত্রের অপরিহার্যতা প্রমাণ করে।',
        approvalStatus: 'Theologically reviewed',
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: '2026-09-18T11:00:00Z'
      }
    }
  }
];

// Generate TypeScript
const itemsStr = entries.map(e => {
  const sourcesStr = e.sourceKeys.map(k => `SOURCE_REGISTER.${k}`).join(', ');
  const sourceIdsStr = JSON.stringify(e.sourceKeys);
  
  // Clone and remove sourceKeys
  const { sourceKeys, ...entryData } = e;
  const jsonStr = JSON.stringify(entryData, null, 2);
  
  // Inject sources and sourceIds before the closing bracket of entry object
  const lastBraceIndex = jsonStr.lastIndexOf('}');
  const modifiedJson = jsonStr.slice(0, lastBraceIndex).trimEnd() +
    `,\n  sources: [${sourcesStr}],\n  sourceIds: ${sourceIdsStr}\n}`;
    
  return modifiedJson;
}).join(',\n\n')
  // unquote keys and SOURCE_REGISTER references
  .replace(/"sources": \[(.*?)\]/g, 'sources: [$1]')
  .replace(/"sourceIds":/g, 'sourceIds:')
  .replace(/"([a-zA-Z0-9_]+)":/g, '$1:');

const tsOutput = `import { MasterEntry } from './types';
import { SOURCE_REGISTER } from './sourceRegister';

export const PILOT_BATCH_50: MasterEntry[] = [
${itemsStr}
];

export function getPilotBatch(): MasterEntry[] {
  return PILOT_BATCH_50;
}
`;

const targetFile = path.resolve('lib/db/pilotBatch50.ts');
fs.writeFileSync(targetFile, tsOutput, 'utf-8');
console.log(`Successfully generated ${entries.length} pilot batch entries at ${targetFile}`);
