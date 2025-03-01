import React from "react";

const Interest = () => {
  const area = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="container">
      <h1 className="text-4xl font-grotesk font-[500]">Choose area of interest</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-8">
        {area.map((item, idx) => (
          <div key={idx} className="w-full aspect-video rounded-lg bg-slate-100 shadow-md"></div>
        ))}
      </div>
    </div>
  );
};

export default Interest;
