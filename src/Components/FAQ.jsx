import React, { useState } from "react";
import Vector from "../Assets/Vector.png";
import Vector2 from "../Assets/Vector 59.png";
import Question from "./Question";

function FAQ() {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(-1);

  const handleQuestionToggle = (index) => {
    if (openQuestionIndex === index) {
      setOpenQuestionIndex(-1);
    } else {
      setOpenQuestionIndex(index);
    }
  };

  return (
    <div className="relative w-full h-[1260px] bg-[#181725]">
      <img
        src={Vector}
        alt="Gradient Line"
        className="absolute -top-60 -left-48 w-full h-full z-10"
      />
      <img
        src={Vector2}
        alt="Gradient Line"
        className="absolute -top-32 -left-48 w-full h-full z-10"
      />
      <div className="relative z-20 flex flex-col items-center w-full h-full">
        <h1 className="text-4xl font-bold text-white mt-32 px-12">
          Frequently Asked
          <span className="text-[#1F70AF]"> Questions</span>
        </h1>
        <div className="flex flex-row w-full h-full p-12 lg:p-32">
          <div className="w-full lg:w-1/2 flex flex-col gap-12 lg:mr-10">
            {Array.from({ length: 5 }, (_, index) => (
              <Question
                key={index}
                isOpen={index === openQuestionIndex}
                handleChange={() => handleQuestionToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
