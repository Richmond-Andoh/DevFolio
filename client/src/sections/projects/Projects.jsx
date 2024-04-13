import { useState } from "react";
import SectionsTitle from "../../components/SectionsTitle";
import { projects } from "../../resources/projects";

const Projects = () => {
  const [selectedProjectIndex, setselectedProjectIndex] = useState(0);
  return (
    <div className="pb-10 pt-18">
      <SectionsTitle title="Projects" />

      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-teal-700 w-1/3 sm:w-full sm:overflow-x-scroll sm:flex-row">
          {projects.map((project, idx) => (
            <div
              className="cursor-pointer"
              onClick={() => setselectedProjectIndex(idx)}
              key={idx}
            >
              <h1
                className={`text-xl px-5 ${
                  selectedProjectIndex === idx
                    ? "text-teal-600 border-l-4 -ml-[3px] bg-teal-500 opacity-60 py-3"
                    : "text-white"
                } text-white`}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-12 sm:flex-col">
          <img
            src={projects[selectedProjectIndex].image}
            alt=""
            className="h-60 w-70"
          />
          <div className="flex flex-col gap-10">
            <h1 className="text-primary text-xl">
              {projects[selectedProjectIndex].title}
            </h1>
            <p>{projects[selectedProjectIndex].description}</p>
            <div className="flex gap-10">
              <h1 className="text-teal border border-teal px-5 py-3 cursor-pointer w-36">
                <a href={projects[selectedProjectIndex].link}>Live Demo</a>
              </h1>
              <h1 className="text-teal border border-teal px-5 py-3 cursor-pointer w-36">
                <a href={projects[selectedProjectIndex].link}>Source Code</a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
