import React from "react";
import Section from "../components/Section.jsx";
import Card from "../components/Card.jsx";

export default function RecruiterView({ visitorType, onSwitch }) {
  return (
    <>
      {/* HERO */}
      <section id="home" className="grid gap-8 lg:grid-cols-2">
        <div className="pt-6">
          <div className="text-xs tracking-[0.22em] text-neutral-700">
            AI ENGINEER + DATA ANALYST · HEALTHCARE AI · TORONTO, ON · OPEN TO ROLES
          </div>

          <h1 className="mt-6 font-display text-6xl font-semibold leading-[0.95] text-neutral-900">
            YourName builds{" "}
            <span className="text-rose-300">adaptive</span>{" "}
            <span className="text-emerald-300">AI systems</span>
            <br />
            for healthcare,
            <br />
            analytics, and
            <br />
            language intelligence.
          </h1>

          <p className="mt-6 max-w-xl text-neutral-700">
            Machine learning, data science, and analytics builder with hands-on
            experience in NLP, RAG, and predictive modeling. Comfortable taking
            models from idea to deployment-ready pipelines.
          </p>

          <p className="mt-6 text-sm font-semibold text-rose-400">
            Scholarship / Award line · Hackathon win line · Anything strong and short
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-rose-300 px-6 py-3 text-sm font-semibold text-white hover:bg-rose-400"
            >
              View Projects
            </a>
            <a
              href="#skills"
              className="rounded-full border border-neutral-200 bg-white/60 px-6 py-3 text-sm font-semibold text-neutral-800 hover:bg-white"
            >
              View My Skillset
            </a>
            <a
              href="#contact"
              className="rounded-full border border-neutral-200 bg-white/60 px-6 py-3 text-sm font-semibold text-neutral-800 hover:bg-white"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <Card className="p-7">
            <div className="text-xs tracking-widest text-neutral-600">WHO’S VISITING?</div>

            <div className="mt-4 flex items-center gap-3">
              <div className="h-11 w-11 rounded-full bg-neutral-300" />
              <div>
                <div className="font-semibold text-neutral-900">Your Name</div>
                <div className="text-sm text-neutral-600">AI Engineer · Data Analyst</div>
              </div>
            </div>

            <div className="mt-5 rounded-full bg-white/60 p-1">
              <div className="grid grid-cols-2 gap-1">
                <button
                  onClick={() => onSwitch("recruiter")}
                  className={[
                    "h-10 rounded-full text-sm font-semibold",
                    visitorType === "recruiter"
                      ? "bg-neutral-900 text-white"
                      : "text-neutral-700 hover:bg-white",
                  ].join(" ")}
                >
                  Recruiter
                </button>
                <button
                  onClick={() => onSwitch("student")}
                  className={[
                    "h-10 rounded-full text-sm font-semibold",
                    visitorType === "student"
                      ? "bg-neutral-900 text-white"
                      : "text-neutral-700 hover:bg-white",
                  ].join(" ")}
                >
                  Student
                </button>
              </div>
            </div>

            <div className="mt-6 text-xs tracking-widest text-rose-400">RECRUITER</div>
            <div className="mt-2 text-xl font-semibold text-neutral-900">
              Fast overview for hiring teams
            </div>
            <p className="mt-3 text-neutral-700">
              I’m open to AI Engineer, ML Engineer, and data analyst roles. I build
              production-minded ML systems, especially for healthcare workflows and
              NLP-driven applications.
            </p>

            <a
              href="/resume.pdf"
              className="mt-5 inline-block text-sm font-semibold text-rose-400 hover:text-rose-500"
            >
              Download Resume
            </a>
          </Card>

          <Card className="grid grid-cols-3 gap-6 bg-white/60 p-7">
            <Stat value="7,900+" label="Healthcare records modeled" />
            <Stat value="95%" label="Epilepsy prediction accuracy" />
            <Stat value="40%" label="Design iteration time reduced" />
          </Card>
        </div>
      </section>

      {/* PROJECTS */}
      <Section
        id="projects"
        title="Applied AI Highlights"
        subtitle="Applied AI and analytics work across healthcare, NLP, and scalable data systems."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard title="Healthcare AI: Seizure Prediction" />
          <ProjectCard title="Stroke Risk Prediction on AWS" />
          <ProjectCard title="Alzheimer’s Stage Classification" />
          <ProjectCard title="RAG Scientific QA Assistant" />
          <ProjectCard title="Energy Analytics Pipeline" />
          <ProjectCard title="Sales & Profit Forecasting" />
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section
        id="experience"
        title="Experience"
        subtitle="Highlights from AI engineering, research, and applied ML delivery."
      >
        <div className="space-y-5">
          <Role
            title="Graduate Researcher / AI Engineer (Healthcare)"
            org="Toronto Metropolitan University"
            dates="Sep 2024 – Aug 2025"
            bullets={[
              "Built end-to-end AI pipelines on thousands of patient records blending structured and unstructured data.",
              "Developed predictive models with robust validation, interpretability, and reliability focus.",
              "Designed production-grade Python workflows for ingestion, feature engineering, training, and evaluation.",
            ]}
          />
          <Role
            title="Machine Learning Engineer"
            org="Company (Remote)"
            dates="Jan 2024 – May 2024"
            bullets={[
              "Delivered production-style generative AI pipelines to accelerate content creation.",
              "Built inference and evaluation workflows bridging experimentation to deployment-ready systems.",
            ]}
          />
        </div>
      </Section>

      {/* SKILLS */}
      <Section
        id="skills"
        title="Skills"
        subtitle="Tools and workflows for production-minded AI delivery."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <SkillCard
            title="Applied AI"
            items={[
              "Document Understanding",
              "NLP + Entity Extraction",
              "RAG + LLM Workflows",
              "Predictive Modeling",
              "Model Validation",
            ]}
          />
          <SkillCard
            title="Engineering & MLOps"
            items={[
              "Python",
              "REST Inference Pipelines",
              "Model Deployment",
              "Monitoring + Iteration",
              "Git + CI/CD Concepts",
            ]}
          />
          <SkillCard
            title="Data & Cloud"
            items={[
              "AWS (EC2, S3, SageMaker)",
              "Azure (OpenAI, Notebooks)",
              "GCP",
              "ETL + Data Validation",
              "SQL + PySpark",
            ]}
          />
        </div>
      </Section>

      {/* EDUCATION */}
      <Section
        id="education"
        title="Education"
        subtitle="Academic foundations and recognitions."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <EduCard
            title="MSc, Data Science & Analytics"
            org="Toronto Metropolitan University"
            meta="Scholarship / Award · GPA line"
          />
          <EduCard
            title="Graduate Certificate, AI & Machine Learning"
            org="College Name"
            meta="Dean’s Honour List · Grade line"
          />
          <EduCard
            title="BTech, Computer Science & Engineering"
            org="University Name"
            meta="CGPA line"
          />
        </div>
      </Section>

      {/* MENTOR NOTES */}
      <Section
        id="mentor"
        title="Mentor Notes"
        subtitle="Feedback from teaching and mentoring moments."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <QuoteCard
            quote="Explained core concepts with patience and clarity. Students left confident and prepared."
            who="Professor, Software Engineering"
          />
          <QuoteCard
            quote="Broke down SQL step-by-step and helped me build a working analytics project quickly."
            who="Student, Data Analytics"
          />
          <QuoteCard
            quote="Practical and encouraging support on coursework. An excellent mentor."
            who="Student, Computer Science"
          />
        </div>
      </Section>

      {/* CONTACT */}
      <Section
        id="contact"
        title="Let’s connect"
        subtitle="Open to AI Engineer, ML Engineer, and data analyst roles."
      >
        <div className="rounded-[28px] bg-neutral-900/80 p-8 text-white shadow-soft">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="text-xl font-semibold">Contact</div>
              <div className="mt-4 space-y-3 text-white/80">
                <div>Email: your.email@gmail.com</div>
                <div>Phone: +1 XXX XXX XXXX</div>
                <div>LinkedIn: linkedin.com/in/yourhandle</div>
                <div>GitHub: github.com/yourhandle</div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:your.email@gmail.com"
                className="h-12 rounded-full bg-amber-200/90 text-center text-sm font-semibold text-neutral-900 leading-[3rem] hover:bg-amber-200"
              >
                Email me
              </a>
              <a
                href="https://linkedin.com"
                className="h-12 rounded-full bg-white/10 text-center text-sm font-semibold text-white leading-[3rem] hover:bg-white/15"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Section>

      <footer className="pt-8 text-sm text-neutral-600">
        Your Name · AI Engineer and Data Analyst
      </footer>
    </>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <div className="text-3xl font-semibold text-neutral-900">{value}</div>
      <div className="mt-2 text-sm text-neutral-700">{label}</div>
    </div>
  );
}

