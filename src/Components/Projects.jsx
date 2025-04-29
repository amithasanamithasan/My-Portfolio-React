import FoodOrder from '../assets/FoodOrder.png'
import Car from '../assets/Car.png'
import Cleanhome from '../assets/Cleanhome.png'
import Health from '../assets/Health.png'
import Supercar from '../assets/Capture.png'
import Gragepro from '../assets/Gragepro.png'
import Fruits from '../assets/Fruits.png'

import Cards from './Cards'



const Projects = () => {
   

    const projectJson = [
      {
        title: 'Tasty-Delicious-Restaurant',
        desc: 'The team at Webelite Builders exceeded our expectations with their digital marketing expertise. Highly recommend!',
        image: FoodOrder,
        live: "https://tasty-delicious-restaurant.web.app/",
        ClientSide:"https://github.com/amithasanamithasan/Tasty-Delicious-Restaurant",
        ServerSide:"https://github.com/amithasanamithasan/Tasty-Delicious-Server"
      },
      {
        title: 'CarBuyCarSell',
        desc: '',
        Framework:'Next js',
        ToolsTecnology:'axios ,formik js-cookie, lucide-react, next next-auth ,react react-dom ,react-dropzone ,react-fast-marquee ,react-icons ,react-responsive-modal, react-spinners ,recharts, sharp yup',
        image:Car,
        live: "https://cu-car-f-amithasanfaysals-projects.vercel.app/",
        ClientSide: "https://github.com/amithasanamithasan/Cu.Car.F",
        ServerSide:""
      },
        {
          title: 'Clean-Home-Services',
          Framework:'React js',
          ToolsTecnology : 'HTML, CSS (Tailwind CSS, MUI, DaisyUI), React.js, Axios, React Router, Context Api,React Hook Form, .',
          image: Cleanhome,
          backend: "Node.js, Express.js, JWT, Interceptor, SSLCommerz payment integration.",
          live: "https://clean-home-services-24404.web.app/",
          ClientSide:"https://github.com/amithasanamithasan/Clean-Home-Services",
          ServerSide:"https://github.com/amithasanamithasan/Clean-Home-Server"
        },
        {
          title: 'Laxraous Car',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: Supercar,
          live: "https://animation-laxraous-car.vercel.app/",
          ClientSide: "https://github.com/amithasanamithasan/animation-laxraous-car"
        },
       
        {
          title: 'Garage-Pro-Solution',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: Gragepro,
          live: "https://garage-pro-solution-t4ie.vercel.app/",
          ClientSide: "https://github.com/amithasanamithasan/garage-pro-solution",
          ServerSide:"https://github.com/amithasanamithasan/car-repair-server"
        },
        {
          title: 'ReactHealthWellnessEvents',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: Health,
          live: "https://reacthealthwellnessevents.web.app/",
          ClientSide: "https://github.com/amithasanamithasan/ReactHealthWellnessEvents"
        },
       
        {
          title: 'Fruits-Burst',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: Fruits,
          live: "https://amithasanamithasan.github.io/fruits-burst-frontend/",
          ClientSide: "https://github.com/amithasanamithasan/fruits-burst-frontend"
        },
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
      <h2
  className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'
  data-aos="fade-right" 
  data-aos-duration="1000"
>
  My Projects
</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10' >
            {projectJson.map((items)=> {
                return <Cards item={items}/>
            })}
        </div>
      </div>
    </section>
    
  )
}

export default Projects
