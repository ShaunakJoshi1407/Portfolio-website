"use client";
import { Button } from "@/components/ui/button";
import { FaArrowLeft, FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const RESUME_DRIVE_LINK =
  "https://drive.google.com/file/d/1CX9i6hnIIB12TJONcOoDOyHMHq_VPU_q/view?usp=drive_link";
const RESUME_DOWNLOAD_LINK =
  "https://drive.google.com/uc?export=download&id=1CX9i6hnIIB12TJONcOoDOyHMHq_VPU_q";

const ResumeViewer = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#1c1c22] flex flex-col items-center justify-center px-6">
      <motion.div
        className="max-w-lg w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      >
        <div className="mb-8">
          <Link href="/">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 text-white/50 hover:text-accent hover:bg-transparent transition-colors mb-8"
            >
              <FaArrowLeft className="text-sm" />
              <span>Back to portfolio</span>
            </Button>
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-3">
          Shaunak Joshi — <span className="text-accent">Resume</span>
        </h1>
        <p className="text-white/60 mb-10">
          Software Engineer · DevSecOps · Cloud Infrastructure
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={RESUME_DOWNLOAD_LINK} download>
            <Button
              size="lg"
              className="flex items-center gap-2 px-8 w-full sm:w-auto bg-accent text-primary hover:bg-accent/90 font-semibold"
            >
              <FaDownload />
              Download PDF
            </Button>
          </a>
          <a
            href={RESUME_DRIVE_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2 px-8 w-full sm:w-auto"
            >
              <FaExternalLinkAlt />
              View in Google Drive
            </Button>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ResumeViewer;
