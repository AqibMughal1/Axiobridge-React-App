import React from "react";
import "../tailwind.css";
import img01 from "../Assets/image 1.png";
import img02 from "../Assets/image 2.png";
import img03 from "../Assets/image 3.png";
import ellipse from "../Assets/Ellipse 1.png";
import star1 from "../Assets/Star 1.png";
const Whyus = () => {
  return (
    <div className="bg-black text-white text-center py-12 sm:py-24">
      <h1 className="text-[#1F70AF] text-lg sm:text-xl">Why Choose Us</h1>

      <h1 className="text-3xl px-4 sm:px-72 tracking-wide pt-4 sm:pt-6 pb-6 sm:pb-8 font-semibold">
        Axiobridge service that generates <br /> code documentation, test, and
        optimizations <br /> from your
        <span className="text-[#1F70AF]"> source code files</span>
      </h1>
      <div className="grid grid-cols-3 px-8 mt-20">
        <div className="px-12 text-left">
          <div className="border-t border-solid border-white mb-8" />

          <img src={img01} alt="" className="mb-8" />
          <h1 className="text-xl mb-2">Generate designs in a seconds</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div className="px-12 text-left">
          <div className="border-t border-solid border-white mb-8" />

          <img src={img03} alt="" className="mb-8" />
          <h1 className="text-xl mb-2">Highly-tuned tools</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div className="px-12 text-left">
          <div className="border-t border-solid border-white mb-8" />

          <img src={img02} alt="" className="mb-8" />
          <h1 className="text-xl mb-2">Enter your projects</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-2 bg-[#181725] w-[80%] rounded-3xl mt-24 p-12 divide-x">
          <div className="p-20">
            <img src={ellipse} alt="" />
          </div>
          <div className="pl-24 pr-20">
            <h1
              className="text-2xl
            px-4
            tracking-wide
            pt-4
            sm:pt-6
            pb-6
            sm:pb-8
            font-semibold text-left"
            >
              Axiobridge ceative tools you need in{" "}
              <span className="text-[#1F70AF]"> one platform</span>
            </h1>
            <p className="mb-12 mt-12 text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div className="mt-12">
              <div>
                <img src={star1} alt="" className="w-[20px]" />
              </div>
              <div className="-mt-[21px] ml-12 text-left">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <div>
                <img src={star1} alt="" className="w-[20px]" />
              </div>
              <div className="-mt-[21px] ml-12 text-left">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="flex items-start mt-8">
              <button className="py-4 px-8 transition-colors ease-in-out duration-1000 bg-gradient-to-t from-[#171825] to-[#1f70af] shadow-blue-500/50 text-white text-xl font-semibold rounded-3xl hover:from-[#1f70af]">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
