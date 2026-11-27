
window.PandoraQuizzes.register({
  id: "IT0204-M06-F06",
  subject: "IT0204",
  module: 6,
  title: "Formative Assessment 6",
  kind: "formative",
  version: 1,
  description: "30-item assessment on international data protection laws, privacy rights, cross-border transfers, OECD principles, GDPR, CCPA, Singapore PDPA, Australian Privacy Principles, and global compliance.",
  createdAt: "2026-11-27T19:17:00+08:00",
  showOnHome: true,
  questions: [
    {
      id: "q1",
      type: "multiple_choice",
      question: "Which PDPA obligation requires organizations to secure personal data?",
      options: [
        "Access obligation",
        "Protection obligation",
        "Correction obligation",
        "Notification obligation"
      ],
      correctAnswer: 1,
      explanation: "Singapore's Personal Data Protection Act establishes a Protection Obligation requiring organizations to make reasonable security arrangements to protect personal data from unauthorized access, collection, use, disclosure, copying, modification, disposal, or similar risks. The Access and Correction Obligations concern individuals' ability to obtain or correct their personal data, while the Notification Obligation concerns informing individuals of collection, use, and disclosure purposes.",
      reference: "Singapore PDPA — Section 24, Protection of Personal Data"
    },
    {
      id: "q2",
      type: "multiple_select",
      question: "Which compliance challenges are common in global data protection?",
      options: [
        "Cross-border transfer restrictions",
        "Varying consent requirements",
        "Overlapping jurisdictional obligations",
        "Unlimited data retention"
      ],
      correctAnswer: [0, 1, 2],
      explanation: "Cross-border transfer restrictions can require safeguards before personal information moves between countries. Consent requirements vary because privacy laws differ in their legal bases, conditions, and exceptions for data processing. Overlapping jurisdictional obligations arise when several countries' laws apply to the same organization or processing activity. Unlimited data retention is not a generally accepted privacy compliance requirement; laws commonly impose retention limits or require deletion when information is no longer needed.",
      reference: "IT0204 Module 6 — International Data Protection Compliance; GDPR Chapter V; Singapore PDPA"
    },
    {
      id: "q3",
      type: "true_false",
      question: "China's Cybersecurity Law requires critical infrastructure operators to localize data storage.",
      correctAnswer: true,
      explanation: "China's Cybersecurity Law establishes data localization requirements for specified personal information and important data collected or generated within China by critical information infrastructure operators. Such information is generally required to be stored domestically, subject to applicable rules governing transfers outside China. The obligation is not a universal ban on every international data transfer.",
      reference: "China Cybersecurity Law — Critical Information Infrastructure and Data Localization"
    },
    {
      id: "q4",
      type: "multiple_choice",
      question: "The UN Resolution 68/167 addresses:",
      options: [
        "Right to be forgotten",
        "Privacy in the digital age",
        "Cross-border transfers",
        "Cloud privacy"
      ],
      correctAnswer: 1,
      explanation: "United Nations General Assembly Resolution 68/167 is titled The Right to Privacy in the Digital Age. It addresses the protection of privacy in digital communications and expresses concern about surveillance and interception practices that may interfere with human rights. The resolution is broader than a specific right to erasure or a technical cloud privacy standard.",
      reference: "UN General Assembly Resolution 68/167 — The Right to Privacy in the Digital Age"
    },
    {
      id: "q5",
      type: "true_false",
      question: "Australian Privacy Principles (APPs) apply only to government entities.",
      correctAnswer: false,
      explanation: "The Australian Privacy Principles apply to APP entities under Australia's Privacy Act, including covered Australian Government agencies and many private-sector organizations. Certain businesses may be exempt depending on statutory rules, but the APPs are not exclusively limited to government agencies.",
      reference: "Office of the Australian Information Commissioner — Australian Privacy Principles"
    },
    {
      id: "q6",
      type: "multiple_select",
      question: "Which frameworks influenced global privacy discussions?",
      options: [
        "OECD Privacy Guidelines",
        "UN Resolution 68/167",
        "APEC Privacy Framework",
        "HIPAA"
      ],
      correctAnswer: [0, 1, 2],
      explanation: "The OECD Privacy Guidelines provide internationally influential principles on personal data protection and transborder data flows. UN Resolution 68/167 emphasizes privacy as a human right in the digital age, while the APEC Privacy Framework promotes compatible privacy practices across participating economies. HIPAA is an important United States healthcare privacy law, but it is sector-specific rather than one of the broad international privacy frameworks emphasized in this assessment.",
      reference: "OECD Privacy Guidelines; UN Resolution 68/167; APEC Privacy Framework"
    },
    {
      id: "q7",
      type: "true_false",
      question: "The NIS Directive requires EU member states to ensure operators of essential services implement cybersecurity measures.",
      correctAnswer: true,
      explanation: "The original EU Network and Information Security Directive required Member States to establish cybersecurity obligations for operators of essential services, including appropriate security measures and incident reporting. The later NIS2 Directive expanded and updated the EU framework. The statement describes the original NIS Directive's core purpose correctly.",
      reference: "EU Directive 2016/1148 — Network and Information Security; NIS2 Directive"
    },
    {
      id: "q8",
      type: "multiple_select",
      question: "Which rights are unique to GDPR compared to CCPA?",
      options: [
        "Right to rectification",
        "Right to data portability",
        "Right to restriction of processing",
        "Right to know"
      ],
      correctAnswer: [0, 2],
      explanation: "The assessment distinguishes GDPR's right to rectification and right to restriction of processing from the CCPA's traditionally emphasized consumer rights. GDPR Article 16 expressly provides a right to rectification, while Article 18 provides a specific right to restrict processing under defined circumstances. However, the current CCPA also grants a right to correct inaccurate personal information, so rectification is no longer strictly unique to GDPR. Data portability is recognized in GDPR and is also reflected in California's access and disclosure requirements. The right to know is recognized under California law and overlaps with GDPR access and transparency rights. The selected answer follows the original assessment's intended classification, with this legal distinction noted.",
      reference: "GDPR Articles 15–20; California Consumer Privacy Act — Right to Correct and Right to Know"
    },
    {
      id: "q9",
      type: "multiple_choice",
      question: "The GDPR principle requiring data to be kept no longer than necessary is:",
      options: [
        "Accuracy",
        "Integrity",
        "Storage limitation",
        "Accountability"
      ],
      correctAnswer: 2,
      explanation: "The GDPR storage limitation principle requires personal data to be kept in identifiable form for no longer than necessary for the purposes for which it is processed, subject to applicable exceptions such as certain archiving, research, or statistical purposes. Accuracy concerns keeping data correct, integrity and confidentiality concern security, and accountability requires demonstrating compliance.",
      reference: "GDPR Article 5(1)(e) — Storage Limitation"
    },
    {
      id: "q10",
      type: "multiple_choice",
      question: "Which global framework sets out baseline privacy principles and is referenced by APEC?",
      options: [
        "APPs",
        "OECD Privacy Guidelines",
        "APPI",
        "NIS Directive"
      ],
      correctAnswer: 1,
      explanation: "The OECD Privacy Guidelines established influential privacy principles addressing matters such as collection limitation, data quality, purpose specification, use limitation, security safeguards, openness, individual participation, and accountability. The APEC Privacy Framework draws on and develops internationally recognized privacy concepts. APPs and APPI are national frameworks, while the NIS Directive focuses on cybersecurity.",
      reference: "OECD Privacy Guidelines; APEC Privacy Framework"
    },
    {
      id: "q11",
      type: "multiple_choice",
      question: "An EU company transfers data to a U.S. vendor with no safeguards. This violates:",
      options: [
        "Purpose limitation",
        "Cross-border transfer compliance under GDPR",
        "Accuracy",
        "Transparency"
      ],
      correctAnswer: 1,
      explanation: "GDPR Chapter V imposes requirements when personal data is transferred to a third country. An organization must establish a valid transfer mechanism or applicable exception, such as a relevant adequacy decision or appropriate safeguards. Sending information to a recipient without an applicable lawful transfer mechanism can violate these requirements. A transfer to the United States is not automatically prohibited, because some transfers may qualify under the EU–U.S. Data Privacy Framework or other approved mechanisms.",
      reference: "GDPR Chapter V — Transfers of Personal Data to Third Countries"
    },
    {
      id: "q12",
      type: "multiple_choice",
      question: "A company fails to implement security measures and suffers a breach. Which GDPR principle is violated?",
      options: [
        "Purpose limitation",
        "Data minimization",
        "Integrity and confidentiality",
        "Portability"
      ],
      correctAnswer: 2,
      explanation: "GDPR's integrity and confidentiality principle requires appropriate security for personal data, including protection against unauthorized or unlawful processing and accidental loss, destruction, or damage. Organizations must apply suitable technical and organizational measures based on the risks. A breach does not automatically prove every security obligation was violated, but the stated failure to implement necessary protections supports this answer.",
      reference: "GDPR Article 5(1)(f); Article 32 — Security of Processing"
    },
    {
      id: "q13",
      type: "multiple_choice",
      question: "An Australian firm denies consumers the ability to correct inaccurate records. Which APP is violated?",
      options: [
        "APP 5",
        "APP 11",
        "APP 13",
        "APP 2"
      ],
      correctAnswer: 2,
      explanation: "Australian Privacy Principle 13 deals with correction of personal information. Covered entities must take reasonable steps to correct inaccurate, out-of-date, incomplete, irrelevant, or misleading personal information in applicable circumstances. APP 5 concerns notification, APP 11 concerns security, and APP 2 concerns anonymity and pseudonymity.",
      reference: "Australian Privacy Principle 13 — Correction of Personal Information"
    },
    {
      id: "q14",
      type: "multiple_choice",
      question: "Which Australian Privacy Principle requires security of personal information?",
      options: [
        "APP 5",
        "APP 11",
        "APP 2",
        "APP 8"
      ],
      correctAnswer: 1,
      explanation: "APP 11 requires organizations covered by Australia's Privacy Act to take reasonable steps to protect personal information from misuse, interference, loss, unauthorized access, modification, or disclosure. APP 5 concerns collection notifications, APP 2 addresses anonymity and pseudonymity, and APP 8 concerns cross-border disclosure.",
      reference: "Australian Privacy Principle 11 — Security of Personal Information"
    },
    {
      id: "q15",
      type: "multiple_choice",
      question: "Which APP principle regulates how personal information is collected and used across borders?",
      options: [
        "APP 5",
        "APP 13",
        "APP 8",
        "APP 11"
      ],
      correctAnswer: 2,
      explanation: "APP 8 addresses the cross-border disclosure of personal information to overseas recipients. It generally requires a covered entity to take reasonable steps to ensure an overseas recipient does not breach the Australian Privacy Principles, unless an applicable exception applies. APP 8 is specifically about overseas disclosure, rather than every aspect of collection or use.",
      reference: "Australian Privacy Principle 8 — Cross-Border Disclosure of Personal Information"
    },
    {
      id: "q16",
      type: "multiple_select",
      question: "Which rights are provided by CCPA?",
      options: [
        "Right to know",
        "Right to delete",
        "Right to opt out of sale",
        "Right to rectification"
      ],
      correctAnswer: [0, 1, 2],
      explanation: "The CCPA establishes rights to know what personal information businesses collect and disclose, to request deletion subject to exceptions, and to opt out of the sale or sharing of personal information. These are the three selections intended by the assessment. California law also now expressly includes a right to correct inaccurate personal information, which is conceptually similar to rectification. Therefore, the exclusion of the fourth choice reflects the assessment's older terminology rather than the full set of rights available under the current CCPA.",
      reference: "California Consumer Privacy Act — Consumer Rights; California Privacy Rights Act Amendments"
    },
    {
      id: "q17",
      type: "multiple_choice",
      question: "Which framework promotes baseline principles and influenced the APEC Privacy Framework?",
      options: [
        "APPs",
        "OECD Guidelines",
        "NIS Directive",
        "PDPA"
      ],
      correctAnswer: 1,
      explanation: "The OECD Privacy Guidelines provide internationally recognized principles for personal data protection and transborder data flows. These principles influenced privacy policy discussions and frameworks, including the APEC Privacy Framework. The NIS Directive deals primarily with network and information systems security, while APPs and PDPA are specific national privacy regimes.",
      reference: "OECD Privacy Guidelines; APEC Privacy Framework"
    },
    {
      id: "q18",
      type: "multiple_choice",
      question: "Which APP requirement ensures companies specify the intended purpose of data?",
      options: [
        "Data minimization",
        "Purpose limitation",
        "Transparency",
        "Accuracy"
      ],
      correctAnswer: 1,
      explanation: "Purpose limitation means that an organization identifies legitimate purposes for collecting and using personal information and does not use it incompatibly with those purposes without a valid basis. In the Australian Privacy Principles, APP 3 concerns collection reasonably necessary for functions and activities, APP 5 includes notifying individuals of collection purposes, and APP 6 limits use and disclosure. 'Purpose limitation' is the broad concept intended by this question, rather than the official title of one numbered APP.",
      reference: "Australian Privacy Principles 3, 5, and 6 — Collection, Notification, Use and Disclosure"
    },
    {
      id: "q19",
      type: "multiple_choice",
      question: "Which Japanese law requires business operators to handle personal data fairly and securely?",
      options: [
        "GDPR",
        "APPs",
        "APPI",
        "CCPA"
      ],
      correctAnswer: 2,
      explanation: "Japan's Act on the Protection of Personal Information (APPI) regulates how covered business operators handle personal information, including appropriate use, security control measures, and protection of individuals' rights. GDPR is the EU framework, APPs are Australian privacy principles, and CCPA is California legislation.",
      reference: "Japan — Act on the Protection of Personal Information (APPI)"
    },
    {
      id: "q20",
      type: "true_false",
      question: "Under GDPR, adequacy decisions allow data to flow freely to specific countries.",
      correctAnswer: true,
      explanation: "A European Commission adequacy decision recognizes that a third country, territory, sector, or qualifying framework provides an adequate level of personal data protection. This permits covered personal data transfers without requiring additional transfer safeguards solely for that international transfer. Other GDPR obligations still apply, so an adequacy decision is not an exemption from all data protection requirements.",
      reference: "GDPR Article 45 — Transfers on the Basis of an Adequacy Decision"
    },
    {
      id: "q21",
      type: "true_false",
      question: "The GDPR principle of accuracy requires personal data to be up to date.",
      correctAnswer: true,
      explanation: "GDPR Article 5's accuracy principle requires personal data to be accurate and, where necessary, kept up to date. Organizations must take reasonable steps to erase or rectify inaccurate information without delay, taking into account the purposes for which the data is processed. This helps prevent decisions based on outdated or incorrect records.",
      reference: "GDPR Article 5(1)(d) — Accuracy"
    },
    {
      id: "q22",
      type: "multiple_choice",
      question: "Under APPs, organizations must notify individuals when collecting their data. Which APP is this?",
      options: [
        "APP 8",
        "APP 5",
        "APP 11",
        "APP 13"
      ],
      correctAnswer: 1,
      explanation: "APP 5 requires covered entities to take reasonable steps to notify individuals of specified matters at or around the time of collecting personal information. These matters include the entity's identity, collection purposes, relevant access and correction information, and other required disclosures. APP 8 concerns cross-border disclosure, APP 11 concerns security, and APP 13 concerns correction.",
      reference: "Australian Privacy Principle 5 — Notification of the Collection of Personal Information"
    },
    {
      id: "q23",
      type: "multiple_choice",
      question: "A business subject to CCPA must provide which option on its website?",
      options: [
        "Apply for adequacy decision",
        "\"Do Not Sell My Personal Information\" link",
        "Request SCCs",
        "File under OECD guidelines"
      ],
      correctAnswer: 1,
      explanation: "The CCPA establishes an opt-out right for the sale or sharing of personal information. Businesses subject to applicable requirements must provide an accessible method for consumers to exercise this right, historically presented through a 'Do Not Sell My Personal Information' link. Current California rules also recognize updated 'Do Not Sell or Share' terminology and certain alternative opt-out methods or preference signals. Adequacy decisions and Standard Contractual Clauses are associated with GDPR international transfers.",
      reference: "California Consumer Privacy Act — Right to Opt Out of Sale or Sharing"
    },
    {
      id: "q24",
      type: "multiple_choice",
      question: "The GDPR principle requiring organizations to demonstrate compliance with all rules is:",
      options: [
        "Accuracy",
        "Purpose limitation",
        "Integrity and confidentiality",
        "Accountability"
      ],
      correctAnswer: 3,
      explanation: "GDPR accountability requires the data controller not only to comply with applicable data protection principles but also to demonstrate compliance. Relevant evidence may include documented policies, risk assessments, records of processing, staff training, contractual safeguards, and appropriate security measures. The other options address specific principles rather than the responsibility to demonstrate overall compliance.",
      reference: "GDPR Article 5(2) — Accountability"
    },
    {
      id: "q25",
      type: "multiple_choice",
      question: "Which UN Resolution first recognized the digital privacy right globally?",
      options: [
        "72/184",
        "68/167",
        "74/247",
        "65/238"
      ],
      correctAnswer: 1,
      explanation: "UN General Assembly Resolution 68/167, adopted in 2013, explicitly addressed the right to privacy in the digital age and raised concerns regarding unlawful or arbitrary surveillance and interception of communications. The resolution built upon the existing human right to privacy rather than creating an entirely new privacy right for the first time.",
      reference: "UN General Assembly Resolution 68/167 — The Right to Privacy in the Digital Age"
    },
    {
      id: "q26",
      type: "multiple_select",
      question: "Which rights are common to both GDPR and CCPA?",
      options: [
        "Right to know/access",
        "Right to delete/erasure",
        "Right to portability",
        "Right to restrict processing"
      ],
      correctAnswer: [0, 1],
      explanation: "Both GDPR and CCPA provide individuals with rights to obtain information about their personal data and request deletion under applicable conditions. The GDPR also expressly grants data portability under Article 20 and restriction of processing under Article 18. This assessment treats those latter rights as distinct from the basic CCPA rights, so its expected selections are access and deletion. However, California law requires certain disclosed personal information to be provided in a readily usable form that enables transfer to another entity, which resembles portability. Accordingly, excluding portability is an assessment-specific distinction rather than an absolute statement that California provides no portable access to data.",
      reference: "GDPR Articles 15, 17, 18, and 20; CCPA — Rights to Know and Delete; California Civil Code Section 1798.130"
    },
    {
      id: "q27",
      type: "multiple_choice",
      question: "A California firm collects consumer data but fails to disclose the categories of information. Which right is violated?",
      options: [
        "Portability",
        "Right to know",
        "Right to delete",
        "Right to rectification"
      ],
      correctAnswer: 1,
      explanation: "The CCPA's right to know enables consumers to obtain information about the categories and, where applicable, specific pieces of personal information collected by a business. Businesses also have notice obligations explaining their data practices. Failing to disclose relevant categories undermines these transparency and right-to-know protections.",
      reference: "CCPA — Right to Know; Notice at Collection"
    },
    {
      id: "q28",
      type: "multiple_choice",
      question: "Which principle under GDPR emphasizes holding organizations responsible for compliance demonstration?",
      options: [
        "Accuracy",
        "Accountability",
        "Integrity",
        "Data minimization"
      ],
      correctAnswer: 1,
      explanation: "The accountability principle requires organizations to take responsibility for compliance with GDPR data protection principles and be able to demonstrate that compliance. It supports documented procedures, oversight, appropriate records, and evidence of effective data protection controls. Accuracy, integrity, and data minimization have separate purposes.",
      reference: "GDPR Article 5(2) — Accountability"
    },
    {
      id: "q29",
      type: "multiple_choice",
      question: "Which GDPR right ensures a person can request correction of incorrect personal data?",
      options: [
        "Portability",
        "Right to rectification",
        "Right to be forgotten",
        "Accuracy"
      ],
      correctAnswer: 1,
      explanation: "GDPR Article 16 gives individuals the right to obtain the rectification of inaccurate personal data concerning them without undue delay. Depending on the purposes of processing, they may also request completion of incomplete data. The accuracy principle requires organizations to maintain accurate information, while rectification is the specific individual right to request correction.",
      reference: "GDPR Article 16 — Right to Rectification"
    },
    {
      id: "q30",
      type: "multiple_choice",
      question: "A European company transfers customer data to a U.S. processor without safeguards after the Schrems II decision. Which GDPR principle is violated?",
      options: [
        "Data minimization",
        "Storage limitation",
        "Cross-border data protection",
        "Accountability"
      ],
      correctAnswer: 2,
      explanation: "Schrems II highlighted the need to ensure that personal data transferred outside the European Economic Area receives the protections required by GDPR. International transfers must rely on an applicable legal mechanism, such as a valid adequacy arrangement or appropriate safeguards, with supplementary measures where necessary. A transfer lacking any valid legal basis or safeguards can violate GDPR Chapter V. The United States is not categorically excluded from lawful transfers, because valid transfer arrangements may be available for qualifying recipients.",
      reference: "GDPR Chapter V; CJEU Case C-311/18 — Schrems II"
    }
  ]
});
