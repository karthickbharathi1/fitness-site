import React from 'react'
import image1 from '../assets/image-1.jpg'
import image2 from '../assets/image-2.jpg'
import image3 from '../assets/image-3.png'
import image4 from '../assets/image-4.jpg'
import image5 from '../assets/image-5.jpg'
import image6 from '../assets/image-6.png'
import image7 from '../assets/image-7.jpg'
import image8 from '../assets/image-8.jpg'
import image9 from '../assets/image-9.jpg'
const Pricing = () => {
  return (
    <div  name = "pricing" className='h-full shadow-lg'>
        <div className='relative grid grid-cols-2 md:grid-cols-3  gap-12  px-10 '>
        
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
        <img src={image5} alt="" />
        <img src={image6} alt="" />
        <img src={image7} alt="" />
        <img src={image8} alt="" />
        <img src={image9} alt="" />
        <div class="absolute inset-0 bg-black opacity-50 transition duration-300  group-hover:opacity-100"></div>
        <p class="absolute inset-0 flex items-center justify-center text-white text-[30px] sm:text-[40px] md:text-[50px] lg:text-[70px] font-[600] ">eiusmod nostrud labore et velit <br /> culpa commodo. Ipsum anim <br /> reprehenderit id nostrud</p>
        

        </div>

        
        

    </div>
  )
}

export default Pricing