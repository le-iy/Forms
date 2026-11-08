
window.PandoraQuizzes.register({
  id: "IT0204-M04-S03",
  subject: "IT0204",
  module: 4,
  title: "Summative Assessment 3",
  kind: "summative",
  version: 1,
  description: "100-item assessment on compliance frameworks, ISO standards, HIPAA, PCI DSS, COSO, COBIT, NIST CSF, and organizational privacy programs. Original score: 93/100.",
  createdAt: "2026-11-07T08:36:39+08:00",
  showOnHome: true,

  questions: [
    {
      id: "q1",
      type: "true_false",
      question: "A Philippine hospital using ISO 29100 is applying a global privacy framework that aligns with RA 10173.",
      correctAnswer: true,
      explanation: "ISO/IEC 29100 establishes general privacy principles that support alignment with the Philippine Data Privacy Act. Adopting a standard does not automatically establish legal compliance.",
      reference: "ISO/IEC 29100; Republic Act 10173"
    },
    {
      id: "q2",
      type: "multiple_choice",
      question: "Which compliance framework is mandatory for organizations handling U.S. healthcare data?",
      options: ["HIPAA", "COSO", "PCI DSS", "ISO 27034"],
      correctAnswer: 0,
      explanation: "HIPAA establishes requirements for covered entities and relevant business associates handling protected health information in the United States.",
      reference: "HHS — HIPAA Privacy and Security Rules"
    },
    {
      id: "q3",
      type: "true_false",
      question: "A compliance program that lacks policy updates is still considered complete.",
      correctAnswer: false,
      explanation: "An effective compliance program needs periodic policy reviews and updates to address changing risks and requirements.",
      reference: "IT0204 — Compliance Program Management"
    },
    {
      id: "q4",
      type: "multiple_choice",
      question: "A company strengthens supplier contracts with cybersecurity clauses. This practice is guided by:",
      options: ["COSO", "ISO 27034", "ISO 27036", "ISO 27018"],
      correctAnswer: 2,
      explanation: "ISO/IEC 27036 provides guidance for managing information security in supplier relationships and agreements.",
      reference: "ISO/IEC 27036 — Supplier Relationships"
    },
    {
      id: "q5",
      type: "true_false",
      question: "A healthcare provider using HIPAA administrative, technical, and physical safeguards ensures complete protection of health data.",
      correctAnswer: false,
      explanation: "HIPAA safeguards reduce security risks but cannot guarantee complete protection against every threat.",
      reference: "HHS — HIPAA Security Rule"
    },
    {
      id: "q6",
      type: "true_false",
      question: "ISO 27034 primarily addresses storage encryption.",
      correctAnswer: false,
      explanation: "ISO 27034 addresses application security, whereas ISO 27040 covers storage security.",
      reference: "ISO/IEC 27034; ISO/IEC 27040"
    },
    {
      id: "q7",
      type: "multiple_choice",
      question: "A hospital implements encryption, breach notification, and training. Which law requires these elements?",
      options: ["HIPAA", "ISO 27001", "PCI DSS", "COBIT"],
      correctAnswer: 0,
      explanation: "HIPAA establishes applicable security and workforce training requirements, along with breach notification obligations.",
      reference: "HHS — HIPAA Security Rule and Breach Notification Rule"
    },
    {
      id: "q8",
      type: "multiple_choice",
      question: "A retailer integrates COSO into financial reporting and COBIT into IT governance. Together, they address:",
      options: ["Healthcare and privacy", "Supplier security", "Network and cloud security", "Risk management and IT alignment"],
      correctAnswer: 3,
      explanation: "COSO focuses on enterprise risk and internal controls, while COBIT aligns IT governance with organizational objectives.",
      reference: "COSO; ISACA COBIT"
    },
    {
      id: "q9",
      type: "multiple_select",
      question: "Which ISO standards are privacy-focused?",
      options: ["ISO 27040", "ISO 27701", "ISO 29100", "ISO 27018"],
      correctAnswer: [1, 2, 3],
      explanation: "ISO 27701 covers privacy information management, ISO 29100 privacy principles, and ISO 27018 PII protection in public clouds. ISO 27040 is storage security.",
      reference: "ISO/IEC 27701; ISO/IEC 29100; ISO/IEC 27018"
    },
    {
      id: "q10",
      type: "multiple_select",
      question: "Which ISO standards provide ISMS-related support?",
      options: ["ISO 27018", "ISO 27001", "ISO 27003", "ISO 27002"],
      correctAnswer: [1, 2, 3],
      explanation: "ISO 27001 defines ISMS requirements, ISO 27003 provides implementation guidance, and ISO 27002 provides security control guidance.",
      reference: "ISO/IEC 27001; ISO/IEC 27003; ISO/IEC 27002"
    },
    {
      id: "q11",
      type: "true_false",
      question: "ISO 27017 provides cloud privacy requirements.",
      correctAnswer: false,
      explanation: "ISO 27017 addresses cloud security controls. ISO 27018 specifically addresses protecting personal information in public cloud services.",
      reference: "ISO/IEC 27017; ISO/IEC 27018"
    },
    {
      id: "q12",
      type: "true_false",
      question: "An effective compliance program includes employee training and continuous monitoring.",
      correctAnswer: true,
      explanation: "Training reinforces employee responsibilities and continuous monitoring checks whether controls remain effective.",
      reference: "IT0204 — Effective Compliance Programs"
    },
    {
      id: "q13",
      type: "multiple_select",
      question: "Which are NIST CSF core functions?",
      options: ["Protect", "Respond", "Recover", "Identify"],
      correctAnswer: [0, 1, 2, 3],
      explanation: "All four are NIST CSF functions. NIST CSF 2.0 also includes Govern and Detect.",
      reference: "NIST Cybersecurity Framework 2.0"
    },
    {
      id: "q14",
      type: "multiple_choice",
      question: "Which ISO is dedicated to storage security practices?",
      options: ["ISO 27036", "ISO 27040", "ISO 27033", "ISO 27018"],
      correctAnswer: 1,
      explanation: "ISO 27040 offers security guidance for storage devices, systems, and related services.",
      reference: "ISO/IEC 27040"
    },
    {
      id: "q15",
      type: "multiple_select",
      question: "Which functions are part of the NIST CSF?",
      options: ["Detect", "Protect", "Identify", "Recover"],
      correctAnswer: [0, 1, 2, 3],
      explanation: "Detect, Protect, Identify, and Recover are NIST CSF functions. Respond and Govern are also included in CSF 2.0.",
      reference: "NIST Cybersecurity Framework 2.0"
    },
    {
      id: "q16",
      type: "multiple_select",
      question: "Which are essential elements of an effective compliance program?",
      options: ["Continuous monitoring", "Ignoring supplier risks", "Employee training", "Documented policies"],
      correctAnswer: [0, 2, 3],
      explanation: "Monitoring, employee training, and documented policies support compliance. Ignoring supplier risks undermines it.",
      reference: "IT0204 — Effective Compliance Programs"
    },
    {
      id: "q17",
      type: "multiple_choice",
      question: "A firm adopts ISO 27701. This framework primarily focuses on:",
      options: ["Privacy Information Management", "Supplier risk", "Network design", "Cloud encryption"],
      correctAnswer: 0,
      explanation: "ISO 27701 provides privacy information management requirements and guidance.",
      reference: "ISO/IEC 27701"
    },
    {
      id: "q18",
      type: "true_false",
      question: "COSO is more focused on enterprise risk and financial reporting, while COBIT is focused on IT governance.",
      correctAnswer: true,
      explanation: "COSO addresses enterprise risk and internal control, including financial reporting; COBIT addresses IT governance and management.",
      reference: "COSO; ISACA COBIT"
    },
    {
      id: "q19",
      type: "multiple_select",
      question: "Which frameworks support governance and risk management together?",
      options: ["HIPAA", "COBIT", "PCI DSS", "COSO"],
      correctAnswer: [1, 3],
      explanation: "COBIT supports IT governance while COSO addresses enterprise risk management and internal control.",
      reference: "COSO; ISACA COBIT"
    },
    {
      id: "q20",
      type: "multiple_choice",
      question: "Which ISO standards directly support application and software security?",
      options: ["ISO 27018", "ISO 27036", "ISO 27034", "ISO 29100"],
      correctAnswer: 2,
      explanation: "ISO 27034 is specifically focused on application security.",
      reference: "ISO/IEC 27034"
    },
    {
      id: "q21",
      type: "multiple_choice",
      question: "A company processes credit cards without firewalls. Which compliance mandate is violated?",
      options: ["PCI DSS", "ISO 27701", "COSO", "HIPAA"],
      correctAnswer: 0,
      explanation: "PCI DSS requires appropriate network security controls for cardholder data environments.",
      reference: "PCI DSS — Network Security Controls"
    },
    {
      id: "q22",
      type: "multiple_choice",
      question: "Which ISO offers technical guidance for ISMS implementation?",
      options: ["ISO 27001", "ISO 27036", "ISO 27034", "ISO 27003"],
      correctAnswer: 3,
      explanation: "ISO 27003 provides guidance on implementing information security management systems.",
      reference: "ISO/IEC 27003"
    },
    {
      id: "q23",
      type: "multiple_select",
      question: "Which ISO standards are most relevant to cloud services?",
      options: ["ISO 27017", "ISO 27040", "ISO 27018", "ISO 27003"],
      correctAnswer: [0, 2],
      explanation: "ISO 27017 addresses cloud security and ISO 27018 addresses personal information protection in public clouds.",
      reference: "ISO/IEC 27017; ISO/IEC 27018"
    },
    {
      id: "q24",
      type: "true_false",
      question: "A firm encrypts cardholder data but uses shared user accounts for system access. This is compliant under PCI DSS.",
      correctAnswer: false,
      explanation: "PCI DSS requires individual accountability and strong access controls. Encryption alone does not justify shared user accounts.",
      reference: "PCI DSS — Authentication and Access Controls"
    },
    {
      id: "q25",
      type: "multiple_select",
      question: "Which frameworks are industry-specific?",
      options: ["COBIT", "HIPAA", "COSO", "PCI DSS"],
      correctAnswer: [1, 3],
      explanation: "HIPAA addresses covered U.S. healthcare information; PCI DSS addresses the payment-card industry. COSO and COBIT apply across industries.",
      reference: "HIPAA; PCI DSS"
    },
    {
      id: "q26",
      type: "multiple_choice",
      question: "A retailer encrypts cardholder data in storage and transmission. Which framework requires this?",
      options: ["PCI DSS", "COSO", "HIPAA", "ISO 27701"],
      correctAnswer: 0,
      explanation: "PCI DSS requires protecting stored account data and appropriately securing payment data transmitted over public networks.",
      reference: "PCI DSS — Protect Account Data"
    },
    {
      id: "q27",
      type: "true_false",
      question: "A compliance folder without risk assessments is considered incomplete.",
      correctAnswer: true,
      explanation: "Risk assessment documentation is a central part of demonstrating how compliance risks are identified and handled.",
      reference: "IT0204 — Compliance Documentation"
    },
    {
      id: "q28",
      type: "true_false",
      question: "ISO 27018 addresses privacy in cloud environments.",
      correctAnswer: true,
      explanation: "ISO 27018 provides protection guidance for personally identifiable information handled in public cloud services.",
      reference: "ISO/IEC 27018"
    },
    {
      id: "q29",
      type: "multiple_choice",
      question: "Which ISO provides guidance for network security architecture and controls?",
      options: ["ISO 27034", "ISO 27018", "ISO 27033", "ISO 27701"],
      correctAnswer: 2,
      explanation: "ISO 27033 covers network security architecture, implementation, and controls.",
      reference: "ISO/IEC 27033"
    },
    {
      id: "q30",
      type: "multiple_choice",
      question: "A SOC provides continuous monitoring but lacks recovery procedures. Which NIST CSF functions are missing?",
      options: ["Identify and Respond", "Identify and Detect", "Protect and Detect", "Respond and Recover"],
      correctAnswer: 3,
      explanation: "Recover is clearly absent. Respond and Recover is the closest listed pair, but the scenario does not explicitly establish that Respond is absent. The original selection was Identify and Detect.",
      reference: "NIST Cybersecurity Framework 2.0 — Respond and Recover"
    },
    {
      id: "q31",
      type: "multiple_choice",
      question: "Which compliance framework pairs best with COBIT for enterprise risk and financial reporting?",
      options: ["ISO 27001", "PCI DSS", "COSO", "HIPAA"],
      correctAnswer: 2,
      explanation: "COSO addresses enterprise risk and financial reporting controls, complementing COBIT's IT governance focus.",
      reference: "COSO; ISACA COBIT"
    },
    {
      id: "q32",
      type: "multiple_choice",
      question: "A hospital adopts ISO 27017 for cloud security but neglects ISO 27018. What risk remains unaddressed?",
      options: ["Supplier relationships", "Network encryption", "Storage security", "Cloud privacy controls"],
      correctAnswer: 3,
      explanation: "ISO 27018 focuses on protecting personal information processed in public clouds.",
      reference: "ISO/IEC 27017; ISO/IEC 27018"
    },
    {
      id: "q33",
      type: "multiple_choice",
      question: "Which ISO framework provides guidance for implementing an ISMS?",
      options: ["ISO 27017", "ISO 27001", "ISO 27003", "ISO 27034"],
      correctAnswer: 2,
      explanation: "ISO 27003 gives practical implementation guidance for an ISMS.",
      reference: "ISO/IEC 27003"
    },
    {
      id: "q34",
      type: "true_false",
      question: "COSO provides frameworks for IT process alignment.",
      correctAnswer: false,
      explanation: "COBIT is the framework focused specifically on aligning IT processes with business objectives.",
      reference: "COSO; ISACA COBIT"
    },
    {
      id: "q35",
      type: "multiple_choice",
      question: "A BPO company documents data flows, policies, and risk assessments into a compliance folder. This practice aligns with:",
      options: ["HIPAA", "PCI DSS", "Data Privacy Compliance Folder", "ISO 27701"],
      correctAnswer: 2,
      explanation: "A Data Privacy Compliance Folder is the course-specific documentation concept that groups data flows, policies, and risk assessments. The originally selected answer was PCI DSS.",
      reference: "IT0204 — Data Privacy Compliance Folder"
    },
    {
      id: "q36",
      type: "multiple_choice",
      question: "A healthcare firm documents policies, risk assessments, and security controls in one folder. This is an example of:",
      options: ["SOC monitoring", "Data Privacy Compliance Folder", "ISO 27002 Code of Practice", "HIPAA safeguards"],
      correctAnswer: 1,
      explanation: "A Data Privacy Compliance Folder organizes relevant policies, assessments, and control evidence.",
      reference: "IT0204 — Data Privacy Compliance Folder"
    },
    {
      id: "q37",
      type: "multiple_choice",
      question: "Which ISO standard integrates ISMS requirements with privacy management?",
      options: ["ISO 27040", "ISO 27018", "ISO 27701", "ISO 27034"],
      correctAnswer: 2,
      explanation: "ISO 27701 connects privacy information management with information security management practices.",
      reference: "ISO/IEC 27701"
    },
    {
      id: "q38",
      type: "multiple_choice",
      question: "Which ISO provides cloud-specific privacy protections?",
      options: ["ISO 27018", "ISO 27017", "ISO 27036", "ISO 27034"],
      correctAnswer: 0,
      explanation: "ISO 27018 focuses on protection of personal information in public cloud environments.",
      reference: "ISO/IEC 27018"
    },
    {
      id: "q39",
      type: "multiple_choice",
      question: "A hospital encrypts patient records but lacks documented risk assessments. Which compliance law requires administrative safeguards as well as technical ones?",
      options: ["PCI DSS", "COBIT", "HIPAA", "COSO"],
      correctAnswer: 2,
      explanation: "The HIPAA Security Rule includes administrative, physical, and technical safeguards; encryption alone is insufficient.",
      reference: "HHS — HIPAA Security Rule"
    },
    {
      id: "q40",
      type: "multiple_choice",
      question: "Which ISO specifically addresses protecting sensitive storage systems?",
      options: ["ISO 27017", "ISO 27018", "ISO 27003", "ISO 27040"],
      correctAnswer: 3,
      explanation: "ISO 27040 addresses security controls and guidance for storage systems.",
      reference: "ISO/IEC 27040"
    },
    {
      id: "q41",
      type: "multiple_choice",
      question: "Which compliance framework provides governance for IT while aligning with business objectives?",
      options: ["COSO", "PCI DSS", "HIPAA", "COBIT"],
      correctAnswer: 3,
      explanation: "COBIT is designed to support governance and management of enterprise IT aligned with business objectives.",
      reference: "ISACA COBIT"
    },
    {
      id: "q42",
      type: "multiple_choice",
      question: "A company integrates compliance training, policy creation, and asset inventory into one program. This is part of:",
      options: ["Effective compliance programs", "ISO 27040 storage", "PCI DSS audits", "HIPAA reporting"],
      correctAnswer: 0,
      explanation: "Training, policies, and asset inventories are components of effective compliance programs.",
      reference: "IT0204 — Effective Compliance Programs"
    },
    {
      id: "q43",
      type: "multiple_select",
      question: "Which practices ensure PCI DSS compliance?",
      options: ["Encryption of cardholder data in storage and transmission", "Role-based access controls", "Strong firewall configurations", "Ignoring vulnerability scans"],
      correctAnswer: [0, 1, 2],
      explanation: "Cardholder data protection, access control, and network security support PCI DSS. Ignoring vulnerability scans creates a compliance gap.",
      reference: "PCI DSS — Data Protection, Access Control, Network Security"
    },
    {
      id: "q44",
      type: "multiple_choice",
      question: "Which ISO standard offers practical guidance for ISMS deployment?",
      options: ["ISO 27036", "ISO 27003", "ISO 27034", "ISO 27018"],
      correctAnswer: 1,
      explanation: "ISO 27003 provides guidance for implementing an ISMS.",
      reference: "ISO/IEC 27003"
    },
    {
      id: "q45",
      type: "multiple_choice",
      question: "Which framework provides principles and objectives for IT governance specifically?",
      options: ["HIPAA", "ISO 27018", "COBIT", "COSO"],
      correctAnswer: 2,
      explanation: "COBIT provides a framework for governing and managing enterprise information and technology.",
      reference: "ISACA COBIT"
    },
    {
      id: "q46",
      type: "multiple_choice",
      question: "Which compliance framework emphasizes risk management for enterprise financial reporting?",
      options: ["HIPAA", "ISO 27040", "COSO", "COBIT"],
      correctAnswer: 2,
      explanation: "COSO focuses on enterprise risk and internal controls, including those supporting financial reporting.",
      reference: "COSO"
    },
    {
      id: "q47",
      type: "multiple_choice",
      question: "Which ISO standard provides the Information Security Code of Practice?",
      options: ["ISO 27001", "ISO 27040", "ISO 27003", "ISO 27002"],
      correctAnswer: 3,
      explanation: "ISO 27002 provides guidance and a code of practice for information security controls.",
      reference: "ISO/IEC 27002"
    },
    {
      id: "q48",
      type: "multiple_choice",
      question: "Which ISO ensures organizations follow recognized best practices for information security controls?",
      options: ["ISO 27002", "ISO 27003", "ISO 27017", "ISO 27036"],
      correctAnswer: 0,
      explanation: "ISO 27002 describes widely recognized information security controls and their implementation guidance.",
      reference: "ISO/IEC 27002"
    },
    {
      id: "q49",
      type: "true_false",
      question: "ISO 27036 addresses application-level vulnerabilities.",
      correctAnswer: false,
      explanation: "ISO 27036 focuses on supplier relationships; ISO 27034 focuses on application security.",
      reference: "ISO/IEC 27036; ISO/IEC 27034"
    },
    {
      id: "q50",
      type: "true_false",
      question: "A SOC guided by the NIST CSF must include recovery procedures as well as detection processes.",
      correctAnswer: true,
      explanation: "NIST CSF addresses both Detect and Recover, so a comprehensive CSF-aligned security program includes both capabilities.",
      reference: "NIST Cybersecurity Framework"
    },
    {
      id: "q51",
      type: "multiple_choice",
      question: "Which ISO provides a framework for global privacy principles applicable to different jurisdictions?",
      options: ["ISO 27036", "ISO 27034", "ISO 29100", "ISO 27003"],
      correctAnswer: 2,
      explanation: "ISO 29100 defines general privacy principles applicable across countries and organizational contexts.",
      reference: "ISO/IEC 29100"
    },
    {
      id: "q52",
      type: "multiple_choice",
      question: "Which SOC functions are missing if no recovery planning exists?",
      options: ["Identify", "Detect", "Recover", "Respond"],
      correctAnswer: 2,
      explanation: "A lack of recovery planning directly indicates a gap in the NIST CSF Recover function.",
      reference: "NIST Cybersecurity Framework — Recover"
    },
    {
      id: "q53",
      type: "true_false",
      question: "ISO 27036 applies to supplier relationship security.",
      correctAnswer: true,
      explanation: "The ISO 27036 series specifically addresses information security in supplier relationships.",
      reference: "ISO/IEC 27036"
    },
    {
      id: "q54",
      type: "multiple_choice",
      question: "A government cybersecurity office applies the “Identify” function in NIST CSF. What is its focus?",
      options: ["Incident response", "Supplier controls", "Recovery planning", "Asset management and risk identification"],
      correctAnswer: 3,
      explanation: "Identify focuses on understanding cybersecurity risks, assets, and organizational context.",
      reference: "NIST Cybersecurity Framework — Identify"
    },
    {
      id: "q55",
      type: "multiple_choice",
      question: "A software developer adopts ISO 27034. What does this standard cover?",
      options: ["Data storage encryption", "Supplier relationships", "Cloud security", "Application security practices"],
      correctAnswer: 3,
      explanation: "ISO 27034 provides guidance for application security activities.",
      reference: "ISO/IEC 27034"
    },
    {
      id: "q56",
      type: "multiple_choice",
      question: "A multinational focuses on enterprise-wide internal control, governance, and reporting. This is the main feature of:",
      options: ["HIPAA", "COBIT", "COSO", "PCI DSS"],
      correctAnswer: 2,
      explanation: "COSO provides enterprise-wide guidance for internal controls, governance, and reporting risks.",
      reference: "COSO"
    },
    {
      id: "q57",
      type: "multiple_choice",
      question: "A cloud-based HR firm adopts ISO 27017. What does this ISO specifically address?",
      options: ["Storage encryption", "Governance", "Application controls", "Cloud security practices"],
      correctAnswer: 3,
      explanation: "ISO 27017 provides information security control guidance specific to cloud services.",
      reference: "ISO/IEC 27017"
    },
    {
      id: "q58",
      type: "multiple_select",
      question: "Which documents are part of a Data Privacy Compliance Folder?",
      options: ["Configuration Inventory", "Data Privacy Standard Tree", "Policy Creation Normative References", "Marketing materials"],
      correctAnswer: [0, 1, 2],
      explanation: "The course's Data Privacy Compliance Folder contains inventories, privacy standards structures, and policy references; marketing materials are not central compliance evidence.",
      reference: "IT0204 — Data Privacy Compliance Folder"
    },
    {
      id: "q59",
      type: "true_false",
      question: "A hospital encrypts records but fails to notify patients after a breach. This violates HIPAA.",
      correctAnswer: false,
      explanation: "AMBIGUOUS: The original selected answer False is retained. HIPAA generally requires notification for breaches of unsecured PHI, whereas properly encrypted PHI may qualify for an exception. Without knowing whether PHI was unsecured, a definite violation cannot be established.",
      reference: "HHS — HIPAA Breach Notification Rule"
    },
    {
      id: "q60",
      type: "true_false",
      question: "A bank encrypts customer data but has no incident response team. This shows partial but not full compliance with ISO 27001.",
      correctAnswer: true,
      explanation: "Encryption alone does not demonstrate a complete ISMS; incident management and other controls are also important.",
      reference: "ISO/IEC 27001"
    },
    {
      id: "q61",
      type: "multiple_choice",
      question: "Which frameworks regulate healthcare data security?",
      options: ["COSO", "PCI DSS", "ISO 27701 (privacy)", "HIPAA"],
      correctAnswer: 3,
      explanation: "HIPAA is the applicable U.S. healthcare law among these choices. ISO 27701 is a voluntary general privacy standard, not a healthcare-specific regulation.",
      reference: "HHS — HIPAA; ISO/IEC 27701"
    },
    {
      id: "q62",
      type: "multiple_choice",
      question: "A firm aligns COSO with COBIT. Which does COBIT specifically contribute?",
      options: ["Risk management", "IT process alignment with business objectives", "Enterprise governance", "Cloud security"],
      correctAnswer: 1,
      explanation: "COBIT specifically focuses on governance and management of IT in line with business objectives.",
      reference: "ISACA COBIT"
    },
    {
      id: "q63",
      type: "multiple_choice",
      question: "Which law applies to electronic health record protections in the U.S.?",
      options: ["PCI DSS", "COSO", "HIPAA", "COBIT"],
      correctAnswer: 2,
      explanation: "HIPAA governs the privacy and security of protected health information held by covered entities and business associates.",
      reference: "HHS — HIPAA"
    },
    {
      id: "q64",
      type: "multiple_choice",
      question: "Which global standard defines ISMS requirements?",
      options: ["ISO 27002", "ISO 27034", "ISO 27001", "ISO 27040"],
      correctAnswer: 2,
      explanation: "ISO 27001 specifies requirements for establishing, maintaining, and continuously improving an ISMS.",
      reference: "ISO/IEC 27001"
    },
    {
      id: "q65",
      type: "multiple_select",
      question: "Which ISO standards secure storage and networks?",
      options: ["ISO 27033", "ISO 27034", "ISO 27040", "ISO 29100"],
      correctAnswer: [0, 2],
      explanation: "ISO 27033 focuses on network security; ISO 27040 focuses on storage security.",
      reference: "ISO/IEC 27033; ISO/IEC 27040"
    },
    {
      id: "q66",
      type: "multiple_choice",
      question: "A Philippine fintech company adopts PCI DSS certification. Which transactions does this certification protect?",
      options: ["Intellectual property", "Credit card payments", "Patient medical records", "Supplier contracts"],
      correctAnswer: 1,
      explanation: "PCI DSS addresses payment card account data and environments that handle payment transactions.",
      reference: "PCI DSS"
    },
    {
      id: "q67",
      type: "multiple_choice",
      question: "A financial services firm combines COSO and COBIT. COSO ensures enterprise risk governance, while COBIT ensures:",
      options: ["Credit card compliance", "Privacy management", "Application controls", "IT process governance"],
      correctAnswer: 3,
      explanation: "COBIT provides guidance for governing and managing enterprise information and technology.",
      reference: "COSO; ISACA COBIT"
    },
    {
      id: "q68",
      type: "multiple_choice",
      question: "Which ISO is intended to improve security in supplier and partner agreements?",
      options: ["ISO 27036", "ISO 27701", "ISO 27034", "ISO 27017"],
      correctAnswer: 0,
      explanation: "ISO 27036 addresses information security requirements in supplier and partner relationships.",
      reference: "ISO/IEC 27036"
    },
    {
      id: "q69",
      type: "true_false",
      question: "A company applying only PCI DSS without any SOC monitoring is fully compliant with NIST.",
      correctAnswer: false,
      explanation: "PCI DSS compliance alone does not demonstrate alignment with all NIST CSF functions. NIST CSF is generally voluntary rather than a universal legal mandate.",
      reference: "NIST Cybersecurity Framework 2.0"
    },
    {
      id: "q70",
      type: "multiple_choice",
      question: "A data center creates a “Global Cybersecurity Knowledge Ecosystem” to share compliance practices. This aligns with:",
      options: ["Organizational compliance program strategies", "ISO 27040", "PCI DSS", "HIPAA"],
      correctAnswer: 0,
      explanation: "Sharing cybersecurity knowledge and compliance practices is an organizational compliance strategy.",
      reference: "IT0204 — Organizational Compliance Strategies"
    },
    {
      id: "q71",
      type: "multiple_choice",
      question: "A hospital integrates technical, physical, and administrative safeguards. Which law mandates this?",
      options: ["ISO 27001", "PCI DSS", "HIPAA", "COSO"],
      correctAnswer: 2,
      explanation: "HIPAA's Security Rule includes administrative, physical, and technical safeguards.",
      reference: "HHS — HIPAA Security Rule"
    },
    {
      id: "q72",
      type: "multiple_choice",
      question: "A hospital documents its breach notification procedures as part of compliance. This is required under:",
      options: ["ISO 27002", "COBIT", "PCI DSS", "HIPAA safeguards"],
      correctAnswer: 3,
      explanation: "HIPAA includes breach notification obligations and requirements for relevant policies and procedures.",
      reference: "HHS — HIPAA Breach Notification Rule"
    },
    {
      id: "q73",
      type: "multiple_choice",
      question: "Which ISO focuses on cloud infrastructure and service provider responsibilities?",
      options: ["ISO 27017", "ISO 27701", "ISO 27040", "ISO 27034"],
      correctAnswer: 0,
      explanation: "ISO 27017 provides cloud-specific security controls and guidance concerning cloud providers and customers.",
      reference: "ISO/IEC 27017"
    },
    {
      id: "q74",
      type: "multiple_choice",
      question: "Which ISO supports risk management for network design and operations?",
      options: ["ISO 27036", "ISO 27034", "ISO 27033", "ISO 27040"],
      correctAnswer: 2,
      explanation: "ISO 27033 provides guidance on designing and securing networks.",
      reference: "ISO/IEC 27033"
    },
    {
      id: "q75",
      type: "multiple_choice",
      question: "A retailer encrypts credit card data during transmission but stores logs unprotected. Which compliance gap remains?",
      options: ["COSO", "HIPAA", "PCI DSS storage protection", "COBIT"],
      correctAnswer: 2,
      explanation: "PCI DSS requires protection of sensitive stored account data and relevant logging controls, not only encryption in transit.",
      reference: "PCI DSS — Stored Account Data and Logging"
    },
    {
      id: "q76",
      type: "multiple_choice",
      question: "Which ISO provides guidelines on privacy information management systems?",
      options: ["ISO 27701", "ISO 27036", "ISO 27018", "ISO 27002"],
      correctAnswer: 0,
      explanation: "ISO 27701 provides privacy information management guidance and requirements.",
      reference: "ISO/IEC 27701"
    },
    {
      id: "q77",
      type: "multiple_choice",
      question: "A retail company accepts credit cards but fails to encrypt stored transaction data. Which compliance framework was violated?",
      options: ["ISO 29100", "PCI DSS", "ISO 27036", "HIPAA"],
      correctAnswer: 1,
      explanation: "PCI DSS prescribes protections for stored payment account data. The exact required protection depends on the type of transaction data.",
      reference: "PCI DSS — Stored Account Data"
    },
    {
      id: "q78",
      type: "multiple_choice",
      question: "A firm documents asset inventories and system configurations. This belongs to:",
      options: ["Configuration Inventory Standard", "ISO 27040", "HIPAA safeguards", "PCI DSS"],
      correctAnswer: 0,
      explanation: "The course-specific Configuration Inventory Standard concerns documentation of assets and configurations. The original selection was PCI DSS.",
      reference: "IT0204 — Configuration Inventory Standard"
    },
    {
      id: "q79",
      type: "multiple_select",
      question: "Which practices demonstrate SOC effectiveness?",
      options: ["Continuous monitoring", "Ignoring alerts", "Threat detection", "Incident response planning"],
      correctAnswer: [0, 2, 3],
      explanation: "A SOC needs continuous monitoring, threat detection, and incident response planning. Ignoring alerts undermines security operations.",
      reference: "NIST Cybersecurity Framework — Detect and Respond"
    },
    {
      id: "q80",
      type: "true_false",
      question: "A SOC without incident response planning violates NIST CSF Respond function requirements.",
      correctAnswer: true,
      explanation: "Incident response planning is part of the Respond function. Since NIST CSF is voluntary, this indicates a framework alignment gap rather than automatically a legal violation.",
      reference: "NIST Cybersecurity Framework — Respond"
    },
    {
      id: "q81",
      type: "true_false",
      question: "ISO 27003 provides implementation guidance for ISMS.",
      correctAnswer: true,
      explanation: "ISO 27003 provides guidance for implementing an information security management system.",
      reference: "ISO/IEC 27003"
    },
    {
      id: "q82",
      type: "true_false",
      question: "PCI DSS compliance applies only to healthcare records.",
      correctAnswer: false,
      explanation: "PCI DSS applies to payment card account data, not exclusively to healthcare records.",
      reference: "PCI DSS"
    },
    {
      id: "q83",
      type: "multiple_choice",
      question: "Which ISO standards address supplier and third-party risks?",
      options: ["ISO 27040", "ISO 27018", "COBIT (governance)", "ISO 27036"],
      correctAnswer: 3,
      explanation: "ISO 27036 addresses supplier security. COBIT is a governance framework but is not an ISO standard.",
      reference: "ISO/IEC 27036"
    },
    {
      id: "q84",
      type: "multiple_choice",
      question: "A hospital develops supplier contracts requiring compliance with ISO standards. Which ISO ensures supplier security?",
      options: ["ISO 27036", "ISO 27040", "ISO 27017", "ISO 27018"],
      correctAnswer: 0,
      explanation: "ISO 27036 provides security guidance for supplier relationships and agreements.",
      reference: "ISO/IEC 27036"
    },
    {
      id: "q85",
      type: "true_false",
      question: "COSO helps organizations with internal controls and financial reporting risks.",
      correctAnswer: true,
      explanation: "COSO provides frameworks for enterprise internal controls and risk management.",
      reference: "COSO"
    },
    {
      id: "q86",
      type: "true_false",
      question: "COBIT aligns IT processes with business objectives.",
      correctAnswer: true,
      explanation: "COBIT supports aligning governance and management of IT with business goals.",
      reference: "ISACA COBIT"
    },
    {
      id: "q87",
      type: "multiple_choice",
      question: "Which ISO standard addresses data storage protection?",
      options: ["ISO 27036", "ISO 27018", "ISO 27003", "ISO 27040"],
      correctAnswer: 3,
      explanation: "ISO 27040 provides guidance for storage security.",
      reference: "ISO/IEC 27040"
    },
    {
      id: "q88",
      type: "multiple_choice",
      question: "A government agency builds a compliance program that integrates training, monitoring, and policy updates. This reflects which element?",
      options: ["HIPAA safeguards", "Effective compliance program structure", "Cloud privacy", "PCI DSS encryption"],
      correctAnswer: 1,
      explanation: "Training, monitoring, and maintaining policies are elements of effective compliance programs.",
      reference: "IT0204 — Effective Compliance Programs"
    },
    {
      id: "q89",
      type: "multiple_choice",
      question: "A multinational corporation integrates COBIT into operations. What is COBIT’s main function?",
      options: ["IT governance and management alignment with business goals", "Cloud privacy", "Credit card security", "Healthcare compliance"],
      correctAnswer: 0,
      explanation: "COBIT focuses on IT governance and management in alignment with business needs.",
      reference: "ISACA COBIT"
    },
    {
      id: "q90",
      type: "true_false",
      question: "PCI DSS requires strong access controls to cardholder data.",
      correctAnswer: true,
      explanation: "PCI DSS requires restricting access to account data based on business need and strong identification and authentication.",
      reference: "PCI DSS — Access Controls"
    },
    {
      id: "q91",
      type: "multiple_choice",
      question: "Which compliance strategy ensures continuous monitoring, threat detection, and analysis in SOC operations?",
      options: ["ISO 27018", "PCI DSS", "HIPAA", "NIST CSF Detect function"],
      correctAnswer: 3,
      explanation: "Detect addresses identifying and analyzing possible cybersecurity attacks and incidents.",
      reference: "NIST Cybersecurity Framework — Detect"
    },
    {
      id: "q92",
      type: "multiple_choice",
      question: "A firm’s SOC implements incident response team services. Which compliance framework element supports this?",
      options: ["ISO 27018", "PCI DSS", "HIPAA", "SOC and incident response services"],
      correctAnswer: 3,
      explanation: "SOC and incident response services directly support monitoring and responding to cybersecurity incidents.",
      reference: "IT0204 — SOC and Incident Response Services"
    },
    {
      id: "q93",
      type: "true_false",
      question: "HIPAA safeguards only require encryption.",
      correctAnswer: false,
      explanation: "HIPAA requires a range of administrative, technical, and physical safeguards, not only encryption.",
      reference: "HHS — HIPAA Security Rule"
    },
    {
      id: "q94",
      type: "multiple_choice",
      question: "A SOC applies NIST’s “Respond” function. What is its focus?",
      options: ["Incident containment and communication", "Encryption", "Supplier audits", "Continuous monitoring"],
      correctAnswer: 0,
      explanation: "Respond covers incident management, mitigation, communication, and related actions.",
      reference: "NIST Cybersecurity Framework — Respond"
    },
    {
      id: "q95",
      type: "true_false",
      question: "ISO 29100 supports cross-border privacy management practices.",
      correctAnswer: true,
      explanation: "ISO 29100 provides general privacy principles that can inform cross-border privacy practices, subject to applicable laws.",
      reference: "ISO/IEC 29100"
    },
    {
      id: "q96",
      type: "multiple_choice",
      question: "A retailer encrypts cardholder data during transmission over public networks. Which compliance requirement is fulfilled?",
      options: ["ISO 27018", "COBIT", "PCI DSS", "ISO 27036"],
      correctAnswer: 2,
      explanation: "PCI DSS addresses protecting payment card information during transmission over public networks.",
      reference: "PCI DSS — Data Transmission Security"
    },
    {
      id: "q97",
      type: "multiple_choice",
      question: "A company strengthens compliance by implementing a “Data Privacy Standard Tree.” What is its function?",
      options: ["Organizing compliance policies and assets", "HIPAA audit controls", "Network encryption", "PCI DSS storage compliance"],
      correctAnswer: 0,
      explanation: "The course-specific Data Privacy Standard Tree organizes privacy-related policies, standards, and assets.",
      reference: "IT0204 — Data Privacy Standard Tree"
    },
    {
      id: "q98",
      type: "multiple_choice",
      question: "A SOC detects threats but has no structured recovery plan. Which NIST function is missing?",
      options: ["Detect", "Recover", "Protect", "Identify"],
      correctAnswer: 1,
      explanation: "Recover focuses on restoring affected systems and operations after cybersecurity incidents.",
      reference: "NIST Cybersecurity Framework — Recover"
    },
    {
      id: "q99",
      type: "multiple_choice",
      question: "A retailer deploys a “Privacy Wall” to strengthen customer data protection. This practice belongs to which compliance program element?",
      options: ["PCI DSS firewall", "Application testing", "Supplier security", "Built Cybersecurity and Data Privacy Wall"],
      correctAnswer: 3,
      explanation: "The course describes this activity as building a Cybersecurity and Data Privacy Wall.",
      reference: "IT0204 — Cybersecurity and Data Privacy Wall"
    },
    {
      id: "q100",
      type: "multiple_choice",
      question: "Which compliance documentation shows an organization’s information assets, systems, and configurations?",
      options: ["Configuration Inventory Standard", "Supplier security audits", "HIPAA safeguards", "PCI DSS controls"],
      correctAnswer: 0,
      explanation: "Configuration inventory documentation records information assets, systems, and configuration details.",
      reference: "IT0204 — Configuration Inventory Standard"
    }
  ]
});
