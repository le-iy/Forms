
window.PandoraQuizzes.register({
  id: "GED0083-M05-F07",
  subject: "GED0083",
  module: 5,
  title: "Formative Assessment 7",
  kind: "formative",
  version: 1,
  description: "15-item formative assessment on Kirchhoff's junction and loop laws, current division, series and parallel circuits, resistor power, and circuit analysis. Original score: 14/15.",
  createdAt: "2026-11-10T07:30:44+08:00",
  showOnHome: true,

  questions: [
    {
      id: "q1",
      type: "multiple_choice",
      question: "Which is a correct statement of Kirchhoff's junction law?",
      options: [
        "The total current through the resistors is the sum of the current through each resistor.",
        "The sum of currents around any closed loop in a circuit is zero",
        "The total current entering a junction is equal to the total current leaving the junction",
        "The total voltage entering a junction is equal to the total voltage leaving the junction",
        "The sum of voltages around any closed loop in a circuit is zero"
      ],
      correctAnswer: 2,
      explanation: "Kirchhoff's Current Law (KCL) follows conservation of electric charge: charge cannot continuously accumulate at a junction in a steady-state circuit. Therefore, the total current entering a junction must equal the total current leaving it. In equation form, ΣI_in = ΣI_out. The statement about the sum of voltages around a closed loop refers instead to Kirchhoff's Voltage Law.",
      reference: "GED0083 — Kirchhoff's Laws; Conservation of Electric Charge"
    },
    {
      id: "q2",
      type: "multiple_choice",
      question: "The sum of the voltages over any closed loop is equal to __________",
      options: [
        "1 V",
        "2 V",
        "0 V",
        "Infinity"
      ],
      correctAnswer: 2,
      explanation: "Kirchhoff's Voltage Law states that the algebraic sum of all potential differences around a closed loop equals zero. Voltage rises from sources and voltage drops across circuit elements must balance when signs are assigned consistently. Thus, ΣV = 0 V.",
      reference: "GED0083 — Kirchhoff's Voltage Law"
    },
    {
      id: "q3",
      type: "multiple_choice",
      question: "Which is a correct statement of Kirchhoff's Loop Law?",
      options: [
        "The total current through the resistors is the sum of the current through each resistor.",
        "The sum of voltages around any closed loop is zero",
        "The sum of currents around any closed loop is zero",
        "The total current going into a junction is equal to the total current coming out of the junction",
        "The total voltage going into a junction is equal to the total voltage coming out of it"
      ],
      correctAnswer: 1,
      explanation: "Kirchhoff's Loop Law, also called Kirchhoff's Voltage Law, states that the algebraic sum of voltage rises and drops around any closed circuit path is zero. For example, a 12 V source supplying two series resistors with drops of 5 V and 7 V satisfies +12 - 5 - 7 = 0. Current conservation at a junction is a different law.",
      reference: "GED0083 — Kirchhoff's Loop Law"
    },
    {
      id: "q4",
      type: "multiple_choice",
      question: "What is the basic law that has to be followed in order to analyze a circuit?",
      options: [
        "Newton's laws",
        "Faraday's laws",
        "Ampere's laws",
        "Kirchhoff's law"
      ],
      correctAnswer: 3,
      explanation: "Kirchhoff's circuit laws provide two fundamental tools for analyzing electrical networks. The current law describes how currents combine at junctions, while the voltage law relates potential differences around closed loops. Together with Ohm's Law, they allow unknown currents, voltages, and resistances to be determined.",
      reference: "GED0083 — Kirchhoff's Circuit Laws and Ohm's Law"
    },
    {
      id: "q5",
      type: "multiple_choice",
      question: "The algebraic sum of voltages around any closed path in a network is equal to __________",
      options: [
        "0",
        "Infinity",
        "Negative Polarity",
        "1"
      ],
      correctAnswer: 0,
      explanation: "Kirchhoff's Voltage Law requires the algebraic sum of potential changes around a closed path to equal zero. A source can produce a voltage rise, while resistors produce voltage drops in the direction of current. Once all signed voltage changes are added, their sum is zero.",
      reference: "GED0083 — Kirchhoff's Voltage Law"
    },
    {
      id: "q6",
      type: "multiple_choice",
      question: "What would be the correct junction law equation for the junction shown below?",
      image: "./SUBJECTS/quizzes/GED0083/imgs/ged0083-fa7-junction-q6.png",
      options: [
        "I₃ + I₁ + I₂ = 0",
        "I₁ = I₃ + I₂",
        "I₃ = I₁ + I₂",
        "I₂ = I₁ + I₃",
        "I₁ + I₃ = I₂"
      ],
      correctAnswer: 2,
      explanation: "In the diagram, I₃ flows toward the junction from the left, while I₁ flows to the upper-right and I₂ flows downward, away from the junction. Kirchhoff's Current Law gives current entering = current leaving. Therefore, I₃ = I₁ + I₂. The current directions, rather than the visual positions of the labels, determine which terms belong on each side.",
      reference: "GED0083 — Kirchhoff's Current Law at a Junction"
    },
    {
      id: "q7",
      type: "multiple_choice",
      question: "A junction where two (or) more than two network elements meet is known as a ____________",
      options: [
        "Branch",
        "Loop",
        "Mesh",
        "Node"
      ],
      correctAnswer: 3,
      explanation: "A node is a point or electrically connected region where circuit elements join. All points connected by ideal wires without intervening elements are considered the same node. A branch is a path containing an element, a loop is a closed path, and a mesh is a loop with no other loops inside it.",
      reference: "GED0083 — Nodes, Branches, Loops, and Meshes"
    },
    {
      id: "q8",
      type: "multiple_choice",
      question: "Calculate the voltage dropped across the load resistor by this set of parallel-connected current sources:",
      image: "./SUBJECTS/quizzes/GED0083/imgs/ged0083-fa7-parallel-sources-q8.png",
      options: [
        "15 V",
        "40.5 V",
        "450 V",
        "22.5 V",
        "3 V"
      ],
      correctAnswer: 1,
      explanation: "The three current sources are connected in parallel and their arrows point in the same direction, so the currents add: I_total = 10 mA + 15 mA + 2 mA = 27 mA = 0.027 A. The 1.5 kΩ load resistor carries the combined current. By Ohm's Law, V = IR = (0.027 A)(1500 Ω) = 40.5 V. Converting milliamperes and kilo-ohms consistently is essential.",
      reference: "GED0083 — Kirchhoff's Current Law; Ohm's Law; Parallel Current Sources"
    },
    {
      id: "q9",
      type: "multiple_choice",
      question: "Find the current i3 in the circuit shown below",
      image: "./SUBJECTS/quizzes/GED0083/imgs/ged0083-fa7-branch-currents-q9.png",
      options: [
        "3A",
        "1A",
        "2A",
        "0.5 A",
        "0 A"
      ],
      correctAnswer: 0,
      explanation: "The current through R1 is 5 A, entering the junction where the circuit splits. The downward current through R2 is 2 A, and the remaining current passes through R3 as i3. By Kirchhoff's Current Law, 5 A = 2 A + i3, so i3 = 5 - 2 = 3 A. The 12 V battery is not needed for this calculation because the relevant branch currents are already known.",
      reference: "GED0083 — Kirchhoff's Current Law; Current Splitting"
    },
    {
      id: "q10",
      type: "multiple_choice",
      question: "Given the figure below, find the value of the resistance R.",
      image: "./SUBJECTS/quizzes/GED0083/imgs/ged0083-fa7-find-resistance-q10.png",
      options: [
        "17.2 Ω",
        "17.4 Ω",
        "17.8 Ω",
        "17.5 Ω"
      ],
      correctAnswer: 3,
      explanation: "Let V be the voltage across the parallel branches containing 7 Ω and the unknown R. The current through R is given as 2 A, so Kirchhoff's Current Law gives the current through the series 5 Ω resistor as V/7 + 2. Apply Kirchhoff's Voltage Law: 70 = 5(V/7 + 2) + V. Simplifying gives 60 = 12V/7, hence V = 35 V. Since the current through R is 2 A, R = V/I = 35/2 = 17.5 Ω.",
      reference: "GED0083 — Kirchhoff's Current and Voltage Laws; Ohm's Law"
    },
    {
      id: "q11",
      type: "multiple_choice",
      question: "Given the circuit shown, calculate the amount of voltage between test points TP1 and TP3.",
      image: "./SUBJECTS/quizzes/GED0083/imgs/ged0083-fa7-testpoints-q11-q13.png",
      options: [
        "38.05 V",
        "22.22 V",
        "6.32 V",
        "15.83 V",
        "11.11 V"
      ],
      correctAnswer: 3,
      explanation: "All three resistors belong to one series loop, so R_total = 1 kΩ + 4.7 kΩ + 3.3 kΩ = 9.0 kΩ. The loop current is I = 25 V/9000 Ω = 0.002778 A. From TP1 to TP3 along the upper-left route, the path includes the 1 kΩ and 4.7 kΩ resistors, totaling 5.7 kΩ. The voltage magnitude is V = IR = (25/9000)(5700) = 15.83 V.",
      reference: "GED0083 — Series Resistance; Kirchhoff's Voltage Law; Voltage Drop Between Nodes"
    },
    {
      id: "q12",
      type: "multiple_choice",
      question: "Determine the power dissipated by the 40-Ω resistor in the circuit shown.",
      image: "./SUBJECTS/quizzes/GED0083/imgs/ged0083-fa7-power-q12.png",
      options: [
        "9.0 W",
        "3.6 W",
        "27 W",
        "14 W",
        "4.5 W"
      ],
      correctAnswer: 1,
      explanation: "First combine the parallel resistors: R_parallel = (40 × 10)/(40 + 10) = 8 Ω. This combination is in series with the 4 Ω resistor, so R_total = 4 + 8 = 12 Ω. The current supplied by the 18 V battery is I_total = 18/12 = 1.5 A. The parallel branches have a common voltage of V_parallel = (1.5)(8) = 12 V. Therefore, the 40 Ω resistor dissipates P = V²/R = 12²/40 = 3.6 W. The 4.5 W option is incorrect because the full 18 V is not across the 40 Ω resistor.",
      reference: "GED0083 — Series-Parallel Resistive Circuits; Electric Power P = V²/R"
    },
    {
      id: "q13",
      type: "multiple_choice",
      question: "Given the circuit shown below, calculate the amount of voltage between test points TP2 and TP4.",
      image: "./SUBJECTS/quizzes/GED0083/imgs/ged0083-fa7-testpoints-q11-q13.png",
      options: [
        "22.22 V",
        "6.32 V",
        "11.11 V",
        "38.05 V",
        "15.83 V"
      ],
      correctAnswer: 0,
      explanation: "The three resistors are connected in series, producing a total resistance of 1 + 4.7 + 3.3 = 9 kΩ. The circuit current is I = 25 V/9 kΩ = 2.7778 mA. The path from TP2 to TP4 includes the 4.7 kΩ and 3.3 kΩ resistors, whose combined resistance is 8 kΩ. Their voltage drop is V = IR = (25/9000)(8000) = 22.22 V. This is different from Q11 because the two test points span different resistors.",
      reference: "GED0083 — Kirchhoff's Voltage Law; Series Circuit Test Points"
    },
    {
      id: "q14",
      type: "multiple_choice",
      question: "At what rate is energy dissipated by R₁ when the switch S is closed on A?",
      image: "./SUBJECTS/quizzes/GED0083/imgs/ged0083-fa7-switch-q14.png",
      options: [
        "1W",
        "4W",
        "144W",
        "9W",
        "36W"
      ],
      correctAnswer: 4,
      explanation: "When switch S is closed on A, the circuit containing V2 is connected to R1 and the parallel combination of R2 and R3. Since R2 = R3 = 2 Ω, their equivalent resistance is (2 × 2)/(2 + 2) = 1 Ω. The total resistance seen by the 12 V V2 source is R1 + R_parallel = 1 + 1 = 2 Ω. The current through R1 is 12/2 = 6 A. Its power is P = I²R = 6²(1) = 36 W. The V1 and R4 branch is disconnected from this active loop when the switch is at A.",
      reference: "GED0083 — Switch Circuits; Parallel Resistance; Power P = I²R"
    },
    {
      id: "q15",
      type: "multiple_choice",
      question: "What is the current through the 3.6- Ω resistor?",
      image: "./SUBJECTS/quizzes/GED0083/imgs/ged0083-fa7-five-resistors-q15.png",
      options: [
        "15 A",
        "1.3 A",
        "1.7 A",
        "3.5 A",
        "2.9 A"
      ],
      correctAnswer: 2,
      explanation: "The 4.1 Ω and 2.4 Ω resistors form a series branch of 6.5 Ω. This branch is parallel with the 2.7 Ω resistor, giving R_parallel = (2.7 × 6.5)/(2.7 + 6.5) = 1.9076 Ω. The 3.2 Ω resistor, parallel combination, and 3.6 Ω resistor are then in series between A and B. Thus R_total = 3.2 + 1.9076 + 3.6 = 8.7076 Ω. The circuit current is I = 15/8.7076 = 1.7226 A, approximately 1.7 A. Because the 3.6 Ω resistor lies after the parallel branches rejoin, it carries the total current.",
      reference: "GED0083 — Equivalent Resistance; Series-Parallel Circuits; Ohm's Law"
    }
  ]
});
