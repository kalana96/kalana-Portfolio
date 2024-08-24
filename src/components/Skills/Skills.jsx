import React from "react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-secondary dark:bg-slate-800 dark:text-white py-10"
    >
      <div className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col items-center bg-gray-800">
            <h3 className="text-2xl font-bold mb-4">Frontend</h3>
            <div className="flex flex-wrap justify-center gap-4"></div>
          </div>
          <div className="flex flex-col items-center bg-gray-800">
            <h3 className="text-2xl font-bold mb-4">Backend</h3>
            <div className="flex flex-wrap justify-center gap-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