function ProjectCard({ title }) {
  return (
    <Card className="p-0 overflow-hidden">
      <div className="h-44 bg-white/60" />
      <div className="p-6">
        <div className="text-lg font-semibold text-neutral-900">{title}</div>
        <p className="mt-2 text-neutral-700">
          One-line impact statement. Add metrics if you can.
        </p>
        <button className="mt-4 text-sm font-semibold text-neutral-600 hover:text-neutral-900">
          SHOW MORE
        </button>
      </div>
    </Card>
  );
}

function Role({ title, org, dates, bullets }) {
  return (
    <Card>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="text-xl font-semibold text-neutral-900">{title}</div>
          <div className="text-neutral-700">{org}</div>
        </div>
        <div className="text-sm text-neutral-600">{dates}</div>
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-700">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </Card>
  );
}

function SkillCard({ title, items }) {
  return (
    <Card>
      <div className="text-xl font-semibold text-neutral-900">{title}</div>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-700">
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
      <div className="text-xl font-semibold text-neutral-900">{title}</div>
      <div className="mt-2 text-neutral-700">{org}</div>
      <div className="mt-4 text-neutral-700">{meta}</div>
    </Card>
  );
}

function QuoteCard({ quote, who }) {
  return (
    <Card>
      <div className="text-neutral-800">“{quote}”</div>
      <div className="mt-6 text-sm font-semibold text-neutral-700">— {who}</div>
    </Card>
  );
}
