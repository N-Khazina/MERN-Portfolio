import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { projects } from "../../resources/projects";

function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title="Projects" />

      <div className="flex gap-10 py-10 sm:flex-col">
        <div className="flex flex-col w-1/3 gap-10 border-l-2 border-secondary sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((project, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 ${
                  selectedItemIndex === index
                    ? `text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#313131] py-3`
                    : `text-white `
                } `}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-10 sm:flex-col">
          <img
            src={projects[selectedItemIndex].image}
            alt=""
            className="h-62 w-72"
          /> 
        </div>
        <div className="flex flex-col gap-5 sm:text-lg">
          <h1 className="text-2xl text-secondary">
            {projects[selectedItemIndex].title}
          </h1>
          <h1 className="text-2xl text-white">
            {projects[selectedItemIndex].description}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Projects;
