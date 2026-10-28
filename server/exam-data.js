// Priprave na izpite po državah (podatki). Slovenski izpiti (NPZ, matura) ostanejo v
// razdelku »Tekmovanja« in pri »Priprava na test«; tu so tuji izpiti.
//
// BANK: teme z angleškimi izpitnimi nalogami (practice/generators/exam-*.js). Niso učna pot,
// izpitne teme jih uporabijo kot osnovo.
// EXAMS: izpit → predmeti → sklopi tem ("Ime | cilji => osnovna tema, osnovna tema").
// Osnovne teme so lahko slovenske (naloge v slovenščini, večinoma sam račun) ali iz banke.
// mock: poskusni izpit na čas v formatu izpita (izbirna vprašanja, številski odgovori,
// točke in negativne točke). OSNUTEK: format in teme naj pred objavo preveri učitelj.

export const BANK = {
  "MAT-EXB": [
    "Quadratic equations | roots, factorising, sum and product of roots",
    "Systems of linear equations | elimination, substitution, word problems",
    "Exponential growth and decay | compound interest, half-life, growth factor",
    "Right-triangle trigonometry | sine, cosine, tangent, angles of elevation",
    "Arithmetic progressions | nth term, sum of n terms",
    "Geometric progressions | nth term, sum, sum to infinity",
    "Statistics: mean, median | mean, median, missing value",
    "Logarithms | evaluating logs, log laws, log equations",
    "Functions | evaluating, composition, inverse",
    "Quadratic inequalities | linear and quadratic inequalities, integer solutions",
    "Trigonometric identities | special angles, Pythagorean identity, double angle",
    "Coordinate geometry | distance, slope, equation of a line",
    "Permutations and combinations | arrangements, selections, at least one",
    "Differentiation | derivatives, tangent lines, maxima and minima",
    "Integration | definite integrals, area between curves",
    "Complex numbers | modulus, multiplication, powers",
    "Vectors | dot product, magnitude, perpendicular vectors",
    "Matrices and determinants | 2×2 and 3×3 determinants, singular matrices",
    "Probability | dice, drawing without replacement, complement",
    "Ratios, rates and percentages | percent, percent change, sharing in a ratio",
    "Circles | area, equation of a circle, sectors",
  ],
  "FIZ-EXB": [
    "Kinematics | equations of uniformly accelerated motion",
    "Projectile motion | horizontal launch, range, maximum height",
    "Laws of motion | Newton's second law, friction, Atwood machine",
    "Work, energy and power | kinetic and potential energy, power",
    "Momentum and collisions | impulse, inelastic and elastic collisions",
    "Circular motion and gravitation | centripetal force, gravity with distance, vertical circle",
    "Oscillations | pendulum, spring–mass system, maximum speed in SHM",
    "Waves and sound | wave speed, standing waves, Doppler effect",
    "Thermal physics | heat capacity, gas laws, Carnot efficiency",
    "Electrostatics and capacitors | Coulomb's law, capacitors, stored energy",
    "Current electricity | series and parallel resistors, internal resistance",
    "Magnetism and induction | force on a wire, Faraday's law, charged particle in a field",
    "Optics | refractive index, thin lenses, Snell's law",
    "Modern physics | half-life, photoelectric effect, de Broglie wavelength",
  ],
  "KEM-EXB": [
    "Mole concept | moles, Avogadro's number, percentage composition",
    "Stoichiometry | masses from equations, limiting reactant",
    "Solutions and concentration | molarity, dilution, neutralisation",
    "Gaseous state | molar volume, ideal gas equation, Graham's law",
    "Acids, bases and pH | strong acids and bases, weak acids",
    "Thermochemistry | heat released, Hess's law, Gibbs energy",
    "Chemical equilibrium | equilibrium constant, equilibrium concentrations",
    "Chemical kinetics | half-life, rate constant, rate law",
    "Electrochemistry | cell emf, electrolysis, Gibbs energy of a cell",
    "Atomic structure | protons, neutrons, electrons, hydrogen spectrum",
  ],
};

