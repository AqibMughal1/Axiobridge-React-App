import React from 'react'
import img28 from '../Assets/Group 40.png'
import { AiFillStar } from 'react-icons/ai'

const Toolcard = () => {
    return (
        <>
            <div className="bg-black py-8 md:py-20 md:pb-32">
                <div className="bg-[#181725] mx-8 md:mx-72 rounded-3xl flex flex-col md:flex-row">
                    <div className="p-4 md:p-14 flex items-center justify-center md:justify-start ">
                        <img src={img28} alt="image28" className="h-48 md:h-96" />
                    </div>
                    <div className="md:border-l-2 my-4 md:my-12 w-full md:w-1/2">
                        <div className="ml-4 md:ml-20 flex flex-col">
                            <div>
                                <h1 className="text-white text-lg md:text-xl leading-6 md:leading-8 font-bold pr-20 md:pr-32">
                                    Axiobridge creative tools you need in{" "}
                                    <span className="text-[#1F70AF]">one platform</span>
                                </h1>
                            </div>

                            <p className="text-white text-xs md:text-sm leading-5 md:leading-6 flex-grow-0 pr-4 md:pr-20 py-4 md:py-6">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s.
                            </p>

                            <div className="text-white">
                                <ul className="list-none space-y-2 md:space-y-5">
                                    <li className="flex items-center space-x-2 md:space-x-3">
                                        <AiFillStar className="w-6 h-6 md:w-8 md:h-8 text-[#1F70AF]" />
                                        <span className="pr-4 md:pr-20 text-xs md:text-sm">
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry.
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-2 md:space-x-3">
                                        <AiFillStar className="w-6 h-6 md:w-8 md:h-8 text-[#1F70AF]" />
                                        <span className="pr-4 md:pr-20 text-xs md:text-sm">
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry.
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="ml-auto mr-auto md:ml-0 mt-8 md:mt-10">
                                <button className="py-2 md:py-4 px-4 md:px-6 w-32 md:w-44 transition-colors ease-in-out duration-1000 bg-gradient-to-t from-[#171825] to-[#1f70af] shadow-blue-500/50 text-white text-xs md:text-sm font-semibold rounded-3xl hover:from-[#1f70af]">
                                    LEARN MORE
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Toolcard