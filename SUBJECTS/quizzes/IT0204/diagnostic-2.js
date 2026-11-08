
window.PandoraQuizzes.register({
  id: "IT0204-M04-D02",
  subject: "IT0204",
  module: 4,
  title: "Diagnostic 2",
  kind: "practice",
  version: 1,
  description: "Diagnostic assessment covering incident response, breach notification, Philippine privacy laws, cybercrime regulations, and related concepts from Modules 1–4.",
  createdAt: "2026-11-07T01:00:00+08:00",
  showOnHome: true,

  questions: [
    {
      id: "q1",
      type: "multiple_choice",
      question: "Which breach case demonstrates the importance of encryption of sensitive fields like passport numbers?",
      options: ["Equifax", "Yahoo", "Marriott", "British Airways"],
      correctAnswer: 2,
      explanation: "The Marriott/Starwood breach exposed guest information, including passport numbers. The incident highlighted the need to protect sensitive stored information through encryption and other appropriate controls.",
      reference: "Module 3, High-Profile Data Breach Case Studies; Marriott/Starwood incident"
    },
    {
      id: "q2",
      type: "multiple_select",
      question: "Which of the following were highlighted as ETSI Security Incident Indicators?",
      options: ["Website Defacement", "Malware", "Hardware depreciation", "Phishing"],
      correctAnswer: [0, 1, 3],
      explanation: "Website defacement, malware, and phishing are listed as ETSI security incident indicators. Hardware depreciation is ordinary equipment aging, not an incident indicator of this type.",
      reference: "Module 3, pp. 22–24, ETSI Security Incident Indicators"
    },
    {
      id: "q3",
      type: "true_false",
      question: "A phishing email campaign should be classified as an intrusion in ETSI categories.",
      correctAnswer: false,
      explanation: "The module identifies phishing as a separate indicator involving fraudulent attempts to obtain sensitive information through impersonation. Intrusion refers to unauthorized access to a system or network.",
      reference: "Module 3, p. 22, ETSI Security Incident Indicators"
    },
    {
      id: "q4",
      type: "multiple_choice",
      question: "Which IRP step would involve reimaging systems and reinstalling clean applications?",
      options: ["Recovery", "Notification", "Identification", "Containment"],
      correctAnswer: 0,
      explanation: "Recovery restores systems to a trusted operational state. Reimaging and reinstalling clean applications help restore affected systems, although these activities can overlap with eradication.",
      reference: "Module 3, p. 9, Key Components of an Incident Response Plan"
    },
    {
      id: "q5",
      type: "multiple_choice",
      question: "After containment, which step involves ensuring malware remnants are fully removed?",
      options: ["Identification", "Eradication", "Preparation", "Lessons Learned"],
      correctAnswer: 1,
      explanation: "Eradication eliminates the incident's root cause and remaining threats, including malware, compromised accounts, and exploited vulnerabilities.",
      reference: "Module 3, p. 9, Eradication Phase"
    },
    {
      id: "q6",
      type: "true_false",
      question: "An organization using tabletop exercises to simulate attacks is engaging in proactive preparation.",
      correctAnswer: true,
      explanation: "Tabletop exercises allow response teams to rehearse procedures, clarify responsibilities, and identify weaknesses before a real incident occurs.",
      reference: "Module 3, pp. 8–9, Incident Response Preparation"
    },
    {
      id: "q7",
      type: "multiple_choice",
      question: "Which IRP stage involves communicating with external stakeholders, including DPAs and customers?",
      options: ["Recovery", "Containment", "Lessons Learned", "Notification/Communication"],
      correctAnswer: 3,
      explanation: "Notification and communication involve informing regulators, affected individuals, and other stakeholders when required. Communication responsibilities may operate across several incident response phases.",
      reference: "Module 3, pp. 14–15, Breach Notification Laws and Requirements"
    },
    {
      id: "q8",
      type: "multiple_choice",
      question: "If a hacker uses fake “Bank Login” emails to steal credentials, what ETSI indicator is this?",
      options: ["Intrusion", "Phishing", "Website Forgery", "DoS Attack"],
      correctAnswer: 1,
      explanation: "Phishing uses deceptive communications that impersonate trusted entities to obtain confidential information, including login credentials.",
      reference: "Module 3, p. 22, ETSI Phishing Indicator"
    },
    {
      id: "q9",
      type: "multiple_choice",
      question: "In the “Lessons Learned” phase, which action is most effective?",
      options: [
        "Delaying future training",
        "Reviewing logs and updating IRP policies",
        "Punishing IT staff only",
        "Ignoring the incident once resolved"
      ],
      correctAnswer: 1,
      explanation: "Lessons Learned examines evidence, response effectiveness, and process weaknesses. Findings should be used to revise policies, procedures, and future training.",
      reference: "Module 3, p. 9, Lessons Learned Phase"
    },
    {
      id: "q10",
      type: "multiple_choice",
      question: "Which breach case showed that acquisition due diligence should include cybersecurity checks?",
      options: ["Marriott", "Equifax", "British Airways", "Yahoo"],
      correctAnswer: 0,
      explanation: "The Marriott/Starwood incident demonstrated how risks inherited through an acquisition can persist when acquired systems and security controls are not sufficiently evaluated. Yahoo is also a notable acquisition-related breach case, making this question somewhat ambiguous.",
      reference: "Module 3, High-Profile Data Breach Case Studies; Marriott/Starwood incident"
    },
    {
      id: "q11",
      type: "true_false",
      question: "Under HIPAA, media outlets must be informed if a breach affects more than 500 people.",
      correctAnswer: true,
      explanation: "HIPAA requires prominent media notification for a breach of unsecured PHI affecting more than 500 residents of a single state or jurisdiction. The question simplifies this geographic and regulatory condition.",
      reference: "HIPAA Breach Notification Rule, 45 CFR §164.406; HHS"
    },
    {
      id: "q12",
      type: "true_false",
      question: "A company encrypts sensitive databases, so even if breached, it may not need to notify authorities under GDPR.",
      correctAnswer: true,
      explanation: "Under GDPR Article 33, supervisory authority notification is not required when a personal data breach is unlikely to result in a risk to individuals' rights and freedoms. Strong encryption may reduce that risk if the encryption keys remain secure, but encryption does not automatically remove reporting obligations.",
      reference: "Module 3, p. 15; GDPR Article 33"
    },
    {
      id: "q13",
      type: "multiple_choice",
      question: "A hospital's database is breached, exposing patient medical records. Which initial step in the Incident Response Plan (IRP) must be taken first?",
      options: [
        "Eradicate the malware before identifying it",
        "Identify and analyze the breach source",
        "Notify the public immediately",
        "Restore data from backup"
      ],
      correctAnswer: 1,
      explanation: "The identification phase detects and analyzes the security incident, establishes its scope, and helps determine appropriate containment and recovery actions.",
      reference: "Module 3, p. 9, Identification Phase"
    },
    {
      id: "q14",
      type: "multiple_select",
      question: "Which factors determine whether a breach must be reported?",
      options: [
        "Sensitivity of data exposed",
        "Likelihood of harm",
        "Number of individuals affected",
        "Company's profit margin"
      ],
      correctAnswer: [0, 1, 2],
      explanation: "Notification requirements depend on the applicable law and may consider the sensitivity of exposed information, likelihood of harm, and number of affected people. Company profit margin does not determine whether an incident is reportable.",
      reference: "Module 3, pp. 14–16, Breach Notification Requirements; GDPR Article 33; HIPAA Breach Notification Rule"
    },
    {
      id: "q15",
      type: "true_false",
      question: "A bank notifies customers within 24 hours of detecting unauthorized ATM withdrawals. This demonstrates strong compliance with incident response.",
      correctAnswer: true,
      explanation: "Prompt, accurate communication can help customers protect their accounts and supports effective incident response. Full legal compliance still depends on the applicable banking and notification requirements.",
      reference: "Module 3, pp. 11 and 14–15, Incident Response and Notification"
    },
    {
      id: "q16",
      type: "multiple_choice",
      question: "Which of the following penalties was imposed on Equifax for its delayed breach notification?",
      options: [
        "Up to $700 million settlement",
        "No fine but reputational damage only",
        "Lifetime suspension of services",
        "$50 million settlement"
      ],
      correctAnswer: 0,
      explanation: "Equifax agreed in 2019 to a settlement of at least $575 million and potentially up to $700 million following its 2017 breach. The settlement addressed alleged failures to secure consumer information and was not solely a penalty for delayed notification.",
      reference: "Module 3, Equifax Data Breach (2017); FTC, Equifax Settlement (2019)"
    },
    {
      id: "q17",
      type: "multiple_choice",
      question: "Which Philippine regulation obliges companies to submit a breach notification within 72 hours?",
      options: ["CCPA", "DPA 2012", "GDPR", "HIPAA"],
      correctAnswer: 1,
      explanation: "The Philippine Data Privacy Act framework, implemented through NPC breach notification rules, requires notification within 72 hours for breaches meeting mandatory notification criteria. The deadline does not apply indiscriminately to every security incident.",
      reference: "Module 2, p. 25; Module 4, p. 26; RA 10173 and NPC Circular 16-03"
    },
    {
      id: "q18",
      type: "multiple_choice",
      question: "Which IRP phase ensures continuity of critical operations while incidents are addressed?",
      options: ["Lessons Learned", "Eradication", "Recovery", "Containment"],
      correctAnswer: 3,
      explanation: "Containment limits the incident's spread and impact while protecting unaffected systems and critical operations. Recovery subsequently restores affected services.",
      reference: "Module 3, p. 9, Containment Phase"
    },
    {
      id: "q19",
      type: "true_false",
      question: "A hospital ransomware attack encrypted patient files, but the hospital refused to notify regulators because backups restored data. This action is compliant with HIPAA.",
      correctAnswer: false,
      explanation: "Restoring backups does not automatically remove HIPAA notification duties. The organization must assess whether unsecured PHI was breached and whether notification is required under the Breach Notification Rule.",
      reference: "HIPAA Breach Notification Rule, 45 CFR §§164.400–414; HHS"
    },
    {
      id: "q20",
      type: "multiple_select",
      question: "Which laws mandate breach notification obligations?",
      options: [
        "HIPAA",
        "PCI DSS (industry standard, not law)",
        "GDPR",
        "Philippine DPA 2012"
      ],
      correctAnswer: [0, 2, 3],
      explanation: "HIPAA, GDPR, and the Philippine DPA framework establish legal breach notification requirements under specified conditions. PCI DSS is an industry security standard, not a statute, although it also imposes incident-related contractual requirements.",
      reference: "Module 3, pp. 14–16; HIPAA Breach Notification Rule; GDPR Article 33; RA 10173"
    },
    {
      id: "q21",
      type: "multiple_choice",
      question: "A company tests its breach notification procedures by running a simulation. This falls under which IRP phase?",
      options: ["Recovery", "Containment", "Preparation", "Identification"],
      correctAnswer: 2,
      explanation: "Preparation involves developing and testing response procedures before incidents occur. Simulations help evaluate readiness and identify communication weaknesses.",
      reference: "Module 3, pp. 8–9, Preparation Phase"
    },
    {
      id: "q22",
      type: "multiple_choice",
      question: "If hackers replace a company website with political propaganda, what ETSI indicator is this?",
      options: ["Intrusion", "Phishing", "Spam", "Website Defacement"],
      correctAnswer: 3,
      explanation: "Website defacement is the unauthorized modification or replacement of website content, often to display political statements or other messages.",
      reference: "Module 3, p. 23, ETSI Website Defacement Indicator"
    },
    {
      id: "q23",
      type: "multiple_choice",
      question: "Which body oversees breach notifications under GDPR?",
      options: [
        "Department of Justice",
        "Data Protection Authorities (DPAs)",
        "Philippine NPC",
        "U.S. Federal Trade Commission"
      ],
      correctAnswer: 1,
      explanation: "Competent EU supervisory authorities, commonly called Data Protection Authorities, receive and oversee GDPR breach notifications.",
      reference: "Module 2, pp. 29–32; Module 3, Breach Notification; GDPR Articles 33 and 51–58"
    },
    {
      id: "q24",
      type: "multiple_select",
      question: "Which best practices apply during the Lessons Learned phase?",
      options: [
        "Delete incident records",
        "Analyze logs and response effectiveness",
        "Update security policies",
        "Revise training programs"
      ],
      correctAnswer: [1, 2, 3],
      explanation: "Post-incident review involves examining incident evidence, evaluating response performance, updating security policies, and improving workforce training. Deleting evidence is not a best practice.",
      reference: "Module 3, p. 9, Lessons Learned Phase"
    },
    {
      id: "q25",
      type: "true_false",
      question: "GDPR requires that breach notifications include details about mitigation efforts.",
      correctAnswer: true,
      explanation: "GDPR Article 33 requires notification to describe measures taken or proposed to address the breach, including measures to mitigate possible adverse effects where appropriate.",
      reference: "Module 3, p. 15; GDPR Article 33(3)(d)"
    },
    {
      id: "q26",
      type: "multiple_choice",
      question: "Which case taught the importance of vendor and acquisition risk management?",
      options: ["British Airways", "Marriott", "Equifax", "Yahoo"],
      correctAnswer: 1,
      explanation: "Marriott's acquisition of Starwood highlighted the need to examine inherited systems, vendor relationships, and security risks during acquisitions. Yahoo also illustrates acquisition risk, but Marriott is the module-based intended example.",
      reference: "Module 3, High-Profile Data Breach Case Studies"
    },
    {
      id: "q27",
      type: "multiple_choice",
      question: "Which breach showed failure to secure passport data during hotel bookings?",
      options: ["Equifax", "British Airways", "Yahoo", "Marriott"],
      correctAnswer: 3,
      explanation: "The Marriott/Starwood breach involved guest reservation information and passport numbers, showing the importance of protecting sensitive hospitality records.",
      reference: "Module 3, Marriott Data Breach Case Study"
    },
    {
      id: "q28",
      type: "multiple_choice",
      question: "In HIPAA, who must be notified if over 500 individuals' PHI is exposed?",
      options: [
        "Only patients",
        "Only regulators",
        "Patients, HHS, and media",
        "Only the IT department"
      ],
      correctAnswer: 2,
      explanation: "For qualifying breaches of unsecured PHI, HIPAA requires affected individual and HHS notification. Media notification additionally applies when more than 500 residents of a state or jurisdiction are affected.",
      reference: "HIPAA Breach Notification Rule, 45 CFR §§164.404–408; HHS"
    },
    {
      id: "q29",
      type: "multiple_choice",
      question: "What is the most important factor in successful breach notifications?",
      options: [
        "Delay until impact is minimized",
        "Excluding technical details",
        "Timeliness and accuracy of disclosure",
        "Blaming third parties"
      ],
      correctAnswer: 2,
      explanation: "Timely and accurate reporting helps regulators and affected individuals respond appropriately to an incident and reduce potential harm.",
      reference: "Module 3, pp. 14–16, Breach Notification Laws and Requirements"
    },
    {
      id: "q30",
      type: "multiple_choice",
      question: "Which phase ensures systems are fully functional and secure before going back online?",
      options: ["Containment", "Preparation", "Recovery", "Identification"],
      correctAnswer: 2,
      explanation: "Recovery restores systems and validates that they operate correctly and securely before returning to normal service.",
      reference: "Module 3, p. 9, Recovery Phase"
    },
    {
      id: "q31",
      type: "multiple_choice",
      question: "Which is an example of negligent access?",
      options: [
        "An authorized auditor reviewing logs",
        "An employee leaving a laptop with personal data unattended",
        "A person deleting their own files",
        "A hacker stealing passwords"
      ],
      correctAnswer: 1,
      explanation: "Leaving a device containing personal data unattended can expose information through inadequate security precautions. The module uses a similar example for negligent access under RA 10173 Section 26.",
      reference: "Module 4, p. 21, Negligent Access to Personal Information"
    },
    {
      id: "q32",
      type: "multiple_select",
      question: "Which rights are transmissible to heirs under RA 10173?",
      options: [
        "Right to access",
        "Right to citizenship",
        "Right to erasure",
        "Right to rectification"
      ],
      correctAnswer: [0, 2, 3],
      explanation: "RA 10173 Section 17 allows lawful heirs and assigns to invoke applicable data subject rights, including access, rectification, and removal or erasure. Citizenship is not a data subject right.",
      reference: "Module 4, p. 12; RA 10173 Sections 16–17"
    },
    {
      id: "q33",
      type: "multiple_choice",
      question: "Which agency supervises the Government Web Hosting Service mandated by A.O. 39?",
      options: ["DOST-ICTO (now DICT)", "DOJ", "IPOPHL", "NPC"],
      correctAnswer: 0,
      explanation: "Administrative Order No. 39 assigned the Government Web Hosting Service initiative to the Information and Communications Technology Office, whose functions were subsequently incorporated into DICT.",
      reference: "Module 4, Philippine Cybersecurity Policies; Administrative Order No. 39, s. 2013; RA 10844"
    },
    {
      id: "q34",
      type: "multiple_choice",
      question: "Which right allows a person to demand deletion of their personal data?",
      options: [
        "Right to erasure (Right to be forgotten)",
        "Right to portability",
        "Right to access",
        "Right to rectify"
      ],
      correctAnswer: 0,
      explanation: "The right to erasure or blocking allows individuals to request removal of personal information when applicable legal conditions are met.",
      reference: "Module 4, pp. 11–12; RA 10173 Section 16"
    },
    {
      id: "q35",
      type: "true_false",
      question: "A company obtains valid consent to collect customer emails but later sells them to marketers without permission. This is lawful under RA 10173.",
      correctAnswer: false,
      explanation: "Consent for collection does not automatically authorize later sale for unrelated marketing purposes. Processing must satisfy transparency, legitimate purpose, and an applicable lawful basis.",
      reference: "Module 4, p. 10; RA 10173 Sections 11–12"
    },
    {
      id: "q36",
      type: "multiple_select",
      question: "Which agencies are involved in cybercrime enforcement in the Philippines?",
      options: [
        "NBI Cybercrime Division",
        "Bureau of Immigration",
        "PNP Anti-Cybercrime Group",
        "DOJ – Office of Cybercrime"
      ],
      correctAnswer: [0, 2, 3],
      explanation: "The NBI, PNP Anti-Cybercrime Group, and DOJ Office of Cybercrime perform investigation, coordination, or prosecutorial functions under the Philippine cybercrime framework.",
      reference: "Module 4, Cybercrime Enforcement Agencies; RA 10175"
    },
    {
      id: "q37",
      type: "multiple_choice",
      question: "RA 8792 grants legal recognition to:",
      options: [
        "Verbal agreements only",
        "Electronic contracts and digital signatures",
        "Telephone conversations",
        "Printed contracts only"
      ],
      correctAnswer: 1,
      explanation: "The Electronic Commerce Act of 2000 recognizes electronic documents, electronic contracts, and electronic signatures subject to statutory requirements.",
      reference: "Module 4, Philippine Cybersecurity Laws; RA 8792"
    },
    {
      id: "q38",
      type: "multiple_choice",
      question: "Which of the following is an example of unlawful processing of personal information?",
      options: [
        "Deleting expired files",
        "A company selling email addresses without consent",
        "Encrypting stored medical records",
        "A customer sharing their password voluntarily"
      ],
      correctAnswer: 1,
      explanation: "Selling personal information without an appropriate lawful basis may constitute unauthorized processing and breach the Data Privacy Act's transparency and legitimate-purpose requirements.",
      reference: "Module 4, pp. 20–22; RA 10173 Sections 11–12 and 25"
    },
    {
      id: "q39",
      type: "multiple_select",
      question: "Which of the following are general data privacy principles under RA 10173?",
      options: [
        "Proportionality",
        "Transparency",
        "Legitimate purpose",
        "Profitability"
      ],
      correctAnswer: [0, 1, 2],
      explanation: "RA 10173 Section 11 establishes transparency, legitimate purpose, and proportionality as general data privacy principles. Profitability is not one of them.",
      reference: "Module 4, pp. 10 and 16; RA 10173 Section 11"
    },
    {
      id: "q40",
      type: "true_false",
      question: "An employee leaks a co-worker's medical record on social media out of spite. This is malicious disclosure under RA 10173.",
      correctAnswer: true,
      explanation: "Deliberately disclosing confidential medical information out of malice can fall within the malicious disclosure provisions of RA 10173, subject to the statutory elements being met.",
      reference: "Module 4, p. 23; RA 10173 Section 31"
    },
    {
      id: "q41",
      type: "true_false",
      question: "A group hacks government websites to protest against a law. This is punishable under RA 10175.",
      correctAnswer: true,
      explanation: "Political protest does not authorize illegal access or interference with computer systems. Such conduct can constitute offenses under the Cybercrime Prevention Act.",
      reference: "Module 4, Philippine Cybercrime Laws; RA 10175 Section 4"
    },
    {
      id: "q42",
      type: "multiple_choice",
      question: "Which type of data requires stricter protection under RA 10173?",
      options: [
        "Website cookies",
        "Employee ID number",
        "Sensitive personal information",
        "Publicly posted contact details"
      ],
      correctAnswer: 2,
      explanation: "Sensitive personal information, including certain health, religious, and other legally protected categories, is subject to stricter processing conditions under RA 10173.",
      reference: "Module 4, p. 10; RA 10173 Sections 3 and 13"
    },
    {
      id: "q43",
      type: "multiple_choice",
      question: "The COMELEC 2016 data breach exposed how many voters' personal data?",
      options: ["100 million", "25 million", "55 million", "5 million"],
      correctAnswer: 2,
      explanation: "The module-based intended figure is approximately 55 million voter records associated with the 2016 Comeleak incident. Published estimates vary depending on whether counting registered voters, database records, or other exposed datasets.",
      reference: "Module 4, COMELEC 2016 Data Breach Case Study"
    },
    {
      id: "q44",
      type: "multiple_choice",
      question: "Which law established a national Public Key Infrastructure (PKI)?",
      options: ["E.O. 810", "RA 8293", "RA 4200", "A.O. 39"],
      correctAnswer: 0,
      explanation: "Executive Order No. 810 institutionalized a government digital-signature certification system and related public key infrastructure arrangements.",
      reference: "Module 4, Philippine Cybersecurity Policies; Executive Order No. 810, s. 2009"
    },
    {
      id: "q45",
      type: "multiple_choice",
      question: "RA 9995 prohibits:",
      options: [
        "Fraudulent online sales",
        "Unauthorized recording and distribution of intimate videos",
        "Plagiarizing software",
        "Hacking government servers"
      ],
      correctAnswer: 1,
      explanation: "The Anti-Photo and Video Voyeurism Act prohibits specified nonconsensual recording, reproduction, and distribution of intimate images or videos.",
      reference: "Module 4, Philippine Cybersecurity-Related Laws; RA 9995"
    },
    {
      id: "q46",
      type: "multiple_choice",
      question: "Which Philippine agency investigates cybercrime complaints?",
      options: [
        "IPOPHL",
        "PNP Anti-Cybercrime Group (PNP-ACG)",
        "NPC",
        "BSP"
      ],
      correctAnswer: 1,
      explanation: "The PNP Anti-Cybercrime Group investigates cybercrime complaints and conducts law enforcement operations involving cyber-enabled offenses.",
      reference: "Module 4, Cybercrime Enforcement; RA 10175"
    },
    {
      id: "q47",
      type: "multiple_choice",
      question: "Which law prohibits unauthorized interception of communications?",
      options: ["RA 8293", "RA 4200", "RA 10175", "RA 9995"],
      correctAnswer: 1,
      explanation: "RA 4200, the Anti-Wiretapping Act, prohibits specified unauthorized interception or secret recording of private communications. RA 10175 also criminalizes illegal interception of nonpublic computer-data transmissions, so the wording is not fully exclusive.",
      reference: "Module 4, Philippine Cybersecurity-Related Laws; RA 4200 Section 1; RA 10175 Section 4(a)(2)"
    },
    {
      id: "q48",
      type: "multiple_choice",
      question: "Which laws are directly related to intellectual property and copyright?",
      options: [
        "RA 9995 – Anti-Voyeurism Act",
        "RA 4200 – Anti-Wiretapping Act",
        "RA 10175 – Cybercrime Prevention Act (IP-related offenses)",
        "RA 8293 – Intellectual Property Code"
      ],
      correctAnswer: 3,
      explanation: "RA 8293 is the Intellectual Property Code of the Philippines and directly governs copyright and other intellectual property rights. RA 10175 primarily addresses cybercrime rather than establishing the general copyright framework.",
      reference: "Module 4, Philippine Cybersecurity-Related Laws; RA 8293"
    },
    {
      id: "q49",
      type: "multiple_choice",
      question: "Which case involved hackers attempting to steal millions from a bank in 2016?",
      options: [
        "COMELEC “Comeleak”",
        "PNB vs. Hackers",
        "People vs. Sy",
        "DFA breach"
      ],
      correctAnswer: 1,
      explanation: "PROVISIONAL KEY: PNB vs. Hackers is the closest intended banking-related option, but it is not a verified identification of the historical incident. The well-documented 2016 attempted theft of nearly US$1 billion was the Bangladesh Bank SWIFT heist, with funds routed through RCBC in the Philippines. None of the four supplied choices correctly names that incident. This question should be treated as disputed.",
      reference: "Module 1, p. 15, Bangladesh Bank Heist (2016); external historical reporting"
    },
    {
      id: "q50",
      type: "multiple_choice",
      question: "Who is responsible for protecting sensitive personal information in government custody?",
      options: [
        "Congress",
        "Any private contractor",
        "Heads of government agencies",
        "NPC"
      ],
      correctAnswer: 2,
      explanation: "Under RA 10173 Section 22, heads of government agencies are responsible for securing sensitive personal information maintained by their agencies.",
      reference: "Module 4, p. 18; RA 10173 Section 22"
    },
    {
      id: "q51",
      type: "true_false",
      question: "A hospital requires its contractors to comply with the same privacy standards it follows. This aligns with RA 10173.",
      correctAnswer: true,
      explanation: "RA 10173 requires personal information controllers to maintain accountability when data processing is outsourced and to ensure that processors apply appropriate protection.",
      reference: "Module 4, pp. 10 and 14; RA 10173 Sections 14 and 21"
    },
    {
      id: "q52",
      type: "true_false",
      question: "A person hacks into a bank's system to steal client information. This is punishable as illegal access under RA 10175.",
      correctAnswer: true,
      explanation: "Accessing a computer system without the required authorization constitutes illegal access under the Cybercrime Prevention Act, subject to applicable legal elements.",
      reference: "Module 4, Cybercrime Prevention Act; RA 10175 Section 4(a)(1)"
    },
    {
      id: "q53",
      type: "multiple_choice",
      question: "RA 8792 primarily regulates:",
      options: [
        "Land ownership",
        "Patent disputes",
        "Electronic transactions and digital signatures",
        "Banking interest rates"
      ],
      correctAnswer: 2,
      explanation: "RA 8792, the Electronic Commerce Act, provides legal recognition for electronic documents, electronic signatures, and commercial transactions carried out electronically.",
      reference: "Module 4, Philippine Cybersecurity-Related Laws; RA 8792"
    },
    {
      id: "q54",
      type: "multiple_choice",
      question: "Which law mandated the use of digital signatures in government transactions?",
      options: ["RA 8792", "E.O. 810", "M.O. 37", "A.O. 39"],
      correctAnswer: 1,
      explanation: "Executive Order No. 810 promoted and institutionalized digital-signature certification for government electronic transactions. RA 8792 provides the broader statutory recognition of electronic signatures.",
      reference: "Module 4, Philippine Cybersecurity Policies; Executive Order No. 810, s. 2009"
    },
    {
      id: "q55",
      type: "multiple_choice",
      question: "Which is NOT a right of the data subject?",
      options: [
        "Right to own government databases",
        "Right to be informed",
        "Right to access",
        "Right to object"
      ],
      correctAnswer: 0,
      explanation: "RA 10173 recognizes rights such as being informed, access, objection, and rectification. It does not grant individuals ownership of government databases.",
      reference: "Module 4, pp. 11–12; RA 10173 Section 16"
    },
    {
      id: "q56",
      type: "multiple_choice",
      question: "What penalty did the ILOVEYOU virus author face under Philippine law?",
      options: [
        "None, because no cybercrime law existed then",
        "₱5 million fine",
        "20 years imprisonment",
        "Deportation"
      ],
      correctAnswer: 0,
      explanation: "The ILOVEYOU worm emerged in May 2000, before the Philippines enacted RA 8792 and RA 10175. The criminal case did not result in conviction under an applicable computer-crime statute at that time.",
      reference: "Module 1, p. 13, Love-Letter-For-You.TXT.vbs"
    },
    {
      id: "q57",
      type: "multiple_choice",
      question: "Which law criminalizes unauthorized recording of private telephone conversations?",
      options: ["RA 8792", "RA 8293", "RA 9995", "RA 4200"],
      correctAnswer: 3,
      explanation: "RA 4200, the Anti-Wiretapping Act, restricts secret recording or interception of private communications without the consent required by law.",
      reference: "Module 4, Philippine Cybersecurity-Related Laws; RA 4200"
    },
    {
      id: "q58",
      type: "true_false",
      question: "An individual posts intimate videos of an ex-partner online without consent. This violates RA 9995.",
      correctAnswer: true,
      explanation: "RA 9995 prohibits unauthorized distribution or publication of intimate recordings in circumstances covered by the Anti-Photo and Video Voyeurism Act. Prior permission to record does not automatically authorize publication.",
      reference: "Module 4, Philippine Cybersecurity-Related Laws; RA 9995"
    },
    {
      id: "q59",
      type: "multiple_choice",
      question: "Which is an example of a cross-border compliance challenge?",
      options: [
        "Deleting expired records",
        "Hiring a local DPO",
        "Transferring Filipino personal data to servers abroad",
        "Encrypting internal files"
      ],
      correctAnswer: 2,
      explanation: "Moving Filipino personal data to foreign servers raises questions of jurisdiction, accountability, processor security, and compliance with applicable cross-border data protection obligations.",
      reference: "Module 2, pp. 35–38, Cross-Border Data Transfer; RA 10173 Section 21"
    },
    {
      id: "q60",
      type: "true_false",
      question: "A news outlet publishes the grades of students with names without consent. This is an authorized disclosure under RA 10173.",
      correctAnswer: false,
      explanation: "Publishing identifiable student grades without consent or another valid legal basis can amount to unauthorized disclosure. News reporting may involve statutory and constitutional exceptions, but publication is not automatically authorized.",
      reference: "Module 4, p. 23; RA 10173 Sections 12 and 32"
    }
  ]
});
