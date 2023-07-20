import React from 'react'
import emoji from '../assets/emoji.png'
import linkedin from '../assets/linked.png'
import gmail from '../assets/Gmail.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/Twitter.png'
const Contact = () => {
  return (
   
        <div  name = "contact" className='h-screen flex flex-col px-10'>
            <div className='  md:flex justify-around items-center bg-[#5661a9] rounded-lg px-4 py-4 w-full  md:mt-[200px]'>
                <div>
                    <p className='text-[#AFCCF8] md:font-600 md:text-[64px] font-500 text-[44px]' >Stay tuned!</p>
                    <p className='md:font-500 md:text-[24px] font-400 text-[18px] text-white'>Get the latest articles and business updates <br /> that you need to know, you’ll even get <br /> special recommendations weekly.</p>
                </div>
                <div className='relative'>
                    <input className='bg-[#BAB9FF] lg:min-w-[620px] w-full flex-1  text-white rounded-xl  px-2 py-2' type="text" placeholder='Enter Your Email ID' />
                    {/* <button className='bg-[#DCAF34] px-2 py-2 rounded-xl border-none'>Sign up</button> */}
                    <div class="absolute top-0 right-0">
                
                <button class="h-10 w-20 text-white rounded-lg bg-[#DCAF34] hover:bg-[#DCAF34]">Search</button>
                
            </div>
                </div>
                <div>
                    <img className='w-[105px] md:w-[200px]' src={emoji} alt="" />


                    
                </div>
            </div>
            <div className='md:flex justify-around items-start bg-[#5661a9] mt-5 rounded-lg px-4 py-10 w-full relative'>
                <div className='mb-4'>
                    <p className='text-[#AFCCF8] font-600 text-[44px]' >LOGO</p>
                    <p className='md:font-500 md:text-[24px] font-400 text-[20px] text-white'>Get the latest articles and business <br /> updates that you need to know, you’ll <br /> even get special recommendations <br />weekly.</p>
                </div>
                <div className='flex justify-between mb-4 ' >
                    {/* <input className='bg-[#BAB9FF]  text-white rounded-xl  px-2 py-2' type="text" placeholder='Enter Your Email ID' />
                    <button className='bg-[#DCAF34] px-2 py-2 rounded-xl'>Sign up</button> */}

                    <div className = 'mx-10 text-white' >
                        <h1 className='font-600 text-[20px]'>Website</h1>
                        <p className='font-400 text-[14px] my-4'>Home</p>
                        <p className='font-400 text-[14px] my-4'>About</p>
                        <p className='font-400 text-[14px] my-4'>Get in toouch</p>
                        <p className='font-400 text-[14px] '>FAQ</p>
                    </div>
                    <div className = 'mx-10 text-white' >
                        <h1 className='font-600 text-[20px] '>Services</h1>
                        <p className='font-400 text-[14px] my-4'>Service 1</p>
                        <p className='font-400 text-[14px] my-4'>Service 2</p>
                        <p className='font-400 text-[14px] my-4'>Service 3</p>
                    </div>
                    <div className = 'mx-10  text-white' >
                        <h1 className='font-600 text-[20px]'>Services</h1>
                        <p className='font-400 text-[14px] my-4'>Service 1</p>
                        <p className='font-400 text-[14px] my-4'>Service 2</p>
                        <p className='font-400 text-[14px] my-4'>Service 3</p>

                    </div>
                </div>
                <div className=''>
                    <h1 className = 'mx-[50%] md:mx-10 text-white font-600 text-[20px]'>Social</h1>
                    <div className='flex mt-4 justify-center items-center'>
                    <img className='mr-2' src={instagram} alt="" />
                    <img className='mr-2' src={twitter} alt="" />
                        <img className='mr-2' src={gmail} alt="" />
                        <img className='mr-2' src={linkedin} alt="" />
                    </div>

                    
                </div>
                <p className='absolute bottom-0 text-gray-800 pl-[100px] '>©2023 BFF. All rights reserved.</p>
            </div>
         

        </div>

        
    
  )
}

export default Contact