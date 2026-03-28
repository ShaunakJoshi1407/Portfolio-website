"use client";
import Social from "@/components/Social";

const AboutMe = () => {
  return (
    <section className="min-h-screen py-16 xl:py-24">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl xl:text-5xl font-semibold tracking-tight text-white mb-10">
          About Me
        </h1>

        <div className="flex flex-col gap-6 text-white/60 text-lg leading-relaxed">
          <p>
            I&apos;m currently working as a{" "}
            <span className="text-white">Software Engineer</span> at{" "}
            <span className="text-white">Hewlett Packard Enterprise</span> in
            Minneapolis, MN, where I focus on DevSecOps — building CI/CD
            pipelines, automating security workflows, and improving how software
            ships reliably across teams. I recently completed my{" "}
            <span className="text-white">Master&apos;s in Computer Science</span>{" "}
            from <span className="text-white">Texas A&M University</span>,
            following a Bachelor&apos;s in Information Technology from
            Savitribai Phule Pune University.
          </p>

          <p>
            Before HPE, I spent two years at{" "}
            <span className="text-white">Platform9 Systems</span> working on
            Kubernetes infrastructure — automating cluster deployments, reducing
            manual configuration overhead, and making it easier for teams to run
            containerized workloads at scale. At{" "}
            <span className="text-white">Texas A&M</span>, I built APIs and
            diagnostic tooling that helped research teams ship faster and debug
            more effectively.
          </p>

          <p>
            My work sits at the intersection of infrastructure and developer
            experience. I care about systems that are observable, automated, and
            genuinely useful for the people operating them. I&apos;m interested
            in <span className="text-white">distributed systems</span>,{" "}
            <span className="text-white">cloud-native tooling</span>, and
            building the kind of internal platforms that let engineering teams
            move faster with more confidence.
          </p>
        </div>

        <div className="mt-12">
          <Social
            containerStyles="flex gap-4"
            iconStyles="w-9 h-9 border border-white/10 rounded-full flex justify-center items-center text-white/40 text-sm hover:border-accent/50 hover:text-accent transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
