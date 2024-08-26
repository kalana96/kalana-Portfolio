import React from "react";
import { AiFillLayout } from "react-icons/ai";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { MdSecurity } from "react-icons/md";
import imgWeb from "../../assets/webDesign.jpg";
import imgWebApp from "../../assets/webApp.jpg";
import imgWinApp from "../../assets/winApp.jpg";
import imgSec from "../../assets/security.jpg";

const Services = [
  {
    name: "Web Design",
    description:
      "Creating visually appealing, user-friendly, and responsive websites. My designs focus on ensuring a seamless user experience across all devices, whether it’s a desktop, tablet, or smartphone.",
    image: imgWeb,
    icon: <AiFillLayout className="text-4xl text-blue-300 animate-bounce" />,
    bgColor: "bg-black/70", // Semi-transparent black overlay
  },
  {
    name: "Web App Development",
    description:
      "I specialize in developing robust and scalable web applications tailored to meet your specific business needs. Whether you need a simple content management system, a complex e-commerce platform, or a custom web solution.",
    image: imgWebApp,
    icon: (
      <MdOutlinePhoneAndroid className="text-4xl text-green-300 animate-bounce" />
    ),
    bgColor: "bg-black/70", // Semi-transparent black overlay
  },
  {
    name: "Windows Application Development",
    description:
      "Windows application development services to create powerful desktop applications that run smoothly on Windows operating systems. Whether you need a standalone application for your business or a desktop tool that integrates with other systems.",
    image: imgWinApp,
    icon: (
      <HiMiniComputerDesktop className="text-4xl text-pink-300 animate-bounce" />
    ),
    bgColor: "bg-black/70", // Semi-transparent black overlay
  },
  {
    name: "Security",
    description:
      "I provide comprehensive security services to protect your web and desktop applications from potential threats and vulnerabilities. My approach to security is proactive, focusing on identifying and mitigating risks before they can be exploited.",
    image: imgSec,
    icon: <MdSecurity className="text-4xl text-orange-300 animate-bounce" />,
    bgColor: "bg-black/70", // Semi-transparent black overlay
  },
];

const ServicesBox = () => {
  return (
    <section className="my-10 container">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Services.map(({ name, description, image, icon, bgColor }) => (
          <div
            key={name}
            className={`relative ${bgColor} rounded-xl text-white transform transition duration-500 hover:scale-105 hover:brightness-110 flex flex-col`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "overlay",
            }}
          >
            <div className="p-3 md:p-16 flex-grow flex flex-col justify-between">
              <div>
                {icon}
                <h1 className="text-2xl font-bold text-gray-100 mb-5 border-b-2 border-spacing-2 pb-1">
                  {name}
                </h1>
                <p className="text-gray-300 text-justify">{description}</p>
              </div>
              {/* See More Button */}
              <div className="mt-4">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesBox;
