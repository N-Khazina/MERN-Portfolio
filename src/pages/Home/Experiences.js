import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { experiences } from "../../resources/experiences";

function Experiences() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title="Experiences" />

      <div className="flex gap-10 py-10 sm:flex-col">
        <div className="flex flex-col w-1/3 gap-10 border-l-2 border-secondary sm:flex-row sm:overflow-x-scroll sm:w-full">
          {experiences.map((experience, index) => (
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
                {experience.period}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl text-secondary">{experiences[selectedItemIndex].title}</h1>
          <h1 className="text-2xl text-tertiary">{experiences[selectedItemIndex].company}</h1>
          <h1 className="text-2xl text-white">{experiences[selectedItemIndex].description}</h1>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
