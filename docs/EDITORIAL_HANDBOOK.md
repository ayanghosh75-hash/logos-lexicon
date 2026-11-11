# Logos Lexicon — Editorial & Theological Review Handbook

**Project Director & Chief Theological Editor:** Rev. Ayan Kumar Ghosh  
**Governing Standard:** Academic rigor, confessional integrity, and linguistic clarity.

---

## 1. The Master-Content Principle

1. **One Master Record**: Every biblical or theological concept is drafted first as an authoritative English master record.
2. **Linked Translation Lineage**: Translations into Bengali, Hindi, Urdu, Korean, etc., are linked via the `masterEntryId`.
3. **Cascading Changes Without Overwrites**:
   - When an approved English master entry changes:
     - The earlier version is saved in `MasterEntryRevision`.
     - A diff summary is recorded.
     - All attached translations are flagged with `needsSyncWithMaster = true`.
     - Affected language editors are notified.
     - **No human translation is ever silently overwritten.**

---

## 2. Controlled Approval Labels & Hierarchy

Only the following 10 controlled labels may appear in the system:

| Label | Definition & Usage Rules |
| :--- | :--- |
| **AI-assisted draft** | Generated via algorithmic translation or research synthesis. **Never visible to the public as approved content.** |
| **Human-translated draft** | Drafted or adapted by a human translator, awaiting editorial check. |
| **Language reviewed** | Orthography, syntax, grammar, and font ligatures verified by language editor. |
| **Theologically reviewed** | Confirmed for biblical accuracy, confessional distinctions, and historical background by theological reviewer. |
| **Common Christian usage** | Widely recognized and understood ecclesiastical terminology. |
| **Institution approved** | Only applied when documented, signed endorsement from a recognized seminary, Bible society, or church body is filed. |
| **Alternative terminology** | Recognized regional or traditional synonym. |
| **Disputed terminology** | Concepts where significant historical or theological differences exist. |
| **Revision required** | Returned to the drafting queue with reviewer feedback. |
| **Archived** | Retired or superseded entry preserved for audit history. |

---

## 3. Disputed Theological Topics Protocol

For contentious or historically debated subjects (e.g., soteriology, baptism, eschatology, covenant continuity):
1. **Identify the Issue**: Articulate the question precisely and neutrally.
2. **Biblical Evidence**: Present the primary scripture passages cited by various traditions without partisan exclusion.
3. **Historical Background**: Outline the patristic, medieval, or Reformation context.
4. **Recognized Positions**: Fairly describe major viewpoints (Reformed, Lutheran, Arminian/Wesleyan, Roman Catholic, Eastern Orthodox).
5. **Cite Sources**: Cite authoritative primary confessions and scholarly lexicons.
6. **No Partisan Bias**: Never allow one theological tradition to be presented as universal when historical Christianity differs.
