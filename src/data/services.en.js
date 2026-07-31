/*
  English service content.

  Each service is structured around: business problem → solution →
  examples → benefit, rather than around technologies. The Bulgarian
  version lives in services.bg.js and shares the same slugs and numbers,
  so a page maps one-to-one across languages.
*/
const servicesData = [
  {
    slug: "software",
    number: "01",
    nav: "Business software",
    title: "Custom business software",
    shortDescription:
      "Internal systems, portals and dashboards built around how your company actually works — not the other way around.",

    problem:
      "Work is scattered across spreadsheets, email threads and disconnected programs. Nobody has the full picture, and critical information lives with specific people.",
    solution:
      "We build a system made to measure — one place for your company's tasks, data, requests and approvals, with clear roles and permissions for every team.",

    heroTitle: "Software built around the way your business actually operates.",
    heroDescription:
      "Off-the-shelf tools force you to change your process. We do the opposite — the system is built around your processes, your people and your data.",

    useCases: [
      "Replacing spreadsheets and scattered files with one system",
      "Managing tasks, projects and internal requests",
      "Registers for assets, equipment and contracts",
      "Employee portals with roles and permissions",
      "Operational dashboards with live data",
      "Automatic reports and summaries",
      "Workflows with approval steps",
      "Connecting the tools you already use",
    ],

    benefits: [
      {
        title: "Full operational visibility",
        description:
          "Management sees the status of tasks, requests and data in real time, without chasing people over email.",
      },
      {
        title: "Less manual work",
        description:
          "Repetitive entry, copying and double-checking is handled by the system.",
      },
      {
        title: "Grows with the business",
        description:
          "New modules, users and integrations get added without starting over.",
      },
      {
        title: "Knowledge stays in the company",
        description:
          "Information lives in the system rather than in individual employees' heads.",
      },
    ],

    deliverables: [
      "Process analysis and a defined scope",
      "Prototype of the key screens",
      "Development and testing",
      "Roles and access permissions",
      "Deployment and team training",
      "Documentation and a support plan",
    ],

    faq: [
      {
        question: "How much does custom software cost?",
        answer:
          "It depends on scope — the number of features, roles, integrations and data involved. After the free consultation you receive a fixed written quote with a clear scope, before any development begins.",
      },
      {
        question: "Can you improve a system we already have?",
        answer:
          "Yes. We start by reviewing the code and its current condition, then advise honestly whether extending, partially rebuilding or replacing it makes the most sense.",
      },
      {
        question: "Will the system work on phones?",
        answer:
          "Yes. Web-based systems are built to work across desktop, tablet and mobile.",
      },
      {
        question: "Who owns the finished software?",
        answer:
          "You do. After the final payment you receive the code, the access credentials and full rights to the solution.",
      },
    ],
  },

  {
    slug: "ai",
    number: "02",
    nav: "AI solutions",
    title: "AI solutions and assistants",
    shortDescription:
      "Practical AI tools connected to your documents, data and processes — not another generic chatbot.",

    problem:
      "Staff lose hours searching for information, processing documents and answering the same questions again and again. The knowledge exists — getting to it is slow.",
    solution:
      "We build AI tools on top of your own documents and data — assistants that answer with a source, extract fields from documents and take over repetitive processing.",

    heroTitle: "AI that solves a specific problem at work.",
    heroDescription:
      "The most valuable AI systems are not open-ended chat windows. They are tools connected to one concrete process — documents, internal knowledge, incoming enquiries.",

    useCases: [
      "Assistant over internal procedures and documentation",
      "Extracting data from invoices and forms",
      "Summarising and comparing long documents",
      "Classifying and routing incoming email",
      "Generating structured reports automatically",
      "Supporting the customer service team",
      "Checking and validating documents",
      "AI features inside your existing systems",
    ],

    benefits: [
      {
        title: "Answers in seconds, not hours",
        description:
          "Staff ask in plain language and get an answer with the source it came from.",
      },
      {
        title: "Documents process themselves",
        description:
          "Extraction, classification and filing without retyping anything by hand.",
      },
      {
        title: "Control and traceability",
        description:
          "Critical steps go through human approval, and every action is logged.",
      },
      {
        title: "Built into where you work",
        description:
          "AI functionality goes inside your systems instead of being a separate tool.",
      },
    ],

    deliverables: [
      "An assessment of whether AI is the right answer",
      "A working prototype on your own examples",
      "Connection to your documents and data",
      "Validation of the outputs",
      "Controlled rollout",
      "An improvement plan",
    ],

    faq: [
      {
        question: "Can AI work with our internal documents?",
        answer:
          "Yes. The system is configured to read only the documents and sources you approve, and answers point back to where the information came from.",
      },
      {
        question: "Will the AI always be right?",
        answer:
          "No — no AI model is flawless. That is exactly why important processes include validation, clear limits and human approval on the critical steps.",
      },
      {
        question: "What happens to our confidential data?",
        answer:
          "The scope of the data, where it is stored and who can access it are agreed up front. We are happy to sign a confidentiality agreement on request.",
      },
      {
        question: "Is every process suitable for AI?",
        answer:
          "No. Plenty of tasks are better solved with ordinary automation or conventional software. The first step is choosing the right approach, not the fashionable one.",
      },
    ],
  },

  {
    slug: "automation",
    number: "03",
    nav: "Process automation",
    title: "Business process automation",
    shortDescription:
      "The repetitive work — reports, notifications, moving data between systems — starts happening on its own.",

    problem:
      "Every week the same actions: copying data between programs, assembling reports, sending reminders, checking statuses. It is slow and mistakes are inevitable.",
    solution:
      "We connect your systems and automate the predictable steps — with logging, error handling and human approval wherever a real decision is made.",

    heroTitle: "Repetitive work is not work for people.",
    heroDescription:
      "Automation takes over the predictable actions and notifies the right people, so your team spends its time on the parts that need judgement.",

    useCases: [
      "Automatic weekly and monthly reports",
      "Processing incoming email and enquiries",
      "Syncing data between systems",
      "Reminders for deadlines and overdue items",
      "Workflows with approval steps",
      "Generating documents from templates",
      "Organising files automatically",
      "Alerts when a status or condition changes",
    ],

    benefits: [
      {
        title: "Hours saved every week",
        description:
          "Routine tasks run on their own, on a schedule or triggered by an event.",
      },
      {
        title: "Fewer human errors",
        description:
          "The same rules apply every single time, with no skipped steps.",
      },
      {
        title: "Nothing happens invisibly",
        description:
          "Every action is logged — you can see what happened, when and why.",
      },
      {
        title: "Decisions stay with you",
        description:
          "Automation prepares the information; a person approves what matters.",
      },
    ],

    deliverables: [
      "A written map of the current manual process",
      "Design of the automated workflow",
      "Development and system connections",
      "Error handling and logging",
      "Testing against real scenarios",
      "Monitoring and maintenance",
    ],

    faq: [
      {
        question: "Which tasks are worth automating?",
        answer:
          "Tasks with repeatable steps, clear rules and structured inputs — reports, moving information, notifications, document processing.",
      },
      {
        question: "Can approvals stay manual?",
        answer:
          "Yes. Automation prepares everything and notifies the right person, while the final decision stays theirs.",
      },
      {
        question: "What happens if an automation fails?",
        answer:
          "Reliable automation includes error handling, logs and notifications, so a problem surfaces immediately instead of silently.",
      },
      {
        question: "Can you connect our different programs?",
        answer:
          "Yes, whenever they offer an API, database access, file exports or another dependable way to exchange data.",
      },
    ],
  },

  {
    slug: "websites",
    number: "04",
    nav: "Websites and platforms",
    title: "Websites and digital platforms",
    shortDescription:
      "Professional websites and web platforms that present the business seriously and actually bring in enquiries.",

    problem:
      "An outdated or missing website costs credibility and customers. Enquiries get lost in a shared inbox, and the online presence does not match the real quality of the business.",
    solution:
      "We build fast, modern websites and web platforms — from a credible company site to customer portals with accounts, bookings and integrations.",

    heroTitle: "An online presence that matches your business.",
    heroDescription:
      "A website should say clearly what you do, look professional and turn visitors into enquiries.",

    useCases: [
      "Company and corporate websites",
      "Service websites with enquiry forms",
      "Customer portals with accounts",
      "Bookings and appointment scheduling",
      "Product and campaign pages",
      "Rebuilding an outdated website",
      "Connecting forms to your systems",
      "SEO foundations and fast loading",
    ],

    benefits: [
      {
        title: "A professional first impression",
        description:
          "Clear structure, strong visuals and content that says what you do.",
      },
      {
        title: "Enquiries that do not get lost",
        description:
          "Forms can feed directly into your systems instead of sinking into an inbox.",
      },
      {
        title: "Fast on every device",
        description:
          "Phone, tablet and desktop — built with speed and accessibility in mind.",
      },
      {
        title: "Easy to extend",
        description:
          "New pages, languages and functionality can be added at any stage.",
      },
    ],

    deliverables: [
      "Site structure and content plan",
      "Design based on your identity",
      "Development and responsive layout",
      "Contact and enquiry forms",
      "Basic SEO setup",
      "Deployment and domain connection",
    ],

    faq: [
      {
        question: "How long does a website take?",
        answer:
          "A basic company website takes roughly 5–7 working days once the content is supplied. Larger sites and platforms get their own schedule as part of the quote.",
      },
      {
        question: "Is there a fixed package for small businesses?",
        answer:
          "Yes — the Basic Business Website package at €120, with up to six pages, a contact form and deployment support. It is the only service paid in advance.",
      },
      {
        question: "Do we need to provide the text and images?",
        answer:
          "For standard projects, yes: logo, page copy, service details and contact information. Help with content can be arranged separately.",
      },
      {
        question: "Can the site include more advanced functionality?",
        answer:
          "Yes — accounts, bookings, payments, dashboards and integrations are built as a custom project.",
      },
    ],
  },

  {
    slug: "support",
    number: "05",
    nav: "Support and development",
    title: "Support and continuous development",
    shortDescription:
      "Your existing software keeps evolving — new features, fixes and gradual modernisation.",

    problem:
      "The system that once did the job is now limping — it is slow, it breaks, or the features you need are missing. And whoever built it is no longer around.",
    solution:
      "We take over existing websites, systems and internal tools — fixing problems, adding functionality and modernising gradually, without stopping your operations.",

    heroTitle: "Working software needs looking after too.",
    heroDescription:
      "The business changes and the systems have to follow — with new features, better speed and reliability, and without a risky rewrite from scratch.",

    useCases: [
      "New features in an existing system",
      "Fixing recurring errors",
      "Speeding up a slow site or system",
      "Modernising a dated interface",
      "Updating insecure dependencies",
      "Taking over a project from another developer",
      "Monthly support with an agreed scope",
      "Technical review and recommendations",
    ],

    benefits: [
      {
        title: "You keep the investment",
        description:
          "Building on what works instead of an expensive, risky rewrite.",
      },
      {
        title: "Planned, not emergency mode",
        description:
          "Problems get addressed before they stop your team from working.",
      },
      {
        title: "One accountable partner",
        description:
          "It is clear who is responsible for the system and who to call.",
      },
      {
        title: "Lower technical risk",
        description:
          "Outdated and fragile parts are replaced gradually and under control.",
      },
    ],

    deliverables: [
      "Technical review of the current state",
      "A prioritised improvement plan",
      "Fixes and new functionality",
      "Testing before every change",
      "Controlled releases",
      "An agreed ongoing support arrangement",
    ],

    faq: [
      {
        question: "Can you take over software built by someone else?",
        answer:
          "In most cases, yes. The first step is a technical review of the code, documentation and current state, after which you get an honest assessment.",
      },
      {
        question: "Can you fix just one specific problem?",
        answer:
          "Yes. Work can be scoped to a single defined issue or form part of a larger improvement plan — your call.",
      },
      {
        question: "How does ongoing support work?",
        answer:
          "As planned monthly hours, an agreed scope of work, or individual small projects — whichever fits how your business runs.",
      },
      {
        question: "What if the existing code is in bad shape?",
        answer:
          "The review shows whether repairing, partially rebuilding or replacing is wisest. You get options with trade-offs, not a verdict.",
      },
    ],
  },
]


export default servicesData
