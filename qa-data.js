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
    headline: "Confidence is engineered.",
    supportingCopy: "We help software teams and game studios uncover defects, validate critical user journeys, and build reliable automated tests so they can release with confidence.",
    email: "hello@finetooth.example", // Replace with your agency's verified email
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
      vimeo: "https://vimeo.com/"
    }
  },

  formConfig: {
    // To send form submissions directly to Formspree, add your form ID below:
    // e.g. "https://formspree.io/f/your_form_id"
    formspreeEndpoint: "", 
    useNetlify: false
  },

  pricing: {
    trial: {
      name: "Trial QA Plan",
      price: "$149",
      billing: "one-time",
      scope: "Defined feature scope",
      purpose: "Experience our QA service before committing to a monthly subscription.",
      included: [
        "One agreed application or limited feature scope",
        "One complete testing cycle",
        "Manual and functional testing",
        "Basic UI & responsive validation",
        "Bug reports with reproduction steps and evidence",
        "Final executive QA summary"
      ],
      disclaimer: "Defined scope; not a full-application audit. Retesting after fixes is not included."
    },
    monthly: [
      {
        id: "basic",
        name: "Monthly Basic",
        hours: "10 hours / month",
        priceNoAuto: "$299",
        priceWithAuto: "$449",
        period: "/ month",
        isRecommended: false,
        summary: "Ideal for small products, landing applications, and periodic release checks.",
        included: [
          "Manual, UI, and functional testing",
          "Bug reporting and ticket tracking",
          "Retesting after fixes included",
          "Weekly QA progress reports",
          "Automation option: limited, agreed development or maintenance within monthly hours"
        ]
      },
      {
        id: "pro",
        name: "Monthly Pro",
        hours: "25 hours / month",
        priceNoAuto: "$699",
        priceWithAuto: "$899",
        period: "/ month",
        isRecommended: true,
        badge: "Recommended Plan",
        summary: "Our most popular capacity for active engineering teams shipping weekly updates.",
        included: [
          "Manual, UI, API, and functional testing",
          "Retesting after fixes included",
          "Agreed regression testing passes",
          "Structured test case documentation",
          "Weekly reports covering progress, defects, and release risks",
          "Automation option: test script development and maintenance within allocated hours"
        ]
      },
      {
        id: "growth",
        name: "Monthly Growth",
        hours: "50 hours / month",
        priceNoAuto: "$1,299",
        priceWithAuto: "$1,699",
        period: "/ month",
        isRecommended: false,
        summary: "Dedicated QA band for multi-platform products with ongoing automation demands.",
        included: [
          "Web and mobile application testing",
          "API and functional integration testing",
          "Retesting and deep regression suites",
          "Weekly QA status and risk reports",
          "Automation option: test case development & maintenance within allocated hours",
          "Priority scheduling subject to availability"
        ]
      }
    ],
    conditions: [
      "Retesting after fixes and weekly reporting are included in every monthly plan.",
      "Retesting, regression testing, and automation work consume the included monthly hours.",
      "Automation development is limited to an agreed scope and available hours.",
      "No unlimited testing or unlimited automation scripts.",
      "Additional work requires prior approval and separate pricing.",
      "Delivery schedules depend on scope, access, complexity, and team availability."
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
        appStoreUrl: "", // Add verified App Store / Google Play link if available
        technologies: ["Mobile Game Engine", "Touch Responsiveness", "State Persistence"]
      },
      {
        id: "nostalgiacam",
        name: "NostalgiaCam",
        category: "Mobile Application",
        badge: "iOS & Android",
        shortDescription: "Vintage photography and image filter styling app tested for camera permissions, real-time filter shader rendering, memory consumption, and asset export stability.",
        appStoreUrl: "", // Add verified App Store / Google Play link if available
        technologies: ["Camera API", "Shader Rendering", "Memory Profiling", "iOS/Android"]
      },
      {
        id: "arrow-rage",
        name: "Arrow Rage",
        category: "Mobile Game",
        badge: "Logic & Arcade",
        shortDescription: "Continuous-path logic game tested across varying touch latencies, frame-rate consistency, boundary collision algorithms, and countdown constraints.",
        appStoreUrl: "", // Add verified App Store / Google Play link if available
        technologies: ["Arcade Mechanics", "Touch Latency", "Frame-Rate Profiling"]
      },
      {
        id: "bhopal-metro",
        name: "Bhopal Metro App",
        category: "Mobile Application",
        badge: "Urban Transit",
        shortDescription: "Transit navigation and timetable utility tested for route calculation accuracy, offline station lookups, and clear commuter UI flows across screen sizes.",
        appStoreUrl: "", // Add verified App Store / Google Play link if available
        technologies: ["Transit Routing", "Offline Caching", "Responsive Layouts"]
      }
    ]
  },

  services: [
    {
      title: "Manual & Functional Testing",
      description: "Validate application behavior, user journeys, acceptance criteria, and edge cases to ensure every release fulfills product specifications reliably.",
      badges: ["User journeys", "Acceptance criteria", "Edge cases", "Exploratory testing"]
    },
    {
      title: "UI & Cross-Browser Testing",
      description: "Identify layout inconsistencies, responsive issues, and browser compatibility problems across Chrome, Firefox, Safari, and Edge on desktop and mobile viewports.",
      badges: ["Cross-browser", "Responsive UI", "Browser compatibility", "Device matrix"]
    },
    {
      title: "API Testing",
      description: "Validate requests, responses, status codes, schemas, authentication, and error handling for REST and GraphQL endpoints under expected and invalid payloads.",
      badges: ["REST & GraphQL", "Schema validation", "Status codes", "Auth contracts"]
    },
    {
      title: "Mobile Application Testing",
      description: "Test mobile app functionality, usability, device behavior, and agreed regression scenarios across real iOS and Android hardware.",
      badges: ["iOS & Android", "Device behavior", "Usability", "Regression scenarios"]
    },
    {
      title: "Game Testing & Interactive Media",
      description: "Validate gameplay mechanics, UI/UX flows, level progression, boundary collision detection, performance stability, and hardware compatibility across platforms.",
      badges: ["Gameplay mechanics", "Collision detection", "Level progression", "Frame-rate & battery"]
    },
    {
      title: "Automation Engineering",
      description: "Build maintainable automated test cases, improve existing suites, and help teams integrate testing into their workflows with Playwright, Cypress, or Selenium.",
      badges: ["Playwright", "Cypress", "Selenium", "CI/CD integration"]
    }
  ],

  frameworks: {
    supported: ["Playwright", "Cypress", "Selenium"],
    deliverables: [
      "Reusable automation scripts",
      "Test case organization",
      "Configuration and execution instructions",
      "Structured documentation",
      "Detailed test reports",
      "CI/CD integration when separately agreed"
    ],
    note: "Deliverables and setup depend on the selected plan, agreed scope, and existing team infrastructure."
  },

  process: [
    {
      step: 1,
      title: "Understand & Plan",
      shortTitle: "Understand",
      description: "Review requirements, architecture, critical user journeys, and potential failure points before outlining test scenarios, target environments, and acceptance criteria."
    },
    {
      step: 2,
      title: "Execute & Test",
      shortTitle: "Test",
      description: "Perform the agreed manual, functional, UI, API, mobile, or automated testing against target staging and production environments."
    },
    {
      step: 3,
      title: "Report & Retest",
      shortTitle: "Retest",
      description: "Log clear bug reports with reproduction steps, severity, and video/screenshot evidence. Retest every resolved issue to guarantee clean fixes."
    },
    {
      step: 4,
      title: "Improve & Automate",
      shortTitle: "Improve",
      description: "Deliver weekly status updates covering progress, defects, and risks, while maintaining test cases and expanding automation suites within agreed hours."
    }
  ],

  faq: [
    {
      q: "What types of applications do you test?",
      a: "We test SaaS web applications, responsive websites, single-page applications (SPAs), REST and GraphQL APIs, and native or hybrid mobile apps (iOS and Android). Whether you are preparing for a major product launch, a new feature release, or ongoing weekly regression cycles, we adapt to your stack."
    },
    {
      q: "Do you support Playwright, Cypress, and Selenium?",
      a: "Yes. We actively develop and maintain automated test suites in Playwright, Cypress, and Selenium. We recommend Playwright for modern multi-browser web apps, Cypress for developer-centric web testing, and Selenium when legacy cross-environment compatibility is required."
    },
    {
      q: "Can you work with our existing framework?",
      a: "Yes. If your engineering team already has an automated test suite or testing conventions in place, we can review the repository, adopt your preferred framework and coding standards, and add high-value test coverage without requiring a rewrite."
    },
    {
      q: "Is retesting included?",
      a: "Retesting after fixes is included in all monthly subscription plans (Monthly Basic, Monthly Pro, and Monthly Growth). Retesting consumes hours from your included monthly allocation. In the one-time Trial QA Plan, retesting after fixes is not included."
    },
    {
      q: "How often will we receive reports?",
      a: "Monthly plan clients receive structured weekly QA reports covering test execution progress, newly uncovered defects, verified fixes, and release risks. In addition, critical and blocking bugs are reported in real time via your preferred ticketing system (Jira, Linear, GitHub Issues) or communication channel (Slack)."
    },
    {
      q: "What happens when monthly hours are used?",
      a: "When your allocated monthly hours are reached, we will notify you with a clear summary of completed work and remaining priorities. We never bill for additional work without your prior written approval and agreed pricing."
    },
    {
      q: "What is included in the Trial QA Plan?",
      a: "The Trial QA Plan ($149 one-time) includes one testing cycle on one agreed application or limited feature scope. It covers manual and functional testing, basic UI validation, detailed bug reports with reproduction steps, and a final executive summary. It has a defined scope and is not a full-application audit."
    },
    {
      q: "Can we purchase automation development separately?",
      a: "Yes. While our monthly plans include automation development within allocated hours, we also offer standalone automation setup and framework implementation quotes for teams needing dedicated test suites or CI/CD integration."
    },
    {
      q: "Do you work with international clients?",
      a: "Yes. We work with software teams, SaaS founders, and development agencies across North America, Europe, the UK, and globally. Our asynchronous reporting and structured test documentation make collaboration seamless across time zones."
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
