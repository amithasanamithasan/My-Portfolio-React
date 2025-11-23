import { useState } from "react";
import FoodOrder from "../assets/FoodOrder.png";
import Car from "../assets/Car.png";
import Cleanhome from "../assets/Cleanhome.png";
import Health from "../assets/Health.png";
import Supercar from "../assets/Capture.png";
import Gragepro from "../assets/Gragepro.png";
import Fruits from "../assets/Fruits.png";
import donation from "../assets/donation.png";
import CryptoSphere from "../assets/Crypto-Sphere.png";
import newsportal from "../assets/newsportal.jpg";
import ums from "../assets/umsfrontend.png";

import Cards from "./Cards";

const Projects = () => {
  const projectJson = [
    {
      title: "Tasty-Delicious-Restaurant",
      Framework: "React js ,Tailwind css ,Firebase ,React Router Dom,JavaScript",
      Backend: "Node js Express js MongoDB",
      ToolsTecnology: "Figma, VS Code, Postman, Netlify, Heroku",
      category: "react",
      image: FoodOrder,
      live: "https://tasty-delicious-restaurant.web.app/",
      ClientSide:
        "https://github.com/amithasanamithasan/Tasty-Delicious-Restaurant",
      ServerSide:
        "https://github.com/amithasanamithasan/Tasty-Delicious-Server",
    },
      {
      title: "University-management-system",
      Framework: "React.js, TypeScript,Redux/TooLkit, tailwind css ,Zod ",
      Backend: "Node js Express js MongoDB",
       ToolsTecnology: "Figma, VS Code, Postman, Netlify, Heroku",
      category: "react",
      image: ums,
      live: "https://um-frontend.vercel.app",
      ClientSide:
        "https://github.com/amithasanamithasan/um-frontend",
      ServerSide:
        "https://github.com/amithasanamithasan/university-management-system",
    },
    {
      title: "CarBuyCarSell",
      Framework: "Next js Next Auth Tailwind css  ",
       ToolsTecnology: "Figma, VS Code, Postman, Netlify, Heroku",
      category: "next",
      image: Car,
      live: "https://cu-car-f-amithasanfaysals-projects.vercel.app/",
      ClientSide: "https://github.com/amithasanamithasan/Cu.Car.F",
    },
    {
      title: "Clean-Home-Services",
      Framework: "React js, JavaScript, Tailwind css, Firebase ,React Router Dom",
       Backend: "Node js Express js MongoDB",
        ToolsTecnology: "Figma, VS Code, Postman, Netlify, Heroku",
      category: "react",
      image: Cleanhome,
      live: "https://clean-home-services-24404.web.app/",
      ClientSide: "https://github.com/amithasanamithasan/Clean-Home-Services",
      ServerSide: "https://github.com/amithasanamithasan/Clean-Home-Server",
    },
    {
      title: "Laxraous Car",
      Framework: "React js, JavaScript, CSS,framer-motion,particles.js ,AOS",
       ToolsTecnology: "Figma, VS Code, Postman, Netlify, Heroku",
      category: "design",
      image: Supercar,
      live: "https://animation-laxraous-car.vercel.app/",
      ClientSide:
        "https://github.com/amithasanamithasan/animation-laxraous-car",
    },
    {
      title: "Donation_Campaing",
      Framework: "HTML,CSS,JavaScript,",
       ToolsTecnology: "Figma, VS Code, Postman, Netlify, Heroku",
      category: "design",
      image: donation,
      live: "https://famous-churros-ece2c3.netlify.app/",
      ClientSide: "https://github.com/amithasanamithasan/donation_campaing",
    },
    {
      title: "Garage-Pro-Solution",
      Framework: "Next js Tailwind css  next Auth, Firebase  ",
       ToolsTecnology: "Figma, VS Code, Postman, Netlify, Heroku",
      category: "next",
      image: Gragepro,
      live: "https://garage-pro-solution-t4ie.vercel.app/",
      ClientSide: "https://github.com/amithasanamithasan/garage-pro-solution",
      ServerSide: "https://github.com/amithasanamithasan/car-repair-server",
    },
    {
      title: "ReactHealthWellnessEvents",
      Framework: "React js, Tailwind css ,Firebase ,React Router Dom,JavaScript",
       ToolsTecnology: "Figma, VS Code, Postman, Netlify, Heroku",
      category: "react",
      image: Health,
      live: "https://reacthealthwellnessevents.web.app/",
      ClientSide:
        "https://github.com/amithasanamithasan/ReactHealthWellnessEvents",
    },
    {
      title: "Fruits-Burst",
      Framework: "HTML,CSS,JavaScript,tailwind css ",
       ToolsTecnology: "Figma, VS Code, Postman, Netlify, Heroku",
      category: "design",
      image: Fruits,
      live: "https://amithasanamithasan.github.io/fruits-burst-frontend/",
      ClientSide: "https://github.com/amithasanamithasan/fruits-burst-frontend",
    },
     {
      title: "Crypto-Sphere",
      Framework: "React.js,HTML,CSS,JavaScript,tailwind css, Css",
      category: "design",
      image:CryptoSphere,
      live: "https://66f2cf9146847235c0237dd0--soft-froyo-4c086e.netlify.app/#",
      ClientSide: "https://github.com/amithasanamithasan/Crypto-Sphere-project",
    },
    {
      title: "Bd-News-Portal",
      Framework: "React.js ,HTML,CSS,JavaScript,tailwind css, Css",
      category: "design",
      image:newsportal,
      live: "https://reactjs-news-portal-project.web.app/",
      ClientSide: "https://github.com/amithasanamithasan/bd-news-portal",
    },
       
  ];

  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All" },
    { id: "react", label: "MERN" },
    { id: "next", label: "Next.js" },
    { id: "design", label: "Design / UI" },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projectJson
      : projectJson.filter((item) => item.category === activeTab);

  return (
    <section id="projects" className="relative bg-gray-700 py-10 px-4">
      <div className="mb-16 max-w-7xl mx-auto">
        <h2
          className="text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          My Projects
        </h2>

        <div className="flex justify-center gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                activeTab === tab.id
                  ? "bg-red-500 text-white"
                  : "bg-gray-600 text-gray-200 hover:bg-gray-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
          {filteredProjects.map((items, idx) => (
            <Cards key={idx} item={items} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
