// lib/sermons/sundayPulpitLibrary.ts
// ============================================================================
// SUNDAY PULPIT STUDIO — রবিবাসরীয় সার্মন ভান্ডার
// Curated Exegetical Sermon Packages for Pastors, Preachers & Bible Teachers
// Project Director & Theological Lead: Ayan Kumar Ghosh
// ============================================================================

export interface SermonPackage {
  id: string;
  titleBn: string;
  titleEn: string;
  passage: string;
  themeBn: string;
  themeEn: string;
  category: 'Sunday Worship' | 'Easter & Cross' | 'Christmas & Advent' | 'Sacraments & Rites' | 'Faith & Discipleship';
  categoryBn: string;
  isFreePreview: boolean;
  durationMinutes: number;
  exegesisLemma: {
    word: string;
    transliteration: string;
    strongs: string;
    language: 'Greek' | 'Hebrew';
    meaningBn: string;
  };
  introductionBn: string;
  introductionEn: string;
  pointsBn: string[];
  pointsEn: string[];
  illustrationBn: string;
  illustrationEn: string;
  applicationBn: string;
  applicationEn: string;
  benedictionBn: string;
  benedictionEn: string;
}

export const SUNDAY_PULPIT_LIBRARY: SermonPackage[] = [
  // 1. FREE PREVIEW — John 1:1-14 (Incarnation / Grace)
  {
    id: 'sermon-01',
    titleBn: 'বাক্য রক্তমাংস হলেন: অনুগ্রহ ও সত্যের অবতার',
    titleEn: 'The Word Became Flesh: Full of Grace and Truth',
    passage: 'যোহন ১:১-১৪ (John 1:1-14)',
    themeBn: 'যীশু খ্রিস্ট কোনো কাল্পনিক দর্শন নন, তিনি ঈশ্বরের জীবন্ত বাক্য যিনি আমাদের মাঝে বাস করতে এলেন।',
    themeEn: 'Christ is not an abstract philosophy, but God\'s eternal living Word who pitched His tent among us.',
    category: 'Sunday Worship',
    categoryBn: 'রবিবাসরীয় উপাসনা',
    isFreePreview: true,
    durationMinutes: 35,
    exegesisLemma: {
      word: 'χάρις',
      transliteration: 'Charis',
      strongs: 'G5485',
      language: 'Greek',
      meaningBn: 'অযাচিত পরম অনুগ্রহ—যা মানুষের কোনো যোগ্যতায় নয়, বরং ঈশ্বরের নিঃশর্ত প্রেমে প্রদত্ত।',
    },
    introductionBn: 'অন্ধকার ও দিশাহীন পৃথিবীতে মানুষ যখন জীবনের আসল অর্থ খুঁজছে, তখন সুসমাচার আমাদের কোনো কঠিন নিয়ম দেয় না; বরং এক জীবন্ত ব্যক্তিত্বের কাছে নিয়ে আসে—যীশু খ্রিস্ট।',
    introductionEn: 'In a restless world seeking authentic light, the Gospel gives us not a burden of rules, but a living Person: Jesus Christ, the eternal Word.',
    pointsBn: [
      '১. প্রাক-অস্তিত্বশীল ঈশ্বরত্ব: তিনি সৃষ্টির প্রারম্ভেই ছিলেন এবং স্বয়ং ঈশ্বর (পদ ১-২)।',
      '২. জ্যোতি ও জীবনের উৎস: অন্ধকার কখনোই তাঁর জীবনময় আলোকে নিভিয়ে দিতে পারে না (পদ ৪-৫)।',
      '৩. অবতীর্ণ হওয়ার আশ্চর্য অনুগ্রহ: সৃষ্টিকর্তা আমাদের মাঝে তাঁবু ফেললেন, অনুগ্রহ ও সত্যে পূর্ণ হয়ে (পদ ১৪)।',
    ],
    pointsEn: [
      '1. The Pre-Existent Majesty: He was in the beginning with God and is God (vv. 1-2).',
      '2. The Unconquerable Light: Darkness has not and cannot overcome Him (vv. 4-5).',
      '3. The Scandal of Incarnation: The Creator pitched His tent among us in grace and truth (v. 14).',
    ],
    illustrationBn: 'প্রাচীনকালে মরুভূমিতে যখন রাজা তাঁর প্রজাদের সাথে তাঁবুতে বাস করতেন, তখন প্রজারা জানত যে রাজা তাদের সুখ-দুঃখের সবচেয়ে কাছের সঙ্গী। ঠিক তেমনি, ঈশ্বর স্বর্গে দূরবর্তী না থেকে যীশুতে আমাদের ঘরের পাশে নেমে এসেছেন।',
    illustrationEn: 'Like an ancient shepherd-king who leaves his palace to pitch his tent right beside weary travelers in the desert, God entered our human neighborhood in Jesus.',
    applicationBn: 'ধর্মীয় কঠোরতা দিয়ে ঈশ্বরের ভালোবাসা অর্জনের চেষ্টা বন্ধ করে, আজই খ্রীষ্টের রক্তে কেনা মুক্তির অনুগ্রহ পূর্ণ হৃদয়ে গ্রহণ করুন এবং অন্যদের প্রতি সেই ক্ষমা প্রদর্শন করুন।',
    applicationEn: 'Stop exhausting yourself trying to earn God\'s love; receive the finished work of Christ and extend His unconditional grace to those who have hurt you.',
    benedictionBn: 'প্রভু যীশু খ্রীষ্টের পরম অনুগ্রহ, ঈশ্বরের অপরিমেয় প্রেম এবং পবিত্র আত্মার সহভাগিতা তোমাদের সকলের সাথে অনন্তকাল বিরাজ করুক। আমেন।',
    benedictionEn: 'May the grace of our Lord Jesus Christ, the love of God, and the fellowship of the Holy Spirit be with you all now and forever. Amen.',
  },

  // 2. FREE PREVIEW — Psalm 23 (Comfort / Sovereignty)
  {
    id: 'sermon-02',
    titleBn: 'সদাপ্রভু আমার পালক: কোনো কিছুরই অভাব হবে না',
    titleEn: 'The Lord is My Shepherd: Fearless in the Darkest Valley',
    passage: 'গীতসংহিতা ২৩:১-৬ (Psalm 23:1-6)',
    themeBn: 'জীবনের অন্ধকারতম উপত্যকায়ও বিশ্বাসী একাকী নয়; বিশ্বস্ত মেষপালক সদাপ্রভু আমাদের পথপ্রদর্শক ও আশ্রয়।',
    themeEn: 'Even in the deepest shadow of death, the believer is not alone; the Good Shepherd guides, protects, and restores.',
    category: 'Faith & Discipleship',
    categoryBn: 'বিশ্বাস ও শিষ্যত্ব',
    isFreePreview: true,
    durationMinutes: 30,
    exegesisLemma: {
      word: 'יְהוָה רֹעִי',
      transliteration: 'Yahweh Ro\'i',
      strongs: 'H7462',
      language: 'Hebrew',
      meaningBn: 'সদাপ্রভু আমার ব্যক্তিগত রাখাল—যিনি মেষের প্রতিটি দুর্বলতা জানেন এবং প্রাণ দিয়ে রক্ষা করেন।',
    },
    introductionBn: 'ভয়, অনিশ্চয়তা ও একাকিত্ব যখন আমাদের হৃদয়কে গ্রাস করতে চায়, তখন দায়ূদের এই অমর গীতসংহিতা আমাদের স্মরণ করিয়ে দেয় যে আমাদের একজন রক্ষাকর্তা আছেন যিনি কখনো ঘুমান না।',
    introductionEn: 'When anxiety and grief threaten to overwhelm our hearts, Psalm 23 anchors our souls in the tender care of a Shepherd who never slumbers nor sleeps.',
    pointsBn: [
      '১. পরম তৃপ্তির নিশ্চয়তা: সদাপ্রভু আমার পালক, তাই আমার কোনো কিছুর অভাব হবে না (পদ ১-২)।',
      '২. অন্ধকার উপত্যকায় অভয়: মৃত্যুচ্ছায়ার উপত্যকা দিয়ে গেলেও আমি ভয় করব না, কারণ তুমি আমার সঙ্গে আছ (পদ ৪)।',
      '৩. শত্রুর সম্মুখে রাজকীয় মেজবানি: আমার মস্তক তৈলে অভিষিক্ত এবং আমার পানপাত্র উপচে পড়ছে (পদ ৫-৬)।',
    ],
    pointsEn: [
      '1. Sovereign Provision: The Lord is my Shepherd; I lack nothing that my soul truly needs (vv. 1-2).',
      '2. Unshakable Presence: Even walking through the valley of the shadow of death, His rod and staff comfort me (v. 4).',
      '3. Overflowing Honor: A banquet prepared in the presence of foes; goodness and mercy pursue me all my days (vv. 5-6).',
    ],
    illustrationBn: 'যিহুদা মরুভূমির মেষপালকরা মেষদের কখনো পিছু থেকে তাড়িয়ে নিত না; তারা বাঁশি বাজিয়ে মেষদের আগে আগে পথ দেখিয়ে নিয়ে যেত। খাদে পড়ে যাওয়া মেষকে তারা লাঠি দিয়ে আলতো করে টেনে তুলত।',
    illustrationEn: 'Shepherds in the Judean wilderness never drive sheep from behind with harsh whips; they walk ahead, calling each sheep by name, pulling them gently from rocky crevices with their crook.',
    applicationBn: 'আপনার জীবনের আগামী দিনগুলোর ভার আজই মেষপালক যীশুর চরণে সঁপে দিন। মানুষের ভরসা ত্যাগ করে তাঁর শব্দের ওপর নির্ভর করুন।',
    applicationEn: 'Surrender tomorrow\'s anxieties at the feet of the Good Shepherd. Trust His pace, His rod, and His provision for every step ahead.',
    benedictionBn: 'শান্তিদাতা ঈশ্বর তোমাদের সমস্ত আত্মিক কুশলে পূর্ণ করুন এবং তাঁর চিরন্তন করুণা তোমাদের জীবনের প্রতিটি পদক্ষেপে ছায়া দান করুক। আমেন।',
    benedictionEn: 'May the God of peace make you complete in every good work to do His will, and may His goodness and mercy follow you always. Amen.',
  },

  // 3. FREE PREVIEW — Romans 8:31-39 (Unconquerable Love)
  {
    id: 'sermon-03',
    titleBn: 'ঈশ্বরের প্রেম থেকে কে আমাদের বিচ্ছিন্ন করবে?',
    titleEn: 'More Than Conquerors: Unbreakable Covenant Love',
    passage: 'রোমীয় ৮:৩১-৩৯ (Romans 8:31-39)',
    themeBn: 'খ্রীষ্ট যীশুতে প্রকাশিত ঈশ্বরের অটল প্রেম থেকে কোনো সংকট, বিপদ বা পার্থিব শক্তি আমাদের বিচ্ছিন্ন করতে পারে না।',
    themeEn: 'No tribulation, persecution, sword, or cosmic power can ever sever God\'s redeemed children from His eternal love in Christ.',
    category: 'Sunday Worship',
    categoryBn: 'রবিবাসরীয় উপাসনা',
    isFreePreview: true,
    durationMinutes: 35,
    exegesisLemma: {
      word: 'ὑπερνικῶμεν',
      transliteration: 'Hypernikomen',
      strongs: 'G5245',
      language: 'Greek',
      meaningBn: 'আমরা বিজয়ীর চেয়েও শ্রেষ্ঠ (Super-conquerors)—খ্রীষ্টের রক্তে নিশ্চিত চূড়ান্ত জয়ী।',
    },
    introductionBn: 'যদি ঈশ্বর আমাদের পক্ষে হন, তবে আমাদের বিপক্ষে কে দাঁড়াতে পারে? রোমের বন্দিশালা থেকে পৌল যখন এই ঘোষণা লিখেছিলেন, তখন তিনি পার্থিব আরাম নয়, স্বর্গীয় নিশ্চয়তার ওপর দাঁড়িয়েছিলেন।',
    introductionEn: 'If God is for us, who can be against us? When Paul wrote these triumphant words, he was not in a luxury palace, but facing martyrdom, anchored in eternal security.',
    pointsBn: [
      '১. সর্বোচ্চ ত্যাগের প্রমাণ: যিনি নিজের পুত্রকে পর্যন্ত দান করলেন, তিনি কি আমাদের অন্য সব কিছু দেবেন না? (পদ ৩১-৩২)।',
      '২. আদালতে কোনো অভিযোগ টিকবে না: ঈশ্বর যাদের ধার্মিক গণ্য করেছেন, তাদের বিরুদ্ধে কে অভিযোগ তুলবে? (পদ ৩৩-৩৪)।',
      '৩. পরম বিজয়ীর জয়গান: কোনো বিপদ, অভাব বা অত্যাচার আমাদের খ্রীষ্টের প্রেম থেকে পৃথক করতে পারে না (পদ ৩৫-৩৯)।',
    ],
    pointsEn: [
      '1. The Supreme Pledge: He who spared not His own Son will freely give us all things in Him (vv. 31-32).',
      '2. No Condemnation in Court: God is the One who justifies; Christ ever lives to intercede for us (vv. 33-34).',
      '3. Super-Conquerors in Crisis: In all persecutions, nakedness, or sword, we overwhelmingly conquer through Him who loved us (vv. 35-39).',
    ],
    illustrationBn: 'একটি ছোট শিশু যখন গভীর ঝড়ের মধ্যে তার বাবার শক্তিশালী হাত শক্ত করে ধরে রাখে, সে বুঝতে পারে যে ঝড়ের চেয়েও তার বাবার হাতের বাঁধন হাজার গুণ বেশি শক্তিশালী। ঈশ্বরের হাতও তেমনি আমাদের ধরে রেখেছে।',
    illustrationEn: 'A child clinging to a father\'s hand on a turbulent ferry may slip, but the child doesn\'t drown because the father\'s grip never lets go. God\'s covenant grip on you is unbreakable.',
    applicationBn: 'বর্তমান হতাশা বা আর্থিক টানাপোড়েন দেখে বিশ্বাস হারাবেন না; আপনার পরিচয় সংকটের শিকার নয়, খ্রীষ্টে আপনি এক অপরাজেয় বিজয়ী।',
    applicationEn: 'Stop defining yourself by temporary trials or sickness. Stand firm in the truth: you are a super-conqueror through Christ who died and rose for you.',
    benedictionBn: 'যিনি তোমাদের স্খলন থেকে রক্ষা করতে এবং তাঁর মহিমার সামনে পরম আনন্দে উপস্থিত করতে সমর্থ, সেই একমাত্র পরিত্রাতা ঈশ্বরের গৌরব যুগে যুগে হোক। আমেন।',
    benedictionEn: 'Now unto Him who is able to keep you from falling and to present you faultless before His glory with exceeding joy, be glory and honor forever. Amen.',
  },

  // 4. PREMIUM — Isaiah 53:1-12 (Good Friday / Atonement)
  {
    id: 'sermon-04',
    titleBn: 'আমাদের অপরাধের কারণে তিনি বিদ্ধ হলেন (গুড ফ্রাইডে বিশেষ)',
    titleEn: 'Pierced for Our Transgressions: The Substitutionary Lamb',
    passage: 'যিশাইয় ৫৩:১-১২ (Isaiah 53:1-12)',
    themeBn: 'ক্রুশের ওপর খ্রীষ্টের বলিদান কোনো দুর্ঘটনা নয়; আমাদের সমস্ত পাপের ঋণ শোধ করার জন্য ঈশ্বরের পূর্বপরিকল্পিত প্রায়শ্চিত্ত।',
    themeEn: 'Christ on Calvary was not a tragic accident, but God\'s deliberate substitutionary sacrifice to cancel our eternal debt.',
    category: 'Easter & Cross',
    categoryBn: 'গুড ফ্রাইডে ও পুনরুত্থান',
    isFreePreview: false,
    durationMinutes: 40,
    exegesisLemma: {
      word: 'מְחֹלָל',
      transliteration: 'Mecholal',
      strongs: 'H2490',
      language: 'Hebrew',
      meaningBn: 'মারাত্মকভাবে বিদ্ধ ও ক্ষতবিক্ষত—আমাদের অপরাধের বোঝার কারণে চূর্ণবিচূর্ণ।',
    },
    introductionBn: 'কালভারির ক্রুশ মানব ইতিহাসের সর্বশ্রেষ্ঠ মিলনমেলা—যেখানে ঈশ্বরের পরম ন্যায়বিচার এবং ঈশ্বরের অপরিসীম করুণা একে অপরকে আলিঙ্গন করেছে।',
    introductionEn: 'The cross of Calvary is the cosmic crossroads where divine justice and divine mercy meet in holy embrace for the redemption of sinners.',
    pointsBn: [
      '১. অবহেলিত ও উপেক্ষিত দুঃখের পাত্র: মানুষের চোখে যার কোনো রূপ বা সৌন্দর্য ছিল না (পদ ১-৩)।',
      '২. প্রতিনিধিমূলক শাস্তি: তিনি আমাদের রোগ বহন করলেন, আমাদের যাতনা নিজের ওপর নিলেন (পদ ৪-৬)।',
      '৩. পুনরুত্থানের গৌরব ও সন্তুষ্টি: তাঁর আত্মার কষ্টের পর তিনি আলোর মুখ দেখলেন এবং বহু লোককে ধার্মিক করলেন (পদ ১০-১২)।',
    ],
    pointsEn: [
      '1. Despised and Rejected: A man of sorrows and acquainted with deepest grief (vv. 1-3).',
      '2. The Great Substitution: The chastisement for our peace was upon Him; by His stripes we are healed (vv. 4-6).',
      '3. Triumphant Satisfaction: He shall see the fruit of the travail of His soul and be satisfied (vv. 10-12).',
    ],
    illustrationBn: 'একটি ঋণগ্রস্ত বন্দীকে যখন মৃত্যুদণ্ড দেওয়া হচ্ছিল, তখন বিচারকের নিজের সন্তান এসে নিজের বুকে সেই দণ্ড গ্রহণ করে বন্দীকে মুক্ত করে দিলেন। ক্রুশে খ্রীষ্ট আমাদের জন্য ঠিক তাই করেছেন।',
    illustrationEn: 'A monarch pays the crushing bankruptcy debt of rebellious peasants out of royal coffers, then dies in their place at the scaffold. This is substitutionary atonement.',
    applicationBn: 'পাপের গ্লানি নিয়ে পালিয়ে বেড়াবেন না; কালভারির রক্তে ধৌত হয়ে আজই নতুন জীবনের শপথে ফিরে আসুন।',
    applicationEn: 'Draw near to the cross in brokenness; let His cleansing blood remove every stain of guilt and grant you righteous peace.',
    benedictionBn: 'ক্রুশারোপিত ও পুনরুত্থিত প্রভু যীশু খ্রীষ্টের শান্তি তোমাদের অন্তঃকরণে সর্বদা রাজত্ব করুক। আমেন।',
    benedictionEn: 'May the peace of the crucified and risen Savior guard your hearts and minds in Christ Jesus forever. Amen.',
  },

  // 5. PREMIUM — Matthew 28:1-10 (Easter Sunday)
  {
    id: 'sermon-05',
    titleBn: 'তিনি এখানে নেই, তিনি পুনরুত্থিত হয়েছেন! (ইস্টার সানডে)',
    titleEn: 'He is Not Here; He is Risen! Victory Over the Grave',
    passage: 'মথি ২৮:১-১০ (Matthew 28:1-10)',
    themeBn: 'খ্রীষ্টের শূন্য কবর প্রমাণ করে যে মৃত্যু ও পাপ চিরতরে পরাজিত; খ্রীষ্টে বিশ্বাসীদের অনন্ত জীবনের নিশ্চয়তা প্রতিষ্ঠিত।',
    themeEn: 'The empty tomb guarantees that death, sin, and despair are decisively conquered; eternal life is an assured reality.',
    category: 'Easter & Cross',
    categoryBn: 'গুড ফ্রাইডে ও পুনরুত্থান',
    isFreePreview: false,
    durationMinutes: 35,
    exegesisLemma: {
      word: 'ἠγέρθη',
      transliteration: 'Egerthe',
      strongs: 'G1453',
      language: 'Greek',
      meaningBn: 'তিনি পুনরুত্থিত হয়েছেন (Divine Passive)—পিতার শক্তিতে গৌরবান্বিত জয়ী হয়ে মৃত্যু থেকে উত্থিত।',
    },
    introductionBn: 'বিশ্বের সমস্ত ধর্মীয় নেতার সমাধি এখনো সংরক্ষিত, কিন্তু যীশুর সমাধি শূন্য! কারণ মৃত্যু তাঁকে ধরে রাখতে পারেনি।',
    introductionEn: 'Every founder of religion lies in an occupied grave, but the tomb of Jesus stands gloriously empty—death could not hold the Prince of Life.',
    pointsBn: [
      '১. গড়িয়ে দেওয়া ভারী পাথর: পাথর সরানো হয়েছিল যীশুকে বের করার জন্য নয়, মানুষকে শূন্য কবর দেখার জন্য (পদ ১-৪)।',
      '২. স্বর্গদূতের আনন্দবার্তা: "ভয় পেয়ো না, তিনি জীবিত!" (পদ ৫-৭)।',
      '৩. জীবিত প্রভুর সাথে সাক্ষাত ও বিশ্বব্যাপী আহ্বান: "গিয়ে আমার ভাইদের বলো" (পদ ৮-১০)।',
    ],
    pointsEn: [
      '1. The Stone Rolled Away: Not to let Christ out, but to let the disciples see the empty tomb (vv. 1-4).',
      '2. The Angelic Gospel: "Do not fear; He is not here, for He has risen as He said!" (vv. 5-7).',
      '3. Living Commission: Encountering the risen Lord transforms fearful followers into bold heralds (vv. 8-10).',
    ],
    illustrationBn: 'একটি অন্ধকার ঘরে একটিমাত্র মোমবাতি জ্বালালেও সমস্ত অন্ধকার যেমন পরাজিত হয়ে পালায়, তেমনি খ্রীষ্টের পুনরুত্থান মানবজাতির ইতিহাসের সবচেয়ে কালো অন্ধকারকেও দূর করে দিয়েছে।',
    illustrationEn: 'Dawn breaks over a war-torn landscape, extinguishing midnight darkness with warmth. The resurrection broke the curse of death forever.',
    applicationBn: 'মৃত্যুর ভয় এবং অন্ধকারের হতাশা ঝেড়ে ফেলে পুনরুত্থানের ক্ষমতায় প্রতিদিন সাহসের সাথে জীবন পরিচালনা করুন।',
    applicationEn: 'Live no longer as hostages to fear or anxiety; the same Spirit that raised Jesus from the dead dwells inside you.',
    benedictionBn: 'মৃত্যুঞ্জয়ী খ্রীষ্টের পুনরুত্থানের মহাশক্তি তোমাদের কর্মে ও পরিবারে প্রকাশিত হোক। আমেন।',
    benedictionEn: 'May the power of His resurrection fill your home, your calling, and your witness with everlasting joy. Amen.',
  },

  // 6. PREMIUM — Luke 2:1-20 (Christmas / Incarnation)
  {
    id: 'sermon-06',
    titleBn: 'দীনহীন জাবনাপাত্রে স্বর্গের শ্রেষ্ঠ উপহার (বড়দিন বিশেষ)',
    titleEn: 'Glory in the Manger: Good News of Great Joy',
    passage: 'লূক ২:১-২০ (Luke 2:1-20)',
    themeBn: 'ঈশ্বর কোনো রাজপ্রাসাদে নয়, এক দীনহীন গোয়ালঘরে আবির্ভূত হয়েছেন যেন পৃথিবীর সব চেয়ে অবহেলিত মানুষও তাঁর কাছে সহজে পৌঁছাতে পারে।',
    themeEn: 'God came not to royal palaces, but to a humble manger, opening salvation to the humblest soul on earth.',
    category: 'Christmas & Advent',
    categoryBn: 'বড়দিন ও আগমনকাল',
    isFreePreview: false,
    durationMinutes: 30,
    exegesisLemma: {
      word: 'εὐαγγελίζομαι',
      transliteration: 'Euangelizomai',
      strongs: 'G2097',
      language: 'Greek',
      meaningBn: 'সুসংবাদ ঘোষণা করা—স্বর্গ থেকে রাজকীয় আনন্দের মহাবার্তা প্রচার।',
    },
    introductionBn: 'বড়দিন মানে শুধু আলোকসজ্জা বা উপহার বিনিময় নয়; বড়দিন মানে ঈশ্বর মানুষের কাছাকাছি এসেছেন, যেন মানুষ ঈশ্বরের স্বর্গে প্রবেশ করতে পারে।',
    introductionEn: 'Christmas is not merely holiday sentiment; it is God entering human history in humility so that lost sinners might enter heaven.',
    pointsBn: [
      '১. সম্রাটের ফরমান ও ঈশ্বরের সার্বভৌমিকতা: রোমান সেন্সাসও ঈশ্বরের ভাববাণী পূর্ণ করতে কাজ করল (পদ ১-৫)।',
      '২. সাধারণ রাখালদের কাছে প্রথম আগমন: স্বর্গীয় দূতদল সমাজের প্রান্তিক মানুষদের শুভসংবাদ শোনালো (পদ ৮-১৪)।',
      '৩. রাখালদের প্রতিক্রিয়া ও মরিয়মের ধ্যান: দেখা, বিশ্বাস করা এবং হৃদয়ে কথাগুলো সঞ্চয় করা (পদ ১৫-২০)।',
    ],
    pointsEn: [
      '1. Sovereign Providence: A Roman census under Caesar Augustus fulfills Micah\'s Bethlehem prophecy (vv. 1-5).',
      '2. Shepherds in the Night: Heaven\'s grandest choir visits the marginalized night-shift workers (vv. 8-14).',
      '3. Faith in Action: Hurry to see the Savior, glorify God, and treasure the wonder in the heart (vv. 15-20).',
    ],
    illustrationBn: 'একটি রাজপুত্র যদি রাস্তার দরিদ্র পথশিশুদের উদ্ধার করতে এসে তাদের মতো ছেঁড়া জামা গায়ে পরে তাদের বস্তিতে রাত কাটায়, তবে তার প্রেম কত মহান! যীশু সেই রাজপুত্র।',
    illustrationEn: 'A prince who trades silk robes for peasant rags to live in a slum and rescue orphans demonstrates the heart of Bethlehem\'s incarnation.',
    applicationBn: 'আপনার হৃদয়ের সমস্ত অহংকার ও কৃত্রিমতা দূর করে দীনতার সাথে যীশুকে আপনার জীবনের একমাত্র পরিত্রাতা হিসেবে স্থান দিন।',
    applicationEn: 'Make room in your crowded heart for the Savior. Extend generosity to those in need this season.',
    benedictionBn: 'স্বর্গের শান্তি ও ঈশ্বরের কৃপাদৃষ্টি তোমাদের গৃহে চিরকাল বিরাজ করুক। আমেন।',
    benedictionEn: 'May the peace of Bethlehem and the love of Christ surround you and your loved ones this season and always. Amen.',
  },

  // 7. PREMIUM — Matthew 3:13-17 / Romans 6 (Baptism & New Life)
  {
    id: 'sermon-07',
    titleBn: 'জলে সমাহিত ও খ্রীষ্টে নবজীবন (বাপ্তিস্মের বিশেষ শিক্ষা)',
    titleEn: 'Buried with Christ, Raised to Walk in Newness of Life',
    passage: 'রোমীয় ৬:১-১১ ও মথি ৩:১৩-১৭ (Romans 6:1-11)',
    themeBn: 'বাপ্তিস্ম কেবল বাহ্যিক জলস্নান নয়; এটি খ্রীষ্টের মৃত্যু ও পুনরুত্থানের সাথে বিশ্বাসীর প্রকাশ্য ও পবিত্র একাত্মতার সাক্ষ্য।',
    themeEn: 'Water baptism is an outward testimony of an inward spiritual reality: union with Christ in His death and resurrection.',
    category: 'Sacraments & Rites',
    categoryBn: 'সংস্কার ও বিশেষ বিধি',
    isFreePreview: false,
    durationMinutes: 30,
    exegesisLemma: {
      word: 'βαπτίζω',
      transliteration: 'Baptizo',
      strongs: 'G907',
      language: 'Greek',
      meaningBn: 'নিমজ্জিত করা বা একাত্ম হওয়া—পুরাতন সত্তা খ্রীষ্টের সাথে ক্রুশারোপিত হওয়া।',
    },
    introductionBn: 'যখন একজন বিশ্বাসী বাপ্তিস্মের জলে প্রবেশ করেন, তিনি সমস্ত জগতের সামনে ঘোষণা করেন: "আমি আর নিজের নই, আমি খ্রীষ্টের!"',
    introductionEn: 'When a believer steps into baptismal waters, they proclaim before heaven, earth, and hell: "I am crucified with Christ; I belong to Jesus!"',
    pointsBn: [
      '১. পুরাতন মানুষের সমাধি: পাপের দাসত্ব ও পূর্বতন জীবন খ্রীষ্টের কবরে সমাহিত (পদ ১-৪)।',
      '২. পুনরুত্থানের জীবন্ত অংশীদার: যেমন খ্রীষ্ট মহিমায় জীবিত হলেন, তেমনি আমরাও এক নতুন জীবনে চলব (পদ ৫-৮)।',
      '৩. পাপের প্রতি মৃত কিন্তু ঈশ্বরের প্রতি জীবিত: নিজেকে পাপের জন্য মৃত গণ্য করো এবং ধার্মিকতার পাত্র হিসেবে ঈশ্বরের কাছে সঁপে দাও (পদ ৯-১১)।',
    ],
    pointsEn: [
      '1. Buried with Him: The old self died with Christ, cancelling sin\'s enslaving mastery (vv. 1-4).',
      '2. United in Resurrection: Just as Christ was raised, we walk in supernatural newness of life (vv. 5-8).',
      '3. Count Yourself Dead to Sin: Present your members as instruments of righteousness unto God (vv. 9-11).',
    ],
    illustrationBn: 'একটি শুঁয়োপোকা যখন তার গুটিপোকার খোলস ছেড়ে রঙিন প্রজাপতি হয়ে আকাশে ওড়ে, সে আর কখনো মাটিতে হামাগুড়ি দেয় না। বাপ্তিস্ম তেমনি বিশ্বাসীর নতুন জন্ম ও ওড়ার নতুন জীবন।',
    illustrationEn: 'A caterpillar emerging from its cocoon as a butterfly never crawls back into darkness. Baptism signifies your flight into spiritual freedom.',
    applicationBn: 'পাপের পুরাতন অভ্যাসে আর ফিরে যাবেন না; প্রতিদিন মনে রাখুন আপনি খ্রীষ্টের পবিত্র রক্তের সিলমোহরে চিহ্নিত এক নতুন সৃষ্টি।',
    applicationEn: 'Refuse to flirt with past sins. Walk every day in the dignity of a blood-bought child of God.',
    benedictionBn: 'পবিত্র আত্মা তোমাদের পদক্ষেপে শক্তি দিন এবং সত্যের আলোয় তোমাদের পরিচালিত করুন। আমেন।',
    benedictionEn: 'May the Holy Spirit empower your walk, preserve your testimony, and fill you with holiness. Amen.',
  },

  // 8. PREMIUM — 1 Corinthians 11:23-26 (Holy Communion)
  {
    id: 'sermon-08',
    titleBn: 'এই রুটি ও এই পানপাত্র: প্রভুর আগমন পর্যন্ত তাঁর মৃত্যুর ঘোষণা',
    titleEn: 'This Do in Remembrance of Me: The Lord\'s Table',
    passage: '১ করিন্থীয় ১১:২৩-২৬ (1 Corinthians 11:23-26)',
    themeBn: 'প্রভুভোজ খ্রীষ্টের চূর্ণ শরীর ও রক্তের স্মরণে আমাদের একাত্মতা, পাপের ক্ষমা এবং তাঁর গৌরবময় দ্বিতীয় আগমনের প্রতীক্ষা।',
    themeEn: 'The Lord\'s Supper proclaims Christ\'s broken body and poured-out blood, nurturing communion and holy expectation of His return.',
    category: 'Sacraments & Rites',
    categoryBn: 'সংস্কার ও বিশেষ বিধি',
    isFreePreview: false,
    durationMinutes: 25,
    exegesisLemma: {
      word: 'ἀνάμνησις',
      transliteration: 'Anamnesis',
      strongs: 'G364',
      language: 'Greek',
      meaningBn: 'স্মরণ বা পুনর্জীবন—খ্রীষ্টের বলিদানের চিরস্থায়ী জীবন্ত বাস্তবতায় বর্তমান থাকা।',
    },
    introductionBn: 'প্রভুর মেজ কোনো সাধারণ আহার নয়; এটি কালভারির সেই পবিত্র টেবিল যেখানে পাপী ক্ষমা পায়, বিভক্তরা এক হয় এবং খ্রীষ্টের শরীর পুষ্টি লাভ করে।',
    introductionEn: 'The Lord\'s Table is sacred ground: where fractured souls are healed, the covenant is reaffirmed, and believers taste eternity.',
    pointsBn: [
      '১. বিশ্বাসঘাতকতার রাত্রিতে প্রেমের দান: যীশু রুটি ভেঙে ধন্যবাদ দিলেন (পদ ২৩-২৪)।',
      '২. নতুন নিয়মের রক্তচুক্তি: রক্তের মাধ্যমে আমাদের সমস্ত ঋণ মুছে দেওয়া হয়েছে (পদ ২৫)।',
      '৩. ভবিষ্যৎ আগমনের জয়ধ্বনি: তাঁর পুনরাগমন পর্যন্ত আমরা তাঁর মৃত্যুর বিজয় ঘোষণা করি (পদ ২৬)।',
    ],
    pointsEn: [
      '1. Giving Thanks in the Night of Betrayal: Christ broke the bread, offering His life willingly (vv. 23-24).',
      '2. The New Covenant in Blood: Cleansing, reconciliation, and adoption sealed forever (v. 25).',
      '3. Proclaiming the Lord\'s Death: A joyful pledge that the King is coming back (v. 26).',
    ],
    illustrationBn: 'যুদ্ধে যাওয়ার আগে পিতা যখন সন্তানের হাতে একটি বিশেষ পারিবারিক আংটি পরিয়ে দেন, তখন সেই আংটি দেখলে সন্তান বুঝতে পারে যে পিতা তাকে ভালোবাসেন এবং ফিরে আসবেন। প্রভুভোজ তেমনি খ্রীষ্টের ফিরে আসার নিশ্চিত স্মারক।',
    illustrationEn: 'A signet ring placed on an heir\'s hand before a long campaign reminds them of the King\'s unswerving promise to return in victory.',
    applicationBn: 'পরস্পরের প্রতি সমস্ত তিক্ততা ও ক্ষমা না করার মনোভাব ঝেড়ে ফেলে পবিত্র হৃদয়ে এই মেজে অংশ নিন।',
    applicationEn: 'Examine your heart, forgive your brother or sister, and take the bread and cup with reverent thanksgiving.',
    benedictionBn: 'প্রভু যীশু খ্রীষ্টের শান্তি ও পবিত্রতা তোমাদের আত্মাকে নিত্য পুষ্ট করুক। আমেন।',
    benedictionEn: 'May the body and blood of our Lord Jesus Christ preserve your body and soul unto everlasting life. Amen.',
  },

  // 9. PREMIUM — Ephesians 6:10-18 (Spiritual Warfare & Armor)
  {
    id: 'sermon-09',
    titleBn: 'ঈশ্বরের সর্বাঙ্গীন যুদ্ধসজ্জা: অন্ধকারের বিরুদ্ধে অটল থাকা',
    titleEn: 'The Whole Armor of God: Standing Firm in the Evil Day',
    passage: 'ইফিষীয় ৬:১০-১৮ (Ephesians 6:10-18)',
    themeBn: 'আমাদের সংগ্রাম রক্তমাংসের মানুষের বিরুদ্ধে নয়, বরং আত্মিক অন্ধকারের বিরুদ্ধে; তাই ঈশ্বরের যুদ্ধসজ্জা পরিধান করেই অটল থাকতে হবে।',
    themeEn: 'Our battle is not against flesh and blood, but spiritual forces of evil; victory requires putting on God\'s heavenly armor.',
    category: 'Faith & Discipleship',
    categoryBn: 'বিশ্বাস ও শিষ্যত্ব',
    isFreePreview: false,
    durationMinutes: 35,
    exegesisLemma: {
      word: 'πανοπλία',
      transliteration: 'Panoplia',
      strongs: 'G3833',
      language: 'Greek',
      meaningBn: 'সর্বাঙ্গীন বর্ম—রোমান সৈন্যের মাথা থেকে পা পর্যন্ত সম্পূর্ণ আত্মরক্ষামূলক ও আক্রমণাত্মক যুদ্ধপোশাক।',
    },
    introductionBn: 'খ্রিস্টীয় জীবন কোনো বিলাসবহুল পিকনিক নয়; এটি এক প্রতিদিনের আত্মিক যুদ্ধ। কিন্তু সুসংবাদ হলো—যীশু ক্রুশে শয়তানকে ইতিমধ্যেই পরাজিত করেছেন!',
    introductionEn: 'The Christian walk is not an amusement park, but a spiritual battlefield. Yet our victory is anchored in Christ\'s definitive triumph over Satan.',
    pointsBn: [
      '১. সত্যের কোমরবন্ধ ও ধার্মিকতার বুকপাটা: কপটতা ত্যাগ করে খ্রীষ্টের ধার্মিকতায় নিজেকে ঢেকে রাখা (পদ ১৪)।',
      '২. শান্তির সুসমাচারের জুতো ও বিশ্বাসের ঢাল: শয়তানের সমস্ত জ্বলন্ত বাণ প্রতিহত করার ঢাল (পদ ১৫-১৬)।',
      '৩. পরিত্রাণের শিরস্ত্রাণ ও আত্মার তরবারি: ঈশ্বরের বাক্যই হলো আমাদের প্রধান আক্রমণাত্মক অস্ত্র (পদ ১৭-১৮)।',
    ],
    pointsEn: [
      '1. Belt of Truth & Breastplate of Righteousness: Clothed in Christ\'s integrity and imputed holiness (v. 14).',
      '2. Shoes of Peace & Shield of Faith: Quenching all the fiery darts of the accuser (vv. 15-16).',
      '3. Helmet of Salvation & Sword of the Spirit: The living Word of God as our offensive weapon (vv. 17-18).',
    ],
    illustrationBn: 'একজন রোমান যোদ্ধা যদি তার বুকপাটা বা শিরস্ত্রাণ ভুলে যুদ্ধক্ষেত্রে যেত, সে প্রথম আঘাতেই মারা যেত। তেমনি ঈশ্বরের বাক্য ও প্রার্থনা ছাড়া বিশ্বাসী পৃথিবীতে নিরস্ত্র।',
    illustrationEn: 'A soldier heading into artillery barrage without a helmet or flak jacket invites defeat. Daily Scripture and prayer are your indispensable armor.',
    applicationBn: 'প্রতি সকালে প্রার্থনায় ঈশ্বরের সত্য, ধার্মিকতা ও বাক্যের বর্ম গায়ে পরুন; শয়তানের কোনো প্রলোভনকে আপনার জীবনে অধিকার দেবেন না।',
    applicationEn: 'Put on Christ consciously every morning. Resist the devil through the spoken Word of God, and he will flee from you.',
    benedictionBn: 'শান্তিদাতা ঈশ্বর তোমাদের শয়তানের সমস্ত আক্রমণের বিরুদ্ধে সুরক্ষিত রাখুন এবং তাঁর অজেয় জয় তোমাদের জীবনে প্রকাশ করুন। আমেন।',
    benedictionEn: 'May the Lord of hosts surround you with His angels and lead you from triumph unto triumph in Christ. Amen.',
  },

  // 10. PREMIUM — Genesis 2:18-24 / Ephesians 5:21-33 (Christian Marriage)
  {
    id: 'sermon-10',
    titleBn: 'এক দেহ ও এক প্রাণ: খ্রীষ্টীয় বিবাহের স্বর্গীয় সৌন্দর্য',
    titleEn: 'Two Become One: The Sacred Mystery of Covenant Marriage',
    passage: 'আদিপুস্তক ২:১৮-২৪ ও ইফিষীয় ৫:২১-৩৩ (Ephesians 5:21-33)',
    themeBn: 'বিবাহ কোনো পার্থিব চুক্তি নয়; এটি ঈশ্বরীয় পবিত্র নিয়ম যা মণ্ডলীর প্রতি খ্রীষ্টের আত্মত্যাগী প্রেমের এক জীবন্ত প্রতিচ্ছবি।',
    themeEn: 'Marriage is not a fragile cultural contract, but a sacred covenant mirroring Christ\'s sacrificial love for His Bride, the Church.',
    category: 'Sacraments & Rites',
    categoryBn: 'সংস্কার ও বিশেষ বিধি',
    isFreePreview: false,
    durationMinutes: 35,
    exegesisLemma: {
      word: 'עֵזֶר כְּנֶגְדּוֹ',
      transliteration: 'Ezer Kenegdo',
      strongs: 'H5828',
      language: 'Hebrew',
      meaningBn: 'যোগ্য ও পরিপূরক শক্তিশালী সঙ্গী—হীন বা অধস্তন নয়, বরং ঈশ্বরের শক্তিতে সমান অংশীদার।',
    },
    introductionBn: 'আজকের সমাজে যখন পরিবার ও বিবাহ ভেঙে টুকরো টুকরো হয়ে যাচ্ছে, তখন ঈশ্বরের বাক্য আমাদের মনে করিয়ে দেয় যে বিবাহ হলো ঈশ্বরের দেওয়া সর্বশ্রেষ্ঠ মানবসম্পর্ক।',
    introductionEn: 'In an era where marriages shatter at staggering rates, God\'s Word reveals the divine architecture of covenant fidelity and enduring romance.',
    pointsBn: [
      '১. ঈশ্বরের সৃষ্টি পরিকল্পনা: মানুষ একাকী থাকা ভালো নয়; ঈশ্বর উপযুক্ত পরিপূরক সঙ্গী দান করেছেন (আদি ২:১৮)।',
      '২. ত্যাগী প্রেম ও পরস্পর সমর্পণ: খ্রীষ্ট যেমন মণ্ডলীকে ভালোবেসে প্রাণ দিলেন, স্বামী-স্ত্রীর প্রেম তেমনই নিঃস্বার্থ হওয়া চাই (ইফি ৫:২১-২৫)।',
      '৩. একাঙ্গ ও চিরন্তন বন্ধন: ঈশ্বর যাকে যুক্ত করেছেন, মানুষ যেন তাকে পৃথক না করে (মথি ১৯:৬)।',
    ],
    pointsEn: [
      '1. Divine Blueprint: It is not good for man to be alone; God created a complementary counterpart (Gen 2:18).',
      '2. Sacrificial Headship & Loving Respect: Husband loving like Christ on the cross; wife honoring with grace (Eph 5:21-33).',
      '3. Unbreakable Oneness: What God has joined together, let not man separate (Matt 19:6).',
    ],
    illustrationBn: 'একটি ত্রিভুজের শীর্ষে যদি ঈশ্বর থাকেন এবং দুই কোণায় স্বামী ও স্ত্রী থাকেন—স্বামী ও স্ত্রী যতই ঈশ্বরের দিকে এগিয়ে যাবেন, ততই তারা পরস্পরেরও কাছাকাছি আসবেন।',
    illustrationEn: 'A triangle where God is the apex and husband and wife are the base corners: as both draw closer to God, they inevitably draw closer to one another.',
    applicationBn: 'আপনার বিবাহিত জীবনে স্বার্থপরতা ও তিক্ততা দূর করুন; প্রতিদিন একসাথে ঈশ্বরের বাক্যে প্রার্থনা করুন।',
    applicationEn: 'Root out bitterness and harsh words. Pray together on your knees daily; a three-strand cord is not easily broken.',
    benedictionBn: 'ঈশ্বর তোমাদের দাম্পত্য জীবনকে প্রেম, প্রজ্ঞা, বিশ্বস্ততা ও শান্তিতে পূর্ণ করুন। আমেন।',
    benedictionEn: 'May the Lord bless your marriage with enduring affection, fruitful peace, and generational faithfulness. Amen.',
  },
];

