import React from "react";
import ServicesBox from "./ServiceBox.jsx";

const Services = () => {
  return (
    <section
      id="services"
      className="bg-secondary dark:bg-gray-900 dark:text-white py-10"
    >
      <div className="container flex flex-col items-center">
        <h1 className="inline-block text-5xl text-center font-semibold mb-5 border-b-2 border-primary pb-1">
          Services
        </h1>
        <p className="text-slate-500 text-lg text-center md:w-[50%] mx-auto dark:text-white/70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet. Id,erroradipisicing elit. Id, error.
        </p>
      </div>
      <div>
        <ServicesBox />
      </div>
    </section>
  );
};

export default Services;
