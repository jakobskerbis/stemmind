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
    "Binomial distribution | exactly k successes, at most one, variance",
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
// scale: [min, max, korak] lestvica izpita; grades: [[najmanj %, ocena], …] od najboljše navzdol.
// options: število možnosti pri izbirnih (privzeto 4, ENEM 5).
const group = (n, format, level, points, penalty = 0, options = 0) => ({ n, format, level, points, penalty, ...(options ? { options } : {}) });

// Približne ocene po odstotku točk (meje se vsako leto nekoliko spremenijo).
const GRADES_GCSE = [[80, "9"], [70, "8"], [60, "7"], [50, "6"], [40, "5"], [30, "4"], [22, "3"], [14, "2"], [7, "1"], [0, "U"]];
const GRADES_ALEVEL = [[80, "A*"], [70, "A"], [60, "B"], [50, "C"], [40, "D"], [30, "E"], [0, "U"]];
const GRADES_ABITUR = [[95, "15"], [90, "14"], [85, "13"], [80, "12"], [75, "11"], [70, "10"], [65, "09"], [60, "08"], [55, "07"], [50, "06"], [45, "05"], [39, "04"], [33, "03"], [27, "02"], [20, "01"], [0, "00"]].map(([p, n]) => [p, `${n} Notenpunkte`]);
const GRADES_AT = [[87, "1 (Sehr gut)"], [75, "2 (Gut)"], [62, "3 (Befriedigend)"], [50, "4 (Genügend)"], [0, "5 (Nicht genügend)"]];
// Švica: ocena = 5 · točke / največ + 1, zaokroženo na pol ocene.
const GRADES_CH = [6, 5.5, 5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5].map((n) => [Math.max(0, (n - 1) * 20 - 5), String(n)]).concat([[0, "1"]]);
const GRADES_WAEC = [[75, "A1"], [70, "B2"], [65, "B3"], [60, "C4"], [55, "C5"], [50, "C6"], [45, "D7"], [40, "E8"], [0, "F9"]];
const GRADES_KCSE = [[80, "A"], [75, "A−"], [70, "B+"], [65, "B"], [60, "B−"], [55, "C+"], [50, "C"], [45, "C−"], [40, "D+"], [35, "D"], [30, "D−"], [0, "E"]];
const GRADES_NSC = [[80, "level 7"], [70, "level 6"], [60, "level 5"], [50, "level 4"], [40, "level 3"], [30, "level 2"], [0, "level 1"]];

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
  GCSE: {
    name: "GCSE",
    full: "GCSE (England, Wales, Northern Ireland)",
    country: "United Kingdom",
    systems: ["GB"],
    about:
      "GCSE exams are taken at the end of Year 11. Maths (Higher tier) has three 1 h 30 min papers of 80 marks, one without a calculator. Separate Physics and Chemistry each have two 1 h 45 min papers of 100 marks with multiple-choice, structured, calculation and extended-response questions. Grades go from 9 (highest) to 1. The mock covers short calculation questions; the grade is an estimate.",
    subjects: {
      MAT: {
        units: [
          ["Number", [
            `Percentages and compound interest | percent change, repeated percentage change => ${M("ratios-rates-and-percentages")}, ${M("exponential-growth-and-decay")}`,
          ], 15],
          ["Algebra", [
            `Quadratic equations | factorising, formula => ${M("quadratic-equations")}`,
            `Simultaneous equations | elimination, substitution => ${M("systems-of-linear-equations")}`,
            `Inequalities | linear and quadratic inequalities => ${M("quadratic-inequalities")}`,
            `Functions | composite and inverse functions => ${M("functions")}`,
            `Sequences | arithmetic and geometric sequences => ${M("arithmetic-progressions")}, ${M("geometric-progressions")}`,
            `Straight-line graphs | gradient, equation of a line => ${M("coordinate-geometry")}`,
          ], 30],
          ["Ratio, proportion and rates of change", [
            `Ratio and proportion | sharing in a ratio, direct proportion => ${M("ratios-rates-and-percentages")}`,
            `Growth and decay | multipliers, depreciation => ${M("exponential-growth-and-decay")}`,
          ], 20],
          ["Geometry and measures", [
            `Pythagoras and trigonometry | SOH CAH TOA => ${M("right-triangle-trigonometry")}`,
            `Circles | area, sectors, equation of a circle => ${M("circles")}`,
          ], 20],
          ["Probability and statistics", [
            `Probability | tree diagrams, without replacement => ${M("probability")}`,
            `Averages | mean, median => ${M("statistics-mean-median")}`,
          ], 15],
        ],
        mock: { minutes: 40, groups: [group(6, "numeric", 1, 2), group(7, "numeric", 2, 3), group(5, "numeric", 3, 4)], grades: GRADES_GCSE },
      },
      FIZ: {
        units: [
          ["Energy and particles", [
            `Energy | kinetic and potential energy, power => ${F("work-energy-and-power")}`,
            `Particle model of matter | specific heat capacity, gas pressure => ${F("thermal-physics")}`,
          ]],
          ["Electricity and magnetism", [
            `Electricity | series and parallel circuits, power => ${F("current-electricity")}`,
            `Magnetism and electromagnetism | force on a wire, induction => ${F("magnetism-and-induction")}`,
          ]],
          ["Forces and motion", [
            `Motion | equations of motion => ${F("kinematics")}`,
            `Forces | Newton's laws => ${F("laws-of-motion")}`,
            `Momentum | conservation of momentum => ${F("momentum-and-collisions")}`,
          ]],
          ["Waves and atomic structure", [
            `Waves | wave speed, frequency => ${F("waves-and-sound")}`,
            `Light and lenses | refraction, lenses => ${F("optics")}`,
            `Atomic structure | radioactive decay, half-life => ${F("modern-physics")}`,
          ]],
        ],
        mock: { minutes: 35, groups: [group(6, "choice", 1, 1), group(6, "numeric", 2, 3), group(4, "numeric", 3, 4)], grades: GRADES_GCSE },
      },
      KEM: {
        units: [
          ["Atomic structure and quantities", [
            `Atomic structure | protons, neutrons, electrons => ${K("atomic-structure")}`,
            `Quantitative chemistry | moles, reacting masses, concentration => ${K("mole-concept")}, ${K("stoichiometry")}, ${K("solutions-and-concentration")}`,
          ]],
          ["Chemical and energy changes", [
            `Acids and alkalis | pH, neutralisation => ${K("acids-bases-and-ph")}`,
            `Electrolysis | products and masses => ${K("electrochemistry")}`,
            `Energy changes | exothermic and endothermic reactions, bond energies => ${K("thermochemistry")}`,
          ]],
          ["Rates and equilibrium", [
            `Rate of reaction | rate, half-life => ${K("chemical-kinetics")}`,
            `Reversible reactions and equilibrium | equilibrium position => ${K("chemical-equilibrium")}`,
          ]],
        ],
        mock: { minutes: 35, groups: [group(6, "choice", 1, 1), group(6, "numeric", 2, 3), group(4, "numeric", 3, 4)], grades: GRADES_GCSE },
      },
    },
  },
  ALEVEL: {
    name: "A-level",
    full: "A-level / Cambridge International AS & A Level",
    country: "United Kingdom",
    systems: ["GB", "PK", "INTL"],
    about:
      "A-levels are taken at the end of Year 13. Mathematics has three 2-hour papers of 100 marks covering pure mathematics, statistics and mechanics. Physics and Chemistry have three papers of about 2 hours with multiple-choice, structured and practical-skills questions. Grades go from A* to E. Cambridge International AS & A Level examines very similar content. The mock covers calculation questions; the grade is an estimate.",
    subjects: {
      MAT: {
        units: [
          ["Pure mathematics", [
            `Quadratics and functions | discriminant, composite and inverse functions => ${M("quadratic-equations")}, ${M("functions")}`,
            `Exponentials and logarithms | log laws, exponential models => ${M("logarithms")}, ${M("exponential-growth-and-decay")}`,
            `Trigonometry | identities, double angle => ${M("trigonometric-identities")}`,
            `Sequences and series | arithmetic and geometric series => ${M("arithmetic-progressions")}, ${M("geometric-progressions")}`,
            `Coordinate geometry | lines and circles => ${M("coordinate-geometry")}, ${M("circles")}`,
            `Differentiation | tangents, stationary points => ${M("differentiation")}`,
            `Integration | definite integrals, areas => ${M("integration")}`,
            `Vectors | magnitude, scalar product => ${M("vectors")}`,
          ], 67],
          ["Statistics", [
            `Probability | conditional probability, complement => ${M("probability")}`,
            `Binomial distribution | B(n, p), cumulative probabilities => ${M("binomial-distribution")}`,
            `Data | mean, median => ${M("statistics-mean-median")}`,
          ], 17],
          ["Mechanics", [
            `Kinematics | constant acceleration => ${F("kinematics")}, ${F("projectile-motion")}`,
            `Forces and Newton's laws | connected particles, friction => ${F("laws-of-motion")}`,
          ], 16],
        ],
        mock: { minutes: 50, groups: [group(5, "numeric", 2, 4), group(10, "numeric", 3, 6)], grades: GRADES_ALEVEL },
      },
      FIZ: {
        units: PHYSICS_UNITS,
        mock: { minutes: 45, groups: [group(10, "choice", 2, 1), group(5, "numeric", 2, 4), group(5, "numeric", 3, 6)], grades: GRADES_ALEVEL },
      },
      KEM: {
        units: CHEMISTRY_UNITS,
        mock: { minutes: 45, groups: [group(10, "choice", 2, 1), group(5, "numeric", 2, 4), group(5, "numeric", 3, 6)], grades: GRADES_ALEVEL },
      },
    },
  },
  ABITUR: {
    name: "Abitur",
    full: "Abitur (Deutschland)",
    country: "Germany",
    systems: ["DE"],
    about:
      "The Abitur is set by each federal state, increasingly with tasks from the common pool of the IQB. Mathematics has a part without aids (no calculator or formula sheet) and a longer part with tasks in analysis, analytic geometry or linear algebra, and stochastics. Results are given in points from 15 (best) to 0; 5 points is a pass. The mock covers short calculation tasks; the points are an estimate.",
    subjects: {
      MAT: {
        units: [
          ["Analysis", [
            `Functions | composition, inverse functions => ${M("functions")}`,
            `Exponential and logarithmic functions | growth and decay, logarithms => ${M("exponential-growth-and-decay")}, ${M("logarithms")}`,
            `Differential calculus | tangents, extrema => ${M("differentiation")}`,
            `Integral calculus | definite integrals, areas => ${M("integration")}`,
          ], 50],
          ["Analytic geometry and linear algebra", [
            `Vectors | scalar product, orthogonality => ${M("vectors")}`,
            `Matrices | determinants => ${M("matrices-and-determinants")}`,
          ], 25],
          ["Stochastics", [
            `Probability | multi-stage experiments => ${M("probability")}`,
            `Binomial distribution | Bernoulli chains, variance => ${M("binomial-distribution")}`,
            `Combinatorics | permutations and combinations => ${M("permutations-and-combinations")}`,
          ], 25],
        ],
        mock: { minutes: 45, groups: [group(5, "numeric", 1, 2), group(5, "numeric", 2, 4), group(4, "numeric", 3, 6)], grades: GRADES_ABITUR },
      },
      FIZ: {
        units: [
          ["Mechanics", [
            `Motion and forces | kinematics, Newton's laws => ${F("kinematics")}, ${F("laws-of-motion")}`,
            `Energy and momentum | conservation laws => ${F("work-energy-and-power")}, ${F("momentum-and-collisions")}`,
            `Circular motion and gravitation | centripetal force, gravitational field => ${F("circular-motion-and-gravitation")}`,
          ]],
          ["Fields", [
            `Electric field and capacitors | Coulomb's law, capacitance => ${F("electrostatics-and-capacitors")}`,
            `Magnetic field and induction | Lorentz force, Faraday's law => ${F("magnetism-and-induction")}`,
          ]],
          ["Oscillations and waves", [
            `Oscillations | spring–mass system, pendulum => ${F("oscillations")}`,
            `Waves | standing waves, Doppler effect => ${F("waves-and-sound")}`,
            `Optics | refraction, lenses => ${F("optics")}`,
          ]],
          ["Quantum and atomic physics", [`Quantum objects and nuclei | photoelectric effect, de Broglie wavelength, half-life => ${F("modern-physics")}`]],
        ],
        mock: { minutes: 45, groups: [group(5, "numeric", 1, 2), group(5, "numeric", 2, 4), group(4, "numeric", 3, 6)], grades: GRADES_ABITUR },
      },
      KEM: {
        units: [
          ["Basics", [`Quantities in chemistry | amount of substance, reacting masses => ${K("mole-concept")}, ${K("stoichiometry")}`]],
          ["Equilibrium, acids and bases", [
            `Chemical equilibrium | law of mass action => ${K("chemical-equilibrium")}`,
            `Acids and bases | pH, weak acids => ${K("acids-bases-and-ph")}`,
            `Titrations | concentration, neutralisation => ${K("solutions-and-concentration")}`,
          ]],
          ["Energy, kinetics and electrochemistry", [
            `Energetics | enthalpy, Hess's law, Gibbs energy => ${K("thermochemistry")}`,
            `Reaction kinetics | rate law, half-life => ${K("chemical-kinetics")}`,
            `Electrochemistry | galvanic cells, electrolysis => ${K("electrochemistry")}`,
          ]],
        ],
        mock: { minutes: 45, groups: [group(5, "numeric", 1, 2), group(5, "numeric", 2, 4), group(4, "numeric", 3, 6)], grades: GRADES_ABITUR },
      },
    },
  },
  MATURAAT: {
    name: "Matura (AT)",
    full: "Standardisierte Reifeprüfung (SRDP) – Mathematik",
    country: "Austria",
    systems: ["AT"],
    about:
      "The standardised Matura in mathematics (SRDP) lasts 270 minutes. Part 1 has short tasks on basic competences (multiple choice, matching, gap-fill and short answers); part 2 has longer tasks with several sub-questions. Grades go from 1 (Sehr gut) to 5 (Nicht genügend). Physics and chemistry are not part of the standardised written exam. The mock covers part-1-style tasks and short calculations; the grade is an estimate.",
    subjects: {
      MAT: {
        units: [
          ["Algebra and geometry", [
            `Equations and systems | linear and quadratic equations => ${M("systems-of-linear-equations")}, ${M("quadratic-equations")}`,
            `Vectors | scalar product, orthogonality => ${M("vectors")}`,
            `Trigonometry | right triangles, unit circle => ${M("right-triangle-trigonometry")}, ${M("trigonometric-identities")}`,
          ], 25],
          ["Functional dependencies", [
            `Functions | linear, quadratic, inverse => ${M("functions")}`,
            `Exponential functions | growth and decay, logarithms => ${M("exponential-growth-and-decay")}, ${M("logarithms")}`,
          ], 25],
          ["Analysis", [
            `Sequences | arithmetic and geometric sequences => ${M("arithmetic-progressions")}, ${M("geometric-progressions")}`,
            `Derivatives | rate of change, extrema => ${M("differentiation")}`,
            `Integrals | definite integrals, areas => ${M("integration")}`,
          ], 25],
          ["Probability and statistics", [
            `Statistics | mean, median => ${M("statistics-mean-median")}`,
            `Probability | multi-stage experiments => ${M("probability")}`,
            `Binomial distribution | P(X = k), variance => ${M("binomial-distribution")}`,
          ], 25],
        ],
        mock: { minutes: 60, groups: [group(8, "choice", 1, 1), group(6, "choice", 2, 1), group(4, "numeric", 2, 2), group(4, "numeric", 3, 3)], grades: GRADES_AT },
      },
    },
  },
  MATURACH: {
    name: "Matura (CH)",
    full: "Gymnasiale Maturität / Maturité gymnasiale (Schweiz)",
    country: "Switzerland",
    systems: ["CH"],
    about:
      "In Switzerland each Gymnasium sets its own written Matura exams (usually 3 to 4 hours) in mathematics and, depending on the profile, in physics or chemistry, plus oral exams. Grades go from 6 (best) to 1; 4 is a pass. A common rule is grade = 5 × points ÷ maximum + 1, rounded to a half grade, and the mock uses it.",
    subjects: {
      MAT: {
        units: [
          ["Algebra and functions", [
            `Equations and inequalities | quadratic equations and inequalities => ${M("quadratic-equations")}, ${M("quadratic-inequalities")}`,
            `Functions, exponentials and logarithms | inverse functions, log laws => ${M("functions")}, ${M("logarithms")}`,
            `Sequences and series | arithmetic and geometric series => ${M("arithmetic-progressions")}, ${M("geometric-progressions")}`,
          ]],
          ["Calculus", [
            `Differential calculus | tangents, extrema => ${M("differentiation")}`,
            `Integral calculus | definite integrals, areas => ${M("integration")}`,
          ]],
          ["Geometry", [
            `Vector geometry | scalar product => ${M("vectors")}`,
            `Trigonometry | identities, triangles => ${M("trigonometric-identities")}, ${M("right-triangle-trigonometry")}`,
          ]],
          ["Stochastics", [
            `Combinatorics and probability | counting, probability => ${M("permutations-and-combinations")}, ${M("probability")}`,
            `Binomial distribution | P(X = k), variance => ${M("binomial-distribution")}`,
          ]],
        ],
        mock: { minutes: 50, groups: [group(5, "numeric", 1, 2), group(6, "numeric", 2, 4), group(4, "numeric", 3, 6)], grades: GRADES_CH },
      },
      FIZ: {
        units: PHYSICS_UNITS,
        mock: { minutes: 45, groups: [group(5, "numeric", 1, 2), group(5, "numeric", 2, 4), group(4, "numeric", 3, 6)], grades: GRADES_CH },
      },
      KEM: {
        units: CHEMISTRY_UNITS,
        mock: { minutes: 45, groups: [group(5, "numeric", 1, 2), group(5, "numeric", 2, 4), group(4, "numeric", 3, 6)], grades: GRADES_CH },
      },
    },
  },
  BAC: {
    name: "Baccalauréat",
    full: "Baccalauréat général – épreuves de spécialité",
    country: "France",
    systems: ["FR", "FR-AF"],
    about:
      "Since the 2021 reform, mathematics and physique-chimie are spécialité exams in Terminale: mathematics lasts 4 hours, physique-chimie 3 h 30, and both are marked out of 20. The mathematics paper often includes a multiple-choice exercise. Many French-speaking African countries have a similar baccalauréat. The mock gives an approximate mark out of 20.",
    subjects: {
      MAT: {
        units: [
          ["Suites", [`Arithmetic and geometric sequences | general term, sums, limits => ${M("arithmetic-progressions")}, ${M("geometric-progressions")}`]],
          ["Fonctions", [
            `Functions | composition, inverse => ${M("functions")}`,
            `Exponential and logarithm | log laws, exponential models => ${M("logarithms")}, ${M("exponential-growth-and-decay")}`,
            `Derivatives and convexity | tangents, variations => ${M("differentiation")}`,
            `Integrals | definite integrals, areas => ${M("integration")}`,
          ]],
          ["Géométrie dans l'espace", [`Vectors and orthogonality | scalar product => ${M("vectors")}`]],
          ["Probabilités", [
            `Combinatorics | permutations and combinations => ${M("permutations-and-combinations")}`,
            `Probability | conditional probability => ${M("probability")}`,
            `Binomial distribution | Bernoulli schemes => ${M("binomial-distribution")}`,
          ]],
        ],
        mock: { minutes: 50, groups: [group(5, "choice", 2, 1), group(5, "numeric", 2, 2), group(4, "numeric", 3, 3)], scale: [0, 20, 0.5] },
      },
      FIZ: {
        units: [
          ["Mouvement et interactions", [
            `Motion and Newton's laws | kinematics, projectiles => ${F("kinematics")}, ${F("projectile-motion")}, ${F("laws-of-motion")}`,
            `Satellites and planets | circular motion, gravitation => ${F("circular-motion-and-gravitation")}`,
          ]],
          ["Énergie", [
            `Energy | work, kinetic and potential energy => ${F("work-energy-and-power")}`,
            `Thermodynamics | heat, gas laws => ${F("thermal-physics")}`,
            `Capacitors and circuits | capacitance, circuits => ${F("electrostatics-and-capacitors")}, ${F("current-electricity")}`,
          ]],
          ["Ondes et signaux", [
            `Waves | wave speed, Doppler effect => ${F("waves-and-sound")}`,
            `Optics | lenses, refraction => ${F("optics")}`,
            `Light and matter | photoelectric effect, radioactivity => ${F("modern-physics")}`,
          ]],
        ],
        mock: { minutes: 45, groups: [group(4, "choice", 2, 1), group(5, "numeric", 2, 2), group(4, "numeric", 3, 3)], scale: [0, 20, 0.5] },
      },
      KEM: {
        units: [
          ["Constitution et transformations de la matière", [
            `Quantities of matter | moles, concentration => ${K("mole-concept")}, ${K("solutions-and-concentration")}`,
            `Acids and bases | pH, weak acids => ${K("acids-bases-and-ph")}`,
            `Kinetics | rate, half-life => ${K("chemical-kinetics")}`,
            `Equilibrium | equilibrium constant => ${K("chemical-equilibrium")}`,
            `Electrochemistry | cells, electrolysis => ${K("electrochemistry")}`,
          ]],
        ],
        mock: { minutes: 40, groups: [group(4, "choice", 2, 1), group(4, "numeric", 2, 2), group(4, "numeric", 3, 3)], scale: [0, 20, 0.5] },
      },
    },
  },
  ENEM: {
    name: "ENEM",
    full: "ENEM (Exame Nacional do Ensino Médio)",
    country: "Brazil",
    systems: ["BR"],
    about:
      "ENEM has 180 multiple-choice questions with five options (A–E) over two days, including 45 in Matemática e suas Tecnologias and 45 in Ciências da Natureza (physics, chemistry and biology). Scores use item response theory (TRI), so typical results range from about 300 to 900. The mock uses five options and about three minutes per question; the score is an estimate.",
    subjects: {
      MAT: {
        units: [
          ["Números e proporções", [
            `Percentages and ratios | percent change, proportion => ${M("ratios-rates-and-percentages")}`,
            `Exponential growth | compound interest => ${M("exponential-growth-and-decay")}`,
          ], 30],
          ["Álgebra e funções", [
            `Functions | evaluating, inverse => ${M("functions")}`,
            `Equations | quadratic equations, systems => ${M("quadratic-equations")}, ${M("systems-of-linear-equations")}`,
            `Sequences | arithmetic and geometric progressions => ${M("arithmetic-progressions")}, ${M("geometric-progressions")}`,
          ], 25],
          ["Geometria", [
            `Plane geometry | circles, sectors => ${M("circles")}`,
            `Trigonometry | right triangles => ${M("right-triangle-trigonometry")}`,
          ], 20],
          ["Estatística e probabilidade", [
            `Statistics | mean, median => ${M("statistics-mean-median")}`,
            `Counting and probability | combinations, probability => ${M("permutations-and-combinations")}, ${M("probability")}`,
          ], 25],
        ],
        mock: { minutes: 45, groups: [group(5, "choice", 1, 1, 0, 5), group(7, "choice", 2, 1, 0, 5), group(3, "choice", 3, 1, 0, 5)], scale: [300, 900] },
      },
      FIZ: {
        units: PHYSICS_UNITS,
        mock: { minutes: 45, groups: [group(5, "choice", 1, 1, 0, 5), group(7, "choice", 2, 1, 0, 5), group(3, "choice", 3, 1, 0, 5)], scale: [300, 900] },
      },
      KEM: {
        units: CHEMISTRY_UNITS,
        mock: { minutes: 45, groups: [group(5, "choice", 1, 1, 0, 5), group(7, "choice", 2, 1, 0, 5), group(3, "choice", 3, 1, 0, 5)], scale: [300, 900] },
      },
    },
  },
  WASSCE: {
    name: "WAEC WASSCE",
    full: "WAEC – West African Senior School Certificate Examination",
    country: "West Africa",
    systems: ["NG", "GH"],
    about:
      "The WASSCE is taken at the end of senior secondary school in Nigeria, Ghana, Sierra Leone, Liberia and The Gambia. Each subject has an objective paper of 50 multiple-choice questions and a theory paper; the sciences also have a practical. Grades go from A1 (best) to F9; C6 or better is a credit. The mock covers the objective paper at about its real pace; the grade is an estimate.",
    subjects: {
      MAT: {
        units: [
          ["Number and numeration", [
            `Indices and logarithms | laws of indices, log equations => ${M("logarithms")}`,
            `Percentages, ratio and interest | percent change, compound interest => ${M("ratios-rates-and-percentages")}, ${M("exponential-growth-and-decay")}`,
            `Sequences and series | AP and GP => ${M("arithmetic-progressions")}, ${M("geometric-progressions")}`,
          ], 25],
          ["Algebraic processes", [
            `Quadratic equations | factorisation, formula => ${M("quadratic-equations")}`,
            `Simultaneous equations | elimination, substitution => ${M("systems-of-linear-equations")}`,
            `Inequalities | linear and quadratic => ${M("quadratic-inequalities")}`,
          ], 30],
          ["Mensuration, geometry and trigonometry", [
            `Circles and mensuration | arcs, sectors, areas => ${M("circles")}`,
            `Trigonometry | ratios, elevation and depression => ${M("right-triangle-trigonometry")}`,
            `Coordinate geometry | gradient, distance => ${M("coordinate-geometry")}`,
          ], 25],
          ["Statistics and probability", [
            `Statistics | mean, median => ${M("statistics-mean-median")}`,
            `Probability | simple and combined events => ${M("probability")}`,
          ], 20],
        ],
        mock: { minutes: 40, groups: [group(10, "choice", 1, 1), group(10, "choice", 2, 1), group(5, "choice", 3, 1)], grades: GRADES_WAEC },
      },
      FIZ: {
        units: PHYSICS_UNITS,
        mock: { minutes: 40, groups: [group(10, "choice", 1, 1), group(10, "choice", 2, 1), group(5, "choice", 3, 1)], grades: GRADES_WAEC },
      },
      KEM: {
        units: CHEMISTRY_UNITS,
        mock: { minutes: 40, groups: [group(10, "choice", 1, 1), group(10, "choice", 2, 1), group(5, "choice", 3, 1)], grades: GRADES_WAEC },
      },
    },
  },
  JAMB: {
    name: "JAMB UTME",
    full: "JAMB UTME (Unified Tertiary Matriculation Examination)",
    country: "Nigeria",
    systems: ["NG"],
    about:
      "The UTME is a computer-based test for admission to Nigerian universities: Use of English (60 questions) and three subjects of 40 questions each, 2 hours in total. Each subject is scored out of 100 (400 in total) and there is no negative marking. The mock covers one subject at the real pace of about 40 seconds per question; the score is an estimate.",
    subjects: {
      MAT: {
        units: [
          ["Number and algebra", [
            `Indices and logarithms | laws, equations => ${M("logarithms")}`,
            `Equations and inequalities | quadratics, simultaneous equations => ${M("quadratic-equations")}, ${M("systems-of-linear-equations")}, ${M("quadratic-inequalities")}`,
            `Sequences and series | AP and GP => ${M("arithmetic-progressions")}, ${M("geometric-progressions")}`,
            `Matrices and determinants | 2×2 and 3×3 determinants => ${M("matrices-and-determinants")}`,
          ]],
          ["Geometry and trigonometry", [
            `Coordinate geometry | gradient, distance, circles => ${M("coordinate-geometry")}, ${M("circles")}`,
            `Trigonometry | ratios, identities => ${M("right-triangle-trigonometry")}, ${M("trigonometric-identities")}`,
          ]],
          ["Calculus", [`Differentiation and integration | derivatives, definite integrals => ${M("differentiation")}, ${M("integration")}`]],
          ["Statistics", [`Statistics and probability | mean, median, counting, probability => ${M("statistics-mean-median")}, ${M("permutations-and-combinations")}, ${M("probability")}`]],
        ],
        mock: { minutes: 15, groups: [group(8, "choice", 1, 5), group(8, "choice", 2, 5), group(4, "choice", 3, 5)], scale: [0, 100, 1] },
      },
      FIZ: {
        units: PHYSICS_UNITS,
        mock: { minutes: 15, groups: [group(8, "choice", 1, 5), group(8, "choice", 2, 5), group(4, "choice", 3, 5)], scale: [0, 100, 1] },
      },
      KEM: {
        units: CHEMISTRY_UNITS,
        mock: { minutes: 15, groups: [group(8, "choice", 1, 5), group(8, "choice", 2, 5), group(4, "choice", 3, 5)], scale: [0, 100, 1] },
      },
    },
  },
  KCSE: {
    name: "KCSE",
    full: "KCSE (Kenya Certificate of Secondary Education)",
    country: "Kenya",
    systems: ["KE"],
    about:
      "The KCSE is the final exam of Kenya's 8-4-4 system, which the CBC is replacing. Mathematics has two 2 h 30 min papers of 100 marks: section I has 16 short questions and section II longer questions. Physics and Chemistry have two theory papers and a practical. Grades go from A (best) to E. The mock covers short section-I questions; the grade is an estimate.",
    subjects: {
      MAT: {
        units: [
          ["Numbers and algebra", [
            `Indices and logarithms | laws, equations => ${M("logarithms")}`,
            `Equations | quadratic and simultaneous equations => ${M("quadratic-equations")}, ${M("systems-of-linear-equations")}`,
            `Commercial arithmetic | percentages, compound interest => ${M("ratios-rates-and-percentages")}, ${M("exponential-growth-and-decay")}`,
            `Sequences and series | AP and GP => ${M("arithmetic-progressions")}, ${M("geometric-progressions")}`,
            `Matrices | determinants => ${M("matrices-and-determinants")}`,
          ]],
          ["Geometry and trigonometry", [
            `Trigonometry | ratios, identities => ${M("right-triangle-trigonometry")}, ${M("trigonometric-identities")}`,
            `Circles and coordinate geometry | arcs, sectors, equation of a circle => ${M("circles")}, ${M("coordinate-geometry")}`,
            `Vectors | magnitude, scalar product => ${M("vectors")}`,
          ]],
          ["Statistics, probability and calculus", [
            `Statistics and probability | mean, median, probability => ${M("statistics-mean-median")}, ${M("probability")}`,
            `Differentiation and area | derivatives, area under a curve => ${M("differentiation")}, ${M("integration")}`,
          ]],
        ],
        mock: { minutes: 50, groups: [group(8, "numeric", 1, 2), group(6, "numeric", 2, 3), group(3, "numeric", 3, 5)], grades: GRADES_KCSE },
      },
      FIZ: {
        units: PHYSICS_UNITS,
        mock: { minutes: 45, groups: [group(6, "numeric", 1, 2), group(6, "numeric", 2, 3), group(3, "numeric", 3, 5)], grades: GRADES_KCSE },
      },
      KEM: {
        units: CHEMISTRY_UNITS,
        mock: { minutes: 45, groups: [group(6, "numeric", 1, 2), group(6, "numeric", 2, 3), group(3, "numeric", 3, 5)], grades: GRADES_KCSE },
      },
    },
  },
  NSC: {
    name: "NSC (matric)",
    full: "National Senior Certificate (South Africa)",
    country: "South Africa",
    systems: ["ZA"],
    about:
      "The National Senior Certificate (matric) is written at the end of Grade 12. Mathematics has two 3-hour papers of 150 marks. Physical Sciences has paper 1 (physics) and paper 2 (chemistry), each 3 hours and 150 marks, starting with 10 multiple-choice questions. Results are given as achievement levels from 7 (80–100%) to 1. Organic chemistry is not covered here yet; the level is an estimate.",
    subjects: {
      MAT: {
        units: [
          ["Paper 1: algebra, functions and calculus", [
            `Equations and inequalities | quadratics, simultaneous equations => ${M("quadratic-equations")}, ${M("systems-of-linear-equations")}, ${M("quadratic-inequalities")}`,
            `Patterns, sequences and series | arithmetic and geometric series => ${M("arithmetic-progressions")}, ${M("geometric-progressions")}`,
            `Functions and logarithms | inverse functions, logs => ${M("functions")}, ${M("logarithms")}`,
            `Finance, growth and decay | compound interest, depreciation => ${M("exponential-growth-and-decay")}`,
            `Differential calculus | tangents, cubic graphs, optimisation => ${M("differentiation")}`,
            `Probability | counting principle, probability => ${M("permutations-and-combinations")}, ${M("probability")}`,
          ], 50],
          ["Paper 2: statistics, geometry and trigonometry", [
            `Statistics | mean, median => ${M("statistics-mean-median")}`,
            `Analytical geometry | lines and circles => ${M("coordinate-geometry")}, ${M("circles")}`,
            `Trigonometry | identities, special angles => ${M("trigonometric-identities")}, ${M("right-triangle-trigonometry")}`,
          ], 50],
        ],
        mock: { minutes: 50, groups: [group(6, "numeric", 1, 3), group(6, "numeric", 2, 4), group(4, "numeric", 3, 6)], grades: GRADES_NSC },
      },
      FIZ: {
        units: [
          ["Mechanics", [
            `Newton's laws | forces, friction => ${F("laws-of-motion")}`,
            `Momentum and impulse | conservation of momentum => ${F("momentum-and-collisions")}`,
            `Vertical projectile motion | equations of motion => ${F("kinematics")}, ${F("projectile-motion")}`,
            `Work, energy and power | work–energy theorem => ${F("work-energy-and-power")}`,
          ]],
          ["Waves, electricity and matter", [
            `Doppler effect | sound waves => ${F("waves-and-sound")}`,
            `Electrostatics | Coulomb's law, electric field => ${F("electrostatics-and-capacitors")}`,
            `Electric circuits | internal resistance, power => ${F("current-electricity")}`,
            `Electrodynamics | generators, induction => ${F("magnetism-and-induction")}`,
            `Photoelectric effect | photons, work function => ${F("modern-physics")}`,
          ]],
        ],
        mock: { minutes: 45, groups: [group(5, "choice", 1, 2), group(4, "numeric", 2, 4), group(4, "numeric", 3, 6)], grades: GRADES_NSC },
      },
      KEM: {
        units: [
          ["Chemical change", [
            `Stoichiometry | moles, limiting reactant => ${K("mole-concept")}, ${K("stoichiometry")}`,
            `Rates of reaction | rate, half-life => ${K("chemical-kinetics")}`,
            `Chemical equilibrium | Kc, Le Chatelier => ${K("chemical-equilibrium")}`,
            `Acids and bases | pH, titrations => ${K("acids-bases-and-ph")}, ${K("solutions-and-concentration")}`,
            `Electrochemical reactions | galvanic and electrolytic cells => ${K("electrochemistry")}`,
          ]],
        ],
        mock: { minutes: 45, groups: [group(5, "choice", 1, 2), group(4, "numeric", 2, 4), group(4, "numeric", 3, 6)], grades: GRADES_NSC },
      },
    },
  },
};

export const EXAM_IDS = Object.keys(EXAMS);
export const SUBJECT_NAMES_EN = { MAT: "Mathematics", FIZ: "Physics", KEM: "Chemistry" };
