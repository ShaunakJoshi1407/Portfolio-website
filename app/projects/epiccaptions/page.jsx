"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const EpicCaptionsPage = () => {
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
              Full-Stack
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">EpicCaptions</h1>
          <p className="text-white/70 text-lg leading-relaxed mb-6">
            A video subtitle generator that produces cinematic, styled captions — think film-quality
            subtitles, not the default white-text-on-black boxes. Users upload a video, the pipeline
            extracts audio, transcribes it, and renders styled captions back onto the video using
            FFmpeg. The LLM layer cleans up transcription artifacts and improves subtitle pacing.
          </p>

          <Image
            src="/assets/work/subtitle_3.png"
            alt="EpicCaptions"
            width={900}
            height={500}
            className="rounded-xl mb-8 border border-white/10 w-full object-cover"
          />

          <div className="flex flex-wrap gap-2 mb-10">
            {["React.js", "Next.js", "TypeScript", "Node.js", "FFmpeg", "LLM"].map((tech) => (
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
              title: "FFmpeg Processing Pipeline",
              desc: "Handles video ingestion, audio extraction, subtitle rendering, and final video export on the server. Supports standard formats and outputs an MP4 with burned-in captions.",
            },
            {
              title: "LLM-Enhanced Transcription",
              desc: "Raw transcription output is cleaned up by an LLM pipeline — correcting awkward splits, improving punctuation, and ensuring subtitle timing feels natural.",
            },
            {
              title: "Real-Time Caption Editor",
              desc: "Before exporting, users can edit any caption block in-browser — adjust text, change timing, or tweak styling — and see changes reflected immediately.",
            },
            {
              title: "Cinematic Styling",
              desc: "Captions support custom fonts, sizes, colors, and positioning. Designed to look like film subtitles rather than auto-generated CC text.",
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

        {/* Pipeline */}
        <div className="bg-[#232329] rounded-xl p-6 border border-white/5 mb-10">
          <h3 className="font-semibold mb-4 text-white/90">Processing Pipeline</h3>
          <ul className="flex flex-col gap-2">
            {[
              "User uploads video → Node.js backend receives and stores the file",
              "FFmpeg extracts audio track and generates a raw transcript via speech-to-text",
              "LLM post-processes transcript: fixes pacing, punctuation, and awkward splits",
              "Subtitle file (.srt / .ass) generated and rendered back onto video via FFmpeg",
              "User reviews and edits captions in-browser before downloading the final video",
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
            href="https://github.com/ShaunakJoshi1407/epicCaptions"
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

export default EpicCaptionsPage;
