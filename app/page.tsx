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
    'Backend & architecture',
    'TypeScript · Node.js · NestJS · Python · Django · FastAPI · REST APIs · WebSockets · OpenAPI / protobuf · Distributed Systems · Event-Driven Architecture · Java / Spring Boot',
  ],
  [
    'Technical leadership',
    'Engineering Standards · Solution Design · Client & Stakeholder Communication · Mentoring · Incident Response',
  ],
  [
    'Frontend & React architecture',
    'React · React Native (Expo) · API Client Generation · Angular',
  ],
  [
    'Quality & delivery',
    'TDD · BDD · Test Strategy · Jest · Vitest · React Testing Library · Playwright · CI/CD (GitHub Actions, Jenkins, GitLab CI)',
  ],
  [
    'AI engineering',
    'Provider-Agnostic LLM Integration · Custom Tools & Tool Calling · JSON Schema · API-Driven Workflows · Agentic Development',
  ],
  [
    'Developer tooling',
    'Node.js & Python CLI Tools · Shell Scripting · Make · Test & Deployment Automation',
  ],
  [
    'Cloud & data',
    'AWS · GCP · Kubernetes · Terraform · Docker · PostgreSQL · MongoDB · Pub/Sub',
  ],
] as const satisfies SkillEntry[];

const roles = [
  [
    'ANNA Money',
    'Senior Software Engineer',
    'Cardiff / London',
    'Aug 2024 — Aug 2026',
    [
      'Lead architecture, integration and performance improvements for shared chat and action workflows spanning an internal support-specialist platform and customer web application.',
      'Design domain-driven HTTP client integrations using generated TypeScript types from protobuf and OpenAPI/Swagger contracts; provide technical direction on API response design to make integrations clear and maintainable.',
      'Improve real-time WebSocket communication and introduce event-bus interaction patterns, helping actions consistently activate the correct area of the application.',
      'Lead migration to MobX, establishing clearer reactive state-management patterns, reducing boilerplate and making clean-architecture practices easier for non-specialist frontend contributors to apply safely.',
      'Build lightweight Node.js and shell tooling, exposed through Make, to standardise repeatable engineering, testing and deployment work; own shared packages, mentor peers and help resolve production incidents.',
    ],
  ],
  [
    'Aforza',
    'Senior Backend Engineer',
    'Cardiff',
    'Jan 2023 — Aug 2024',
    [
      'Designed and built end-to-end, provider-agnostic LLM workflows and third-party integrations for AI-assisted B2B features, enabling use of files, external API data, automated summaries, image analysis, text detection and metadata enrichment.',
      'Built custom JSON Schema tools over REST APIs, using Swagger contracts and typed HTTP clients to ground AI actions in application capabilities.',
      'Built domain-driven, test-led microservices in Java/Spring Boot and TypeScript, using GCP, Kubernetes, PostgreSQL, MongoDB and Pub/Sub for resilient asynchronous integrations.',
      'Defined and embedded a behaviour-oriented testing strategy, replacing brittle snapshot-led testing and reinforcing TDD across new and actively developed services.',
    ],
  ],
  [
    'iCrossing',
    'Senior Backend Engineer',
    'Cardiff',
    'Oct 2021 — Dec 2022',
    [
      'Enhanced membership sign-up and onboarding journeys for a major UK leisure-sector client, delivering TypeScript/Node.js services and React applications.',
      'Rebuilt fragile areas of the application, resolving persistent defects, reducing technical debt and improving performance and reliability.',
      'Acted as the principal technical contact, translating client priorities and constraints into pragmatic delivery decisions while maintaining high test coverage and reliable release practices.',
    ],
  ],
] as const satisfies RoleEntry[];

const earlierRoles = [
  [
    'Imaginet',
    'Software Engineer',
    'Cardiff',
    'Apr 2021 — Oct 2021',
    'Modernised legacy and bespoke web systems, resolving long-standing defects and introducing more maintainable capabilities.',
  ],
  [
    'New Directions',
    'Software Engineer',
    'Cardiff',
    'Apr 2019 — Mar 2021',
    'Led end-to-end delivery of React and Laravel booking systems and automation tools that reduced manual operational work.',
  ],
  [
    'Bigg Media',
    'Lead Developer',
    'Bristol',
    'Jun 2018 — Mar 2019',
    'Led technical delivery of a configurable lead-generation SaaS platform built with Node.js and React.',
  ],
  [
    'DDB / Popcode New Media',
    'Frontend Developer',
    'Budapest',
    'Feb 2017 — Mar 2018',
    'Delivered Angular and TypeScript products for major consumer and public-sector organisations.',
  ],
  [
    'Travelsoft',
    'Full-Stack Developer',
    'Budaptest',
    'Nov 2014 — Feb 2017',
    'Delivered internationalisation, theming, product functionality and a JavaScript booking-system integration layer.',
  ],
  [
    'Freelance',
    'Full-Stack Developer',
    'Dorset',
    'Jun 2009 — Oct 2014',
    'Delivered web and ecommerce solutions for agency and small-business clients.',
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
          <p className="role">Technical Lead / Senior Software Engineer</p>
          <p className="specialisms">
            Backend / Full-Stack Engineering <span aria-hidden="true">·</span>{' '}
            TypeScript <span aria-hidden="true">·</span> Node.js{' '}
            <span aria-hidden="true">·</span> Python{' '}
            <span aria-hidden="true">·</span> React
          </p>
          <div className="tags">
            <span>UK right to work</span>
            <span>Available immediately</span>
          </div>
        </header>
        <section className="ruled" aria-labelledby="profile">
          <h2 id="profile">Profile</h2>
          <div className="profile">
            <p>
              Technical Lead and backend/full-stack engineer with over 15 years’
              experience across fintech, SaaS and enterprise software. Extensive
              backend experience across both Python—with Django and FastAPI—and
              Node.js with NestJS. TypeScript is my strongest language,
              developed through substantial backend work and deep React
              experience spanning frontend architecture, type safety, API
              contracts and testing strategy.
            </p>
            <p>
              Hands-on technical leader trusted to translate client, product and
              stakeholder needs into pragmatic technical decisions. I set
              practical standards, mentor and support engineers, provide
              day-to-day technical and delivery leadership, and lead systems
              from discovery and design through implementation, production
              support and iteration. I pair AI-assisted engineering workflows
              with TDD, explicit conventions and automated checks to improve
              delivery speed, autonomy and confidence without compromising
              quality.
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
          <h2 id="experience">Selected experience</h2>
          <div>
            {roles.map(([company, title, place, dates, points], i) => (
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
        <section className="ruled career" aria-labelledby="career">
          <h2 id="career">Earlier career</h2>
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
                        <span aria-hidden="true">·</span> {place}
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
        <p>Full CV available on request.</p>
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
