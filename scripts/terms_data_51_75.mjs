// scripts/terms_data_51_75.mjs

export const TERMS_51_75 = [
  // 51. Patristics
  {
    id: "entry-patristics",
    slug: "patristics",
    headwordEnglish: "Patristics",
    alternativeSpellings: ["Patrology", "Early Church Fathers"],
    pronunciationIpa: "/pəˈtrɪs.tɪks/",
    partOfSpeech: "Noun",
    category: "Historical Theology",
    theologicalPaths: ["historical-theology", "church-history", "creeds-and-confessions"],
    definitionSimple: "The historical and theological study of the early Christian church fathers who defended, clarified, and transmitted Christian doctrine from the post-apostolic era through the early ecumenical councils.",
    definitionStudy: "The academic discipline investigating the life, writings, exegetical practices, and dogmatic formulations of Christian theologians from c. AD 100 to AD 787, encompassing Apostolic, Ante-Nicene, and Post-Nicene periods.",
    definitionAcademic: "A major branch of historical theology focused on the literary corpus, doctrinal synthesis, and hermeneutical trajectories of the patres ecclesiae. It charts the emergence of trinitarian and christological orthodoxy against heterodox challenges.",
    biblicalUsage: "Directly examines the earliest post-apostolic reception, defense, and canonical recognition of the New Testament scriptures (2 Tim 2:2; Jude 3).",
    scriptureReferences: ["2 Timothy 2:2", "Jude 1:3", "Acts 20:28-31", "Hebrews 13:7"],
    historicalDevelopment: "Subdivided into Apostolic Fathers, Apologists, Alexandrian and Antiochene schools, and the Cappadocian and Latin fathers.",
    theologicalSignificance: "Secured canonical boundaries and articulates ecumenical trinitarian and christological orthodoxy.",
    majorInterpretivePositions: {
      issue: "The authority of patristic consensus (consensus patrum) relative to Sola Scriptura.",
      biblicalEvidence: "Apostolic tradition (2 Thess 2:15) vs supreme biblical authority (2 Tim 3:16).",
      historicalBackground: "Reformation re-assessment of patristic authority as ministerial rather than magisterial.",
      positions: [
        { name: "Ministerial Patristic Authority", description: "Early fathers are highly valued guides subordinate to Scripture.", traditions: ["Reformed", "Lutheran", "Presbyterian"] },
        { name: "Sacred Tradition Continuity", description: "Patristic consensus is an inspired living continuation of Pentecost.", traditions: ["Eastern Orthodox"] },
        { name: "Magisterial Tradition", description: "Unanimous patristic testimony reflects authentic apostolic tradition governed by Rome.", traditions: ["Roman Catholic"] }
      ]
    },
    denominationalDistinctions: [
      { tradition: "Eastern Orthodox", positionSummary: "Considers the Fathers indispensable for biblical exegesis and theosis." },
      { tradition: "Protestant", positionSummary: "Appeals to the Fathers to vindicate apostolic continuity against novel medieval dogma while maintaining Sola Scriptura." }
    ],
    originalLanguages: [
      {
        language: "Biblical Greek",
        scriptUnicode: "πατήρ",
        lemma: "pater",
        transliteration: "patēr",
        pronunciation: "pah-TEER",
        partOfSpeech: "Noun, Masculine",
        semanticRange: "Father, forefather, elder leader, spiritual mentor",
        strongsNumber: "G3962",
        biblicalOccurrencesCount: 413,
        importantOccurrences: ["1 Cor 4:15", "1 John 2:13"],
        translationCautions: "Distinguish between biological paternity and honorific spiritual paternity in early church usage.",
        sources: ["Thayer's Greek-English Lexicon"],
        verified: true
      }
    ],
    sourceKeys: ["nicene_creed", "westminster", "logos_editorial"],
    translations: {
      bn: {
        masterEntryId: "entry-patristics",
        languageCode: "bn",
        localHeadword: "পিতৃতত্ত্ববিদ্যা (Patristics)",
        definitionSimple: "প্রাচীন মণ্ডলীর পিতা ও ধর্মতত্ত্ববিদদের জীবন ও শিক্ষার ঐতিহাসিক অধ্যয়ন।",
        definitionStudy: "খ্রীষ্টীয় প্রথম শতাব্দী থেকে অষ্টম শতাব্দী পর্যন্ত প্রাচীন ধর্মতাত্ত্বিকদের শাস্ত্রব্যাখ্যা ও সত্যের প্রতিরক্ষা সংক্রান্ত গবেষণা।",
        definitionAcademic: "ঐতিহাসিক ধর্মতত্ত্বের একটি প্রধান শাখা যা প্রেরিতীয় যুগ-পরবর্তী বিশ্বাস ও মতবাদের বিকাশ বিশ্লেষণ করে।",
        approvalStatus: "Theologically reviewed",
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: "2026-09-19T09:00:00Z"
      }
    }
  },

  // 52. Scholasticism
  {
    id: "entry-scholasticism",
    slug: "scholasticism",
    headwordEnglish: "Scholasticism",
    alternativeSpellings: ["Medieval Scholasticism", "Protestant Scholasticism"],
    pronunciationIpa: "/skəˈlæs.tɪ.sɪ.zəm/",
    partOfSpeech: "Noun",
    category: "Historical Theology",
    theologicalPaths: ["historical-theology", "philosophical-theology", "systematic-theology"],
    definitionSimple: "A rigorous method of learning and theological debate developed in medieval European universities that used logic and precise distinctions to understand Christian faith.",
    definitionStudy: "A theological methodology dominant from c. 1100 to 1700 characterized by dialectical reasoning, precise definitions, scholastic dispute (quaestio), and harmonization of Scripture with philosophical categories.",
    definitionAcademic: "An intellectual method marked by rigorous dialectical interrogation of theological loci, operating through lectio, quaestio, and disputatio. Expressed in High Medieval Thomism and adapted in Post-Reformation Protestant Orthodoxy.",
    biblicalUsage: "Scripture values reasoned persuasion and logical defense of truth (Acts 17:2; 1 Pet 3:15; Isa 1:18).",
    scriptureReferences: ["Acts 17:2-3", "1 Peter 3:15", "Isaiah 1:18", "Titus 1:9"],
    historicalDevelopment: "Pioneered by Anselm ('faith seeking understanding'), systematized by Aquinas, and reformed by Turretin and Owen.",
    theologicalSignificance: "Produced precise theological vocabulary defending orthodoxy against ambiguity and heresy.",
    majorInterpretivePositions: {
      issue: "The integration of Aristotelian philosophical categories into Christian revelation.",
      biblicalEvidence: "Caution against vain philosophy (Col 2:8) vs apologetic reason (Acts 17:16-34).",
      historicalBackground: "Medieval university synthesis versus Renaissance humanist critique.",
      positions: [
        { name: "Subordinate Dialectical Method", description: "Philosophy serves as a ministerial handmaiden to biblical truth.", traditions: ["Reformed", "Lutheran", "Thomist"] },
        { name: "Biblicist Skepticism", description: "Scholastic categories obscure the simple narrative message of Scripture.", traditions: ["Anabaptist", "Pietist"] }
      ]
    },
    denominationalDistinctions: [
      { tradition: "Roman Catholic", positionSummary: "Elevates Thomism as the preeminent philosophical framework of theology." },
      { tradition: "Reformed Orthodoxy", positionSummary: "Used scholastic precision to defend the Westminster Standards while rejecting papal dogma." }
    ],
    originalLanguages: [
      {
        language: "Biblical Greek",
        scriptUnicode: "σχολή",
        lemma: "schole",
        transliteration: "scholē",
        pronunciation: "skhoh-LAY",
        partOfSpeech: "Noun, Feminine",
        semanticRange: "Leisure, devoted study, lecture place, school hall",
        strongsNumber: "G4981",
        biblicalOccurrencesCount: 1,
        importantOccurrences: ["Acts 19:9"],
        translationCautions: "In Acts 19:9 refers to the lecture hall of Tyrannus where Paul reasoned daily.",
        sources: ["Thayer's Greek-English Lexicon"],
        verified: true
      }
    ],
    sourceKeys: ["westminster", "logos_editorial"],
    translations: {
      bn: {
        masterEntryId: "entry-scholasticism",
        languageCode: "bn",
        localHeadword: "স্কলাস্টিক মতবাদ (Scholasticism)",
        definitionSimple: "যুক্তি ও সুনির্দিষ্ট পার্থক্যের মাধ্যমে খ্রীষ্টীয় বিশ্বাসকে পদ্ধতিগতভাবে বোঝার মধ্যযুগীয় পাণ্ডিত্যপূর্ণ ধারা।",
        definitionStudy: "যুক্তিশাস্ত্র ও দার্শনিক পদ্ধতির সমন্বয়ে শাস্ত্রীয় সত্যকে বিধিবদ্ধ ও রক্ষা করার ঐতিহাসিক পদ্ধতি।",
        definitionAcademic: "মধ্যযুগীয় বিশ্ববিদ্যালয় ও প্রটেস্ট্যান্ট গোঁড়ামির এমন এক বৌদ্ধিক কাঠামো যা সুনির্দিষ্ট দ্বান্দ্বিক পদ্ধতির মাধ্যমে মতবাদসমূহকে ব্যাখ্যা করে।",
        approvalStatus: "Theologically reviewed",
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: "2026-09-19T09:00:00Z"
      }
    }
  },

  // 53. Reformation
  {
    id: "entry-reformation",
    slug: "reformation",
    headwordEnglish: "The Reformation",
    alternativeSpellings: ["Protestant Reformation", "Sixteenth-Century Reformation"],
    pronunciationIpa: "/ˌref.ɚˈmeɪ.ʃən/",
    partOfSpeech: "Noun",
    category: "Church History",
    theologicalPaths: ["church-history", "historical-theology", "creeds-and-confessions"],
    definitionSimple: "A major sixteenth-century religious movement across Europe that restored biblical authority, the pure gospel of grace, and faith in Jesus Christ alone.",
    definitionStudy: "The great theological and ecclesial movement initiated in 1517 by Martin Luther and continued by Zwingli, Calvin, and Cranmer that recovered biblical soteriology and the Five Solas.",
    definitionAcademic: "A sixteenth-century realignment of Western Christendom centered on recovering the material principle of justification by grace alone through faith alone, and the formal principle of Sola Scriptura over ecclesiastical tradition.",
    biblicalUsage: "Scripture commands regular reformation and renewal according to God's written Word (2 Kings 22:8-13; Rom 12:2).",
    scriptureReferences: ["Romans 1:16-17", "Romans 3:21-28", "Ephesians 2:8-9", "2 Timothy 3:16-17"],
    historicalDevelopment: "Began with Luther's 95 Theses (1517), formulated in the Augsburg and Westminster Confessions, and spread globally.",
    theologicalSignificance: "Articulated the Five Solas: Sola Scriptura, Sola Gratia, Sola Fide, Solus Christus, and Soli Deo Gloria.",
    majorInterpretivePositions: {
      issue: "Whether the Reformation was a tragic schism or a necessary biblical purification.",
      biblicalEvidence: "Commands for church unity (John 17:21) vs guarding apostolic truth (Gal 1:8-9).",
      historicalBackground: "Reformation confessions versus the Counter-Reformation Council of Trent.",
      positions: [
        { name: "Necessary Biblical Renewal", description: "The Reformation rescued the gospel from medieval accretions and restored biblical authority.", traditions: ["Lutheran", "Reformed", "Anglican", "Baptist"] },
        { name: "Ecclesial Schism", description: "Viewed the movement as an unauthorized fracture of communion requiring counter-reform.", traditions: ["Roman Catholic"] }
      ]
    },
    denominationalDistinctions: [
      { tradition: "Protestant", positionSummary: "Identifies its doctrinal heritage as the recovery of apostolic gospel proclamation." },
      { tradition: "Anglican", positionSummary: "Understands itself as reformed catholic: retaining ancient episcopal order while embracing reformed doctrine." }
    ],
    originalLanguages: [
      {
        language: "Biblical Greek",
        scriptUnicode: "διορθόω",
        lemma: "diorthoo",
        transliteration: "diorthoō",
        pronunciation: "dee-or-THOH-oh",
        partOfSpeech: "Verb",
        semanticRange: "To set right, amend, reform, bring to true standard",
        strongsNumber: "G1357",
        biblicalOccurrencesCount: 1,
        importantOccurrences: ["Heb 9:10"],
        translationCautions: "Heb 9:10 speaks of the 'time of reformation' when Christ fulfilled the Old Covenant types.",
        sources: ["Thayer's Greek-English Lexicon"],
        verified: true
      }
    ],
    sourceKeys: ["westminster", "augsburg", "thirty_nine_articles", "logos_editorial"],
    translations: {
      bn: {
        masterEntryId: "entry-reformation",
        languageCode: "bn",
        localHeadword: "ধর্মসংস্কার আন্দোলন (Reformation)",
        definitionSimple: "ষোড়শ শতাব্দীর ঐতিহাসিক আন্দোলন যা বাইবেলের একমাত্র কর্তৃত্ব ও বিশ্বাসের দ্বারা মুক্তির সুসমাচার পুনরুদ্ধার করেছিল।",
        definitionStudy: "লুথার, ক্যালভিন ও অন্যান্য সংস্কারকদের মাধ্যমে পরিচালিত আত্মিক জাগরণ যা মণ্ডলীকে শাস্ত্রের মূল শিক্ষায় ফিরিয়ে আনে।",
        definitionAcademic: "পাশ্চাত্য খ্রীষ্টধর্মের সেই ধর্মতাত্ত্বিক রূপান্তর যা 'একমাত্র শাস্ত্র' ও 'একমাত্র বিশ্বাস' ভিত্তির ওপর মণ্ডলীর কাঠামোগত সংস্কার সাধন করে।",
        approvalStatus: "Theologically reviewed",
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: "2026-09-19T09:00:00Z"
      }
    }
  },

  // 54. Pastoral Care
  {
    id: "entry-pastoral-care",
    slug: "pastoral-care",
    headwordEnglish: "Pastoral Care",
    alternativeSpellings: ["Poimenics", "Cura Animarum", "Soul Care"],
    pronunciationIpa: "/ˈpæs.tɚ.əl kɛər/",
    partOfSpeech: "Noun",
    category: "Pastoral Theology",
    theologicalPaths: ["pastoral-theology", "practical-theology", "christian-counselling"],
    definitionSimple: "The loving spiritual care, guidance, comfort, and protection that pastors and church leaders provide to God's people in times of joy, sorrow, and trial.",
    definitionStudy: "The ministry of the cure of souls (cura animarum) wherein ordained under-shepherds provide biblical oversight, comfort in grief, moral counsel, and spiritual nourishment following the model of Christ the Good Shepherd.",
    definitionAcademic: "A primary locus of practical theology (poimenics) concerning the holistic spiritual stewardship, reconciliation, and guidance of persons within the covenant community, integrating biblical theology with pastoral psychology.",
    biblicalUsage: "Scripture describes pastoral care as shepherding the flock of God with willing devotion (1 Pet 5:2; Acts 20:28; Ps 23).",
    scriptureReferences: ["Psalm 23:1-6", "John 10:11-16", "Acts 20:28", "1 Peter 5:1-4", "James 5:14"],
    historicalDevelopment: "Practiced in Gregory the Great’s Pastoral Rule, the Reformed cure of souls, and modern biblical counseling movements.",
    theologicalSignificance: "Reflects the ongoing pastoral mediation of Jesus Christ, the Chief Shepherd, through His appointed servants.",
    majorInterpretivePositions: {
      issue: "The integration of modern clinical psychology with biblical soul care.",
      biblicalEvidence: "Sufficiency of Scripture for godliness (2 Tim 3:16-17; 2 Pet 1:3) vs common grace insights.",
      historicalBackground: "Clinical pastoral education versus traditional and nouthetic biblical counseling.",
      positions: [
        { name: "Biblical Counseling / Sufficiency", description: "Scripture is completely sufficient to interpret and heal spiritual and emotional dysfunction.", traditions: ["Conservative Evangelical", "Presbyterian"] },
        { name: "Integrated Pastoral Care", description: "Synthesizes biblical theology with clinical psychological diagnostic tools.", traditions: ["Mainline Protestant", "Episcopalian"] }
      ]
    },
    denominationalDistinctions: [
      { tradition: "Reformed", positionSummary: "Emphasizes the ministry of the Word, sacraments, and pastoral visitation in homes." },
      { tradition: "Methodist", positionSummary: "Emphasizes small accountability bands and mutual pastoral watchfulness." }
    ],
    originalLanguages: [
      {
        language: "Biblical Greek",
        scriptUnicode: "ποιμαίνω",
        lemma: "poimaino",
        transliteration: "poimainō",
        pronunciation: "poy-MAH-ee-no",
        partOfSpeech: "Verb",
        semanticRange: "To tend a flock, shepherd, guide, nourish, guard",
        strongsNumber: "G4165",
        biblicalOccurrencesCount: 11,
        importantOccurrences: ["John 21:16", "Acts 20:28", "1 Pet 5:2"],
        translationCautions: "Involves protection and nourishment, not merely sentimental coddling.",
        sources: ["Thayer's Greek-English Lexicon"],
        verified: true
      }
    ],
    sourceKeys: ["heidelberg", "westminster", "logos_editorial"],
    translations: {
      bn: {
        masterEntryId: "entry-pastoral-care",
        languageCode: "bn",
        localHeadword: "পালকীয় যত্ন (Pastoral Care)",
        definitionSimple: "বিশ্বাসীদের আত্মিক সান্ত্বনা, দিকনির্দেশনা ও তত্ত্বাবধান প্রদানের পালকীয় সেবা।",
        definitionStudy: "খ্রীষ্টীয় মণ্ডলীর পালকদের মাধ্যমে বিশ্বাসীদের আত্মিক পরিচালনা, পাপমোচনে সহায়তা ও জীবনের কঠিন সময়ে পরিচর্যা।",
        definitionAcademic: "ব্যবহারিক ধর্মতত্ত্বের একটি অঙ্গ যা যীশু খ্রীষ্টের আদর্শে আত্মার পরিচর্যা ও আত্মিক সুস্থতা বাস্তবায়ন করে।",
        approvalStatus: "Theologically reviewed",
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: "2026-09-19T09:00:00Z"
      }
    }
  },

  // 55. Theodicy
  {
    id: "entry-theodicy",
    slug: "theodicy",
    headwordEnglish: "Theodicy",
    alternativeSpellings: ["Problem of Evil", "Justification of God"],
    pronunciationIpa: "/θiˈɑː.də.si/",
    partOfSpeech: "Noun",
    category: "Philosophical Theology",
    theologicalPaths: ["philosophical-theology", "theology-proper", "apologetics"],
    definitionSimple: "The theological explanation of how God can remain completely good, loving, and all-powerful even though evil and suffering exist in the world.",
    definitionStudy: "The philosophical and theological vindication of divine justice, omnipotence, and omnibenevolence in the presence of moral and natural evil.",
    definitionAcademic: "A formal defense of divine justice (theos + dike) addressing the trilemma: if God is omnipotent, omniscient, and perfectly good, why does evil exist? Approached through free will defenses, soul-making frameworks, and divine sovereignty.",
    biblicalUsage: "Scripture wrestles profoundly with theodicy in Job, Habakkuk, and the Psalms, pointing ultimately to divine sovereignty and the cross (Job 38-42; Rom 8:28).",
    scriptureReferences: ["Job 38:1-11", "Habakkuk 1:1-4", "Romans 8:28", "Genesis 50:20"],
    historicalDevelopment: "Coined by Leibniz (1710), framed anciently by Augustine (evil as privation of good), and addressed by Plantinga.",
    theologicalSignificance: "Defends divine holiness without making God the author of sin or compromising His absolute sovereignty.",
    majorInterpretivePositions: {
      issue: "Whether evil is permitted for greater redemptive goods or human libertarian freedom.",
      biblicalEvidence: "God turning evil to good (Gen 50:20; Acts 4:27-28) vs human culpability.",
      historicalBackground: "Augustinian sovereignty vs Irenaean soul-making vs modern free-will defenses.",
      positions: [
        { name: "Greater-Good / Sovereign Theodicy", description: "God ordains all things, permitting evil to display His justice and glorious mercy in Christ.", traditions: ["Reformed", "Presbyterian"] },
        { name: "Free-Will Defense", description: "Moral evil results from genuine creaturely freedom that God chose not to override.", traditions: ["Arminian", "Wesleyan", "Catholic"] },
        { name: "Soul-Making Theodicy", description: "The world is an imperfect environment intended for spiritual growth and moral maturity.", traditions: ["Liberal Christian", "Anglican"] }
      ]
    },
    denominationalDistinctions: [
      { tradition: "Reformed", positionSummary: "Emphasizes compatibility between absolute divine sovereignty and human moral responsibility (Gen 50:20)." },
      { tradition: "Eastern Orthodox", positionSummary: "Rejects juridical formulations, pointing to Christ's resurrection overcoming cosmic death and corruption." }
    ],
    originalLanguages: [
      {
        language: "Biblical Greek",
        scriptUnicode: "δίκη",
        lemma: "dike",
        transliteration: "dikē",
        pronunciation: "DEE-kay",
        partOfSpeech: "Noun, Feminine",
        semanticRange: "Justice, right judicial sentence, judgment",
        strongsNumber: "G1349",
        biblicalOccurrencesCount: 3,
        importantOccurrences: ["Acts 28:4", "2 Thess 1:9", "Jude 1:7"],
        translationCautions: "Refers to objective divine justice, not arbitrary human retribution.",
        sources: ["Thayer's Greek-English Lexicon"],
        verified: true
      }
    ],
    sourceKeys: ["westminster", "logos_editorial"],
    translations: {
      bn: {
        masterEntryId: "entry-theodicy",
        languageCode: "bn",
        localHeadword: "ঈশ্বরন্যায়তত্ত্ব (Theodicy)",
        definitionSimple: "জগতে অন্যায় ও দুঃখকষ্টের উপস্থিতির বিপরীতে ঈশ্বরের ন্যায়পরায়ণতা ও প্রেমের ব্যাখ্যা।",
        definitionStudy: "ঈশ্বর সর্বশক্তিমান ও প্রেমময় হওয়া সত্ত্বেও কেন জগতে পাপ ও দুঃখ আছে—তার ধর্মতাত্ত্বিক ন্যায্যতা প্রতিপাদন।",
        definitionAcademic: "দার্শনিক ধর্মতত্ত্বের বিচার যা ঈশ্বরের ন্যায়বিচার ও মন্দের উপস্থিতির মধ্যকার আপাত বিরোধ মীমাংসা করে।",
        approvalStatus: "Theologically reviewed",
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: "2026-09-19T09:00:00Z"
      }
    }
  },

  // 56. Inerrancy
  {
    id: "entry-inerrancy",
    slug: "inerrancy",
    headwordEnglish: "Biblical Inerrancy",
    alternativeSpellings: ["Inerrancy of Scripture", "Biblical Infallibility"],
    pronunciationIpa: "/ɪnˈɛr.ən.si/",
    partOfSpeech: "Noun",
    category: "Bibliology",
    theologicalPaths: ["bibliology", "systematic-theology", "canon"],
    definitionSimple: "The conviction that the Bible, in its original manuscripts, is entirely true, trustworthy, and free from error in all that it affirms.",
    definitionStudy: "The doctrine that Holy Scripture, having been inspired by the Holy Spirit (theopneustos), is entirely without error or fault in its autographs, whether speaking of salvation, history, or science.",
    definitionAcademic: "A formal bibliological doctrine articulated in the Chicago Statement on Biblical Inerrancy (1978), affirming that Scripture, being God-breathed, speaks with complete veracity in all matters it addresses according to its grammatical-historical intent.",
    biblicalUsage: "Scripture describes God's words as completely pure, true, and unbreakable (Ps 12:6; John 10:35; 2 Tim 3:16).",
    scriptureReferences: ["Psalm 12:6", "Psalm 119:160", "John 10:35", "John 17:17", "2 Timothy 3:16-17", "2 Peter 1:20-21"],
    historicalDevelopment: "Rooted in historic church consensus, reaffirmed against modernism in the Princeton Theology (Warfield, Hodge) and Chicago Statement (1978).",
    theologicalSignificance: "Undergirds full confidence in the absolute authority and reliability of divine revelation.",
    majorInterpretivePositions: {
      issue: "The scope of inerrancy: whether it covers all affirmations or only faith and practice.",
      biblicalEvidence: "Total divine truthfulness (Titus 1:2) vs phenomenological language in ancient texts.",
      historicalBackground: "The Fundamentalist-Modernist controversy and Chicago Statement (1978).",
      positions: [
        { name: "Full Inerrancy", description: "Scripture is free from error in all matters it asserts, including historical and cosmological records.", traditions: ["Evangelical", "Baptist", "Presbyterian"] },
        { name: "Infallibility / Limited Inerrancy", description: "Scripture is completely trustworthy in matters of salvation and faith, while reflecting human cosmological perspectives.", traditions: ["Moderate Evangelical", "Mainline Protestant"] }
      ]
    },
    denominationalDistinctions: [
      { tradition: "Conservative Evangelical", positionSummary: "Adopts the Chicago Statement on Biblical Inerrancy as a foundational test of orthodoxy." },
      { tradition: "Roman Catholic", positionSummary: "Affirms biblical inspiration alongside the infallible teaching office of the Magisterium." }
    ],
    originalLanguages: [
      {
        language: "Biblical Greek",
        scriptUnicode: "θεόπνευστος",
        lemma: "theopneustos",
        transliteration: "theópneustos",
        pronunciation: "theh-OP-nyoo-stos",
        partOfSpeech: "Adjective",
        semanticRange: "God-breathed, inspired by God",
        strongsNumber: "G2315",
        biblicalOccurrencesCount: 1,
        importantOccurrences: ["2 Tim 3:16"],
        translationCautions: "Signifies originating from God's divine breath, not merely human creative insight.",
        sources: ["Thayer's Greek-English Lexicon"],
        verified: true
      }
    ],
    sourceKeys: ["westminster", "logos_editorial"],
    translations: {
      bn: {
        masterEntryId: "entry-inerrancy",
        languageCode: "bn",
        localHeadword: "শাস্ত্রের অভ্রান্ততা (Biblical Inerrancy)",
        definitionSimple: "এই বিশ্বাস যে পবিত্র বাইবেলের মূল পাণ্ডুলিপিসমূহ সম্পূর্ণ সত্য ও সকল প্রকার ভুলভ্রান্তি থেকে মুক্ত।",
        definitionStudy: "ঈশ্বরের নিঃশ্বাসিত বাক্য হওয়ার কারণে পবিত্র শাস্ত্র তার মূল লিপিতে সকল ঐতিহাসিক ও ধর্মীয় বিষয়ে নির্ভুল।",
        definitionAcademic: "শাস্ত্রবিজ্ঞানের মূল মতবাদ যা নিশ্চিত করে যে বাইবেল যা কিছু ব্যক্ত করে তা পরম সত্য ও নির্ভরযোগ্য।",
        approvalStatus: "Theologically reviewed",
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: "2026-09-19T09:00:00Z"
      }
    }
  },

  // 57. Homoousios
  {
    id: "entry-homoousios",
    slug: "homoousios",
    headwordEnglish: "Homoousios",
    alternativeSpellings: ["Consubstantial", "Of One Essence", "Homoousion"],
    pronunciationIpa: "/ˌhoʊ.moʊˈuː.si.əs/",
    partOfSpeech: "Adjective",
    category: "Doctrine of the Trinity",
    theologicalPaths: ["doctrine-of-the-trinity", "christology", "creeds-and-confessions"],
    definitionSimple: "The essential Christian truth that Jesus Christ the Son is of the exact same divine substance, being, and essence as God the Father.",
    definitionStudy: "The key theological term adopted at the Council of Nicaea (AD 325) affirming that the Son shares the identical, indivisible divine essence (ousia) with the Father, directly refuting Arianism.",
    definitionAcademic: "The defining Greek term (homos 'same' + ousia 'being') of fourth-century pro-Nicene theology vindicated by Athanasius, excluding Arian heteroousios ('different essence') and Semi-Arian homoiousios ('similar essence').",
    biblicalUsage: "Expresses biblical affirmations of the absolute divine identity of Christ with the Father (John 10:30; Col 2:9; Heb 1:3).",
    scriptureReferences: ["John 10:30", "John 14:9", "Colossians 2:9", "Hebrews 1:3"],
    historicalDevelopment: "Formulated at Nicaea (325), defended against Arianism by Athanasius, and ratified at Constantinople (381).",
    theologicalSignificance: "Guarantees that only God can save humanity, and Jesus is truly God in full divinity.",
    majorInterpretivePositions: {
      issue: "The fourth-century debate between homoousios ('same essence') and homoiousios ('similar essence').",
      biblicalEvidence: "Ontological oneness in Christ (John 1:1, 14:9; Heb 1:3).",
      historicalBackground: "Athanasian defense of the Nicene Creed against Imperial Arianism.",
      positions: [
        { name: "Nicene Orthodoxy", description: "The Son is numerically one in essence with the Father.", traditions: ["Ecumenical Christian", "Protestant", "Catholic", "Orthodox"] },
        { name: "Arian Heresy", description: "The Son was created by the Father and possesses a different essence.", traditions: ["Historic Heresy"] }
      ]
    },
    denominationalDistinctions: [
      { tradition: "Ecumenical Orthodoxy", positionSummary: "Accepted unconditionally across all Orthodox, Catholic, and historic Protestant churches as essential to salvation." }
    ],
    originalLanguages: [
      {
        language: "Biblical Greek",
        scriptUnicode: "ὁμοούσιος",
        lemma: "homoousios",
        transliteration: "homooúsios",
        pronunciation: "hoh-moh-OO-see-os",
        partOfSpeech: "Adjective",
        semanticRange: "Of the same essence, consubstantial, sharing identical being",
        importantOccurrences: ["Nicene Creed (325)", "Niceno-Constantinopolitan Creed (381)"],
        translationCautions: "Never confuse with homoiousios ('of similar essence'), which diminishes Christ's full deity.",
        sources: ["Thayer's Greek-English Lexicon"],
        verified: true
      }
    ],
    sourceKeys: ["nicene_creed", "logos_editorial"],
    translations: {
      bn: {
        masterEntryId: "entry-homoousios",
        languageCode: "bn",
        localHeadword: "সম-সারবস্তু (Homoousios)",
        definitionSimple: "এই মৌলিক বিশ্বাস যে যীশু খ্রীষ্ট পিতা ঈশ্বরের সমান অনন্ত ঐশ্বরিক সত্তা ও সারবস্তুর অধিকারী।",
        definitionStudy: "নীকীয় বিশ্বাসের (৩২৫ খ্রী.) মূল শব্দ যা ঘোষণা করে যে পুত্র ঈশ্বরের স্বরূপ পিতার সাথে সম্পূর্ণ এক ও অভিন্ন।",
        definitionAcademic: "ত্রিত্ববাদের মূল গ্রিক পরিভাষা যা আরিয়ানবাদের বিরোধিতা করে পুত্রের সম্পূর্ণ ঐশ্বরিক সত্তা নিশ্চিত করে।",
        approvalStatus: "Theologically reviewed",
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: "2026-09-19T09:00:00Z"
      }
    }
  },

  // 58. Hypostatic Union
  {
    id: "entry-hypostatic-union",
    slug: "hypostatic-union",
    headwordEnglish: "Hypostatic Union",
    alternativeSpellings: ["Two Natures of Christ", "Chalcedonian Christology"],
    pronunciationIpa: "/ˌhaɪ.pəˈstæt.ɪk ˈjuːn.jən/",
    partOfSpeech: "Noun",
    category: "Christology",
    theologicalPaths: ["christology", "systematic-theology", "creeds-and-confessions"],
    definitionSimple: "The miraculous union of Jesus Christ being truly God and truly human in one single, undivided divine Person forever.",
    definitionStudy: "The doctrinal formulation ratified at the Council of Chalcedon (AD 451) that two distinct, complete natures—divine and human—are united in the one person (hypostasis) of Jesus Christ without confusion, change, division, or separation.",
    definitionAcademic: "The Christological locus defining the unconfused, inconvertible, indivisible, and inseparate union of full divinity and full humanity in the singular hypostasis of the eternal Logos (vere Deus, vere homo).",
    biblicalUsage: "Scripture teaches both Christ's full deity (John 1:1) and His real, sinless humanity (John 1:14; 1 Tim 2:5).",
    scriptureReferences: ["John 1:14", "Philippians 2:5-8", "Colossians 2:9", "1 Timothy 2:5", "Hebrews 2:14-17"],
    historicalDevelopment: "Ratified at the Council of Chalcedon (451), synthesizing Athanasian, Cyrillian, and western Latin insights against Nestorianism and Monophysitism.",
    theologicalSignificance: "Ensures Christ is qualified to be the one true Mediator between holy God and fallen humanity.",
    majorInterpretivePositions: {
      issue: "How two natures relate in one person without compromising either nature.",
      biblicalEvidence: "Divine attributes applied to Jesus alongside real human hunger, weeping, and death.",
      historicalBackground: "Council of Chalcedon (451) against Nestorius (two persons) and Eutyches (one confused nature).",
      positions: [
        { name: "Chalcedonian Dyophysitism", description: "Two complete natures in one hypostasis without confusion or division.", traditions: ["Reformed", "Lutheran", "Roman Catholic", "Eastern Orthodox"] },
        { name: "Miaphysitism", description: "One united nature of the incarnate Word out of two natures.", traditions: ["Coptic", "Syrian", "Armenian Apostolic"] }
      ]
    },
    denominationalDistinctions: [
      { tradition: "Western & Eastern Orthodoxy", positionSummary: "Accepts the Chalcedonian Definition (451) as binding ecumenical dogma." },
      { tradition: "Oriental Orthodox", positionSummary: "Prefers the Cyrillian formula 'one nature of God the Word incarnate' while rejecting Eutychianism." }
    ],
    originalLanguages: [
      {
        language: "Biblical Greek",
        scriptUnicode: "ὑπόστασις",
        lemma: "hypostasis",
        transliteration: "hypóstasis",
        pronunciation: "hoo-POSS-tah-sis",
        partOfSpeech: "Noun, Feminine",
        semanticRange: "Substantial nature, person, underlying reality, subsistence",
        strongsNumber: "G5287",
        biblicalOccurrencesCount: 5,
        importantOccurrences: ["Heb 1:3", "Heb 11:1"],
        translationCautions: "In Christology, refers to the concrete person of the Son, distinct from ousia (essence).",
        sources: ["Thayer's Greek-English Lexicon"],
        verified: true
      }
    ],
    sourceKeys: ["nicene_creed", "westminster", "logos_editorial"],
    translations: {
      bn: {
        masterEntryId: "entry-hypostatic-union",
        languageCode: "bn",
        localHeadword: "দ্বি-স্বভাব ঐক্য (Hypostatic Union)",
        definitionSimple: "যীশু খ্রীষ্টের এক ব্যক্তিসত্তায় পূর্ণ ঈশ্বরত্ব ও পূর্ণ মানবত্বের অলৌকিক মিলন।",
        definitionStudy: "খ্যালসিডনের মহাসভায় (৪৫১ খ্রী.) স্বীকৃত মতবাদ যেখানে খ্রীষ্ট একইসাথে পূর্ণ ঈশ্বর ও পূর্ণ মানুষ কিন্তু একক ব্যক্তিসত্তা।",
        definitionAcademic: "খ্রীষ্টতত্ত্বের কেন্দ্রীয় স্তম্ভ যা কোনো বিভাজন বা মিশ্রণ ছাড়াই এক ব্যক্তিতে দুটি স্বভাবের সহাবস্থান ব্যাখ্যা করে।",
        approvalStatus: "Theologically reviewed",
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: "2026-09-19T09:00:00Z"
      }
    }
  },

  // 59. Elder / Presbyter
  {
    id: "entry-elder-presbyter",
    slug: "elder-presbyter",
    headwordEnglish: "Elder (Presbyter)",
    alternativeSpellings: ["Presbyter", "Presbuteros", "Church Overseer"],
    pronunciationIpa: "/ˈɛl.dɚ/",
    partOfSpeech: "Noun",
    category: "Ministry and Leadership",
    theologicalPaths: ["ministry-and-leadership", "ecclesiology", "pastoral-theology"],
    definitionSimple: "A mature, qualified spiritual leader appointed in the local church to shepherd, teach, and oversee the congregation under Christ.",
    definitionStudy: "The New Testament ecclesial office of spiritual leadership and oversight (presbyteros / episkopos), entrusted with teaching sound doctrine, refuting error, and pastoring God's flock according to the qualifications in 1 Timothy 3 and Titus 1.",
    definitionAcademic: "An ordained ecclesiastical office in apostolic ecclesiology functionally interchangeable in the New Testament with episkopos (overseer). In Reformed presbyterian polity, distinguished between ruling elders and teaching elders (1 Tim 5:17).",
    biblicalUsage: "Apostles appointed a plurality of elders in every church to teach and exercise shepherdly oversight (Acts 14:23; Titus 1:5; 1 Pet 5:1-2).",
    scriptureReferences: ["Acts 14:23", "Acts 20:17-28", "1 Timothy 3:1-7", "1 Timothy 5:17", "Titus 1:5-9", "1 Peter 5:1-4"],
    historicalDevelopment: "Rooted in Jewish synagogue leadership, established by apostles in local churches, and evolved into episcopal hierarchy in early church history.",
    theologicalSignificance: "Ensures collegiate, accountable pastoral oversight protecting Christ's sheep from false doctrine and wolves.",
    majorInterpretivePositions: {
      issue: "The relationship between presbyteros (elder) and episkopos (bishop/overseer).",
      biblicalEvidence: "Interchangeable terms in Acts 20:17, 28 and Titus 1:5, 7.",
      historicalBackground: "Presbyterian parity vs episcopal mono-episcopacy.",
      positions: [
        { name: "Presbyterian Plurality & Parity", description: "Bishops and elders are the same biblical office exercised in plurality.", traditions: ["Presbyterian", "Reformed", "Baptist"] },
        { name: "Episcopal Threefold Order", description: "Bishops possess higher apostolic authority distinct from presbyters and deacons.", traditions: ["Anglican", "Eastern Orthodox", "Roman Catholic"] }
      ]
    },
    denominationalDistinctions: [
      { tradition: "Presbyterian", positionSummary: "Maintains a collegiate session of ruling and teaching elders elected by the congregation." },
      { tradition: "Anglican", positionSummary: "Retains presbyters as the second order of ordained ministry under diocesan bishops." }
    ],
    originalLanguages: [
      {
        language: "Biblical Greek",
        scriptUnicode: "πρεσβύτερος",
        lemma: "presbuteros",
        transliteration: "presbýteros",
        pronunciation: "pres-BOO-teh-ros",
        partOfSpeech: "Adjective / Noun, Masculine",
        semanticRange: "Elder, mature person, member of council, church leader",
        strongsNumber: "G4245",
        biblicalOccurrencesCount: 66,
        importantOccurrences: ["Acts 14:23", "1 Tim 5:17", "Titus 1:5"],
        translationCautions: "Denotes spiritual maturity and official pastoral capacity in the New Testament church.",
        sources: ["Thayer's Greek-English Lexicon"],
        verified: true
      }
    ],
    sourceKeys: ["westminster", "thirty_nine_articles", "logos_editorial"],
    translations: {
      bn: {
        masterEntryId: "entry-elder-presbyter",
        languageCode: "bn",
        localHeadword: "প্রাচীন / প্রেসবাইটার (Elder)",
        definitionSimple: "স্থানীয় মণ্ডলীতে আধ্যাত্মিক পরিচালনা, শিক্ষা ও তত্ত্বাবধানের জন্য নিযুক্ত আত্মিক নেতা।",
        definitionStudy: "নূতন নিয়মে নির্দেশিত মণ্ডলী পরিচালনার দায়িত্বপ্রাপ্ত প্রাচীন যিনি বিশ্বাসীদের সত্য শিক্ষায় পরিচালিত করেন।",
        definitionAcademic: "মণ্ডলীবিদ্যার একটি প্রধান পদমর্যাদা যা মণ্ডলীর বহুত্ববাদী ও জবাবদিহিতামূলক পরিচালনা নিশ্চিত করে।",
        approvalStatus: "Theologically reviewed",
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: "2026-09-19T09:00:00Z"
      }
    }
  },

  // 60. Shepherding
  {
    id: "entry-shepherding",
    slug: "shepherding",
    headwordEnglish: "Shepherding",
    alternativeSpellings: ["Pastoral Shepherding", "Flock Oversight"],
    pronunciationIpa: "/ˈʃep.ɚ.dɪŋ/",
    partOfSpeech: "Noun",
    category: "Pastoral Theology",
    theologicalPaths: ["pastoral-theology", "ministry-and-leadership", "practical-theology"],
    definitionSimple: "The continuous biblical practice of guiding, feeding, guarding, and loving God's people as sheep belonging to Christ.",
    definitionStudy: "The comprehensive pastoral activity of spiritual nourishment through preaching, protective vigilance against spiritual predators, and gentle restoration of straying souls patterned on the Shepherd of Israel.",
    definitionAcademic: "A metaphoric and vocational locus of poimenics defining the pastoral office as imitative of Christ’s archetypal pastorship, executing protective, gubernative, and alimentary functions toward the ecclesial flock.",
    biblicalUsage: "Ubiquitous biblical motif from Psalm 23 and Ezekiel 34 to Jesus' self-designation as the Good Shepherd (John 10:11).",
    scriptureReferences: ["Psalm 23:1-4", "Ezekiel 34:1-16", "John 10:11-16", "Acts 20:28-29", "1 Peter 5:2-3"],
    historicalDevelopment: "Ancient Near Eastern pastoral imagery adopted in Israel, consummated in Jesus, and institutionalized in church offices.",
    theologicalSignificance: "Guards the flock against abusive hierarchy by demanding sacrificial, Christlike servanthood.",
    majorInterpretivePositions: {
      issue: "The limits of pastoral authority in disciple shepherding.",
      biblicalEvidence: "Pastors not lording it over the flock (1 Pet 5:3) vs obeying spiritual leaders (Heb 13:17).",
      historicalBackground: "Rejection of heavy-handed authoritarian shepherding movements of the 1970s.",
      positions: [
        { name: "Servant Oversight", description: "Pastoral authority is ministerial and persuasive, never coercive or domineering.", traditions: ["Historic Protestant", "Reformed", "Baptist"] },
        { name: "Discipleship Covenanting", description: "Emphasizes strict personal submission to personal spiritual shepherds.", traditions: ["Charismatic Shepherding Movement"] }
      ]
    },
    denominationalDistinctions: [
      { tradition: "Historic Protestant", positionSummary: "Strictly guards against authoritarianism, grounding pastoral authority purely in the Word of God." }
    ],
    originalLanguages: [
      {
        language: "Biblical Hebrew",
        scriptUnicode: "רָעָה",
        lemma: "ra'ah",
        transliteration: "rā'āh",
        pronunciation: "rah-AH",
        partOfSpeech: "Verb",
        semanticRange: "To pasture, tend, graze, feed, rule as shepherd",
        strongsNumber: "H7462",
        biblicalOccurrencesCount: 173,
        importantOccurrences: ["Ps 23:1", "Ezek 34:2"],
        translationCautions: "Includes feeding, leading to water, and physical protection from predators.",
        sources: ["Brown-Driver-Briggs Hebrew and English Lexicon"],
        verified: true
      }
    ],
    sourceKeys: ["bdb", "heidelberg", "logos_editorial"],
    translations: {
      bn: {
        masterEntryId: "entry-shepherding",
        languageCode: "bn",
        localHeadword: "মেষপালন পরিচর্যা (Shepherding)",
        definitionSimple: "ঈশ্বরের মণ্ডলীকে উত্তম মেষপালক খ্রীষ্টের আদর্শে খাদ্য দান, সুরক্ষা ও দিকনির্দেশনা প্রদান।",
        definitionStudy: "বিশ্বাসী মেষদের প্রতি পালকীয় মমত্ব, সত্য শিক্ষাদান ও আত্মিক বিপথগামিতা থেকে উদ্ধারের সার্বক্ষণিক পরিচর্যা।",
        definitionAcademic: "পালকীয় ধর্মতত্ত্বের একটি রূপক ও কার্যপদ্ধতি যা খ্রীষ্টীয় সেবাকর্মের আত্মবলিদানমূলক নেতৃত্বকে সংজ্ঞায়িত করে।",
        approvalStatus: "Theologically reviewed",
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: "2026-09-19T09:00:00Z"
      }
    }
  },

  // 61. Divine Simplicity
  {
    id: "entry-divine-simplicity",
    slug: "divine-simplicity",
    headwordEnglish: "Divine Simplicity",
    alternativeSpellings: ["Simplicitas Dei", "Simplicity of God"],
    pronunciationIpa: "/dɪˈvaɪn sɪmˈplɪs.ə.ti/",
    partOfSpeech: "Noun",
    category: "Philosophical Theology",
    theologicalPaths: ["philosophical-theology", "theology-proper", "doctrine-of-the-trinity"],
    definitionSimple: "The classical doctrine that God is not made up of parts, physical pieces, or changing attributes, but is completely one, unified, and identical with His own divine essence.",
    definitionStudy: "The classical theistic affirmation that God is without metaphysical composition (parts, matter, form, potentiality, or accidental properties); all that is in God is God.",
    definitionAcademic: "An ontological doctrine of classical theism asserting that the divine nature is non-composite (incompositus). God’s essence and existence are identical (esse est per essentiam), and His attributes are not distinct properties added to His nature.",
    biblicalUsage: "Scripture affirms that God is Spirit, light, love, and the one indivisible Yahweh (Deut 6:4; John 4:24; 1 John 1:5).",
    scriptureReferences: ["Deuteronomy 6:4", "John 4:24", "Exodus 3:14", "1 John 1:5"],
    historicalDevelopment: "Formulated by Augustine, Aquinas, and Anselm, and confessed in the Westminster Confession (1646) and Thirty-Nine Articles ('without body, parts, or passions').",
    theologicalSignificance: "Guarantees that God is absolute, immutable, independent, and cannot be divided, dismantled, or destroyed.",
    majorInterpretivePositions: {
      issue: "How divine simplicity co-exists with the tri-personality of God and multiple divine attributes.",
      biblicalEvidence: "The Shema (Deut 6:4) vs real trinitarian distinctions (Matt 28:19).",
      historicalBackground: "Classical theism vs modern open theism and social trinitarian critiques.",
      positions: [
        { name: "Classical Divine Simplicity", description: "God has no physical or metaphysical parts; distinctions in attributes are due to creaturely perception.", traditions: ["Reformed", "Thomist", "Lutheran", "Eastern Orthodox (with Essence-Energies)"] },
        { name: "Modern Theistic Personalism", description: "God is a person who possesses distinct properties and undergoes real temporal change.", traditions: ["Open Theism", "Process Theology"] }
      ]
    },
    denominationalDistinctions: [
      { tradition: "Confessional Protestant", positionSummary: "Confesses God as 'without body, parts, or passions' (WCF 2.1; 39 Articles 1)." },
      { tradition: "Eastern Orthodox", positionSummary: "Affirms divine simplicity alongside the Palamite distinction between uncreated essence and uncreated energies." }
    ],
    originalLanguages: [
      {
        language: "Biblical Hebrew",
        scriptUnicode: "אֶחָד",
        lemma: "echad",
        transliteration: "'echād",
        pronunciation: "ekh-AHD",
        partOfSpeech: "Adjective",
        semanticRange: "One, unique, solitary, unified",
        strongsNumber: "H259",
        biblicalOccurrencesCount: 952,
        importantOccurrences: ["Deut 6:4"],
        translationCautions: "In the Shema, affirms the absolute unique unity and indivisibility of Yahweh.",
        sources: ["Brown-Driver-Briggs Hebrew and English Lexicon"],
        verified: true
      }
    ],
    sourceKeys: ["westminster", "thirty_nine_articles", "logos_editorial"],
    translations: {
      bn: {
        masterEntryId: "entry-divine-simplicity",
        languageCode: "bn",
        localHeadword: "ঐশ্বরিক সরলতা / অংশহীনতা (Divine Simplicity)",
        definitionSimple: "এই চিরায়ত শিক্ষা যে ঈশ্বর কোনো জড় অংশ বা পরিবর্তনশীল উপাদানে গঠিত নন, বরং তিনি অখণ্ড ও একক।",
        definitionStudy: "শাস্ত্রীয় একেশ্বরবাদের ভিত্তি যা নিশ্চিত করে যে ঈশ্বরের স্বভাব ও তাঁর গুণাবলী অভিন্ন এবং তিনি কোনো পরিবর্তনের অধীন নন।",
        definitionAcademic: "দার্শনিক ধর্মতত্ত্বের মূল ভিত্তি যা ঈশ্বরের পরম স্বাধীনতা, অবিনশ্বরতা ও অখণ্ড পরম সত্তাকে প্রতিপাদন করে।",
        approvalStatus: "Theologically reviewed",
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: "2026-09-19T09:00:00Z"
      }
    }
  },

  // 62. General Revelation
  {
    id: "entry-general-revelation",
    slug: "general-revelation",
    headwordEnglish: "General Revelation",
    alternativeSpellings: ["Natural Revelation", "Cosmic Revelation"],
    pronunciationIpa: "/ˈdʒen.ɚ.əl ˌrev.əˈleɪ.ʃən/",
    partOfSpeech: "Noun",
    category: "Natural Theology",
    theologicalPaths: ["natural-theology", "systematic-theology", "apologetics"],
    definitionSimple: "God's truth about His existence, power, and glory that is clearly revealed to all human beings everywhere through nature, creation, and human conscience.",
    definitionStudy: "The universal self-disclosure of God through the created cosmos, providential history, and human moral conscience, rendering all humanity without excuse before God (Rom 1:19-20).",
    definitionAcademic: "The universal, non-soteriological manifestation of God's eternal power and divine nature mediated through the works of creation and the moral law inscribed upon the human heart (lex naturalis).",
    biblicalUsage: "Scripture describes the heavens continually proclaiming the glory of God to the ends of the earth (Ps 19:1-4; Rom 1:18-32).",
    scriptureReferences: ["Psalm 19:1-6", "Acts 14:17", "Acts 17:24-28", "Romans 1:18-21", "Romans 2:14-15"],
    historicalDevelopment: "Articulated by Paul, systematized by Calvin (sensus divinitatis), and affirmed in the Belgic and Westminster Confessions.",
    theologicalSignificance: "Establishes universal human accountability to God, provides common ground for human culture, but is insufficient for saving knowledge apart from Christ.",
    majorInterpretivePositions: {
      issue: "Whether general revelation can lead to saving knowledge of God without the gospel.",
      biblicalEvidence: "Romans 1:20 (leaves men without excuse) vs Romans 10:14 (need for hearing the gospel).",
      historicalBackground: "Reformed consensus vs Enlightenment natural religion vs Karl Barth's total rejection.",
      positions: [
        { name: "Traditional Reformed", description: "General revelation is universally clear but suppressed in unrighteousness, necessitating special revelation for salvation.", traditions: ["Reformed", "Presbyterian", "Evangelical"] },
        { name: "Inclusivism", description: "Sincere responses to general revelation may receive saving grace through Christ.", traditions: ["Post-Vatican II Roman Catholic", "Moderate Evangelical"] }
      ]
    },
    denominationalDistinctions: [
      { tradition: "Reformed", positionSummary: "Emphasizes that general revelation renders fallen man 'without excuse' (Rom 1:20) and points to Christ in the gospel." }
    ],
    originalLanguages: [
      {
        language: "Biblical Hebrew",
        scriptUnicode: "סָפַר",
        lemma: "saphar",
        transliteration: "sāphar",
        pronunciation: "sah-FAR",
        partOfSpeech: "Verb",
        semanticRange: "To count, recount, declare, proclaim, narrate",
        strongsNumber: "H5608",
        biblicalOccurrencesCount: 161,
        importantOccurrences: ["Ps 19:1"],
        translationCautions: "In Psalm 19:1 the heavens continually 'narrate' the glory of God without verbal speech.",
        sources: ["Brown-Driver-Briggs Hebrew and English Lexicon"],
        verified: true
      }
    ],
    sourceKeys: ["bdb", "westminster", "logos_editorial"],
    translations: {
      bn: {
        masterEntryId: "entry-general-revelation",
        languageCode: "bn",
        localHeadword: "সাধারণ প্রকাশ (General Revelation)",
        definitionSimple: "সৃষ্টিজগত, প্রকৃতি ও মানুষের বিবেকের মাধ্যমে সকল মানুষের কাছে ঈশ্বরের অস্তিত্ব ও মহিমার প্রকাশ।",
        definitionStudy: "ঈশ্বর কর্তৃক নিখিল সৃষ্টির মধ্যে স্থাপিত প্রকাশ যা প্রতিটি মানুষের কাছে তাঁর ক্ষমতা ও ন্যায়পরায়ণতা স্পষ্ট করে তোলে।",
        definitionAcademic: "প্রাকৃতিক ধর্মতত্ত্বের মূল প্রত্যয় যা প্রমাণ করে যে বিশ্বব্রহ্মাণ্ডের কার্যধারায় ঈশ্বরের মহিমা সার্বজনীনভাবে প্রতীয়মান।",
        approvalStatus: "Theologically reviewed",
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: "2026-09-19T09:00:00Z"
      }
    }
  },

  // 63. Teleological Argument
  {
    id: "entry-teleological-argument",
    slug: "teleological-argument",
    headwordEnglish: "Teleological Argument",
    alternativeSpellings: ["Argument from Design", "Teleology"],
    pronunciationIpa: "/ˌtiː.li.əˈlɑː.dʒɪ.kəl ˈɑːrɡ.jə.mənt/",
    partOfSpeech: "Noun",
    category: "Natural Theology",
    theologicalPaths: ["natural-theology", "philosophical-theology", "apologetics"],
    definitionSimple: "The reasoned argument that the incredible order, beauty, fine-tuning, and purpose in the universe point to an intelligent, all-wise Creator God.",
    definitionStudy: "The philosophical argument for God's existence inferred from observed purpose, fine-tuning, complexity, and order in the cosmos (telos = end/purpose).",
    definitionAcademic: "An a posteriori inductive argument asserting that specified complexity and cosmic fine-tuning are best explained by an intelligent, purposeful transcendent Designer rather than unguided stochastic mechanisms.",
    biblicalUsage: "Scripture constantly appeals to the observed craftsmanship of nature to demonstrate divine wisdom (Ps 104:24; Prov 3:19; Rom 1:20).",
    scriptureReferences: ["Psalm 104:24", "Proverbs 3:19", "Romans 1:20", "Job 38-39"],
    historicalDevelopment: "Stated by Thomas Aquinas (Fifth Way), popularized by William Paley (Watchmaker Analogy), and reformulated through modern cosmic fine-tuning.",
    theologicalSignificance: "Affirms that faith is harmonious with empirical observation and cosmic beauty.",
    majorInterpretivePositions: {
      issue: "The validity of the teleological inference against evolutionary naturalism.",
      biblicalEvidence: "Creation visibly manifesting craftsmanship (Ps 19:1; Rom 1:20).",
      historicalBackground: "Paley's watchmaker vs Darwinian natural selection vs modern Intelligent Design.",
      positions: [
        { name: "Classical Design Argument", description: "Cosmic order and biological intricacy require a divine transcendent intellect.", traditions: ["Classical Christian Apologetics", "Thomism"] },
        { name: "Fine-Tuning Formulation", description: "The precise mathematical constants of the physical universe point decisively to a Cosmic Fine-Tuner.", traditions: ["Contemporary Christian Philosophy"] }
      ]
    },
    denominationalDistinctions: [
      { tradition: "Christian Apologetics", positionSummary: "Used across catholic, protestant, and orthodox traditions as a robust defense of theism." }
    ],
    originalLanguages: [
      {
        language: "Biblical Greek",
        scriptUnicode: "τέλος",
        lemma: "telos",
        transliteration: "télos",
        pronunciation: "TEH-los",
        partOfSpeech: "Noun, Neuter",
        semanticRange: "End, purpose, goal, aim, outcome, fulfillment",
        strongsNumber: "G5056",
        biblicalOccurrencesCount: 42,
        importantOccurrences: ["Rom 10:4", "1 Tim 1:5"],
        translationCautions: "Indicates purpose and fulfillment, not merely temporal termination.",
        sources: ["Thayer's Greek-English Lexicon"],
        verified: true
      }
    ],
    sourceKeys: ["thayer", "logos_editorial"],
    translations: {
      bn: {
        masterEntryId: "entry-teleological-argument",
        languageCode: "bn",
        localHeadword: "উদ্দেশ্যমূলক যুক্তি (Teleological Argument)",
        definitionSimple: "বিশ্বজগতের অসাধারণ শৃঙ্খলা ও উদ্দেশ্যময় নকশা দেখে একজন বুদ্ধিমান স্রষ্টা ঈশ্বরের অস্তিত্ব প্রমাণ করার যুক্তি।",
        definitionStudy: "প্রকৃতি ও মহাবিশ্বের সূক্ষ্ম ভারসাম্য এবং জৈবিক জটিলতা থেকে সৃষ্টিকর্তার উপস্থিতি প্রমাণের দার্শনিক বিতর্ক।",
        definitionAcademic: "প্রাকৃতিক ধর্মতত্ত্ব ও সত্য সমর্থনের যুক্তি যা প্রমাণ করে যে বিশ্বজগৎ কোনো আকস্মিক দুর্ঘটনা নয় বরং ঈশ্বরের সুপরিকল্পিত সৃষ্টি।",
        approvalStatus: "Theologically reviewed",
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: "2026-09-19T09:00:00Z"
      }
    }
  },

  // 64. Natural Law
  {
    id: "entry-natural-law",
    slug: "natural-law",
    headwordEnglish: "Natural Law",
    alternativeSpellings: ["Lex Naturalis", "Moral Law of Nature"],
    pronunciationIpa: "/ˈnætʃ.ɚ.əl lɔː/",
    partOfSpeech: "Noun",
    category: "Moral Theology",
    theologicalPaths: ["moral-theology", "christian-ethics", "natural-theology"],
    definitionSimple: "The universal moral sense of right and wrong that God has written into every human heart and conscience from creation.",
    definitionStudy: "The moral order instituted by God in creation, accessible to human reason apart from special revelation, which binds all human beings to basic moral obligations (Rom 2:14-15).",
    definitionAcademic: "The participation of rational creatures in the eternal law of God (lex aeterna), whereby universal moral norms of justice and equity are apprehendable by the lumen naturale and recorded in the conscience.",
    biblicalUsage: "Scripture describes the Gentiles who do not have the written law possessing 'the work of the law written on their hearts' (Rom 2:14-15).",
    scriptureReferences: ["Romans 2:14-15", "Romans 1:32", "Genesis 9:6", "Amos 1-2"],
    historicalDevelopment: "Synthesized by Thomas Aquinas, embraced by early Protestant reformers (Calvin, Melanchthon), and foundational to international law.",
    theologicalSignificance: "Provides a transcendent basis for civil law, universal human rights, and cross-cultural moral judgment.",
    majorInterpretivePositions: {
      issue: "The degree to which the fall corrupted humanity's ability to perceive natural law accurately.",
      biblicalEvidence: "Universal moral accountability (Rom 1-2) vs total depravity blinding the mind (1 Cor 2:14).",
      historicalBackground: "Thomistic natural law vs Protestant total depravity debates.",
      positions: [
        { name: "Protestant Common Grace View", description: "Natural law remains written on the heart by common grace, but is distorted by sin.", traditions: ["Reformed", "Lutheran", "Anglican"] },
        { name: "Thomistic Classical View", description: "Human reason retains an intrinsic, uncorrupted inclination toward the universal good.", traditions: ["Roman Catholic"] }
      ]
    },
    denominationalDistinctions: [
      { tradition: "Roman Catholic", positionSummary: "Positions natural law as the primary foundation for social and bioethical teaching." },
      { tradition: "Reformed", positionSummary: "Subordinates natural law to the explicit moral precepts of the Decalogue." }
    ],
    originalLanguages: [
      {
        language: "Biblical Greek",
        scriptUnicode: "νόμος",
        lemma: "nomos",
        transliteration: "nómos",
        pronunciation: "NOH-mos",
        partOfSpeech: "Noun, Masculine",
        semanticRange: "Law, rule, governing principle, standard of conduct",
        strongsNumber: "G3551",
        biblicalOccurrencesCount: 194,
        importantOccurrences: ["Rom 2:14-15"],
        translationCautions: "In Rom 2:14 refers to the moral law written internally without the Mosaic codex.",
        sources: ["Thayer's Greek-English Lexicon"],
        verified: true
      }
    ],
    sourceKeys: ["westminster", "logos_editorial"],
    translations: {
      bn: {
        masterEntryId: "entry-natural-law",
        languageCode: "bn",
        localHeadword: "প্রাকৃতিক বিধি (Natural Law)",
        definitionSimple: "ঈশ্বরের সেই সার্বজনীন নৈতিক নিয়ম যা তিনি প্রতিটি মানুষের অন্তরে ও বিবেকে সৃষ্টিলগ্নেই লিখে দিয়েছেন।",
        definitionStudy: "লিখিত শাস্ত্র ছাড়াও মানুষের বিবেক ও যুক্তি দ্বারা উপলব্ধিযোগ্য ঈশ্বরের সার্বজনীন নৈতিক নির্দেশিকা।",
        definitionAcademic: "নৈতিক ধর্মতত্ত্বের একটি অঙ্গ যা সকল মানুষের ন্যায় ও অন্যায়বোধের অন্তর্নিহিত পরম মানদণ্ড নির্ধারণ করে।",
        approvalStatus: "Theologically reviewed",
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: "2026-09-19T09:00:00Z"
      }
    }
  },

  // 65. Virtue Ethics
  {
    id: "entry-virtue-ethics",
    slug: "virtue-ethics",
    headwordEnglish: "Virtue Ethics",
    alternativeSpellings: ["Christian Virtue Ethics", "Aretaic Ethics"],
    pronunciationIpa: "/ˈvɝː.tʃuː ˈeθ.ɪks/",
    partOfSpeech: "Noun",
    category: "Christian Ethics",
    theologicalPaths: ["christian-ethics", "moral-theology", "spiritual-formation"],
    definitionSimple: "A Christian approach to living right that focuses on who a person becomes in Christ, cultivating godly character, love, and the fruit of the Holy Spirit.",
    definitionStudy: "A normative ethical framework emphasizing moral character and the habitual cultivation of theological virtues (faith, hope, love) and cardinal virtues transformed by the Holy Spirit.",
    definitionAcademic: "An aretaic moral system centered on the teleological transformation of the agent toward habitus of righteousness, transcending mere deontological legalism or consequentialism.",
    biblicalUsage: "Scripture commands believers to grow in godliness and lists specific virtues to cultivate (Gal 5:22-23; 2 Pet 1:5-7; Phil 4:8).",
    scriptureReferences: ["Galatians 5:22-23", "Philippians 4:8", "Colossians 3:12-14", "2 Peter 1:5-7"],
    historicalDevelopment: "Synthesized ancient virtue ethics (Aristotle) with Christian gospel revelation through Augustine and Aquinas.",
    theologicalSignificance: "Focuses on heart transformation through union with Christ rather than external hypocrisy.",
    majorInterpretivePositions: {
      issue: "Whether Christian ethics is primarily rule-keeping (deontological) or character formation (aretaic).",
      biblicalEvidence: "Commandments (Exod 20) vs fruits of the Spirit (Gal 5).",
      historicalBackground: "Legalistic moralism vs gospel character formation.",
      positions: [
        { name: "Integrated Christological Virtue", description: "Moral rules reveal God's will while the Spirit produces virtuous Christlikeness.", traditions: ["Ecumenical Christian", "Reformed", "Anglican"] }
      ]
    },
    denominationalDistinctions: [
      { tradition: "Catholic & Anglican", positionSummary: "Explicitly structures moral instruction around theological and cardinal virtues." },
      { tradition: "Evangelical", positionSummary: "Emphasizes the fruit of the Spirit and inward heart regeneration." }
    ],
    originalLanguages: [
      {
        language: "Biblical Greek",
        scriptUnicode: "ἀρετή",
        lemma: "arete",
        transliteration: "aretē",
        pronunciation: "ah-reh-TAY",
        partOfSpeech: "Noun, Feminine",
        semanticRange: "Moral goodness, excellence, virtue, praiseworthy character",
        strongsNumber: "G703",
        biblicalOccurrencesCount: 5,
        importantOccurrences: ["Phil 4:8", "2 Pet 1:5"],
        translationCautions: "Denotes moral excellence reflecting God's holy character, not human boastful pride.",
        sources: ["Thayer's Greek-English Lexicon"],
        verified: true
      }
    ],
    sourceKeys: ["thayer", "heidelberg", "logos_editorial"],
    translations: {
      bn: {
        masterEntryId: "entry-virtue-ethics",
        languageCode: "bn",
        localHeadword: "সদ্গুণ নীতিশাস্ত্র (Virtue Ethics)",
        definitionSimple: "কেবল নিয়ম মান্য করা নয়, বরং খ্রীষ্টে চরিত্র গঠন ও আত্মিক গুণাবলীর বিকাশ সাধনের নীতিশাস্ত্র।",
        definitionStudy: "পবিত্র আত্মার ফলের মাধ্যমে বিশ্বাসীর অন্তরে ঈশ্বরীয় চরিত্রের অভ্যাসগত গঠন ও রূপান্তর।",
        definitionAcademic: "খ্রীষ্টীয় নীতিশাস্ত্রের একটি তত্ত্ব যা বাহ্যিক আজ্ঞাপালনের চেয়ে অন্তরের ধার্মিক স্বভাবের ওপর গুরুত্ব আরোপ করে।",
        approvalStatus: "Theologically reviewed",
        needsSyncWithMaster: false,
        versionNumber: 1,
        lastUpdated: "2026-09-19T09:00:00Z"
      }
    }
  }
];
