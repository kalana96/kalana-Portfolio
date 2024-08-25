import React from "react";
import ServicesBox from "./ServiceBox.jsx";

const Services = () => {
  return (
    <section
      id="services"
      className="bg-secondary dark:bg-gray-900 dark:text-white py-20"
    >
      <div className="container flex flex-col items-center">
        <h1 className="inline-block text-5xl text-center font-semibold mb-5 border-b-2 border-primary pb-1">
          Services
        </h1>
        <p className="text-slate-500 text-lg text-center md:w-[50%] mx-auto dark:text-white/70">
          I offer end-to-end software development services, specializing in
          creating dynamic and responsive web applications, robust backend
          systems, and efficient desktop applications.
        </p>
      </div>
      <div>
        <ServicesBox />
      </div>
    </section>
  );
};

export default Services;
