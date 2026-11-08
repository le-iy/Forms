
window.PandoraQuizzes.register({
  id: "GED0083-M01-F01",
  subject: "GED0083",
  module: 1,
  title: "Formative 1",
  kind: "formative",
  version: 1,
  description: "Formative assessment covering fluid mechanics, pressure, buoyancy, Pascal's principle, hydraulic systems, and fluid continuity.",
  createdAt: "2026-11-07T01:00:00+08:00",
  showOnHome: true,

  questions: [
    {
      id: "q1",
      type: "multiple_choice",
      question: "A 50.0-kg woman wearing high-heeled shoes is invited into a home in which the kitchen has vinyl floor covering. The heel on each shoe is circular and has a radius of 0.500 cm. If the woman balances on one heel, should the homeowner be concerned?",
      options: [
        "Negative",
        "Yes",
        "Indeterminate",
        "No"
      ],
      correctAnswer: 1,
      explanation: "Pressure is force divided by contact area. The woman's weight is approximately 490 N, while the heel area is pi times (0.005 m) squared. This produces approximately 6.24 million Pa of pressure on the floor. Such concentrated pressure can damage vinyl flooring, so the homeowner should be concerned.",
      reference: "OpenStax University Physics Volume 1, Section 14.1 — Pressure"
    },
    {
      id: "q2",
      type: "true_false",
      question: "As a balloon rises in the air its volume increases, at the end it acquires a stable height and cannot rise any further.",
      correctAnswer: true,
      explanation: "As a balloon rises, atmospheric pressure decreases, allowing its gas to expand. The surrounding air also becomes less dense, reducing buoyant force. Under suitable conditions, the balloon can reach neutral buoyancy, where its upward buoyant force balances its weight and it stops rising. However, some balloons burst or lose gas before reaching a stable altitude.",
      reference: "OpenStax University Physics Volume 1, Section 14.4 — Archimedes' Principle and Buoyancy"
    },
    {
      id: "q3",
      type: "multiple_choice",
      question: "How can relatively denser object be made to float on the less dense fluid?",
      options: [
        "By altering the shear forces acting on the object",
        "By altering the frequency of the object",
        "By altering the shape.",
        "By altering the forces acting on the object"
      ],
      correctAnswer: 2,
      explanation: "An object made of relatively dense material can float when its shape allows it to displace enough fluid to balance its weight. A hollow ship is an example: although steel is denser than water, the ship's overall average density can be lower because of its hollow structure.",
      reference: "OpenStax University Physics Volume 1, Section 14.4 — Buoyancy"
    },
    {
      id: "q4",
      type: "multiple_choice",
      question: "At a location where the acceleration due to gravity is 9.807 m/s², the atmospheric pressure is 9.891 x 10⁴ A barometer at the same location is filled with an unknown liquid. What is the density of the unknown liquid if its height in the barometer is 1.163 m?",
      options: [
        "210 kg/m³",
        "4336 kg/m³",
        "5317 kg/m³",
        "8672 kg/m³"
      ],
      correctAnswer: 3,
      explanation: "Using the barometer relationship P = rho times g times h, density equals P divided by (g times h). Substituting 98910 Pa, 9.807 m/s², and 1.163 m gives approximately 8672.10 kg/m³. Therefore, the closest answer is 8672 kg/m³.",
      reference: "OpenStax University Physics Volume 1, Section 14.2 — Measuring Pressure"
    },
    {
      id: "q5",
      type: "multiple_choice",
      question: "A swimming pool has the dimensions shown in the drawing. It is filled with water to a uniform depth of 8.00 m. The density of water = 1.00 x 10³ kg/m³. What is the total pressure exerted on the bottom of the swimming pool?",

      image: "./SUBJECTS/quizzes/GED0083/imgs/m01-f01-q05.png",

      options: [
        "1.80 x 10⁵ Pa",
        "1.97 x 10⁵ Pa",
        "1.48 x 10⁵ Pa",
        "0.79 x 10⁵ Pa"
      ],
      correctAnswer: 0,
      explanation: "Total or absolute pressure at a depth is P = Patm + rho times g times h. Using atmospheric pressure of approximately 101300 Pa, water density of 1000 kg/m³, gravity of 9.80 m/s², and depth of 8.00 m gives 179700 Pa, approximately 1.80 x 10⁵ Pa. The pool's length and width do not affect pressure at a given depth.",
      reference: "OpenStax University Physics Volume 1, Section 14.1 — Pressure at a Depth"
    },
    {
      id: "q6",
      type: "multiple_choice",
      question: "A large weather balloon whose mass is 226 kg is filled with helium gas until its volume is 325 m3. Assume the density of air is 1.20 kg/m3 and the density of helium is 0.179 kg/m3. Find the net force on the balloon and determine whether the balloon will rise or fall after it is released.",
      options: [
        "3.82 x 10³ N",
        "2.64 x 10³ N",
        "1.04 x 10³ N",
        "2.46 x 10³ N",
        "5.97 x 10³ N"
      ],
      correctAnswer: 2,
      explanation: "The buoyant force equals the weight of displaced air. Subtract the weight of the helium and the balloon itself: Fnet = (rho_air - rho_helium) times V times g - m times g. Using the given values and g = 9.80 m/s² produces 1037.09 N, or approximately 1.04 x 10³ N. Because the net force is upward, the balloon rises.",
      reference: "OpenStax University Physics Volume 1, Section 14.4 — Archimedes' Principle"
    },
    {
      id: "q7",
      type: "multiple_choice",
      question: "A shower head has 20 circular openings, each with radius 1.0 mm. The shower head is connected to a pipe with radius 0.80 cm. If the speed of water in the pipe is 3.0 m/s, what is its speed as it exits the shower-head openings?",
      options: [
        "3.5 m/s",
        "5 m/s",
        "9.6 m/s",
        "2.9 m/s",
        "10.5 m/s"
      ],
      correctAnswer: 2,
      explanation: "The continuity equation requires the total volume flow rate to remain constant. Thus, A_pipe times v_pipe = 20 times A_opening times v_exit. Since area is proportional to radius squared, v_exit = 3.0 times (8.0² divided by (20 times 1.0²)), resulting in 9.6 m/s.",
      reference: "OpenStax University Physics Volume 1, Section 14.5 — Fluid Dynamics and the Continuity Equation"
    },
    {
      id: "q8",
      type: "multiple_choice",
      question: "Within an enclosed vessel, the pressure exerted on a fluid will be distributed and undiminished all throughout the walls of the vessel. Which of the following states this?",
      options: [
        "Pascal's Principle",
        "Newton's Third Law of Motion",
        "Law of Inertia",
        "Archimedes Principle"
      ],
      correctAnswer: 0,
      explanation: "Pascal's principle states that a change in pressure applied to an enclosed fluid is transmitted undiminished throughout the fluid and to the walls of its container. This principle is used in hydraulic lifts, brakes, and presses.",
      reference: "OpenStax University Physics Volume 1, Section 14.3 — Pascal's Principle and Hydraulics"
    },
    {
      id: "q9",
      type: "multiple_choice",
      question: "Which exhibits the greatest pressure applied to a floor?",
      options: [
        "Wearing stilettos and standing on both feet",
        "Wearing stilettos and standing in one foot",
        "Barefoot standing in both feet",
        "Barefoot standing in one foot"
      ],
      correctAnswer: 1,
      explanation: "Pressure equals force divided by area. Standing on one stiletto heel concentrates nearly the entire body weight over a very small contact area, producing greater pressure than distributing the weight across two heels or larger barefoot contact areas.",
      reference: "OpenStax University Physics Volume 1, Section 14.1 — Pressure"
    },
    {
      id: "q10",
      type: "identification",
      question: "Calculate the weight (N)of the air at 20 ° C in a living room with 4m by 7m and a ceiling at 4m high. Numerical Answer only. Round off to two (2) decimal places.",
      correctAnswer: "1321.51",
      explanation: "The room volume is 4 times 7 times 4 = 112 m³. Air weight is W = rho times V times g. The submitted answer of 1321.51 N corresponds to an assumed air density of approximately 1.203 kg/m³ using standard gravitational acceleration. The problem does not explicitly provide air density or atmospheric pressure, so the exact numerical answer depends on the assumed air density and constants. This key remains provisional.",
      reference: "OpenStax University Physics Volume 1, Section 14.1 — Density and Weight; original quiz answer (provisional)"
    },
    {
      id: "q11",
      type: "identification",
      question: "A hydraulic system is used to lift a 2,413kg vehicle in an auto garage. If the vehicle sits on a piston of area 0.64 square meter, and a force is applied to a piston of area 0.05 square meters, what is the minimum force (N) that must be applied to lift the vehicle? Numerical answer only. Round off to two (2) decimal places.",
      correctAnswer: "1847.45",
      explanation: "Pascal's principle gives F_small divided by A_small = F_large divided by A_large. The vehicle weight is 2413 times 9.80 = 23647.40 N. Therefore, the minimum applied force is 23647.40 times (0.05 divided by 0.64) = 1847.45 N. The originally entered 847.49 N is too small.",
      reference: "OpenStax University Physics Volume 1, Section 14.3 — Hydraulic Systems"
    },
    {
      id: "q12",
      type: "identification",
      question: "A hydraulic system is used to lift a 3,804kg vehicle in an auto garage. If the vehicle sits on a piston of area 0.81 square meter, and a force is applied to a piston of area 0.08 square meters, what is the minimum force (N) that must be applied to lift the vehicle? Numerical Answer only. Round off to two (2) decimal places.",
      correctAnswer: "3681.90",
      explanation: "Using Pascal's principle, the required force on the smaller piston is F = mg times (A_small divided by A_large). Substituting 3804 kg, 9.80 m/s², 0.08 m², and 0.81 m² gives 3681.90 N.",
      reference: "OpenStax University Physics Volume 1, Section 14.3 — Hydraulic Systems"
    },
    {
      id: "q13",
      type: "identification",
      question: "62% of a half-filled PET bottle is immersed in brine while the rest of it is floating. If the density of brine is 1230 kg/m³, what is the density of the filled bottle? Input numerical answer in two decimal places.",
      correctAnswer: "762.60",
      explanation: "For a floating object, the ratio of submerged volume to total volume equals the ratio of the object's average density to the fluid density. Therefore, rho_bottle = 0.62 times 1230 = 762.60 kg/m³.",
      reference: "OpenStax University Physics Volume 1, Section 14.4 — Floating Objects and Buoyancy"
    },
    {
      id: "q14",
      type: "identification",
      question: "59% of a half-filled PET bottle is immersed in kerosene while the rest of it is floating. What is the density of the filled bottle if the density of kerosene is 820 kg/m³? Input numerical answer in two decimal places.",
      correctAnswer: "483.80",
      explanation: "For a floating object, its average density is the submerged fraction multiplied by the fluid density. Therefore, rho_bottle = 0.59 times 820 = 483.80 kg/m³.",
      reference: "OpenStax University Physics Volume 1, Section 14.4 — Floating Objects and Buoyancy"
    },
    {
      id: "q15",
      type: "identification",
      question: "Suppose a 78kg woman floats in fresh water with 71% of her volume submerged when her lungs are full of air. What is her average density (kg/m³)? Numerical Answer only.",
      correctAnswer: "710",
      explanation: "For a floating body, the average density equals the submerged fraction times the fluid density. With 71% submerged and fresh water density of approximately 1000 kg/m³, the woman's average density is 0.71 times 1000 = 710 kg/m³. Her mass is not needed for this calculation.",
      reference: "OpenStax University Physics Volume 1, Section 14.4 — Archimedes' Principle and Floating Objects"
    }
  ]
});
