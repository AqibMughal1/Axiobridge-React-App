import React from 'react';
import '../tailwind.css';
import Mains from './Mains';
import img1 from '../Assets/html.png';
import img2 from '../Assets/css.png';
import img3 from '../Assets/bootstrap.png';
import img4 from '../Assets/js.png';
import img5 from '../Assets/reactlogo.png';
import img6 from '../Assets/node.png';
import img7 from '../Assets/mongo.png';
import img8 from '../Assets/nextjs.webp';
import img9 from '../Assets/wordpress.png';
import img10 from '../Assets/flutter.png';
import img11 from '../Assets/swiftui.png';
import img12 from '../Assets/kotlin.png';
import img13 from '../Assets/php.png';
import img14 from '../Assets/python.png';
import img15 from '../Assets/devops.png';
import img16 from '../Assets/canva.png';
import img17 from '../Assets/Pr.png';
import img18 from '../Assets/Ps.png';
import img19 from '../Assets/Ai.png';
import img20 from '../Assets/figmas.png';

const Hero = () => {
  return (
    <>
      <Mains />

      <div className="bg-black">
        <div className="mx-6 md:mx-60 border-2 border-solid border-[#1f70af] rounded-3xl drop-shadow-2xl p-6">
          <h1 className="text-white text-center font-semibold text-md md:text-2xl pt-8">Tools, Technologies and Languages</h1>
          <h1 className="text-white text-center text-sm md:text-2xl">________________________________________</h1>

          <div className="grid grid-cols-5 md:grid-cols-7 gap-8 py-10">
            <img src={img1} alt="image1" className="h-8 md:h-20" />
            <img src={img2} alt="image2" className="h-8 md:h-20" />
            <img src={img3} alt="image3" className="h-8 md:h-20" />
            <img src={img4} alt="image4" className="h-8 md:h-20" />
            <img src={img5} alt="image5" className="h-8 md:h-20" />
            <img src={img6} alt="image6" className="h-8 md:h-20" />
            <img src={img7} alt="image7" className="h-8 md:h-20" />
            <img src={img8} alt="image8" className="h-8 md:h-20" />
            <img src={img9} alt="image9" className="h-8 md:h-20" />
            <img src={img10} alt="image10" className="h-8 md:h-20" />
            <img src={img11} alt="image11" className="h-8 md:h-20" />
            <img src={img12} alt="image12" className="h-8 md:h-20" />
            <img src={img13} alt="image13" className="h-8 md:h-20" />
            <img src={img14} alt="image14" className="h-8 md:h-20" />
            <img src={img15} alt="image15" className="h-8 md:h-20" />
            <img src={img16} alt="image17" className="h-8 md:h-20" />
            <img src={img17} alt="image18" className="h-8 md:h-20" />
            <img src={img18} alt="image19" className="h-8 md:h-20" />
            <img src={img19} alt="image20" className="h-8 md:h-20" />
            <img src={img20} alt="image21" className="h-8 md:h-20" />
          </div>

        </div>

        <div className="bg-gray-800 mx-6 md:mx-60 rounded-3xl flex flex-col gap-8 md:flex-row justify-around text-white text-xl font-semibold text-center py-10">
          <div>
            <h1>Projects Done</h1>
            <h1 className="text-[#1f70af]">300+</h1>
          </div>

          <div>
            <h1>Satisfaction</h1>
            <h1 className="text-[#1f70af]">200+</h1>
          </div>

          <div>
            <h1>Happy Clients</h1>
            <h1 className="text-[#1f70af]">200+</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
