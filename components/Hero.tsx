import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { Spotlight } from "./ui/Spotlight";
import PrimeButton from "./ui/PrimeButton";
import { SlActionRedo } from "react-icons/sl";

const Hero = () => {
  return (
    <div className="pb-20 pt-6">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="top-10 left-full h-[80vh] w-[50]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50] " fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-small-white/[0.3] bg-grid-small-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        {/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Backgrounds
        </p> */}
      </div>

      <div className="flex justify-center relative my-20">
        <div className="max-w-[89vh] md:max-w-2xl lg:max-w-[60] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-l text-center text-blue-100 max-w-80">
            Dynamic web with next.JS
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transformig Concepts into Seamless Experiences"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Shkelqim Full-stack developer
          </p>
          <a href="#about">
            {" "}
            <PrimeButton
              title="Show my work  "
              icon={<SlActionRedo />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
