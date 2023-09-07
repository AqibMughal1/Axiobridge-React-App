import React from 'react'
import img28 from '../Assets/Group 40.png'
import { AiFillStar } from 'react-icons/ai'

const Toolcard = () => {
    return (
        <>
            <div className="bg-black py-14">
                <div className="bg-[#181725] md:mx-72 rounded-3xl flex-col md:flex md:flex-row">
                    <div className="p-14">
                        <img src={img28} alt='image28' className="md:h-96 " />
                    </div >
                    <div className="md:border-l-2 my-12 w-1/2">
                        <div className="ml-20 flex flex-col">
                            <div>
                                <h1 className="text-white text-lg md:leading-8 font-bold pr-32 ">Axiobridge ceative tools you need in
                                    <span className="text-[#1F70AF]"> one platform</span></h1>
                            </div>
                            {/* <AiFillStar className='text-white'/> */}

                            <p className="text-white text-sm leading-7 flex-grow-0 pr-20 py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            
                            

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Toolcard