import React from "react";
import Section from "../components/Section.jsx";
import Card from "../components/Card.jsx";
import VisitorToggle from "../components/VisitorToggle";
import Reveal from "../components/Reveal.jsx";

export default function PortfolioView({ visitorType, onSwitch }) {
  const isStudent = visitorType === "student";

  const visitorCard = isStudent
    ? {
        label: "STUDENT",
        title: "Looking for tutoring or project support",
        body:
          "I help with ML foundations, Python workflows, and project debugging. If you’re stuck, I can guide your next steps and review your approach.",
        ctaText: "Ask About Tutoring",
        ctaHref: "#contact",
      }
    : {
        label: "RECRUITER",
        title: "Fast overview for hiring teams",
        body:
          "I’m open to AI Engineer, ML Engineer, and data analyst roles. I build production-minded ML systems, especially for healthcare workflows and NLP-driven applications.",
        ctaText: "Download Resume",
        ctaHref: "/resume.pdf",
      };

  return (
    <>
      {/* HERO */}
      <section id="home" className="grid gap-8 lg:grid-cols-2">
        <div className="pt-6">
          <div className="text-xs tracking-[0.22em] text-muted">
            AI ENGINEER + DATA ANALYST · HEALTHCARE AI · TORONTO, ON · OPEN TO ROLES
          </div>

          <h1 className="mt-6 font-display text-6xl font-semibold leading-[0.95] text-fg">
            Khushnud builds{" "}
            <span
              className="gradient-text-pan font-semibold"
              style={{
                backgroundImage: "linear-gradient(90deg, #E07A5F, #D6B77C, #E07A5F)",
              }}
            >
              adaptive AI systems
            </span>{" "}
            <br />
            for healthcare,
            <br />
            analytics, and
            <br />
            language intelligence.
          </h1>

          <p className="mt-6 max-w-xl text-muted">
            Machine learning, data science, and analytics builder with hands-on
            experience in NLP, RAG, and predictive modeling. Comfortable taking
            models from idea to deployment-ready pipelines.
          </p>

          <p className="mt-6 text-sm font-semibold text-accent">
            Scholarship / Award line · Hackathon win line
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {/* Primary CTA */}
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:brightness-95 active:brightness-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              View Projects
            </a>

            {/* Secondary CTAs */}
            <a
              href="#skills"
              className="rounded-full border border-border bg-surface/50 px-6 py-3 text-sm font-semibold text-fg hover:bg-surface/70 transition-colors"
            >
              View My Skillset
            </a>

            <a
              href="#contact"
              className="rounded-full border border-border bg-surface/50 px-6 py-3 text-sm font-semibold text-fg hover:bg-surface/70 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="space-y-4 lg:pt-10">
          {/* WHO'S VISITING CARD */}
          <Card className="p-7">
            <div className="text-xs tracking-widest text-muted">WHO’S VISITING?</div>

            <div className="mt-4 flex items-center gap-3">
              <div className="h-11 w-11 overflow-hidden rounded-full bg-border" />
              <div>
                <div className="font-semibold text-fg">Khushnud Ahmed</div>
                <div className="text-sm text-muted">AI Engineer · Data Analyst</div>
              </div>
            </div>

            <div className="mt-5">
              <VisitorToggle value={visitorType} onChange={onSwitch} />
            </div>

            <div className="mt-6 text-xs tracking-widest text-accent">
              {visitorCard.label}
            </div>

            <div className="mt-2 text-xl font-semibold text-fg">{visitorCard.title}</div>

            <p className="mt-3 text-muted">{visitorCard.body}</p>

            <a
              href={visitorCard.ctaHref}
              className="mt-5 inline-block text-sm font-semibold text-accent hover:text-accent2 transition-colors"
            >
              {visitorCard.ctaText}
            </a>
          </Card>

          {/* STATS */}
          <Card className="grid grid-cols-3 gap-6 bg-surface/60 p-7">
            <Stat value="7,900+" label="Healthcare records modeled" />
            <Stat value="95%" label="Epilepsy prediction accuracy" />
            <Stat value="40%" label="Design iteration time reduced" />
          </Card>
        </div>
      </section>

      {/* TOP STRIP */}
      <div className="mt-10 rounded-[28px] bg-surface/60 px-7 py-6 shadow-[0_18px_50px_rgba(0,0,0,0.10)] backdrop-blur">
        <div className="space-y-5">
          <div>
            <div className="text-[11px] font-semibold tracking-[0.22em] text-muted">
              CURRENTLY WORKING ON
            </div>
            <div className="mt-2 text-[15px] leading-relaxed text-fg">
              Research Assistant: AI chatbot qualitative study
            </div>
          </div>

          <div>
            <div className="text-[11px] font-semibold tracking-[0.22em] text-muted">
              OPEN TO
            </div>
            <div className="mt-2 text-[15px] leading-relaxed text-fg">
              Full-time or contract opportunities
            </div>
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <Section
        id="projects"
        title="Applied AI Highlights"
        subtitle="Applied AI and analytics work across healthcare, NLP, and scalable data systems."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Healthcare AI: Epilepsy Seizure Prediction",
            "Stroke Risk Prediction on AWS",
            "Alzheimer’s Stage Classification",
            "RAG Scientific QA Assistant",
            "Energy Analytics Pipeline",
            "Sales & Profit Forecasting",
            "Generative Design Prototyping",
            "Entropy Biomarkers in Cancer",
            "Document & Knowledge AI",
            "Global Disease Burden Analyzer",
          ].map((title, i) => (
            <Reveal key={title} delay={i * 45} y={12}>
              <ProjectCard title={title} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section
        id="experience"
        title="Experience"
        subtitle="Highlights from AI engineering, research, and applied ML delivery."
      >
        <div className="space-y-5">
          {[
            {
              title: "Graduate Researcher / AI Engineer (Healthcare)",
              org: "Toronto Metropolitan University",
              dates: "Sep 2024 – Aug 2025",
              bullets: [
                "Built end-to-end AI pipelines on 7,900+ patient records, blending structured and unstructured clinical data.",
                "Developed predictive and survival models with robust validation, interpretability, and reliability focus.",
                "Designed production-grade Python workflows for ingestion, feature engineering, training, and evaluation.",
              ],
            },
            {
              title: "Machine Learning Engineer",
              org: "Company (Remote)",
              dates: "Jan 2024 – May 2024",
              bullets: [
                "Delivered production-style generative AI pipelines to accelerate content creation by ~40%.",
                "Built inference and evaluation workflows that bridged experimentation to deployment-ready systems.",
              ],
            },
            {
              title: "Graduate Assistant (Technical Systems Support)",
              org: "Toronto Metropolitan University",
              dates: "Jan 2025 – Aug 2025",
              bullets: [
                "Supported ML pipeline debugging, validation, and failure analysis under time constraints.",
                "Provided technical support for student labs and system-level troubleshooting.",
              ],
            },
            {
              title: "Quality Engineering & Assurance Intern",
              org: "Cognizant",
              dates: "Feb 2023 – Jul 2023",
              bullets: [
                "Automated QA testing with Selenium-Java, reducing manual effort and improving site performance.",
                "Collaborated with cross-functional teams to improve test coverage and defect detection.",
              ],
            },
          ].map((r, i) => (
            <Reveal key={r.title} delay={i * 80} y={14}>
              <Role title={r.title} org={r.org} dates={r.dates} bullets={r.bullets} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section
        id="skills"
        title="Skills"
        subtitle="Tools and workflows for production-minded AI delivery."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Applied AI",
              items: [
                "Document Understanding",
                "NLP + Entity Extraction",
                "RAG + LLM Workflows",
                "Predictive Modeling",
                "Model Validation",
              ],
            },
            {
              title: "Engineering & MLOps",
              items: [
                "Python",
                "REST Inference Pipelines",
                "Model Deployment",
                "Monitoring + Iteration",
                "Git + CI/CD Concepts",
              ],
            },
            {
              title: "Data & Cloud",
              items: [
                "AWS (EC2, S3, SageMaker)",
                "Azure (OpenAI, Notebooks)",
                "GCP",
                "ETL + Data Validation",
                "SQL + PySpark",
              ],
            },
          ].map((s, i) => (
            <Reveal key={s.title} delay={i * 70} y={12}>
              <SkillCard title={s.title} items={s.items} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* EDUCATION */}
      <Section
        id="education"
        title="Education"
        subtitle="Academic foundations and recognitions."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "MSc, Data Science & Analytics",
              org: "Toronto Metropolitan University",
              meta: "Vector Scholarship in AI · Hack the World Hackathon Winner · GPA: X/4.33",
            },
            {
              title: "Graduate Certificate, AI & Machine Learning",
              org: "Humber College",
              meta: "Dean’s Honour List · Grade: 92.5%",
            },
            {
              title: "BTech, Computer Science & Engineering",
              org: "Your University",
              meta: "CGPA: 9.2/10",
            },
          ].map((e, i) => (
            <Reveal key={e.title} delay={i * 70} y={12}>
              <EduCard title={e.title} org={e.org} meta={e.meta} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* MENTOR NOTES */}
      <Section
        id="mentor"
        title="Mentor Notes"
        subtitle="Feedback from teaching and mentoring moments."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              quote:
                "Explained core Java concepts with patience and clarity. Students left labs confident and prepared.",
              who: "Professor, Software Engineering",
            },
            {
              quote:
                "Broke down SQL queries step-by-step and helped me build a working analytics project quickly.",
              who: "Student, Data Analytics",
            },
            {
              quote: "Practical and encouraging support on coursework. An excellent mentor.",
              who: "Student, Computer Science",
            },
          ].map((q, i) => (
            <Reveal key={q.who} delay={i * 70} y={12}>
              <QuoteCard quote={q.quote} who={q.who} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section
        id="contact"
        title="Let’s connect"
        subtitle="Open to AI Engineer, ML Engineer, and data analyst roles. Available for tutoring support on ML projects."
      >
        <div className="rounded-[28px] border border-border/70 bg-surface2/70 p-8 text-fg shadow-soft backdrop-blur">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="text-xl font-semibold">Contact</div>
              <div className="mt-4 space-y-3 text-muted">
                <div>Email: ahmed.khushnood8@gmail.com</div>
                <div>Phone: +1 437-217-6349</div>
                <div>LinkedIn: linkedin.com/in/khushnud-ahmed</div>
                <div>GitHub: github.com/K2hmed</div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:ahmed.khushnood8@gmail.com"
                className="h-12 rounded-full bg-accent text-center text-sm font-semibold text-white leading-[3rem] hover:brightness-95 active:brightness-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                Email me
              </a>

              <a
                href="https://www.linkedin.com/in/khushnud-ahmed"
                className="h-12 rounded-full border border-border bg-surface/40 text-center text-sm font-semibold text-fg leading-[3rem] hover:bg-surface/70 transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Section>

      <footer className="pt-8 pb-16 text-sm text-muted">
        Khushnud Ahmed · AI Engineer and Data Analyst
      </footer>
    </>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <div className="text-3xl font-semibold text-fg">{value}</div>
      <div className="mt-2 text-sm text-muted">{label}</div>
    </div>
  );
}

/**
 * PROJECTS: hover lift + subtle ring outline + better cover block + keyboard focus
 */
function ProjectCard({ title }) {
  return (
    <Card className="flex h-full flex-col overflow-hidden p-0 transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(0,0,0,0.14)]">
      {/* image / cover */}
      <div className="h-44 bg-surface/60" />

      {/* content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="text-lg font-semibold text-fg">
          {title}
        </div>

        <p className="mt-2 text-muted">
          Replace this with your 1–2 line impact statement.
        </p>

        {/* pushes CTA to the bottom so all cards match */}
        <button className="mt-auto pt-4 text-sm font-semibold text-muted hover:text-fg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg">
          SHOW MORE
        </button>
      </div>
    </Card>
  );
}

/**
 * EXPERIENCE: stronger bullet readability using tokens
 */
function Role({ title, org, dates, bullets }) {
  return (
    <Card>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="text-xl font-semibold text-fg">{title}</div>
          <div className="text-muted">{org}</div>
        </div>
        <div className="text-sm text-muted">{dates}</div>
      </div>

      <ul className="mt-4 list-disc space-y-2 pl-5 text-fg/80">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </Card>
  );
}

/**
 * SKILLS: stronger bullet readability using tokens
 */
function SkillCard({ title, items }) {
  return (
    <Card>
      <div className="text-xl font-semibold text-fg">{title}</div>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-fg/80">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </Card>
  );
}

function EduCard({ title, org, meta }) {
  return (
    <Card>
      <div className="text-xl font-semibold text-fg">{title}</div>
      <div className="mt-2 text-muted">{org}</div>
      <div className="mt-4 text-muted">{meta}</div>
    </Card>
  );
}

function QuoteCard({ quote, who }) {
  return (
    <Card>
      <div className="text-fg">“{quote}”</div>
      <div className="mt-6 text-sm font-semibold text-muted">— {who}</div>
    </Card>
  );
}
