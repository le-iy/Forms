
window.PandoraQuizzes.register({
  id: "IT0204-M03-F03",
  subject: "IT0204",
  module: 3,
  title: "Formative 3",
  kind: "formative",
  version: 1,
  description: "Module 3 formative assessment covering incident response planning, breach investigation, notification requirements, security incidents, and high-profile data breaches.",
  createdAt: "2026-11-07T01:00:00+08:00",
  showOnHome: true,

  questions: [
    {
      id: "q1",
      type: "true_false",
      question: "If an organization keeps a detailed incident response log, it can be used as legal evidence later.",
      correctAnswer: true,
      explanation: "Incident response logs document events, timestamps, actions, and evidence collected during an incident. Properly preserved logs may support investigations and legal proceedings, subject to authenticity and admissibility requirements.",
      reference: "Module 3, Incident Documentation and Digital Forensics"
    },
    {
      id: "q2",
      type: "multiple_choice",
      question: "What is the main purpose of incident assessment?",
      options: [
        "Rebuild all servers immediately",
        "Determine scope, impact, and severity",
        "Avoid regulator involvement",
        "Pay ransom if demanded"
      ],
      correctAnswer: 1,
      explanation: "Incident assessment determines the scope, impact, and severity of a security incident. This helps the response team prioritize actions, allocate resources, and decide whether escalation or notification is required.",
      reference: "Module 3, Incident Assessment and Identification"
    },
    {
      id: "q3",
      type: "multiple_choice",
      question: "Which breach involved attackers injecting malicious scripts into an airline's website to capture card details?",
      options: [
        "Yahoo",
        "Marriott",
        "Equifax",
        "British Airways"
      ],
      correctAnswer: 3,
      explanation: "The 2018 British Airways breach involved malicious JavaScript inserted into its website and payment-related systems. Attackers used the compromised pages to capture customers' payment information.",
      reference: "Module 3, British Airways Data Breach Case Study; UK ICO, British Airways Enforcement"
    },
    {
      id: "q4",
      type: "multiple_choice",
      question: "A company hires a digital forensics team to analyze a breached database. Which phase of IRP is this?",
      options: [
        "Recovery",
        "Containment",
        "Identification and Investigation",
        "Lessons Learned"
      ],
      correctAnswer: 2,
      explanation: "Identification and investigation involve analyzing incident evidence to determine what happened, which systems were affected, and how attackers gained access. Digital forensics supports these activities.",
      reference: "Module 3, Incident Response Plan, Identification and Investigation"
    },
    {
      id: "q5",
      type: "true_false",
      question: "An organization using tabletop exercises to simulate attacks is engaging in proactive preparation.",
      correctAnswer: true,
      explanation: "Tabletop exercises simulate security incidents so response teams can practice their roles, test procedures, and identify weaknesses before actual attacks occur.",
      reference: "Module 3, Incident Response Preparation"
    },
    {
      id: "q6",
      type: "multiple_choice",
      question: "An organization creates policies, forms a Computer Security Incident Response Team (CSIRT), and trains employees. Which IRP phase does this represent?",
      options: [
        "Containment",
        "Recovery",
        "Lessons Learned",
        "Preparation"
      ],
      correctAnswer: 3,
      explanation: "Preparation establishes the policies, personnel, tools, and training needed before an incident. Creating a CSIRT and training employees are core readiness activities.",
      reference: "Module 3, Incident Response Plan, Preparation Phase"
    },
    {
      id: "q7",
      type: "multiple_choice",
      question: "Which IRP phase ensures continuity of critical operations while incidents are addressed?",
      options: [
        "Eradication",
        "Recovery",
        "Containment",
        "Lessons Learned"
      ],
      correctAnswer: 2,
      explanation: "Containment limits the spread and impact of an incident while protecting unaffected systems and critical services. Recovery subsequently restores affected operations.",
      reference: "Module 3, Incident Response Plan, Containment Phase"
    },
    {
      id: "q8",
      type: "multiple_choice",
      question: "A financial firm discovers hackers exploiting an unpatched vulnerability. What must be done after containment?",
      options: [
        "Notify DPAs",
        "Rebuild network immediately",
        "Eradicate the root cause",
        "Publicly disclose the incident"
      ],
      correctAnswer: 2,
      explanation: "Eradication addresses the underlying cause of an incident, including exploited vulnerabilities, malware, and compromised accounts. Patching the vulnerability helps prevent attackers from returning.",
      reference: "Module 3, Incident Response Plan, Eradication Phase"
    },
    {
      id: "q9",
      type: "multiple_select",
      question: "Which of the following are responsibilities of Data Protection Authorities (DPAs)?",
      options: [
        "Investigate breaches",
        "Enforce compliance with privacy laws",
        "Impose fines and penalties",
        "Restore company systems after an attack"
      ],
      correctAnswer: [0, 1, 2],
      explanation: "Data Protection Authorities investigate privacy violations, monitor and enforce compliance, and may impose administrative fines or other corrective measures. Restoring a company's computer systems is the organization's responsibility.",
      reference: "Module 3, Data Protection Authorities; GDPR Articles 57–58; European Data Protection Board, GDPR Enforcement"
    },
    {
      id: "q10",
      type: "multiple_select",
      question: "In breach notifications under the Philippine DPA 2012, which information must be provided?",
      options: [
        "Nature of the breach",
        "Number of individuals affected",
        "Measures taken by the organization",
        "Organization's market share"
      ],
      correctAnswer: [0, 1, 2],
      explanation: "NPC Circular 16-03 requires breach notification reports to describe the nature of the breach, the approximate number of affected data subjects or records, and measures taken or proposed to address the incident. Market share is unrelated to notification requirements.",
      reference: "Module 3, Breach Notification; NPC Circular 16-03, Section 17; DPA IRR, Section 39"
    },
    {
      id: "q11",
      type: "multiple_select",
      question: "Which incidents specifically involved credit card theft?",
      options: [
        "British Airways",
        "Target (reference example)",
        "Yahoo",
        "Marriott"
      ],
      correctAnswer: [0, 1],
      explanation: "The British Airways breach involved payment card information captured through compromised web pages. The 2013 Target breach involved attackers stealing payment card data from point-of-sale systems. Yahoo and Marriott are primarily associated with other categories of compromised personal information.",
      reference: "Module 3, British Airways and Target Data Breach Case Studies"
    },
    {
      id: "q12",
      type: "multiple_choice",
      question: "Which law requires notification of a data breach to a supervisory authority within 72 hours?",
      options: [
        "HIPAA",
        "GDPR",
        "CCPA",
        "Philippine DPA 2012"
      ],
      correctAnswer: 1,
      explanation: "GDPR Article 33 requires notification of qualifying personal data breaches to the competent supervisory authority without undue delay and, where feasible, within 72 hours. The Philippine DPA framework also has a 72-hour notification requirement for qualifying breaches, but GDPR is the intended answer because the question specifically refers to a supervisory authority.",
      reference: "Module 3, Breach Notification Laws; GDPR Article 33; NPC Circular 16-03"
    },
    {
      id: "q13",
      type: "true_false",
      question: "A company immediately notifies customers about a suspected breach even before confirming it. This may cause panic but fulfills notification duties.",
      correctAnswer: true,
      explanation: "Prompt notification can fulfill breach notification duties when there is reasonable belief that a qualifying personal data breach occurred. Under Philippine rules, absolute confirmation of the incident's full scope is not always required before notification. However, a mere unsupported suspicion does not automatically trigger mandatory reporting, and notification must provide accurate available information.",
      reference: "Module 3, Breach Notification; NPC Circular 16-03, Sections 11, 17–18"
    },
    {
      id: "q14",
      type: "multiple_choice",
      question: "Which breach showed failure to secure passport data during hotel bookings?",
      options: [
        "Equifax",
        "Marriott",
        "Yahoo",
        "British Airways"
      ],
      correctAnswer: 1,
      explanation: "The Marriott/Starwood breach exposed hotel reservation information, including passport numbers belonging to guests. It highlighted the need for strong protection of sensitive hospitality records.",
      reference: "Module 3, Marriott Data Breach Case Study"
    },
    {
      id: "q15",
      type: "true_false",
      question: "Lessons Learned meetings should include both technical and non-technical staff.",
      correctAnswer: true,
      explanation: "Post-incident reviews benefit from participation by technical responders, management, legal personnel, communications teams, and other affected departments. Their combined perspectives help improve future incident response.",
      reference: "Module 3, Incident Response Plan, Lessons Learned Phase"
    },
    {
      id: "q16",
      type: "multiple_choice",
      question: "Which breach response step can be legally required across GDPR, HIPAA, and DPA 2012?",
      options: [
        "Only technical patching",
        "Breach notification to regulators and affected individuals",
        "Hiring new IT staff",
        "Press release"
      ],
      correctAnswer: 1,
      explanation: "GDPR, HIPAA, and the Philippine DPA framework establish breach notification obligations under specified conditions. These can require notifying regulators or authorities and affected individuals, depending on the law and nature of the breach.",
      reference: "Module 3, Breach Notification Laws; GDPR Articles 33–34; HIPAA Breach Notification Rule; RA 10173 Section 20"
    },
    {
      id: "q17",
      type: "multiple_choice",
      question: "Under GDPR, who bears the burden of proving compliance with breach notification rules?",
      options: [
        "Customers",
        "Organizations (Data Controllers)",
        "Regulators",
        "Security vendors"
      ],
      correctAnswer: 1,
      explanation: "Under GDPR's accountability principle, data controllers must demonstrate compliance with applicable data protection requirements. This includes documenting breaches and recording notification decisions.",
      reference: "Module 3, GDPR Accountability; GDPR Articles 5(2) and 33(5)"
    },
    {
      id: "q18",
      type: "true_false",
      question: "Under HIPAA, media outlets must be informed if a breach affects more than 500 people.",
      correctAnswer: true,
      explanation: "HIPAA requires media notification for qualifying breaches of unsecured protected health information affecting more than 500 residents of a single state or jurisdiction. The statement simplifies this geographic requirement and assumes a reportable breach.",
      reference: "Module 3, HIPAA Breach Notification; 45 CFR 164.406; HHS Breach Notification Guidance"
    },
    {
      id: "q19",
      type: "multiple_choice",
      question: "A Philippine hospital loses unencrypted laptops containing patient records. Which step must follow immediately after containment?",
      options: [
        "Notify staff only",
        "Notify NPC and affected patients",
        "Erase all logs",
        "Purchase new hardware"
      ],
      correctAnswer: 1,
      explanation: "After securing the incident, a hospital must assess the exposure and notify the NPC and affected patients when mandatory breach notification criteria are met. Unencrypted patient records can create serious confidentiality and identity-related risks.",
      reference: "Module 3, Incident Response and Notification; RA 10173 Section 20(f); NPC Circular 16-03"
    },
    {
      id: "q20",
      type: "true_false",
      question: "A phishing email campaign should be classified as an intrusion in ETSI categories.",
      correctAnswer: false,
      explanation: "Phishing is categorized separately as a social engineering or fraudulent communication indicator. An intrusion refers to unauthorized access or compromise of a system, which may occur after phishing succeeds.",
      reference: "Module 3, ETSI Security Incident Indicators"
    },
    {
      id: "q21",
      type: "multiple_select",
      question: "Which are common causes of data breaches?",
      options: [
        "Phishing attacks",
        "Unpatched vulnerabilities",
        "Insider threats",
        "Natural disasters"
      ],
      correctAnswer: [0, 1, 2],
      explanation: "Phishing, exploitable software vulnerabilities, and insider threats are common causes of unauthorized access or disclosure of personal data. Natural disasters can cause data loss or availability incidents, but they are not the intended cyberattack-related breach causes in this question.",
      reference: "Module 3, Causes of Security Incidents and Data Breaches"
    },
    {
      id: "q22",
      type: "true_false",
      question: "If an organization contains a breach but does not conduct forensic analysis, the IRP is still complete.",
      correctAnswer: false,
      explanation: "Containment alone does not complete the incident response process. Investigation, appropriate evidence preservation, eradication, recovery, and lessons learned are also important for understanding and addressing the incident.",
      reference: "Module 3, Incident Response Plan, Investigation and Forensics"
    },
    {
      id: "q23",
      type: "true_false",
      question: "The Philippine Data Privacy Act allows organizations to completely skip reporting if only 10 people are affected, even if sensitive data was stolen.",
      correctAnswer: false,
      explanation: "Philippine breach notification obligations are risk-based rather than determined solely by a minimum number of affected individuals. Even a small breach may require notification when the applicable statutory criteria are met.",
      reference: "Module 3, Philippine DPA Breach Notification; RA 10173 Section 20(f); NPC Circular 16-03"
    },
    {
      id: "q24",
      type: "true_false",
      question: "A bank notifies customers within 24 hours of detecting unauthorized ATM withdrawals. This demonstrates strong compliance with incident response.",
      correctAnswer: true,
      explanation: "Prompt notification helps customers protect their accounts and reflects timely incident communication. Full compliance also depends on accurate reporting, containment, and applicable banking and data protection requirements.",
      reference: "Module 3, Incident Response Communication and Notification"
    },
    {
      id: "q25",
      type: "multiple_choice",
      question: "Which IRP step ensures systems are monitored after recovery to detect recurrence?",
      options: [
        "Preparation",
        "Containment",
        "Post-Recovery Monitoring",
        "Eradication"
      ],
      correctAnswer: 2,
      explanation: "Post-recovery monitoring checks restored systems for suspicious behavior, persistent vulnerabilities, or signs of reinfection. It helps confirm that recovery remains effective.",
      reference: "Module 3, Incident Response, Recovery and Monitoring"
    },
    {
      id: "q26",
      type: "multiple_choice",
      question: "Which incident response best practice reduces downtime for critical services?",
      options: [
        "Notify DPAs first",
        "Maintain redundant systems for continuity",
        "Erase logs to protect privacy",
        "Train only executives"
      ],
      correctAnswer: 1,
      explanation: "Redundant systems provide alternative resources when primary systems become unavailable. They support business continuity and can reduce service interruptions during incidents.",
      reference: "Module 3, Business Continuity and Incident Response"
    },
    {
      id: "q27",
      type: "multiple_select",
      question: "What activities should organizations perform during the Preparation phase of IRP?",
      options: [
        "Draft incident response policies",
        "Establish CSIRT teams",
        "Conduct training and simulations",
        "Publicly disclose potential threats"
      ],
      correctAnswer: [0, 1, 2],
      explanation: "Preparation involves creating response procedures, organizing incident response teams, and conducting training and exercises. Public disclosure of potential threats is not a universal preparation requirement.",
      reference: "Module 3, Incident Response Plan, Preparation Phase"
    },
    {
      id: "q28",
      type: "multiple_choice",
      question: "If a hacker uses fake \"Bank Login\" emails to steal credentials, what ETSI indicator is this?",
      options: [
        "Website Forgery",
        "Phishing",
        "Intrusion",
        "DoS Attack"
      ],
      correctAnswer: 1,
      explanation: "Phishing uses deceptive emails or other messages impersonating trusted organizations to trick people into revealing credentials or confidential information.",
      reference: "Module 3, ETSI Security Incident Indicators, Phishing"
    },
    {
      id: "q29",
      type: "multiple_choice",
      question: "What is the main lesson from the Equifax breach?",
      options: [
        "Avoid acquisitions",
        "Patch systems promptly and notify quickly",
        "Outsource all data protection",
        "Avoid DPAs"
      ],
      correctAnswer: 1,
      explanation: "The 2017 Equifax breach exposed the consequences of failing to address a known software vulnerability. It highlighted the importance of timely patch management, effective incident detection, and prompt breach communication.",
      reference: "Module 3, Equifax Data Breach Case Study; FTC Equifax Investigation and Settlement"
    },
    {
      id: "q30",
      type: "true_false",
      question: "An effective IRP requires coordination between technical teams, legal counsel, and communication staff.",
      correctAnswer: true,
      explanation: "Effective incident response requires technical investigation and containment alongside legal assessment, regulatory compliance, and clear stakeholder communication. Coordination helps ensure consistent and timely decisions.",
      reference: "Module 3, Incident Response Team Roles and Responsibilities"
    }
  ]
});