const B = (subject, slug) => `${subject}-EXB/${slug}`;
const M = (slug) => B("MAT", slug);
const F = (slug) => B("FIZ", slug);
const K = (slug) => B("KEM", slug);

// Skupni sklopi fizike in kemije (JEE, NEET, gaokao).
const PHYSICS_UNITS = [
  ["Mechanics", [
    `Kinematics | motion in one and two dimensions => ${F("kinematics")}, ${F("projectile-motion")}`,
    `Laws of motion | Newton's laws, friction, connected bodies => ${F("laws-of-motion")}`,
    `Work, energy and power | work–energy theorem, conservation of energy => ${F("work-energy-and-power")}`,
    `Momentum and collisions | impulse, conservation of momentum => ${F("momentum-and-collisions")}`,
    `Circular motion and gravitation | centripetal force, gravitational field => ${F("circular-motion-and-gravitation")}`,
  ]],
  ["Oscillations, waves and heat", [
    `Oscillations | simple harmonic motion => ${F("oscillations")}`,
    `Waves and sound | wave equation, standing waves, Doppler effect => ${F("waves-and-sound")}`,
    `Thermal physics | heat, gas laws, thermodynamics => ${F("thermal-physics")}`,
  ]],
  ["Electricity and magnetism", [
    `Electrostatics and capacitors | Coulomb's law, capacitance => ${F("electrostatics-and-capacitors")}`,
    `Current electricity | Ohm's law, circuits, emf => ${F("current-electricity")}`,
    `Magnetism and induction | magnetic force, electromagnetic induction => ${F("magnetism-and-induction")}`,
  ]],
  ["Optics and modern physics", [
    `Optics | refraction, lenses => ${F("optics")}`,
    `Modern physics | photoelectric effect, matter waves, radioactivity => ${F("modern-physics")}`,
  ]],
];
const CHEMISTRY_UNITS = [
  ["Basic concepts", [
    `Mole concept | moles, molar mass, composition => ${K("mole-concept")}`,
    `Stoichiometry | calculations from equations, limiting reactant => ${K("stoichiometry")}`,
    `Atomic structure | subatomic particles, energy levels => ${K("atomic-structure")}`,
  ]],
  ["Physical chemistry", [
    `Solutions | molarity, dilution, titration => ${K("solutions-and-concentration")}`,
    `Gaseous state | gas laws, ideal gas equation => ${K("gaseous-state")}`,
    `Thermodynamics | enthalpy, Hess's law, Gibbs energy => ${K("thermochemistry")}`,
    `Chemical equilibrium | equilibrium constant => ${K("chemical-equilibrium")}`,
    `Ionic equilibrium and pH | acids, bases, pH => ${K("acids-bases-and-ph")}`,
    `Chemical kinetics | rate law, half-life => ${K("chemical-kinetics")}`,
    `Electrochemistry | cells, electrolysis => ${K("electrochemistry")}`,
  ]],
];

// Poskusni izpit: skupine vprašanj { n, format: "choice" | "numeric", level, points, penalty }.
const group = (n, format, level, points, penalty = 0) => ({ n, format, level, points, penalty });

