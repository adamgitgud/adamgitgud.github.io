type SkillEntry = [label: string, details: string];

type RoleEntry = [
  company: string,
  title: string,
  location: string,
  dateRange: string,
  achievements: string[],
];

type EarlierRoleEntry = [
  company: string,
  title: string,
  location: string,
  dateRange: string,
  summary: string,
];

const skills = [
  [
    'Backend engineering and APIs',
    'TypeScript, Node.js, NestJS, REST and HTTP conventions, OpenAPI / Swagger, Protobuf, typed API contracts and generated HTTP clients. Real-time updates with WebSockets and Server-Sent Events (SSE).',
  ],
  [
    'React and frontend architecture',
    'React, TypeScript, state management with MobX and Redux, API integration, React Native / Expo and React Testing Library.',
  ],
  [
    'System design and architecture',
    'Clean architecture, domain-driven design (DDD), distributed systems, microservices, event-driven architecture and phased legacy modernisation.',
  ],
  [
    'AI integration and workflows',
    'Provider-agnostic LLM integration, specialist agents, custom tools and tool calling, JSON Schema and event-driven AI workflows.',
  ],
  [
    'Technical leadership and developer experience',
    'Technical direction, mentoring and training across frontend and backend, stakeholder communication, architecture documentation, automated guardrails and Claude skills for feature development, test setup and code review.',
  ],
  [
    'Cloud and data',
    'GCP, AWS, Kubernetes, Terraform, Docker, PostgreSQL, MongoDB and Pub/Sub.',
  ],
  [
    'Quality and delivery',
    'TDD, BDD, test strategy, automated QA, Jest, Vitest, Playwright, CI/CD with GitHub Actions, Jenkins and GitLab CI.',
  ],
  [
    'Reliability and operations',
    'Third-party incident investigation, health checks, Sentry error monitoring and alerting, log and analytics dashboards.',
  ],
  [
    'Additional languages and frameworks',
    'PHP (Laravel and Symfony), Python (Django and FastAPI), Java (Spring Boot) and Angular.',
  ],
] as const satisfies SkillEntry[];

const recentRoles = [
  [
    'ANNA Money',
    'Senior Software Engineer',
    'Cardiff / London',
    'Aug\u00a02024 — Aug\u00a02026',
    [
      'Led TypeScript and React architecture across support and customer applications, including a migration from Redux to MobX that reduced boilerplate and helped backend developers build frontend features safely.',
      'Introduced Protobuf as a shared source of truth for API contracts and built type-generation scripts adopted across all engineering teams. Improved type consistency across backend services, web applications and Swagger documentation, making the chat UI easier to extend and supporting the new Flutter app.',
      'Contributed to Python backend microservices and guided API contract design to keep frontend integrations aligned with backend behaviour.',
      'Created concise architecture and convention guides for engineers and AI agents. Built Claude skills that referenced these guides and used structured questions to guide feature creation, test setup and final code review.',
      'Embedded engineering conventions in automated guardrails and shared packages. Built Node.js and shell tooling to standardise testing, deployment and repeatable development tasks, reducing friction in feature delivery.',
      'Improved WebSocket communication and introduced event-bus patterns so that actions consistently activated the correct part of the application. Helped investigate and resolve production incidents.',
    ],
  ],
  [
    'Aforza',
    'Senior Backend Engineer',
    'Cardiff',
    'Jan\u00a02023 — Aug\u00a02024',
    [
      'Developed domain-driven microservices in TypeScript (NestJS), using GCP, Kubernetes, PostgreSQL, MongoDB and Pub/Sub to support asynchronous backend integrations.',
      'Designed and built the backend for an AI chat capability that became a core product feature, using specialist agents and custom tools to answer questions about media assets, metadata and integration results, and compare images within the same tenant when requested.',
      'Mentored and trained frontend and backend engineers, guiding architecture and testing decisions and helping the team apply engineering conventions consistently.',
      'Designed event-driven workflows across product features and third-party integrations, connecting image manipulation, watermarking, text detection and shelf scanning, with AI summarisation available at different stages.',
      'Built custom tools defined with JSON Schema over REST APIs, using Swagger contracts and typed HTTP clients to connect AI actions to application capabilities.',
      'Shifted backend testing from brittle, mock-heavy snapshots towards behaviour-focused tests, using fakes and simulators for external services and table-driven tests to cover more than the happy path. Reduced test failures from minor changes and time spent maintaining tests, while embedding TDD in new and actively developed services.',
    ],
  ],
] as const satisfies RoleEntry[];

