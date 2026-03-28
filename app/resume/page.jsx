"use client";
import {
  FaJs,
  FaReact,
  FaDocker,
  FaPython,
  FaJava,
  FaAws,
  FaLinux,
  FaCloud,
} from "react-icons/fa";
import {
  SiKubernetes,
  SiCplusplus,
  SiGit,
  SiTerraform,
  SiMongodb,
  SiPostgresql,
  SiJenkins,
  SiHelm,
  SiGithubactions,
  SiPrometheus,
  SiGrafana,
  SiGnubash,
  SiDjango,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Image from "next/image";

const experience = {
  items: [
    {
      company: "Hewlett Packard Enterprise",
      position: "Software Engineer (Systems)",
      duration: "July 2025 – Present",
      logo: "/assets/logos/hpe.webp",
      bullets: [
        "Driving DevSecOps initiatives across CI/CD pipelines for enterprise software products",
        "Integrating automated security scanning into build pipelines to reduce vulnerability exposure",
        "Contributing to infrastructure automation using Kubernetes and cloud tooling at scale",
      ],
    },
    {
      company: "Texas A&M University",
      position: "Student Software Developer",
      duration: "Jan. 2024 – May 2025",
      logo: "/assets/logos/tamu.webp",
      bullets: [
        "Designed and built RESTful APIs for research data management systems",
        "Built error diagnostic tooling that improved debugging efficiency for distributed workflows",
        "Collaborated with research teams to deliver critical systems on tight deadlines",
      ],
    },
    {
      company: "Platform9 Systems",
      position: "Associate Member of Technical Staff",
      duration: "Jul. 2021 – Jun. 2023",
      logo: "/assets/logos/platform9.webp",
      bullets: [
        "Automated Kubernetes cluster deployments, significantly reducing setup time and eliminating manual configuration errors",
        "Contributed to Platform9's managed Kubernetes SaaS product serving enterprise clients",
        "Developed infrastructure-as-code tooling to standardize cluster provisioning workflows",
      ],
    },
    {
      company: "Platform9 Systems",
      position: "Software Engineering Intern",
      duration: "Feb. 2021 – May 2021",
      logo: "/assets/logos/platform9.webp",
      bullets: [
        "Built automation scripts for Kubernetes cluster management workflows",
        "Contributed to testing and QA for cloud infrastructure features",
      ],
    },
  ],
};

const education = {
  items: [
    {
      institution: "Texas A&M University",
      degree: "Master of Science in Computer Science",
      duration: "Aug. 2023 – May 2025",
      logo: "/assets/logos/tamu.webp",
    },
    {
      institution: "University of Pune",
      degree: "BE in Information Technology",
      duration: "Aug. 2017 – Jun. 2021",
      logo: "/assets/logos/pict.webp",
    },
  ],
};

const skillsCategories = [
  {
    title: "Languages",
    skills: [
      { icon: <FaPython />, name: "Python" },
      { icon: <SiGnubash />, name: "Bash" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <SiCplusplus />, name: "C++" },
      { icon: <FaJava />, name: "Java" },
    ],
  },
  {
    title: "DevOps & Infrastructure",
    skills: [
      { icon: <SiKubernetes />, name: "Kubernetes" },
      { icon: <FaDocker />, name: "Docker" },
      { icon: <SiTerraform />, name: "Terraform" },
      { icon: <SiHelm />, name: "Helm" },
      { icon: <SiGithubactions />, name: "GitHub Actions" },
      { icon: <SiJenkins />, name: "Jenkins" },
      { icon: <SiPrometheus />, name: "Prometheus" },
      { icon: <SiGrafana />, name: "Grafana" },
      { icon: <SiGit />, name: "Git" },
    ],
  },
  {
    title: "Cloud & Databases",
    skills: [
      { icon: <FaAws />, name: "AWS" },
      { icon: <FaCloud />, name: "Azure" },
      { icon: <FaCloud />, name: "GCP" },
      { icon: <FaLinux />, name: "Linux" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <FaReact />, name: "React.js" },
      { icon: <SiDjango />, name: "Django" },
    ],
  },
];

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3, ease: "easeOut" } }}
      className="min-h-screen py-16 xl:py-24"
    >
      <div className="container mx-auto">
        <h1 className="text-4xl xl:text-5xl font-semibold tracking-tight text-white mb-12">
          Resume
        </h1>

        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-12">
          <TabsList className="flex flex-col w-full max-w-[220px] mx-auto xl:mx-0 gap-2 bg-transparent p-0">
            {["experience", "education", "skills"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="w-full justify-start text-left capitalize text-white/40 data-[state=active]:text-accent data-[state=active]:bg-accent/10 rounded-md px-4 py-2.5 text-sm font-medium transition-colors hover:text-white/70"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="flex-1">
            {/* Experience */}
            <TabsContent value="experience">
              <ScrollArea className="h-[600px] pr-4">
                <div className="flex flex-col gap-4">
                  {experience.items.map((item, index) => (
                    <div
                      key={index}
                      className="bg-surface rounded-xl p-6 border border-white/5 flex flex-col lg:flex-row gap-6"
                    >
                      <div className="flex flex-col items-center lg:items-start gap-3 min-w-[160px]">
                        <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
                          <Image
                            src={item.logo}
                            alt={item.company}
                            width={36}
                            height={36}
                            className="object-contain"
                          />
                        </div>
                        <span className="font-code text-xs text-white/30 text-center lg:text-left">
                          {item.duration}
                        </span>
                        <p className="text-white/50 text-xs text-center lg:text-left font-medium">
                          {item.company}
                        </p>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold mb-3">
                          {item.position}
                        </h3>
                        <ul className="flex flex-col gap-1.5">
                          {item.bullets.map((bullet, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-white/40 text-sm"
                            >
                              <span className="text-white/20 mt-1.5 shrink-0">—</span>
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education">
              <div className="flex flex-col gap-4">
                {education.items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-surface rounded-xl p-6 border border-white/5 flex flex-col lg:flex-row gap-6"
                  >
                    <div className="flex flex-col items-center lg:items-start gap-3 min-w-[160px]">
                      <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
                        <Image
                          src={item.logo}
                          alt={item.institution}
                          width={36}
                          height={36}
                          className="object-contain"
                        />
                      </div>
                      <span className="font-code text-xs text-white/30 text-center lg:text-left">
                        {item.duration}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1">
                        {item.degree}
                      </h3>
                      <p className="text-white/40 text-sm">{item.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills">
              <div className="flex flex-col gap-10">
                {skillsCategories.map((category, idx) => (
                  <div key={idx}>
                    <p className="font-code text-xs uppercase tracking-[3px] text-accent/60 mb-4">
                      {category.title}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 bg-surface border border-white/5 hover:border-white/15 rounded-lg px-4 py-2.5 transition-colors"
                        >
                          <span className="text-white/40 text-base">{skill.icon}</span>
                          <span className="text-white/70 text-sm font-medium">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
