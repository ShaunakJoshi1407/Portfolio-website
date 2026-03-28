"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center py-12">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-0">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none max-w-xl">
            <p className="font-code text-xs uppercase tracking-[4px] text-accent/60 mb-4">
              Software Engineer @ HPE
            </p>

            <h1 className="h1 mb-4 text-white">
              <TypeAnimation
                sequence={[
                  "DevSecOps",
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
              />
            </h1>

            <p className="text-white/50 text-base leading-relaxed mb-10 max-w-[480px]">
              I build automation pipelines and manage cloud infrastructure that
              teams depend on — making systems more reliable, automated, and
              secure at Hewlett Packard Enterprise.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-6">
              <a
                href="https://drive.google.com/file/d/1CX9i6hnIIB12TJONcOoDOyHMHq_VPU_q/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-white text-black hover:bg-white/90 font-medium px-6 h-10 rounded-md flex items-center gap-2">
                  <span>Resume</span>
                  <FiDownload className="text-base" />
                </Button>
              </a>
              <Social
                containerStyles="flex gap-4"
                iconStyles="w-9 h-9 border border-white/10 rounded-full flex justify-center items-center text-white/40 text-sm hover:border-accent/50 hover:text-accent transition-all duration-300"
              />
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 xl:order-none">
            <Photo />
          </div>
        </div>

        {/* Stats */}
        <Stats />
      </div>
    </section>
  );
};

export default Home;
