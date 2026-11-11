import { TheologicalPathDefinition } from './types';

/**
 * 61 Master Theological Sections
 * Defined per Section 7 of the Lexi Theological Data Acquisition Mandate.
 * Organized into 4 primary divisions without duplicate master records.
 */
export const THEOLOGICAL_PATHS: TheologicalPathDefinition[] = [
  // 1. Biblical & Linguistic Studies (19 sections)
  {
    id: 'biblical-theology',
    name: 'Biblical Theology',
    division: 'Biblical & Linguistic',
    description: 'The organic, historical unfolding of divine special revelation across Scripture canon.',
  },
  {
    id: 'old-testament-studies',
    name: 'Old Testament Studies',
    division: 'Biblical & Linguistic',
    description: 'Historical, literary, and theological analysis of the Hebrew Bible and its ancient context.',
  },
  {
    id: 'new-testament-studies',
    name: 'New Testament Studies',
    division: 'Biblical & Linguistic',
    description: 'Historical, literary, and apostolic analysis of the New Covenant canonical scriptures.',
  },
  {
    id: 'biblical-greek',
    name: 'Biblical Greek',
    division: 'Biblical & Linguistic',
    description: 'Koine Greek grammar, syntax, lexical semantics, and New Testament textual analysis.',
  },
  {
    id: 'biblical-hebrew',
    name: 'Biblical Hebrew',
    division: 'Biblical & Linguistic',
    description: 'Ancient Classical Hebrew grammar, morphology, syntax, and Old Testament lexical semantics.',
  },
  {
    id: 'biblical-aramaic',
    name: 'Biblical Aramaic',
    division: 'Biblical & Linguistic',
    description: 'Imperial and biblical Aramaic portions of Daniel, Ezra, and New Testament idioms.',
  },
  {
    id: 'hermeneutics',
    name: 'Hermeneutics',
    division: 'Biblical & Linguistic',
    description: 'Principles, grammatical-historical methods, and theological rules of biblical interpretation.',
  },
  {
    id: 'canon',
    name: 'Canon',
    division: 'Biblical & Linguistic',
    description: 'The historical recognition, rule, and authoritative collection of inspired biblical books.',
  },
  {
    id: 'manuscripts',
    name: 'Manuscripts',
    division: 'Biblical & Linguistic',
    description: 'Ancient biblical papyri, uncials, minuscules, codices, and scribal transmission traditions.',
  },
  {
    id: 'textual-criticism',
    name: 'Textual Criticism',
    division: 'Biblical & Linguistic',
    description: 'The scholarly evaluation of biblical manuscript witnesses to reconstruct the original text.',
  },
  {
    id: 'bible-translation',
    name: 'Bible Translation',
    division: 'Biblical & Linguistic',
    description: 'The theory, history, and linguistic practice of translating Scripture across world tongues.',
  },
  {
    id: 'covenant',
    name: 'Covenant',
    division: 'Biblical & Linguistic',
    description: 'The formal, binding redemptive oaths established between the Triune God and His covenant people.',
  },
  {
    id: 'kingdom-of-god',
    name: 'Kingdom of God',
    division: 'Biblical & Linguistic',
    description: 'The sovereign rule and reign of God inaugurated in Christ Jesus and consummated at His return.',
  },
  {
    id: 'biblical-people',
    name: 'Biblical People',
    division: 'Biblical & Linguistic',
    description: 'Key biographical figures, patriarchs, prophets, apostles, and personalities of redemptive history.',
  },
  {
    id: 'biblical-places',
    name: 'Biblical Places',
    division: 'Biblical & Linguistic',
    description: 'Prominent geographic locations, holy cities, mountains, and regions in the biblical narrative.',
  },
  {
    id: 'biblical-objects',
    name: 'Biblical Objects',
    division: 'Biblical & Linguistic',
    description: 'Material artifacts, sanctuary furniture, vessels, and instruments of biblical worship.',
  },
  {
    id: 'biblical-customs',
    name: 'Biblical Customs',
    division: 'Biblical & Linguistic',
    description: 'Ancient Near Eastern and Greco-Roman social traditions, familial patterns, and covenants.',
  },
  {
    id: 'biblical-festivals',
    name: 'Biblical Festivals',
    division: 'Biblical & Linguistic',
    description: 'Appointed feasts of Yahweh, sabbatical cycles, and sacred calendar celebrations.',
  },
  {
    id: 'biblical-geography',
    name: 'Biblical Geography',
    division: 'Biblical & Linguistic',
    description: 'Topography, climate, trade routes, and regional borders of the Ancient Near East and Mediterranean.',
  },
  {
    id: 'biblical-archaeology',
    name: 'Biblical Archaeology',
    division: 'Biblical & Linguistic',
    description: 'Material culture, inscriptions, excavations, and epigraphic evidence illuminating Scripture.',
  },

  // 2. Systematic & Doctrinal Theology (18 sections)
  {
    id: 'systematic-theology',
    name: 'Systematic Theology',
    division: 'Systematic Theology',
    description: 'The coherent, thematic organization of Christian truth derived from divine revelation.',
  },
  {
    id: 'theology-proper',
    name: 'Theology Proper',
    division: 'Systematic Theology',
    description: 'The doctrine of God: His divine essence, sovereign attributes, holy names, and eternal decrees.',
  },
  {
    id: 'doctrine-of-the-trinity',
    name: 'Doctrine of the Trinity',
    division: 'Systematic Theology',
    description: 'The confession of one God eternally existing in three co-equal, consubstantial Persons.',
  },
  {
    id: 'christology',
    name: 'Christology',
    division: 'Systematic Theology',
    description: 'The person, deity, true humanity, hypostatic union, and redemptive offices of Jesus Christ.',
  },
  {
    id: 'pneumatology',
    name: 'Pneumatology',
    division: 'Systematic Theology',
    description: 'The person, divine deity, ministry, regeneration, and sanctifying gifts of the Holy Spirit.',
  },
  {
    id: 'theological-anthropology',
    name: 'Theological Anthropology',
    division: 'Systematic Theology',
    description: 'The biblical doctrine of humanity: created in the imago Dei, fallen in Adam, and redeemed in Christ.',
  },
  {
    id: 'hamartiology',
    name: 'Hamartiology',
    division: 'Systematic Theology',
    description: 'The origin, moral nature, universal transmission, guilt, and devastating effects of human sin.',
  },
  {
    id: 'soteriology',
    name: 'Soteriology',
    division: 'Systematic Theology',
    description: 'The application of redemption: grace, election, regeneration, justification, and eternal glorification.',
  },
  {
    id: 'ecclesiology',
    name: 'Ecclesiology',
    division: 'Systematic Theology',
    description: 'The nature, marks, governance, mission, and communion of the universal and local church of God.',
  },
  {
    id: 'eschatology',
    name: 'Eschatology',
    division: 'Systematic Theology',
    description: 'The doctrine of last things: bodily resurrection, final judgment, the millennium, and new creation.',
  },
  {
    id: 'angelology',
    name: 'Angelology',
    division: 'Systematic Theology',
    description: 'The biblical doctrine of holy angelic messengers, their ranks, ministries, and divine commission.',
  },
  {
    id: 'demonology',
    name: 'Demonology',
    division: 'Systematic Theology',
    description: 'The biblical evaluation of fallen spiritual powers, demonic rebellion, and their defeat in Christ.',
  },
  {
    id: 'creation',
    name: 'Creation',
    division: 'Systematic Theology',
    description: 'The origination of all physical and spiritual realities ex nihilo by the Triune God.',
  },
  {
    id: 'providence',
    name: 'Providence',
    division: 'Systematic Theology',
    description: 'God’s ongoing preservation, concurrence, and holy governance of all creatures and affairs.',
  },
  {
    id: 'bibliology',
    name: 'Bibliology',
    division: 'Systematic Theology',
    description: 'The doctrine of Sacred Scripture: inspiration, inerrancy, authority, necessity, and sufficiency.',
  },
  {
    id: 'philosophical-theology',
    name: 'Philosophical Theology',
    division: 'Systematic Theology',
    description: 'Philosophical examination of theological concepts, divine simplicity, logic, and epistemology.',
  },
  {
    id: 'natural-theology',
    name: 'Natural Theology',
    division: 'Systematic Theology',
    description: 'Knowledge of God accessible through general revelation in the created cosmic order and human conscience.',
  },
  {
    id: 'contemporary-theological-questions',
    name: 'Contemporary Theological Questions',
    division: 'Systematic Theology',
    description: 'Modern ethical, technological, environmental, and bioethical issues addressed by Christian theology.',
  },

  // 3. Historical & Confessional Studies (6 sections)
  {
    id: 'historical-theology',
    name: 'Historical Theology',
    division: 'Historical & Confessional',
    description: 'The historical development, defense, and articulation of Christian doctrine across church eras.',
  },
  {
    id: 'church-history',
    name: 'Church History',
    division: 'Historical & Confessional',
    description: 'The historical journey of the global body of Christ from Pentecost to the present day.',
  },
  {
    id: 'christian-movements',
    name: 'Christian Movements',
    division: 'Historical & Confessional',
    description: 'Significant revival, monastic, scholastic, missionary, and reform movements in Christendom.',
  },
  {
    id: 'denominations-and-traditions',
    name: 'Denominations and Traditions',
    division: 'Historical & Confessional',
    description: 'Distinctive doctrinal emphases, polities, and heritages of major historic Christian traditions.',
  },
  {
    id: 'creeds-and-confessions',
    name: 'Creeds and Confessions',
    division: 'Historical & Confessional',
    description: 'Ecumenical symbols, catechisms, and confessional standards defining historic orthodoxy.',
  },

  // 4. Practical, Pastoral & Applied Theology (17 sections)
  {
    id: 'practical-theology',
    name: 'Practical Theology',
    division: 'Practical & Applied',
    description: 'The critical application of theological truths to human actions, ecclesial life, and society.',
  },
  {
    id: 'pastoral-theology',
    name: 'Pastoral Theology',
    division: 'Practical & Applied',
    description: 'The care of souls, spiritual leadership, ordained ministry, and shepherdly oversight of flocks.',
  },
  {
    id: 'moral-theology',
    name: 'Moral Theology',
    division: 'Practical & Applied',
    description: 'The study of moral actions, righteousness, virtue, and divine law in the life of believers.',
  },
  {
    id: 'christian-ethics',
    name: 'Christian Ethics',
    division: 'Practical & Applied',
    description: 'The study of right moral action, justice, holiness, and neighborly love shaped by biblical commands.',
  },
  {
    id: 'apologetics',
    name: 'Apologetics',
    division: 'Practical & Applied',
    description: 'The reasoned, faithful defense and vindication of the Christian worldview against objections.',
  },
  {
    id: 'missiology',
    name: 'Missiology',
    division: 'Practical & Applied',
    description: 'The cross-cultural proclamation of the gospel, church planting, and global mission of God.',
  },
  {
    id: 'homiletics',
    name: 'Homiletics',
    division: 'Practical & Applied',
    description: 'The theology, hermeneutical preparation, and oral proclamation of expository biblical sermons.',
  },
  {
    id: 'worship',
    name: 'Worship',
    division: 'Practical & Applied',
    description: 'Doxological adoration, corporate praise, and reverent surrender to the majesty of the Triune God.',
  },
  {
    id: 'liturgy',
    name: 'Liturgy',
    division: 'Practical & Applied',
    description: 'Structured public rituals, orders of service, liturgical prayers, and church calendar rhythms.',
  },
  {
    id: 'sacraments-and-ordinances',
    name: 'Sacraments and Ordinances',
    division: 'Practical & Applied',
    description: 'The sacred visible signs and seals of divine grace commanded by Christ: Baptism and the Lord’s Supper.',
  },
  {
    id: 'prayer',
    name: 'Prayer',
    division: 'Practical & Applied',
    description: 'The personal and corporate communion of the believer with the Father through the Son by the Spirit.',
  },
  {
    id: 'spiritual-formation',
    name: 'Spiritual Formation',
    division: 'Practical & Applied',
    description: 'The intentional cultivation of Christlikeness through spiritual disciplines and inner transformation.',
  },
  {
    id: 'christian-counselling',
    name: 'Christian Counselling',
    division: 'Practical & Applied',
    description: 'Biblically faithful pastoral guidance, mental health compassion, and spiritual comfort for broken souls.',
  },
  {
    id: 'christian-education',
    name: 'Christian Education',
    division: 'Practical & Applied',
    description: 'Catechetical pedagogy, theological instruction, and holistic discipleship across generations.',
  },
  {
    id: 'evangelism',
    name: 'Evangelism',
    division: 'Practical & Applied',
    description: 'The personal and corporate verbal proclamation of the good news of salvation in Jesus Christ.',
  },
  {
    id: 'discipleship',
    name: 'Discipleship',
    division: 'Practical & Applied',
    description: 'The ongoing process of learning, obeying, and multiplying followers of the Lord Jesus Christ.',
  },
  {
    id: 'ministry-and-leadership',
    name: 'Ministry and Leadership',
    division: 'Practical & Applied',
    description: 'Biblical servant leadership, church governance, eldership, diaconate, and organizational stewardship.',
  },
  {
    id: 'interfaith-terminology',
    name: 'Interfaith Terminology',
    division: 'Practical & Applied',
    description: 'Objective comparative terminology, religious dialogue concepts, and historical missional encounters.',
  },
];

export function getPathById(id: string): TheologicalPathDefinition | undefined {
  return THEOLOGICAL_PATHS.find((p) => p.id === id);
}

export function getPathsByDivision(
  division: TheologicalPathDefinition['division']
): TheologicalPathDefinition[] {
  return THEOLOGICAL_PATHS.filter((p) => p.division === division);
}

export function getAllPaths(): TheologicalPathDefinition[] {
  return THEOLOGICAL_PATHS;
}
