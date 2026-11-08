
window.PandoraQuizzes.register({
  id: "IT0204-M04-LQ01",
  subject: "IT0204",
  module: 4,
  title: "Long Quiz 1",
  kind: "summative",
  version: 1,
  description: "Long Quiz 1 covering Philippine data privacy, cybercrime laws, data subject rights, accountability, proportionality, and security compliance. Modules 1–4.",
  createdAt: "2026-11-07T01:00:00+08:00",
  showOnHome: true,

  questions: [
    {
      id: "q1",
      type: "multiple_choice",
      question: "An employer records employees’ phone calls without informing them. Which law is violated?",
      options: ["RA 8293", "RA 10173 only", "RA 8792 only", "RA 4200 (anti-wiretapping)"],
      correctAnswer: 3,
      explanation: "RA 4200 prohibits unauthorized secret interception or recording of private communications, including telephone conversations.",
      reference: "RA 4200, Section 1; Module 4, Philippine Cybersecurity-Related Laws"
    },
    {
      id: "q2",
      type: "multiple_choice",
      question: "A student discovers their school posting exam scores publicly with names. This violates which data privacy principle?",
      options: ["Transparency", "Portability", "Legitimate purpose", "Proportionality"],
      correctAnswer: 0,
      explanation: "Public disclosure of identifiable grades without appropriate notice or authorization can violate transparency. Legitimate purpose and confidentiality are also relevant.",
      reference: "RA 10173, Sections 11 and 32; Module 4, pp. 10 and 23"
    },
    {
      id: "q3",
      type: "multiple_choice",
      question: "An LGU employee intentionally leaks the list of COVID-19 positive residents online. This act is considered:",
      options: ["Malicious disclosure under RA 10173", "Negligent access", "Improper disposal", "Identity theft"],
      correctAnswer: 0,
      explanation: "Deliberate disclosure of confidential health information may constitute malicious disclosure when the requirements of Section 31 are established. Health information is sensitive personal information.",
      reference: "RA 10173, Sections 3, 13 and 31; Module 4, p. 23"
    },
    {
      id: "q4",
      type: "multiple_choice",
      question: "A city mayor orders the IT team to publish all tax records of residents online for transparency, without consent. Which principle is violated?",
      options: ["Accountability", "Portability", "Transparency under RA 10173", "Legitimate purpose"],
      correctAnswer: 3,
      explanation: "Government transparency does not automatically justify publishing identifiable tax records. Processing and disclosure must have a lawful and legitimate purpose.",
      reference: "RA 10173, Sections 11–12; Module 4, p. 10"
    },
    {
      id: "q5",
      type: "multiple_choice",
      question: "A politician’s critics create fake Twitter accounts using his name to spread misinformation. Which violation applies?",
      options: ["Improper disposal", "Cyber libel", "Malicious disclosure", "Identity theft under RA 10175"],
      correctAnswer: 3,
      explanation: "RA 10175 penalizes computer-related identity theft involving the intentional acquisition, use, misuse, transfer, possession, alteration or deletion of another person's identifying information without right. Fake accounts may qualify if the statutory elements are satisfied; criticism alone does not.",
      reference: "RA 10175, Section 4(b)(3); Module 4, Cybercrime Prevention Act"
    },
    {
      id: "q6",
      type: "multiple_choice",
      question: "A government IT staff improperly disposes of old hard drives containing sensitive voter data. Which violation occurs?",
      options: ["Improper disposal under RA 10173", "Transparency", "Negligent access", "Identity theft"],
      correctAnswer: 0,
      explanation: "Improper disposal occurs when personal information is discarded without sufficient protection against unauthorized retrieval or access.",
      reference: "RA 10173, Section 27; Module 4, p. 22"
    },
    {
      id: "q7",
      type: "multiple_select",
      question: "Which practices strengthen compliance with RA 10173?",
      options: [
        "Refusing to respond to NPC investigations",
        "Training employees on data privacy",
        "Appointing a DPO",
        "Conducting regular privacy impact assessments"
      ],
      correctAnswer: [1, 2, 3],
      explanation: "Employee training, DPO designation and privacy impact assessments support accountability and compliance. Refusing lawful NPC investigations undermines compliance.",
      reference: "Module 4, pp. 25–26, Data Privacy Accountability and Compliance"
    },
    {
      id: "q8",
      type: "true_false",
      question: "A celebrity's ex-partner uploads private photos without consent. This violates RA 9995.",
      correctAnswer: false,
      explanation: "RA 9995 specifically addresses recordings of sexual acts or private body areas in circumstances covered by the Anti-Photo and Video Voyeurism Act. The statement says only 'private photos' and does not establish those necessary elements. Other privacy laws may apply.",
      reference: "RA 9995, Sections 3–4; Philippine Commission on Women"
    },
    {
      id: "q9",
      type: "multiple_choice",
      question: "A media company posts names of child abuse victims in a news article without consent. Which law is violated?",
      options: ["RA 8792", "RA 4200", "RA 9775", "RA 8293"],
      correctAnswer: 2,
      explanation: "RA 9775 provides identity protections for victims in child pornography cases, including restrictions on publication in specified proceedings. However, the question describes child abuse generally rather than specifically child pornography, so the facts do not conclusively establish an RA 9775 violation.",
      reference: "RA 9775, Section 13(e); Anti-Child Pornography Act"
    },
    {
      id: "q10",
      type: "multiple_choice",
      question: "A call center outsources customer data handling to a foreign contractor without a binding contract on privacy compliance. Which issue arises?",
      options: ["Transparency", "Accountability in outsourcing", "Portability", "Data erasure rights"],
      correctAnswer: 1,
      explanation: "Personal information controllers remain accountable when processing is outsourced and must establish appropriate contractual obligations and safeguards.",
      reference: "RA 10173, Sections 14 and 21; Module 4, pp. 10 and 14"
    },
    {
      id: "q11",
      type: "multiple_choice",
      question: "An NPC audit reveals that a company collects far more data than it needs for its operations. Which principle under RA 10173 is breached?",
      options: ["Proportionality", "Portability", "Transparency", "Accountability"],
      correctAnswer: 0,
      explanation: "Proportionality requires that collected personal data be adequate, relevant, suitable and not excessive in relation to its declared purpose.",
      reference: "RA 10173, Section 11; Module 4, pp. 10 and 16"
    },
    {
      id: "q12",
      type: "multiple_choice",
      question: "A foreign-owned BPO transfers Filipino customer data to its headquarters abroad without ensuring adequate safeguards. Which compliance issue arises?",
      options: ["Lack of transparency", "Cross-border data transfer violation", "Improper disposal", "Identity theft"],
      correctAnswer: 1,
      explanation: "Cross-border transfers require appropriate security and accountability. Philippine personal information controllers remain responsible for data protection even when processing occurs abroad.",
      reference: "RA 10173, Section 21; Module 2, Cross-Border Data Transfers"
    },
    {
      id: "q13",
      type: "multiple_choice",
      question: "A business keeps employee data beyond the retention period, even though it is no longer needed. Which principle is violated?",
      options: ["Legitimate purpose", "Transparency", "Proportionality", "Accountability"],
      correctAnswer: 2,
      explanation: "Unnecessary retention violates proportionality and data minimization requirements. Personal information should not be retained indefinitely without a valid justification.",
      reference: "RA 10173, Section 11; Module 4, Data Privacy Principles"
    },
    {
      id: "q14",
      type: "multiple_choice",
      question: "A cybercriminal redirects online banking users to a fake login page to steal credentials. This is:",
      options: ["Improper disposal", "Phishing (computer-related fraud)", "Identity theft", "Cyber-squatting"],
      correctAnswer: 1,
      explanation: "Phishing deceives users into revealing confidential information through fraudulent websites or communications. Related conduct may establish computer-related fraud.",
      reference: "RA 10175, Section 4(b)(2); Module 3, p. 22, Phishing"
    },
    {
      id: "q15",
      type: "true_false",
      question: "A BPO designates a Data Protection Officer to oversee compliance with RA 10173. This is a required best practice.",
      correctAnswer: true,
      explanation: "DPO designation is part of the Philippine data privacy accountability framework and supports organizational oversight of privacy compliance.",
      reference: "Module 4, p. 26, Data Privacy Accountability and Compliance; NPC DPO guidance"
    },
    {
      id: "q16",
      type: "multiple_select",
      question: "Which actions align with the right to erasure?",
      options: [
        "Removing old student files after graduation",
        "Refusing to delete data to maximize profits",
        "Transferring personal data to another service",
        "Deleting a user’s records upon consent withdrawal"
      ],
      correctAnswer: [0, 3],
      explanation: "Erasure involves removing personal data when there is an applicable basis for deletion, such as data no longer being necessary or a valid request following withdrawal of consent. Graduation alone does not automatically require deletion if retention remains lawful.",
      reference: "RA 10173, Section 16; Module 4, pp. 11–12"
    },
    {
      id: "q17",
      type: "multiple_select",
      question: "Which demonstrate transparency violations under RA 10173?",
      options: [
        "Hiding the purpose of processing from employees",
        "Failing to inform customers why their data is collected",
        "Providing clients with access to their records",
        "Disclosing processing purposes clearly in a privacy notice"
      ],
      correctAnswer: [0, 1],
      explanation: "Transparency requires organizations to provide meaningful information about their processing activities. Concealing or failing to explain processing purposes undermines this principle.",
      reference: "RA 10173, Sections 11 and 16; Module 4, p. 10"
    },
    {
      id: "q18",
      type: "true_false",
      question: "A retail store collects only names and phone numbers from customers for order delivery. This complies with proportionality.",
      correctAnswer: true,
      explanation: "Collecting limited information reasonably necessary for order delivery is consistent with proportionality, assuming those details are actually needed and processed lawfully.",
      reference: "RA 10173, Section 11; Module 4, p. 16"
    },
    {
      id: "q19",
      type: "multiple_choice",
      question: "A private investigator intercepts text messages between two individuals without judicial authorization. Which law is violated?",
      options: ["RA 4200", "RA 10173", "RA 8792", "RA 8293"],
      correctAnswer: 0,
      explanation: "RA 4200 prohibits specified unauthorized interception of private communications. For technical interception of nonpublic computer-data transmissions, RA 10175 Section 4(a)(2) may be more directly applicable; the question does not distinguish the methods used.",
      reference: "RA 4200, Section 1; RA 10175, Section 4(a)(2)"
    },
    {
      id: "q20",
      type: "multiple_choice",
      question: "A BPO fails to appoint a Data Protection Officer despite handling millions of records. This violates:",
      options: ["RA 8792", "RA 4200", "RA 10173", "RA 8293"],
      correctAnswer: 2,
      explanation: "A BPO processing large volumes of personal information has organizational data protection responsibilities, including appropriate DPO designation under the Philippine privacy framework.",
      reference: "RA 10173; NPC DPO guidance; Module 4, p. 26"
    },
    {
      id: "q21",
      type: "true_false",
      question: "A cybercriminal installs ransomware to lock a hospital's system until payment is made. This falls under system interference.",
      correctAnswer: true,
      explanation: "Ransomware that disrupts the functioning or availability of computer systems can constitute system interference under the Cybercrime Prevention Act.",
      reference: "RA 10175, Section 4(a)(4)"
    },
    {
      id: "q22",
      type: "multiple_choice",
      question: "A BPO staff gains access to client data for work but later uses it to apply for loans. This is:",
      options: ["Legitimate purpose violation", "Improper disposal", "Transparency breach", "Identity theft under RA 10175"],
      correctAnswer: 0,
      explanation: "Using client data for personal loan applications is an unauthorized secondary purpose. Identity theft may also occur if the employee impersonates clients or misuses their identifying information, but the question does not explicitly establish that conduct.",
      reference: "RA 10173, Sections 11 and 28; RA 10175, Section 4(b)(3)"
    },
    {
      id: "q23",
      type: "true_false",
      question: "A company claims ownership of customer data and denies their right to access it. This is consistent with RA 10173.",
      correctAnswer: false,
      explanation: "The Data Privacy Act grants data subjects a qualified right of access to their personal information. A company's claimed ownership does not override statutory rights.",
      reference: "RA 10173, Section 16; Module 4, pp. 11–12"
    },
    {
      id: "q24",
      type: "multiple_select",
      question: "Which actions constitute improper disposal under RA 10173?",
      options: [
        "Wiping storage devices before resale",
        "Deleting files securely from encrypted drives",
        "Selling used hard drives with intact personal data",
        "Throwing unshredded hospital records in a public dumpster"
      ],
      correctAnswer: [2, 3],
      explanation: "Selling drives containing recoverable personal information or discarding unshredded sensitive records exposes data to unauthorized access. Secure wiping and deletion are protective measures.",
      reference: "RA 10173, Section 27; Module 4, p. 22"
    },
    {
      id: "q25",
      type: "true_false",
      question: "A government agency failed to inform the NPC of a massive breach within 72 hours, arguing that it was still under internal investigation. This is still a violation of RA 10173.",
      correctAnswer: true,
      explanation: "A qualifying personal data breach generally must be reported to the NPC within the required period. Ongoing investigation does not automatically excuse noncompliance, although reporting rules recognize specific conditions and exceptions.",
      reference: "RA 10173, Section 20; NPC Circular 16-03; Module 4, p. 26"
    },
    {
      id: "q26",
      type: "true_false",
      question: "A bank encrypts all customer records and performs annual security audits. This aligns with the accountability principle under RA 10173.",
      correctAnswer: true,
      explanation: "Security safeguards and periodic audits demonstrate an organization's efforts to protect personal information and maintain accountability.",
      reference: "RA 10173, Sections 20–21; Module 4, pp. 14 and 26"
    },
    {
      id: "q27",
      type: "multiple_choice",
      question: "A person secretly records a phone conversation with a journalist without consent. Which law applies?",
      options: ["RA 4200", "RA 9995", "RA 10173", "RA 10175"],
      correctAnswer: 0,
      explanation: "The Anti-Wiretapping Act prohibits unauthorized secret recording of private communications, including private telephone conversations.",
      reference: "RA 4200, Section 1"
    },
    {
      id: "q28",
      type: "multiple_choice",
      question: "A public hospital hires an external vendor to manage patient records but fails to sign a Data Sharing Agreement. This is a violation of:",
      options: ["RA 4200", "RA 10173 (accountability in outsourcing)", "RA 8792", "RA 8293"],
      correctAnswer: 1,
      explanation: "Outsourced processing requires appropriate contractual controls and accountability under RA 10173. A data processing agreement, rather than a data sharing agreement, is ordinarily the relevant instrument when a vendor processes data on the hospital's instructions.",
      reference: "RA 10173, Sections 14 and 21; Module 4, pp. 10 and 14"
    },
    {
      id: "q29",
      type: "multiple_choice",
      question: "A BPO processes sensitive health data without obtaining explicit consent from customers. What is the violation?",
      options: [
        "Unauthorized processing of sensitive personal information",
        "Improper disposal",
        "Transparency",
        "Identity theft"
      ],
      correctAnswer: 0,
      explanation: "Sensitive health information requires a valid legal basis and compliance with RA 10173 Section 13. Explicit consent is one possible basis, but specified statutory exceptions may also authorize processing.",
      reference: "RA 10173, Sections 13 and 25; Module 4, p. 10"
    },
    {
      id: "q30",
      type: "multiple_choice",
      question: "A university stores student medical histories without informing the students and later shares the data with pharmaceutical companies. Which principle under RA 10173 is violated?",
      options: ["Transparency", "Legitimate purpose", "Proportionality", "Accountability"],
      correctAnswer: 0,
      explanation: "Failing to inform students about collection and disclosure violates transparency. Sharing medical information for an unauthorized secondary purpose can also violate legitimate purpose and sensitive-data protections.",
      reference: "RA 10173, Sections 11 and 13; Module 4, p. 10"
    },
    {
      id: "q31",
      type: "multiple_choice",
      question: "A credit company continues processing data of a client who already withdrew consent. Which right is violated?",
      options: ["Right to rectification", "Right to access", "Right to portability", "Right to object"],
      correctAnswer: 3,
      explanation: "The right to object protects data subjects against certain processing activities. Withdrawal of consent also removes that lawful basis, though processing can continue where another valid legal basis applies.",
      reference: "RA 10173, Sections 12 and 16; Module 4, pp. 11–12"
    },
    {
      id: "q32",
      type: "multiple_choice",
      question: "A government agency refuses to correct inaccurate citizen records after repeated requests. Which right under RA 10173 is violated?",
      options: ["Right to portability", "Right to erasure", "Right to rectification", "Right to object"],
      correctAnswer: 2,
      explanation: "The right to rectification allows individuals to dispute and request correction of inaccurate or incomplete personal information.",
      reference: "RA 10173, Section 16; Module 4, p. 12"
    },
    {
      id: "q33",
      type: "true_false",
      question: "A website posts defamatory statements about a politician. This can be cyber libel under RA 10175.",
      correctAnswer: true,
      explanation: "Online defamatory statements may constitute cyber libel under RA 10175 when the required elements are proven. Cases involving public officials and public figures require careful consideration of free expression and actual malice.",
      reference: "RA 10175, Section 4(c)(4); Revised Penal Code, Articles 353–355; Supreme Court jurisprudence"
    },
    {
      id: "q34",
      type: "multiple_choice",
      question: "A scammer impersonates a legitimate bank to steal login credentials. This is an example of:",
      options: ["Cyber libel", "Cyber-squatting", "Malicious disclosure", "Phishing (computer-related fraud)"],
      correctAnswer: 3,
      explanation: "Phishing involves impersonating a trusted entity to deceive users into revealing credentials or other confidential information.",
      reference: "RA 10175, Section 4(b)(2); Module 3, p. 22"
    },
    {
      id: "q35",
      type: "multiple_choice",
      question: "A teacher posts students’ full names and failing grades on Facebook. This violates which law?",
      options: ["RA 10175", "RA 10173", "RA 8792", "RA 8293"],
      correctAnswer: 1,
      explanation: "Posting identifiable student academic records without lawful authorization can violate Philippine data privacy and disclosure obligations.",
      reference: "RA 10173, Sections 11, 12 and 32; Module 4, p. 23"
    },
    {
      id: "q36",
      type: "multiple_select",
      question: "Which laws protect privileged communication?",
      options: [
        "RA 8293 – Intellectual Property Code",
        "RA 10173 – Data Privacy Act (digital extension)",
        "RA 4200 – Anti-Wiretapping Act",
        "RA 8792 – E-Commerce Act"
      ],
      correctAnswer: [1, 2],
      explanation: "RA 10173 Section 15 extends protection of privileged information in applicable processing contexts, while RA 4200 protects the privacy of certain communications against unauthorized interception. They provide different forms of protection.",
      reference: "RA 10173, Section 15; RA 4200, Section 1; Module 4, p. 10"
    },
    {
      id: "q37",
      type: "true_false",
      question: "A private citizen secretly records a couple’s phone call and sells it to tabloids. This violates RA 4200.",
      correctAnswer: true,
      explanation: "Unauthorized recording and subsequent disclosure of private telephone communications can violate the Anti-Wiretapping Act.",
      reference: "RA 4200, Section 1"
    },
    {
      id: "q38",
      type: "multiple_choice",
      question: "An insurance company refuses to provide a customer with access to their medical records. Which right is violated?",
      options: ["Right to erasure", "Right to access", "Right to portability", "Right to object"],
      correctAnswer: 1,
      explanation: "The right to access allows individuals to request their personal information, subject to lawful exceptions and verification procedures.",
      reference: "RA 10173, Section 16; Module 4, p. 12"
    },
    {
      id: "q39",
      type: "multiple_select",
      question: "Which scenarios violate the proportionality principle under RA 10173?",
      options: [
        "Collecting only delivery addresses for shipping",
        "Collecting all possible customer data for future use",
        "Keeping old employee records beyond retention period",
        "Deleting expired health files"
      ],
      correctAnswer: [1, 2],
      explanation: "Indiscriminate data collection and unjustified retention exceed what is necessary for specified purposes. Appropriate collection and secure deletion support compliance.",
      reference: "RA 10173, Section 11; Module 4, p. 16"
    },
    {
      id: "q40",
      type: "multiple_choice",
      question: "A celebrity's intimate video is leaked online by a former partner. Which law specifically penalizes this act?",
      options: ["RA 9775", "RA 4200", "RA 9995", "RA 8792"],
      correctAnswer: 2,
      explanation: "RA 9995 penalizes specified unauthorized sharing and publication of intimate videos, even where the recording was originally made with consent.",
      reference: "RA 9995, Sections 3–4; Anti-Photo and Video Voyeurism Act"
    },
    {
      id: "q41",
      type: "true_false",
      question: "A teacher posts photos of students' exam papers with names and scores online. This violates RA 10173.",
      correctAnswer: true,
      explanation: "Publishing identifiable student examination records without appropriate authorization can constitute unlawful disclosure of personal information.",
      reference: "RA 10173, Sections 11 and 32; Module 4, p. 23"
    },
    {
      id: "q42",
      type: "true_false",
      question: "A cybercriminal uses another person's identity to open online bank accounts. This is punishable as identity theft under RA 10175.",
      correctAnswer: true,
      explanation: "Using another person's identifying information without right to create online financial accounts can constitute computer-related identity theft.",
      reference: "RA 10175, Section 4(b)(3)"
    },
    {
      id: "q43",
      type: "multiple_choice",
      question: "A man secretly videotapes women inside a public restroom and uploads it online. Which laws apply?",
      options: ["RA 4200 only", "RA 8293 and RA 8792", "RA 10173 only", "RA 9995 and RA 10175"],
      correctAnswer: 3,
      explanation: "RA 9995 may apply to nonconsensual recordings of intimate areas where privacy is reasonably expected, including a restroom. Additional liability under RA 10175 depends on an independently applicable cybercrime provision; uploading the footage alone does not automatically establish every cybercrime offense.",
      reference: "RA 9995, Sections 3–4; RA 10175"
    },
    {
      id: "q44",
      type: "multiple_choice",
      question: "A private citizen creates a blog mocking a senator and is charged with online defamation. Which law applies?",
      options: ["RA 4200", "RA 8792", "RA 8293", "RA 10175"],
      correctAnswer: 3,
      explanation: "RA 10175 governs cyber libel. However, merely mocking a senator is not automatically criminal defamation; prosecution must establish the legal elements, including the relevant constitutional standards for public officials.",
      reference: "RA 10175, Section 4(c)(4); Supreme Court jurisprudence on actual malice"
    },
    {
      id: "q45",
      type: "multiple_choice",
      question: "A hospital deletes old patient data after 10 years of storage in compliance with policy. This demonstrates:",
      options: ["Unauthorized processing", "Negligent disposal", "System interference", "Proportionality principle"],
      correctAnswer: 3,
      explanation: "Deleting records once the authorized retention period has ended demonstrates appropriate retention management and proportionality, assuming the policy satisfies applicable medical record retention laws.",
      reference: "RA 10173, Section 11; Module 4, Data Privacy Principles"
    },
    {
      id: "q46",
      type: "multiple_choice",
      question: "A blogger posts unverified allegations online damaging a celebrity's reputation. Which cybercrime is this?",
      options: ["Cyber libel", "Identity theft", "Cyber-squatting", "Misuse of devices"],
      correctAnswer: 0,
      explanation: "Cyber libel involves defamatory online publication meeting the required legal elements. Unverified allegations and reputational harm alone do not conclusively establish criminal liability.",
      reference: "RA 10175, Section 4(c)(4); Revised Penal Code, Articles 353–355"
    },
    {
      id: "q47",
      type: "multiple_choice",
      question: "A company posts outdated employee records on its public website, accessible to anyone. This is a violation of:",
      options: ["RA 8293", "RA 10173 (improper disclosure)", "RA 4200", "RA 8792"],
      correctAnswer: 1,
      explanation: "Making employee records publicly accessible without authorization or another lawful basis can violate the Data Privacy Act's security and disclosure requirements.",
      reference: "RA 10173, Sections 11, 20 and 32"
    },
    {
      id: "q48",
      type: "true_false",
      question: "A government website was defaced by activists to show political slogans. This is considered data interference.",
      correctAnswer: true,
      explanation: "Unauthorized website defacement involves alteration of electronic data and may constitute data interference. It can also involve illegal access or system interference depending on the conduct.",
      reference: "RA 10175, Section 4(a)(3); Module 3, p. 23"
    },
    {
      id: "q49",
      type: "multiple_choice",
      question: "A bank's online platform suffers hacking, exposing clients' addresses and credit card details. Which two laws are implicated?",
      options: [
        "RA 8293 and RA 9775",
        "RA 10173 and RA 10175",
        "RA 4200 and RA 8792",
        "RA 8792 and RA 8293"
      ],
      correctAnswer: 1,
      explanation: "RA 10175 addresses illegal access and related cybercrime, while RA 10173 governs the protection and lawful processing of affected personal information.",
      reference: "RA 10173, Section 20; RA 10175, Section 4"
    },
    {
      id: "q50",
      type: "multiple_choice",
      question: "A local IT manager ignores repeated NPC compliance orders to designate a DPO. Which issue arises?",
      options: ["Right to portability", "Privileged communication breach", "Non-compliance with RA 10173", "Improper disposal"],
      correctAnswer: 2,
      explanation: "Failure to comply with applicable NPC directives and DPO-related obligations constitutes regulatory noncompliance under the Philippine data privacy framework.",
      reference: "RA 10173; NPC DPO guidance; Module 4, p. 26"
    },
    {
      id: "q51",
      type: "multiple_select",
      question: "Which scenarios involve unauthorized processing of sensitive personal information?",
      options: [
        "Using employee health data in performance reviews without consent",
        "Encrypting medical records for security",
        "Deleting outdated files securely",
        "Sharing patient records with pharmaceutical companies without consent"
      ],
      correctAnswer: [0, 3],
      explanation: "Using health records for unauthorized employment assessments or sharing patient information for unrelated purposes can violate sensitive-data processing restrictions. Appropriate encryption and secure deletion are protective activities.",
      reference: "RA 10173, Sections 13, 25 and 28; Module 4, p. 22"
    },
    {
      id: "q52",
      type: "multiple_choice",
      question: "A hacker infiltrates a hospital database and alters medical records. Which RA 10175 offense applies?",
      options: ["Cyber-squatting", "Child pornography", "Data interference", "Cyber libel"],
      correctAnswer: 2,
      explanation: "Unauthorized alteration or damage of computer data constitutes data interference under RA 10175.",
      reference: "RA 10175, Section 4(a)(3)"
    },
    {
      id: "q53",
      type: "true_false",
      question: "An IT staff deletes outdated files containing sensitive data according to retention policy. This demonstrates proper disposal under RA 10173.",
      correctAnswer: true,
      explanation: "Removing data when its authorized retention period ends supports proper disposal, provided deletion is performed securely and applicable retention requirements are satisfied.",
      reference: "RA 10173, Sections 11, 20 and 27"
    },
    {
      id: "q54",
      type: "multiple_select",
      question: "Which scenarios illustrate cyber libel?",
      options: [
        "Defacing a government website",
        "Publishing false damaging stories online about a rival company",
        "Sending phishing emails",
        "Posting defamatory remarks on Facebook against a public figure"
      ],
      correctAnswer: [1, 3],
      explanation: "Online defamatory publications may constitute cyber libel if the legal elements are established. Defacement and phishing are different categories of cybercrime. Statements about public figures require additional constitutional scrutiny.",
      reference: "RA 10175, Section 4(c)(4); Revised Penal Code, Articles 353–355"
    },
    {
      id: "q55",
      type: "true_false",
      question: "An ISP blocks access to child pornography websites. This is consistent with RA 9775.",
      correctAnswer: true,
      explanation: "RA 9775 requires internet service providers to take specified measures against child pornography, including blocking or filtering identified websites in accordance with the law.",
      reference: "RA 9775, Section 9"
    },
    {
      id: "q56",
      type: "multiple_choice",
      question: "An online gaming platform allows minors to sign up without parental consent and collects their personal data. This violates:",
      options: ["RA 10173", "RA 8293", "RA 9995", "RA 8792"],
      correctAnswer: 0,
      explanation: "RA 10173 regulates personal data collection, including information relating to children. Whether parental consent is legally necessary depends on age, lawful basis, capacity to consent and the circumstances; minors' registration alone does not conclusively establish a violation.",
      reference: "RA 10173, Sections 11–13; NPC guidance on children's personal data"
    },
    {
      id: "q57",
      type: "multiple_choice",
      question: "An online seller registers the domain \"pnbsavings.com.ph\" to trick customers into thinking it is a real bank website. What cybercrime is committed?",
      options: ["Cyber-squatting", "Identity theft", "System interference", "Phishing"],
      correctAnswer: 0,
      explanation: "Bad-faith registration of a domain name confusingly similar to a legitimate organization's name or trademark may constitute cyber-squatting. A phishing offense may also occur if the domain is used to deceive customers.",
      reference: "RA 10175, Section 4(a)(6)"
    },
    {
      id: "q58",
      type: "true_false",
      question: "A company performs quarterly privacy impact assessments. This aligns with NPC's accountability framework.",
      correctAnswer: true,
      explanation: "Privacy impact assessments help identify and address privacy risks. Performing them periodically supports accountability, although quarterly assessment is not universally mandated.",
      reference: "Module 4, pp. 25–26, Data Privacy Accountability and Compliance"
    },
    {
      id: "q59",
      type: "true_false",
      question: "A parent posts their child's report card publicly on social media with the child's full name. This violates RA 10173.",
      correctAnswer: false,
      explanation: "The DPA generally excludes personal information processing by individuals in connection with personal, family or household affairs from the definition of a personal information controller. A parent's personal posting is therefore not automatically a DPA violation, though exposing the child's information may create privacy risks.",
      reference: "RA 10173, Section 3(h); National Privacy Commission"
    },
    {
      id: "q60",
      type: "multiple_choice",
      question: "A celebrity sues a blogger for publishing a false rumor online that damaged reputation. This falls under:",
      options: ["Identity theft", "Cyber libel under RA 10175", "Malicious disclosure", "Cyber-squatting"],
      correctAnswer: 1,
      explanation: "Cyber libel addresses defamatory online statements when statutory elements, including publication and applicable fault requirements, are met.",
      reference: "RA 10175, Section 4(c)(4); Revised Penal Code, Articles 353–355"
    },
    {
      id: "q61",
      type: "true_false",
      question: "A business ignores customer requests to delete their old records. This violates the right to erasure under RA 10173.",
      correctAnswer: true,
      explanation: "Data subjects may request erasure or blocking when the conditions in RA 10173 are satisfied. Businesses must assess valid requests and cannot disregard them without a legitimate legal basis for retaining the data.",
      reference: "RA 10173, Section 16; Module 4, p. 12"
    },
    {
      id: "q62",
      type: "multiple_select",
      question: "Which are examples of negligent access?",
      options: [
        "Encrypting sensitive records before storage",
        "Shredding old medical files",
        "A staff emails health data to the wrong recipient",
        "An employee leaves printed client files in public"
      ],
      correctAnswer: [2, 3],
      explanation: "Accidentally disclosing health records to the wrong recipient or leaving client documents exposed may reflect negligent handling of personal information. Encryption and shredding are protective measures.",
      reference: "RA 10173, Section 26; Module 4, p. 21"
    },
    {
      id: "q63",
      type: "multiple_choice",
      question: "A lawyer records confidential client meetings online without the client's knowledge. Which laws are potentially violated?",
      options: ["RA 8792 only", "RA 10173 only", "RA 8293", "RA 10173 and RA 4200"],
      correctAnswer: 3,
      explanation: "RA 10173 protects privileged personal information, while RA 4200 prohibits specified unauthorized recording of private spoken communications. Their application depends on the precise recording and processing circumstances.",
      reference: "RA 10173, Sections 13 and 15; RA 4200, Section 1"
    },
    {
      id: "q64",
      type: "multiple_select",
      question: "Which are punishable under RA 9995 (Anti-Photo and Video Voyeurism Act)?",
      options: [
        "Broadcasting a government press conference",
        "Uploading private sex videos without consent",
        "Secretly recording intimate acts and sharing them online",
        "Publishing scientific research photos"
      ],
      correctAnswer: [1, 2],
      explanation: "RA 9995 penalizes unauthorized recording, copying, distribution, or publication of intimate recordings covered by its statutory definitions.",
      reference: "RA 9995, Sections 3–4"
    },
    {
      id: "q65",
      type: "true_false",
      question: "A hacker deletes crucial files in a university system. This is data interference under RA 10175.",
      correctAnswer: true,
      explanation: "Unauthorized deletion or destruction of computer data is expressly covered by the data interference offense.",
      reference: "RA 10175, Section 4(a)(3)"
    },
    {
      id: "q66",
      type: "multiple_choice",
      question: "An LGU staff intentionally leaks confidential medical records of citizens for revenge. Which law applies?",
      options: ["RA 8792", "RA 9775", "RA 8293", "RA 10173 (malicious disclosure)"],
      correctAnswer: 3,
      explanation: "Intentional disclosure of confidential sensitive personal information out of malice can constitute malicious disclosure when the statutory requirements are met.",
      reference: "RA 10173, Section 31; Module 4, p. 23"
    },
    {
      id: "q67",
      type: "true_false",
      question: "A hacker infiltrates an airport system and disrupts its operations. This is considered system interference under RA 10175.",
      correctAnswer: true,
      explanation: "Unauthorized disruption of a computer system's functioning is covered by the system interference provisions of the Cybercrime Prevention Act.",
      reference: "RA 10175, Section 4(a)(4)"
    },
    {
      id: "q68",
      type: "multiple_choice",
      question: "A political group hacks a rival's website to deface it with propaganda. Which RA 10175 offense applies?",
      options: ["Identity theft", "Cyber-squatting", "Cyber libel", "System interference"],
      correctAnswer: 3,
      explanation: "Unauthorized website defacement can involve system interference where the functioning of a computer system is hindered. The unauthorized alteration of website data can also qualify as data interference.",
      reference: "RA 10175, Section 4(a)(3)–(4)"
    },
    {
      id: "q69",
      type: "multiple_select",
      question: "Which security measures align with RA 10173?",
      options: [
        "Conducting regular security audits",
        "Encryption of sensitive personal information",
        "Selling user data to third parties",
        "Implementing strict access controls"
      ],
      correctAnswer: [0, 1, 3],
      explanation: "Security auditing, encryption, and appropriate access controls are measures supporting the protection of personal information. Selling data without a lawful basis does not constitute a security safeguard.",
      reference: "RA 10173, Section 20; Module 4, p. 26"
    },
    {
      id: "q70",
      type: "multiple_choice",
      question: "A social media company requires users to provide home addresses before creating an account, even though it is not necessary for the service. Which principle is violated?",
      options: ["Security safeguards", "Proportionality", "Consent validity", "Transparency"],
      correctAnswer: 1,
      explanation: "Collecting information that is unnecessary for a service exceeds the requirements of proportionality and data minimization.",
      reference: "RA 10173, Section 11; Module 4, p. 16"
    },
    {
      id: "q71",
      type: "multiple_choice",
      question: "A university requires students to provide parents' income tax returns before enrollment, even if not necessary for admission. Which principle is breached?",
      options: ["Transparency", "Security safeguards", "Proportionality", "Accountability"],
      correctAnswer: 2,
      explanation: "Requiring unnecessary tax records collects more personal information than is relevant or needed for the stated enrollment purpose.",
      reference: "RA 10173, Section 11; Module 4, Data Privacy Principles"
    },
    {
      id: "q72",
      type: "multiple_choice",
      question: "A foreign tech company keeps Filipino users' personal data indefinitely, even if no longer necessary. Which principle is violated?",
      options: ["Legitimate purpose", "Proportionality", "Transparency", "Portability"],
      correctAnswer: 1,
      explanation: "Retaining personal information after it is no longer needed is inconsistent with proportionality and appropriate retention limits. Philippine privacy obligations may apply to foreign entities under applicable jurisdictional conditions.",
      reference: "RA 10173, Sections 6 and 11"
    },
    {
      id: "q73",
      type: "multiple_choice",
      question: "A student creates a fake Facebook profile to impersonate a teacher and post defamatory content. Which law applies?",
      options: ["RA 10175", "RA 8293", "RA 4200", "RA 8792"],
      correctAnswer: 0,
      explanation: "RA 10175 addresses computer-related identity theft and cyber libel when their respective legal elements are established.",
      reference: "RA 10175, Sections 4(b)(3) and 4(c)(4)"
    },
    {
      id: "q74",
      type: "true_false",
      question: "A company sells customer data to advertisers without consent. This is lawful as long as profits are shared with government.",
      correctAnswer: false,
      explanation: "Sharing profits with government does not create a lawful basis for disclosing customer data. Processing remains subject to transparency, legitimate purpose and applicable authorization requirements.",
      reference: "RA 10173, Sections 11–12"
    },
    {
      id: "q75",
      type: "multiple_choice",
      question: "A marketing firm refuses to delete customer data even after the client withdraws consent. Which right is violated?",
      options: ["Right to object", "Right to portability", "Right to rectification", "Right to erasure"],
      correctAnswer: 3,
      explanation: "The right to erasure permits deletion requests under applicable conditions. Withdrawal of consent may support erasure where no other lawful retention basis remains.",
      reference: "RA 10173, Section 16; Module 4, p. 12"
    },
    {
      id: "q76",
      type: "multiple_choice",
      question: "A hacker alters a university's admission results in its database. Which cybercrime is committed?",
      options: ["Cyber-squatting", "Identity theft", "Data interference", "Cyber libel"],
      correctAnswer: 2,
      explanation: "Unauthorized modification of electronic records or database information constitutes data interference.",
      reference: "RA 10175, Section 4(a)(3)"
    },
    {
      id: "q77",
      type: "true_false",
      question: "A group creates a fake email pretending to be the NPC to gather personal data. This is identity theft under RA 10175.",
      correctAnswer: true,
      explanation: "Impersonating an institution to solicit personal information is phishing. It may also involve computer-related identity theft when identifying information is used or misused without right, though impersonation alone does not automatically establish all elements.",
      reference: "RA 10175, Section 4(b)(3); Module 3, p. 22"
    },
    {
      id: "q78",
      type: "multiple_choice",
      question: "A teacher publicly posts students' report cards with full grades. This violates:",
      options: ["RA 8792", "RA 4200", "RA 8293", "RA 10173 (data privacy)"],
      correctAnswer: 3,
      explanation: "Unauthorized disclosure of identifiable student grades and academic records can violate the Philippine Data Privacy Act.",
      reference: "RA 10173, Sections 11, 12 and 32"
    },
    {
      id: "q79",
      type: "multiple_choice",
      question: "A hospital discovers a ransomware attack but informs the NPC after five days. What is the violation?",
      options: [
        "Improper disposal",
        "Failure to notify within 72 hours",
        "Unauthorized processing",
        "Concealment of breach"
      ],
      correctAnswer: 1,
      explanation: "For breaches meeting the NPC's mandatory notification criteria, notification is generally required within 72 hours. A five-day delay may violate the rules unless an applicable exception or permissible delay applies. Ransomware alone does not automatically trigger notification.",
      reference: "RA 10173, Section 20; NPC Circular 16-03"
    },
    {
      id: "q80",
      type: "multiple_choice",
      question: "A hacker defaces the website of a political candidate during elections. This is punishable under:",
      options: ["RA 10175 (system interference)", "RA 9995", "RA 4200", "RA 8293"],
      correctAnswer: 0,
      explanation: "Unauthorized website defacement may constitute system interference under RA 10175, particularly where the site's operation is disrupted. Unauthorized alteration of its content may also qualify as data interference.",
      reference: "RA 10175, Section 4(a)(3)–(4)"
    }
  ]
});
