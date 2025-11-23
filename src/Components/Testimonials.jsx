// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Dynamicflow IT",
      position: "Junior Web Developer",
      year: "May 2025 – Nov 2025",
      text: "Developed responsive and interactive UIs using React.js, JavaScript, and Tailwind CSS. Integrated Laravel-based REST APIs, built reusable components, optimized performance, and contributed to dashboards, forms, authentication flows, and state management. Implemented print-ready views, performed cross-browser testing, and supported UX-focused UI redesigns."
    },
    {
      id: 2,
      name: "Luminous Labs",
      year: "January 2021 – March 2021",
      position: "Web Development Intern",
      text: "Participated in the full web development lifecycle and ongoing project maintenance. Used Git for version control and task collaboration. Integrated modern frameworks to enhance application performance and functionality, and utilized Laravel to build and visualize web applications."
    },
    {
      id: 3,
      name: "Mesleap",
      year: "September 2024 – October 2024",
      position: "Web Development (Intern — Full Time)",
      text: "Collaborated with designers and backend developers to integrate APIs and build user-facing features using HTML, CSS, JavaScript, and React.js/Next.js. Developed reusable components with Tailwind CSS and practiced Git-based version control while contributing to code reviews."
    },
  ];

  return (
    <div id="testimonials" className="py-10 bg-gray-700 relative">
      <h1 className="text-center text-2xl lg:text-4xl font-bold text-white">
        Working Experience
      </h1>

      <div className="max-w-6xl mx-auto py-10 px-5">
        <Swiper
          style={{
            "--swiper-pagination-color": "#EF4444",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
          modules={[Pagination, Autoplay]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          className="mySwiper"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="border border-gray-500 bg-white shadow-lg rounded-lg p-6 h-full flex flex-col justify-between">
                
        
                <div className="flex justify-end">
                  <Quote className="text-red-500 w-10 h-10 opacity-90" />
                </div>

                <div className="text-center h[250px]">
                  <h3 className="text-2xl font-bold text-gray-900">{item.name}</h3>
                  <p className="text-xl font-semibold text-violet-700 mt-1">{item.position}</p>
                  <p className="text-sm text-gray-800">{item.year}</p>

                  <p className="mt-4 text-gray-700 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-pagination my-10"></div>
      </div>
    </div>
  );
};

export default Testimonials;
