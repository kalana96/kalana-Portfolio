import React from "react";
import Typewriter from "./TypeWriter.jsx";
import personImg from "../../assets/mypic.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="w-full bg-secondary dark:bg-gray-900 dark:text-white"
      >
        <div className="container grid grid-cols-1 sm:grid-cols-2 items-center sm:h-[600px] space-y-4 py-12 sm:py-0 ">
          <div className="">
            <div className="space-y-5 grid justify-items-center sm:justify-items-start">
              <p className=" ">Hello...</p>
              <p className="text-4xl md:text-6xl font-bold text-black/80 dark:text-white">
                I'm Kalana Abeywickrama
              </p>
              <p className="text-3xl text-gray-700 dark:text-white">
                I am a <Typewriter />
              </p>
              <p className="text-black/75 dark:text-white/70 text-center sm:text-left">
                I am a motivated and versatile individual, always eager to take
                on new challenges. With a passion for learning I am dedicated to
                delivering high-quality results. With a positive attitude and a
                growth mindset, I am ready to make a meaningful contribution and
                achieve great things.
              </p>
              {/* Social Handle */}
              <div className="flex items-center gap-3 mt-6 text-black/75 dark:text-white/70">
                <a
                  href="https://www.linkedin.com/in/kalana-abeywickrama-575aa81b3"
                  className="hover:translate-x-1 duration-300"
                >
                  <FaLinkedin className="text-3xl" />
                </a>
                <a
                  href="https://github.com/kalana96"
                  className="hover:translate-x-1 duration-300"
                >
                  <FaGithub className="text-3xl" />
                </a>
                <a
                  href="https://www.instagram.com/kalana_sndp?igsh=MWR0dHdkczdxMTJ2dQ%3D%3D&utm_source=qr"
                  className="hover:translate-x-1 duration-300"
                >
                  <FaInstagram className="text-3xl" />
                </a>
                <a
                  href="https://www.facebook.com/kalana.sandeep?mibextid=LQQJ4d"
                  className="hover:translate-x-1 duration-300"
                >
                  <FaFacebook className="text-3xl" />
                </a>
              </div>
              <br />
              <a
                href="mailto:kalanasandeep55@gmail.com"
                className="inline-block primary-btn !my-3"
              >
                Hire me
              </a>
            </div>
          </div>
          {/* image section */}
          {/* <div
            className={`bg-[url("https://source.unsplash.com/random")] bg-no-repeat bg-center bg-cover `}
          > */}
          <div>
            <img
              src={personImg}
              className="w-full md:max-w-sm mx-auto backdrop-blur-sm"
              alt="person"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
