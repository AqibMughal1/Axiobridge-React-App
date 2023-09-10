import React from 'react'
import '../tailwind.css';


const Mains = () => {
    return (
        <>
            <div className="bg-black text-white text-center md:py-12 py-24">
                <div className="md:flex md:flex-col md:items-center md:p-20">

                    {/* <!-- Welcome Message --> */}
                    <h1 className="md:text-xl text-xl">Welcome To Axiobridge</h1>

                    {/* <!-- Main Heading --> */}
                    <h1 className="md:text-4xl text-2xl md:px-80 px-14 md:text-center tracking-wide md:pt-4 pt-6 md:pb-6 pb-8 font-semibold">Generate
                        <span className="text-[#1F70AF]"> Faster </span>
                        Way To Design & Development Themes Your <span className="text-[#1F70AF]">Future</span>
                    </h1>

                    {/* <!-- Description --> */}
                    <h1 className="md:px-80 px-10 md:pb-6 pb-10 md:text-sm text-sm md:my-5">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </h1>

                    {/* <!-- Contact Button --> */}
                    <button className="px-6 md:px-10 md:py-4 my-6 py-2 bg-transparent hover:bg-[#1f70af] rounded-full 
                    transition ease-in-out duration-500 md:border-4 border-2 border-solid border-[#1f70af]">CONTACT US</button>

                </div>
            </div>


        </>
    )
}

export default Mains