
window.PandoraQuizzes.register({
  id: "GED0083-M08-F08",
  subject: "GED0083",
  module: 8,
  title: "Formative Assessment 8",
  kind: "formative",
  version: 1,
  description: "15-item formative assessment covering magnetic fields, magnetic forces on moving charges and wires, the right-hand rule, current loops, and mass spectrometry. Original score: 13/15.",
  createdAt: "2026-11-10T09:17:00+08:00",
  showOnHome: true,

  questions: [
    {
      id: "q1",
      type: "multiple_choice",
      question: "What is our best evidence that Earth has a magnetic field?",
      options: [
        "Earth's oceans all have currents",
        "All things fall toward Earth's center",
        "Winds blow from east to west",
        "A compass needle lines up with it"
      ],
      correctAnswer: 3,
      explanation: "A compass needle is a small magnet that experiences torque in Earth's magnetic field. It rotates until it aligns approximately with the local magnetic field direction. Falling objects demonstrate gravity rather than magnetism, while ocean currents and winds are not direct evidence of Earth's magnetic field.",
      reference: "GED0083 — Earth's Magnetic Field; Magnetic Dipoles and Compasses"
    },
    {
      id: "q2",
      type: "multiple_choice",
      question: "Which one of the following statements concerning the magnetic force on a charged particle in a magnetic field is true?",
      options: [
        "It depends on the component of the particle's velocity that is perpendicular to the field",
        "It is a maximum if the particle moves parallel to the field.",
        "It is zero if the particle moves perpendicular to the field.",
        "It is a maximum if the particle is stationary."
      ],
      correctAnswer: 0,
      explanation: "The magnitude of the magnetic force on a moving charge is F = |q|vB sin(theta), where theta is the angle between velocity and magnetic field. Only the velocity component perpendicular to B produces magnetic force. The force is maximum for perpendicular motion, zero for parallel motion, and zero when the particle is stationary.",
      reference: "GED0083 — Magnetic Force on a Moving Charged Particle; Lorentz Force"
    },
    {
      id: "q3",
      type: "multiple_choice",
      question: "A hydrogen atom that has lost its electron is moving east in a region where the magnetic field is directed from south to north. It will be deflected:",
      options: [
        "north",
        "down",
        "south",
        "up"
      ],
      correctAnswer: 3,
      explanation: "A hydrogen atom that has lost its electron is a positively charged proton. Magnetic force follows F = q(v × B). Taking east as +x, north as +y, and up as +z, the cross product (+x) × (+y) points upward (+z). Because the charge is positive, the force follows that direction. Therefore, the particle is deflected upward.",
      reference: "GED0083 — Right-Hand Rule; Magnetic Force F = q(v × B)"
    },
    {
      id: "q4",
      type: "multiple_choice",
      question: "A proton traveling due east in a region that contains only a magnetic field experiences a vertically upward force (away from the surface of the earth). What is the direction of the magnetic field?",
      options: [
        "north",
        "east",
        "south",
        "down"
      ],
      correctAnswer: 0,
      explanation: "For a proton, which has positive charge, the magnetic force direction is v × B. The velocity points east (+x) and the force points up (+z). A magnetic field pointing north (+y) produces (+x) × (+y) = +z. A field parallel to the proton's velocity would produce no magnetic force.",
      reference: "GED0083 — Magnetic Force Direction and Right-Hand Rule"
    },
    {
      id: "q5",
      type: "multiple_choice",
      question: "What happens if you cut a bar magnet in half?",
      options: [
        "You get two South pole magnets",
        "You get two smaller magnets, each with a North and South pole",
        "You get a North pole magnet and a South pole magnet",
        "You get two North pole magnets"
      ],
      correctAnswer: 1,
      explanation: "A conventional bar magnet has both a north and a south magnetic pole. Cutting it into two pieces does not isolate the poles. Each smaller piece becomes a magnet with its own north and south ends. This illustrates the absence of isolated magnetic monopoles in ordinary magnet experiments.",
      reference: "GED0083 — Magnetic Poles and Bar Magnets"
    },
    {
      id: "q6",
      type: "multiple_choice",
      question: "A mass spectrometer is used to separate two isotopes of uranium with masses m₁ and m₂ where m₂ > m₁. The two types of uranium atom exit an ion source S with the same charge of +e and are accelerated through a potential difference V. The charged atoms then enter a constant, uniform magnetic field B as shown. If r₁ = 0.5049 m and r₂ = 0.5081 m, what is the value of the ratio m₁/m₂?",
      image: "./SUBJECTS/quizzes/GED0083/imgs/ged0083-fa8-q6-mass-spectrometer.png",
      options: [
        "0.9749",
        "0.9874",
        "0.9984",
        "0.9937"
      ],
      correctAnswer: 1,
      explanation: "The ions gain kinetic energy qV = (1/2)mv², then follow circular paths with radius r = mv/(qB). Combining the equations gives r² = 2mV/(qB²). Since both isotopes have the same charge, accelerating voltage, and magnetic field, mass is proportional to r². Thus m₁/m₂ = (r₁/r₂)² = (0.5049/0.5081)² ≈ 0.9874. The smaller radius corresponds to the smaller mass.",
      reference: "GED0083 — Mass Spectrometers; Magnetic Circular Motion"
    },
    {
      id: "q7",
      type: "multiple_choice",
      question: "If a magnetic field B exerts a force F on a wire of length L with electric current I in a magnetic field, then what value of the angle between the direction of the current I and the magnetic field B gives a maximum value for the magnitude of F?",
      options: [
        "90°",
        "120°",
        "0°",
        "180°",
        "45°"
      ],
      correctAnswer: 0,
      explanation: "For a straight current-carrying wire in a uniform magnetic field, the force magnitude is F = ILB sin(theta). The sine function reaches its maximum value of 1 at theta = 90°, so the force is greatest when the current direction is perpendicular to the magnetic field. The force is zero at 0° and 180°.",
      reference: "GED0083 — Magnetic Force on a Current-Carrying Wire"
    },
    {
      id: "q8",
      type: "multiple_choice",
      question: "If a particle of charge 10⁻¹² C moving along the x-direction with a velocity of 10⁵ m/s experiences a force of 10⁻¹⁰ N in y-direction due to magnetic field, then the minimum magnetic field is",
      options: [
        "10⁻³ T in z-direction",
        "10⁻¹⁵ T in z-direction",
        "6.25 × 10⁻³ T in z-direction",
        "6.25 × 10³ T in z-direction"
      ],
      correctAnswer: 0,
      explanation: "The smallest magnetic field producing a given force occurs when the field is perpendicular to the particle's velocity, so F = |q|vB. Therefore B = F/(|q|v) = 10⁻¹⁰/[(10⁻¹²)(10⁵)] = 10⁻³ T. For a positive charge, velocity in +x crossed with magnetic field in +z produces force in −y. The question says 'y-direction' without explicitly specifying positive or negative, so the magnitude is verified but the force-direction sign is not completely specified.",
      reference: "GED0083 — Lorentz Force Magnitude and Cross-Product Direction"
    },
    {
      id: "q9",
      type: "multiple_choice",
      question: "Two parallel wires carry current in the opposite directions. What is the direction of the magnetic force on the current going into the page due to the current going out of the page?",
      image: "./SUBJECTS/quizzes/GED0083/imgs/ged0083-fa8-q9-opposite-wires.png",
      options: [
        "Top of the page",
        "Left",
        "Bottom of the page",
        "Right"
      ],
      correctAnswer: 1,
      explanation: "Parallel wires carrying currents in opposite directions repel one another. The wire with current into the page is on the left of the wire with current out of the page, so repulsion pushes the left wire farther to the left. Currents flowing in the same direction would attract instead.",
      reference: "GED0083 — Magnetic Forces Between Parallel Current-Carrying Wires"
    },
    {
      id: "q10",
      type: "multiple_choice",
      question: "Particles with the same charge and mass enter a uniform magnetic field at right angles. The radius of curvature is",
      options: [
        "greater for the faster particles",
        "the same for all the particles",
        "smaller for the faster particles",
        "infinite, the paths are straight"
      ],
      correctAnswer: 0,
      explanation: "For motion perpendicular to a uniform magnetic field, the magnetic force acts as the centripetal force: |q|vB = mv²/r. Rearranging gives r = mv/(|q|B). With equal mass, charge magnitude, and magnetic field, the radius is directly proportional to speed. Faster particles therefore follow circular paths with larger radii.",
      reference: "GED0083 — Radius of a Charged Particle's Path in a Magnetic Field"
    },
    {
      id: "q11",
      type: "multiple_choice",
      question: "A negative charge moves away from current carrying wire. What is the direction of the magnetic force on the charge?",
      image: "./SUBJECTS/quizzes/GED0083/imgs/ged0083-fa8-q11-moving-charge.png",
      options: [
        "Left",
        "To the bottom of the page",
        "Right",
        "To the top of the page"
      ],
      correctAnswer: 1,
      explanation: "The straight wire carries current upward. By the right-hand rule, the magnetic field to the right of that wire points into the page. The negative charge moves rightward, away from the wire. For a positive charge, v × B would point upward; because this particle is negatively charged, the actual magnetic force points in the opposite direction: downward, toward the bottom of the page.",
      reference: "GED0083 — Magnetic Field Around a Straight Wire; Force on Negative Charges"
    },
    {
      id: "q12",
      type: "multiple_choice",
      question: "By how much would the magnetic field change if the current was doubled and the distance r was doubled?",
      image: "./SUBJECTS/quizzes/GED0083/imgs/ged0083-fa8-q12-wire-point-p.png",
      options: [
        "Quadrupled",
        "No change",
        "Halved",
        "Doubled"
      ],
      correctAnswer: 1,
      explanation: "The magnetic field magnitude at distance r from a long straight current-carrying wire is B = μ₀I/(2πr). If the current doubles and the distance also doubles, the new field is B' = μ₀(2I)/(2π(2r)) = B. The two changes cancel, so the magnetic field remains unchanged.",
      reference: "GED0083 — Magnetic Field of a Long Straight Wire"
    },
    {
      id: "q13",
      type: "multiple_choice",
      question: "The magnetic field inside the coil shown below is directed:",
      image: "./SUBJECTS/quizzes/GED0083/imgs/ged0083-fa8-q13-current-loop.png",
      options: [
        "To the left",
        "Towards the bottom of the page",
        "Out the Page",
        "Into the page"
      ],
      correctAnswer: 2,
      explanation: "The diagram shows current upward on the right side and downward on the left side of the loop. Treating the loop as lying in the plane of the page, this is counterclockwise circulation. Curling the right-hand fingers in that current direction makes the thumb point out of the page, which gives the magnetic field direction through the center. A field toward the bottom of the page would not be perpendicular to the loop's plane. Note that the elliptical perspective in the source drawing is slightly ambiguous.",
      reference: "GED0083 — Magnetic Field at the Center of a Current Loop; Right-Hand Rule"
    },
    {
      id: "q14",
      type: "multiple_choice",
      question: "A long straight wire carries a 40.0 A current in the +x direction. At a particular instant, an electron moving at 1.0 × 10⁷ m/s in the +y direction is 0.10 m above the wire. The charge on the electron is −1.6 × 10⁻¹⁹ C. What is the force on the electron at this instant?",
      options: [
        "1.3 × 10⁻¹⁶ N in the +x direction",
        "1.3 × 10⁻¹⁶ N in the −x direction",
        "6.5 × 10⁻¹⁰ N in the −y direction",
        "6.5 × 10⁻¹⁶ N in the −y direction"
      ],
      correctAnswer: 1,
      explanation: "First calculate the magnetic field due to the wire: B = μ₀I/(2πr) = (4π × 10⁻⁷)(40)/(2π × 0.10) = 8.0 × 10⁻⁵ T. Because velocity is perpendicular to B, the force magnitude is |F| = |q|vB = (1.6 × 10⁻¹⁹)(1.0 × 10⁷)(8.0 × 10⁻⁵) = 1.28 × 10⁻¹⁶ N, or 1.3 × 10⁻¹⁶ N. At the electron's location, B points +z, so v × B points +x for positive charge. The electron is negative, reversing the force to −x.",
      reference: "GED0083 — Magnetic Field of a Straight Wire; Lorentz Force"
    },
    {
      id: "q15",
      type: "multiple_choice",
      question: "What is the direction of the magnetic field at the point P?",
      image: "./SUBJECTS/quizzes/GED0083/imgs/ged0083-fa8-q15-two-wires.png",
      options: [
        "to the right of the page",
        "out of the plane of the page",
        "into the plane of the page",
        "to the left of the page"
      ],
      correctAnswer: 2,
      explanation: "The diagram shows two upward currents, 18 A and 6 A, with point P located to the right of both wires. The right-hand grip rule gives a magnetic field into the page on the right side of an upward current. Both wires therefore produce magnetic fields into the page at P, so their contributions add in the same direction. Their different currents and distances change the field magnitudes, not the resulting direction.",
      reference: "GED0083 — Superposition of Magnetic Fields from Parallel Wires"
    }
  ]
});
