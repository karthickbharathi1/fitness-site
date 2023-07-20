import React from 'react'
import { data } from '../data/horizontal'

const Blog = () => {
  return (
    <div  name = "blog" className='h-screen px-[100px] py-[40px] '>
        <div className='text-4xl sm:text-[40px] md:text-[50px] lg:text-[70px]'>
            <p className='text-[#AFCCF8]  font-[600] text-center'>
            Lorem Ipsum Dolor Emitt

            </p>
            <p  className = 'text-[#F2BD4D]  font-[600] text-center'>Enim id enim et non</p>
        </div>
       
       
       <div className='flex  overflow-x-auto custom-scrollbar space-x-[200px] w-full mt-6'>
            
                <div className=' flex-shrink-0 text-white '>
                    <img className=' h-[500px]    object-cover   hover:scale-105 duration-300' src={data[0].img} alt="/" />
                    
                    <p className='text-center '  >{data[0].name}</p>
                    <p className='text-center ' >{data[0].designation}</p>

                </div> 
               <div className=' flex-shrink-0  text-white  '>
                    <img className=' h-[500px]    object-cover  hover:scale-105 duration-300 mb-3' src={data[1].img} alt="/" />
                    
                    <p className='text-center '  >{data[1].name}</p>
                    <p className='text-center' >{data[1].designation}</p>

                </div>
                 
                <div className=' flex-shrink-0  text-white  '>
                    <img className=' h-[500px]    object-cover  hover:scale-105 duration-300' src={data[2].img} alt="/" />
                    
                    <p className='text-center'  >{data[2].name}</p>
                    <p className='text-center' >{data[2].designation}</p>

                </div>
                <div className='  flex-shrink-0 text-white '>
                    <img className=' h-[500px]     object-cover  hover:scale-105 duration-300' src={data[3].img} alt="/" />
                    
                    <p className='text-center'  >{data[3].name}</p>
                    <p className='text-center' >{data[3].designation}</p>

                </div>
                <div className=' flex-shrink-0 text-white '>
                    <img className=' h-[500px]  object-cover  hover:scale-105 duration-300' src={data[4].img} alt="/" />
                    
                    <p className='text-center'  >{data[4].name}</p>
                    <p className='text-center' >{data[4].designation}</p>

                </div>
                <div className='  flex-shrink-0 text-white '>
                    <img className=' h-[500px]  object-cover  hover:scale-105 duration-300' src={data[5].img} alt="/" />
                    
                    <p className='text-center'  >{data[5].name}</p>
                    <p className='text-center' >{data[5].designation}</p>

                </div>
                
                   
                
                
            

            
            
        </div> 
        
        
            
        
    </div>
  )
}

export default Blog