import React from "react";
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import contact from "../assets/Contact.json";
import Footer from "./Footer";

// Validation schema using Yup
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  message: yup.string().required("Message is required"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

 const onSubmit = (data) => {
  console.log("Form data:", data);
  alert("Message sent successfully!");
  reset();
};
  return (
    <section
      id="contact"
      className="z-50 bg-gray-800 relative py-10 px-5 md:px-0"
    >
      <div className="mb-16 max-w-7xl mx-auto">
        <p className="text-5xl text-red-500 text-center font-semibold">
          Contact Me
        </p>

        <div className="flex flex-col md:flex-row justify-between items-center mt-10">
          <div className="md:w-1/2 mb-20 md:mb-0">
            <Lottie
              animationData={contact}
              className="w-[350px] mx-auto lg:w-[500px]"
            />
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full md:w-1/2 bg-gray-900 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10"
          >
            <h1 className="text-gray-900 text-4xl font-bold mb-7">
              Contact Me
            </h1>

            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                Name <span>*</span>
              </label>
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                {...register("name")}
                className={`mt-1 p-2 block w-full rounded-md border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                Email <span>*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                {...register("email")}
                className={`mt-1 p-2 block w-full rounded-md border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                Message <span>*</span>
              </label> 
              <textarea
                id="message"
                placeholder="Enter Your Message"
                {...register("message")}
                className={`mt-1 p-2 block w-full rounded-md border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-red-500 text-white px-3 py-2 rounded-lg cursor-pointer hover:bg-violet-900 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        <Footer />
      </div>
    </section>
  );
};

export default Contact;
