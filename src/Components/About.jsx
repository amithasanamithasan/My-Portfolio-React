import Skill from "./Skill";

const About = () => {
  
    return (
        <div className='relative' id='about'>
            <div className='bg-gray-100 py-12'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                   
                    <div className='text-center' data-aos="fade-up" data-aos-duration="1000">
                        <h2 className='text-base text-red-600 font-semibold tracking-wide uppercase'>
                            About Me
                        </h2>
                        <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                            Hi, I am Amit Hasan Faysal
                        </p>
                        <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
                            I am a professional with full-stack development capabilities and am proficient in the MERN stack (MongoDB, Express.js, React.js, Next.js, Typescript, Javascript, and Node.js).
                        </p>
                    </div>

                   
                    <div id="skill" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                        <Skill />
                    </div>

                    <div className='mt-12' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                        <h3 className='text-2xl font-semibold text-gray-900'>More About Me</h3>
                        <p className='mt-4 text-lg text-gray-600'>
                            I am a focused and skilled Frontend Developer who loves creating responsive and user-friendly applications with attention to design. I'm experienced with modern frontend tools like JavaScript, React.js, Next.js, and Tailwind CSS for smooth user experiences. I also have knowledge in full-stack development, with a solid understanding of backend tools like Node.js and Express.js. I’m committed to delivering high-quality work and constantly learning new technologies.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
