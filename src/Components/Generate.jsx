import React from 'react'
import img21 from '../Assets/switch.png'
import img22 from '../Assets/boat.png'
import img23 from '../Assets/image 2.png'

const Generate = () => {
  return (
    <>
      <div class="container mx-auto bg-black">
        <div class="grid grid-cols-3 gap-20 mx-32">
          <div class="col-span-1 bg-gray-200 p-4">
            <img src={img21} alt='image21' className="h-16" />
            
          </div>
          <div class="col-span-1 bg-gray-200 p-4">
            <img src={img22} alt='image22' className="h-16" />
            
          </div>
          <div class="col-span-1 bg-gray-200 p-4">
            <img src={img23} alt='image23' className="h-16" />

          </div>
        </div>
      </div>

    </>
  )
}

export default Generate