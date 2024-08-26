import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-white dark:bg-slate-800 dark:text-white pt-20"
    >
      <div className="container md:w-[80%] sm:py-16 px-3">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
          <div className=" font-bold relative">
            <div className=" text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
              ABOUT
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              About me
            </h1>
          </div>
          <div className="text-slate-500">
            <p className="text-2xl text-justify dark:text-white/70">
              Web developer with strong ability determine IT solution for client
              projects. Developed exceptional skills in analytical and business
              modeling to be applied in analyzing the client requirements. Also
              having a keen ability to self -learn and apply learned stuff to
              relevant field. Good organization skills in both project and extra
              activities.
            </p>
            <div className="">
              <a
                href="../../assets/Fake Resume.pdf"
                className="primary-btn my-6 mr-6 inline-block"
                download
              >
                Download Resume
              </a>
              <a
                href="tel:+123456789"
                title="Call +123456789 "
                className="outline-btn my-6"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
