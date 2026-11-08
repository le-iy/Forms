
window.PandoraQuizzes.register({
  id: "GED0083-M05-F05",
  subject: "GED0083",
  module: 5,
  title: "Formative 5",
  kind: "formative",
  version: 1,
  description: "Formative 5 covering electric potential, electric potential energy, conservative electrostatic forces, potential difference, and point-charge systems.",
  createdAt: "2026-11-07T01:00:00+08:00",
  showOnHome: true,

  questions: [
    {
      id: "q1",
      type: "multiple_choice",
      question: "Complete the following statement: The electron volt is a unit of",
      options: [
        "electric field strength.",
        "electric power.",
        "energy.",
        "electric potential difference.",
        "electric charge."
      ],
      correctAnswer: 2,
      explanation: "An electron volt (eV) is a unit of energy equal to the energy gained by one elementary charge moving through a potential difference of one volt. One electron volt equals approximately 1.602 × 10⁻¹⁹ joules.",
      reference: "OpenStax University Physics Volume 2, Section 7.1 — Electric Potential Energy"
    },
    {
      id: "q2",
      type: "multiple_choice",
      question: "Two positive point charges are separated by a distance R. If the distance between the charges is reduced to R/2, what happens to the total electric potential energy of the system?",
      options: [
        "It is reduced to one-fourth of its original value.",
        "It is doubled.",
        "It increases by a factor of 4.",
        "It is reduced to one-half of its original value.",
        "It remains the same."
      ],
      correctAnswer: 1,
      explanation: "Electric potential energy for two point charges is U = kq₁q₂/r. Reducing the separation from R to R/2 doubles the potential energy. Because both charges are positive, their potential energy is positive.",
      reference: "OpenStax University Physics Volume 2, Section 7.1 — Electric Potential Energy"
    },
    {
      id: "q3",
      type: "multiple_choice",
      question: "Which one of the following statements best explains why it is possible to define an electrostatic potential in a region of space that contains an electrostatic field?",
      options: [
        "Work must be done to bring two positive charges closer together.",
        "Like charges repel one another and unlike charges attract one another.",
        "The work required to bring two charges together is independent of the path taken.",
        "A negative charge will gain kinetic energy as it moves away from another negative charge.",
        "A positive charge will gain kinetic energy as it approaches a negative charge."
      ],
      correctAnswer: 2,
      explanation: "Electrostatic forces are conservative, meaning the work performed between two points is independent of the path taken. Therefore, electric potential can be defined using potential energy per unit charge.",
      reference: "OpenStax University Physics Volume 2, Section 7.1 — Electric Potential Energy"
    },
    {
      id: "q4",
      type: "identification",
      question: "The electric potential at a certain point in space is 9 V. What is the electric potential energy of a -0.029 C charge placed at that point? Answer should be rounded off to three (3) decimal places.",
      correctAnswer: "-0.261",
      explanation: "Electric potential energy is U = qV. Substituting q = -0.029 C and V = 9 V gives U = -0.261 J. The negative sign reflects the negative charge at a positive electric potential.",
      reference: "OpenStax University Physics Volume 2, Section 7.2 — Electric Potential and Potential Difference"
    },
    {
      id: "q5",
      type: "identification",
      question: "The electric potential at a certain point in space is 19.083 V. What is the electric potential energy of a -195.678 micro C charge placed at that point? Answer should be rounded off to four (4) decimal places.",
      correctAnswer: "-0.0037",
      explanation: "Convert the charge to coulombs: -195.678 μC = -195.678 × 10⁻⁶ C. Using U = qV gives approximately -0.003734 J, which rounds to -0.0037 J.",
      reference: "OpenStax University Physics Volume 2, Section 7.2 — Electric Potential"
    },
    {
      id: "q6",
      type: "identification",
      question: "The electric potential at a certain point in space is 9.847 V. What is the electric potential energy of a 47.644 micro C charge placed at that point? Answer should be rounded off to four (4) decimal places.",
      correctAnswer: "0.0005",
      explanation: "Using U = qV, the energy equals (47.644 × 10⁻⁶ C)(9.847 V), approximately 0.000469 J. Rounded to four decimal places, the answer is 0.0005 J.",
      reference: "OpenStax University Physics Volume 2, Section 7.2 — Electric Potential"
    },
    {
      id: "q7",
      type: "multiple_choice",
      question: "P and Q are points within a uniform electric field that are separated by a distance of 0.1 m as shown. The potential difference between P and Q is 50 V. How much work is required to move a +1000 micro C point charge from P to Q?",
      image: "./SUBJECTS/quizzes/GED0083/imgs/m05-f05-q07.png",
      options: [
        "0.02 J",
        "1000 J",
        "5000 J",
        "200 J",
        "0.05 J"
      ],
      correctAnswer: 4,
      explanation: "The charge is 1000 μC = 0.001 C. Since the displacement is against the electric field shown, the required external work is W = qΔV = 0.001 × 50 = 0.05 J.",
      reference: "OpenStax University Physics Volume 2, Section 7.2 — Potential Difference"
    },
    {
      id: "q8",
      type: "multiple_choice",
      question: "A charge q = -4.0 μC is moved 0.25 m horizontally to point P in a region where an electric field is 150 V/m and directed vertically as shown. What is the change in the electric potential energy of the charge?",
      image: "./SUBJECTS/quizzes/GED0083/imgs/m05-f05-q08.png",
      options: [
        "zero joules",
        "+2.4 × 10³ J",
        "2.4 × 10³ J",
        "1.5 × 10⁴ J",
        "+1.5 × 10⁴ J"
      ],
      correctAnswer: 0,
      explanation: "The displacement is horizontal while the electric field is vertical. Therefore, E·d = 0 and the potential difference is zero. Since ΔU = qΔV, the change in potential energy is zero joules.",
      reference: "OpenStax University Physics Volume 2, Section 7.2 — Electric Potential Difference"
    },
    {
      id: "q9",
      type: "multiple_choice",
      question: "If the electric potential at a certain point is zero, does the electric field at that point have to be zero?",
      options: [
        "No, the electric field does not have to be zero.",
        "Yes, the electric field is zero."
      ],
      correctAnswer: 0,
      explanation: "Electric field depends on the spatial gradient of electric potential, E = -∇V. A potential can be zero at a particular location while its gradient remains nonzero, so the field need not vanish.",
      reference: "OpenStax University Physics Volume 2, Section 7.3 — Calculations of Electric Potential"
    },
    {
      id: "q10",
      type: "multiple_choice",
      question: "Two-point charges are held at the corners of a rectangle as shown in the figure. The lengths of sides of the rectangle are 0.050 m and 0.150 m. Assume that the electric potential is defined to be zero at infinity. What is the potential difference, V_B - V_A, between corners Aand B?",
      image: "./SUBJECTS/quizzes/GED0083/imgs/m05-f05-q10.png",
      options: [
        "7.8 × 10⁵ V",
        "8.4 × 10⁵ V",
        "6.0 × 10⁵ V",
        "zero volts",
        "7.2 × 10⁵ V"
      ],
      correctAnswer: 1,
      explanation: "The potential at each corner is the sum of kq/r contributions from both charges. The 8.4 × 10⁵ V choice matches the magnitude obtained from the charges and distances in the diagram. However, if the upper-left charge is -5.0 μC and the lower-right charge is +2.0 μC, the signed difference V_B - V_A is approximately -8.4 × 10⁵ V. The original answer choices omit the negative result, so the classroom magnitude-based answer is retained with this qualification.",
      reference: "OpenStax University Physics Volume 2, Section 7.3 — Electric Potential Due to Point Charges; original FA5 Q10"
    },
    {
      id: "q11",
      type: "multiple_choice",
      question: "Four point charges are individually brought from infinity and placed at the corners of a square as shown in the figure. Each charge has the identical value +Q. The length of the diagonal of the square is 2a. What is the electric potential at P, the center of the square?",
      image: "./SUBJECTS/quizzes/GED0083/imgs/m05-f05-q11.png",
      options: [
        "zero volts",
        "kQ/4a",
        "2kQ/a",
        "kQ/a",
        "4kQ/a"
      ],
      correctAnswer: 4,
      explanation: "The distance from the center to each corner equals half the diagonal, or a. Electric potential is a scalar, so the four contributions add directly: V = 4(kQ/a).",
      reference: "OpenStax University Physics Volume 2, Section 7.3 — Superposition of Electric Potential"
    },
    {
      id: "q12",
      type: "multiple_choice",
      question: "Three point charges –Q, –Q, and +3Q are arranged along a line as shown in the sketch. What is the electric potential at the point P?",
      image: "./SUBJECTS/quizzes/GED0083/imgs/m05-f05-q12.png",
      options: [
        "+1.6kQ/R",
        "+kQ/R",
        "-1.6kQ/R",
        "+4.4kQ/R",
        "-2kQ/R"
      ],
      correctAnswer: 0,
      explanation: "The positive charge +3Q is distance R from P, while each -Q charge is distance √2R from P. Therefore V = 3kQ/R - 2kQ/(√2R) = (3 - √2)kQ/R ≈ +1.586kQ/R, or approximately +1.6kQ/R.",
      reference: "OpenStax University Physics Volume 2, Section 7.3 — Electric Potential and Superposition"
    },
    {
      id: "q13",
      type: "multiple_choice",
      question: "Two point charges are arranged along the x axis as shown in the figure. At which of the following values of x is the electric potential equal to zero?\n\nNote: At infinity, the electric potential is zero.",
      image: "./SUBJECTS/quizzes/GED0083/imgs/m05-f05-q13.png",
      options: [
        "+0.54 m",
        "+0.29 m",
        "+0.05 m",
        "+0.40 m",
        "+0.71 m"
      ],
      correctAnswer: 1,
      explanation: "Between the charges +2.0 μC at x = 0 and -5.0 μC at x = 1.0 m, set their scalar potentials to cancel: 2/x = 5/(1 - x). Solving gives 2 - 2x = 5x, so x = 2/7 ≈ 0.286 m, which rounds to +0.29 m.",
      reference: "OpenStax University Physics Volume 2, Section 7.3 — Electric Potential Due to Point Charges"
    },
    {
      id: "q14",
      type: "multiple_choice",
      question: "Four point charges are individually brought from infinity and placed at the corners of a square as shown in the figure. Each charge has the identical value +Q. The length of the diagonal of the square is 2a. What is the electric potential at P, the center of the square?",
      image: "./SUBJECTS/quizzes/GED0083/imgs/m05-f05-q14.png",
      options: [
        "2kQ/a",
        "4kQ/a",
        "kQ/a",
        "zero volts",
        "kQ/4a"
      ],
      correctAnswer: 1,
      explanation: "All four positive charges are distance a from the center because the diagonal is 2a. Their potentials add algebraically, giving 4kQ/a. This question repeats Q11 with a different option order.",
      reference: "OpenStax University Physics Volume 2, Section 7.3 — Electric Potential and Superposition"
    },
    {
      id: "q15",
      type: "multiple_choice",
      question: "Two A +1.0 μC point charge is moved from point A to B in the uniform electric field as shown. Which one of the following statements is necessarily true concerning the potential energy of the point charge?",
      image: "./SUBJECTS/quizzes/GED0083/imgs/m05-f05-q15.png",
      options: [
        "It decreases by 10.8 × 10⁶ J.",
        "It increases by 10.8 × 10⁶ J.",
        "It decreases by 9.0 × 10⁻⁶ J.",
        "It decreases by 6.0 × 10⁶ J.",
        "It increases by 6.0 × 10⁶ J."
      ],
      correctAnswer: 2,
      explanation: "CORRECTED ANSWER: The field points right with strength 3 V/m. Only the 3.0 m horizontal displacement contributes to potential difference, so ΔV = -EΔx = -(3)(3.0) = -9 V. For q = +1.0 μC, ΔU = qΔV = -9.0 × 10⁻⁶ J. The vertical displacement does not contribute. The original screenshot appears to omit or obscure the negative exponent; option C is normalized to the physically correct unit magnitude.",
      reference: "OpenStax University Physics Volume 2, Section 7.2 — Electric Potential Difference; original FA5 Q15"
    }
  ]
});
