
window.PandoraQuizzes.register({
  id: "GED0083-M02-F02",
  subject: "GED0083",
  module: 2,
  title: "Formative 2",
  kind: "formative",
  version: 1,
  description: "Formative assessment covering temperature, thermometers, thermal expansion, blackbody radiation, heat transfer, calorimetry, and phase changes.",
  createdAt: "2026-11-07T01:00:00+08:00",
  showOnHome: true,

  questions: [
    {
      id: "q1",
      type: "multiple_choice",
      question: "The digital sign outside a local bank reports that the temperature is 44 °C. What is the temperature in degrees Fahrenheit?",
      options: [
        "79 °F",
        "111 °F",
        "56 °F",
        "120 °F",
        "99 °F"
      ],
      correctAnswer: 1,
      explanation: "Use the conversion formula F = (9/5)C + 32. At 44 °C, F = 111.2 °F, which rounds to 111 °F.",
      reference: "OpenStax University Physics Volume 2, Section 1.2 — Thermometers and Temperature Scales"
    },
    {
      id: "q2",
      type: "multiple_choice",
      question: "Which one of the following properties could not be used as a temperature sensitive property in the construction of a thermometer?",
      options: [
        "the change in electrical resistance of a wire",
        "the change in mass of a solid",
        "the change in pressure of a gas at constant volume",
        "the change in length of a metal rod",
        "the change in volume of a liquid"
      ],
      correctAnswer: 1,
      explanation: "Electrical resistance, gas pressure, rod length, and liquid volume can change predictably with temperature. The mass of an ordinary closed solid remains constant when heated, making it unsuitable as a thermometric property.",
      reference: "OpenStax University Physics Volume 2, Sections 1.2–1.3 — Thermometers and Thermal Expansion"
    },
    {
      id: "q3",
      type: "multiple_choice",
      question: "An ideal black body is thrown into a furnace. The black body is room temperature. It is observed that __________",
      options: [
        "It cannot be distinguished at all times",
        "Initially, it is the darkest body and at later it cannot be distinguished",
        "At all times it is the darkest body",
        "Initially, it is darkest body and at later times the brightest"
      ],
      correctAnswer: 1,
      explanation: "Initially, the cooler ideal blackbody absorbs incident radiation efficiently and appears darker than the hot surroundings. Once it reaches thermal equilibrium with a uniformly heated furnace, it emits thermal radiation characteristic of the same temperature and becomes difficult to distinguish from the surroundings. This assumes the idealized radiation environment described in the question.",
      reference: "OpenStax University Physics Volume 2, Chapter 1 — Thermal Radiation and Blackbody Behavior"
    },
    {
      id: "q4",
      type: "multiple_choice",
      question: "Which one of the following temperatures is approximately equal to \"room temperature?\"",
      options: [
        "293 K",
        "100 °C",
        "0 K",
        "0 °C",
        "100 K"
      ],
      correctAnswer: 0,
      explanation: "Room temperature is commonly approximated as 20 °C. Converting to kelvin gives 20 + 273.15 = 293.15 K, or approximately 293 K.",
      reference: "OpenStax University Physics Volume 2, Section 1.2 — Temperature Scales"
    },
    {
      id: "q5",
      type: "multiple_choice",
      question: "A copper plate has a length of 0.12 m and a width of 0.10 m at 25 °C. The plate is uniformly heated to 175 °C. If the linear expansion coefficient for copper is 1.7 x 10⁻⁵/C°, what is the change in the area of the plate as a result of the increase in temperature?",
      options: [
        "7.8 x 10⁻⁷ m²",
        "6.1 x 10⁻⁵ m²",
        "3.2 x 10⁻⁶ m²",
        "4.9 x 10⁻⁷ m²",
        "2.6 x 10⁻⁵ m²"
      ],
      correctAnswer: 1,
      explanation: "For area expansion, ΔA ≈ 2αA₀ΔT. The initial area is 0.12 × 0.10 = 0.012 m², and the temperature change is 150 °C. Thus ΔA = 2(1.7 × 10⁻⁵)(0.012)(150) = 6.12 × 10⁻⁵ m², approximately 6.1 × 10⁻⁵ m².",
      reference: "OpenStax University Physics Volume 2, Section 1.3 — Thermal Expansion in Two Dimensions"
    },
    {
      id: "q6",
      type: "multiple_choice",
      question: "The coefficient of linear expansion of steel is 12 x 10⁻⁶/C°. A railroad track is made of individual rails of steel 1.0 km in length. By what length would these rails change between a cold day when the temperature is −10 °C and a hot day at 30 °C?",
      options: [
        "620 cm",
        "0.62 cm",
        "480 cm",
        "48 cm",
        "24 cm"
      ],
      correctAnswer: 3,
      explanation: "Use ΔL = αL₀ΔT. With α = 12 × 10⁻⁶/°C, L₀ = 1000 m, and ΔT = 40 °C, the length change is 0.48 m, equivalent to 48 cm.",
      reference: "OpenStax University Physics Volume 2, Section 1.3 — Linear Thermal Expansion"
    },
    {
      id: "q7",
      type: "multiple_choice",
      question: "540g of ice at 0°C is mixed with 540g of water at 80°C. What is the final temperature of the mixture?",
      options: [
        "Less than 0°C",
        "80°C",
        "0°C",
        "40°C"
      ],
      correctAnswer: 2,
      explanation: "The warm water releases approximately (0.540)(4186)(80) = 180835 J as it cools to 0 °C. Melting 0.540 kg of ice requires approximately (0.540)(334000) = 180360 J. The remaining heat raises the resulting water slightly above freezing, to about 0.1 °C. Thus 0 °C is the closest offered choice, although not the exact calculated final temperature.",
      reference: "OpenStax University Physics Volume 2, Section 1.4 — Heat Transfer, Specific Heat, and Calorimetry"
    },
    {
      id: "q8",
      type: "multiple_choice",
      question: "Complete the following statement: Bimetallic strips used as adjustable switches in electric appliances consist of metallic strips that must have different:",
      options: [
        "mass.",
        "expansion coefficients.",
        "volume.",
        "length."
      ],
      correctAnswer: 1,
      explanation: "A bimetallic strip contains two bonded metals with different thermal expansion coefficients. Heating makes one expand more than the other, causing the strip to bend and operate a temperature-sensitive switch.",
      reference: "OpenStax University Physics Volume 2, Section 1.3 — Thermal Expansion"
    },
    {
      id: "q9",
      type: "multiple_choice",
      question: "Two cubes, one silver and one iron, have the same mass and temperature. A quantity Q of heat is removed from each cube. Which one of the following properties causes the final temperatures of the cubes to be different?",
      options: [
        "latent heat of vaporization",
        "d. coefficient of volume expansion",
        "Density",
        "specific heat capacity"
      ],
      correctAnswer: 3,
      explanation: "Specific heat capacity determines the temperature change for a given amount of heat and mass through Q = mcΔT. Silver and iron have different specific heat capacities, so removing the same energy changes their temperatures by different amounts.",
      reference: "OpenStax University Physics Volume 2, Section 1.4 — Heat Transfer and Specific Heat"
    },
    {
      id: "q10",
      type: "multiple_choice",
      question: "Solids are not heated by convection because:",
      options: [
        "molecules only vibrate about a fixed position",
        "solid are not free to move from one place to another",
        "No answer text provided.",
        "both A and B"
      ],
      correctAnswer: 3,
      explanation: "Convection transfers heat through the bulk movement of a fluid. In ordinary solids, particles primarily vibrate about fixed positions and the material does not flow freely, so heat travels through the solid mainly by conduction. Both A and B describe this distinction.",
      reference: "OpenStax University Physics Volume 2, Section 1.6 — Mechanisms of Heat Transfer"
    },
    {
      id: "q11",
      type: "multiple_choice",
      question: "In conduction process the molecules of the solid pass the heat from one to another, ____________.",
      options: [
        "themselves move from one place to another",
        "without themselves moving from their positions",
        "without themselves moving from one place to another.",
        "No answer text provided."
      ],
      correctAnswer: 2,
      explanation: "During conduction, thermal energy passes through interactions between neighboring particles without requiring bulk movement of the solid material. Options B and C express nearly the same idea; C is retained as the originally selected classroom answer. Free electrons also contribute to conduction in metals.",
      reference: "OpenStax University Physics Volume 2, Section 1.6 — Conduction"
    },
    {
      id: "q12",
      type: "multiple_choice",
      question: "A copper plate has a length of 0.12 m and a width of 0.10 m at 25 °C. The plate is uniformly heated to 175 °C. If the linear expansion coefficient for copper is 1.7 x 10⁻⁵/C°, what is the change in the area of the plate as a result of the increase in temperature?",
      options: [
        "6.1 x 10⁻⁵ m²",
        "2.6 x 10⁻⁵ m²",
        "4.9 x 10⁻⁷ m²",
        "3.2 x 10⁻⁶ m²"
      ],
      correctAnswer: 0,
      explanation: "The area change is ΔA ≈ 2αA₀ΔT = 2(1.7 × 10⁻⁵)(0.12 × 0.10)(175 − 25) = 6.12 × 10⁻⁵ m². Rounded to two significant figures, this is 6.1 × 10⁻⁵ m².",
      reference: "OpenStax University Physics Volume 2, Section 1.3 — Thermal Expansion in Two Dimensions"
    },
    {
      id: "q13",
      type: "multiple_choice",
      question: "A 2.00-kg metal object requires 5.02 x 10³ J of heat to raise its temperature from 20.0 °C to 40.0 °C. What is the specific heat capacity of the metal?",
      options: [
        "63.0 J/(kg · C°)",
        "126 J/(kg · C°)",
        "251 J/(kg · C°)",
        "502 J/(kg · C°)"
      ],
      correctAnswer: 1,
      explanation: "Rearrange Q = mcΔT to c = Q/(mΔT). Substituting 5020 J, 2.00 kg, and 20.0 °C gives c = 125.5 J/(kg·°C), or 126 J/(kg·°C) to three significant figures.",
      reference: "OpenStax University Physics Volume 2, Section 1.4 — Specific Heat"
    },
    {
      id: "q14",
      type: "identification",
      question: "What is the minimum amount of energy required to completely melt a 7.25 9.11 kg lead brick which has a starting temperature of 18.019 °C? The melting point of lead is 328 °C. The specific heat capacity of lead is 128 J/(kg·C°); and its latent heat of fusion is 23 200 J/kg.\n\nAnswer should be rounded to two (2) decimal places.",
      correctAnswer: "455862.37",
      explanation: "PROVISIONAL DUE TO SOURCE TYPO: The original question contains both 7.25 and 9.11 before 'kg', making the mass ambiguous. Assuming 7.25 kg, Q = mc(Tm − Ti) + mLf = 7.25[128(328 − 18.019) + 23200] = 455862.37 J. If the intended mass were 9.11 kg, the result would instead be approximately 572814.64 J. The accepted value here uses 7.25 kg, consistent with the entered answer.",
      reference: "Original Formative 2, Question 14; OpenStax University Physics Volume 2, Sections 1.4–1.5 — Heat and Phase Changes"
    },
    {
      id: "q15",
      type: "multiple_choice",
      question: "A 0.030-kg ice cube at 0 °C is placed in an insulated box that contains a fixed quantity of steam at 100 °C. When thermal equilibrium of this closed system is established, its temperature is found to be 23 °C. Determine the original mass of the steam at 100 °C.",

      image: "./SUBJECTS/quizzes/GED0083/imgs/m02-f02-q15.png",

      options: [
        "1.7 g",
        "0.17 g",
        "2.5 g",
        "5.0 g"
      ],
      correctAnswer: 3,
      explanation: "The ice absorbs energy to melt and then warm from 0 °C to 23 °C. The steam releases energy by condensing at 100 °C and cooling to 23 °C. Setting heat gained equal to heat released gives m_steam[Lv + cw(100 − 23)] = 0.030[Lf + cw(23)]. Using standard values for water gives m_steam ≈ 0.0050 kg, or 5.0 g.",
      reference: "OpenStax University Physics Volume 2, Section 1.5 — Phase Changes; calorimetry and latent heat"
    }
  ]
});
