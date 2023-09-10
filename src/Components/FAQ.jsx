import React from "react";

import Vector from "../Assets/Vector.png";
import Vector2 from "../Assets/Vector 59.png";

function FAQ() {
  return (
    <div className="relative w-full h-[1460px] bg-[#181725]">
      <img
        src={Vector}
        alt="Gradient Line"
        className="absolute -top-48 -left-48 w-full h-full z-10"
      />
      <img
        src={Vector2}
        alt="Gradient Line"
        className="absolute -top-32 -left-32 w-full h-full z-10"
      />
      <div className="relative z-20 flex flex-col items-center w-full h-full">
        <h1 className="text-4xl font-bold text-white mt-32">
          Frequestly Asked
          <span className="text-[#1F70AF]"> Questions</span>
        </h1>
      </div>
    </div>
  );
}

export default FAQ;
