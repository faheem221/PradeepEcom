import React from "react";

const CourseSection = () => {
  return (
    <div>
      <div className="container my-20">
        <h1 className="text-3xl lg:text-5xl font-[500]">
          Choose Variety of Courses
        </h1>
        <p className="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <div className="grid grid-cols-3 gap-4 mt-12">
          {Array.from({ length: 6 }).map((item, idx) => (
            <div
              className="w-full bg-slate-100 flex flex-col justify-between items-start rounded-2xl p-6"
              key={idx}
            >
              <div className="">
                <div className="w-[100px] h-[100px] rounded-full overflow-hidden bg-slate-200">
                  <img
                    className="w-full h-full object-contain"
                    src={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbHrZ4VlFhVm6hb7-tcFywDeu7VH78lXEI9g&s"
                    }
                  />
                </div>
              </div>
              <div className="mt-10">
                <h3 className="text-2xl">Course Name</h3>
                <p className="mt-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
                  pariatur earum illo error quae ea cumque nisi.{" "}
                </p>
              </div>
              <button className="mt-5 px-4 py-2 bg-slate-200 rounded-xl">
                Learn more
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
