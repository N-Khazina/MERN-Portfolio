import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { courses } from "../../resources/courses";

function Courses() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title="courses" />

      <div className="flex gap-10 py-10 sm:flex-col">
        <div className="flex flex-col w-1/3 gap-10 border-l-2 border-secondary sm:flex-row sm:overflow-x-scroll sm:w-full">
          {courses.map((course, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl sm:text-lg px-5 ${
                  selectedItemIndex === index
                    ? `text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#313131] py-3`
                    : `text-white `
                } `}
              >
                {course.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl text-secondary">
            {courses[selectedItemIndex].title}
          </h1>
          <h1 className="text-2xl text-white">
            {courses[selectedItemIndex].description}
          </h1>
        </div>
        <div className="flex items-center justify-center gap-10 sm:flex-col">
          <img
            src={courses[selectedItemIndex].image}
            alt=""
            className="h-62 w-80"
          /> 
        </div>
      </div>
    </div>
  );
}

export default Courses;
3