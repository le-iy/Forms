
window.PandoraQuizzes.register({
  id: "IT0204-M08-F08",
  subject: "IT0204",
  module: 8,
  title: "Formative Assessment 8",
  kind: "formative",
  version: 1,
  description: "30-item assessment covering Philippine cybercrime, dark web threats, cybercrime laws, financial cybersecurity compliance, fintech security, and critical infrastructure protection.",
  createdAt: "2026-11-27T19:17:00+08:00",
  showOnHome: true,
  questions: [
    {
      id: "q1",
      type: "true_false",
      question: "The dark web's anonymity makes tracking Philippine digital drug trade more difficult.",
      correctAnswer: true,
      explanation: "Dark web services can conceal the locations and identities of sellers and buyers through anonymity networks. Combined with pseudonymous accounts, cryptocurrency transactions, and encrypted communications, this can make identifying and tracing digital drug-trafficking operations more difficult. Anonymity is not absolute, however, and investigators can still use transaction analysis, undercover operations, and digital evidence.",
      reference: "IT0204 Module 8 — Dark Web and Cybercrime Investigation"
    },
    {
      id: "q2",
      type: "multiple_choice",
      question: "The Philippine government launches the National Cybersecurity Plan 2022 to address:",
      options: [
        "Piracy and plagiarism",
        "Resilience against cybercrime and critical infrastructure protection",
        "Internet pricing issues",
        "Mobile gaming regulation"
      ],
      correctAnswer: 1,
      explanation: "The Philippine National Cybersecurity Plan 2022 aimed to strengthen national cybersecurity capabilities, protect critical information infrastructure, improve cyber resilience, and promote coordinated responses to cyber threats. Its central purpose was not regulating internet prices or mobile games.",
      reference: "DICT — National Cybersecurity Plan 2022"
    },
    {
      id: "q3",
      type: "multiple_choice",
      question: "A government agency discovers spyware installed on its servers by unknown actors. Which category of cybercrime does this fall under?",
      options: [
        "Piracy",
        "Cyber espionage",
        "Cybersex",
        "Data portability breach"
      ],
      correctAnswer: 1,
      explanation: "Cyber espionage involves secretly accessing systems, communications, or information for intelligence gathering. Spyware installed without authorization on government servers may monitor activities or extract confidential information. Piracy concerns unauthorized copying or distribution, while data portability relates to data subject rights.",
      reference: "IT0204 Module 8 — Cyber Espionage and Spyware"
    },
    {
      id: "q4",
      type: "multiple_select",
      question: "Which frameworks regulate financial cybersecurity in the Philippines?",
      options: [
        "BSP circulars",
        "PCI DSS",
        "RA 10173",
        "HIPAA"
      ],
      correctAnswer: [0, 1, 2],
      explanation: "BSP circulars establish binding regulatory expectations for institutions supervised by the Bangko Sentral ng Pilipinas, including technology risk management and information security controls. PCI DSS is an industry security standard applicable to organizations handling payment card data under payment network requirements; it is not itself a Philippine law. RA 10173, the Data Privacy Act of 2012, establishes obligations concerning personal information processing and security. HIPAA concerns U.S. healthcare information and is not a general Philippine financial-sector cybersecurity framework.",
      reference: "BSP Circular No. 982; PCI DSS; RA 10173 — Data Privacy Act of 2012"
    },
    {
      id: "q5",
      type: "multiple_choice",
      question: "The Bangko Sentral ng Pilipinas requires e-wallets to adopt risk management policies. This ensures:",
      options: [
        "Portability",
        "Financial stability and customer protection",
        "Transparency only",
        "Unlimited data retention"
      ],
      correctAnswer: 1,
      explanation: "Risk management policies help financial service providers identify, assess, and control operational, technology, fraud, and cybersecurity risks. These controls support safer financial operations, institutional resilience, and customer protection. They do not authorize unlimited retention of customer data.",
      reference: "BSP — Technology Risk Management and Consumer Protection"
    },
    {
      id: "q6",
      type: "multiple_choice",
      question: "A group uses IoT devices in hotels for illegal surveillance linked to cybersex operations. Which key risk arises?",
      options: [
        "Portability",
        "Privacy invasion and exploitation",
        "Accuracy",
        "Transparency"
      ],
      correctAnswer: 1,
      explanation: "Compromised or concealed Internet of Things devices can be used for unauthorized recording and surveillance. When used for sexual exploitation, the activity threatens individuals' privacy, dignity, and safety. Data portability and accuracy do not describe the principal harm in this scenario.",
      reference: "IT0204 Module 8 — IoT Misuse, Surveillance, and Online Exploitation"
    },
    {
      id: "q7",
      type: "multiple_choice",
      question: "A Philippine fintech firm fails to maintain logs of suspicious transactions. This undermines:",
      options: [
        "Transparency",
        "AML compliance requirements",
        "Data portability",
        "Copyright protection"
      ],
      correctAnswer: 1,
      explanation: "Anti-Money Laundering compliance requires covered institutions to maintain appropriate transaction records and implement monitoring and reporting measures for suspicious activities. Missing records or audit trails can prevent effective investigation, suspicious transaction reporting, and regulatory examination. These obligations help detect money laundering and related financial crime.",
      reference: "RA 9160, as amended — Anti-Money Laundering Act; AMLC Compliance Requirements"
    },
    {
      id: "q8",
      type: "multiple_choice",
      question: "The Philippines experiences a surge in “sextortion” scams targeting OFWs. Which two cybercrime offenses are most involved?",
      options: [
        "Cyber-libel and cyber-squatting",
        "Cybersex and identity theft",
        "Wiretapping and piracy",
        "Cyberbullying and forgery"
      ],
      correctAnswer: 1,
      explanation: "The intended answer connects sexual exploitation or coercion online with identity misuse, impersonation, or stolen personal information. Sextortion involves threatening to reveal intimate material to obtain money or other demands. Not every sextortion case legally constitutes cybersex or identity theft; the precise offenses depend on how the perpetrator obtained the material and carried out the threats. Among the given choices, cybersex and identity theft best match the scenario's intended themes.",
      reference: "IT0204 Module 8 — Sextortion, Online Exploitation, and Identity Theft; RA 10175"
    },
    {
      id: "q9",
      type: "true_false",
      question: "A Philippine fintech company storing unencrypted credit card data is still compliant with PCI DSS standards.",
      correctAnswer: false,
      explanation: "PCI DSS requires appropriate protection of stored account data, especially primary account numbers. Strong cryptography is one permitted method, but other approved protections such as tokenization or truncation may also apply depending on the data and use case. Storing sensitive payment information without required protection would violate PCI DSS. Compliance cannot be established simply by storing card data without encryption.",
      reference: "PCI DSS — Protect Stored Account Data"
    },
    {
      id: "q10",
      type: "multiple_select",
      question: "Which cybersecurity threats are common in fintech operations?",
      options: [
        "Phishing and social engineering",
        "Ransomware",
        "Insider fraud",
        "Piracy"
      ],
      correctAnswer: [0, 1, 2],
      explanation: "Phishing and social engineering manipulate employees or customers into revealing credentials, authorizing fraudulent transactions, or installing malware. Ransomware can encrypt systems and disrupt financial services. Insider fraud involves trusted individuals misusing their access to steal funds or information. Piracy concerns unauthorized reproduction or distribution of protected works and is not one of the main fintech cybersecurity threats intended in this question.",
      reference: "IT0204 Module 8 — Fintech Cybersecurity Threats"
    },
    {
      id: "q11",
      type: "multiple_choice",
      question: "A cybercrime syndicate offers “digital drugs” that exploit audio-visual stimulation. Which concern arises?",
      options: [
        "Blockchain regulation",
        "Wiretapping rules",
        "Cultural and health implications of online exploitation",
        "PCI DSS"
      ],
      correctAnswer: 2,
      explanation: "The scenario raises concerns about how potentially manipulative or exploitative digital experiences may affect users' behavior, well-being, and social environment. Claims about so-called digital drugs should not automatically be treated as scientifically established drug-like effects. The intended issue is their possible cultural and health implications, rather than payment card compliance or wiretapping.",
      reference: "IT0204 Module 8 — Digital Drugs and Cybercrime-Related Social Concerns"
    },
    {
      id: "q12",
      type: "multiple_choice",
      question: "A Philippine fintech firm repeatedly fails security audits. Which long-term consequence may arise?",
      options: [
        "Enhanced reputation",
        "Increased public trust",
        "Loss of regulatory license and penalties",
        "Stronger cross-border cooperation"
      ],
      correctAnswer: 2,
      explanation: "Repeated security and regulatory compliance failures can expose a financial institution to supervisory action, monetary penalties, restrictions, or possible loss of authorization, depending on the violations and regulatory procedures. Such failures also damage customer confidence rather than automatically improving reputation.",
      reference: "BSP — Supervision, Information Security Compliance, and Regulatory Enforcement"
    },
    {
      id: "q13",
      type: "true_false",
      question: "RA 10175 criminalizes both hacking and phishing activities.",
      correctAnswer: true,
      explanation: "RA 10175, the Cybercrime Prevention Act of 2012, penalizes offenses including illegal access, illegal interception, computer-related identity theft, and computer-related fraud. Unauthorized hacking can qualify as illegal access. Phishing can fall under relevant fraud or identity-related offenses depending on the specific conduct; the statute does not make every message labeled phishing a separate standalone offense.",
      reference: "RA 10175 — Cybercrime Prevention Act of 2012"
    },
    {
      id: "q14",
      type: "multiple_choice",
      question: "A Manila-based syndicate recruits minors through chat apps for cybersex operations. Which international challenge complicates prosecution?",
      options: [
        "Intellectual property enforcement",
        "Jurisdictional and cross-border legal cooperation",
        "Data portability enforcement",
        "AI transparency"
      ],
      correctAnswer: 1,
      explanation: "Online exploitation may involve victims, perpetrators, servers, payment services, and evidence located in different countries. Investigators must navigate jurisdiction, evidence preservation, information sharing, and international law enforcement cooperation. These issues become especially important where child sexual exploitation is involved.",
      reference: "IT0204 Module 8 — Cross-Border Cybercrime Investigation; RA 11930"
    },
    {
      id: "q15",
      type: "multiple_select",
      question: "Which elements of the CIA triad are often targeted in ransomware attacks?",
      options: [
        "Integrity",
        "Availability",
        "Portability",
        "Transparency"
      ],
      correctAnswer: [0, 1],
      explanation: "Ransomware can undermine integrity by modifying or encrypting information without authorization. It also undermines availability when users and organizations lose access to systems or files. Some ransomware attacks threaten confidentiality through data theft, although that option is not listed here. Portability and transparency are not members of the CIA triad, which consists of Confidentiality, Integrity, and Availability.",
      reference: "IT0204 Module 8 — CIA Triad and Ransomware"
    },
    {
      id: "q16",
      type: "true_false",
      question: "Phishing attacks in the Philippines often succeed due to weak digital literacy among users.",
      correctAnswer: true,
      explanation: "Limited awareness of phishing techniques can make users more vulnerable to deceptive messages, fraudulent websites, malicious links, and credential harvesting. Cybersecurity education can reduce risk by teaching users how to verify senders, inspect links, protect authentication credentials, and report suspicious activity. Phishing can also succeed against well-trained individuals, so education should be combined with technical protections.",
      reference: "IT0204 Module 8 — Social Engineering and Cybersecurity Awareness"
    },
    {
      id: "q17",
      type: "multiple_choice",
      question: "A barangay resident reports being blackmailed online with private photos. Which law offers protection?",
      options: [
        "RA 8293",
        "RA 9995 (Anti-Photo and Video Voyeurism Act)",
        "RA 8792",
        "RA 4200"
      ],
      correctAnswer: 1,
      explanation: "RA 9995 addresses unlawful capture and certain sharing or distribution of intimate photos or videos without the required consent, under the circumstances defined by the law. It is the intended protection among the given choices for image-based sexual exploitation. However, not every private-photo blackmail case automatically falls under RA 9995: the images and conduct must meet the law's elements. Other laws may apply to threats, extortion, harassment, or related cybercrime.",
      reference: "RA 9995 — Anti-Photo and Video Voyeurism Act of 2009"
    },
    {
      id: "q18",
      type: "true_false",
      question: "Wiretapping laws in the Philippines cover online surveillance without consent.",
      correctAnswer: true,
      explanation: "Philippine laws protect against specified forms of unauthorized interception and recording of private communications. RA 4200 addresses prohibited wiretapping and secret recording of private communications, while RA 10175 also penalizes unlawful interception of nonpublic computer data transmissions. Whether an online surveillance activity violates a particular law depends on the technology, communication involved, legal authorization, and statutory requirements.",
      reference: "RA 4200 — Anti-Wiretapping Act; RA 10175 — Illegal Interception"
    },
    {
      id: "q19",
      type: "multiple_choice",
      question: "Which factor worsens law enforcement’s ability to combat cybercrime in the Philippines?",
      options: [
        "Excess funding for cyber units",
        "Excessively strict laws",
        "Lack of trained personnel and technical capacity",
        "Strong international cooperation"
      ],
      correctAnswer: 2,
      explanation: "Cybercrime investigations require specialized knowledge of digital evidence, malware, networks, financial tracing, and cross-border procedures. Shortages of trained investigators, forensic specialists, equipment, and technical resources can delay investigations and reduce effectiveness. Strong international cooperation and adequate funding generally support enforcement rather than weaken it.",
      reference: "IT0204 Module 8 — Challenges in Philippine Cybercrime Enforcement"
    },
    {
      id: "q20",
      type: "multiple_choice",
      question: "A government website is hacked to display political propaganda. Which crime has been committed?",
      options: [
        "Wiretapping",
        "Website defacement and cybervandalism",
        "Piracy",
        "Data portability breach"
      ],
      correctAnswer: 1,
      explanation: "Website defacement involves unauthorized alteration of a site's visible content or appearance. Replacing official website content with propaganda is an example of cybervandalism and may involve illegal access or data interference under applicable cybercrime laws. It is not the same as copyright piracy or data portability.",
      reference: "IT0204 Module 8 — Website Defacement; RA 10175"
    },
    {
      id: "q21",
      type: "multiple_choice",
      question: "A Philippine cybercriminal syndicate offers ransomware-as-a-service. Which feature of cybercrime is highlighted?",
      options: [
        "Transparency",
        "Data portability",
        "Commercialization and scalability of cybercrime operations",
        "Copyright enforcement"
      ],
      correctAnswer: 2,
      explanation: "Ransomware-as-a-service is a criminal business model in which ransomware developers provide tools or infrastructure to affiliates who carry out attacks. This lowers the technical barrier to participation, distributes criminal roles, and enables attacks to scale across many targets. The scenario illustrates the commercialization and scalability of cybercrime.",
      reference: "IT0204 Module 8 — Cybercrime-as-a-Service and Ransomware"
    },
    {
      id: "q22",
      type: "multiple_choice",
      question: "A student in Manila creates malware that steals bank login credentials. Which law criminalizes this?",
      options: [
        "RA 8792",
        "RA 10175",
        "RA 8293",
        "RA 4200"
      ],
      correctAnswer: 1,
      explanation: "RA 10175 penalizes relevant computer-related crimes, including illegal access, computer-related identity theft, and computer-related fraud. Malware used to steal banking credentials can involve several of these offenses depending on its deployment and use. RA 8293 principally concerns intellectual property, while RA 4200 addresses prohibited wiretapping.",
      reference: "RA 10175 — Cybercrime Prevention Act of 2012"
    },
    {
      id: "q23",
      type: "multiple_choice",
      question: "Which institution plays a critical role in fintech cybersecurity compliance in the Philippines?",
      options: [
        "DepEd",
        "BSP",
        "CHED",
        "PAGCOR"
      ],
      correctAnswer: 1,
      explanation: "The Bangko Sentral ng Pilipinas regulates and supervises relevant banks, payment systems, e-money issuers, and other covered financial institutions. Its supervisory framework includes technology risk management, information security, operational resilience, and customer protection. DepEd and CHED primarily oversee education, while PAGCOR is associated with gaming regulation.",
      reference: "BSP — Financial Supervision and Technology Risk Management"
    },
    {
      id: "q24",
      type: "multiple_choice",
      question: "Which Philippine law directly addresses hacking, phishing, and related crimes?",
      options: [
        "RA 8293",
        "RA 8792",
        "RA 10175",
        "RA 4200"
      ],
      correctAnswer: 2,
      explanation: "RA 10175 is the Cybercrime Prevention Act of 2012. It establishes offenses involving illegal access, interception, data interference, system interference, computer-related fraud, and identity theft. Many hacking and phishing-related activities are prosecuted under its applicable provisions.",
      reference: "RA 10175 — Cybercrime Prevention Act of 2012"
    },
    {
      id: "q25",
      type: "multiple_choice",
      question: "A dark web market sells Philippine voters’ personal data. Which two frameworks apply?",
      options: [
        "RA 8792 and RA 8293",
        "RA 10173 (Data Privacy Act) and RA 10175 (Cybercrime Prevention Act)",
        "PCI DSS and RA 4200",
        "AI transparency rules"
      ],
      correctAnswer: 1,
      explanation: "RA 10173 protects personal information and imposes obligations on organizations processing personal data. RA 10175 can apply where the acquisition, access, interference, or sale involves offenses defined under the Cybercrime Prevention Act, such as illegal access or computer-related identity theft. The precise violations depend on how the data was obtained, processed, and traded. PCI DSS is specific to payment account data and is not the primary framework for voter data.",
      reference: "RA 10173 — Data Privacy Act of 2012; RA 10175 — Cybercrime Prevention Act"
    },
    {
      id: "q26",
      type: "multiple_choice",
      question: "Hackers disrupt Philippine e-commerce with denial-of-service attacks. Which dimension of cybersecurity is most affected?",
      options: [
        "Confidentiality",
        "Integrity",
        "Availability",
        "Transparency"
      ],
      correctAnswer: 2,
      explanation: "Denial-of-service attacks overwhelm or disrupt a system so legitimate users cannot access it reliably. The primary CIA triad property affected is Availability, which means information and services remain accessible when needed. Confidentiality concerns unauthorized disclosure, while integrity concerns unauthorized alteration.",
      reference: "IT0204 Module 8 — CIA Triad and Denial-of-Service Attacks"
    },
    {
      id: "q27",
      type: "multiple_select",
      question: "Which technologies complicate cybercrime enforcement in the Philippines?",
      options: [
        "Cryptocurrency",
        "Dark web markets",
        "Encrypted messaging apps",
        "Open-source software"
      ],
      correctAnswer: [0, 1, 2],
      explanation: "Cryptocurrency can enable cross-border transactions involving pseudonymous wallets, although blockchain activity may still be traceable. Dark web markets may conceal criminal marketplaces and participant identities through anonymity networks. Encrypted messaging can limit access to message content without endpoint evidence or lawful access. Open-source software is a broad category of legitimate software and is not inherently an obstacle to enforcement.",
      reference: "IT0204 Module 8 — Cryptocurrency, Dark Web Markets, and Encrypted Communications"
    },
    {
      id: "q28",
      type: "multiple_select",
      question: "Which agencies are involved in combating Philippine cybercrime?",
      options: [
        "DICT",
        "CICC",
        "NBI",
        "DepEd"
      ],
      correctAnswer: [0, 1, 2],
      explanation: "The Department of Information and Communications Technology (DICT) supports national cybersecurity policy, coordination, and capacity building. The Cybercrime Investigation and Coordinating Center (CICC) coordinates relevant cybercrime investigation and response initiatives. The National Bureau of Investigation (NBI), including its cybercrime investigation capabilities, conducts law enforcement investigations. DepEd has an education-related role but is not one of the principal cybercrime enforcement agencies identified here.",
      reference: "RA 10175 — Cybercrime Investigation and Coordinating Center; DICT; NBI"
    },
    {
      id: "q29",
      type: "multiple_choice",
      question: "A dark web operation in Manila uses cryptocurrency to launder drug proceeds. Which area of regulation is most relevant?",
      options: [
        "Intellectual property",
        "Fintech and anti-money laundering (AML)",
        "Child protection",
        "Workplace privacy"
      ],
      correctAnswer: 1,
      explanation: "Money laundering involves concealing or disguising the criminal origin of proceeds. When cryptocurrency is used to transfer or conceal drug-related funds, relevant concerns include anti-money laundering controls, suspicious transaction monitoring, customer due diligence, and financial crime investigation. These are closer to fintech and AML regulation than copyright or workplace privacy.",
      reference: "RA 9160, as amended — Anti-Money Laundering Act; BSP — Virtual Asset Service Provider Regulation"
    },
    {
      id: "q30",
      type: "multiple_choice",
      question: "A ransomware group attacks Philippine power grids. Which national security issue is threatened?",
      options: [
        "Data portability",
        "Transparency",
        "Critical infrastructure security",
        "Copyright law"
      ],
      correctAnswer: 2,
      explanation: "Power grids are critical infrastructure because their disruption can affect essential services, public safety, economic activity, and national resilience. A ransomware attack targeting grid operations threatens the availability and security of vital systems. This makes critical infrastructure protection the relevant national security concern.",
      reference: "DICT — National Cybersecurity Plan; Critical Information Infrastructure Protection"
    }
  ]
});
