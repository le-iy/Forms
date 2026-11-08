
window.PandoraQuizzes.register({
  id: "IT0204-M04-S02",
  subject: "IT0204",
  module: 4,
  title: "Summative 2",
  kind: "summative",
  version: 1,
  description: "Summative Assessment 2 covering Philippine cybersecurity laws, data privacy, incident response, breach notification, and data protection compliance. Modules 1–4.",
  createdAt: "2026-11-07T01:00:00+08:00",
  showOnHome: true,
  questions: [
    {
      id: "q1",
      type: "true_false",
      question: "A firm encrypts sensitive data but shares the decryption key openly with employees. This still counts as compliance with RA 10173 safeguards.",
      correctAnswer: false,
      explanation: "Encryption becomes ineffective when decryption keys are openly accessible. RA 10173 requires appropriate organizational, physical, and technical security measures to protect personal information.",
      reference: "RA 10173, Section 20; Module 4, Security Safeguards"
    },
    {
      id: "q2",
      type: "multiple_choice",
      question: "A hacker floods a government portal with massive traffic, rendering it unusable. Which cybercrime offense is this?",
      options: ["System interference", "Cyber-squatting", "Identity theft", "Data interference"],
      correctAnswer: 0,
      explanation: "Flooding a portal with traffic to disrupt its operation is a denial-of-service attack and can constitute system interference under the Cybercrime Prevention Act.",
      reference: "RA 10175, Section 4(a)(4)"
    },
    {
      id: "q3",
      type: "multiple_choice",
      question: "A cybercriminal registers a domain closely resembling a bank's site to trick customers. This is:",
      options: ["Cyber libel", "Cyber-squatting", "Identity theft", "Unauthorized interception"],
      correctAnswer: 1,
      explanation: "Cyber-squatting can involve bad-faith registration of a domain name confusingly similar to a legitimate organization or trademark. The domain may also be used for phishing.",
      reference: "RA 10175, Section 4(a)(6)"
    },
    {
      id: "q4",
      type: "multiple_select",
      question: "Which Philippine special laws are related to cybersecurity?",
      options: [
        "RA 9003 – Ecological Solid Waste Management Act",
        "RA 9775 – Anti-Child Pornography Act",
        "RA 9995 – Anti-Photo and Video Voyeurism Act",
        "RA 4200 – Anti-Wiretapping Act"
      ],
      correctAnswer: [1, 2, 3],
      explanation: "RA 9775 addresses child sexual abuse material, RA 9995 prohibits specified acts of photo and video voyeurism, and RA 4200 protects private communications against unlawful interception. RA 9003 primarily governs solid waste.",
      reference: "Module 4, Philippine Cybersecurity-Related Laws; RA 9775, RA 9995, RA 4200"
    },
    {
      id: "q5",
      type: "true_false",
      question: "A company fails to update firewalls after a breach, leading to another attack. This shows failure in lessons learned.",
      correctAnswer: true,
      explanation: "The lessons learned phase identifies weaknesses and translates incident findings into improved controls, policies, and procedures. Failing to address known weaknesses increases recurrence risk.",
      reference: "Module 3, Incident Response Plan, Lessons Learned"
    },
    {
      id: "q6",
      type: "multiple_choice",
      question: "A retail firm has an incident response team but no defined communication plan. Which key component is missing?",
      options: ["Technical expertise", "Monitoring tools", "Notification strategy", "Forensics"],
      correctAnswer: 2,
      explanation: "A notification strategy defines who communicates with regulators, customers, management, and other stakeholders during an incident.",
      reference: "Module 3, Incident Response Communication"
    },
    {
      id: "q7",
      type: "true_false",
      question: "An NPC audit reveals a company failed to appoint a DPO and has no breach notification plan. This is a compliance failure.",
      correctAnswer: true,
      explanation: "DPO designation and appropriate breach response procedures are parts of an organization's Philippine data privacy compliance responsibilities.",
      reference: "RA 10173, Section 20; NPC Accountability and Compliance Guidance"
    },
    {
      id: "q8",
      type: "true_false",
      question: "A parent posts a child's medical records online without consent. This is protected and not covered by RA 10173.",
      correctAnswer: false,
      explanation: "Medical records contain sensitive personal information. Publishing them is not automatically lawful or protected. However, the DPA's personal, family, or household context matters, and a parent's personal posting does not automatically constitute a DPA offense.",
      reference: "RA 10173, Sections 3(h), 3(l), and 13; NPC Guidance"
    },
    {
      id: "q9",
      type: "multiple_choice",
      question: "A hospital discovers unauthorized access to its patient database but waits until the next annual audit to act. Which IR stage is missing?",
      options: ["Notification", "Lessons learned", "Recovery", "Immediate containment"],
      correctAnswer: 3,
      explanation: "Containment requires prompt measures to limit the spread and impact of an incident. Waiting for an annual audit allows unauthorized access to continue.",
      reference: "Module 3, Incident Response, Containment"
    },
    {
      id: "q10",
      type: "multiple_select",
      question: "Which breach response steps are best practices?",
      options: [
        "Timely notification to NPC and data subjects",
        "Preserving forensic evidence",
        "Containment of compromised systems",
        "Suppressing public disclosure entirely"
      ],
      correctAnswer: [0, 1, 2],
      explanation: "Effective response includes notifying required parties, preserving evidence, and containing affected systems. Suppressing legally required disclosures is not an acceptable practice.",
      reference: "Module 3, Incident Response and Breach Notification; NPC Circular 16-03"
    },
    {
      id: "q11",
      type: "multiple_choice",
      question: "A BPO handling financial data experiences a cyberattack. It performs isolation of infected systems. Which phase of incident response is this?",
      options: ["Containment", "Notification", "Identification", "Recovery"],
      correctAnswer: 0,
      explanation: "Isolating infected systems prevents malware or attackers from spreading to other devices and is a standard containment activity.",
      reference: "Module 3, Incident Response, Containment"
    },
    {
      id: "q12",
      type: "multiple_choice",
      question: "A health tech startup collects sensitive health data but has no breach notification plan in place. In case of a breach, what law would primarily hold them accountable in the Philippines?",
      options: ["RA 4200", "RA 10173", "RA 8293", "RA 8792"],
      correctAnswer: 1,
      explanation: "RA 10173 governs the processing and protection of personal information in the Philippines, including health information and applicable breach notification duties.",
      reference: "RA 10173, Sections 13 and 20"
    },
    {
      id: "q13",
      type: "true_false",
      question: "A BPO receives a breach report but ignores it since no financial loss occurred. Under RA 10173, this is still a violation.",
      correctAnswer: true,
      explanation: "An organization must appropriately assess and respond to reported security incidents. The absence of financial loss does not remove security responsibilities or applicable notification obligations.",
      reference: "RA 10173, Section 20; NPC Circular 16-03"
    },
    {
      id: "q14",
      type: "true_false",
      question: "A company quickly restores infected servers without identifying how the breach occurred. This is considered best practice in IR.",
      correctAnswer: false,
      explanation: "Restoring systems without identifying and addressing the attack's cause can leave vulnerabilities or malware in place, allowing reinfection.",
      reference: "Module 3, Incident Response, Identification, Eradication and Recovery"
    },
    {
      id: "q15",
      type: "multiple_choice",
      question: "A university experienced a breach but announced it only after media exposed it. Which notification rule was broken?",
      options: ["Root cause analysis", "Timeliness and transparency", "Recovery", "Containment"],
      correctAnswer: 1,
      explanation: "Waiting for media exposure instead of providing required timely notification undermines openness and transparency. Legal reporting deadlines depend on whether the incident is notifiable.",
      reference: "Module 3, Breach Notification; NPC Circular 16-03"
    },
    {
      id: "q16",
      type: "multiple_choice",
      question: "A cybercriminal installs a keylogger to steal employee logins. This is classified as:",
      options: ["Misuse of devices under RA 10175", "Cyber libel", "Improper disposal", "Cyber-squatting"],
      correctAnswer: 0,
      explanation: "A keylogger used to capture credentials can be an instrument of cybercrime. The misuse-of-devices offense concerns qualifying possession, production, distribution, or use-related conduct under statutory conditions; illegal access or interception may also apply.",
      reference: "RA 10175, Section 4(a)(5)"
    },
    {
      id: "q17",
      type: "true_false",
      question: "A cyberattack causes a bank's system outage, but the bank delays notification to avoid panic. This violates timeliness.",
      correctAnswer: true,
      explanation: "Organizations should communicate reportable incidents within applicable deadlines. Delaying solely to avoid panic is not generally an acceptable reason for withholding mandatory notification.",
      reference: "Module 3, Breach Notification Timeliness"
    },
    {
      id: "q18",
      type: "true_false",
      question: "A BPO outsources processing to a vendor without a data-sharing agreement. This is compliant with RA 10173.",
      correctAnswer: false,
      explanation: "Outsourced processing requires appropriate contractual privacy and security arrangements. A data processing or outsourcing agreement is generally the appropriate instrument, rather than necessarily a data-sharing agreement.",
      reference: "RA 10173, Sections 14 and 21; NPC Outsourcing Guidance"
    },
    {
      id: "q19",
      type: "multiple_choice",
      question: "A company notifies its clients 60 days after a confirmed breach. This violates:",
      options: ["Intellectual property", "72-hour breach notification under RA 10173", "RA 4200", "Transparency principle"],
      correctAnswer: 1,
      explanation: "For qualifying personal data breaches, Philippine rules generally require notification within 72 hours of knowledge or reasonable belief. A 60-day delay would ordinarily breach that requirement unless an authorized exception applies.",
      reference: "NPC Circular 16-03; DPA Implementing Rules, Section 38"
    },
    {
      id: "q20",
      type: "multiple_select",
      question: "Which data types are considered sensitive personal information under RA 10173?",
      options: ["Work schedules", "Telephone directory listings", "Political affiliations", "Health records"],
      correctAnswer: [2, 3],
      explanation: "RA 10173 explicitly identifies political affiliations and health information as sensitive personal information, subject to stricter processing conditions.",
      reference: "RA 10173, Section 3(l)"
    },
    {
      id: "q21",
      type: "multiple_choice",
      question: "A telecom firm fails to appoint a Data Protection Officer (DPO). Which compliance requirement is breached?",
      options: ["RA 4200", "RA 8293", "RA 8792", "RA 10173"],
      correctAnswer: 3,
      explanation: "The Philippine data privacy accountability framework requires appropriate DPO designation and organizational oversight, including for covered telecommunications companies.",
      reference: "RA 10173; NPC DPO Guidance"
    },
    {
      id: "q22",
      type: "true_false",
      question: "A retailer destroys expired customer data according to retention schedules. This aligns with proportionality.",
      correctAnswer: true,
      explanation: "Secure disposal after the lawful retention period supports proportionality because personal information should not be kept longer than necessary.",
      reference: "RA 10173, Section 11"
    },
    {
      id: "q23",
      type: "multiple_choice",
      question: "An LGU posts COVID-19 patients' home addresses publicly. This violates which provision?",
      options: ["Unauthorized processing of sensitive personal information", "Proportionality only", "Intellectual property", "Wiretapping"],
      correctAnswer: 0,
      explanation: "Publishing addresses tied to identifiable patients reveals health-related information. Such disclosure requires an applicable lawful basis and compliance with sensitive-data protections.",
      reference: "RA 10173, Sections 13 and 25"
    },
    {
      id: "q24",
      type: "multiple_choice",
      question: "A malicious insider alters payroll records in the HR system. Which cybercrime offense applies?",
      options: ["Cyber-squatting", "Data interference under RA 10175", "Cyber libel", "Identity theft"],
      correctAnswer: 1,
      explanation: "Unauthorized modification of electronic payroll records constitutes data interference under the Cybercrime Prevention Act.",
      reference: "RA 10175, Section 4(a)(3)"
    },
    {
      id: "q25",
      type: "true_false",
      question: "A hospital notifies NPC of a breach but refuses to notify patients. This fully compliant with RA 10173.",
      correctAnswer: false,
      explanation: "For breaches meeting mandatory notification requirements, both the NPC and affected individuals must generally be notified. NPC reporting alone does not automatically fulfill all obligations.",
      reference: "RA 10173, Section 20(f); NPC Circular 16-03"
    },
    {
      id: "q26",
      type: "multiple_select",
      question: "Which actions violate the right to erasure?",
      options: [
        "Deleting user accounts upon request",
        "Refusing deletion requests without lawful basis",
        "Retaining client data after consent is withdrawn",
        "Removing expired files per retention schedule"
      ],
      correctAnswer: [1, 2],
      explanation: "Refusing valid deletion requests without lawful justification violates erasure rights. Continuing retention after withdrawal can also violate those rights when no other lawful retention basis remains.",
      reference: "RA 10173, Section 16"
    },
    {
      id: "q27",
      type: "multiple_choice",
      question: "A multinational company transfers Filipino employee records abroad without safeguards. Which violation applies?",
      options: ["Improper disposal", "Intellectual property misuse", "Wiretapping", "Cross-border transfer issue under RA 10173"],
      correctAnswer: 3,
      explanation: "Personal information controllers remain responsible for appropriate data protection when processing or transferring personal information abroad.",
      reference: "RA 10173, Section 21; Module 2, Cross-Border Transfers"
    },
    {
      id: "q28",
      type: "multiple_choice",
      question: "A student downloads pirated software and installs malware that compromises his school's data. Which law is violated?",
      options: ["RA 4200", "RA 8293 and RA 10175", "RA 10173", "RA 9995"],
      correctAnswer: 1,
      explanation: "Pirated software can implicate copyright under RA 8293, while unauthorized malware deployment or interference may violate RA 10175. Downloading infected software unknowingly does not itself establish a cybercrime; the student's conduct and intent matter.",
      reference: "RA 8293; RA 10175, Section 4(a)"
    },
    {
      id: "q29",
      type: "multiple_choice",
      question: "An employee reports a phishing attempt, but the company ignores it. A breach follows. Which IR weakness is highlighted?",
      options: ["Transparency", "Failure of early detection and containment", "Recovery", "Notification"],
      correctAnswer: 1,
      explanation: "Failing to investigate and respond to a reported phishing attempt can allow threats to escalate into a security breach.",
      reference: "Module 3, Incident Response, Identification and Containment"
    },
    {
      id: "q30",
      type: "multiple_select",
      question: "Which laws regulate communication privacy?",
      options: [
        "RA 8293 – Intellectual Property Code",
        "RA 10173 – Data Privacy Act",
        "RA 4200 – Anti-Wiretapping Act",
        "RA 8792 – E-Commerce Act"
      ],
      correctAnswer: [1, 2],
      explanation: "RA 10173 regulates personal information processing and confidentiality, while RA 4200 specifically addresses unauthorized interception of private communications.",
      reference: "RA 10173; RA 4200"
    },
    {
      id: "q31",
      type: "multiple_choice",
      question: "An IT administrator restores infected systems before isolating compromised machines. This mistake jeopardizes which IR phase?",
      options: ["Containment", "Recovery", "Notification", "Lessons learned"],
      correctAnswer: 0,
      explanation: "Containment should limit the spread of a threat before normal operations resume. Premature restoration can expose recovered systems to the same active threat.",
      reference: "Module 3, Incident Response, Containment"
    },
    {
      id: "q32",
      type: "multiple_choice",
      question: "A foreign tech company argues RA 10173 does not apply since its servers are abroad, but it processes data of Filipinos. This claim is:",
      options: [
        "Valid only for anonymized data",
        "Valid under sovereignty rules",
        "False unless NPC requests otherwise",
        "False because RA 10173 has extraterritorial application"
      ],
      correctAnswer: 3,
      explanation: "RA 10173 may apply outside Philippine territory when its statutory jurisdictional conditions are satisfied. Server location alone does not determine coverage, although processing Filipinos' data alone is not sufficient in every case.",
      reference: "RA 10173, Section 6"
    },
    {
      id: "q33",
      type: "multiple_choice",
      question: "A startup stores data backups unencrypted on public cloud servers. Which principle is violated?",
      options: ["Transparency", "Portability", "Security safeguards", "Legitimate purpose"],
      correctAnswer: 2,
      explanation: "Publicly accessible, unprotected backups create confidentiality and unauthorized-access risks. Organizations must apply appropriate technical and organizational security measures.",
      reference: "RA 10173, Section 20"
    },
    {
      id: "q34",
      type: "multiple_select",
      question: "Which are responsibilities of a DPO?",
      options: [
        "Liaising with NPC",
        "Conducting risk assessments",
        "Approving financial audits",
        "Monitoring data privacy compliance"
      ],
      correctAnswer: [0, 1, 3],
      explanation: "A DPO coordinates with the NPC, oversees data privacy compliance, and supports privacy risk assessment activities. Financial audit approval is not an inherent DPO responsibility.",
      reference: "NPC DPO Guidance; Module 4, Accountability"
    },
    {
      id: "q35",
      type: "true_false",
      question: "A government agency uses incident response playbooks and conducts annual simulations. This aligns with best practices in IR.",
      correctAnswer: true,
      explanation: "Playbooks and simulations prepare incident response teams by testing procedures and identifying weaknesses before a real attack.",
      reference: "Module 3, Incident Response Preparation"
    },
    {
      id: "q36",
      type: "multiple_select",
      question: "Which laws apply to online exploitation of children?",
      options: [
        "RA 8792 (E-Commerce Act)",
        "RA 10175 (Cybercrime Prevention)",
        "RA 9775 (Anti-Child Pornography)",
        "RA 8293 (Intellectual Property)"
      ],
      correctAnswer: [1, 2],
      explanation: "RA 9775 addresses child sexual abuse material and related offenses. RA 10175 provides cybercrime provisions relevant to online conduct and offenses involving computer systems.",
      reference: "RA 9775; RA 10175, Section 4(c)"
    },
    {
      id: "q37",
      type: "multiple_choice",
      question: "A BPO deletes files upon employee request, but backup copies remain accessible. Which right is not fully respected?",
      options: ["Right to erasure", "Right to object", "Right to portability", "Right to access"],
      correctAnswer: 0,
      explanation: "When erasure is legally required, retaining accessible copies without a valid justification can undermine the deletion request. Backup retention may still be permitted under applicable obligations and safeguards.",
      reference: "RA 10173, Section 16"
    },
    {
      id: "q38",
      type: "multiple_choice",
      question: "A government agency loses USB drives containing census data. Which type of incident is this?",
      options: ["Cyber libel", "Data interference", "Data breach through negligent loss", "Wiretapping"],
      correctAnswer: 2,
      explanation: "Losing storage media containing personal information may result in a confidentiality breach, especially when devices are unencrypted and accessible to unauthorized persons.",
      reference: "RA 10173, Section 20; NPC Personal Data Breach Guidance"
    },
    {
      id: "q39",
      type: "true_false",
      question: "An employee mistakenly sends a spreadsheet with personal information to the wrong email. This is considered negligent access.",
      correctAnswer: true,
      explanation: "Sending personal information to an unintended recipient is a negligent disclosure or handling incident. Whether it meets the specific criminal offense of accessing data due to negligence depends on statutory elements.",
      reference: "RA 10173, Sections 20 and 26"
    },
    {
      id: "q40",
      type: "multiple_choice",
      question: "During an investigation, the IR team discovers that attackers entered through outdated software. Which phase of incident response does this belong to?",
      options: ["Root cause analysis", "Containment", "Notification", "Escalation"],
      correctAnswer: 0,
      explanation: "Root cause analysis identifies the weaknesses or failures that enabled an incident, allowing the organization to correct them.",
      reference: "Module 3, Incident Investigation and Root Cause Analysis"
    },
    {
      id: "q41",
      type: "multiple_choice",
      question: "A firm stores all employee personal data indefinitely without clear purpose. Which RA 10173 principle is breached?",
      options: ["Security safeguards", "Transparency", "Proportionality", "Portability"],
      correctAnswer: 2,
      explanation: "Proportionality requires data to be relevant and limited to what is necessary for a legitimate purpose, including appropriate retention periods.",
      reference: "RA 10173, Section 11"
    },
    {
      id: "q42",
      type: "multiple_choice",
      question: "A government official intercepts SMS messages of political rivals without court approval. This violates:",
      options: ["RA 4200 (Anti-Wiretapping)", "RA 8293 only", "RA 8792", "RA 10173 only"],
      correctAnswer: 0,
      explanation: "The Anti-Wiretapping Act prohibits specified unauthorized interception of private communications. Interception of nonpublic electronic data transmissions can also implicate RA 10175.",
      reference: "RA 4200; RA 10175, Section 4(a)(2)"
    },
    {
      id: "q43",
      type: "multiple_choice",
      question: "A phishing campaign tricks employees into giving credentials. The IR team resets accounts and implements training. This belongs to which IR phase?",
      options: ["Notification", "Containment", "Identification", "Recovery and lessons learned"],
      correctAnswer: 3,
      explanation: "Restoring account security supports recovery, while training employees after the incident addresses lessons learned and prevention of recurrence.",
      reference: "Module 3, Recovery and Lessons Learned"
    },
    {
      id: "q44",
      type: "multiple_choice",
      question: "An online critic posts false damaging claims about a company on social media. This may be prosecuted under:",
      options: ["RA 8293", "RA 8792", "RA 10175 (Cyber libel)", "RA 10173"],
      correctAnswer: 2,
      explanation: "Cyber libel under RA 10175 concerns defamatory online publications satisfying the legal elements of libel. False or damaging criticism alone is not necessarily criminal.",
      reference: "RA 10175, Section 4(c)(4); Revised Penal Code, Articles 353–355"
    },
    {
      id: "q45",
      type: "multiple_select",
      question: "Which scenarios are identity theft?",
      options: [
        "Publishing a legal opinion online",
        "Using another's name to apply for loans",
        "Creating fake Facebook profiles using another's photos",
        "Encrypting files for storage"
      ],
      correctAnswer: [1, 2],
      explanation: "Fraudulently using another person's identifying details to obtain loans or impersonate them online may constitute identity theft. A fake profile must involve unauthorized misuse of identifying information, not merely the existence of a similar photo.",
      reference: "RA 10175, Section 4(b)(3)"
    },
    {
      id: "q46",
      type: "true_false",
      question: "A hacker installs spyware on a company laptop, and the IT team immediately isolates the device. This is proper containment.",
      correctAnswer: true,
      explanation: "Isolating a compromised laptop limits spyware communication and reduces the risk of spreading malicious activity to other systems.",
      reference: "Module 3, Incident Response, Containment"
    },
    {
      id: "q47",
      type: "multiple_choice",
      question: "An airline system was hacked, compromising passenger passport details. Under RA 10173, this type of data is classified as:",
      options: ["Sensitive personal information", "Proprietary data", "Public information", "Personal information"],
      correctAnswer: 0,
      explanation: "Passport records may include government-issued identifying information and other sensitive details. The precise statutory classification depends on the information involved; not every passport detail automatically falls into every sensitive-information category.",
      reference: "RA 10173, Section 3(l); DPA Implementing Rules"
    },
    {
      id: "q48",
      type: "multiple_choice",
      question: "A DPO fails to log and monitor breach attempts. Which accountability element is lacking?",
      options: ["Proportionality", "Transparency", "Portability", "Security and audit responsibility"],
      correctAnswer: 3,
      explanation: "Security monitoring and audit records help organizations detect incidents, investigate breaches, and demonstrate compliance with required safeguards.",
      reference: "RA 10173, Section 20; NPC Accountability Guidance"
    },
    {
      id: "q49",
      type: "multiple_choice",
      question: "A company suffers a ransomware attack and pays the ransom. However, they fail to update their security policies to prevent recurrence. Which incident response stage did they neglect?",
      options: ["Eradication", "Notification", "Containment", "Recovery and lessons learned"],
      correctAnswer: 3,
      explanation: "The lessons learned process involves reviewing incidents and improving policies and defenses. Paying a ransom does not substitute for eradication, recovery, or security improvement.",
      reference: "Module 3, Incident Response, Lessons Learned"
    },
    {
      id: "q50",
      type: "multiple_choice",
      question: "A bank discovers that customer accounts have been accessed by hackers, but it waits two weeks before notifying customers and regulators. Which major principle of breach notification is violated?",
      options: ["Timeliness", "Proportionality", "Transparency", "Confidentiality"],
      correctAnswer: 0,
      explanation: "Timeliness requires prompt notification when an incident meets applicable reporting requirements. Unjustified delays can prevent affected individuals from protecting themselves.",
      reference: "Module 3, Breach Notification; NPC Circular 16-03"
    },
    {
      id: "q51",
      type: "true_false",
      question: "An IT manager deletes digital logs to hide evidence of a breach. This impairs forensic investigation.",
      correctAnswer: true,
      explanation: "Security logs provide evidence of system activity and attack timelines. Deleting them can destroy critical forensic information.",
      reference: "Module 3, Incident Investigation and Evidence Preservation"
    },
    {
      id: "q52",
      type: "multiple_select",
      question: "Which scenarios violate timeliness in breach notification?",
      options: [
        "Reporting after 60 days instead of 72 hours",
        "Informing customers only after media exposure",
        "Immediate report to NPC within 72 hours",
        "Simultaneous notice to affected subjects"
      ],
      correctAnswer: [0, 1],
      explanation: "Unjustifiably late reporting and withholding notification until media exposure undermine timeliness. Prompt notification to regulators and affected individuals supports compliance when required.",
      reference: "Module 3, Breach Notification; NPC Circular 16-03"
    },
    {
      id: "q53",
      type: "multiple_choice",
      question: "A travel agency refuses to provide a copy of a client's booking history despite request. This denies the right to:",
      options: ["Erasure", "Rectification", "Portability", "Access"],
      correctAnswer: 3,
      explanation: "The right to access allows individuals to obtain information about personal data held and processed by an organization, subject to lawful exceptions.",
      reference: "RA 10173, Section 16"
    },
    {
      id: "q54",
      type: "true_false",
      question: "A government agency posted complete voter lists with birthdays and addresses online. This complies with transparency.",
      correctAnswer: false,
      explanation: "Transparency does not authorize indiscriminate disclosure of personal information. Government publication must have a lawful basis and comply with security and proportionality requirements.",
      reference: "RA 10173, Sections 11–12"
    },
    {
      id: "q55",
      type: "true_false",
      question: "A hacker floods a website with traffic, causing downtime. This falls under system interference.",
      correctAnswer: true,
      explanation: "An attack that deliberately overwhelms a website and disrupts its availability can constitute system interference.",
      reference: "RA 10175, Section 4(a)(4)"
    },
    {
      id: "q56",
      type: "true_false",
      question: "A hacker tampers with airline booking records, altering flights. This is data interference under RA 10175.",
      correctAnswer: true,
      explanation: "Unauthorized alteration of electronic booking information constitutes data interference because the integrity of computer data is compromised.",
      reference: "RA 10175, Section 4(a)(3)"
    },
    {
      id: "q57",
      type: "multiple_choice",
      question: "A government agency collects personal data for census but later uses it for political campaigning. Which privacy principle is violated?",
      options: ["Legitimate purpose", "Security safeguards", "Transparency", "Proportionality"],
      correctAnswer: 0,
      explanation: "Personal data collected for census purposes cannot automatically be reused for unrelated political campaigning. Processing must remain within a specified and legitimate purpose.",
      reference: "RA 10173, Section 11"
    },
    {
      id: "q58",
      type: "multiple_choice",
      question: "A company designs an IR plan but fails to assign specific roles. Which weakness does this cause?",
      options: ["Role ambiguity in incident handling", "Legal noncompliance", "Communication breakdown", "Technical limitation"],
      correctAnswer: 0,
      explanation: "Undefined responsibilities create confusion over incident decision-making, escalation, communication, and response tasks.",
      reference: "Module 3, Incident Response Planning and Roles"
    },
    {
      id: "q59",
      type: "true_false",
      question: "An LGU intercepts private calls of citizens to monitor election-related crimes. This is allowed under RA 4200.",
      correctAnswer: false,
      explanation: "Monitoring suspected crimes does not automatically authorize interception of private calls. RA 4200 establishes restrictions and specified legal exceptions.",
      reference: "RA 4200, Section 1"
    },
    {
      id: "q60",
      type: "multiple_select",
      question: "Which are considered cyber libel cases?",
      options: [
        "Flooding systems with traffic",
        "Posting damaging online blogs against a company",
        "Sending phishing emails",
        "Publishing false accusations on social media"
      ],
      correctAnswer: [1, 3],
      explanation: "Online blogs or social media posts may constitute cyber libel when defamatory statements meet the required legal elements. Merely damaging a reputation or publishing a negative opinion is insufficient.",
      reference: "RA 10175, Section 4(c)(4); Revised Penal Code"
    },
    {
      id: "q61",
      type: "multiple_choice",
      question: "A government staff leaves unshredded forms with voters' addresses in a public trash bin. This is an example of:",
      options: ["Cyber libel", "Improper disposal under RA 10173", "Negligent access", "Unauthorized interception"],
      correctAnswer: 1,
      explanation: "Discarding identifiable records without secure destruction makes personal information accessible to unauthorized persons and can constitute improper disposal.",
      reference: "RA 10173, Section 27"
    },
    {
      id: "q62",
      type: "multiple_choice",
      question: "An IT staff disables security logs to hide tracks of a breach. This impairs which IR function?",
      options: ["Forensics and evidence preservation", "Lessons learned", "Containment", "Notification"],
      correctAnswer: 0,
      explanation: "Security logs are essential for incident reconstruction and forensic analysis. Disabling them undermines evidence preservation and accountability.",
      reference: "Module 3, Forensic Investigation and Evidence Preservation"
    },
    {
      id: "q63",
      type: "multiple_choice",
      question: "An e-commerce company detected unauthorized access but chose to conceal the breach fearing loss of reputation. Under RA 10173, this concealment may result in:",
      options: ["Administrative fine only", "No liability", "Imprisonment and fines", "Loss of license only"],
      correctAnswer: 2,
      explanation: "RA 10173 provides imprisonment and fines for concealment of security breaches involving sensitive personal information when the statutory requirements are met.",
      reference: "RA 10173, Section 30"
    },
    {
      id: "q64",
      type: "multiple_choice",
      question: "A retailer responds to a breach by conducting forensic analysis, notifying stakeholders, and revising its policies. This illustrates:",
      options: ["Eradication only", "Identification stage", "Containment only", "Comprehensive incident response cycle"],
      correctAnswer: 3,
      explanation: "Forensic analysis, required notification, and policy improvements represent activities across multiple stages of a comprehensive incident response cycle.",
      reference: "Module 3, Incident Response Plan"
    },
    {
      id: "q65",
      type: "multiple_choice",
      question: "A hacker defaces a government website during elections. Which law is primarily violated?",
      options: ["RA 4200", "RA 10175", "RA 8792", "RA 8293"],
      correctAnswer: 1,
      explanation: "Unauthorized website defacement can violate RA 10175 through illegal access, data interference, or system interference depending on the conduct.",
      reference: "RA 10175, Section 4(a)"
    },
    {
      id: "q66",
      type: "multiple_select",
      question: "Which actions constitute improper disposal of data?",
      options: [
        "Throwing medical records into public trash bins",
        "Wiping disks securely",
        "Shredding documents before disposal",
        "Selling secondhand drives with intact files"
      ],
      correctAnswer: [0, 3],
      explanation: "Disposing of medical records in public bins and selling drives containing recoverable data can expose personal information. Secure wiping and shredding are protective disposal methods.",
      reference: "RA 10173, Section 27"
    },
    {
      id: "q67",
      type: "multiple_choice",
      question: "After a breach, a company strengthens its firewalls, trains employees, and revises policies. Which IR phase is this?",
      options: ["Identification", "Containment", "Notification", "Lessons learned and recovery"],
      correctAnswer: 3,
      explanation: "Post-incident improvements to defenses, staff awareness, and policies demonstrate lessons learned and support secure recovery.",
      reference: "Module 3, Recovery and Lessons Learned"
    },
    {
      id: "q68",
      type: "multiple_choice",
      question: "A university experiences a data breach but fails to investigate the root cause before restoring its systems. Which incident response phase is being skipped?",
      options: ["Lessons learned", "Notification", "Containment", "Eradication"],
      correctAnswer: 3,
      explanation: "Eradication involves addressing the underlying threat and eliminating the attack's cause before secure recovery. Root cause analysis can also continue during post-incident review.",
      reference: "Module 3, Eradication and Recovery"
    },
    {
      id: "q69",
      type: "multiple_choice",
      question: "An employee uploads confidential source code of his company to his personal cloud drive. Later, it gets hacked. This is primarily a violation of:",
      options: ["Unauthorized processing and negligent security", "Wiretapping", "Cyber libel", "Intellectual property"],
      correctAnswer: 3,
      explanation: "Company source code may be protected as intellectual property and confidential business information. Unauthorized uploading may also violate employment confidentiality and information security policies.",
      reference: "RA 8293, Intellectual Property Code; Module 4"
    },
    {
      id: "q70",
      type: "multiple_choice",
      question: "A lawyer records his client's phone calls secretly for evidence. Which law is violated?",
      options: ["RA 4200 (Anti-Wiretapping Act)", "RA 9775", "RA 8792", "RA 8293"],
      correctAnswer: 0,
      explanation: "The Anti-Wiretapping Act restricts secret recording of private telephone communications. A desire to preserve evidence does not automatically justify nonconsensual recording.",
      reference: "RA 4200"
    },
    {
      id: "q71",
      type: "multiple_select",
      question: "Which show transparency violations?",
      options: [
        "Providing data access upon request",
        "Publishing a privacy notice",
        "Failing to disclose processing purposes to clients",
        "Refusing to inform customers of breaches"
      ],
      correctAnswer: [2, 3],
      explanation: "Transparency requires explaining processing activities and providing legally required information about data breaches. Withholding such information can violate privacy obligations.",
      reference: "RA 10173, Sections 11, 16 and 20"
    },
    {
      id: "q72",
      type: "multiple_select",
      question: "Which institutions can investigate cybercrime in the Philippines?",
      options: [
        "PNP Anti-Cybercrime Group",
        "Department of Tourism",
        "NBI Cybercrime Division",
        "DOJ - Office of Cybercrime"
      ],
      correctAnswer: [0, 2, 3],
      explanation: "The PNP Anti-Cybercrime Group and NBI Cybercrime Division conduct cybercrime investigations, while the DOJ Office of Cybercrime supports coordination and prosecutorial functions.",
      reference: "RA 10175; Philippine Cybercrime Enforcement Framework"
    },
    {
      id: "q73",
      type: "true_false",
      question: "A cybercriminal installs ransomware that locks government records. This is system interference under RA 10175.",
      correctAnswer: true,
      explanation: "Ransomware that disrupts the availability or functioning of government computer systems may constitute system interference under RA 10175.",
      reference: "RA 10175, Section 4(a)(4)"
    },
    {
      id: "q74",
      type: "multiple_choice",
      question: "A cybercriminal plants malicious code to alter grades in a university system. Which cybercrime applies?",
      options: ["Cyber libel", "Improper disposal", "Data interference under RA 10175", "Cyber-squatting"],
      correctAnswer: 2,
      explanation: "Unauthorized modification of electronic student records is data interference because it compromises the integrity of computer data.",
      reference: "RA 10175, Section 4(a)(3)"
    },
    {
      id: "q75",
      type: "true_false",
      question: "A firm intentionally withholds breach information to prevent customers from leaving. Under RA 10173, this act is punishable.",
      correctAnswer: true,
      explanation: "Knowingly concealing a legally notifiable security breach involving sensitive personal information can be punishable under RA 10173. Notification criteria and statutory elements must be satisfied.",
      reference: "RA 10173, Section 30"
    },
    {
      id: "q76",
      type: "multiple_select",
      question: "Which practices demonstrate accountability under RA 10173?",
      options: [
        "Hiding security breaches",
        "Conducting privacy impact assessments",
        "Appointing a DPO",
        "Documenting breach notifications"
      ],
      correctAnswer: [1, 2, 3],
      explanation: "Privacy impact assessments, DPO designation, and documenting notification procedures demonstrate structured privacy compliance. Concealing reportable breaches conflicts with accountability.",
      reference: "RA 10173, Sections 20–21; NPC Accountability Framework"
    },
    {
      id: "q77",
      type: "true_false",
      question: "A company hides a breach until after quarterly earnings are reported to avoid stock price drops. This concealment violates RA 10173.",
      correctAnswer: true,
      explanation: "A financial motivation does not excuse concealment of a qualifying personal data breach. Organizations must comply with applicable reporting duties.",
      reference: "RA 10173, Sections 20 and 30"
    },
    {
      id: "q78",
      type: "true_false",
      question: "A school shares student grades with third-party advertisers. This is lawful as long as students are informed.",
      correctAnswer: false,
      explanation: "Transparency alone does not authorize the sharing of student academic records with advertisers. Disclosure requires an appropriate lawful basis and legitimate purpose.",
      reference: "RA 10173, Sections 11–12"
    },
    {
      id: "q79",
      type: "true_false",
      question: "A company encrypts personal data but does not conduct security audits. This still satisfies accountability under RA 10173.",
      correctAnswer: false,
      explanation: "Encryption is only one safeguard. Accountability involves a broader set of security controls, risk management, monitoring, and measures demonstrating compliance.",
      reference: "RA 10173, Sections 20–21; NPC Security Guidance"
    },
    {
      id: "q80",
      type: "multiple_choice",
      question: "A retailer encrypts all customer data but neglects to train staff on phishing risks. Which security gap persists?",
      options: ["Forensic readiness", "Containment", "Human factor vulnerability", "Portability"],
      correctAnswer: 2,
      explanation: "Employees remain vulnerable to phishing and social engineering when security awareness training is neglected, even if stored data is encrypted.",
      reference: "Module 3, Security Awareness and Incident Prevention"
    },
    {
      id: "q81",
      type: "multiple_choice",
      question: "A hospital's IT team notices unusual outbound traffic but dismisses it as \"normal fluctuations.\" Days later, patient records are leaked online. Which IR stage failed?",
      options: ["Recovery", "Notification", "Lessons learned", "Identification"],
      correctAnswer: 3,
      explanation: "Identification involves detecting and analyzing suspicious activity. Ignoring abnormal outbound traffic can allow an ongoing data breach to remain undetected.",
      reference: "Module 3, Incident Response, Identification"
    },
    {
      id: "q82",
      type: "multiple_choice",
      question: "A DPO reports a confirmed breach to NPC within 72 hours but fails to notify affected data subjects. Which compliance failure remains?",
      options: ["Timeliness", "Data subject notification", "Eradication", "Containment"],
      correctAnswer: 1,
      explanation: "When mandatory notification criteria are met, notifying the NPC does not eliminate the separate obligation to inform affected data subjects.",
      reference: "RA 10173, Section 20(f); NPC Circular 16-03"
    },
    {
      id: "q83",
      type: "true_false",
      question: "A student uses another person's ID to apply for online loans. This constitutes identity theft under RA 10175.",
      correctAnswer: true,
      explanation: "Using another person's identifying information without authorization to obtain loans can constitute computer-related identity theft.",
      reference: "RA 10175, Section 4(b)(3)"
    },
    {
      id: "q84",
      type: "multiple_choice",
      question: "A hacker sells stolen medical records on the dark web. Which violations apply?",
      options: ["RA 8792 only", "RA 10173 and RA 10175", "RA 9775 only", "RA 8293 and RA 4200"],
      correctAnswer: 1,
      explanation: "Unauthorized hacking and data theft may violate RA 10175, while unlawful processing or disclosure of medical records may trigger RA 10173 provisions.",
      reference: "RA 10173, Sections 13 and 25; RA 10175, Section 4"
    },
    {
      id: "q85",
      type: "multiple_choice",
      question: "A hacker modifies a transportation company's website to mislead passengers. Which cybercrime applies?",
      options: ["Cyber libel", "Identity theft", "Improper disposal", "System interference under RA 10175"],
      correctAnswer: 3,
      explanation: "Unauthorized modification of website content directly fits data interference under RA 10175. System interference, the closest supplied choice, requires hindering or disrupting system functioning. The question does not establish that additional element.",
      reference: "RA 10175, Sections 4(a)(3)–(4)"
    },
    {
      id: "q86",
      type: "multiple_select",
      question: "Which are phases of the incident response cycle?",
      options: ["Recovery and lessons learned", "Identification", "Containment", "Marketing and advertising"],
      correctAnswer: [0, 1, 2],
      explanation: "Identification, containment, recovery, and lessons learned are components of incident response. Marketing and advertising are not incident response phases.",
      reference: "Module 3, Incident Response Cycle"
    },
    {
      id: "q87",
      type: "multiple_choice",
      question: "A foreign hacker defaces a Philippine government site. Which laws apply?",
      options: [
        "RA 4200 only",
        "RA 10175 and RA 10173 if personal data exposed",
        "RA 8792 only",
        "RA 8293 only"
      ],
      correctAnswer: 1,
      explanation: "Unauthorized website defacement can implicate RA 10175. RA 10173 may also apply when the incident involves personal data subject to its protections and jurisdictional requirements.",
      reference: "RA 10175, Section 4; RA 10173, Sections 6 and 20"
    },
    {
      id: "q88",
      type: "true_false",
      question: "A student records a teacher's lecture without consent for study purposes. This act violates RA 4200.",
      correctAnswer: false,
      explanation: "RA 4200 concerns specified unauthorized recording or interception of private communications. An ordinary classroom lecture is not automatically a private communication under that law, though school rules and other rights may apply.",
      reference: "RA 4200, Section 1"
    },
    {
      id: "q89",
      type: "multiple_choice",
      question: "A bank hires a third-party vendor to process loan data without a binding privacy agreement. This is a violation of:",
      options: [
        "Intellectual property code",
        "Proportionality",
        "Accountability in outsourcing under RA 10173",
        "Wiretapping prohibition"
      ],
      correctAnswer: 2,
      explanation: "Personal information controllers remain accountable for outsourced processing and must require appropriate safeguards and processing agreements from vendors.",
      reference: "RA 10173, Sections 14 and 21"
    },
    {
      id: "q90",
      type: "multiple_choice",
      question: "A hacker manipulates a power company's control system, disrupting supply. Which violation applies?",
      options: ["Improper disposal", "Transparency breach", "Cyber libel", "System interference under RA 10175"],
      correctAnswer: 3,
      explanation: "Unauthorized manipulation of a control system that disrupts service availability can constitute system interference under RA 10175.",
      reference: "RA 10175, Section 4(a)(4)"
    },
    {
      id: "q91",
      type: "multiple_choice",
      question: "An e-commerce company adds new purposes for data use without informing customers. Which principle is violated?",
      options: ["Accountability", "Security safeguards", "Transparency", "Proportionality"],
      correctAnswer: 2,
      explanation: "Transparency requires communicating processing purposes to individuals. Undisclosed secondary use may also violate legitimate-purpose requirements.",
      reference: "RA 10173, Section 11"
    },
    {
      id: "q92",
      type: "multiple_choice",
      question: "A bank customer discovers unauthorized withdrawals due to phishing. Which cybercrime offense is applicable?",
      options: ["Voyeurism", "Cyber libel", "Improper disposal", "Computer-related fraud under RA 10175"],
      correctAnswer: 3,
      explanation: "Phishing-based financial theft may involve computer-related fraud when deceptive manipulation of computer data or systems results in fraudulent loss.",
      reference: "RA 10175, Section 4(b)(2)"
    },
    {
      id: "q93",
      type: "multiple_choice",
      question: "A retail chain implements encryption and access controls to prevent breaches. These measures fall under which principle of data protection?",
      options: ["Accountability", "Proportionality", "Transparency", "Security safeguards"],
      correctAnswer: 3,
      explanation: "Encryption and access controls are technical safeguards protecting the confidentiality, integrity, and availability of personal information.",
      reference: "RA 10173, Section 20"
    },
    {
      id: "q94",
      type: "multiple_choice",
      question: "A marketing firm collects more data than necessary from clients \"for possible future use.\" Which principle under RA 10173 is breached?",
      options: ["Transparency", "Proportionality", "Portability", "Accountability"],
      correctAnswer: 1,
      explanation: "Collecting excessive personal information for vague future purposes violates proportionality, which requires data collection to be necessary and relevant.",
      reference: "RA 10173, Section 11"
    },
    {
      id: "q95",
      type: "multiple_choice",
      question: "A ransomware attack disables a hospital's emergency systems. The IR team pays ransom but fails to strengthen future defenses. Which essential step is missing?",
      options: ["Containment", "Identification", "Notification", "Lessons learned"],
      correctAnswer: 3,
      explanation: "Lessons learned involves reviewing incidents and improving preventive controls. Paying a ransom neither guarantees recovery nor addresses the vulnerabilities that caused the attack.",
      reference: "Module 3, Incident Response, Lessons Learned"
    },
    {
      id: "q96",
      type: "multiple_choice",
      question: "A hacker exploits weak Wi-Fi security in a hospital, exposing patient data. Which laws are implicated?",
      options: ["RA 10173 and RA 10175", "RA 9775 only", "RA 8293 and RA 8792", "RA 4200 and RA 9995"],
      correctAnswer: 0,
      explanation: "Unauthorized access to hospital systems can violate RA 10175, while exposure of patient information engages protection and accountability requirements under RA 10173.",
      reference: "RA 10175, Section 4(a)(1); RA 10173, Section 20"
    },
    {
      id: "q97",
      type: "true_false",
      question: "A bank publishes names of clients with unpaid loans online. This is a violation of RA 10173.",
      correctAnswer: true,
      explanation: "Publishing identifiable debt information without a valid lawful basis can violate privacy and confidentiality requirements. Debt collection does not automatically authorize public disclosure.",
      reference: "RA 10173, Sections 11–12"
    },
    {
      id: "q98",
      type: "multiple_choice",
      question: "A hospital suffers a breach and informs the media but not the NPC. Which requirement under RA 10173 is violated?",
      options: [
        "Proportionality principle",
        "Transparency principle",
        "Accountability",
        "Mandatory breach notification to NPC"
      ],
      correctAnswer: 3,
      explanation: "Where the breach meets mandatory notification criteria, media reporting does not replace the obligation to notify the National Privacy Commission.",
      reference: "RA 10173, Section 20(f); NPC Circular 16-03"
    },
    {
      id: "q99",
      type: "multiple_select",
      question: "Which best practices belong to \"lessons learned\" in IR?",
      options: [
        "Training employees after breaches",
        "Documenting response actions",
        "Updating security policies",
        "Ignoring root cause analysis"
      ],
      correctAnswer: [0, 1, 2],
      explanation: "Lessons learned includes documenting the response, updating security policies, and improving employee training. Root cause analysis should be performed rather than ignored.",
      reference: "Module 3, Incident Response, Lessons Learned"
    },
    {
      id: "q100",
      type: "true_false",
      question: "A telecom company intercepted text messages of its users without consent. This act is covered by RA 4200.",
      correctAnswer: true,
      explanation: "Unauthorized interception of private communications can implicate RA 4200. For nonpublic computer-data transmissions, RA 10175 Section 4(a)(2) also specifically addresses illegal interception. The exact legal provision depends on how the messages were intercepted.",
      reference: "RA 4200; RA 10175, Section 4(a)(2)"
    }
  ]
});
