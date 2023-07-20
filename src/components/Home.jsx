import React from 'react'
import emoji from '../assets/emoji.png'
const Home = () => {
  return (
    <div>
      <div name = "home" className='flex justify-center items-center  z-100 absolute bottom-[200px]   w-full  '>
        <div className='mb-[70px]'>
          <p className='text-white text-2xl sm:text-4xl font-bold mb-2'>Enim in  consectetur eiusod,</p>
          
          <p className='text-center text-2xl sm:text-4xl font-bold text-[#FED25B]'>Enim id enim et non</p>
          <div className='flex justify-center mt-[60px]'>
            <button className='bg-[#514ED8] text-white px-[80px] sm:px-[120px] py-3 rounded-lg'>Explore</button>

          </div >
          
        </div>
       
    </div>
    <img className='absolute bottom-20  right-[50px] w-[105px] md:w-[200px] bg-transparent cursor-pointer' src={emoji} alt="" />
    </div>
  )

   
    
}

export default Home