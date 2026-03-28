"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const GradvisorPage = () => {
  return (
    <section className="min-h-screen px-6 py-20 text-white">
      <div className="container mx-auto max-w-4xl">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-white/50 hover:text-accent transition-colors mb-10 text-sm"
        >
          <FaArrowLeft /> Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-accent/15 text-accent text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              ML
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Gradvisor</h1>
          <p className="text-white/70 text-lg leading-relaxed mb-6">
            A graduate school recommendation system that takes a student&apos;s academic profile
            and preferences as input and returns a ranked list of universities that are a strong
            fit. Built to cut through the noise of the graduate school search process and give
            students data-driven, personalized suggestions.
          </p>

          <Image
            src="/assets/work/Gradvisor.png"
            alt="Gradvisor"
            width={900}
            height={500}
            className="rounded-xl mb-8 border border-white/10 w-full object-cover"
          />

          <div className="flex flex-wrap gap-2 mb-10">
            {["React.js", "Python", "Django", "SQLite", "REST API"].map((tech) => (
              <span key={tech} className="bg-white/10 text-accent text-xs font-medium px-3 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {[
            {
              title: "Profile-Based Matching",
              desc: "Students enter GRE scores, GPA, research interests, location preferences, and budget constraints. The system uses these as inputs to a weighted scoring model.",
            },
            {
              title: "Scoring Algorithm",
              desc: "Universities are ranked based on a multi-factor weighted score that balances academic fit, financial feasibility, and program specialization — not just rankings.",
            },
            {
              title: "Django REST Backend",
              desc: "Python/Django backend handles scoring logic, database queries, and API responses. SQLite stores university data, historical admissions stats, and program details.",
            },
            {
              title: "Comparative View",
              desc: "Side-by-side comparison of recommended programs across key dimensions — tuition, program strength, location, and admission competitiveness.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#232329] rounded-xl p-6 border border-white/5 hover:border-accent/20 transition-all"
            >
              <h3 className="text-accent font-semibold mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="bg-[#232329] rounded-xl p-6 border border-white/5 mb-10">
          <h3 className="font-semibold mb-4 text-white/90">How It Works</h3>
          <ul className="flex flex-col gap-2">
            {[
              "Student fills out a structured profile form with academic and personal preferences",
              "Django backend processes inputs through a configurable weighted scoring function",
              "Each university in the database is scored and ranked against the student profile",
              "Frontend displays ranked results with match reasoning and comparison tools",
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                <span className="text-accent mt-0.5 shrink-0">▸</span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4">
          <a
            href="https://mohitsarin-tamu.github.io/Gradvisor/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black px-5 py-2 rounded font-medium hover:bg-accent hover:text-white transition"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default GradvisorPage;
