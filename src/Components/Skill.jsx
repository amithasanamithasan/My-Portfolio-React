import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MernStack from "../assets/mernstack.png";
import ReduxLogo from "../assets/Redux.png";
import Tailwind from "../assets/Tailwind Css.png";
import NodeLogo from "../assets/NodeLogo.png";
import Mongodb from "../assets/mongodb.svg";
import Express from "../assets/Express.png";
import TypeScript from "../assets/TypeScript.png";
import Lottie from "lottie-react";
import React from "../assets/react.json";
import Html from "../assets/html.json";
import Css from "../assets/css.json";
import Next from "../assets/nextjs.json";
import JavaSc from "../assets/javascript.json";
import Laravel from "../assets/laravel_banner-300x300-1.webp";
const skills = [
  { icon: "lottie", name: "Html" },
  { icon: "lottie", name: "Css" },
  { icon: Tailwind, name: "Tailwind CSS" },
  { icon: "lottie", name: "JavaScript" },
  { icon: "lottie", name: "React" },
  { icon: "lottie", name: "Next.js" },
  { icon: ReduxLogo, name: "Redux" },
  { icon: NodeLogo, name: "Node.js" },
  { icon: Express, name: "Express.js" },
  { icon: Mongodb, name: "MongoDB" },
  { icon: TypeScript, name: "TypeScript" },
  { icon: Laravel, name: "Laravel" },
];
const Skill = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h3
            className="text-2xl font-semibold text-gray-200"
            data-aos="fade-right"
          >
            My Journey
          </h3>
          <p
            className="mt-4 text-lg text-gray-200"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            I started my journey in web development with a passion for creating
            intuitive and scalable applications. With proficiency in the MERN
            stack (MongoDB, Express.js, React, and Node.js), I have built
            Projects such as a full-stack Clean-Home-Services, food ordering
            website, a garage-pro-solution, bd-news-portal,
            ReactHealthWellnessEvents, and even a backend development
            Blog-Project, university-management-system, CarStore. My projects
            demonstrate my ability to integrate powerful backend solutions with
            sleek, user-friendly frontend designs.
          </p>
          <img
            src={MernStack}
            alt="MERN Stack"
            className="p-2 rounded-lg w-52 mt-4"
            data-aos="zoom-in"
            data-aos-delay="200"
          />
        </div>

        <div
          className="border border-red-200 rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-lg shadow-red-300"
          data-aos="fade-left"
        >
          <h3
            className="text-2xl font-semibold text-red-600"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Skills & Expertise
          </h3>

          <div className="flex items-center justify-center flex-wrap gap-3">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300"
                data-aos="zoom-in"
                data-aos-delay={100 + index * 50}
              >
                {skill.name === "React" ? (
                  <Lottie
                    animationData={React}
                    className="h-15 w-15  rounded-md"
                  />
                ) : skill.name === "Html" ? (
                  <Lottie
                    animationData={Html}
                    className="h-15 w-15 rounded-md"
                  />
                ) : skill.name === "Css" ? (
                  <Lottie
                    animationData={Css}
                    className="h-15 w-15 rounded-md"
                  />
                ) : skill.name === "Next.js" ? (
                  <Lottie
                    loop={true}
                    animationData={Next}
                    className="h-15 w-15 rounded-md"
                  />
                ) : skill.name === "JavaScript" ? (
                  <Lottie
                    animationData={JavaSc}
                    className="h-15 w-15 rounded-md"
                  />
                ) : (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="h-15 w-15 rounded "
                  />
                )
                
                }
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
