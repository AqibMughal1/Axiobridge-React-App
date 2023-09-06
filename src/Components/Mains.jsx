import React from 'react'
import '../tailwind.css';


const Mains = () => {
    return (
        <>
            <div className="bg-black text-white text-center py-12 sm:py-24">
                <h1 className="text-lg sm:text-xl">Welcome To Axiobridge</h1>

                <h1 className="text-3xl sm:text-5xl px-4 sm:px-72 tracking-wide pt-4 sm:pt-6 pb-6 sm:pb-8 font-semibold">
                    Generate
                    <span className="text-[#1F70AF]"> Faster </span>
                    Way To Design & Development Themes Your <span className="text-[#1F70AF]">Future</span>
                </h1>

                <h1 className="px-4 sm:px-80 pb-6 sm:pb-10 text-sm sm:text-sm">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </h1>

                <button className="px-6 sm:px-10 py-2 sm:py-3 bg-transparent hover:bg-[#1f70af] rounded-full 
    transition ease-in-out duration-500 border-4 border-solid border-[#1f70af]">CONTACT US</button>
            </div>

        </>
    )
}

export default Mains