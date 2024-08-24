import React from "react";
import imgSwingInventory from "../../assets/SwingInventory.png";
import imgLaravelInventory from "../../assets/laravel inventory.png";
import imgJavaRMS from "../../assets/RMS.png";

const project = [
  {
    image: imgJavaRMS,
    keyTags: ["Java", "Spring", "Hibernate"],
    topic: "Reataurant Management System",
    description:
      "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.",
  },
  {
    image: imgLaravelInventory,
    keyTags: ["Laravel", "PHP", "MySQL"],
    topic: "Vehical Rental",
    description:
      "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.",
  },
  {
    image: imgSwingInventory,
    keyTags: ["Java", "Swing", "MySQL"],
    topic: "Inventory Management System",
    description:
      "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.",
  },
];

function ProjectCard() {
  return (
    <>
      <section className="container my-10 flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 hue-rotate-0 ">
          {project.map(({ image, description, keyTags, topic }) => (
            <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl w-93 transition-transform transform hover:-translate-y-10 hover:shadow-black dark:bg-gray-950">
              <div class="relative h-30 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                <img
                  className="object-cover w-full h-full"
                  src={image}
                  alt="card-image"
                />
              </div>
              <div class="px-6 pt-4 pb-2">
                {keyTags.map((tag, index) => (
                  <span
                    key={index}
                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="p-6">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 dark:text-white">
                  {topic}
                </h5>
                <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit dark:text-white/70">
                  {description}
                </p>
              </div>
              <div className="p-6 pt-0 flex justify-between">
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all duration-300 ease-in-out disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg inline-block primary-btn !my-3 text-white shadow-md shadow-gray-900/10 hover:bg-orange-800 hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  type="button"
                >
                  Live Demo
                </button>
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all duration-300 ease-in-out disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg inline-block primary-btn !my-3 text-white shadow-md shadow-gray-900/10 hover:bg-orange-800 hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  type="button"
                >
                  Github Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ProjectCard;
