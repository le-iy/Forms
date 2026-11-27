
window.PandoraQuizzes.register({
  id: "IT0204-M07-DIAG04",
  subject: "IT0204",
  module: 7,
  title: "Diagnostic Assessment 4",
  kind: "practice",
  version: 1,
  description: "60-item diagnostic covering Module 7 emerging technology ethics, AI, blockchain, IoT and cloud privacy, with Module 8 Philippine cybercrime, fintech security, and legal frameworks. No original score displayed.",
  createdAt: "2026-11-27T19:56:38+08:00",
  showOnHome: true,
  questions: [
    {
      id: "q1",
      type: "multiple_choice",
      question: "An IoT smart car continuously shares driving habits with insurers without notice. Which concern arises?",
      options: [
        "Minimization",
        "Accuracy",
        "Consent and informed choice",
        "Transparency"
      ],
      correctAnswer: 2,
      explanation: "Sharing driving behavior with insurers without notifying drivers prevents them from making an informed choice about how their data is used. It also raises transparency concerns. Where consent is required as the legal basis, drivers should receive adequate information before giving it.",
      reference: "IT0204 Module 7 — IoT: Data Collection, Informed Consent and Data Ownership"
    },
    {
      id: "q2",
      type: "multiple_select",
      question: "Which measures demonstrate accountability for cloud service providers?",
      options: [
        "Incident response plans",
        "Ignoring encryption",
        "Breach notifications",
        "Transparent outsourcing practices"
      ],
      correctAnswer: [0, 2, 3],
      explanation: "Incident response plans establish procedures for detecting and addressing incidents. Applicable breach notifications help affected parties and regulators respond, while transparent outsourcing clarifies who processes and protects information. Ignoring encryption weakens security rather than demonstrating accountability.",
      reference: "IT0204 Module 7 — Cloud Computing: Security, Data Breaches and Data Ownership"
    },
    {
      id: "q3",
      type: "true_false",
      question: "AI-powered pricing algorithms may violate fairness if they discriminate against vulnerable groups.",
      correctAnswer: true,
      explanation: "AI pricing models can produce unfair outcomes if they use protected characteristics or discriminatory proxies to impose unjustified pricing differences. Fairness assessments help identify and address these risks.",
      reference: "IT0204 Module 7 — AI: Algorithmic Bias and Fairness"
    },
    {
      id: "q4",
      type: "multiple_choice",
      question: "Cloud providers that do not implement incident response plans most likely violate:",
      options: [
        "Accountability and security obligations",
        "Minimization",
        "Transparency",
        "Accuracy"
      ],
      correctAnswer: 0,
      explanation: "Providers need appropriate measures for detecting, containing, investigating, and recovering from security incidents. An absence of incident response planning may undermine security duties and the provider's ability to demonstrate accountability.",
      reference: "IT0204 Module 7 — Cloud Security and Breach Management"
    },
    {
      id: "q5",
      type: "true_false",
      question: "AI systems denying applicants jobs without explanation undermine explainability principles.",
      correctAnswer: true,
      explanation: "When candidates cannot understand an AI-assisted hiring decision, they may have difficulty detecting mistakes, questioning bias, or requesting meaningful review. Explainability helps make consequential decisions understandable.",
      reference: "IT0204 Module 7 — AI Transparency and Explainability"
    },
    {
      id: "q6",
      type: "multiple_choice",
      question: "AI systems used in education that adaptively grade students may cause:",
      options: [
        "Transparency",
        "Fairness and bias risks",
        "Portability",
        "Accuracy"
      ],
      correctAnswer: 1,
      explanation: "Adaptive grading can produce unequal outcomes if the model, training data, or evaluation criteria are biased. Students should be evaluated using reliable, fair criteria, with meaningful oversight and opportunities to challenge errors.",
      reference: "IT0204 Module 7 — AI: Algorithmic Bias and Fairness"
    },
    {
      id: "q7",
      type: "multiple_choice",
      question: "Which principle is violated when AI makes opaque, high-risk decisions affecting individuals?",
      options: [
        "Storage limitation",
        "Transparency and accountability",
        "Accuracy",
        "Lawfulness"
      ],
      correctAnswer: 1,
      explanation: "Opaque high-risk AI decisions can prevent people from understanding why an outcome occurred and make it difficult to identify those responsible. Transparent decision processes and clear accountability are especially important when rights or opportunities are affected.",
      reference: "IT0204 Module 7 — AI Accountability and Explainability"
    },
    {
      id: "q8",
      type: "multiple_select",
      question: "Which obligations are central to IoT healthcare devices?",
      options: [
        "Confidentiality",
        "Security safeguards",
        "Compliance with health data laws",
        "Unlimited retention"
      ],
      correctAnswer: [0, 1, 2],
      explanation: "Healthcare IoT systems may process sensitive patient data. Confidentiality and security safeguards reduce unauthorized disclosure and manipulation, while applicable health and privacy laws impose legal obligations. Unlimited retention contradicts data minimization and retention-limitation principles.",
      reference: "IT0204 Module 7 — IoT Privacy, Security Vulnerabilities and Legal Compliance"
    },
    {
      id: "q9",
      type: "true_false",
      question: "Blockchain can challenge data rectification rights due to its immutability.",
      correctAnswer: true,
      explanation: "An immutable ledger resists changing historical records. If inaccurate personal data is stored directly on-chain, complying with requests to correct it can be difficult. Privacy-preserving designs may keep personal information off-chain.",
      reference: "IT0204 Module 7 — Blockchain: Immutability and Data Protection"
    },
    {
      id: "q10",
      type: "multiple_choice",
      question: "Cloud providers outsourcing storage to third parties without disclosure violate:",
      options: [
        "Accuracy",
        "Security",
        "Transparency and accountability",
        "Minimization"
      ],
      correctAnswer: 2,
      explanation: "Undisclosed outsourcing can obscure who handles personal information, where it is processed, and what protections apply. Transparency requires appropriate information about processing, and accountability requires organizations to manage third-party risks.",
      reference: "IT0204 Module 7 — Cloud: Data Ownership, Control and Accountability"
    },
    {
      id: "q11",
      type: "true_false",
      question: "Blockchain-based identity systems risk exposing personal data permanently.",
      correctAnswer: true,
      explanation: "If identifying information is written directly to an immutable ledger, it can be difficult to remove and may become available to additional parties. Even pseudonymous data can sometimes be linked to real individuals.",
      reference: "IT0204 Module 7 — Blockchain: Privacy Concerns and Immutability"
    },
    {
      id: "q12",
      type: "multiple_choice",
      question: "Which principle is undermined when AI is used in predictive hiring without testing for bias?",
      options: [
        "Accuracy",
        "Transparency",
        "Minimization",
        "Fairness and non-discrimination"
      ],
      correctAnswer: 3,
      explanation: "An untested hiring model may reproduce biases in historical recruitment data and disadvantage certain applicants. Evaluating disparate outcomes and possible discriminatory factors supports fairness and non-discrimination.",
      reference: "IT0204 Module 7 — AI: Algorithmic Bias and Fairness"
    },
    {
      id: "q13",
      type: "multiple_choice",
      question: "AI systems that exaggerate consumer vulnerabilities for profit violate:",
      options: [
        "Accountability",
        "Transparency",
        "Ethical fairness and non-exploitation",
        "Portability"
      ],
      correctAnswer: 2,
      explanation: "Deliberately exploiting users' vulnerabilities for commercial gain can manipulate their choices and impose unfair harm. Non-exploitation requires respecting individuals rather than using AI to take advantage of their weaknesses.",
      reference: "IT0204 Module 7 — AI Ethics and Fairness"
    },
    {
      id: "q14",
      type: "multiple_choice",
      question: "A hospital implements AI to predict diseases but does not inform patients about its use. Which ethical principle is ignored?",
      options: [
        "Efficiency",
        "Accuracy",
        "Informed consent",
        "Justice"
      ],
      correctAnswer: 2,
      explanation: "Patients should receive appropriate information about relevant uses of their health data and automated tools. When consent is required, it must be informed. The scenario also raises transparency concerns, even where another lawful basis permits processing.",
      reference: "IT0204 Module 7 — AI Data Privacy and Informed Consent"
    },
    {
      id: "q15",
      type: "multiple_select",
      question: "Which obligations are common across AI, IoT, and cloud systems?",
      options: [
        "Security safeguards",
        "Transparency",
        "Accountability",
        "Immutability"
      ],
      correctAnswer: [0, 1, 2],
      explanation: "Security safeguards protect information and systems. Transparency supports understandable data practices, and accountability assigns responsibility for compliance and outcomes. Immutability is a property of certain record systems rather than a universal obligation.",
      reference: "IT0204 Module 7 — Common Ethical and Legal Obligations"
    },
    {
      id: "q16",
      type: "multiple_select",
      question: "Which principles are required to ensure fairness in AI recruitment systems?",
      options: [
        "Human oversight",
        "Testing for bias",
        "Transparency of criteria",
        "Immutability"
      ],
      correctAnswer: [0, 1, 2],
      explanation: "Human oversight allows intervention in problematic decisions, bias testing helps discover discriminatory patterns, and transparent criteria support scrutiny and consistency. Immutability does not independently ensure fair recruitment.",
      reference: "IT0204 Module 7 — AI Recruitment, Bias, Accountability and Transparency"
    },
    {
      id: "q17",
      type: "multiple_select",
      question: "Which legal risks are raised by blockchain in financial services?",
      options: [
        "Anti-money laundering concerns",
        "Fairness in hiring",
        "Data protection compliance",
        "Jurisdictional conflicts"
      ],
      correctAnswer: [0, 2, 3],
      explanation: "Financial blockchain services may be subject to anti-money laundering requirements and privacy obligations. Decentralized networks operating across borders can also make jurisdiction and enforcement difficult. Fairness in hiring is unrelated to the financial blockchain scenario.",
      reference: "IT0204 Module 7 — Blockchain: Privacy and Jurisdictional Issues"
    },
    {
      id: "q18",
      type: "multiple_choice",
      question: "Cloud providers storing sensitive data in foreign servers may violate:",
      options: [
        "Cross-border compliance laws",
        "Portability",
        "Fairness",
        "Accuracy"
      ],
      correctAnswer: 0,
      explanation: "International storage and processing may trigger restrictions on cross-border data transfers. Such storage is not automatically unlawful, but organizations must comply with applicable transfer rules and safeguards.",
      reference: "IT0204 Module 7 — Big Data and Cloud: Cross-Border Data Transfers"
    },
    {
      id: "q19",
      type: "multiple_select",
      question: "Which ethical concerns apply to AI emotional surveillance at workplaces?",
      options: [
        "Privacy intrusion",
        "Portability",
        "Autonomy risks",
        "Fairness concerns"
      ],
      correctAnswer: [0, 2, 3],
      explanation: "Monitoring employees' emotions may intrude on their private lives, constrain autonomy, and lead to unfair judgments based on unreliable or biased emotional inferences. Portability is not the primary ethical issue described.",
      reference: "IT0204 Module 7 — AI Privacy, Fairness and Accountability"
    },
    {
      id: "q20",
      type: "multiple_choice",
      question: "Which ethical issue is raised by predictive policing algorithms reinforcing stereotypes?",
      options: [
        "Security safeguards",
        "Portability",
        "Accuracy",
        "Bias and fairness"
      ],
      correctAnswer: 3,
      explanation: "Predictive policing systems can perpetuate bias if historical enforcement data reflects unequal treatment. This may reinforce stereotypes and produce unfair targeting of communities.",
      reference: "IT0204 Module 7 — Algorithmic Bias and Fairness"
    },
    {
      id: "q21",
      type: "multiple_choice",
      question: "IoT devices sharing user data with advertisers without permission violates:",
      options: [
        "Accuracy",
        "Storage limitation",
        "Portability",
        "Consent and purpose limitation"
      ],
      correctAnswer: 3,
      explanation: "Sharing personal information for undisclosed advertising purposes can conflict with the purpose originally communicated to users and with applicable consent or lawful-processing requirements. Privacy obligations depend on the relevant jurisdiction and circumstances.",
      reference: "IT0204 Module 7 — IoT: Informed Consent and Data Ownership"
    },
    {
      id: "q22",
      type: "multiple_choice",
      question: "Which principle is at stake when AI decisions are made solely by algorithms with no appeal mechanism?",
      options: [
        "Minimization",
        "Accuracy",
        "Portability",
        "Accountability and human oversight"
      ],
      correctAnswer: 3,
      explanation: "Without meaningful human review or an opportunity to challenge consequential outcomes, affected individuals may be unable to correct unfair or mistaken AI decisions. Oversight and accountability help maintain responsibility for those decisions.",
      reference: "IT0204 Module 7 — AI Accountability and Liability"
    },
    {
      id: "q23",
      type: "multiple_choice",
      question: "An AI-driven chatbot stores all conversations without notifying users. Which law or principle applies?",
      options: [
        "Informed consent under data protection laws",
        "Accuracy",
        "Transparency",
        "Storage limitation"
      ],
      correctAnswer: 0,
      explanation: "Users need adequate notice about the collection and processing of their conversations. Where consent is required, it must be informed. Depending on the circumstances, transparency and storage limitation also apply; consent is not the only possible lawful basis.",
      reference: "IT0204 Module 7 — AI Data Privacy and Protection"
    },
    {
      id: "q24",
      type: "true_false",
      question: "AI systems exploiting consumer vulnerabilities raise ethical concerns of non-exploitation.",
      correctAnswer: true,
      explanation: "Non-exploitation means avoiding manipulative practices that take unfair advantage of people's weaknesses, limited knowledge, or dependence on a service. Such practices can undermine autonomy and fairness.",
      reference: "IT0204 Module 7 — Ethical AI Deployment"
    },
    {
      id: "q25",
      type: "true_false",
      question: "IoT smart cities collecting massive data without public notice raise surveillance concerns.",
      correctAnswer: true,
      explanation: "Smart-city systems can combine data from cameras, sensors, vehicles, and other sources. Large-scale collection without public notice may create pervasive tracking and surveillance risks.",
      reference: "IT0204 Module 7 — IoT: Data Collection and Surveillance"
    },
    {
      id: "q26",
      type: "multiple_choice",
      question: "A company using big data sells anonymized datasets that can still be re-identified. Which principle is violated?",
      options: [
        "Portability",
        "Lawfulness",
        "Accuracy",
        "Privacy and data protection by design"
      ],
      correctAnswer: 3,
      explanation: "A dataset is not reliably anonymous merely because names were removed. If information can reasonably be linked back to identifiable individuals, privacy-by-design measures and personal data protections may still be needed.",
      reference: "IT0204 Module 7 — Big Data Privacy; Blockchain Re-identification Risks"
    },
    {
      id: "q27",
      type: "multiple_choice",
      question: "IoT-enabled smart cities raise legal concerns about:",
      options: [
        "Surveillance and mass data collection",
        "Accuracy",
        "Portability",
        "Minimization"
      ],
      correctAnswer: 0,
      explanation: "Connected urban infrastructure can continuously collect information about residents' movements, activities, and surroundings. Aggregation across systems raises risks of extensive surveillance and unauthorized profiling.",
      reference: "IT0204 Module 7 — Internet of Things and Privacy Concerns"
    },
    {
      id: "q28",
      type: "multiple_choice",
      question: "Blockchain’s permanence of transactions creates challenges for:",
      options: [
        "Data portability",
        "Transparency",
        "Accuracy",
        "Data subject rights under GDPR"
      ],
      correctAnswer: 3,
      explanation: "Immutable records complicate requests to rectify or erase personal data under GDPR when that information is placed on-chain. The legal consequences depend on the data involved and the system's architecture.",
      reference: "IT0204 Module 7 — Blockchain: Immutability vs. Right to Erasure"
    },
    {
      id: "q29",
      type: "true_false",
      question: "Cloud analytics reusing client data for advertising without consent breaches purpose limitation.",
      correctAnswer: true,
      explanation: "Reusing personal data for an incompatible advertising purpose without an appropriate legal basis may breach purpose limitation. The question presumes that the additional use lacks the necessary authorization.",
      reference: "IT0204 Module 7 — Big Data and Cloud Data Protection"
    },
    {
      id: "q30",
      type: "true_false",
      question: "AI surveillance tools monitoring employees’ emotions without consent are ethically acceptable if efficient.",
      correctAnswer: false,
      explanation: "Efficiency does not override workers' privacy, autonomy, or fair-treatment concerns. Emotional surveillance may be intrusive and unreliable, and its legality depends on applicable safeguards and restrictions.",
      reference: "IT0204 Module 7 — AI Ethics and Privacy"
    },
    {
      id: "q31",
      type: "multiple_select",
      question: "Which principles were violated in the COMELEC breach?",
      options: [
        "Accountability",
        "Portability",
        "Confidentiality",
        "Integrity"
      ],
      correctAnswer: [0, 2, 3],
      explanation: "The intended course selections are accountability, confidentiality, and integrity. The mass disclosure of voter data clearly compromised confidentiality and highlighted accountability failures. Integrity is a broader security concern, but the mere fact of a data leak does not by itself establish that voter records were modified. The assessment's selection is preserved with this distinction.",
      reference: "IT0204 Module 8 — COMELEC Data Breach (2016); CIA Triad and Data Protection"
    },
    {
      id: "q32",
      type: "multiple_choice",
      question: "A dark web operation in Manila uses cryptocurrency to launder drug proceeds. Which area of regulation is most relevant?",
      options: [
        "Child protection",
        "Workplace privacy",
        "Intellectual property",
        "Fintech and anti-money laundering (AML)"
      ],
      correctAnswer: 3,
      explanation: "Laundering criminal proceeds through digital assets raises financial monitoring, suspicious-transaction reporting, and anti-money laundering concerns. The method of payment does not remove applicable financial crime obligations.",
      reference: "IT0204 Module 8 — Digital Drug Trade and Cryptocurrency"
    },
    {
      id: "q33",
      type: "multiple_choice",
      question: "A Philippine fintech platform is fined by BSP for failing to conduct risk assessments. Which requirement was violated?",
      options: [
        "AI accountability",
        "Transparency",
        "Data portability",
        "Governance and compliance standards"
      ],
      correctAnswer: 3,
      explanation: "Financial institutions subject to BSP supervision are expected to manage technology and operational risks through appropriate governance and assessments. Neglecting required risk assessments can violate regulatory compliance expectations.",
      reference: "IT0204 Module 8 — Government Policies and Financial Sector Cybersecurity"
    },
    {
      id: "q34",
      type: "true_false",
      question: "Phishing attacks in the Philippines often succeed due to weak digital literacy among users.",
      correctAnswer: true,
      explanation: "Limited awareness of fraudulent links, impersonation, and credential theft can increase susceptibility to phishing. The course identifies gaps in cybersecurity awareness as a significant national challenge.",
      reference: "IT0204 Module 8 — Lack of Cybersecurity Awareness"
    },
    {
      id: "q35",
      type: "multiple_choice",
      question: "A Manila-based syndicate recruits minors through chat apps for cybersex operations. Which international challenge complicates prosecution?",
      options: [
        "AI transparency",
        "Jurisdictional and cross-border legal cooperation",
        "Data portability enforcement",
        "Intellectual property enforcement"
      ],
      correctAnswer: 1,
      explanation: "Cross-border exploitation may involve perpetrators, victims, evidence, and online services in different countries. Investigation and prosecution therefore depend on coordination across jurisdictions and lawful evidence sharing.",
      reference: "IT0204 Module 8 — Cyber-Enabled Human Trafficking and Law Enforcement Challenges"
    },
    {
      id: "q36",
      type: "true_false",
      question: "The COMELEC data breach demonstrated weak safeguards on government databases.",
      correctAnswer: true,
      explanation: "The 2016 COMELEC breach exposed voter information and demonstrated weaknesses in government data protection. Module 8 expressly uses the incident to illustrate the need for stronger security controls. The selected False answer in the source assessment should be corrected to True.",
      reference: "IT0204 Module 8 — COMELEC Data Breach (2016), Page 19"
    },
    {
      id: "q37",
      type: "multiple_choice",
      question: "Hackers deface the website of a Philippine university to protest tuition hikes. This constitutes:",
      options: [
        "Digital forgery",
        "Piracy",
        "Website defacement as a form of hacktivism",
        "Wiretapping"
      ],
      correctAnswer: 2,
      explanation: "Hacktivism uses hacking techniques to promote political or social causes. Unauthorized alteration of a university website is website defacement, regardless of whether the attackers claim a protest motive.",
      reference: "IT0204 Module 8 — Cybercrime Prevention Act: Illegal Access and Data Interference"
    },
    {
      id: "q38",
      type: "multiple_choice",
      question: "A Philippine court requires disclosure of blockchain transactions linked to drug money. Which challenge arises?",
      options: [
        "Pseudonymity and tracing difficulties",
        "Transparency",
        "IoT limitations",
        "Portability"
      ],
      correctAnswer: 0,
      explanation: "Blockchain records may be publicly visible while wallet identifiers remain pseudonymous. Connecting those transactions to specific persons can require additional evidence and financial tracing. Pseudonymity makes attribution harder but not impossible.",
      reference: "IT0204 Modules 7–8 — Blockchain Privacy; Digital Drug Trade"
    },
    {
      id: "q39",
      type: "multiple_choice",
      question: "A Philippine police unit intercepts a darknet forum selling narcotics. Which law primarily applies?",
      options: [
        "RA 9995",
        "RA 4200",
        "RA 10173",
        "RA 10175 (Cybercrime Prevention Act)"
      ],
      correctAnswer: 3,
      explanation: "RA 10175 is the intended cybercrime framework for offenses involving illegal access and related computer-based criminal activity. Drug offenses and the legality of any interception must also be evaluated under other applicable laws; operating a darknet forum is not automatically a standalone RA 10175 offense.",
      reference: "IT0204 Module 8 — Cybercrime Prevention Act of 2012 and Digital Drug Trade"
    },
    {
      id: "q40",
      type: "true_false",
      question: "Online recruitment for digital drug distribution highlights the convergence of traditional and cybercrime.",
      correctAnswer: true,
      explanation: "Drug distribution is a traditional criminal activity, but recruitment, advertising, communication, and transactions can occur through digital platforms. This combines offline offenses with cyber-enabled methods.",
      reference: "IT0204 Module 8 — Digital Drug Trade and Cybercrime"
    },
    {
      id: "q41",
      type: "multiple_choice",
      question: "A ransomware attack shuts down a hospital in Quezon City. This primarily affects which dimension of cybersecurity?",
      options: [
        "Accuracy of data",
        "Transparency",
        "Portability",
        "Availability of critical services"
      ],
      correctAnswer: 3,
      explanation: "A ransomware-related shutdown prevents staff and patients from accessing essential hospital systems. This directly threatens availability, one of the confidentiality-integrity-availability security objectives.",
      reference: "IT0204 Module 8 — Ransomware and Critical Infrastructure"
    },
    {
      id: "q42",
      type: "multiple_choice",
      question: "A Philippine cybercriminal syndicate offers ransomware-as-a-service. Which feature of cybercrime is highlighted?",
      options: [
        "Copyright enforcement",
        "Transparency",
        "Commercialization and scalability of cybercrime operations",
        "Data portability"
      ],
      correctAnswer: 2,
      explanation: "Ransomware-as-a-service distributes tools and infrastructure to affiliates, making attacks accessible to more criminals. It reflects cybercrime operating as a scalable commercial enterprise.",
      reference: "IT0204 Module 8 — Emerging Cybercrime Threats"
    },
    {
      id: "q43",
      type: "multiple_choice",
      question: "An online prostitution syndicate is discovered operating across Manila and Davao. Which compliance gap worsens the case?",
      options: [
        "Lack of fintech guidelines",
        "Weak copyright enforcement",
        "Limited cross-border cooperation in cybercrime investigation",
        "AI accountability"
      ],
      correctAnswer: 2,
      explanation: "The intended course answer concerns investigative coordination across jurisdictions. Manila and Davao are both within the Philippines, however, so this example more directly illustrates interregional or interagency cooperation rather than international cross-border enforcement.",
      reference: "IT0204 Module 8 — Cyber-Enabled Trafficking and Jurisdictional Challenges"
    },
    {
      id: "q44",
      type: "multiple_select",
      question: "Which laws directly address online prostitution and cybersex?",
      options: [
        "RA 8792",
        "RA 8293",
        "RA 9775",
        "RA 10175"
      ],
      correctAnswer: [2, 3],
      explanation: "RA 10175 provides the course's cybersex offense framework. RA 9775 addresses child pornography and is relevant where the conduct involves child sexual exploitation material. Neither statute automatically covers every form of prostitution, and other anti-trafficking and child-protection laws may also apply.",
      reference: "IT0204 Module 8 — RA 10175, Section 4(c); RA 9775"
    },
    {
      id: "q45",
      type: "multiple_choice",
      question: "A dark web market in Cebu offers methamphetamine deliveries via cryptocurrency. Which risk factor is central?",
      options: [
        "Intellectual property theft",
        "Anonymity in digital drug trade",
        "Transparency",
        "Portability"
      ],
      correctAnswer: 1,
      explanation: "Dark web anonymity and pseudonymous payment methods can conceal criminal participants and complicate investigators' efforts to connect transactions with identities. Neither anonymity nor cryptocurrency guarantees complete untraceability.",
      reference: "IT0204 Module 8 — Digital Drug Trade and Law Enforcement Challenges"
    },
    {
      id: "q46",
      type: "multiple_choice",
      question: "An IoT-enabled ATM skimmer captures card details in Manila. Which regulation addresses the financial security gap?",
      options: [
        "PCI DSS and BSP rules",
        "HIPAA",
        "GDPR",
        "RA 8293"
      ],
      correctAnswer: 0,
      explanation: "PCI DSS establishes payment-card data security requirements, while relevant BSP rules govern financial institutions' technology and operational security. ATM skimming threatens payment information and may also constitute criminal fraud. PCI DSS is an industry standard rather than a Philippine statute.",
      reference: "IT0204 Module 8 — Financial Cybersecurity; BSP Risk Management; PCI DSS"
    },
    {
      id: "q47",
      type: "multiple_choice",
      question: "Hackers infiltrate a Philippine bank’s system to siphon funds into offshore accounts. Which key risk is highlighted?",
      options: [
        "IoT vulnerabilities",
        "Cybersecurity in fintech operations",
        "AI ethics",
        "Cloud storage issues"
      ],
      correctAnswer: 1,
      explanation: "Unauthorized access and fund transfers demonstrate financial cybersecurity risks, including account compromise, fraud, and weaknesses in transaction safeguards.",
      reference: "IT0204 Module 8 — Financial Sector Cybersecurity and Cybercrime"
    },
    {
      id: "q48",
      type: "multiple_select",
      question: "Which strategies strengthen Philippine cybercrime response?",
      options: [
        "Improved digital literacy",
        "Enhanced cyber forensics",
        "International cooperation",
        "Ignoring cyber threats"
      ],
      correctAnswer: [0, 1, 2],
      explanation: "Digital literacy helps users recognize threats, forensic capabilities support evidence collection and investigations, and international cooperation helps tackle crimes spanning borders. Ignoring threats undermines preparedness and response.",
      reference: "IT0204 Module 8 — Cybersecurity Education and Law Enforcement Challenges"
    },
    {
      id: "q49",
      type: "multiple_choice",
      question: "Which Philippine law directly addresses hacking, phishing, and related crimes?",
      options: [
        "RA 4200",
        "RA 8792",
        "RA 10175",
        "RA 8293"
      ],
      correctAnswer: 2,
      explanation: "RA 10175 is the Cybercrime Prevention Act of 2012. It covers illegal access, computer-related fraud, identity theft, and other specified offenses. Phishing may fall within its provisions depending on the actual acts committed.",
      reference: "IT0204 Module 8 — Cybercrime Prevention Act of 2012"
    },
    {
      id: "q50",
      type: "multiple_choice",
      question: "A barangay resident reports being blackmailed online with private photos. Which law offers protection?",
      options: [
        "RA 4200",
        "RA 8293",
        "RA 8792",
        "RA 9995 (Anti-Photo and Video Voyeurism Act)"
      ],
      correctAnswer: 3,
      explanation: "RA 9995 addresses specified nonconsensual intimate-photo and video conduct and is the intended answer. Its application depends on the nature of the material and conduct; other laws may apply to threats, extortion, or harassment.",
      reference: "RA 9995 — Anti-Photo and Video Voyeurism Act"
    },
    {
      id: "q51",
      type: "multiple_choice",
      question: "A fintech app fails to implement 2FA, leading to customer fraud. Which principle was neglected?",
      options: [
        "Data minimization",
        "Portability",
        "Security by design",
        "Transparency"
      ],
      correctAnswer: 2,
      explanation: "Security by design means incorporating appropriate protections into system architecture before deployment. Risk-based authentication controls, including multi-factor authentication where appropriate, can help prevent account compromise.",
      reference: "IT0204 Module 8 — Financial Cybersecurity and Security Controls"
    },
    {
      id: "q52",
      type: "multiple_choice",
      question: "Cybercriminals in the Philippines exploit poor awareness to spread phishing. What’s the root issue?",
      options: [
        "High costs of ICT",
        "Weak digital literacy and cyber hygiene",
        "Cultural homogeneity",
        "Lack of legal framework"
      ],
      correctAnswer: 1,
      explanation: "Insufficient awareness of deceptive links, impersonation, unsafe downloads, and credential protection can increase phishing susceptibility. Module 8 identifies cybersecurity awareness as a major challenge.",
      reference: "IT0204 Module 8 — Lack of Cybersecurity Awareness"
    },
    {
      id: "q53",
      type: "multiple_choice",
      question: "A digital loan app in the Philippines abuses access permissions to read SMS messages. Which law regulates this?",
      options: [
        "RA 8293",
        "PCI DSS",
        "RA 4200",
        "RA 10173"
      ],
      correctAnswer: 3,
      explanation: "RA 10173 regulates the processing of personal information, including requirements for lawful purposes, transparency, proportionality, and security. Unauthorized collection of SMS content or related personal data may violate those requirements.",
      reference: "IT0204 Module 8 — Data Privacy Act of 2012 (RA 10173)"
    },
    {
      id: "q54",
      type: "multiple_choice",
      question: "An e-wallet is exploited to fund illegal online gambling. This highlights which key compliance gap?",
      options: [
        "Intellectual property protection",
        "Blockchain accountability",
        "Transparency",
        "Anti-money laundering oversight"
      ],
      correctAnswer: 3,
      explanation: "Financial platforms can be abused to move funds connected to unlawful activities. Customer due diligence, transaction monitoring, and suspicious-activity reporting are important anti-money laundering safeguards.",
      reference: "IT0204 Module 8 — Fintech Security and Financial Crime"
    },
    {
      id: "q55",
      type: "true_false",
      question: "The use of IoT devices in hotels for illegal surveillance connected to prostitution raises serious privacy risks.",
      correctAnswer: true,
      explanation: "Covert cameras or other compromised connected devices can capture intimate or private activities without authorization. These activities threaten privacy and may facilitate coercion, harassment, or exploitation.",
      reference: "IT0204 Modules 7–8 — IoT Surveillance and Cyber-Enabled Exploitation"
    },
    {
      id: "q56",
      type: "multiple_select",
      question: "Which agencies enforce fintech compliance and consumer protection?",
      options: [
        "BSP",
        "SEC",
        "NPC",
        "DOT"
      ],
      correctAnswer: [0, 1, 2],
      explanation: "BSP supervises covered financial institutions and payment-related activities. SEC regulates relevant corporations, securities activities, and financial products within its jurisdiction. NPC enforces personal data protection requirements. DOT is not a principal fintech regulator.",
      reference: "IT0204 Module 8 — Philippine Financial and Data Protection Regulators"
    },
    {
      id: "q57",
      type: "true_false",
      question: "Cybercrime in the Philippines is unique due to strong enforcement and judicial efficiency.",
      correctAnswer: false,
      explanation: "The module discusses challenges such as limited trained personnel, uneven security maturity, investigative difficulties, and jurisdictional problems. Strong enforcement and judicial efficiency are not identified as the defining reasons for the country's cybercrime challenges.",
      reference: "IT0204 Module 8 — Philippine Cybersecurity and Enforcement Challenges"
    },
    {
      id: "q58",
      type: "multiple_choice",
      question: "The Bangko Sentral ng Pilipinas requires e-wallets to adopt risk management policies. This ensures:",
      options: [
        "Unlimited data retention",
        "Transparency only",
        "Financial stability and customer protection",
        "Portability"
      ],
      correctAnswer: 2,
      explanation: "Risk management policies help institutions control fraud, technology failures, operational disruptions, and related threats. These safeguards support resilient financial services and protection of customers.",
      reference: "IT0204 Module 8 — BSP Cybersecurity and Risk Management"
    },
    {
      id: "q59",
      type: "multiple_choice",
      question: "Which cybercrime most directly enables online prostitution?",
      options: [
        "Cybersex",
        "Cyber-libel",
        "Wiretapping",
        "Piracy"
      ],
      correctAnswer: 0,
      explanation: "Cybersex is the intended course category for certain online sexual activities covered by RA 10175. Prostitution and human trafficking may involve separate offenses under other laws, so the terms should not be treated as identical in every legal context.",
      reference: "IT0204 Module 8 — Cybersex and Cyber-Enabled Prostitution"
    },
    {
      id: "q60",
      type: "multiple_choice",
      question: "A Philippine university experiences credential phishing targeting student portals. This is an example of:",
      options: [
        "Blockchain failure",
        "Identity theft and unauthorized access",
        "Data portability",
        "IoT misconfiguration"
      ],
      correctAnswer: 1,
      explanation: "Credential phishing tricks students into revealing login information, potentially enabling account takeover, identity misuse, and unauthorized portal access. These actions may fall under applicable cybercrime offenses.",
      reference: "IT0204 Module 8 — Phishing, Illegal Access and Computer-Related Identity Theft"
    }
  ]
});
