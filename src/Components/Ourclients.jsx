import React from 'react'
import img24 from '../Assets/oxley.png'
import img25 from '../Assets/Merise.png'
import img26 from '../Assets/fruitien.png'
import img27 from '../Assets/Happyzone.png'

const Ourclients = () => {
  return (
    <>
    <div className="bg-black text-white py-20">
        <h1 className="text-lg font-bold md:text-2xl text-center py-10 md:py-20">Our Clients</h1>
        <div className="mx-5 flex justify-around pb-10">
            <img src={img24} alt="image24" className="h-16 md:h-52" />
            <img src={img25} alt="image25" className="h-16 md:h-52" />
            <img src={img26} alt="image26" className="h-16 md:h-44" />
            <img src={img27} alt="image27" className="h-16 md:h-52" />
        </div>
    </div>
    </>
  )
}

export default Ourclients