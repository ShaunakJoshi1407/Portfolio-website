"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const AiInferenceOrchestrator = () => {
  return (
    <section className="min-h-screen px-6 py-20 text-white">
      <div className="container mx-auto max-w-4xl">
        {/* Back */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-white/50 hover:text-accent transition-colors mb-10 text-sm"
        >
          <FaArrowLeft /> Back to Projects
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-accent/15 text-accent text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              DevOps
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">AI Inference Orchestrator</h1>
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            A Kubernetes-native control plane for AI model inference workloads, built with Go and
            controller-runtime. Extends the Kubernetes API with a custom{" "}
            <code className="text-accent bg-accent/10 px-1 rounded">AIDeployment</code> resource
            that declaratively manages deployment orchestration, autoscaling, drift detection, and
            observability — controllable through a CLI, HTTP tool server, or natural language
            interface.
          </p>

          {/* Hero image */}
          <div className="rounded-xl overflow-hidden border border-white/10 mb-8">
            <Image
              src="/assets/work/ai-orchestrator.svg"
              alt="AI Inference Orchestrator architecture"
              width={900}
              height={500}
              className="w-full"
            />
          </div>

          {/* Stack tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {["Go", "Kubernetes", "controller-runtime", "CRD", "Prometheus", "HPA", "RBAC"].map(
              (tech) => (
                <span
                  key={tech}
                  className="bg-white/10 text-accent text-xs font-medium px-3 py-1 rounded"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </motion.div>

        {/* Feature sections */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {[
            {
              title: "Custom Resource Definition",
              desc: "The AIDeployment CRD lets you declaratively define model name, replica count, service type, resource limits, and HPA config — Kubernetes reconciles the rest.",
            },
            {
              title: "Drift Detection",
              desc: "Controller continuously compares desired vs actual state across owned Deployment, Service, and HPA resources — safely updating without disrupting autoscaler-managed replicas.",
            },
            {
              title: "Observability",
              desc: "Exposes reconciliation loop metrics and business-level inference metrics to Prometheus. Deployment readiness propagated into CRD status conditions.",
            },
            {
              title: "Multi-Interface Control",
              desc: "Manage model lifecycle via aictl CLI, REST HTTP tool server, or a natural language interface — enabling both traditional ops and AI agent-driven workflows.",
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

        {/* Controller guarantees */}
        <div className="bg-[#232329] rounded-xl p-6 border border-white/5 mb-10">
          <h3 className="font-semibold mb-4 text-white/90">Controller Guarantees</h3>
          <ul className="flex flex-col gap-2">
            {[
              "Idempotent reconciliation — safe to run repeatedly without side effects",
              "HPA-safe replica management — never overwrites autoscaler-managed replicas",
              "Conflict-safe status updates via retry-on-conflict",
              "Owner references — child resources garbage-collected when CR is deleted",
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                <span className="text-accent mt-0.5 shrink-0">▸</span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="flex gap-4">
          <a
            href="https://github.com/ShaunakJoshi1407/ai-inference-orchestrator"
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

export default AiInferenceOrchestrator;
