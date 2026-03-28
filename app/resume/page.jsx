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
  title: "Experience",
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
        "Automated Kubernetes cluster deployments, reducing setup time by 70%",
        "Eliminated critical configuration errors through infrastructure-as-code improvements",
        "Contributed to Platform9's managed Kubernetes SaaS product serving enterprise clients",
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
  title: "My education",
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

const skillsCategories = {
  languages: {
    title: "Languages",
    skills: [
      { icon: <FaPython />, name: "Python", color: "#3776AB" },
      { icon: <SiGnubash />, name: "Bash", color: "#4EAA25" },
      { icon: <FaJs />, name: "JavaScript", color: "#F7DF1E" },
      { icon: <SiCplusplus />, name: "C++", color: "#00599C" },
      { icon: <FaJava />, name: "Java", color: "#ED8B00" },
    ],
  },
  devops: {
    title: "DevOps & Infrastructure",
    skills: [
      { icon: <SiKubernetes />, name: "Kubernetes", color: "#326CE5" },
      { icon: <FaDocker />, name: "Docker", color: "#2496ED" },
      { icon: <SiTerraform />, name: "Terraform", color: "#7B42BC" },
      { icon: <SiHelm />, name: "Helm", color: "#0F1689" },
      { icon: <SiGithubactions />, name: "GitHub Actions", color: "#2088FF" },
      { icon: <SiJenkins />, name: "Jenkins", color: "#D24939" },
      { icon: <SiPrometheus />, name: "Prometheus", color: "#E6522C" },
      { icon: <SiGrafana />, name: "Grafana", color: "#F46800" },
      { icon: <SiGit />, name: "Git", color: "#F05032" },
    ],
  },
  cloudDatabases: {
    title: "Cloud & Databases",
    skills: [
      { icon: <FaAws />, name: "AWS", color: "#FF9900" },
      { icon: <FaCloud />, name: "Azure", color: "#0078D4" },
      { icon: <FaCloud />, name: "GCP", color: "#4285F4" },
      { icon: <FaLinux />, name: "Linux", color: "#FCC624" },
      { icon: <SiPostgresql />, name: "PostgreSQL", color: "#336791" },
      { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
      { icon: <FaReact />, name: "React.js", color: "#61DAFB" },
      { icon: <SiDjango />, name: "Django", color: "#092E20" },
    ],
  },
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* Experience Tab */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <ScrollArea className="mt-5 h-[500px]">
                  <ul className="flex flex-col gap-[24px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] py-6 px-8 rounded-xl flex flex-col lg:flex-row gap-6 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 border border-white/5 hover:border-accent/20"
                      >
                        {/* Logo + meta */}
                        <div className="flex flex-col items-center lg:items-start gap-3 min-w-[180px]">
                          <div className="w-[64px] h-[64px] bg-white/5 rounded-xl p-2 flex items-center justify-center border border-white/10">
                            <Image
                              src={item.logo}
                              alt={item.company}
                              width={48}
                              height={48}
                              className="rounded object-contain"
                            />
                          </div>
                          <div className="bg-accent/10 px-3 py-1 rounded-full text-accent font-medium text-xs">
                            {item.duration}
                          </div>
                          <p className="text-white/70 font-medium text-sm text-center lg:text-left">
                            {item.company}
                          </p>
                        </div>
                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-3 text-center lg:text-left">
                            {item.position}
                          </h3>
                          <ul className="flex flex-col gap-2">
                            {item.bullets.map((bullet, i) => (
                              <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                                <span className="text-accent mt-1 shrink-0">▸</span>
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <ScrollArea className="mt-5 h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] py-8 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-4 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 border border-white/5 hover:border-accent/20"
                      >
                        <div className="w-[80px] h-[80px] bg-white/5 rounded-xl p-2 flex items-center justify-center border border-white/10 mb-2">
                          <Image
                            src={item.logo}
                            alt={item.institution}
                            width={60}
                            height={60}
                            className="rounded object-contain"
                          />
                        </div>
                        <div className="bg-accent/10 px-4 py-1 rounded-full text-accent font-medium text-sm">
                          {item.duration}
                        </div>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left font-semibold">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/80 font-medium">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="text-center xl:text-left">
                  <h3 className="text-4xl font-bold">My Skills</h3>
                </div>
                {Object.values(skillsCategories).map((category, idx) => (
                  <div key={idx}>
                    <h4 className="text-lg font-semibold mt-6 mb-4 text-white/60 uppercase tracking-widest">
                      {category.title}
                    </h4>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[20px]">
                      {category.skills.map((skill, index) => (
                        <li
                          key={index}
                          className="flex flex-col items-center justify-center w-full h-[140px] bg-[#232329] rounded-xl duration-300 border border-white/5 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5"
                          style={{
                            background: `linear-gradient(135deg, #232329 0%, #232329 70%, ${skill.color}12 100%)`,
                          }}
                        >
                          <div
                            className="w-14 h-14 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 hover:scale-110"
                            style={{
                              backgroundColor: `${skill.color}18`,
                              boxShadow: `0 0 12px ${skill.color}25`,
                            }}
                          >
                            <div className="text-4xl" style={{ color: skill.color }}>
                              {skill.icon}
                            </div>
                          </div>
                          <p className="font-medium text-white/80 text-sm capitalize">
                            {skill.name}
                          </p>
                        </li>
                      ))}
                    </ul>
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
