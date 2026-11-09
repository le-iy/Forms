
window.PandoraQuizzes.register({
  id: "GED0083-M04-F06",
  subject: "GED0083",
  module: 4,
  title: "Formative Assessment 6",
  kind: "formative",
  version: 1,
  description: "15-item formative assessment covering capacitance, parallel-plate capacitors, dielectric constants, electric fields, and stored energy. Original score: 14/15.",
  createdAt: "2026-11-10T06:41:49+08:00",
  showOnHome: true,

  questions: [
    {
      id: "q1",
      type: "multiple_choice",
      question: "If both the plate area and the plate separation of a parallel-plate capacitor are doubled, the capacitance is:",
      options: [
        "unchanged",
        "Doubled",
        "one-fourth the original",
        "Halved"
      ],
      correctAnswer: 0,
      explanation: "The capacitance of a parallel-plate capacitor is C = εA/d, where A is the plate area and d is the separation. Doubling both gives C' = ε(2A)/(2d) = εA/d = C. The increase in area and increase in separation cancel, so capacitance remains unchanged.",
      reference: "GED0083 — Capacitance of Parallel-Plate Capacitors"
    },
    {
      id: "q2",
      type: "multiple_choice",
      question: "What happens with the capacitance of a capacitor when the distance between the two plates is doubled?",
      options: [
        "Remains the same",
        "Reduces to zero",
        "Is halved",
        "Is doubled"
      ],
      correctAnswer: 2,
      explanation: "For a parallel-plate capacitor, C = εA/d. Capacitance is inversely proportional to plate separation when the plate area and dielectric remain unchanged. If d becomes 2d, then C' = εA/(2d) = C/2. The capacitance is therefore halved, not reduced to zero.",
      reference: "GED0083 — Parallel-Plate Capacitance and Plate Separation"
    },
    {
      id: "q3",
      type: "multiple_choice",
      question: "If the charge on a parallel-plate capacitor is doubled:",
      options: [
        "the capacitance is halved",
        "the electric field is halved",
        "the capacitance is doubled",
        "the electric field is doubled"
      ],
      correctAnswer: 3,
      explanation: "For an ideal parallel-plate capacitor with fixed geometry and dielectric, the electric field between the plates is E = Q/(εA). If charge Q doubles while A and ε remain constant, the electric field also doubles. Capacitance is determined by the capacitor's geometry and dielectric, so changing the stored charge does not by itself change C.",
      reference: "GED0083 — Electric Field Between Capacitor Plates"
    },
    {
      id: "q4",
      type: "multiple_choice",
      question: "Capacitance is directly proportional to:",
      options: [
        "The charge multiplied by the applied voltage",
        "The dielectric strength",
        "The area of the plates",
        "The distance between the plates"
      ],
      correctAnswer: 2,
      explanation: "The parallel-plate formula C = εA/d shows that capacitance increases directly with plate area. A larger plate area allows more charge to be stored for the same potential difference. Capacitance is inversely proportional to plate separation. Dielectric strength describes resistance to electrical breakdown and is not the same property as permittivity.",
      reference: "GED0083 — Factors Affecting Capacitance"
    },
    {
      id: "q5",
      type: "multiple_choice",
      question: "A factor by which capacitance increases when a dielectric is inserted between the plates of a capacitor",
      options: [
        "capacitance",
        "dielectric constant",
        "dielectric",
        "capacitor"
      ],
      correctAnswer: 1,
      explanation: "The dielectric constant, also called relative permittivity κ, describes how much capacitance increases when a dielectric completely fills the space between the plates compared with vacuum, assuming unchanged geometry. The relationship is C = κC0. For example, κ = 4 means the capacitance becomes four times its original vacuum value.",
      reference: "GED0083 — Dielectrics and Relative Permittivity"
    },
    {
      id: "q6",
      type: "multiple_choice",
      question: "When the voltage across a capacitor is tripled, the stored charge",
      options: [
        "is cut to one-third",
        "doubles",
        "stays the same",
        "Triples"
      ],
      correctAnswer: 3,
      explanation: "The relation between charge, capacitance, and voltage is Q = CV. If capacitance remains constant and voltage increases from V to 3V, the new charge is Q' = C(3V) = 3Q. Thus, the stored charge triples.",
      reference: "GED0083 — Capacitor Charge-Voltage Relationship"
    },
    {
      id: "q7",
      type: "multiple_choice",
      question: "The capacitance between two plates increases with",
      options: [
        "Shorter play area and shorter distance between them",
        "Larger plate area, longer distance between plates and higher applied voltage",
        "Larger plate area and shorter distance between plates",
        "Shorter plate area and higher applied voltage"
      ],
      correctAnswer: 2,
      explanation: "From C = εA/d, capacitance increases when plate area A increases and the separation d decreases. A greater plate area provides more surface for storing opposite charges, while a shorter separation increases capacitance. Applied voltage does not determine the capacitance of an ideal linear capacitor with fixed geometry and dielectric.",
      reference: "GED0083 — Parallel-Plate Capacitor Geometry"
    },
    {
      id: "q8",
      type: "multiple_choice",
      question: "What is the capacitance of a capacitor which has a voltage of 110 V and a charge of 16 C?",
      options: [
        "158 mF",
        "6.85 F",
        "145 mF",
        "290 μF"
      ],
      correctAnswer: 2,
      explanation: "Using C = Q/V, substitute Q = 16 C and V = 110 V. C = 16/110 = 0.14545 F. Multiplying by 1000 gives 145.45 mF, which rounds to 145 mF. The answer 6.85 F would come from an incorrect manipulation of the formula.",
      reference: "GED0083 — Capacitance Formula C = Q/V"
    },
    {
      id: "q9",
      type: "multiple_choice",
      question: "A capacitor has 25 V across its plates and a stored charge of 1500 μ C. What is the capacitance value?",
      options: [
        "60 μF",
        "16.67 mF",
        "37.5 mF",
        "60 pF"
      ],
      correctAnswer: 0,
      explanation: "Apply C = Q/V. Convert 1500 μC into 1500 × 10⁻⁶ C = 0.0015 C. Then C = 0.0015/25 = 0.000060 F = 60 μF. The key is to convert microcoulombs correctly before dividing by voltage.",
      reference: "GED0083 — Capacitance and Metric Prefixes"
    },
    {
      id: "q10",
      type: "multiple_choice",
      question: "Calculate the value of capacitance needed to store 1 μC of charge at 10V",
      options: [
        "10 μF",
        "10nF",
        "1nF",
        "100nF"
      ],
      correctAnswer: 3,
      explanation: "Use C = Q/V. Given Q = 1 μC = 1 × 10⁻⁶ C and V = 10 V, C = (1 × 10⁻⁶)/10 = 1 × 10⁻⁷ F. Since 1 nF = 10⁻⁹ F, the answer is 100 nF, equivalent to 0.1 μF.",
      reference: "GED0083 — Calculating Capacitance from Charge and Voltage"
    },
    {
      id: "q11",
      type: "multiple_choice",
      question: "Two parallel- plate capacitors are identical in every aspect except that one has twice the plate area of the other. If the smaller capacitor has a capacitance C, the larger one has a capacitance of ______",
      options: [
        "C/2",
        "4C",
        "C",
        "2C"
      ],
      correctAnswer: 3,
      explanation: "Capacitance is directly proportional to the plate area: C = εA/d. Because the two capacitors have identical separation and dielectric, doubling the plate area changes the capacitance to C' = ε(2A)/d = 2C. It does not become 4C because only one geometric factor is doubled.",
      reference: "GED0083 — Effect of Plate Area on Capacitance"
    },
    {
      id: "q12",
      type: "multiple_choice",
      question: "A parallel-plate capacitor has a plate area of 0.2 m² and a plate separation of 0.1 mm. To obtain an electric field of 2.0 ×10⁶ V/m between the plates, the magnitude of the charge on each plate should be:",
      options: [
        "1.4 × 10⁻⁵ C",
        "7.1 × 10⁻⁶ C",
        "1.8 × 10⁻⁵ C",
        "3.5 × 10⁻⁶ C"
      ],
      correctAnswer: 3,
      explanation: "For an ideal parallel-plate capacitor in air or vacuum, E = Q/(ε0A), so Q = ε0AE. Substitute ε0 = 8.854 × 10⁻¹² F/m, A = 0.2 m², and E = 2.0 × 10⁶ V/m. Q = (8.854 × 10⁻¹²)(0.2)(2.0 × 10⁶) = 3.5416 × 10⁻⁶ C, approximately 3.5 × 10⁻⁶ C. The given separation is not needed because the electric field itself is already specified.",
      reference: "GED0083 — Electric Field and Charge Density of Parallel Plates"
    },
    {
      id: "q13",
      type: "multiple_choice",
      question: "Capacitor is charged during a potential difference of 200V and possesses charge of 0.1 C. When discharged, it would discharge an energy of ______",
      options: [
        "10 J",
        "20J",
        "12 J",
        "1 J"
      ],
      correctAnswer: 0,
      explanation: "The stored electrostatic energy of a capacitor is U = 1/2 QV. With Q = 0.1 C and V = 200 V, U = (1/2)(0.1)(200) = 10 J. The result 20 J would incorrectly omit the factor of one-half. Assuming complete discharge, this stored energy is released to the circuit.",
      reference: "GED0083 — Energy Stored in a Capacitor"
    },
    {
      id: "q14",
      type: "multiple_choice",
      question: "When a dielectric material is introduced between the plates of a parallel plate capacitor and completely fills the space, the capacitance increases by a factor of 4. What is the dielectric constant of the material that was introduced?",
      options: [
        "4",
        "2",
        "0.4",
        "¼"
      ],
      correctAnswer: 0,
      explanation: "If a dielectric completely fills a capacitor with unchanged plate dimensions, its capacitance changes according to C = κC0, where κ is the dielectric constant. The problem says the new capacitance is four times the original, so κ = C/C0 = 4. A dielectric constant of 2 would only double capacitance.",
      reference: "GED0083 — Dielectric Constant and Capacitance"
    },
    {
      id: "q15",
      type: "multiple_choice",
      question: "Suppose that a dielectric sheet is inserted to completely fill the space between the plates and the potential difference between the plates drops to 1000 V. What is the capacitance of the system after the dielectric is inserted?",
      options: [
        "5.4 ×10⁻¹⁰ F",
        "2.7 ×10⁻¹⁰ F",
        "6.2 ×10⁻¹⁰ F",
        "1.8 ×10⁻¹⁰ F"
      ],
      correctAnswer: 0,
      explanation: "The problem as displayed does not provide enough information to calculate a unique numerical capacitance. For an isolated capacitor, insertion of a dielectric increases capacitance while charge remains constant, so the new capacitance can be found using C = Q/Vfinal if Q is known, or Cnew = κCinitial if the initial capacitance and dielectric constant are known. A final voltage of 1000 V alone cannot distinguish the four answers. The first option is retained provisionally from the supplied selection and is not independently verified.",
      reference: "GED0083 — Dielectric Insertion in Capacitors; C = Q/V"
    }
  ]
});
