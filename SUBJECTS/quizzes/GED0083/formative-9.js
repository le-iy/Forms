window.PandoraQuizzes.register({
  id: "GED0083-M09-F09",
  subject: "GED0083",
  module: 9, 
  title: "Formative Assessment 9",
  kind: "formative",
  version: 1,
  description: "15-item formative assessment on Faraday's law, Lenz's law, magnetic flux, induced emf, mutual inductance, and electromagnetic induction. Original score: 12/15.",
  createdAt: "2026-11-10T10:00:07+08:00",
  showOnHome: true,

  questions: [
    {
      id: "q1",
      type: "multiple_choice",
      question: "What is the direction of the induced magnetic field?",
      image: "./SUBJECTS/quizzes/GED0083/imgs/ged0083-fa9-magnet-coil.png",
      options: [
        "Up",
        "Right",
        "Down",
        "Left"
      ],
      correctAnswer: 3,
      explanation: "The north pole of the magnet is moving toward the left end of the coil, increasing magnetic flux directed to the right through the coil. According to Lenz's law, the induced magnetic field must oppose the increase in flux. It therefore points to the left, making the coil's near end act like a north pole that repels the approaching magnet.",
      reference: "GED0083 — Lenz's Law and Electromagnetic Induction"
    },
    {
      id: "q2",
      type: "multiple_choice",
      question: "This Law says that the Induced current is proportional to the change of magnetic flux .",
      options: [
        "Coulomb's",
        "Lenz's",
        "Ampere's",
        "Faraday's"
      ],
      correctAnswer: 3,
      explanation: "Faraday's law relates induced electromotive force to the rate of change of magnetic flux through a coil: ε = -N(dΦ/dt). For a circuit with constant resistance, Ohm's law gives an induced current I = ε/R, so the induced current is proportional to the rate of flux change. The question's wording omits 'rate' and assumes resistance is constant. Lenz's law describes the direction of induction.",
      reference: "GED0083 — Faraday's Law of Electromagnetic Induction"
    },
    {
      id: "q3",
      type: "multiple_choice",
      question: "A coil of wire is placed in a changing magnetic field. If the number of turns in the coil is decreased, the voltage induced across the coil will ________",
      options: [
        "increase",
        "be excessive",
        "decrease",
        "remain constant"
      ],
      correctAnswer: 2,
      explanation: "The magnitude of the induced emf is |ε| = N|dΦ/dt| when each turn experiences the same rate of magnetic flux change. The induced voltage is directly proportional to the number of turns N. Decreasing N therefore decreases the induced voltage, assuming the magnetic conditions remain the same.",
      reference: "GED0083 — Faraday's Law; Number of Coil Turns"
    },
    {
      id: "q4",
      type: "multiple_choice",
      question: "If a magnet is pushed into a coil, voltage is induced across the coil. If the same magnet is pushed into a coil with twice the number of loops,",
      options: [
        "twice as much voltage is induced.",
        "the same voltage is induced.",
        "one-half as much voltage is induced.",
        "four times as much voltage is induced."
      ],
      correctAnswer: 0,
      explanation: "Faraday's law states that induced emf is proportional to the number of turns: |ε| = N|dΦ/dt|. If the same magnet moves in the same way and each turn experiences the same flux-change rate, doubling the number of turns doubles the magnitude of the induced voltage.",
      reference: "GED0083 — Faraday's Law; Induced Voltage"
    },
    {
      id: "q5",
      type: "multiple_choice",
      question: "The north pole of a magnet is pushed downward into the center of a loop of wire. What will happen?",
      options: [
        "No current will be induced in the wire because the wire is not moving.",
        "No current will be induced in the wire because you need the south pole of the magnet to induce current.",
        "Current will be induced in the wire in a counter-clockwise direction",
        "Current will be induced in the wire in a clockwise direction"
      ],
      correctAnswer: 2,
      explanation: "As the north pole moves downward toward a horizontal loop, the downward magnetic flux through the loop increases. Lenz's law requires the induced current to create an opposing upward field. Using the right-hand rule, an upward field is produced by counterclockwise current when the loop is viewed from above, looking downward toward it. Without that viewing convention, clockwise versus counterclockwise is ambiguous.",
      reference: "GED0083 — Lenz's Law; Right-Hand Rule for a Current Loop"
    },
    {
      id: "q6",
      type: "multiple_choice",
      question: "A circular loop of wire with a diameter of 0.2 m is held at a 45° angle to a 0.5 T magnetic field. What is the magnetic flux through the loop?",
      options: [
        "0 Wb",
        "0.011 Wb",
        "0.10 Wb",
        "0.016 Wb"
      ],
      correctAnswer: 1,
      explanation: "Magnetic flux is Φ = BA cos θ, where θ is the angle between the magnetic field and the surface normal. The radius is 0.2/2 = 0.1 m, giving A = πr² = π(0.1)² = 0.031416 m². Since the angle is 45°, Φ = (0.5)(0.031416)cos 45° ≈ 0.0111 Wb, which rounds to 0.011 Wb. For 45°, the numerical result is the same whether the angle is measured from the plane or its normal.",
      reference: "GED0083 — Magnetic Flux Φ = BA cos θ"
    },
    {
      id: "q7",
      type: "multiple_choice",
      question: "The Earth's magnetic field passes through a square tabletop with a magnitude of 4.95 x 10⁻⁵ T and is directed at an angle of 165° relative to the normal of the tabletop. If the tabletop has 1.50-m sides,what is the magnitude of the magnetic flux through it?",
      options: [
        "2.88 x 10⁻⁵ Wb",
        "7.11 x 10⁻⁵ Wb",
        "3.30 x 10⁻⁶ Wb",
        "1.08 x 10⁻⁴ Wb"
      ],
      correctAnswer: 3,
      explanation: "The tabletop area is A = (1.50 m)² = 2.25 m². Magnetic flux is Φ = BA cos θ, and the question asks for its magnitude, so |Φ| = BA|cos 165°|. Substituting gives |Φ| = (4.95 × 10⁻⁵)(2.25)(0.9659) ≈ 1.08 × 10⁻⁴ Wb. The signed flux would be negative for the chosen normal because cos 165° is negative.",
      reference: "GED0083 — Magnetic Flux Through a Surface"
    },
    {
      id: "q8",
      type: "multiple_choice",
      question: "A uniform magnetic field passes through two areas, A₁ and A₂. The angles between the magnetic field and the normals of areas A₁ and A₂ are 30.0° and 60.0°, respectively. If the magnetic flux through the two areas is the same, what is the ratio A₁/A₂?",
      options: [
        "1.73",
        "0.577",
        "1.00",
        "0.816"
      ],
      correctAnswer: 1,
      explanation: "Equal flux means BA₁cos 30° = BA₂cos 60°. Cancel the common magnetic field B and rearrange: A₁/A₂ = cos 60°/cos 30° = 0.5/0.8660 ≈ 0.577. The surface at 60° requires a larger area to produce the same flux because its effective perpendicular area is smaller.",
      reference: "GED0083 — Magnetic Flux and Surface Orientation"
    },
    {
      id: "q9",
      type: "multiple_choice",
      question: "A single turn plane circular conducting loop of area A and resistance R is placed in a uniform magnetic field of flux density B which has a time rate of change. The plane of the loop is perpendicular to the magnetic field. If the emf induced in the loop is V, the time rate of change of the magnetic flux density is ____.",
      options: [
        "A/V",
        "V/RA",
        "RV/A",
        "V/A"
      ],
      correctAnswer: 3,
      explanation: "For a one-turn loop with its plane perpendicular to the magnetic field, the magnetic flux is Φ = BA. Faraday's law gives the magnitude of the induced emf as V = A|dB/dt| when the area is constant. Therefore, |dB/dt| = V/A. The loop resistance R would be needed to calculate induced current using I = V/R, but it is unnecessary when the induced emf V is already known.",
      reference: "GED0083 — Faraday's Law for a Single-Turn Loop"
    },
    {
      id: "q10",
      type: "identification",
      question: "A magnetic field is directed perpendicular to the plane of area 0.68 m^2 2 rectangular coil consisting of 77.39 loops of wire. To induce an average emf of -0.2 V in the coil, the magnetic field has an increase of 3.3T during a time interval Δt. Determine Δt.\n\nAnswer should be in two (2) decimal places.",
      correctAnswer: "868.32",
      explanation: "Using the magnitude form of Faraday's law, |ε| = NA|ΔB|/Δt. Rearranging gives Δt = NA|ΔB|/|ε|. Substitute N = 77.39, A = 0.68 m², ΔB = 3.3 T, and |ε| = 0.2 V: Δt = (77.39)(0.68)(3.3)/0.2 = 868.3158 s ≈ 868.32 s. The negative emf indicates an opposing induced polarity, not a negative time interval. The unusually fractional number of loops is preserved from the assessment.",
      reference: "GED0083 — Faraday's Law; Average Induced EMF"
    },
    {
      id: "q11",
      type: "multiple_choice",
      question: "Assume the switch S has been closed for a long time. Which one of the following statements is true?",
      image: "./SUBJECTS/quizzes/GED0083/imgs/ged0083-fa9-two-coils.png",
      options: [
        "A magnetic field that points toward B appears inside coil 1.",
        "A current will pass through r, but there will be no current through R.",
        "An induced magnetic field that points toward B appears inside coil 2.",
        "An induced current will flow from right to left in R.",
        "An induced current will flow from left to right in r."
      ],
      correctAnswer: 1,
      explanation: "With switch S closed for a long time, the direct current through coil 1 reaches a steady value. That current also passes through the series resistor r. The magnetic flux linking coil 2 is then constant, so its induced emf is zero because ε₂ = -M(dI₁/dt) and dI₁/dt = 0. Consequently, no sustained induced current flows through the resistor R in coil 2. The magnetic field produced by coil 1 can still exist even though no emf is induced in coil 2.",
      reference: "GED0083 — Mutual Inductance; Steady-State DC and Induced EMF"
    },
    {
      id: "q12",
      type: "multiple_choice",
      question: "Assume that S has been closed for a long time. Which one of the following statements is true if S is suddenly opened?",
      image: "./SUBJECTS/quizzes/GED0083/imgs/ged0083-fa9-two-coils.png",
      options: [
        "There is an induced magnetic field in coil 2 that points toward B.",
        "There is an induced current in R that flows from right to left.",
        "There is no induced magnetic field in coil 2.",
        "There is an induced magnetic field in coil 2 that points toward C."
      ],
      correctAnswer: 3,
      explanation: "Opening S causes the current in coil 1 to decrease, changing the magnetic flux linking coil 2. By Lenz's law, the induced current in coil 2 creates a magnetic field that opposes the decrease in the original flux, so it tries to maintain the original field direction. The selected answer identifies that direction as toward C. This direction depends on the winding orientation shown in the diagram and is retained as the provisional key because the PDF conceals the official correct answer. It is not merely the fact that the switch opens that determines whether the field points toward B or C.",
      reference: "GED0083 — Mutual Induction; Lenz's Law When Current Decreases"
    },
    {
      id: "q13",
      type: "multiple_choice",
      question: "Determine the magnitude of the emf induced in the loop.",
      image: "./SUBJECTS/quizzes/GED0083/imgs/ged0083-fa9-collapsing-loop.png",
      options: [
        "5.9 x 10⁻² V",
        "1.2 x 10⁻¹ V",
        "5.9 x 10² V",
        "1.8 x 10² V"
      ],
      correctAnswer: 0,
      explanation: "The loop has initial area A = πr² = π(0.15)² = 0.070686 m². Its final enclosed area is approximately zero, so the magnitude of flux change is |ΔΦ| = BA = (0.25)(0.070686) = 0.0176715 Wb. Faraday's law gives |ε_avg| = |ΔΦ|/Δt = 0.0176715/0.30 = 0.05890 V ≈ 5.9 × 10⁻² V. The 4.0 Ω resistance is not needed to calculate emf; it would be needed to calculate the induced current.",
      reference: "GED0083 — Faraday's Law; Changing Loop Area"
    },
    {
      id: "q14",
      type: "multiple_choice",
      question: "Two coils share a common axis as shown in the figure. The mutual inductance of this pair of coils is 6.0 mH. If the current in coil 1 is changing at the rate of 3.5 A/s, what is the magnitude of the emf generated in coil 2?",
      image: "./SUBJECTS/quizzes/GED0083/imgs/ged0083-fa9-two-coils.png",
      options: [
        "1.7 x 10⁻³ V",
        "5.8 x 10⁻⁴ V",
        "2.1 x 10⁻² V",
        "3.5 x 10⁻³ V"
      ],
      correctAnswer: 2,
      explanation: "For mutual induction, the induced emf magnitude is |ε₂| = M|dI₁/dt|. Convert M = 6.0 mH to 6.0 × 10⁻³ H, then multiply by 3.5 A/s. The result is (6.0 × 10⁻³)(3.5) = 0.021 V = 2.1 × 10⁻² V. The magnitude does not depend on the direction of the changing current, although the induced polarity does.",
      reference: "GED0083 — Mutual Inductance and Induced EMF"
    },
    {
      id: "q15",
      type: "multiple_choice",
      question: "Immediately after the switch S is closed, which one of the following statements is true?",
      image: "./SUBJECTS/quizzes/GED0083/imgs/ged0083-fa9-two-coils.png",
      options: [
        "An induced magnetic field that points toward B appears inside coil 2.",
        "An induced current will flow from right to left in R.",
        "An induced current will flow from left to right in r.",
        "A magnetic field that points toward B appears inside coil 1."
      ],
      correctAnswer: 1,
      explanation: "Immediately after S closes, the current in coil 1 begins increasing. The resulting changing magnetic flux induces an emf and a temporary current in the closed circuit of coil 2. Lenz's law requires the induced field to oppose the increase in flux linking coil 2. The selected option states that the induced current through R flows from right to left; its exact direction depends on the winding orientation and connection points in the figure. The PDF hides the official correct selection, so this directional answer remains provisional rather than independently confirmed.",
      reference: "GED0083 — Mutual Induction; Lenz's Law When Current Increases"
    }
  ]
});
