/**
 * Centralized QA Agency Data File
 * 
 * Edit this file to update agency details, pricing, portfolio items,
 * and contact settings without altering template HTML and layout structures.
 */

const QA_DATA = {
  agency: {
    name: "Fine Tooth",
    tagline: "Software Quality Assurance & Test Automation Agency",
    eyebrow: "INDEPENDENT QA & TEST AUTOMATION",
    headline: "Find the bugs before your users do.",
    supportingCopy: "We help software teams and game studios uncover defects, validate critical user journeys, and build reliable automated tests so they can release with greater confidence.",
    email: "hello@finetooth.example", // Placeholder — replace with verified agency email
    offices: [
      {
        city: "Remote",
        address: "100% Remote Operations",
        postal: "Serving Product Teams Globally",
        phone: ""
      }
    ],
    social: {
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      twitter: "https://x.com/"
    }
  },

  team: {
    collectiveExperience: "4.5 years",
    summary: "A focused QA team with 4.5 years of collective software testing and test automation experience.",
    members: [
      { name: "Rishish", initial: "R" },
      { name: "Chandan", initial: "C" },
      { name: "Amit", initial: "A" }
    ]
  },

  formConfig: {
    // To send form submissions directly to Formspree, add your form ID below:
    // e.g. "https://formspree.io/f/your_form_id"
    formspreeEndpoint: "", 
    useNetlify: false
  },

  pricing: {
    trial: {
      name: "Trial QA",
      price: "$149",
      billing: "one-time",
      projectLimit: "1 project",
      scope: "One core flow or feature",
      purpose: "Initial manual assessment to evaluate testing rigor and reporting quality.",
      included: [
        "One project only",
        "One core flow or feature",
        "Initial manual assessment",
        "Structured findings and reproducible bug reports",
        "No regression retesting included"
      ],
      disclaimer: "Single assessment audit on agreed scope. Retesting after fixes is not included."
    },
    monthly: [
      {
        id: "basic",
        name: "Basic",
        hours: "30 hours / month",
        projectLimit: "1 project",
        priceNoAuto: "$299",
        priceWithAuto: "$449",
        period: "/ month",
        isRecommended: false,
        summary: "Essential ongoing coverage for early-stage products and focused release validation.",
        included: [
          "One project only",
          "30 total testing hours per month (total capacity, not per project)",
          "Scoped functional, exploratory, and regression testing",
          "Weekly progress reports",
          "Retesting reported defects after fixes, within the plan's monthly hours",
          "Automation option may include scoped Selenium, Playwright, or Cypress checks"
        ]
      },
      {
        id: "pro",
        name: "Pro",
        hours: "45 hours / month",
        projectLimit: "1 project",
        priceNoAuto: "$699",
        priceWithAuto: "$899",
        period: "/ month",
        isRecommended: true,
        badge: "Recommended Plan",
        summary: "Broader QA capacity for active teams shipping regular product updates.",
        included: [
          "One project only",
          "45 total testing hours per month (total capacity, not per project)",
          "Broader functional and regression coverage",
          "API testing where agreed",
          "Weekly progress reports",
          "Retesting reported defects after fixes, within the plan's monthly hours",
          "Scoped automation development or maintenance (Selenium, Playwright, or Cypress) when selected"
        ]
      },
      {
        id: "growth",
        name: "Growth",
        hours: "60 hours / month",
        projectLimitManual: "1 project",
        projectLimitAuto: "Up to 3 projects",
        priceNoAuto: "$1,299",
        priceWithAuto: "$1,699",
        period: "/ month",
        isRecommended: false,
        summary: "High-capacity QA support for multi-feature products or multi-project validation.",
        included: [
          "Manual QA covers 1 project only; Growth with automation covers up to 3 projects",
          "60 total testing hours per month (total capacity shared across included projects, not 60 hours per project)",
          "Cross-project prioritization agreed at kickoff",
          "Weekly progress reports",
          "Retesting reported defects after fixes, within the plan's monthly hours",
          "Scoped automation development or maintenance (Selenium, Playwright, or Cypress) when selected"
        ]
      }
    ],
    conditions: [
      "Displayed prices are starting prices in USD.",
      "Each plan covers only the stated number of projects.",
      "The customer and Fine-Tooth agree on scope, access, priorities, and deliverables before testing begins.",
      "Monthly plans include weekly progress reports and retesting of reported defects after fixes, subject to the plan's remaining hours.",
      "Unused hours do not roll over.",
      "Automation work is limited by the purchased hours and agreed scope.",
      "Additional projects, hours, platforms, or work outside the agreed scope require a separate quote.",
      "Ownership and delivery of custom automation code should follow the agreed engagement terms."
    ]
  },

  portfolio: {
    websites: [
      {
        id: "sarkarijobsuchna",
        name: "Sarkari Job Suchna",
        category: "Web Application",
        tag: "Public Portal · High-Concurrency QA",
        image: "images/work/sarkari-job-suchna.png",
        shortDescription: "Recruitment portal tested for live notification alerts, filter accuracy, and mobile performance under peak concurrency.",
        url: "https://sarkarijobsuchna.com",
        isVerifiedUrl: true,
        technologies: ["Public Portal", "Functional Validation", "Content Integrity", "Responsive UI"]
      },
      {
        id: "kahaaniverse",
        name: "KahaaniVerse",
        category: "Web Application",
        tag: "Digital Media · UX & Performance",
        image: "images/work/kahaaniverse.png",
        shortDescription: "Interactive storytelling platform audited for audio stream stability, dynamic cover grids, and seamless cross-device reading.",
        url: "https://kahaaniverse.com",
        isVerifiedUrl: true,
        technologies: ["Digital Media", "Audio Playback", "Dynamic Grids", "Session State"]
      },
      {
        id: "sarkariguidejob",
        name: "SarkariGuide Job",
        category: "Web Application",
        tag: "Notification Systems · Cross-Browser",
        image: "images/work/sarkari-guide-job.png",
        shortDescription: "Career alerts portal verified for web push notification flows, modal dialog accessibility, and responsive table layouts.",
        url: "https://sarkariguidejob.com",
        isVerifiedUrl: true,
        technologies: ["Push Notifications", "Modal Dialogs", "Cross-Browser", "Mobile Viewports"]
      }
    ],
    applications: [
      {
        id: "mahjong-tales",
        name: "Mahjong Tales",
        category: "Mobile Game",
        badge: "Mobile Game",
        shortDescription: "Tile-matching puzzle title tested for touch responsiveness, game state persistence, audio synchronization, and level progression flows across diverse device resolutions.",
        appStoreUrl: "",
        technologies: ["Mobile Game Engine", "Touch Responsiveness", "State Persistence"]
      },
      {
        id: "nostalgiacam",
        name: "NostalgiaCam",
        category: "Mobile Application",
        badge: "iOS & Android",
        shortDescription: "Vintage photography and image filter styling app tested for camera permissions, real-time filter shader rendering, memory consumption, and asset export stability.",
        appStoreUrl: "",
        technologies: ["Camera API", "Shader Rendering", "Memory Profiling", "iOS/Android"]
      },
      {
        id: "arrow-rage",
        name: "Arrow Rage",
        category: "Mobile Game",
        badge: "Logic & Arcade",
        shortDescription: "Continuous-path logic game tested across varying touch latencies, frame-rate consistency, boundary collision algorithms, and countdown constraints.",
        appStoreUrl: "",
        technologies: ["Arcade Mechanics", "Touch Latency", "Frame-Rate Profiling"]
      },
      {
        id: "bhopal-metro",
        name: "Bhopal Metro App",
        category: "Mobile Application",
        badge: "Urban Transit",
        shortDescription: "Transit navigation and timetable utility tested for route calculation accuracy, offline station lookups, and clear commuter UI flows across screen sizes.",
        appStoreUrl: "",
        technologies: ["Transit Routing", "Offline Caching", "Responsive Layouts"]
      }
    ]
  },

  services: [
    {
      title: "Manual & Functional Testing",
      description: "Validate application behavior, user journeys, business logic, acceptance criteria, and edge cases through test execution and reproducible bug reports.",
      badges: ["User journeys", "Acceptance criteria", "Edge cases", "Exploratory testing"]
    },
    {
      title: "UI & Cross-Browser Testing",
      description: "Identify layout inconsistencies, responsive issues, and browser compatibility problems across Chrome, Firefox, Safari, and Edge on desktop and mobile viewports.",
      badges: ["Cross-browser", "Responsive UI", "Browser compatibility", "Viewport checks"]
    },
    {
      title: "API & Integration Testing",
      description: "Validate requests, responses, HTTP status codes, schema contracts, authentication headers, and error handling for REST endpoints under expected and invalid payloads.",
      badges: ["REST endpoints", "Schema validation", "Status codes", "Error handling"]
    },
    {
      title: "Mobile Application Testing",
      description: "Test native and hybrid mobile app functionality, usability, touch behavior, navigation, and agreed regression scenarios across iOS and Android viewports.",
      badges: ["iOS & Android", "Touch usability", "Navigation flows", "Regression checks"]
    },
    {
      title: "Game Testing & Mechanics Validation",
      description: "Comprehensive validation for mobile, web, and indie games: gameplay mechanics, UI/UX flows, level progression, boundary collisions, performance stability, and structured bug reporting.",
      badges: ["Gameplay mechanics", "Collision detection", "Level progression", "UI/UX flows", "Bug reporting"]
    },
    {
      title: "Automation Engineering",
      description: "Build maintainable automated checks, maintain existing suites, and execute test runs using Selenium, Playwright, or Cypress with structured documentation and execution reports.",
      badges: ["Selenium", "Playwright", "Cypress", "Scoped test suites"]
    }
  ],

  frameworks: {
    supported: ["Selenium", "Playwright", "Cypress"],
    deliverables: [
      "Scoped automation scripts",
      "Test case organization",
      "Configuration and execution instructions",
      "Structured documentation",
      "Detailed test reports"
    ],
    note: "Deliverables and setup depend on the selected plan, agreed scope, and existing team infrastructure."
  },

  process: [
    {
      step: 1,
      title: "Understand",
      shortTitle: "Understand",
      description: "Discuss the product, critical workflows, and testing priorities."
    },
    {
      step: 2,
      title: "Plan & Test",
      shortTitle: "Plan & Test",
      description: "Agree on scope and execute the selected manual, API, mobile, game, or automation tests."
    },
    {
      step: 3,
      title: "Report & Retest",
      shortTitle: "Report & Retest",
      description: "Provide reproducible findings and retest fixes within the agreed scope."
    },
    {
      step: 4,
      title: "Improve",
      shortTitle: "Improve",
      description: "Share weekly progress reports and identify practical next steps."
    }
  ],

  faq: [
    {
      q: "What is manual QA versus automation?",
      a: "Manual QA involves human testers executing test scenarios, exploring edge cases, validating usability, and assessing real user journeys where human judgment is critical. Automated testing uses scripted checks (using Selenium, Playwright, or Cypress) to run repeatable regression and functional checks quickly and consistently, catching breaking changes early. Both complement each other: manual QA is vital for exploratory and user-experience evaluation, while automation is ideal for stable, repetitive regression paths."
    },
    {
      q: "Which frameworks do you support?",
      a: "We explicitly support Selenium, Playwright, and Cypress for web and browser automation. We evaluate and adapt to the tool that best fits your product architecture, existing codebase, and testing objectives."
    },
    {
      q: "What does the $149 trial include?",
      a: "The $149 Trial QA Plan is a one-time assessment covering one project only and focusing on one core flow or feature. It includes an initial manual assessment, structured findings, and reproducible bug reports with steps, expected vs. actual results, and visual evidence. Retesting after fixes is not included in the trial."
    },
    {
      q: "Which project limits apply to each plan?",
      a: "Project limits apply strictly as follows: the Trial QA Plan covers 1 project only (one core flow or feature); the Basic and Pro monthly plans cover 1 project only; the Growth plan under Manual QA covers 1 project only; and the Growth plan with automation covers up to 3 projects. Additional projects, hours, or work outside agreed scope require a separate quote."
    },
    {
      q: "How are monthly hours divided across projects?",
      a: "Monthly hour allocations represent total testing hours per month for the selected plan, not hours per project. On the Growth plan with automation (which covers up to 3 projects), the 60 total monthly testing hours are shared across the included projects, not allocated as 60 hours per project. Cross-project priorities and hour allocations are agreed upon at project kickoff and tracked in weekly progress reports."
    },
    {
      q: "Are retesting and weekly reports included?",
      a: "Yes. All monthly subscription plans (Basic, Pro, and Growth) include weekly progress reports and retesting of reported defects after fixes are deployed, subject to the plan's remaining monthly hours. Retesting consumes hours from your purchased monthly allocation. The one-time Trial plan does not include regression retesting."
    },
    {
      q: "What happens when the monthly hours are exhausted?",
      a: "When your monthly allocated testing hours are reached, we notify you immediately with a summary of completed test cycles, defect statuses, and remaining priorities. We never bill for additional work without prior written agreement and a separate quote. Unused hours do not roll over to subsequent months."
    },
    {
      q: "Do you test websites, APIs, mobile apps, and games?",
      a: "Yes. We test responsive websites and web applications, REST API endpoints, mobile applications across iOS and Android viewports, and games (evaluating gameplay mechanics, UI/UX flows, level progression, collision handling, and stability). Specific platforms and scope are agreed upon before testing begins."
    },
    {
      q: "How is custom automation code delivered and owned?",
      a: "Ownership and delivery of custom automation code follow the agreed engagement terms. Scoped automation scripts, configuration files, and documentation can be delivered directly to your organization's code repository."
    }
  ]
};

// Export for module environments or assign to window for browser scripts
if (typeof window !== "undefined") {
  window.QA_DATA = QA_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = QA_DATA;
}
