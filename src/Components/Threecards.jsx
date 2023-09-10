import React from 'react'
import img21 from '../Assets/switch.png'
import img22 from '../Assets/boat.png'
import img23 from '../Assets/image 2.png'

const Threecards = () => {
  return (
    <>
      <div class="container mx-auto bg-black w-full">
        <div class="md:flex">
          {/* <!-- First generate Design --> */}
          <div className="mx-14 md:w-1/3 bg-black p-4 border-t-2 ">
            <img src={img21} alt="image21" className="h-10  md:h-16" />
            <h1 className="text-lg font-bold text-white py-3 md:py-5">Generate designs in seconds</h1>
            <p className="text-sm text-white md:mr-10 pb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>

          {/* <!-- Second Highly Tuned tools --> */}
          <div className="mx-14 md:w-1/3 bg-black p-4 border-t-2">
            <img src={img22} alt="image22" className="h-10  md:h-16" />
            <h1 className="text-lg font-bold text-white py-3 md:py-5">Highly-tuned tools</h1>
            <p className="text-sm text-white mr-10 pb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>

          {/* <!-- Third Card Enter Projects --> */}
          <div className="mx-14 md:w-1/3 bg-black p-4 border-t-2">
            <img src={img23} alt="image23" className="h-10  md:h-16" />
            <h1 className="text-lg font-bold text-white py-3 md:py-5">Enter your projects</h1>
            <p className="text-sm text-white mr-10 pb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default Threecards