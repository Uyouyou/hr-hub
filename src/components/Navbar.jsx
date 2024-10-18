import React, { useState } from 'react';
import { CiMenuFries } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const toggleNav = () => {
      setOpen(!open);
    };



  return (
    <nav className='sticky top-0 w-full h-[80px] flex justify-between items-center bg-[#3498db]'>
        <div className='ml-[5rem]'>
            <h1 className='font-poppins text-white text-[40px] italic font-semibold leading-7'>HR hub</h1>
        </div>

        <ul className='hidden md:flex justify-between items-center gap-4 space-x-5 mx-auto'>
            <li><a href="#home" className='font-poppins text-white text-[20px] font-medium leading-5 hover:italic'>Home</a></li>
            <li><a href="#about" className='font-poppins text-white text-[20px] font-medium leading-5 hover:italic'>About Us</a></li>
            <li><a href="#services" className='font-poppins text-white text-[20px] font-medium leading-5 hover:italic'>Services</a></li>
            <li><a href="#careers" className='font-poppins text-white text-[20px] font-medium leading-5 hover:italic'>Careers</a></li>
            <li><a href="#contact" className='font-poppins text-white text-[20px] font-medium leading-5 hover:italic'>Contact Us</a></li>
        </ul>


        <div className='hidden md:flex justify-between items-center space-x-5 mr-[5rem]'>
            <button className='bg-[#708090]  text-white hover:bg-[#8899a9] px-6 py-2 rounded-lg transition duration-500 ease-in-out font-poppins font-medium leading-5 text-[18px]'>Log in</button>
            <button className='bg-white  text-gray-700 px-6 py-2 rounded-lg transition duration-500 ease-in-out font-poppins font-medium leading-5 text-[18px]'>Sign up</button>
        </div>

        <div className='md:hidden text-2xl cursor-pointer font-bold mr-[1.5rem] text-[#fff]' onClick={toggleNav}>
          {open ? <LiaTimesSolid /> : <CiMenuFries />}
        </div>


        {/*Mobile screens*/}
        <ul className={`absolute top-20 left-0 w-full h-screen flex flex-col items-center gap-[2rem] bg-[#3498db] bg-opacity-3 backdrop-blur-md transition-all duration-700 ease-in-out md:hidden ${open ? 'block' : 'hidden'}`} 
        >
            <div className='mt-[3rem] flex flex-col items-center space-y-8'>
            <li><a href="#home" className='font-poppins text-white text-[18px] font-medium leading-5 hover:italic'>Home</a></li>
            <li><a href="#about" className='font-poppins text-white text-[18px] font-medium leading-5 hover:italic'>About Us</a></li>
            <li><a href="#services" className='font-poppins text-white text-[18px] font-medium leading-5 hover:italic'>Services</a></li>
            <li><a href="#careers" className='font-poppins text-white text-[18px] font-medium leading-5 hover:italic'>Careers</a></li>
            <li><a href="#contact" className='font-poppins text-white text-[18px] font-medium leading-5 hover:italic'>Contact Us</a></li>
            <button className='bg-[#708090]  text-white hover:bg-[#8899a9] px-6 py-2 rounded-lg transition duration-500 ease-in-out font-poppins font-medium leading-5 text-[18px]'>Log in</button>
            <button className='bg-white  text-gray-700 px-6 py-2 rounded-lg transition duration-500 ease-in-out font-poppins font-medium leading-5 text-[18px]'>Sign up</button>

            </div>
        
        </ul>
    </nav>
  )
}

export default Navbar