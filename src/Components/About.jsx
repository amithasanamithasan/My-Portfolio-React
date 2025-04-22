
import MernStack from '../assets/mernstack.png'
import Html from '../assets/Html.png'
import Css from '../assets/CSS.png'
import Javascript from '../assets/JS.png'
import ReactLogo from '../assets/React.png'
import ReduxLogo from '../assets/Redux.png'
import Tailwind from '../assets/Tailwind Css.png'
import NodeLogo from '../assets/NodeLogo.png'
import Mongodb from '../assets/mongodb.svg'
import Express from '../assets/Express.png'
import NextJs from '../assets/NextJs.png'
import TypeScript from '../assets/TypeScript.png'
import Frontend from '../assets/Frontendlogo.png'
import Mysql from '../assets/Mysql.png'
import GITHUB from '../assets/GitHub (3).png'
import Postman from '../assets/Postman.png'
import Cprograming from '../assets/c.png'
import PHP from '../assets/PHP-logo.svg.png'


const About = () => {
    return (
        <div className='relative' id='about'>
            <div className='bg-gray-100 py-12'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center'>
                        <h2 className='text-base text-red-600 font-semibold tracking-wide uppercase'>About Me</h2>
                        <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>Hi, I am Amit Hasan Faysal</p>
                        <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
                        I am a professional with full-stack development capabilities and are proficient in the MERN stack (MongoDB, Express.js, React.js Next.js Typescript, Javascript and Node.js).
                        </p>
                    </div>
                    <div className='mt-10'>
                        <div className='grid grid-cols-12 gap-12 lg:grid-cols-2'>
                            <div>
                                <h3 className='text-2xl font-semibold text-gray-900'>My Journey</h3>
                                <p className='mt-4 text-lg text-gray-600'>
                                    I started my journey in web development with a passion for creating intuitive and scalable applications. With proficiency in the MERN stack (MongoDB, Express.js, React, and Node.js), I have built Projects such as a full-stack Clean-Home-Services,
                                    food ordering website , a garage-pro-solution,bd-news-portal,ReactHealthWellnessEvents ,and even a backend development  Blog-Project, university-management-system, CarStore . My projects demonstrate my ability to integrate poweful backend solutions with sleek, user-friendly frontend designs.
                                </p>
                                <img src={MernStack} alt="" className='p-2 rounded-lg w-50 mt-4' />
                            </div>
                             <div className='border border-red-200 rounded-lg md:p-4 py-7  flex flex-col gap-3 items-center shadow-lg shadow-red-300'>
                                <h3 className='text-2xl font-semibold text-red-600'>Skills & Expertise</h3>
                             
                                <div className="relative ">
 
  <span className="absolute -top-3 left-4 bg-white px-3 text-cyan-500 font-bold text-lg z-10">
  PROGRAMING LANGUAGE
  </span>

 
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border border-red-300 p-6 rounded-xl shadow-md shadow-red-300 bg-white">
    
   
    <div className="flex flex-col items-center gap-2 p-3  border-red-200 ">
      <img src={Cprograming} alt="CPROGRSMING" className="w-10" />
      <span className="font-semibold text-center">C</span>
    </div> 

    
    <div className="flex flex-col items-center gap-2 p-3  border-red-200">
      <img src={Javascript} alt="JavaScript" className="w-10" />
      <span className="font-semibold text-center">JavaScript</span>
    </div>

   
    <div className="flex flex-col items-center gap-2 p-3  border-red-200">
      <img src={PHP} alt="PHP" className="w-10" />
      <span className="font-semibold text-center">PHP</span>
    </div>

  
    <div className="flex flex-col items-center gap-2 p-3  border-red-200">
      <img src={TypeScript} alt="TypeScript" className="w-10" />
      <span className="font-semibold text-center">TYPESCRIPT</span>
    </div>



    
  </div>
</div>
    <div className="relative ">

  <span className="absolute -top-3 left-4 bg-white px-3 text-cyan-500 font-bold text-lg z-10">
    FRONTEND
  </span>

 
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border border-red-300 p-6 rounded-xl shadow-md shadow-red-300 bg-white">
    
   
    <div className="flex flex-col items-center gap-2 p-3  border-red-200 ">
      <img src={Html} alt="HTML" className="w-10" />
      <span className="font-semibold text-center">HTML</span>
    </div> 

    <div className="flex flex-col items-center gap-2 p-3  border-red-200">
      <img src={Javascript} alt="JavaScript" className="w-10" />
      <span className="font-semibold text-center">JavaScript</span>
    </div>


    <div className="flex flex-col items-center gap-2 p-3  border-red-200">
      <img src={Css} alt="CSS" className="w-10" />
      <span className="font-semibold text-center">CSS</span>
    </div>

   
    <div className="flex flex-col items-center gap-2 p-3  border-red-200">
      <img src={Tailwind} alt="Tailwind CSS" className="w-10" />
      <span className="font-semibold text-center">Tailwind CSS</span>
    </div>



    
  </div>
</div>
<div className="relative ">
 
  <span className="absolute -top-3 left-4 bg-white px-3 text-cyan-500 font-bold text-lg z-10">
  BACKEND
  </span>

 
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border border-red-300 p-6 rounded-xl shadow-md shadow-red-300 bg-white">
 
    <div className="flex flex-col items-center gap-2 p-3  border-red-200 ">
      <img src={NodeLogo} alt="NodeLogo" className="w-10" />
      <span className="font-semibold text-center">NODE JS</span>
    </div> 

   
    <div className="flex flex-col items-center gap-2 p-3  border-red-200">
      <img src={Express} alt="Express" className="w-10" />
      <span className="font-semibold text-center">EXPRESS JS</span>
    </div>

   

   



    
  </div>
</div>

<div className="relative mb-3 ">
  
  <span className="absolute -top-3 left-4 bg-white px-3 text-cyan-500 font-bold text-lg z-10">
    Framework
  </span>

  
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border border-red-300 p-6 rounded-xl shadow-md shadow-red-300 bg-white">
    
    
    <div className="flex flex-col items-center gap-2 p-3  border-red-200 ">
      <img src={ReactLogo} alt="ReactLogo" className="w-10" />
      <span className="font-semibold text-center">REACT</span>
    </div> 

    <div className="flex flex-col items-center gap-2 p-3  border-red-200">
      <img src={NextJs} alt="NextJs" className="w-10" />
      <span className="font-semibold text-center">NEXT JS</span>
    </div>

   
    <div className="flex flex-col items-center gap-2 p-3  border-red-200">
      <img src={ReduxLogo} alt="REDUX" className="w-10" />
      <span className="font-semibold text-center">REDUX STATE MANAGEMENT</span>
    </div>


    
  </div>
  
</div>
<div className="relative mb-3 ">
  
  <span className="absolute -top-3 left-4 bg-white px-3 text-cyan-500 font-bold text-lg z-10">
    Database
  </span>

  
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border border-red-300 p-6 rounded-xl shadow-md shadow-red-300 bg-white">
    
    
    <div className="flex flex-col items-center gap-2 p-3  border-red-200 ">
      <img src={Mongodb} alt="Mongodb" className="w-10" />
      <span className="font-semibold text-center">MONGODB</span>
    </div> 

    <div className="flex flex-col items-center gap-2 p-3  border-red-200">
      <img src={Mysql} alt="Mysql" className="w-10" />
      <span className="font-semibold text-center">MySQL</span>
    </div>

   



    
  </div>
  
</div>
<div className="relative mb-3 ">
  
  <span className="absolute -top-3 left-4 bg-white px-3 text-cyan-500 font-bold text-lg z-10">
   Version control system/Developing APIs
  </span>

  
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border border-red-300 p-6 rounded-xl shadow-md shadow-red-300 bg-white">
    
  <div className="flex flex-col items-center gap-2 p-3  border-red-200 ">
      <img src={GITHUB} alt="GITHUB" className="w-10" />
      <span className="font-semibold text-center">GITHUB</span>
    </div> 
    <div className="flex flex-col items-center gap-2 p-3  border-red-200 ">
      <img src={Postman} alt="POSTMAN" className="w-10" />
      <span className="font-semibold text-center">POSTMAN</span>
    </div> 
   


    
  </div>
  
</div>



                            </div>
                            
                        </div>
                    </div>
                    <div className='mt-12'>
                        <h3 className='text-2xl font-semibold text-gray-900'>More About Me</h3>
                        <p className='mt-4 text-lg text-gray-600'>
                        I am a focused and skilled Frontend Developer i loves creating responsive and user-friendly applications with
attention to design. I am experienced with modern frontend tools like JavaScript, React.js, Next.js, and
Tailwind CSS for smooth user experiences. I am also knowledgeable in full-stack development, with a solid
understanding of backend tools like Node.js and Express.js. I am committed to delivering high-quality work
and constantly learning new technologies.
                        </p>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default About
