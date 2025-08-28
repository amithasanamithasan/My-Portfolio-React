import { useState } from "react";
import FoodOrder from "../assets/FoodOrder.png";
import Car from "../assets/Car.png";
import Cleanhome from "../assets/Cleanhome.png";
import Health from "../assets/Health.png";
import Supercar from "../assets/Capture.png";
import Gragepro from "../assets/Gragepro.png";
import Fruits from "../assets/Fruits.png";
import donation from "../assets/donation.png";

import Cards from "./Cards";

const Projects = () => {
  const projectJson = [
    {
      title: "Tasty-Delicious-Restaurant",
      Framework: "React js",
      category: "react",
      image: FoodOrder,
      live: "https://tasty-delicious-restaurant.web.app/",
      ClientSide:
        "https://github.com/amithasanamithasan/Tasty-Delicious-Restaurant",
      ServerSide:
        "https://github.com/amithasanamithasan/Tasty-Delicious-Server",
    },
    {
      title: "CarBuyCarSell",
      Framework: "Next js",
      category: "next",
      image: Car,
      live: "https://cu-car-f-amithasanfaysals-projects.vercel.app/",
      ClientSide: "https://github.com/amithasanamithasan/Cu.Car.F",
    },
    {
      title: "Clean-Home-Services",
      Framework: "React js",
      category: "react",
      image: Cleanhome,
      live: "https://clean-home-services-24404.web.app/",
      ClientSide: "https://github.com/amithasanamithasan/Clean-Home-Services",
      ServerSide: "https://github.com/amithasanamithasan/Clean-Home-Server",
    },
    {
      title: "Laxraous Car",
      Framework: "React js",
      category: "design",
      image: Supercar,
      live: "https://animation-laxraous-car.vercel.app/",
      ClientSide:
        "https://github.com/amithasanamithasan/animation-laxraous-car",
    },
    {
      title: "Donation_Campaing",
      Framework: "React js",
      category: "design",
      image: donation,
      live: "https://famous-churros-ece2c3.netlify.app/",
      ClientSide: "https://github.com/amithasanamithasan/donation_campaing",
    },
    {
      title: "Garage-Pro-Solution",
      Framework: "Next js",
      category: "next",
      image: Gragepro,
      live: "https://garage-pro-solution-t4ie.vercel.app/",
      ClientSide: "https://github.com/amithasanamithasan/garage-pro-solution",
      ServerSide: "https://github.com/amithasanamithasan/car-repair-server",
    },
    {
      title: "ReactHealthWellnessEvents",
      Framework: "React js",
      category: "react",
      image: Health,
      live: "https://reacthealthwellnessevents.web.app/",
      ClientSide:
        "https://github.com/amithasanamithasan/ReactHealthWellnessEvents",
    },
    {
      title: "Fruits-Burst",
      Framework: "React.js",
      category: "design",
      image: Fruits,
      live: "https://amithasanamithasan.github.io/fruits-burst-frontend/",
      ClientSide: "https://github.com/amithasanamithasan/fruits-burst-frontend",
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
