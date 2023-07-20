import React from 'react'
import div1 from '../assets/div.png'
// import div2 from '../assets/div 2.png'
// import div3 from '../assets/div3.png'
const Programs = () => {
  return (
    <div   id='programs' className='h-screen lg:flex px-5 lg:pt-[50px]'>
        <div className='lg:w-2/6 h-1/3 lg:h-full '> 
          <div className='h-full lg:h-4/6 overflow-y-scroll no-scrollbar mt-14  md:pl-[100px] '>
            <img className=' w-full md:w-[90%]  my-4 hover:scale-105 duration-300' src={div1} alt="" />
            <img className=' w-full md:w-[90%] my-4 hover:scale-105 duration-300' src={div1} alt="" />
            <img className=' w-full md:w-[90%] my-4 hover:scale-105 duration-300' src={div1} alt="" />
            <img className=' w-full md:w-[90%] my-4 hover:scale-105 duration-300' src={div1} alt="" />
            <img className=' w-full md:w-[90%] my-4 hover:scale-105 duration-300' src={div1} alt="" />
            <img className= ' w-full  md:w-[90%] my-4 hover:scale-105 duration-300' src={div1} alt="" />
          </div>
        
        </div>
        <div className='lg:w-4/6  h-2/3 flex flex-col items-center lg:mb-2'>
            <div className='text-center  lg:my-8 sm:my-4'>
            <p className='text-white text-2xl md:text-4xl font-bold mb-2'>Lorem Ipsum Dolor </p>
        
            <p className=' text-2xl md:text-4xl font-bold text-[#FED25B]'> lorem ipsum</p>

            </div>
            <div className='bg-[#333572] lg:w-2/3 lg:px-20 lg:py-10 sm:p-10 rounded-[50px] py-2 px-2'>
                <h1 className='text-[#FFC853] text-2xl text-center sm:mb-10 mb-3'>Lorem Ipsum Dolor</h1>
                <p className='text-white text-center text-xs sm:text-xl font-medium sm:mb-10 '>Enim in cupidatat consectetur eiusmod nostrud labore et velit culpa commodo. Ipsum anim reprehenderit id nostrud ullamco mollit sunt. Id enim consequat irure aute est qui veniam officia consectetur do sint cillum. Enim in cupidatat consectetur eiusmod nostrud labore et velit culpa commodo. Ipsum anim reprehenderit id nostrud ullamco mollit sunt. Id enim consequat irure aute est qui veniam officia consectetur do sint cillum. Enim in cupidatat consectetur eiusmod nostrud labore et velit culpa commodo. Ipsum anim reprehenderit id nostrud ullamco mollit sunt. Id enim consequat irure aute est qui veniam officia consectetur do sint cillum.</p>
                <div className='text-center'>
                <button className='px-10 py-2 bg-indigo-200 rounded-[10px] ' >Join Now</button>

                </div>
               
            </div>
            
        </div>
    </div>
  )
}

export default Programs