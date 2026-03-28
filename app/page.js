"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <section className="h-full py-6 md:py-0">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <p className="text-white/60 text-sm uppercase tracking-[4px] mb-3">
              Software Engineer @ HPE
            </p>

            <h1 className="h1 mb-6">
              <TypeAnimation
                sequence={[
                  "DevSecOps Engineer",
                  2500,
                  "Kubernetes & Cloud",
                  2500,
                  "Distributed Systems",
                  2500,
                  "CI/CD Automation",
                  2500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-accent"
              />
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80 text-base leading-relaxed">
              I build automation pipelines and manage cloud infrastructure that
              teams depend on. From streamlining Kubernetes workflows to driving{" "}
              <span className="text-accent font-medium">DevSecOps</span>{" "}
              initiatives — I focus on making systems more reliable, automated,
              and secure at{" "}
              <span className="text-accent font-medium">
                Hewlett Packard Enterprise
              </span>
              .
            </p>

            {/* buttons and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="https://drive.google.com/file/d/1CX9i6hnIIB12TJONcOoDOyHMHq_VPU_q/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="flex uppercase items-center gap-2 px-8"
                >
                  <span>Resume</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <Social
                containerStyles="flex gap-6"
                iconStyles="w-11 h-11 border border-accent rounded-full flex
                  justify-center items-center text-accent text-lg hover:bg-accent
                  hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-12 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <Stats />
    </section>
  );
};

export default Home;
