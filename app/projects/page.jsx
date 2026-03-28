"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import projects from "../../projectData";
import { useState } from "react";

const categories = ["All", "DevOps", "ML", "Full-Stack", "Data Analysis"];

const Projects = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="min-h-screen py-16 xl:py-24">
      <div className="container mx-auto">
        <h1 className="text-4xl xl:text-5xl font-semibold tracking-tight text-white mb-10">
          Projects
        </h1>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-accent text-primary font-semibold"
                  : "text-white/40 hover:text-white/70 border border-white/10 hover:border-accent/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group bg-surface rounded-xl overflow-hidden border border-white/5 hover:border-white/15 transition-colors"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-[#0a0a0a]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="font-code text-[10px] uppercase tracking-widest text-white/40 bg-black/60 backdrop-blur-sm px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg mb-2">
                  {project.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="font-code text-[10px] text-accent/50 bg-accent/5 px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div>
                  {project.page ? (
                    <Link
                      href={project.page}
                      className="text-sm text-white/40 hover:text-accent transition-colors font-medium"
                    >
                      View details →
                    </Link>
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/40 hover:text-accent transition-colors font-medium"
                    >
                      View on GitHub →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-white/30 text-center py-16">
            No {active} projects found.
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;
