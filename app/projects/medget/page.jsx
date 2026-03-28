"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const MedGetPage = () => {
  return (
    <section className="min-h-screen px-6 py-20 text-white">
      <div className="container mx-auto max-w-4xl">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-white/40 hover:text-accent transition-colors mb-10 text-sm"
        >
          <FaArrowLeft /> Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-accent/5 text-accent text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              ML
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">MedGet</h1>
          <p className="text-white/70 text-lg leading-relaxed mb-6">
            A drug research platform that brings together FDA clinical data, financial market
            signals, and AI-powered analysis into a single interface. Built for medical
            researchers, biotech investors, and curious users who want to explore the lifecycle
            of FDA-approved drugs — from clinical approval through market performance.
          </p>

          <Image
            src="/assets/work/MedGet.png"
            alt="MedGet"
            width={900}
            height={500}
            className="rounded-xl mb-8 border border-white/10 w-full object-cover"
          />

          <div className="flex flex-wrap gap-2 mb-10">
            {["Python", "React.js", "Next.js", "LangChain", "PostgreSQL", "FDA API"].map((tech) => (
              <span key={tech} className="bg-accent/10 text-accent text-xs font-medium px-3 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* What it does */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {[
            {
              title: "FDA Data Integration",
              desc: "Pulls real-time data from the FDA's public API — drug approval history, clinical trial outcomes, labeling changes, and adverse event reports — all in one place.",
            },
            {
              title: "Financial Intelligence",
              desc: "Correlates drug approval events with stock price movements for pharmaceutical companies, giving investors context on how regulatory milestones affect market performance.",
            },
            {
              title: "AI-Powered Q&A",
              desc: "LangChain pipeline lets users ask natural language questions about any drug — \"What were the side effects reported for X?\" — and get answers grounded in FDA data.",
            },
            {
              title: "Research Workflow",
              desc: "Designed for researchers who need to cross-reference publications, approval dates, and financial data without switching between half a dozen different portals.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-surface rounded-xl p-6 border border-white/5 hover:border-white/15 transition-all"
            >
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Technical highlights */}
        <div className="bg-surface rounded-xl p-6 border border-white/5 mb-10">
          <h3 className="font-semibold mb-4 text-white/90">Technical Highlights</h3>
          <ul className="flex flex-col gap-2">
            {[
              "LangChain agent orchestrates multi-step FDA data retrieval and summarization",
              "PostgreSQL stores normalized drug, trial, and market event data for fast querying",
              "Next.js API routes proxy FDA and financial data to avoid CORS and rate limit issues",
              "React frontend with real-time search, drug timelines, and comparative views",
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                <span className="text-accent/60 mt-0.5 shrink-0">▸</span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/Aggies-Create-NeuroX1/MedGet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black px-5 py-2 rounded font-medium hover:bg-accent hover:text-white transition"
          >
            <FaGithub /> View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default MedGetPage;
