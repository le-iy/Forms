
window.PandoraQuizzes.register({
  id: "IT0204-M04-F05",
  subject: "IT0204",
  module: 4,
  title: "Formative Assessment 5",
  kind: "formative",
  version: 1,
  description: "30-item formative assessment covering cybersecurity compliance frameworks, ISO security standards, PCI DSS, HIPAA, COSO, COBIT, and NIST CSF. Original score: 29.33/30.",
  createdAt: "2026-11-08T09:12:00+08:00",
  showOnHome: true,

  questions: [
    {
      id: "q1",
      type: "multiple_choice",
      question: "A credit card breach occurred in a retailer due to weak encryption. Which mandatory standard was breached?",
      options: [
        "ISO 27001",
        "PCI DSS",
        "HIPAA",
        "COBIT"
      ],
      correctAnswer: 1,
      explanation: "PCI DSS establishes security requirements for protecting payment card data, including appropriate encryption and data protection controls.",
      reference: "PCI DSS — Protect Account Data"
    },
    {
      id: "q2",
      type: "true_false",
      question: "COSO emphasizes enterprise-wide internal control and risk management.",
      correctAnswer: true,
      explanation: "COSO provides frameworks for internal control and enterprise risk management, helping organizations manage risks across business operations.",
      reference: "COSO — Internal Control and Enterprise Risk Management"
    },
    {
      id: "q3",
      type: "multiple_select",
      question: "Which requirements are part of HIPAA safeguards?",
      options: [
        "Administrative safeguards",
        "Technical safeguards",
        "Physical safeguards",
        "Supplier relationship audits"
      ],
      correctAnswer: [0, 1, 2],
      explanation: "The HIPAA Security Rule identifies administrative, physical, and technical safeguards for protecting electronic protected health information. Supplier relationship audits are not one of these three safeguard categories.",
      reference: "HHS — HIPAA Security Rule"
    },
    {
      id: "q4",
      type: "multiple_choice",
      question: "A financial institution evaluates how IT processes align with enterprise objectives. Which framework fits best?",
      options: [
        "HIPAA",
        "COBIT",
        "COSO",
        "ISO 27040"
      ],
      correctAnswer: 1,
      explanation: "COBIT provides a governance and management framework for aligning enterprise information technology with organizational goals.",
      reference: "ISACA — COBIT Framework"
    },
    {
      id: "q5",
      type: "true_false",
      question: "A cloud provider applying ISO 27017 and ISO 27018 is addressing both cloud security and privacy.",
      correctAnswer: true,
      explanation: "ISO 27017 provides cloud-specific information security controls, while ISO 27018 addresses the protection of personally identifiable information in public cloud environments.",
      reference: "ISO/IEC 27017; ISO/IEC 27018"
    },
    {
      id: "q6",
      type: "multiple_choice",
      question: "A telecom SOC integrates continuous monitoring and threat hunting. Which NIST function aligns?",
      options: [
        "Identify",
        "Detect",
        "Respond",
        "Protect"
      ],
      correctAnswer: 1,
      explanation: "The NIST CSF Detect function focuses on discovering and analyzing potential cybersecurity attacks and incidents, including continuous security monitoring.",
      reference: "NIST Cybersecurity Framework 2.0 — Detect"
    },
    {
      id: "q7",
      type: "multiple_choice",
      question: "A company adopts both COSO and COBIT. COSO will focus on governance and risk management, while COBIT will emphasize:",
      options: [
        "Payment card compliance",
        "IT governance and control alignment",
        "Application development",
        "Cloud privacy"
      ],
      correctAnswer: 1,
      explanation: "COBIT focuses on governance and management of enterprise IT, including aligning IT controls and processes with business objectives.",
      reference: "COSO; ISACA COBIT"
    },
    {
      id: "q8",
      type: "multiple_choice",
      question: "Which ISO standard addresses best practices for cloud privacy?",
      options: [
        "ISO 27017",
        "ISO 27018",
        "ISO 27040",
        "ISO 27036"
      ],
      correctAnswer: 1,
      explanation: "ISO 27018 provides guidance for protecting personal information handled by public cloud service providers.",
      reference: "ISO/IEC 27018"
    },
    {
      id: "q9",
      type: "true_false",
      question: "A company using COBIT ensures IT processes align with business objectives.",
      correctAnswer: true,
      explanation: "COBIT helps organizations align IT governance, management activities, and controls with enterprise objectives.",
      reference: "ISACA — COBIT Framework"
    },
    {
      id: "q10",
      type: "multiple_choice",
      question: "Which ISO framework serves as a privacy framework supporting Data Privacy Law compliance?",
      options: [
        "ISO 27040",
        "ISO 29100",
        "ISO 27017",
        "COBIT"
      ],
      correctAnswer: 1,
      explanation: "ISO 29100 provides a privacy framework and privacy principles that organizations can use to support compliance with applicable data protection laws.",
      reference: "ISO/IEC 29100 — Privacy Framework"
    },
    {
      id: "q11",
      type: "multiple_choice",
      question: "A health insurance firm in the U.S. encrypts patient claims data. Which regulation directly requires this?",
      options: [
        "PCI DSS",
        "HIPAA",
        "ISO 27040",
        "COBIT"
      ],
      correctAnswer: 1,
      explanation: "HIPAA is the relevant U.S. healthcare regulation. Its Security Rule includes encryption as an addressable implementation specification, meaning entities must assess its appropriateness and implement it where reasonable or document an appropriate alternative.",
      reference: "HHS — HIPAA Security Rule, Technical Safeguards"
    },
    {
      id: "q12",
      type: "multiple_choice",
      question: "A SOC requires robust incident response team services. Which compliance strategy supports this?",
      options: [
        "PCI DSS",
        "HIPAA",
        "Incident Response Team Services in compliance programs",
        "ISO 27018"
      ],
      correctAnswer: 2,
      explanation: "Incident Response Team Services support the preparation, investigation, containment, and management of cybersecurity incidents within an organization's compliance program.",
      reference: "IT0204 — Compliance Program Strategies and Incident Response"
    },
    {
      id: "q13",
      type: "multiple_choice",
      question: "A retailer using third-party suppliers is advised to conduct compliance checks. Which ISO addresses this?",
      options: [
        "ISO 27034",
        "ISO 27017",
        "ISO 27036",
        "ISO 27033"
      ],
      correctAnswer: 2,
      explanation: "ISO 27036 provides guidance for information security in supplier relationships, including managing security requirements associated with third parties.",
      reference: "ISO/IEC 27036 — Supplier Relationships"
    },
    {
      id: "q14",
      type: "multiple_choice",
      question: "Which ISO standard provides controls for managing supplier relationships securely?",
      options: [
        "ISO 27017",
        "ISO 27034",
        "ISO 27036",
        "ISO 27018"
      ],
      correctAnswer: 2,
      explanation: "ISO 27036 addresses information security considerations for supplier relationships and agreements.",
      reference: "ISO/IEC 27036"
    },
    {
      id: "q15",
      type: "multiple_choice",
      question: "Which ISO guideline supports implementation of ISMS by providing practical guidance?",
      options: [
        "ISO 27001",
        "ISO 27040",
        "ISO 27003",
        "ISO 27034"
      ],
      correctAnswer: 2,
      explanation: "ISO 27003 provides guidance on implementing an information security management system, while ISO 27001 specifies ISMS requirements.",
      reference: "ISO/IEC 27003 — ISMS Implementation Guidance"
    },
    {
      id: "q16",
      type: "multiple_select",
      question: "Which practices align with PCI DSS compliance?",
      options: [
        "Encrypting transmission of cardholder data",
        "Maintaining strong firewall policies",
        "Restricting access to cardholder information",
        "Publishing customer data online"
      ],
      correctAnswer: [0, 1, 2],
      explanation: "PCI DSS includes requirements for protecting cardholder data during transmission, implementing network security controls, and restricting access to account data. Publishing customer data online is not an acceptable security practice.",
      reference: "PCI DSS — Network Security, Data Protection, and Access Controls"
    },
    {
      id: "q17",
      type: "multiple_select",
      question: "Which actions are violations of PCI DSS?",
      options: [
        "Storing unencrypted cardholder data",
        "Weak firewall configurations",
        "Ignoring access control rules",
        "Regular penetration testing"
      ],
      correctAnswer: [0, 1, 2],
      explanation: "Inadequately protecting stored cardholder data, weak network security configurations, and failure to enforce access controls can violate PCI DSS. Regular penetration testing is a security assessment practice.",
      reference: "PCI DSS — Data Protection, Network Security, Access Controls, and Security Testing"
    },
    {
      id: "q18",
      type: "multiple_select",
      question: "Which are NIST CSF core functions?",
      options: [
        "Identify",
        "Protect",
        "Respond",
        "Audit"
      ],
      correctAnswer: [0, 1, 2],
      explanation: "Identify, Protect, and Respond are NIST CSF core functions. Audit is not a named core function. NIST CSF 2.0 includes Govern, Identify, Protect, Detect, Respond, and Recover.",
      reference: "NIST Cybersecurity Framework 2.0"
    },
    {
      id: "q19",
      type: "multiple_choice",
      question: "A firm adopts ISO 27002. What does this provide?",
      options: [
        "ISMS requirements",
        "Security control best practices (Code of Practice)",
        "Application secure coding",
        "Incident recovery"
      ],
      correctAnswer: 1,
      explanation: "ISO 27002 provides a reference set of information security controls and guidance on implementing them. ISO 27001 defines ISMS requirements.",
      reference: "ISO/IEC 27002 — Information Security Controls"
    },
    {
      id: "q20",
      type: "multiple_choice",
      question: "A firm evaluates potential privacy risks in business processes and creates safeguards. Which ISO framework supports this?",
      options: [
        "ISO 27017",
        "ISO 27040",
        "ISO 29100",
        "ISO 27018"
      ],
      correctAnswer: 2,
      explanation: "ISO 29100 provides general privacy principles and a framework for identifying privacy considerations and supporting appropriate safeguards.",
      reference: "ISO/IEC 29100 — Privacy Framework"
    },
    {
      id: "q21",
      type: "multiple_choice",
      question: "A developer team integrates secure coding practices and validation into every project stage. Which ISO covers this?",
      options: [
        "ISO 27017",
        "ISO 27036",
        "ISO 27034",
        "ISO 27018"
      ],
      correctAnswer: 2,
      explanation: "ISO 27034 addresses application security, including integrating security practices into application development and management processes.",
      reference: "ISO/IEC 27034 — Application Security"
    },
    {
      id: "q22",
      type: "true_false",
      question: "ISO 27040 addresses privacy in supplier relationships.",
      correctAnswer: false,
      explanation: "ISO 27040 concerns storage security. Supplier relationship security is primarily addressed by ISO 27036.",
      reference: "ISO/IEC 27040; ISO/IEC 27036"
    },
    {
      id: "q23",
      type: "true_false",
      question: "A company that integrates incident response services into compliance programs is aligning with best practices.",
      correctAnswer: true,
      explanation: "Including incident response capabilities supports timely detection, containment, recovery, and continued improvement in an organizational security compliance program.",
      reference: "IT0204 — Incident Response Services and Compliance Programs"
    },
    {
      id: "q24",
      type: "true_false",
      question: "A retailer implements PCI DSS but fails to update firewalls regularly. This is still acceptable under the PCI DSS framework.",
      correctAnswer: false,
      explanation: "PCI DSS requires organizations to maintain secure network configurations and manage relevant security vulnerabilities. Neglecting firewall maintenance can create a compliance gap.",
      reference: "PCI DSS — Network Security Controls and Vulnerability Management"
    },
    {
      id: "q25",
      type: "multiple_choice",
      question: "Which ISO provides guidelines on network security architecture, design, and operations?",
      options: [
        "ISO 27040",
        "ISO 27034",
        "ISO 27033",
        "ISO 27036"
      ],
      correctAnswer: 2,
      explanation: "ISO 27033 provides guidance on network security, including network architecture, design, implementation, and security controls.",
      reference: "ISO/IEC 27033 — Network Security"
    },
    {
      id: "q26",
      type: "true_false",
      question: "PCI DSS applies only to government agencies.",
      correctAnswer: false,
      explanation: "PCI DSS applies to organizations that store, process, or transmit payment card account data, regardless of whether they are government or private entities.",
      reference: "PCI DSS — Applicability"
    },
    {
      id: "q27",
      type: "multiple_choice",
      question: "A multinational uses the NIST CSF to improve response capabilities. Which function includes developing communication plans for incidents?",
      options: [
        "Detect",
        "Protect",
        "Recover",
        "Respond"
      ],
      correctAnswer: 3,
      explanation: "The Respond function includes incident management, mitigation, reporting, and communication during cybersecurity incidents.",
      reference: "NIST Cybersecurity Framework 2.0 — Respond"
    },
    {
      id: "q28",
      type: "multiple_choice",
      question: "A startup is designing secure applications following international best practices. Which ISO standard should it adopt?",
      options: [
        "ISO 27036",
        "ISO 27034",
        "ISO 27040",
        "ISO 27017"
      ],
      correctAnswer: 1,
      explanation: "ISO 27034 provides guidance for integrating security into application development and related processes.",
      reference: "ISO/IEC 27034 — Application Security"
    },
    {
      id: "q29",
      type: "multiple_select",
      question: "Which documents belong to a Data Privacy Compliance Folder?",
      options: [
        "Standard Tree",
        "Configuration Inventory",
        "Policy References",
        "Customer marketing reports"
      ],
      correctAnswer: [0, 1, 2],
      explanation: "A Data Privacy Compliance Folder organizes documents that help an organization demonstrate and maintain data privacy compliance. The Standard Tree provides an organized structure of applicable privacy standards and requirements. The Configuration Inventory documents information systems, assets, and their configurations to support security and accountability. Policy References provide the guidelines and regulatory sources used when developing compliance policies. Customer marketing reports are excluded because they primarily concern marketing performance rather than privacy compliance documentation.",
      reference: "IT0204 — Data Privacy Compliance Folder"
    },
    {
      id: "q30",
      type: "true_false",
      question: "A SOC that monitors continuously but lacks incident response is still fully compliant with NIST CSF.",
      correctAnswer: false,
      explanation: "Continuous monitoring supports Detect, but a comprehensive NIST CSF-aligned program also addresses Respond. Monitoring alone does not cover incident response capabilities.",
      reference: "NIST Cybersecurity Framework 2.0 — Detect and Respond"
    }
  ]
});
