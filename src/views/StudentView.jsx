import React from "react";
import Section from "../components/Section.jsx";
import Card from "../components/Card.jsx";

export default function StudentView({ visitorType, onSwitch }) {
  return (
    <>
      <div className="flex justify-end">
        <div className="rounded-full bg-white/60 p-1">
          <div className="grid grid-cols-2 gap-1">
            <button
              onClick={() => onSwitch("recruiter")}
              className={[
                "h-10 w-32 rounded-full text-sm font-semibold",
                visitorType === "recruiter" ? "bg-neutral-900 text-white" : "text-neutral-700 hover:bg-white",
              ].join(" ")}
            >
              Recruiter
            </button>
            <button
              onClick={() => onSwitch("student")}
              className={[
                "h-10 w-32 rounded-full text-sm font-semibold",
                visitorType === "student" ? "bg-neutral-900 text-white" : "text-neutral-700 hover:bg-white",
              ].join(" ")}
            >
              Student
            </button>
          </div>
        </div>
      </div>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="pt-8">
          <div className="text-xs tracking-[0.22em] text-neutral-700">
            STUDENT PATH · PROJECT HELP · INTERVIEW PREP · ML FOUNDATIONS
          </div>
          <h1 className="mt-6 font-display text-6xl font-semibold leading-[0.95] text-neutral-900">
            Student view goes here.
          </h1>
          <p className="mt-6 max-w-xl text-neutral-700">
            Once you share the student screenshots, we’ll mirror the same layout and swap the copy, CTAs,
            and sections.
          </p>
        </div>

        <Card className="p-7">
          <div className="text-xl font-semibold text-neutral-900">Student quick links</div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-700">
            <li>Book a session</li>
            <li>Project ideas + guidance</li>
            <li>ML roadmap</li>
          </ul>
        </Card>
      </section>

      <Section id="projects" title="Student Resources" subtitle="Add your student-oriented content here.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>Resource card</Card>
          <Card>Resource card</Card>
          <Card>Resource card</Card>
        </div>
      </Section>
    </>
  );
}
