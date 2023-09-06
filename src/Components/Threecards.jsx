import React from 'react'
import img21 from '../Assets/switch.png'
import img22 from '../Assets/boat.png'
import img23 from '../Assets/image 2.png'

const Threecards = () => {
  return (
    <>
      <div class="container mx-auto bg-black">
        <div class="grid grid-cols-3 gap-20 mx-32">
          
          {/* First generate Design */}
          <div class="col-span-1 bg-black p-4 border-t-2">
            <img src={img21} alt='image21' className="h-16 " />
            <h1 className="text-lg font-bold text-white py-5" >Generate designs in a seconds</h1>
            <p className="text-sm text-white mr-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>

          {/* Second Higly Tuned tools */}
          <div class="col-span-1 bg-black p-4 border-t-2">
            <img src={img22} alt='image22' className="h-16" />
            <h1 className="text-lg font-bold text-white py-5 ">Highly-tuned tools</h1>
            <p className="text-sm text-white mr-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
          
          {/* Enter Projects */}
          <div class="col-span-1 bg-black p-4 border-t-2">
            <img src={img23} alt='image23' className="h-16" />
            <h1 className="text-lg font-bold text-white py-5 ">Enter your projects </h1>
            <p className="text-sm text-white mr-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>

        </div>
      </div>

    </>
  )
}

export default Threecards