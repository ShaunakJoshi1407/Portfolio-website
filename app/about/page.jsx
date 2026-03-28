"use client";

import Social from "@/components/Social";

const AboutMe = () => {
  return (
    <section className="min-h-screen text-white p-12 pt-3">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          <span className="text-white/60">About Me</span>
        </h1>

        <p className="text-xl">
          I&apos;m currently working as a{" "}
          <span className="text-accent">Software Engineer</span> at{" "}
          <span className="text-accent">Hewlett Packard Enterprise</span> in
          Minneapolis, MN, where I focus on{" "}
          <span className="text-accent">DevSecOps</span>, building CI/CD
          pipelines, automating security workflows, and improving how software
          ships reliably across teams. I recently completed my{" "}
          <span className="text-accent">Master&apos;s in Computer Science</span>{" "}
          from <span className="text-accent">Texas A&M University</span>,
          following a Bachelor&apos;s in{" "}
          <span className="text-accent">Information Technology</span> from{" "}
          <span className="text-accent">Savitribai Phule Pune University</span>.
        </p>

        <p className="text-xl mt-6 mb-4">
          Before HPE, I spent two years at{" "}
          <span className="text-accent">Platform9 Systems</span> working on
          Kubernetes infrastructure, automating cluster deployments, reducing
          manual configuration overhead, and making it easier for teams to run
          containerized workloads at scale. At{" "}
          <span className="text-accent">Texas A&M</span>, I built APIs and
          diagnostic tooling that helped research teams ship faster and debug
          more effectively.
        </p>

        <p className="text-xl mt-6 mb-4">
          My work sits at the intersection of infrastructure and developer
          experience. I care about systems that are observable, automated, and
          genuinely useful for the people operating them. I&apos;m interested in{" "}
          <span className="text-accent">distributed systems</span>,{" "}
          <span className="text-accent">cloud-native tooling</span>, and
          building the kind of internal platforms that let engineering teams move
          faster with more confidence.
        </p>

        <br />

        <div className="mb-8 xl:mb-0">
          <Social
            containerStyles="flex gap-6"
            iconStyles="w-9 h-9 border border-accent rounded-full flex
              justify-center items-center text-accent text-base hover:bg-accent
              hover:text-primary hover:transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
