"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const ResqVision = () => {
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
              Full-Stack
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">ResQVision</h1>
          <p className="text-white/70 text-lg leading-relaxed mb-6">
            An emergency response analytics dashboard built on Sydney&apos;s Integrated Emergency
            Response Analytics Dataset (IERAD). Designed for emergency coordinators and analysts
            to identify response bottlenecks, track incident trends, and understand how
            infrastructure and geography affect outcomes across urban and rural regions.
          </p>

          <Image
            src="/assets/work/ResQVision.png"
            alt="ResQVision Dashboard"
            width={900}
            height={500}
            className="rounded-xl mb-8 border border-white/10 w-full object-cover"
          />

          <div className="flex flex-wrap gap-2 mb-10">
            {["React.js", "D3.js", "Vite", "Tailwind CSS", "JSON", "GitHub Pages"].map((tech) => (
              <span key={tech} className="bg-accent/10 text-accent text-xs font-medium px-3 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {[
            {
              title: "D3.js Visualizations",
              desc: "Interactive charts powered by D3.js — bar charts, time-series plots, heatmaps, and geographic breakdowns — all built to handle large datasets without sacrificing interactivity.",
            },
            {
              title: "Multi-Axis Filtering",
              desc: "Analysts can filter the entire dashboard by region, time window, incident type, and severity simultaneously, narrowing from city-wide trends down to a single district.",
            },
            {
              title: "Response Time Analysis",
              desc: "Visualizes average and percentile response times across incident categories — fires, medical emergencies, accidents — helping identify which areas are consistently underserved.",
            },
            {
              title: "Custom Dataset Upload",
              desc: "Supports CSV upload so coordinators can test against their own data formats or compare the IERAD baseline against local incident records.",
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

        {/* Dashboard views */}
        <div className="bg-surface rounded-xl p-6 border border-white/5 mb-10">
          <h3 className="font-semibold mb-4 text-white/90">Dashboard Views</h3>
          <ul className="flex flex-col gap-2">
            {[
              "Incident type distribution — volumes by category across all regions",
              "Response time trends — time-series analysis showing seasonal and geographic patterns",
              "Severity heatmap — high-risk areas overlaid on a regional map of Sydney",
              "Infrastructure effectiveness — correlating resource availability with outcome quality",
              "Delay analysis — identifying incidents where response time exceeded threshold",
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
            href="https://github.com/ShaunakJoshi1407/ResQVision"
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

export default ResqVision;
