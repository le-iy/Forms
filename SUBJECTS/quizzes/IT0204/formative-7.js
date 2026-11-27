
window.PandoraQuizzes.register({
  id: "IT0204-M07-F07",
  subject: "IT0204",
  module: 7,
  title: "Formative Assessment 7",
  kind: "formative",
  version: 1,
  description: "30-item assessment covering ethical and legal challenges of AI, IoT, blockchain, cloud computing, privacy, explainability, human oversight, GDPR rights, and cross-border compliance.",
  createdAt: "2026-11-27T19:33:39+08:00",
  showOnHome: true,
  questions: [
    {
      id: "q1",
      type: "multiple_choice",
      question: "IoT-connected vehicles transmitting geolocation data without anonymization raise:",
      options: [
        "Accuracy",
        "Privacy and confidentiality concerns",
        "Transparency",
        "Accountability"
      ],
      correctAnswer: 1,
      explanation: "Vehicle geolocation data can reveal a person's movements, routine destinations, workplace, and potentially their identity. Sending this information without effective privacy protections can expose individuals to tracking, profiling, and unauthorized disclosure. Privacy concerns arise even when location information does not explicitly contain a person's name, because travel patterns can make individuals identifiable.",
      reference: "IT0204 Module 7 — IoT Privacy; GDPR Article 5"
    },
    {
      id: "q2",
      type: "multiple_choice",
      question: "AI used in judicial sentencing without human oversight raises concerns of:",
      options: [
        "Transparency",
        "Fairness and accountability",
        "Portability",
        "Accuracy"
      ],
      correctAnswer: 1,
      explanation: "Judicial sentencing can significantly affect a person's liberty and legal rights. Relying on an AI system without meaningful human judgment creates risks of discriminatory outcomes, unjustified decisions, and unclear responsibility when errors occur. Fairness requires appropriate review of potential bias, while accountability requires identifiable decision-makers who can explain and take responsibility for the outcome.",
      reference: "IT0204 Module 7 — AI Ethics, Human Oversight, and Algorithmic Accountability"
    },
    {
      id: "q3",
      type: "multiple_choice",
      question: "AI systems that exaggerate consumer vulnerabilities for profit violate:",
      options: [
        "Transparency",
        "Accountability",
        "Ethical fairness and non-exploitation",
        "Portability"
      ],
      correctAnswer: 2,
      explanation: "Ethical fairness and non-exploitation require organizations to avoid manipulating people based on weaknesses or vulnerabilities, particularly when doing so causes harm or unfair disadvantage. An AI system deliberately intensifying consumer vulnerabilities for commercial benefit exploits users rather than treating them fairly. Disclosure alone would not necessarily eliminate the underlying exploitation.",
      reference: "IT0204 Module 7 — AI Ethics, Fairness, and Non-Exploitation"
    },
    {
      id: "q4",
      type: "multiple_choice",
      question: "An AI-driven chatbot stores all conversations without notifying users. Which law or principle applies?",
      options: [
        "Storage limitation",
        "Transparency",
        "Informed consent under data protection laws",
        "Accuracy"
      ],
      correctAnswer: 2,
      explanation: "Collecting and retaining chatbot conversations can involve processing personal information, so users must receive appropriate information about the processing and its purposes. Where consent is the applicable lawful basis, consent must be informed and valid. However, privacy laws such as the GDPR may permit other lawful bases, so consent is not universally mandatory for every chatbot. The failure to notify users also raises a transparency concern, and retaining conversations indefinitely may implicate storage limitation.",
      reference: "IT0204 Module 7 — Informed Consent; GDPR Articles 5, 6, and 13"
    },
    {
      id: "q5",
      type: "true_false",
      question: "AI systems that lack human oversight may undermine accountability.",
      correctAnswer: true,
      explanation: "Human oversight helps organizations detect errors, challenge inappropriate outputs, intervene in harmful decisions, and assign responsibility for important outcomes. When an AI system operates without meaningful oversight, it can become difficult to identify who authorized a decision, whether the result was justified, or how a mistake can be corrected. Accountability requires governance and responsibility, not merely allowing an algorithm to operate independently.",
      reference: "IT0204 Module 7 — AI Governance and Human Oversight"
    },
    {
      id: "q6",
      type: "multiple_select",
      question: "Which issues are associated with AI explainability gaps?",
      options: [
        "Transparency concerns",
        "Lack of accountability",
        "Risk of unfair decisions",
        "Data portability"
      ],
      correctAnswer: [0, 1, 2],
      explanation: "When an AI system cannot adequately explain its outputs, users may struggle to understand why a decision occurred, creating transparency concerns. Organizations may also find it harder to audit decisions and establish responsibility, weakening accountability. Hidden correlations, biased training data, or flawed assumptions may produce unfair results that are difficult to challenge. Data portability concerns the ability to transfer personal data between services and is not directly an explainability problem.",
      reference: "IT0204 Module 7 — Explainable AI, Transparency, and Algorithmic Fairness"
    },
    {
      id: "q7",
      type: "true_false",
      question: "IoT-connected cars transmitting geolocation data without anonymization raise privacy concerns.",
      correctAnswer: true,
      explanation: "Connected vehicles can collect precise location histories that reveal where individuals live, work, travel, and spend time. If these records are transmitted without sufficient protection, they may enable tracking, re-identification, or unauthorized profiling. Even pseudonymized location data can remain personal data when it can reasonably be linked to an individual.",
      reference: "IT0204 Module 7 — Connected Vehicles and Location Privacy"
    },
    {
      id: "q8",
      type: "multiple_choice",
      question: "Which principle is challenged when AI cannot explain why it denied an applicant a job?",
      options: [
        "Minimization",
        "Explainability and transparency",
        "Accuracy",
        "Integrity"
      ],
      correctAnswer: 1,
      explanation: "Explainability requires an AI-assisted decision to be understandable enough for relevant people to assess its basis, limitations, and potential errors. Transparency helps applicants recognize when automated systems influence important decisions. If a hiring system cannot provide an intelligible explanation for a rejection, applicants may be unable to identify unfair factors or challenge mistakes. Data minimization and integrity are separate principles.",
      reference: "IT0204 Module 7 — Explainable AI and Automated Employment Decisions"
    },
    {
      id: "q9",
      type: "multiple_choice",
      question: "A smart home device constantly transmits audio data without explicit permission. This primarily violates:",
      options: [
        "Accuracy",
        "Privacy and consent",
        "Fairness",
        "Portability"
      ],
      correctAnswer: 1,
      explanation: "Continuous transmission of audio from a home may capture private conversations, voices, and other personal information. If users are unaware of the recording or transmission, the device creates serious privacy concerns and may violate consent or other lawful-processing requirements depending on the jurisdiction. Responsible design should disclose relevant processing, limit unnecessary collection, protect transmissions, and provide meaningful controls.",
      reference: "IT0204 Module 7 — Smart Home IoT, Audio Collection, and Privacy"
    },
    {
      id: "q10",
      type: "true_false",
      question: "AI used in predictive policing without testing for bias risks reinforcing discrimination.",
      correctAnswer: true,
      explanation: "Predictive policing systems may learn from historical enforcement records that reflect unequal policing practices. If these datasets contain systematic bias, a model can reproduce or amplify discriminatory patterns. Testing for fairness, examining data quality, monitoring outcomes, and maintaining human accountability are important safeguards when AI is considered for decisions affecting communities.",
      reference: "IT0204 Module 7 — Predictive Policing and Algorithmic Bias"
    },
    {
      id: "q11",
      type: "multiple_choice",
      question: "A company selling big data sells anonymized datasets that can still be re-identified. Which principle is violated?",
      options: [
        "Accuracy",
        "Lawfulness",
        "Privacy and data protection by design",
        "Portability"
      ],
      correctAnswer: 2,
      explanation: "Privacy and data protection by design require organizations to incorporate safeguards into the development and operation of systems that process personal information. A dataset described as anonymous may still expose individuals if records can be linked with external information to re-identify them. Where re-identification is reasonably possible, the dataset may remain personal data, requiring appropriate safeguards. Simply removing names does not guarantee anonymity.",
      reference: "IT0204 Module 7 — Privacy by Design, Anonymization, and Re-identification"
    },
    {
      id: "q12",
      type: "multiple_choice",
      question: "A blockchain healthcare record is immutable but reveals patient identifiers. Which legal principle is challenged?",
      options: [
        "Accuracy",
        "Transparency",
        "Privacy and right to erasure",
        "Minimization"
      ],
      correctAnswer: 2,
      explanation: "Healthcare identifiers can be sensitive personal information. If they are recorded directly on a blockchain, their persistence and replication may make unauthorized disclosure difficult to remedy. GDPR's right to erasure can also create difficulties because blockchain records are designed to resist alteration or deletion. A safer design may avoid putting identifiable patient information directly on-chain and instead use protected off-chain storage with carefully designed references.",
      reference: "IT0204 Module 7 — Blockchain and Healthcare Privacy; GDPR Article 17"
    },
    {
      id: "q13",
      type: "multiple_choice",
      question: "Which legal issue arises when IoT devices collect children's data without parental consent?",
      options: [
        "Accuracy",
        "Violation of child privacy protections (e.g., COPPA)",
        "Accountability",
        "Minimization"
      ],
      correctAnswer: 1,
      explanation: "Children's privacy laws may impose special requirements before organizations collect personal information from children. In the United States, COPPA generally requires covered operators of child-directed online services, or services knowingly collecting information from children under 13, to provide notice and obtain verifiable parental consent unless an exception applies. Internet-connected toys and other IoT devices can fall within these requirements.",
      reference: "FTC — Children's Online Privacy Protection Act (COPPA)"
    },
    {
      id: "q14",
      type: "multiple_choice",
      question: "IoT security cameras are hacked, exposing household activities. This raises concerns about:",
      options: [
        "Accuracy",
        "Confidentiality and cybersecurity",
        "Transparency",
        "Minimization"
      ],
      correctAnswer: 1,
      explanation: "Compromised security cameras can expose live feeds or recordings of private spaces to unauthorized parties. This directly threatens confidentiality, which means preventing unauthorized access or disclosure of information. It also demonstrates cybersecurity failures in areas such as authentication, device updates, network security, and secure remote access. Accuracy is not the main concern in this scenario.",
      reference: "IT0204 Module 7 — IoT Device Security and Confidentiality"
    },
    {
      id: "q15",
      type: "true_false",
      question: "An AI-powered recruitment tool that filters applicants without disclosure violates transparency principles.",
      correctAnswer: true,
      explanation: "Transparency principles require organizations to provide appropriate information about significant automated processing, particularly when it affects employment opportunities or individual rights. Secretly using AI to screen applicants may prevent them from understanding how decisions are made or what processing affects them. The precise disclosure obligations depend on applicable law, but undisclosed automated screening presents a clear transparency risk.",
      reference: "IT0204 Module 7 — AI Recruitment and Transparency; EU AI Act"
    },
    {
      id: "q16",
      type: "true_false",
      question: "Blockchain can challenge data rectification rights due to its immutability.",
      correctAnswer: true,
      explanation: "The right to rectification allows individuals to seek correction of inaccurate personal information. Blockchain systems typically preserve historical transactions and resist changing previously written records, so correcting personal data directly on-chain may be difficult. Adding a new transaction that supersedes an old value may help some designs, but it does not necessarily eliminate exposure of the original inaccurate information.",
      reference: "IT0204 Module 7 — Blockchain Immutability; GDPR Article 16"
    },
    {
      id: "q17",
      type: "multiple_choice",
      question: "Blockchain technology poses challenges to GDPR primarily because of:",
      options: [
        "Data portability",
        "Immutability of data",
        "Accuracy of processing",
        "Storage limitation"
      ],
      correctAnswer: 1,
      explanation: "Blockchains are designed so that confirmed information is difficult to change or delete. When personal information is stored on-chain, this permanence can conflict with obligations to rectify inaccurate records, erase information when legally required, or limit retention. The challenge is not inherent to every blockchain use: privacy-preserving architectures may store personal data off-chain and minimize information written to the ledger.",
      reference: "IT0204 Module 7 — Blockchain and GDPR; Articles 16 and 17"
    },
    {
      id: "q18",
      type: "multiple_choice",
      question: "IoT devices sharing user data with advertisers without permission violates:",
      options: [
        "Accuracy",
        "Consent and purpose limitation",
        "Storage limitation",
        "Portability"
      ],
      correctAnswer: 1,
      explanation: "Using personal data for advertising when that use was not appropriately disclosed or lawfully authorized can violate privacy requirements. Purpose limitation requires personal information to be used consistently with the purposes for which it was collected unless a valid legal basis permits additional processing. Where consent is required, the organization must obtain valid consent rather than silently sharing data with advertisers.",
      reference: "IT0204 Module 7 — IoT Data Sharing; GDPR Purpose Limitation and Lawful Processing"
    },
    {
      id: "q19",
      type: "multiple_choice",
      question: "Which principle is at stake when AI decisions are made solely by algorithms with no appeal mechanism?",
      options: [
        "Accuracy",
        "Accountability and human oversight",
        "Portability",
        "Minimization"
      ],
      correctAnswer: 1,
      explanation: "When an algorithm makes consequential decisions without meaningful review or a way to challenge errors, responsibility for the outcome becomes difficult to enforce. Human oversight and accountability support independent review, correction of mistakes, and safeguards against unfair decisions. Certain legal frameworks also provide protections relating to qualifying solely automated decisions that significantly affect individuals.",
      reference: "IT0204 Module 7 — Automated Decisions and Accountability; GDPR Article 22"
    },
    {
      id: "q20",
      type: "multiple_select",
      question: "Which technologies raise issues with cross-border compliance?",
      options: [
        "Cloud computing",
        "Blockchain applications",
        "Big data analytics",
        "Local IoT networks only"
      ],
      correctAnswer: [0, 1, 2],
      explanation: "Cloud computing may store or process information in several countries, raising questions about data transfer rules, applicable law, and processor obligations. Blockchain applications may replicate ledger information across geographically distributed nodes. Big data analytics may combine information collected from different jurisdictions, creating overlapping compliance requirements. A purely local IoT network does not necessarily create an international transfer issue, although it still needs appropriate privacy and security controls.",
      reference: "IT0204 Module 7 — Cross-Border Data Transfers and Emerging Technologies"
    },
    {
      id: "q21",
      type: "multiple_choice",
      question: "An AI model trained on biased datasets produces unfair outcomes. Which law or framework would address this issue?",
      options: [
        "Blockchain regulations",
        "IoT policies",
        "AI ethics guidelines (e.g., EU AI Act)",
        "NIS Directive"
      ],
      correctAnswer: 2,
      explanation: "AI ethics frameworks emphasize fairness, non-discrimination, transparency, accountability, and appropriate evaluation of training data. The EU AI Act applies a risk-based framework to AI systems, including requirements relevant to certain high-risk applications. These approaches address the possibility that biased datasets and model design can create discriminatory decisions. Network-security rules or blockchain-specific frameworks are not the primary tools for this issue.",
      reference: "EU AI Act — High-Risk AI and Fundamental Rights; AI Ethics Guidelines"
    },
    {
      id: "q22",
      type: "multiple_choice",
      question: "Blockchain’s immutability conflicts with which GDPR principle?",
      options: [
        "Accuracy",
        "Right to be forgotten",
        "Transparency",
        "Data minimization"
      ],
      correctAnswer: 1,
      explanation: "GDPR Article 17 provides a right to erasure in specified circumstances, commonly called the right to be forgotten. Blockchain's immutability can make it difficult to remove personal information once it has been recorded and replicated across network participants. Erasure rights are subject to exceptions, and the legal analysis depends on whether personal data is stored on-chain and how the system is designed.",
      reference: "GDPR Article 17 — Right to Erasure; Blockchain Immutability"
    },
    {
      id: "q23",
      type: "true_false",
      question: "AI systems denying applicants jobs without explanation undermine explainability principles.",
      correctAnswer: true,
      explanation: "Applicants affected by AI-assisted screening may need understandable information about how important decisions were reached. When a hiring system offers no meaningful explanation, it becomes harder to identify errors, investigate possible bias, or challenge an unfair outcome. Explainability supports transparency and accountability, particularly in decisions that materially affect employment opportunities.",
      reference: "IT0204 Module 7 — Explainable AI and Automated Recruitment"
    },
    {
      id: "q24",
      type: "multiple_choice",
      question: "Blockchain traceability in supply chains can conflict with:",
      options: [
        "Accuracy",
        "Fairness",
        "Trade secrets and confidentiality",
        "Storage limitation"
      ],
      correctAnswer: 2,
      explanation: "Supply-chain blockchains may record transactions, suppliers, product movements, and other commercially sensitive information. Broad visibility of these records can reveal business relationships, pricing strategies, logistics information, or proprietary processes. Organizations must balance traceability with confidentiality by using access controls, restricted disclosure, or other privacy-preserving mechanisms.",
      reference: "IT0204 Module 7 — Blockchain Traceability and Commercial Confidentiality"
    },
    {
      id: "q25",
      type: "multiple_select",
      question: "Which rights may conflict with blockchain immutability?",
      options: [
        "GDPR right to erasure",
        "GDPR right to rectification",
        "Right to portability",
        "Right to access"
      ],
      correctAnswer: [0, 1],
      explanation: "The GDPR right to erasure can require deletion of personal data in defined circumstances, while the right to rectification allows individuals to request correction of inaccurate information. Both rights can be difficult to implement when personal records are stored on an immutable blockchain. Data portability concerns receiving and transferring qualifying personal data, while access concerns obtaining information about processing; neither inherently requires changing or removing historical ledger entries.",
      reference: "GDPR Articles 16, 17, and 20 — Rectification, Erasure, and Portability"
    },
    {
      id: "q26",
      type: "true_false",
      question: "Cloud analytics reusing client data for advertising without consent breaches purpose limitation.",
      correctAnswer: true,
      explanation: "Purpose limitation requires personal information to be collected for specified, explicit, and legitimate purposes and not further processed in an incompatible manner. Reusing client information for advertising without appropriate authorization may violate this principle, especially when the original purpose did not include marketing. Consent is not the only possible legal basis in all circumstances, so whether consent is specifically required depends on the applicable law and processing activity.",
      reference: "GDPR Article 5(1)(b) — Purpose Limitation; Article 6 — Lawfulness"
    },
    {
      id: "q27",
      type: "multiple_choice",
      question: "Which technology creates tension with GDPR’s right to rectification due to immutability?",
      options: [
        "AI",
        "Blockchain",
        "IoT",
        "Cloud computing"
      ],
      correctAnswer: 1,
      explanation: "Blockchain records are often designed to be append-only and resistant to alteration. If inaccurate personal information is written directly to the ledger, the system may be unable to replace or remove it in the ordinary way. This can complicate GDPR Article 16, which provides the right to correction of inaccurate personal data. Off-chain storage and data minimization can help reduce this conflict.",
      reference: "GDPR Article 16 — Right to Rectification; Blockchain Technology"
    },
    {
      id: "q28",
      type: "multiple_select",
      question: "Which obligations are common across AI, IoT, and cloud systems?",
      options: [
        "Security safeguards",
        "Transparency",
        "Accountability",
        "Immutability"
      ],
      correctAnswer: [0, 1, 2],
      explanation: "Security safeguards protect systems and personal information against unauthorized access, modification, loss, and other threats. Transparency requires appropriate disclosure about relevant system operations and data practices. Accountability means organizations remain responsible for their decisions, processing activities, and compliance obligations. Immutability is a characteristic associated with certain technologies such as blockchain, not a universal obligation for AI, IoT, or cloud systems.",
      reference: "IT0204 Module 7 — Common Data Protection and Governance Obligations"
    },
    {
      id: "q29",
      type: "multiple_choice",
      question: "A company deploying AI to personalize pricing may risk violating:",
      options: [
        "Accuracy",
        "Fairness and discrimination protections",
        "Transparency",
        "Storage limitation"
      ],
      correctAnswer: 1,
      explanation: "AI-driven personalized pricing may rely on user profiles, behavioral patterns, or inferred characteristics. If the system charges systematically unfair prices based on protected characteristics or proxies for them, it can raise discrimination and consumer fairness concerns. Personalized pricing is not automatically unlawful, but organizations should assess whether the model creates unjustified differences in treatment and provide legally required transparency.",
      reference: "IT0204 Module 7 — Algorithmic Pricing, Fairness, and Discrimination"
    },
    {
      id: "q30",
      type: "multiple_choice",
      question: "IoT toys collecting children's voices without consent create risks under:",
      options: [
        "GDPR only",
        "COPPA and GDPR child privacy rules",
        "Blockchain immutability",
        "AI transparency"
      ],
      correctAnswer: 1,
      explanation: "Connected toys may process children's personal data, including audio recordings containing a child's voice. In the United States, COPPA imposes special notice and parental consent requirements on covered operators collecting personal information from children under 13, subject to applicable exceptions. Under GDPR, children's personal data receives special protection, including age-related rules when consent is used for information society services. Whether either law applies depends on the service, jurisdiction, and circumstances.",
      reference: "FTC — COPPA and Connected Toys; GDPR Article 8 — Children's Consent"
    }
  ]
});
