
import React, { useState } from 'react';

import {
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { Link } from 'react-scroll';
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className=' w-full absolute top-0 px-8'>
        <div className='flex justify-between md:justify-around items-center py-4  text-white'>
            <h1 className='font-semibold text-2xl cursor-pointer'>LOGO</h1>
            {/* <ul className='flex font-normal '>
                <li className='mx-20 '><a className='cursor-pointer' href="#">Home</a></li>
                <li className='mx-20'><a href='#programs'>Programs</a></li>
                <li className='mx-20'><a href="#">Pricing</a></li>
                <li className='mx-20'><a href="#">Blogs</a></li>
            </ul> */}

< ul className='hidden md:flex'>
        <li className='mx-20 cursor-pointer'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='mx-20 cursor-pointer'>
          <Link to='programs' smooth={true} duration={500}>
            Programs
          </Link>
        </li>
        <li className='mx-20 cursor-pointer'>
          <Link to='pricing' smooth={true} duration={500}>
            Pricing
          </Link>
        </li>
        {/* <li>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li> */}
        <li className='mx-20 cursor-pointer'>
          <Link to='blog' smooth={true} duration={500}>
            Blog
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-[130px] right-10 w-[25%] h-[35%]  flex flex-col justify-center items-center z-100'
        }
      >
        <li className='py-6 text-xl cursor-pointer'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-xl cursor-pointer'>
          {' '}
          <Link onClick={handleClick} to='programs' smooth={true} duration={500}>
            Programs
          </Link>
        </li>
        <li className='py-6 text-xl cursor-pointer'>
          {' '}
          <Link onClick={handleClick} to='pricing' smooth={true} duration={500}>
            Pricing
          </Link>
        </li>
        {/* <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li> */}
        <li className='py-6 text-xl cursor-pointer'>
    
          <Link onClick={handleClick} to='blog' smooth={true} duration={500}>
            Blogs
          </Link>
        </li>
      </ul>

            <button className= 'hidden lg:inline md:custom-gradient  md:text-[#FED25B] md:px-4 md:py-1 md:rounded-lg '>Login/Signup</button>

        </div>
    </div>
  )
}

export default NavBar