export const PULPIT_PASS_PLANS = [
  {
    id: 'plan_india_annual',
    title: 'প্যাস্টরস বার্ষিক পাস (India & Bangladesh)',
    price: '₹৪৯৯ / বছর',
    priceUsd: '$৬.৯৯ / year',
    period: '১ বছর সম্পূর্ণ অ্যাক্সেস (52 Weeks)',
    features: [
      '৫০+ তৈরি করা গভীর এক্সিজেটিক্যাল সার্মন প্যাকেজ',
      'এক ক্লিকে সার্মন এডিটরে লোড ও পরিমার্জনের সুযোগ',
      'চার্চ প্রজেক্টরের জন্য তৈরি স্লাইডস আউটলাইন',
      'পিডিএফ ডাউনলোড ও সরাসরি এ৪ প্রিন্ট ফরম্যাট',
      'সবকটি বিশেষ দিবস (গুড ফ্রাইডে, ইস্টার, বড়দিন, বাপ্তিস্ম, বিবাহ)',
      'সরাসরি হোয়াটসঅ্যাপ ভিআইপি সাপোর্ট',
    ],
    recommended: true,
    upiId: 'ayanghosh75@okaxis', // Can be customized
    paymentLink: 'https://www.buymeacoffee.com/AyanKumarGhosh',
  },
  {
    id: 'plan_global_annual',
    title: 'Global Pulpit Annual Pass (International)',
    price: '$১৯.৯৯ / year',
    priceUsd: '$19.99 / year',
    period: 'Full 1-Year Access (52 Weeks)',
    features: [
      '50+ High-Exegesis Sermon Packages in Bengali & English',
      'One-click Load into Sermon Studio Editor',
      'Bilingual Greek & Hebrew Exegetical Word Studies',
      'Printable High-Res PDF & Church Projector Slides',
      'Covers All Major Christian Festivals & Sacraments',
      'Direct Support via Email & Community',
    ],
    recommended: false,
    paymentLink: 'https://www.buymeacoffee.com/AyanKumarGhosh',
  },
];
