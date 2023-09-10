import React from 'react';
import '../tailwind.css';
import logoImage from '../Assets/axiobridge.png';
import img51 from '../Assets/whatsapp.png'
import img52 from '../Assets/facebook.png'
import img53 from '../Assets/linkedin.png'
import img54 from '../Assets/twitter.png'
import img55 from '../Assets/insta.png'

const Footer = () => {
  return (
    <>
      <div className='bg-black py-6'>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 text-white mx-32 ">

          {/* 1st Column */}
          <div className="md:mx-auto my-10">
            <img src={logoImage} alt='' className="mb-4 h-36 md:ml-20" />
            <p className="text-xs md:text-lg">4,5 Block L, Abdul Haque Rd</p>
            <p className="text-xs md:text-lg">Phase 2 Johar Town</p>
            <p className="mb-10 text-xs md:text-lg">Lahore, Pakistan</p>
            <p>Phone: +92 309 0855 822</p>
            <p>Email: info@axiobridge.com</p>
          </div>


          {/* 2nd Column */}
          <div className="mx-auto my-10">
            <h2 className="text-lg md:text-xl md:tracking-widest font-semibold mb-2 md:pt-10">USEFUL PAGES</h2>
            <ul className="list-disc ml-4 leading-8">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Clients</li>
              <li>Contact</li>
              <li>T&T</li>
            </ul>
          </div>


          {/* 3rd Column */}
          <div className="mx-auto my-10">
            <h2 className="text-lg md:text-xl md:tracking-widest font-semibold mb-2 md:pt-10">OUR SERVICES</h2>
            <ul className="list-disc ml-4 leading-7">
              <li>Graphic Designing</li>
              <li>Web Design & Development</li>
              <li>Search Engine Optimization</li>
              <li>Social Media Marketing</li>
              <li>Video Production</li>
            </ul>

            <div className="flex gap-2 justify-end pt-20 ">
              <img src={img51} alt='' className="h-8" />
              <img src={img52} alt='' className="h-8" />
              <img src={img53} alt='' className="h-8" />
              <img src={img54} alt='' className="h-8" />
              <img src={img55} alt='' className="h-8" />

            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#181725]">
        <p className="text-center text-white py-6">Copyright © axiobridge 2023 | All Rights Reserveds</p>
      </div>
    </>
  );
}

export default Footer;
