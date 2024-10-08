import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-white dark:bg-slate-800 dark:text-white pt-20"
    >
      <div className="container flex flex-col items-center">
        <h1 className="inline-block text-5xl text-center font-semibold mb-5 border-b-2 border-primary pb-1">
          Projects
        </h1>
        <p className="text-slate-500 text-lg text-center md:w-[50%] mx-auto dark:text-white/70">
          I have worked on a wide range of projects. From web application
          development to windows application development. Here are some of my
          projects.
        </p>
        <br />
      </div>
      <div>
        <ProjectCard />
      </div>
    </section>
  );
}

export default Projects;