export const EXAMS = {
  SAT: {
    name: "SAT",
    full: "SAT – Math section (digital SAT)",
    country: "United States",
    systems: ["US", "INTL"],
    about:
      "The digital SAT Math section has two adaptive modules of 22 questions (35 minutes each). About three quarters are multiple choice, the rest are student-produced answers. A calculator is allowed. The section is scored from 200 to 800.",
    subjects: {
      MAT: {
        units: [
          ["Algebra", [
            "Linear equations in one variable | solving and interpreting => MAT-OS-8/linearne-enacbe, MAT-SS-1/linearne-enacbe",
            `Linear functions | slope, intercepts, graphs => MAT-OS-9/linearna-funkcija, ${M("coordinate-geometry")}`,
            `Systems of linear equations | two equations, two unknowns => ${M("systems-of-linear-equations")}`,
            `Linear inequalities | solving and word problems => MAT-OS-9/linearne-neenacbe, ${M("quadratic-inequalities")}`,
          ], 35],
          ["Advanced math", [
            "Equivalent expressions | expanding and factorising => MAT-OS-8/mnozenje-izrazov, MAT-OS-8/razstavljanje",
            `Quadratic equations | roots and Vieta's formulas => ${M("quadratic-equations")}`,
            `Nonlinear functions | evaluating, composition, inverse => ${M("functions")}`,
            `Exponential functions | growth and decay => ${M("exponential-growth-and-decay")}`,
          ], 35],
          ["Problem-solving and data analysis", [
            `Ratios, rates and percentages | percent change, ratios => ${M("ratios-rates-and-percentages")}, MAT-OS-7/odstotni-racun`,
            "Units and proportional reasoning | direct and inverse proportion, unit conversion => MAT-OS-7/premo-sorazmerje, MAT-OS-6/merske-enote",
            `One-variable data | mean and median => ${M("statistics-mean-median")}`,
            `Probability | simple and conditional probability => ${M("probability")}`,
          ], 15],
          ["Geometry and trigonometry", [
            "Area and volume | prisms, cylinders, cones, spheres => MAT-OS-9/valj, MAT-OS-9/stozec, MAT-OS-9/krogla",
            "Lines, angles and triangles | angle sums, similar triangles => MAT-OS-7/vrste-trikotnikov-in-notranji-koti, MAT-OS-9/podobni-trikotniki",
            `Right triangles and trigonometry | Pythagoras, SOH CAH TOA => ${M("right-triangle-trigonometry")}, MAT-OS-8/pitagorov-izrek`,
            `Circles | area, sectors, equation of a circle => ${M("circles")}`,
          ], 15],
        ],
        mock: { minutes: 35, groups: [group(5, "choice", 1, 1), group(8, "choice", 2, 1), group(3, "choice", 3, 1), group(3, "numeric", 2, 1), group(3, "numeric", 3, 1)], scale: [200, 800] },
      },
    },
  },
  GAOKAO: {
    name: "Gaokao",
    full: "高考 Gaokao (National College Entrance Exam)",
    country: "China",
    systems: ["CN"],
    about:
      "Gaokao mathematics (new curriculum) is a 120-minute, 150-point paper: 8 single-choice questions (5 points), 3 multiple-choice questions (6 points), 3 fill-in-the-blank questions (5 points) and 5 long problems. Physics and chemistry are 75-minute, 100-point papers. The mock here covers the objective part (choice and fill-in questions).",
    subjects: {
      MAT: {
        units: [
          ["Sets, functions and inequalities", [
            `Inequalities and sets | quadratic inequalities, solution sets => ${M("quadratic-inequalities")}`,
            `Functions | properties, composition, inverse => ${M("functions")}`,
            `Exponential and logarithmic functions | log laws, exponential models => ${M("logarithms")}, ${M("exponential-growth-and-decay")}`,
          ], 25],
          ["Trigonometry", [
            `Trigonometric functions and identities | special angles, double angle => ${M("trigonometric-identities")}`,
            `Solving triangles | right triangles, angles of elevation => ${M("right-triangle-trigonometry")}`,
          ], 15],
          ["Sequences", [
            `Arithmetic sequences | general term, sum => ${M("arithmetic-progressions")}`,
            `Geometric sequences | general term, sum => ${M("geometric-progressions")}`,
          ], 15],
          ["Vectors and complex numbers", [
            `Plane and space vectors | dot product, perpendicularity => ${M("vectors")}`,
            `Complex numbers | operations, modulus => ${M("complex-numbers")}`,
          ], 10],
          ["Analytic and solid geometry", [
            `Lines and circles | slope, distance, equation of a circle => ${M("coordinate-geometry")}, ${M("circles")}`,
            "Solid geometry | surface area and volume => MAT-SS-3/povrsina-in-prostornina-teles, MAT-OS-9/piramida",
          ], 15],
          ["Probability and statistics", [
            `Counting | permutations and combinations => ${M("permutations-and-combinations")}`,
            `Probability | classical probability => ${M("probability")}`,
            `Statistics | mean, median => ${M("statistics-mean-median")}`,
          ], 10],
          ["Derivatives", [`Derivatives and their applications | tangents, monotonicity, extrema => ${M("differentiation")}`], 10],
        ],
        mock: { minutes: 50, groups: [group(4, "choice", 1, 5), group(4, "choice", 2, 5), group(1, "numeric", 2, 5), group(2, "numeric", 3, 5)] },
      },
      FIZ: {
        units: PHYSICS_UNITS,
        mock: { minutes: 45, groups: [group(4, "choice", 1, 4), group(3, "choice", 2, 4), group(3, "choice", 3, 6), group(2, "numeric", 2, 6)] },
      },
      KEM: {
        units: CHEMISTRY_UNITS,
        mock: { minutes: 40, groups: [group(5, "choice", 1, 3), group(5, "choice", 2, 3), group(2, "numeric", 3, 6)] },
      },
    },
  },
  JEEM: {
    name: "JEE Main",
    full: "JEE Main (Joint Entrance Examination – Main)",
    country: "India",
    systems: ["IN-CBSE", "IN-ICSE"],
    about:
      "JEE Main has 75 questions in 3 hours: 25 per subject (Mathematics, Physics, Chemistry). In each subject 20 are multiple choice (+4 correct, −1 wrong) and 5 have a numerical answer (+4, no negative marking). Maximum 300 marks. Organic and inorganic chemistry are not covered here yet.",
    subjects: {
      MAT: {
        units: [
          ["Algebra", [
            `Sets, relations and functions | composition, inverse => ${M("functions")}`,
            `Complex numbers and quadratic equations | modulus, roots => ${M("complex-numbers")}, ${M("quadratic-equations")}`,
            `Matrices and determinants | determinants, singular matrices => ${M("matrices-and-determinants")}`,
            `Permutations and combinations | counting => ${M("permutations-and-combinations")}`,
            `Sequences and series | AP, GP => ${M("arithmetic-progressions")}, ${M("geometric-progressions")}`,
          ]],
          ["Calculus", [
            `Limits, continuity and differentiability | limits, derivatives => ${M("differentiation")}, UNI-ULFKKT-MAT/limita-in-zveznost-funkcije`,
            `Integral calculus | definite integrals, areas => ${M("integration")}, UNI-ULFKKT-MAT/doloceni-integral`,
            "Differential equations | first-order equations => UNI-ULFKKT-MAT/diferencialne-enacbe-prvega-reda",
          ]],
          ["Coordinate geometry and vectors", [
            `Straight lines and circles | slope, distance, circles => ${M("coordinate-geometry")}, ${M("circles")}`,
            `Vector algebra and 3D geometry | dot product, magnitude => ${M("vectors")}`,
          ]],
          ["Trigonometry, statistics and probability", [
            `Trigonometry | identities, special angles => ${M("trigonometric-identities")}`,
            `Statistics and probability | mean, median, probability => ${M("statistics-mean-median")}, ${M("probability")}`,
          ]],
        ],
        mock: { minutes: 60, groups: [group(8, "choice", 1, 4, -1), group(8, "choice", 2, 4, -1), group(4, "choice", 3, 4, -1), group(3, "numeric", 2, 4), group(2, "numeric", 3, 4)] },
      },
      FIZ: {
        units: PHYSICS_UNITS,
        mock: { minutes: 60, groups: [group(8, "choice", 1, 4, -1), group(8, "choice", 2, 4, -1), group(4, "choice", 3, 4, -1), group(3, "numeric", 2, 4), group(2, "numeric", 3, 4)] },
      },
      KEM: {
        units: CHEMISTRY_UNITS,
        mock: { minutes: 60, groups: [group(8, "choice", 1, 4, -1), group(8, "choice", 2, 4, -1), group(4, "choice", 3, 4, -1), group(3, "numeric", 2, 4), group(2, "numeric", 3, 4)] },
      },
    },
  },
  JEEA: {
    name: "JEE Advanced",
    full: "JEE Advanced",
    country: "India",
    systems: ["IN-CBSE", "IN-ICSE"],
    about:
      "JEE Advanced has two 3-hour papers with Mathematics, Physics and Chemistry. Question types change every year: single-correct and multiple-correct MCQs (often with negative marking), numerical answers and matching. Questions are harder and combine several ideas. The mock uses the hardest level.",
    subjects: {
      MAT: {
        units: [
          ["Algebra", [
            `Quadratics, complex numbers and polynomials | Vieta's formulas, roots => ${M("quadratic-equations")}, ${M("complex-numbers")}, MAT-TEK-SS/polinomi-in-vietove-formule`,
            `Sequences, series and counting | progressions, combinatorics => ${M("geometric-progressions")}, ${M("permutations-and-combinations")}, MAT-TEK-SS/zaporedja-rekurzije-in-indukcija`,
            `Matrices and determinants | determinants => ${M("matrices-and-determinants")}`,
          ]],
          ["Calculus", [
            `Differential calculus | extrema, tangents => ${M("differentiation")}, UNI-ULFKKT-MAT/odvod-funkcije`,
            `Integral calculus | definite integrals, areas => ${M("integration")}, UNI-ULFKKT-MAT/doloceni-integral`,
          ]],
          ["Geometry and vectors", [
            `Coordinate geometry | lines, circles => ${M("coordinate-geometry")}, ${M("circles")}`,
            `Vectors | dot product, perpendicularity => ${M("vectors")}`,
            "Euclidean geometry | angles in circles, similar triangles => MAT-TEK-SS/koti-v-kroznici-in-tetivni-stirikotniki, MAT-TEK-SS/podobnost-menelaj-in-ceva",
          ]],
          ["Probability and trigonometry", [
            `Probability | complement, without replacement => ${M("probability")}`,
            `Trigonometry | identities => ${M("trigonometric-identities")}`,
          ]],
        ],
        mock: { minutes: 60, groups: [group(4, "choice", 2, 3, -1), group(8, "choice", 3, 3, -1), group(6, "numeric", 3, 4)] },
      },
      FIZ: {
        units: [
          ...PHYSICS_UNITS,
          ["Advanced problems", [
            "Rotation and torque | moment of inertia, torque, rolling => FIZ-TEK-SS/vrtenje-in-navor",
            "Friction and inclined planes | connected bodies on inclines => FIZ-TEK-SS/newtonovi-zakoni-s-trenjem-in-klanci",
            "Kirchhoff's rules | multi-loop circuits => FIZ-TEK-SS/tokokrogi-s-kirchhoffovimi-pravili",
          ]],
        ],
        mock: { minutes: 60, groups: [group(4, "choice", 2, 3, -1), group(8, "choice", 3, 3, -1), group(6, "numeric", 3, 4)] },
      },
      KEM: {
        units: [
          ...CHEMISTRY_UNITS,
          ["Advanced problems", [
            "Limiting reactant and yield | multi-step stoichiometry => KEM-TEK-SS/stehiometrija-z-omejitvenim-reaktantom-in-izkoristkom",
            "Buffers and titrations | buffers, titration curves => KEM-TEK-SS/kisline-baze-ph-in-pufri, KEM-TEK-SS/analizna-kemija-titracije",
            "Redox and electrochemistry | balancing redox, cells => KEM-TEK-SS/redoks-reakcije-in-elektrokemija",
          ]],
        ],
        mock: { minutes: 60, groups: [group(4, "choice", 2, 3, -1), group(8, "choice", 3, 3, -1), group(6, "numeric", 3, 4)] },
      },
    },
  },
  NEET: {
    name: "NEET",
    full: "NEET-UG (medical entrance)",
    country: "India",
    systems: ["IN-CBSE", "IN-ICSE"],
    about:
      "NEET-UG has 180 multiple-choice questions in 3 hours: 45 Physics, 45 Chemistry and 90 Biology. Correct +4, wrong −1, unanswered 0. Maximum 720 marks. Biology is not in STEMMind yet; the mock covers one subject at the real pace of one minute per question.",
    subjects: {
      FIZ: {
        units: PHYSICS_UNITS,
        mock: { minutes: 30, groups: [group(10, "choice", 1, 4, -1), group(14, "choice", 2, 4, -1), group(6, "choice", 3, 4, -1)] },
      },
      KEM: {
        units: CHEMISTRY_UNITS,
        mock: { minutes: 30, groups: [group(12, "choice", 1, 4, -1), group(12, "choice", 2, 4, -1), group(6, "choice", 3, 4, -1)] },
      },
    },
  },
  CBSE10: {
    name: "CBSE Class 10",
    full: "CBSE Class 10 board exams",
    country: "India",
    systems: ["IN-CBSE"],
    about:
      "CBSE Class 10 board papers are 3 hours and 80 marks: section A has 1-mark MCQs and assertion–reason questions, then 2-, 3-, 4- and 5-mark questions and case studies. Write every step for the longer answers. The mock covers the MCQ section and short numerical questions.",
    subjects: {
      MAT: {
        units: [
          ["Number systems and algebra", [
            "Real numbers | HCF, LCM, prime factorisation => MAT-OS-7/najvecji-skupni-delitelj-in-najmanjsi-skupni-veckratnik, MAT-OS-7/prastevila-in-razcep",
            "Polynomials | factorising, zeros => MAT-OS-8/razstavljanje",
            `Pair of linear equations in two variables | elimination, substitution => ${M("systems-of-linear-equations")}`,
            `Quadratic equations | factorising, discriminant => ${M("quadratic-equations")}`,
            `Arithmetic progressions | nth term, sum => ${M("arithmetic-progressions")}`,
          ]],
          ["Geometry and coordinate geometry", [
            "Triangles | similarity => MAT-OS-9/podobni-trikotniki",
            `Coordinate geometry | distance formula, section formula => ${M("coordinate-geometry")}`,
          ]],
          ["Trigonometry", [
            `Introduction to trigonometry | ratios, identities => ${M("right-triangle-trigonometry")}, ${M("trigonometric-identities")}`,
            `Some applications of trigonometry | heights and distances => ${M("right-triangle-trigonometry")}`,
          ]],
          ["Mensuration, statistics and probability", [
            `Areas related to circles | sectors and segments => ${M("circles")}, MAT-OS-8/krozni-lok-in-krozni-izsek`,
            "Surface areas and volumes | cylinders, cones, spheres => MAT-OS-9/valj, MAT-OS-9/stozec, MAT-OS-9/krogla",
            `Statistics | mean, median => ${M("statistics-mean-median")}`,
            `Probability | classical probability => ${M("probability")}`,
          ]],
        ],
        mock: { minutes: 60, groups: [group(10, "choice", 1, 1), group(6, "choice", 2, 1), group(4, "numeric", 2, 2), group(4, "numeric", 3, 3)] },
      },
      FIZ: {
        units: [
          ["Physics (Science paper)", [
            `Light – reflection and refraction | refractive index, lenses => ${F("optics")}`,
            "Electricity | Ohm's law, resistors, power => FIZ-OS-9/upor-in-ohmov-zakon, FIZ-OS-9/elektricno-delo-in-moc, FIZ-EXB/current-electricity",
            `Magnetic effects of electric current | force on a conductor => ${F("magnetism-and-induction")}`,
          ]],
        ],
        mock: { minutes: 30, groups: [group(8, "choice", 1, 1), group(4, "numeric", 2, 2), group(2, "numeric", 3, 3)] },
      },
      KEM: {
        units: [
          ["Chemistry (Science paper)", [
            "Chemical reactions and equations | balancing equations => KEM-OS-8/urejanje-kemijskih-enacb, KEM-OS-8/kemijska-reakcija",
            "Acids, bases and salts | pH scale => KEM-OS-8/kisline-in-baze, KEM-OS-8/ph-lestvica",
            "Metals and non-metals | properties and reactions => KEM-OS-8/kovine, KEM-OS-8/nekovine",
            "Periodic classification of elements | periodic table => KEM-OS-8/periodni-sistem",
          ]],
        ],
        mock: { minutes: 30, groups: [group(10, "choice", 1, 1), group(4, "choice", 2, 1)] },
      },
    },
  },
  CBSE12: {
    name: "CBSE Class 12",
    full: "CBSE Class 12 board exams",
    country: "India",
    systems: ["IN-CBSE"],
    about:
      "CBSE Class 12 papers are 3 hours: Mathematics 80 marks, Physics and Chemistry 70 marks (plus practicals). Section A has 1-mark MCQs and assertion–reason questions, followed by short and long answers and case studies. The mock covers the MCQ section and short numerical questions.",
    subjects: {
      MAT: {
        units: [
          ["Relations, functions and algebra", [
            `Relations and functions | composition, inverse => ${M("functions")}`,
            `Inverse trigonometric functions | principal values => ${M("trigonometric-identities")}`,
            `Matrices and determinants | determinants, inverse => ${M("matrices-and-determinants")}`,
          ]],
          ["Calculus", [
            `Continuity and differentiability | derivatives => ${M("differentiation")}, UNI-ULFKKT-MAT/limita-in-zveznost-funkcije`,
            `Applications of derivatives | tangents, maxima and minima => ${M("differentiation")}`,
            `Integrals | definite integrals => ${M("integration")}, UNI-ULFKKT-MAT/doloceni-integral`,
            `Applications of integrals | area under and between curves => ${M("integration")}`,
            "Differential equations | first-order equations => UNI-ULFKKT-MAT/diferencialne-enacbe-prvega-reda",
          ]],
          ["Vectors and probability", [
            `Vectors and three-dimensional geometry | dot product, magnitude => ${M("vectors")}`,
            `Probability | conditional probability, complement => ${M("probability")}`,
          ]],
        ],
        mock: { minutes: 60, groups: [group(10, "choice", 2, 1), group(6, "choice", 3, 1), group(4, "numeric", 2, 2), group(4, "numeric", 3, 3)] },
      },
      FIZ: {
        units: [
          ["Electricity and magnetism", [
            `Electric charges, fields and capacitance | Coulomb's law, capacitors => ${F("electrostatics-and-capacitors")}`,
            `Current electricity | circuits, emf => ${F("current-electricity")}`,
            `Moving charges, magnetism and EMI | magnetic force, induction => ${F("magnetism-and-induction")}`,
            "Alternating current | rms values, reactance => UNI-ULFKKT-ELEKTROVAR/izmenicni-tokovi",
          ]],
          ["Optics and modern physics", [
            `Ray and wave optics | refraction, lenses => ${F("optics")}`,
            `Dual nature, atoms and nuclei | photoelectric effect, half-life => ${F("modern-physics")}`,
          ]],
        ],
        mock: { minutes: 45, groups: [group(8, "choice", 1, 1), group(8, "choice", 2, 1), group(4, "numeric", 2, 2), group(3, "numeric", 3, 3)] },
      },
      KEM: {
        units: [
          ["Physical chemistry", [
            `Solutions | concentration => ${K("solutions-and-concentration")}`,
            `Electrochemistry | cells, electrolysis => ${K("electrochemistry")}`,
            `Chemical kinetics | rate law, half-life => ${K("chemical-kinetics")}`,
          ]],
        ],
        mock: { minutes: 30, groups: [group(8, "choice", 1, 1), group(4, "choice", 2, 1), group(3, "numeric", 3, 2)] },
      },
    },
  },
};

export const EXAM_IDS = Object.keys(EXAMS);
export const SUBJECT_NAMES_EN = { MAT: "Mathematics", FIZ: "Physics", KEM: "Chemistry" };
