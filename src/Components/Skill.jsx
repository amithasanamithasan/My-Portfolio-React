import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MernStack from '../assets/mernstack.png';
import Html from '../assets/Html.png';
import Css from '../assets/CSS.png';
import Javascript from '../assets/JS.png';
import ReactLogo from '../assets/React.png';
import ReduxLogo from '../assets/Redux.png';
import Tailwind from '../assets/Tailwind Css.png';
import NodeLogo from '../assets/NodeLogo.png';
import Mongodb from '../assets/mongodb.svg';
import Express from '../assets/Express.png';
import NextJs from '../assets/NextJs.png';
import TypeScript from '../assets/TypeScript.png';

const Skill = () => {
  // Initialize AOS when component mounts
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <div className='mt-10'>
      <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
        <div>
          <h3 className='text-2xl font-semibold text-gray-900' data-aos="fade-right">
            My Journey
          </h3>
          <p className='mt-4 text-lg text-gray-600' data-aos="fade-right" data-aos-delay="100">
            I started my journey in web development with a passion for creating intuitive and scalable applications. With proficiency in the MERN stack (MongoDB, Express.js, React, and Node.js), I have built Projects such as a full-stack Clean-Home-Services, food ordering website, a garage-pro-solution, bd-news-portal, ReactHealthWellnessEvents, and even a backend development Blog-Project, university-management-system, CarStore. My projects demonstrate my ability to integrate powerful backend solutions with sleek, user-friendly frontend designs.
          </p>
          <img 
            src={MernStack} 
            alt="MERN Stack" 
            className='p-2 rounded-lg w-52 mt-4' 
            data-aos="zoom-in" 
            data-aos-delay="200"
          />
        </div>
        
        <div 
          className='border border-red-200 rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-lg shadow-red-300'
          data-aos="fade-left"
        >
          <h3 className='text-2xl font-semibold text-red-600' data-aos="fade-up" data-aos-delay="100">
            Skills & Expertise
          </h3>
          
          <div className='flex items-center justify-center flex-wrap gap-3'>
            {[
              { icon: Html, name: 'HTML' },
              { icon: Css, name: 'CSS' },
              { icon: Tailwind, name: 'Tailwind CSS' },
              { icon: Javascript, name: 'JavaScript' },
              { icon: ReactLogo, name: 'React' },
              { icon: NextJs, name: 'Next.js' },
              { icon: ReduxLogo, name: 'Redux' },
              { icon: NodeLogo, name: 'Node.js' },
              { icon: Express, name: 'Express.js' },
              { icon: Mongodb, name: 'MongoDB' },
              { icon: TypeScript, name: 'TypeScript' }
            ].map((skill, index) => (
              <div 
                key={skill.name}
                className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'
                data-aos="zoom-in"
                data-aos-delay={100 + (index * 50)}
              >
                <img src={skill.icon} alt={skill.name} className='w-8 h-8 object-contain' />
                <span className='font-semibold'>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;