const continuedRoles = [
  [
    'iCrossing',
    'Senior Backend Engineer',
    'Cardiff',
    'Oct\u00a02021 — Dec\u00a02022',
    [
      'Stabilised a PHP / Laravel monolith for a major UK leisure-sector client, resolving critical bugs and improving performance, reliability and maintainability.',
      'Acted as the principal technical contact, translating client priorities and constraints into delivery decisions while maintaining high test coverage and reliable releases.',
      'Helped migrate the application towards microservices to improve developer experience, separate responsibilities and create reliable, testable replacements for legacy functionality, with horizontal scaling as a design goal.',
      'Delivered TypeScript / Node.js services and React applications for membership sign-up and onboarding as part of the migration.',
    ],
  ],
  [
    'Imaginet',
    'Software Engineer',
    'Cardiff',
    'Apr\u00a02021 — Oct\u00a02021',
    [
      'Owned PHP backend development across unconventional legacy systems, independently planning and delivering critical fixes and new features.',
      'Implemented a new payment platform end to end across multiple staged environments, taking full ownership of the technical decisions, development and delivery.',
      'Laid the foundations for an application that wrapped and orchestrated third-party systems, applying pragmatic design patterns to create a maintainable base for further development.',
    ],
  ],
  [
    'New Directions',
    'Software Engineer',
    'Cardiff',
    'Apr\u00a02019 — Mar\u00a02021',
    [
      'Led operational software delivery from stakeholder discovery and solution design through implementation, deployment and ongoing support.',
      'Built React and Laravel booking systems, management tools and automation that reduced manual work across multiple teams.',
      'Planned and executed releases to on-premises staging and production environments, scheduling deployments to minimise operational disruption.',
    ],
  ],
  [
    'Bigg Media',
    'Lead Developer',
    'Bristol',
    'Jun\u00a02018 — Mar\u00a02019',
    [
      'Led full-stack development of a lead-generation SaaS platform, building Node.js APIs and React interfaces for a template-driven landing-page builder integrated with Google Ads.',
      'Planned work, mentored engineers and provided day-to-day technical support across the SaaS platform, traditional websites and CRM systems.',
      'Owned code reviews and security fixes across client systems, while coordinating technical decisions with design, project management and the CTO/founder.',
    ],
  ],
  [
    'DDB / Popcode New Media',
    'Frontend Developer',
    'Budapest',
    'Feb\u00a02017 — Mar\u00a02018',
    [
      "Delivered modern frontend applications for T-Mobile, McDonald's and a national hospital using AngularJS and Angular 2+ with TypeScript.",
      'Translated professional design assets into pixel-perfect responsive interfaces across mobile, tablet and desktop.',
      'Owned frontend technical design and implementation decisions, integrating applications with REST APIs backed by varied server-side technologies.',
    ],
  ],
] as const satisfies RoleEntry[];

const earlierRoles = [
  [
    'Travelsoft',
    'Full-Stack Developer',
    'Budapest',
    'Nov\u00a02014 — Feb\u00a02017',
    'Delivered internationalisation, theming, product features and a JavaScript booking-system integration layer.',
  ],
  [
    'Freelance',
    'Full-Stack Developer',
    'Dorset',
    'Jun\u00a02009 — Oct\u00a02014',
    'Delivered web and ecommerce solutions for agencies and small businesses, covering development, delivery and ongoing support.',
  ],
] as const satisfies EarlierRoleEntry[];

