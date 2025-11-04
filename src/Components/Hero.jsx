import profilepic from "../assets/profilepic.png";
import reactLogo from "../assets/React.png";
import reduxLogo from "../assets/Redux.png";
import tailwind from "../assets/Tailwind Css.png";
import SocialMediaDropdown from "./SocialMediaDropdown";
import NextJs from "../assets/NextJs.png";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import {professionTexts } from "../data";
const Hero = () => {

    const [currentText, setcurrentText] = useState(professionTexts[0]);
     const [isRotating, setIsRoating] = useState(false);
    let currentIndex = 0;
    useEffect(() => {
    const interval = setInterval(() => {
      setIsRoating(true);
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % professionTexts.length;
        setcurrentText(professionTexts[currentIndex]);
        setIsRoating(false);
      }, 200);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative ">
      <div className="max-w-7xl mx-auto  py-10">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10">
            {/* <h1 className="lg:text-5xl text-4xl  lg:leading-snug font-stretch-50% ">
              Hi There, <br />I am Amit Hasan{" "}
              <span className="text-cyan-800 font-stretch-20%"> Faysal</span>
            </h1> */}
              <span className="xl:text-6xl md:text-4xl text-2xl tracking-wider  xl:py-4 py-2 overflow-hidden">
            I'am{" "}
            <span
              className={`inline-block xl:w-[380px] md:w-[240px] w-[160px] lg:ml-5 ml-2 text-cyan-200 
                font-extrabold transform origin-left transition-transform duration-300 ease-out${
                isRotating ? "rotate-[100deg]" : "rotate-0"
              }`}
            >
              {" "}
              {currentText}
            </span>
            Web Developer
          </span>
            <p className="mb-4 font-mono text-2xl">
               Hi There,I am <span className="text-yellow-400 font-stretch-20%"> Amit Hasan Faysal</span>.
               <br />
              I am a passionate web developer with expertise in React, Next.js,
              and modern web technologies. I love creating beautiful and
              functional website that solve problems.
            </p>
            <button className="bg-[#391752] text-white px-3 py-2 w-max rounded-md">
              <a
                href="https://drive.google.com/file/d/1LBMHWpTgTGkvCTcHYiU8JQRCHb5-SRl8/view?usp=sharing"
                download
                target="_blank"
              >
                <Lottie /> Download CV
              </a>
            </button>
          </div>
          <div className="md:w-1/2 relative flex justify-center items-end ">
            <img
              src={profilepic}
              alt="Rounded avatar"
              className="lg:h-[70vh] h-60 w-[1200px] rounded-full py-6 z-10 opacity-100  mt-65  "
            />

            <img
              src={reactLogo}
              alt="reactLogo"
              className="absolute w-10 top-36 left-0 rounded-full md:hidden"
            />
            <img
              src={reduxLogo}
              alt="reduxLogo"
              className="absolute w-10 top-0 right-5 md:hidden"
            />
            <img
              src={tailwind}
              alt="tailwind"
              className="absolute w-10 rounded-full right-0 bottom-36 md:hidden"
            />
            <img
              src={NextJs}
              alt="NextJs"
              className="absolute w-10 rounded-full right-0 bottom-36 md:hidden"
            />
          </div>
        </div>
      </div>

      <SocialMediaDropdown />
    </section>
  );
};

export default Hero;
