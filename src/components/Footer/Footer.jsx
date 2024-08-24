import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaLocationArrow,
  FaMobileAlt,
  FaMailBulk,
} from "react-icons/fa";
// import footerLogo from "../../assets/website/logo.png";

const FooterLinks = [
  {
    title: "Home",
    link: "/#home",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Services",
    link: ".#services",
  },
  {
    title: "Skills",
    link: "/#skills",
  },
  {
    title: "Education",
    link: "/#education",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
];
const Footer = () => {
  return (
    <div className="bg-gray-200 dark:bg-gray-950">
      <section className="container">
        <div className=" grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3  text-black/80 dark:text-white">
              {/* <img src={footerLogo} alt="Logo" className="max-w-[50px]" /> */}
              Portfolio
            </h1>
            <p className="text-black/75 dark:text-white/70">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Possimus, voluptate.{" "}
            </p>
            <br />
            <div className="flex items-center gap-3 text-black/75 dark:text-white/70">
              <FaLocationArrow />
              <p className="">Eheliyagoda, Sri Lanka</p>
            </div>
            <div className="flex items-center gap-3 mt-3 text-black/75 dark:text-white/70">
              <FaMailBulk />
              <p className="">kalanasandeep55@gmail.com</p>
            </div>
            <div className="flex items-center gap-3 mt-3 text-black/75 dark:text-white/70">
              <FaMobileAlt />
              <p className="">+94 716366023</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6 text-black/75 dark:text-white/70">
              <a href="https://www.linkedin.com/in/kalana-abeywickrama-575aa81b3">
                <FaLinkedin className="text-3xl" />
              </a>
              <a href="https://github.com/kalana96">
                <FaGithub className="text-3xl" />
              </a>
              <a href="https://www.instagram.com/kalana_sndp?igsh=MWR0dHdkczdxMTJ2dQ%3D%3D&utm_source=qr">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="https://www.facebook.com/kalana.sandeep?mibextid=LQQJ4d">
                <FaFacebook className="text-3xl" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3  text-black/80 dark:text-white">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  {FooterLinks.map((link) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3  text-black/80 dark:text-white">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3  text-black/80 dark:text-white">
                  Location
                </h1>
                {/* <ul className="list-disc list-inside"> */}
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50  dark:text-white/70">
            copyright @ 2024 All rights reserved || Made with by Kalana
            Abeywickrama
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
