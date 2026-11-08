
window.PandoraQuizzes.register({
  id: "GED0083-M04-F04",
  subject: "GED0083",
  module: 4,
  title: "Formative 4",
  kind: "formative",
  version: 1,
  description: "Formative 4 covering electric field strength, field lines, parallel plates, electric forces, electric dipoles, and motion of charges in electric fields.",
  createdAt: "2026-11-07T01:00:00+08:00",
  showOnHome: true,

  questions: [
    {
      id: "q1",
      type: "multiple_choice",
      question: "The unit of electric field is NOT equivalent to",
      options: [
        "V/m",
        "J/Cm",
        "J/C",
        "N/C"
      ],
      correctAnswer: 2,
      explanation: "Electric field strength has SI units of N/C, equivalent to V/m and J/(C·m). However, J/C equals one volt, the unit of electric potential difference, not electric field strength. In the second option, J/Cm is interpreted as J/(C·m).",
      reference: "Electric Field and Electric Potential; SI Unit Relationships"
    },
    {
      id: "q2",
      type: "multiple_choice",
      question: "With electric field lines, how are stronger electric fields represented?\n\nI. By electric field lines that are close together\n\nII. By electric field lines that are far apart\n\nIII. By using long vector arrows\n\nIV. By using short vector arrows",
      options: [
        "II and III",
        "I and III",
        "I and IV",
        "II and IV"
      ],
      correctAnswer: 1,
      explanation: "Electric field strength is represented by the density of field lines: closer lines indicate a stronger field. When electric fields are represented using vectors with magnitude-scaled arrows, longer arrows indicate greater field strength. Thus, I and III are correct.",
      reference: "OpenStax University Physics Volume 2, Chapter 5 — Electric Field Lines and Vector Representation"
    },
    {
      id: "q3",
      type: "multiple_choice",
      question: "The electric field between two parallel plates oppositely charged",
      options: [
        "is constant and does not depend on the distance from either plate.",
        "follows 1/r law.",
        "follows 1/r2 law."
      ],
      correctAnswer: 0,
      explanation: "Between two large, oppositely charged parallel plates, the electric field is approximately uniform when edge effects are neglected. Its magnitude is nearly constant throughout the region between the plates.",
      reference: "OpenStax University Physics Volume 2 — Electric Field of Parallel Plates"
    },
    {
      id: "q4",
      type: "true_false",
      question: "As the charge of Object A is doubled, the electric field strength created by object A increases by a factor of 2.",
      correctAnswer: true,
      explanation: "For a point charge, electric field magnitude is E = k|Q|/r². At a fixed distance, doubling the source charge Q doubles the electric field strength.",
      reference: "OpenStax University Physics Volume 2 — Electric Field of a Point Charge"
    },
    {
      id: "q5",
      type: "multiple_choice",
      question: "Which one of the following statements is true concerning the magnitude of the electric field at a point in space?",
      options: [
        "It is a measure of the ratio of the charge on an object to its mass.",
        "It is a measure of the electric force on any charged object.",
        "It is a measure of the electric force per unit charge on a test charge.",
        "It is a measure of the total charge on the object."
      ],
      correctAnswer: 2,
      explanation: "Electric field strength is defined as the force per unit positive test charge, E = F/q. Its SI unit is N/C.",
      reference: "OpenStax University Physics Volume 2 — Electric Field Definition"
    },
    {
      id: "q6",
      type: "multiple_choice",
      question: "At a distance of 2 m from Q, the electric field is 20 N/C. What is the force a charge of 5 Coulombs feels?",
      options: [
        "10 N",
        "100 N",
        "4 N",
        "40 N"
      ],
      correctAnswer: 1,
      explanation: "The electric force on a charge is F = qE. With q = 5 C and E = 20 N/C, F = 5 × 20 = 100 N.",
      reference: "OpenStax University Physics Volume 2 — Electric Force and Electric Field"
    },
    {
      id: "q7",
      type: "multiple_choice",
      question: "The electric field has a magnitude of 3.0 N/C at a distance of 60 cm from a point charge. What is the charge?",
      options: [
        "120pC",
        "1.4nC",
        "120μC",
        "36nC"
      ],
      correctAnswer: 0,
      explanation: "CORRECTED OPTION: The original first option was 120nC, but the correct magnitude is 120pC. Using E = k|Q|/r², we obtain |Q| = Er²/k = 3.0(0.60)²/(8.99 × 10⁹) ≈ 1.20 × 10⁻¹⁰ C = 120 pC. The magnitude alone cannot determine the sign of Q. This is an intentional correction to a defective original answer choice.",
      reference: "OpenStax University Physics Volume 2 — Electric Field of a Point Charge; Formative 4 Q7, corrected option"
    },
    {
      id: "q8",
      type: "multiple_choice",
      question: "What is the magnitude of the electric field intensity at a point where a proton experiences an electrostatic force of magnitude 2.30 x 10⁻²⁵ newton?",
      options: [
        "3.68 x 10⁻⁴⁴ N/C",
        "1.44 x 10⁻⁶ N/C",
        "3.68 x 10⁶ N/C",
        "1.44 x 10⁴⁴ N/C"
      ],
      correctAnswer: 1,
      explanation: "Use E = F/q, where the proton's charge magnitude is 1.602 × 10⁻¹⁹ C. Therefore E = (2.30 × 10⁻²⁵)/(1.602 × 10⁻¹⁹) ≈ 1.44 × 10⁻⁶ N/C.",
      reference: "OpenStax University Physics Volume 2 — Electric Field; Elementary Charge"
    },
    {
      id: "q9",
      type: "multiple_choice",
      question: "A rigid insulating rod, with two unequal charges attached to its ends, is placed in uniform electric field. The rod experiences a",
      image: "./SUBJECTS/quizzes/GED0083/imgs/m04-f04-q09.png",
      options: [
        "Net force to the left and a counterclockwise rotation",
        "Net force to the right and a clockwise rotation",
        "Net force to the right and a counterclockwise rotation",
        "Net force to the left and a clockwise rotation"
      ],
      correctAnswer: 0,
      explanation: "CORRECTED ANSWER: The upper charge is -2Q and experiences a leftward force of magnitude 2QE. The lower charge is +Q and experiences a rightward force QE. The net force is therefore QE to the left. Both forces produce a counterclockwise torque about the rod's center, so the rod rotates counterclockwise.",
      reference: "OpenStax University Physics Volume 2 — Electric Force and Torque on Charges; Original FA4 Q9 Diagram"
    },
    {
      id: "q10",
      type: "multiple_choice",
      question: "A rigid electric dipole is free to move in the electric field represented in the figure. Which one of the following phrases most accurately describes the initial motion of the dipole if it is released from rest in the position shown?",
      image: "./SUBJECTS/quizzes/GED0083/imgs/m04-f04-q10.png",
      options: [
        "It does not move at all.",
        "It moves to the left.",
        "It moves toward to the top of the page.",
        "It moves to the right."
      ],
      correctAnswer: 1,
      explanation: "CORRECTED ANSWER: The negative end of the dipole is on the left and the positive end is on the right. The nonuniform electric field is stronger toward the left, where its field lines are closer together. The leftward force on the negative charge is therefore larger than the rightward force on the positive charge, producing a net force toward the left.",
      reference: "OpenStax University Physics Volume 2 — Electric Dipoles in Nonuniform Electric Fields; Original FA4 Q10 Diagram"
    },
    {
      id: "q11",
      type: "multiple_choice",
      question: "An electron traveling horizontally enters a region where a uniform electric field is directed upward. What is the direction of the force exerted on the electron once it has entered the field?",
      image: "./SUBJECTS/quizzes/GED0083/imgs/m04-f04-q11.png",
      options: [
        "to the left",
        "to the right",
        "downward",
        "upward"
      ],
      correctAnswer: 2,
      explanation: "The electric force is F = qE. An electron has a negative charge, so its force is opposite the direction of the electric field. Since the field points upward, the electron experiences a downward force.",
      reference: "OpenStax University Physics Volume 2 — Electric Forces on Charged Particles"
    },
    {
      id: "q12",
      type: "multiple_choice",
      question: "An electron having charge and mass m is moving in a uniform electric field E. Its acceleration will be ________.",
      options: [
        "E2e/m",
        "mE/e",
        "e2/m",
        "eE/m"
      ],
      correctAnswer: 3,
      explanation: "The magnitude of the electric force is F = eE, where e is the elementary charge magnitude. Using Newton's second law, a = F/m = eE/m. Because the electron is negatively charged, its acceleration points opposite the electric field.",
      reference: "OpenStax University Physics Volume 2 — Electric Force and Newton's Second Law"
    },
    {
      id: "q13",
      type: "multiple_choice",
      question: "Determine whether an electron or proton would take less time to reach one of a pair of oppositely charged parallel plates when starting from midway between the plates.",
      options: [
        "Electron",
        "Proton",
        "Take the same amount of time",
        "Impossible to tell"
      ],
      correctAnswer: 0,
      explanation: "The electron and proton experience forces of equal magnitude eE in opposite directions. Since the electron has much less mass, a = F/m gives it much greater acceleration. Assuming both start from rest at equal distances from their respective plates, the electron reaches its plate first.",
      reference: "OpenStax University Physics Volume 2 — Charged Particle Motion in a Uniform Electric Field"
    },
    {
      id: "q14",
      type: "identification",
      question: "A charge of mass 0.4 microgram is accelerated from rest in a uniform electric field at 2 nano second. A force of 2 N is exerted on the charge by the field. Neglect the gravitational force, what is the speed of the electron after 2 nanosecond? Answer should be rounded off to two (2) decimal places.",
      correctAnswer: "10.00",
      explanation: "Convert the mass: 0.4 microgram = 4 × 10⁻¹⁰ kg. The acceleration is a = F/m = 2/(4 × 10⁻¹⁰) = 5 × 10⁹ m/s². From rest over 2 × 10⁻⁹ s, v = at = 10.00 m/s. Note that the original wording calls the object an electron, although a real electron does not have a mass of 0.4 microgram. The calculation uses the explicitly supplied mass.",
      reference: "Newton's Second Law and Constant Acceleration; Original FA4 Q14"
    },
    {
      id: "q15",
      type: "multiple_choice",
      question: "A small object with charge q and weight mg is attached to one end of the string of length L. The other end is attached to a stationary support. The system is placed in a uniform horizontal electric field E, as shown below. In the presence of the electric field, the string makes an angle Θ with the vertical. What are the sign and magnitude of q?",
      image: "./SUBJECTS/quizzes/GED0083/imgs/m04-f04-q15.png",
      options: [
        "Positive, mg/E",
        "Negative, (E/mg) tan Θ",
        "Positive, (mg/E)tan Θ",
        "Negative, mg/E",
        "Negative, (mg/E) tan Θ"
      ],
      correctAnswer: 2,
      explanation: "The object is displaced to the right, in the same direction as the electric field, so its charge must be positive. At equilibrium, the horizontal force balance is TsinΘ = qE and the vertical force balance is TcosΘ = mg. Dividing yields tanΘ = qE/(mg), so q = (mg/E)tanΘ.",
      reference: "OpenStax University Physics Volume 2 — Electric Force and Equilibrium of Charged Objects; Original FA4 Q15 Diagram"
    }
  ]
});
