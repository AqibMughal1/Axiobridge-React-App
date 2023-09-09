import React from "react";
import Ellipsea1 from "../Assets/Ellipse a1.png";
import Ellipsea2 from "../Assets/Ellipse a2.png";
import Arrow1 from "../Assets/Arrow 1.png";
import Arrow2 from "../Assets/Arrow 2.png";
import img41 from "../Assets/img bg-1.png";
import img42 from "../Assets/img bg-2.png";
import img43 from '../Assets/Contentwriting.png';
import img44 from '../Assets/Seo.png';
import img45 from '../Assets/Socialmedia.png';
import img46 from '../Assets/Photography.png';
import img47 from '../Assets/Video.png';
import img48 from '../Assets/Ecommerce.png';

const Services = () => {
  return (
    <div className="bg-[#181725] text-white text-center py-12 sm:py-24">
      <h1 className="text-[#1F70AF] text-lg sm:text-xl">Popular Services</h1>

      <h1 className="text-2xl md:text-3xl px-20 md:px-72 tracking-wide pt-2 md:pt-6 pb-6 md:pb-8 font-semibold">
        The Best Axiobridge <br className="hidden md:inline" />
        Solutions
        <span className="text-[#1F70AF]"> Platform</span>
      </h1>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center mx-4 mt-4">
        {/* card no 1 */}
        <div className="flex bg-black rounded-2xl justify-center items-center p-4 w-full md:p-8 md:w-[90%]">
          <div>
            <img src={img41} alt="" />
          </div>
          <div className="text-left px-4">
            <h1 className="text-lg font-bold md:text-2xl">Graphic Designing</h1>
            <p className="text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="relative">
            <img src={Ellipsea1} alt="" />

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img src={Arrow1} alt="" className="h-6 w-6" />
            </div>
          </div>

        </div>

        {/* card no 2 */}
        <div className="flex bg-black rounded-2xl justify-center items-center p-4 w-full md:p-8 md:w-[90%]">
          <div>
            <img src={img42} alt="" />
          </div>
          <div className="text-left px-4">
            <h1 className="text-lg font-bold md:text-2xl">Web & App Development</h1>
            <p className="text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="relative">
            <img src={Ellipsea2} alt="" />
            <div className="absolute top-2 left-1">
              <img src={Arrow2} alt="" />
            </div>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center mx-4 mt-4">
        {/* card no 3 */}
        <div className="flex bg-black rounded-2xl justify-center items-center p-4 w-full md:p-8 md:w-[90%]">
          <div>
            <img src={img43} alt="" />
          </div>
          <div className="text-left px-4">
            <h1 className="text-lg font-bold md:text-2xl">Content Writing</h1>
            <p className="text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="relative">
            <img src={Ellipsea1} alt="" />
            <div className="absolute top-2 left-1">
              <img src={Arrow2} alt="" />
            </div>
          </div>
        </div>

        {/* card no 4 */}
        <div className="flex bg-black rounded-2xl justify-center items-center p-4 w-full md:p-8 md:w-[90%]">
          <div>
            <img src={img47} alt="" />
          </div>
          <div className="text-left px-4">
            <h1 className="text-lg font-bold md:text-2xl">Video Production</h1>
            <p className="text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="relative">
            <img src={Ellipsea2} alt="" />
            <div className="absolute top-2 left-1">
              <img src={Arrow2} alt="" />
            </div>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center mx-4 mt-4">
        {/* card no 5 */}
        <div className="flex bg-black rounded-2xl justify-center items-center p-4 w-full md:p-8 md:w-[90%]">
          <div>
            <img src={img44} alt="" />
          </div>
          <div className="text-left px-4">
            <h1 className="text-lg font-bold md:text-2xl">Seo</h1>
            <p className="text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="relative">
            <img src={Ellipsea1} alt="" />
            <div className="absolute top-2 left-1">
              <img src={Arrow2} alt="" />
            </div>
          </div>
        </div>

        {/* card no 6 */}
        <div className="flex bg-black rounded-2xl justify-center items-center p-4 w-full md:p-8 md:w-[90%]">
          <div>
            <img src={img46} alt="" />
          </div>
          <div className="text-left px-4">
            <h1 className="text-lg font-bold md:text-2xl">Photography</h1>
            <p className="text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="relative">
            <img src={Ellipsea2} alt="" />
            <div className="absolute top-2 left-1">
              <img src={Arrow2} alt="" />
            </div>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center mx-4 mt-4">
        {/* card no 7 */}
        <div className="flex bg-black rounded-2xl justify-center items-center p-4 w-full md:p-8 md:w-[90%]">
          <div>
            <img src={img48} alt="" />
          </div>
          <div className="text-left px-4">
            <h1 className="text-lg font-bold md:text-2xl">Ecommerce Development</h1>
            <p className="text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="relative">
            <img src={Ellipsea1} alt="" />
            <div className="absolute top-2 left-1">
              <img src={Arrow2} alt="" />
            </div>
          </div>
        </div>

        {/* card no 8 */}
        <div className="flex bg-black rounded-2xl justify-center items-center p-4 w-full md:p-8 md:w-[90%]">
          <div>
            <img src={img45} alt="" />
          </div>
          <div className="text-left px-4">
            <h1 className="text-lg font-bold md:text-2xl">Social Media Marketing</h1>
            <p className="text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="relative">
            <img src={Ellipsea2} alt="" />
            <div className="absolute top-2 left-1">
              <img src={Arrow2} alt="" />
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Services;
