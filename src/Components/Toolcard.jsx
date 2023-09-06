import React from 'react'
import img28 from '../Assets/Group 40.png'

const Toolcard = () => {
    return (
        <>
            <div className="bg-black">
                <div className="bg-[#181725] md:mx-72 rounded-3xl flex-col md:flex md:flex-row">
                    <div className="p-14">
                        <img src={img28} alt='image28' className="md:h-96 " />
                    </div>
                    <div className="md:border-l-2 my-12">
                        <div className="ml-10">
                            <h1 className="text-white">Axiobridge ceative tools you need in <span className="text-[#1F70AF]">one platform</span></h1>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Toolcard