export default function Home() {
  return (
    <>
      <a className="skip" href="#content">
        Skip to CV
      </a>
      <header className="site-header">
        <a
          className="mark"
          href="#top"
          aria-label="AH — Adam Holmes, back to top"
        >
          AH
        </a>
        <a
          href="https://www.linkedin.com/in/ad-holmes"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn <span aria-hidden="true">↗</span>
        </a>
      </header>
      <main id="content">
        <header className="hero" id="top">
          <p className="eyebrow">
            Curriculum vitae <span>Cardiff, Wales</span>
          </p>
          <h1>
            Adam
            <br />
            Holmes
          </h1>
          <p className="role">Backend Engineer &amp; Technical Lead</p>
          <p className="specialisms">
            TypeScript <span aria-hidden="true">·</span> Node.js{' '}
            <span aria-hidden="true">·</span> React{' '}
            <span aria-hidden="true">·</span> Applied AI
          </p>
          <div className="tags">
            <span>UK right to work</span>
            <span>Available immediately</span>
            <span>Fully remote</span>
          </div>
        </header>
        <section className="ruled" aria-labelledby="profile">
          <h2 id="profile">Profile</h2>
          <div className="profile">
            <p>
              Hands-on backend engineer and technical lead with 15+ years in
              software engineering, specialising in TypeScript and Node.js.
              Designs and delivers APIs, event-driven services and AI-powered
              product capabilities, including LLM integrations, specialist
              agents and tool-driven workflows. Combines a strong grounding in
              distributed systems and testable architecture with specialist
              React expertise when delivery extends into the frontend.
            </p>
            <p>
              Owns technical delivery from discovery and system design through
              implementation and production support. Shapes architecture and
              engineering standards across teams, using clear API contracts,
              automated testing and practical mentoring to make complex systems
              easier to develop, maintain and extend.
            </p>
          </div>
        </section>
        <section className="ruled skills" aria-labelledby="skills">
          <h2 id="skills">Core skills</h2>
          <dl>
            {skills.map(([name, list]) => (
              <div key={name}>
                <dt>{name}</dt>
                <dd>{list}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section className="ruled" aria-labelledby="experience">
          <h2 id="experience">Recent experience</h2>
          <div>
            {recentRoles.map(([company, title, place, dates, points], i) => (
              <article className="job" key={company}>
                <div className="meta">
                  <p className="date">{dates}</p>
                  <p>{place}</p>
                </div>
                <div>
                  <h3>
                    {title}
                    <span>{company}</span>
                  </h3>
                  <ul>
                    {points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
                <span className="number" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </article>
            ))}
          </div>
        </section>
        <section className="ruled continued" aria-labelledby="continued">
          <h2 id="continued">Experience continued</h2>
          <div className="continued-list">
            {continuedRoles.map(([company, title, place, dates, points]) => (
              <article className="continued-item" key={company}>
                <div className="continued-heading">
                  <h3>
                    {title}
                    <span>{company}</span>
                  </h3>
                  <p className="date">
                    {dates} <span aria-hidden="true">·</span>{' '}
                    <span className="location">{place}</span>
                  </p>
                </div>
                <ul>
                  {points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
        <section className="ruled career" aria-labelledby="career">
          <h2 id="career">Previous experience</h2>
          <div className="career-list">
            {earlierRoles.map(([company, title, place, dates, summary]) => (
              <article className="career-item" key={company}>
                <div className="career-heading">
                  <h3>
                    {title}
                    <span>{company}</span>
                  </h3>
                  <p className="date">
                    {dates}
                    {place && (
                      <>
                        {' '}
                        <span aria-hidden="true">·</span>{' '}
                        <span className="location">{place}</span>
                      </>
                    )}
                  </p>
                </div>
                <p>{summary}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="ruled education" aria-labelledby="education">
          <h2 id="education">Education</h2>
          <div>
            <h3>BA (Hons) Digital Media</h3>
          </div>
        </section>
      </main>
      <footer>
        <p>Backend Engineer &amp; Technical Lead</p>
        <a
          href="https://www.linkedin.com/in/ad-holmes"
          target="_blank"
          rel="noreferrer"
        >
          Connect with Adam on LinkedIn <span aria-hidden="true">↗</span>
        </a>
        <p className="copyright">© {new Date().getFullYear()} Adam Holmes</p>
      </footer>
    </>
  );
}
