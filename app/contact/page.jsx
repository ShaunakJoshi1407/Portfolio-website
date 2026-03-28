"use client";

import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "shaunakjoshi1407@gmail.com",
    link: "mailto:shaunakjoshi1407@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Minneapolis, MN",
    link: "https://maps.google.com/?q=Minneapolis,Minnesota",
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    description: "shaunakjoshi",
    link: "https://www.linkedin.com/in/shaunakhemantjoshi/",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    description: "ShaunakJoshi1407",
    link: "https://github.com/ShaunakJoshi1407",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3, ease: "easeOut" } }}
      className="min-h-screen py-16 xl:py-24"
    >
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-4xl xl:text-5xl font-semibold tracking-tight text-white mb-4">
          Get in Touch
        </h1>
        <p className="text-white/40 text-lg mb-12">
          Open to new opportunities and collaborations.
        </p>

        <div className="flex flex-col gap-3">
          {info.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 bg-surface rounded-xl px-6 py-5 border border-white/5 hover:border-white/15 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/30 group-hover:text-white/60 transition-colors shrink-0">
                {item.icon}
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="text-accent/50 text-xs font-code uppercase tracking-wider">
                  {item.title}
                </p>
                <p className="text-white/70 text-sm font-medium group-hover:text-white transition-colors">
                  {item.description}
                </p>
              </div>
              <span className="ml-auto text-white/20 group-hover:text-accent transition-colors text-sm">
                →
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-white/5">
          <a
            href="https://drive.google.com/file/d/1CX9i6hnIIB12TJONcOoDOyHMHq_VPU_q/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/40 hover:text-accent text-sm font-medium transition-colors"
          >
            View Resume →
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
