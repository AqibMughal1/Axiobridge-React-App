import React, { useState } from 'react';
import '../tailwind.css';
import logoImage from '../Assets/axiobridge.png';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false); // State for mobile menu visibility

  return (
    <>
      <nav className="bg-[#171825] text-white w-full ">
        <div className="container mx-auto px-4 md:px-20 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={logoImage} alt="Axiobridge Logo" className="h-10" />
              <h1 className="text-xl cursor-default font-semibold ml-2">Axiobridge</h1>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="text-xl text-white hover:text-[#1f70af] focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8 text-lg font-semibold">
              <li><a href="/" className="hover:text-[#1f70af] hover:underline-offset-4 hover:underline ">HOME</a></li>
              <li><a href="/" className="hover:text-[#1f70af] hover:underline-offset-4 hover:underline ">SERVICES</a></li>
              <li><a href="/" className="hover:text-[#1f70af] hover:underline-offset-4 hover:underline ">T&T</a></li>
              <li><a href="/" className="hover:text-[#1f70af] hover:underline-offset-4 hover:underline ">CLIENTS</a></li>
              <li><a href="/" className="hover:text-[#1f70af] hover:underline-offset-4 hover:underline ">ABOUT</a></li>
              <li><a href="/" className="hover:text-[#1f70af] hover:underline-offset-4 hover:underline ">CONTACT</a></li>
            </ul>

            {/* Join Team Button for Laptop and Larger Screens */}
            <div className="hidden md:block">
              <button className="py-2 px-6 transition-colors ease-in-out duration-1000 bg-gradient-to-t from-[#171825] to-[#1f70af] shadow-blue-500/50 text-white text-sm font-semibold rounded-3xl hover:from-[#1f70af]">
                Join Team
              </button>

            </div>
          </div>

          {/* Mobile Menu */}
          {showMobileMenu && (
            <ul className="md:hidden mt-4 space-y-2 text-lg text-center font-semibold">
              <li><a href="/" className="hover:text-[#1f70af]">HOME</a></li>
              <li><a href="/" className="hover:text-[#1f70af]">SERVICES</a></li>
              <li><a href="/" className="hover:text-[#1f70af]">T&T</a></li>
              <li><a href="/" className="hover:text-[#1f70af]">CLIENTS</a></li>
              <li><a href="/" className="hover:text-[#1f70af]">ABOUT</a></li>
              <li><a href="/" className="hover:text-[#1f70af]">CONTACT</a></li>
              <li><a href="/" className="hover:text-[#1f70af]">JOIN THE TEAM</a></li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
