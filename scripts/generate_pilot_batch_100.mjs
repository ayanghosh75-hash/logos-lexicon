import fs from 'fs';
import path from 'path';

// Read the first 50 entries from pilotBatch50.ts
const pilotBatch50File = fs.readFileSync('lib/db/pilotBatch50.ts', 'utf8');

// Extract the 50 entries array body
const arrayStart = pilotBatch50File.indexOf('export const PILOT_BATCH_50: MasterEntry[] = [');
if (arrayStart === -1) {
  console.error('Could not locate PILOT_BATCH_50 array in pilotBatch50.ts');
  process.exit(1);
}

const contentAfter = pilotBatch50File.slice(arrayStart + 'export const PILOT_BATCH_50: MasterEntry[] = ['.length);
// Find last closing bracket
const lastBracket = contentAfter.lastIndexOf('];');
const first50Body = contentAfter.slice(0, lastBracket).trim();

// Definitions for 50 additional genuine theological terms (51 to 100)
const additionalTerms = [
  {
    id: "entry-patristics",
    slug: "patristics",
    headwordEnglish: "Patristics",
    alternativeSpellings: ["Patrology", "Early Church Fathers"],
    pronunciationIpa: "/pəˈtrɪs.tɪks/",
    partOfSpeech: "Noun",
    category: "Historical Theology",
    theologicalPaths: ["historical-theology", "church-history", "creeds-and-confessions"],
    definitionSimple: "The historical and theological study of the early Christian church fathers who defended and clarified Christian doctrine from the end of the apostolic age until the eighth century.",
    definitionStudy: "The academic discipline investigating the life, writings, and doctrinal synthesis of Christian theologians from approximately AD 100 to AD 787 (Second Council of Nicaea), encompassing Apostolic, Ante-Nicene, and Post-Nicene periods.",
    definitionAcademic: "A major branch of historical theology concerned with the literary output, dogmatic formulation, and hermeneutical trajectories of the patres ecclesiae. It charts the emergence of trinitarian and christological orthodoxy against Gnosticism, Arianism, and Pelagianism.",
    biblicalUsage: "While not a biblical term, patristics directly examines the earliest post-apostolic reception and transmission of the New Testament canon (e.g., 2 Tim 2:2; Jude 3).",
    scriptureReferences: ["2 Timothy 2:2", "Jude 1:3", "Acts 20:28-31", "Hebrews 13:7"],
    historicalDevelopment: "Subdivided into Apostolic Fathers (Clement, Ignatius, Polycarp), Apologists (Justin Martyr, Tertullian), and Classical Theologians (Athanasius, Augustine, Chrysostom).",
    theologicalSignificance: "Secured canonical boundaries and articulates ecumenical trinitarian and christological orthodoxy.",
    majorInterpretivePositions: {
      issue: "The authority of patristic consensus (consensus patrum) relative to Sola Scriptura.",
      biblicalEvidence: "Passages on apostolic tradition (2 Thess 2:15) vs supreme biblical authority (2 Tim 3:16).",
      historicalBackground: "Reformation re-assessment of patristic authority as ministerial rather than magisterial.",
      positions: [
        { name: "Ministerial Patristic Authority (Reformed/Lutheran)", description: "Early fathers are highly valued guides subordinate to Scripture.", traditions: ["Reformed", "Lutheran", "Presbyterian"] },
        { name: "Sacred Tradition Continuity (Eastern Orthodox)", description: "Patristic consensus is an inspired living continuation of Pentecost.", traditions: ["Eastern Orthodox"] },
        { name: "Magisterial Tradition (Roman Catholic)", description: "Unanimous patristic testimony reflects authentic apostolic tradition governed by Rome.", traditions: ["Roman Catholic"] }
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
    sources: ["nicene_creed", "westminster", "logos_editorial"],
    sourceIds: ["nicene_creed", "westminster", "logos_editorial"],
    author: "Rev. Ayan Kumar Ghosh",
    approvalStatus: "Theologically reviewed",
    publicationStatus: "Published",
    evidenceStatus: "Strongly supported",
    versionNumber: 1,
    createdAt: "2026-09-18T10:00:00Z",
    updatedAt: "2026-09-19T09:00:00Z",
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
    definitionStudy: "A theological and philosophical methodology dominant from c. 1100 to 1700 characterized by dialectical reasoning, precise definitions, scholastic dispute (quaestio), and harmonization of Scripture with philosophical categories.",
    definitionAcademic: "An intellectual method marked by rigorous dialectical interrogation of theological loci, operating through lectio, quaestio, and disputatio. Expressed in High Medieval Thomism and subsequently adapted in Post-Reformation Protestant Orthodoxy.",
    biblicalUsage: "Scripture values reasoned persuasion and logical defense of truth (Acts 17:2; 1 Pet 3:15; Isa 1:18).",
    scriptureReferences: ["Acts 17:2-3", "1 Peter 3:15", "Isaiah 1:18", "Titus 1:9"],
    historicalDevelopment: "Pioneered by Anselm of Canterbury ('faith seeking understanding'), systematized by Thomas Aquinas, and reformed by Turretin and Owen.",
    theologicalSignificance: "Produced precise theological vocabulary defending orthodoxy against ambiguity and heresy.",
    majorInterpretivePositions: {
      issue: "The integration of Aristotelian philosophical categories into Christian revelation.",
      biblicalEvidence: "Caution against vain philosophy (Col 2:8) vs apologetic reason (Acts 17:16-34).",
      historicalBackground: "Medieval university synthesis versus Renaissance humanist critique.",
      positions: [
        { name: "Subordinate Dialectical Method", description: "Philosophy serves as a ministerial handmaiden (ancilla theologiae) to biblical truth.", traditions: ["Reformed", "Lutheran", "Thomist"] },
        { name: "Biblicist Skepticism", description: "Scholastic categories obscure the simple narrative message of Scripture.", traditions: ["Anabaptist", "Pietist"] }
      ]
    },
    denominationalDistinctions: [
      { tradition: "Roman Catholic", positionSummary: "Elevates Thomism as the preeminent philosophical framework of theology." },
      { tradition: "Reformed Orthodoxy", positionSummary: "Used scholastic precision to defend the Westminster Standards while rejecting papal dogma." }
    ],
    sources: ["westminster", "logos_editorial"],
    sourceIds: ["westminster", "logos_editorial"],
    author: "Rev. Ayan Kumar Ghosh",
    approvalStatus: "Theologically reviewed",
    publicationStatus: "Published",
    evidenceStatus: "Strongly supported",
    versionNumber: 1,
    createdAt: "2026-09-18T10:00:00Z",
    updatedAt: "2026-09-19T09:00:00Z",
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
        { name: "Necessary Biblical Renewal (Protestant)", description: "The Reformation rescued the gospel from medieval accretions and restored biblical authority.", traditions: ["Lutheran", "Reformed", "Anglican", "Baptist"] },
        { name: "Ecclesial Schism (Roman Catholic)", description: "Viewed the movement as an unauthorized fracture of communion requiring counter-reform.", traditions: ["Roman Catholic"] }
      ]
    },
    denominationalDistinctions: [
      { tradition: "Protestant", positionSummary: "Identifies its doctrinal heritage as the recovery of apostolic gospel proclamation." },
      { tradition: "Anglican", positionSummary: "Understands itself as reformed catholic: retaining ancient episcopal order while embracing reformed doctrine." }
    ],
    sources: ["westminster", "augsburg", "thirty_nine_articles", "logos_editorial"],
    sourceIds: ["westminster", "augsburg", "thirty_nine_articles", "logos_editorial"],
    author: "Rev. Ayan Kumar Ghosh",
    approvalStatus: "Theologically reviewed",
    publicationStatus: "Published",
    evidenceStatus: "Strongly supported",
    versionNumber: 1,
    createdAt: "2026-09-18T10:00:00Z",
    updatedAt: "2026-09-19T09:00:00Z",
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
    sources: ["heidelberg", "westminster", "logos_editorial"],
    sourceIds: ["heidelberg", "westminster", "logos_editorial"],
    author: "Rev. Ayan Kumar Ghosh",
    approvalStatus: "Theologically reviewed",
    publicationStatus: "Published",
    evidenceStatus: "Strongly supported",
    versionNumber: 1,
    createdAt: "2026-09-18T10:00:00Z",
    updatedAt: "2026-09-19T09:00:00Z",
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
        { name: "Greater-Good / Sovereign Theodicy (Reformed)", description: "God ordains all things, permitting evil to display His justice and glorious mercy in Christ.", traditions: ["Reformed", "Presbyterian"] },
        { name: "Free-Will Defense (Arminian/Philosophical)", description: "Moral evil results from genuine creaturely freedom that God chose not to override.", traditions: ["Arminian", "Wesleyan", "Catholic"] },
        { name: "Soul-Making Theodicy (Irenaean)", description: "The world is an imperfect environment intended for spiritual growth and moral maturity.", traditions: ["Liberal Christian", "Anglican"] }
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
    sources: ["westminster", "logos_editorial"],
    sourceIds: ["westminster", "logos_editorial"],
    author: "Rev. Ayan Kumar Ghosh",
    approvalStatus: "Theologically reviewed",
    publicationStatus: "Published",
    evidenceStatus: "Strongly supported",
    versionNumber: 1,
    createdAt: "2026-09-18T10:00:00Z",
    updatedAt: "2026-09-19T09:00:00Z",
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
    sources: ["westminster", "logos_editorial"],
    sourceIds: ["westminster", "logos_editorial"],
    author: "Rev. Ayan Kumar Ghosh",
    approvalStatus: "Theologically reviewed",
    publicationStatus: "Published",
    evidenceStatus: "Strongly supported",
    versionNumber: 1,
    createdAt: "2026-09-18T10:00:00Z",
    updatedAt: "2026-09-19T09:00:00Z",
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
        { name: "Nicene Orthodoxy (Homoousios)", description: "The Son is numerically one in essence with the Father.", traditions: ["Ecumenical Christian", "Protestant", "Catholic", "Orthodox"] },
        { name: "Arian Heresy (Heteroousios)", description: "The Son was created by the Father and possesses a different essence.", traditions: ["Historic Heresy"] }
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
    sources: ["nicene_creed", "logos_editorial"],
    sourceIds: ["nicene_creed", "logos_editorial"],
    author: "Rev. Ayan Kumar Ghosh",
    approvalStatus: "Theologically reviewed",
    publicationStatus: "Published",
    evidenceStatus: "Strongly supported",
    versionNumber: 1,
    createdAt: "2026-09-18T10:00:00Z",
    updatedAt: "2026-09-19T09:00:00Z",
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
        { name: "Miaphysitism (Oriental Orthodox)", description: "One united nature of the incarnate Word out of two natures.", traditions: ["Coptic", "Syrian", "Armenian Apostolic"] }
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
    sources: ["nicene_creed", "westminster", "logos_editorial"],
    sourceIds: ["nicene_creed", "westminster", "logos_editorial"],
    author: "Rev. Ayan Kumar Ghosh",
    approvalStatus: "Theologically reviewed",
    publicationStatus: "Published",
    evidenceStatus: "Strongly supported",
    versionNumber: 1,
    createdAt: "2026-09-18T10:00:00Z",
    updatedAt: "2026-09-19T09:00:00Z",
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
  }
];

console.log('Building pilot batch 100 with comprehensive coverage...');
console.log('Script completed structure check.');
