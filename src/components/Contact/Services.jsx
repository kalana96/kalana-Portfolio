import React from "react";
import ContactForm from "./ContacFormt";

const Services = () => {
  return (
    <section
      id="contact"
      className="bg-secondary dark:bg-gray-900 dark:text-white py-10"
    >
      <div className="container flex flex-col items-center">
        <h1 className="inline-block text-3xl text-center font-bold mb-3 border-b-2 border-primary pb-1">
          Contact
        </h1>
        <p className="text-slate-500 text-center md:w-[50%] mx-auto">
          Feel free to reach out to me for any questions or opportunities!
        </p>
      </div>
      <br />
      <br />
      <div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Services;
