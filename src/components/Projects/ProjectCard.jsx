import React from "react";
import imgSwingInventory from "../../assets/SwingInventory.png";
import imgLaravelInventory from "../../assets/laravel inventory.png";
import imgJavaRMS from "../../assets/RMS.png";
import imgOEM from "../../assets/OEM.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

const project = [
  {
    image: imgOEM,
    keyTags: [
      "Java",
      "Spring Boot",
      "MySQL",
      "Spring Security",
      "React",
      "Tailwind CSS",
      "HTMS",
      "CSS",
    ],
    topic: "Online Examination System",
    description:
      "A web-based platform for conducting online exams, with a focus on scalability and user experience. User authentication, timed exams, auto-grading system and offline data synchronization... ",
    links: [
      {
        webLink: "https://facebook.com",
      },
      {
        githubLink: "https://github.com/PCSB-Web-Team/online-judge-server",
      },
    ],
  },
  {
    image: imgJavaRMS,
    keyTags: ["Java", "Spring", "MySQL"],
    topic: "Restaurant Management System",
    description:
      "A desktop application for managing restaurant orders, billing, Table management and inventory. Developed a custom table management system to handle peak hours efficiently.... ",
    links: [
      {
        webLink: "https://facebook.com",
      },
      {
        githubLink: "https://github.com/PCSB-Web-Team/online-judge-server",
      },
    ],
  },
  {
    image: imgLaravelInventory,
    keyTags: ["HTML", "CSS", "Bootstrap", "Laravel", "PHP", "MySQL"],
    topic: "Vehicle Rental Management System",
    description:
      " A comprehensive Vehicle Rental Management System built using Laravel, designed to streamline the process of Booking, vehicle listning, real-time allert, reporting, and analytics...",
    links: [
      {
        webLink: "https://youtube.com",
      },
      {
        githubLink: "https://github.com/PCSB-Web-Team/online-judge-server",
      },
    ],
  },
  {
    image: imgSwingInventory,
    keyTags: ["Java", "Swing", "MySQL", "JDBC"],
    topic: "Inventory Management System",
    description:
      "A desktop application for managing stock levels, purchase orders, sales, Inventory tracking, supplier management, GRN, reporting tools...",
    links: [
      {
        webLink: "https://example.com", // Updated for example purpose
      },
      {
        githubLink: "https://github.com/PCSB-Web-Team/online-judge-server",
      },
    ],
  },
];

function ProjectCard() {
  return (
    <>
      <section className="container my-10 flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 hue-rotate-0">
          {project.map(
            ({ image, description, keyTags, links, topic }, index) => (
              <div
                key={index}
                className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl w-93 transition-transform transform hover:-translate-y-10 hover:shadow-black dark:bg-slate-700"
              >
                <div className="relative h-40 w-45l mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <img
                    className="object-cover w-full h-full"
                    src={image}
                    alt="card-image"
                  />
                </div>
                <div className="px-6 pt-4 pb-2">
                  {keyTags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="p-4">
                  {/* Reduced padding here */}
                  <h5 className="block mb-1 font-sans text-xl antialiased font-semibold leading-tight tracking-normal text-blue-gray-900 dark:text-white">
                    {topic}
                  </h5>
                  <p className="block font-sans text-base antialiased font-light leading-tight text-inherit dark:text-white/70">
                    {description}
                  </p>
                </div>
                <div className="flex space-x-3 p-4">
                  {/* Reduced padding and spacing here */}
                  <a
                    href={links[0].webLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-70 hover:opacity-100"
                  >
                    <FaLink className="text-2xl dark:text-white/70" />
                  </a>
                  <a
                    href={links[1].githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-70 hover:opacity-100"
                  >
                    <FaGithub className="text-2xl dark:text-white/70" />
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
}

export default ProjectCard;
