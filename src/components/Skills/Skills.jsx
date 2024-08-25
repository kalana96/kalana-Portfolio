import React from "react";
import USER from "./SkillData.json";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-white dark:bg-slate-800 dark:text-white pt-20"
    >
      <div className="container flex flex-col items-center">
        <h1 className="inline-block text-5xl text-center font-semibold mb-5 border-b-2 border-primary pb-1">
          Skills
        </h1>
        <p className="text-slate-500 text-lg text-center md:w-[50%] mx-auto dark:text-white/70">
          Here are some of my skills on which I have been working on for the
          past 2 years.
        </p>
        <br />
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Frontend Skills Section */}
        <div className="my-5 flex flex-col items-center rounded-xl shadow-xl p-6 dark:bg-gray-900 w-full">
          <h3 className="text-2xl mb-4">Frontend Technologies</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {USER.skillsFrontEnd.map((item) => (
              <div
                key={item.id}
                className="flex items-center px-3 py-3 border rounded-lg border-light-gray dark:bg-slate-700 w-full"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-8 h-8 md:w-8 md:h-8"
                />
                <h3 className="ml-3 text-sm font-medium text-black dark:text-white/70">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Skills Section */}
        <div className="my-5 flex flex-col items-center rounded-xl shadow-xl p-6 dark:bg-gray-900 w-full">
          <h3 className="text-2xl mb-4">Backend Technologies</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {USER.skillsBackEnd.map((item) => (
              <div
                key={item.id}
                className="flex items-center px-3 py-3 border rounded-lg dark:bg-slate-700 w-full"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-8 h-8 md:w-8 md:h-8"
                />
                <h3 className="ml-3 text-sm font-medium text-black dark:text-white/70">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container flex flex-col items-center">
        {/* Other Skills Section */}
        <div className="my-10 flex flex-col items-center rounded-xl shadow-xl p-6 dark:bg-gray-900 w-full">
          <h3 className="text-2xl mb-4">Other Technologies</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {USER.skillsOther.map((item) => (
              <div
                key={item.id}
                className="flex items-center px-3 py-3 border rounded-lg dark:bg-slate-700 w-full"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-8 h-8 md:w-8 md:h-8"
                />
                <h3 className="ml-3 text-sm font-medium text-black dark:text-white/70">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
