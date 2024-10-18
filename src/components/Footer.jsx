import React from 'react';
import { BiLogoFacebook } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='bg-[#708090] w-full h-auto p-4 md:p-8'>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        
      
        <div className='flex justify-center md:justify-start mb-4 md:mb-0 mt-[3rem] lg:mt-0'>
          <h1 className='font-poppins text-white text-[24px] md:text-[30px] italic font-semibold leading-7'>HR hub</h1>
        </div>

       
        <div className='flex flex-wrap justify-center md:justify-between gap-8 md:gap-10 mb-4 md:mb-0'>
          <div className='flex flex-col items-center space-y-4 mt-[3rem] lg:mt-0 md:items-start'>
            <a href="#about" className='font-poppins text-white text-[16px] md:text-[17px] font-medium leading-5'>About Us</a>
            <a href="#contact" className='font-poppins text-white text-[16px] md:text-[17px] font-medium leading-5'>Contact Us</a>
            <a href="#privacy" className='font-poppins text-white text-[16px] md:text-[17px] font-medium leading-5'>Privacy</a>
            <a href="#terms" className='font-poppins text-white text-[16px] md:text-[17px] font-medium leading-5'>Terms of Service</a>
          </div>

       
          <div className='flex flex-col items-center space-y-4 mt-[3rem] lg:mt-0  md:items-start ml-[2rem] lg:ml-0'>
            <a href="#services" className='font-poppins text-white text-[16px] md:text-[17px] font-medium leading-5'>Services</a>
            <a href="#talent" className='font-poppins text-white text-[16px] md:text-[17px] font-medium leading-5'>Talent Acquisition</a>
            <a href="#work" className='font-poppins text-white text-[16px] md:text-[17px] font-medium leading-5'>Workforce Analytics</a>
            <a href="#training" className='font-poppins text-white text-[16px] md:text-[17px] font-medium leading-5'>Training & Development</a>
          </div>

        
          <div className='flex flex-col items-center space-y-4  md:items-start mt-[3rem] lg:mt-0'>
            <h3 className='font-poppins text-white text-[17px] font-medium leading-5'>Get in Touch</h3>
            <p className='font-poppins text-white text-[16px] md:text-[17px] font-medium leading-5'>
              Email: <a href="mailto:hrhub@gmail.com" className="text-white">hrhub@hub.com</a>
            </p>
            <p className='font-poppins text-white text-[16px] md:text-[17px] font-medium leading-5'>
              Phone: <a href="tel:+11234567890" className="text-white">+1 (123) 456-7890</a>
            </p>

           
            <div className='flex justify-center gap-4 mt-2'>
              <BiLogoFacebook className='text-white text-[25px] cursor-pointer' />
              <IoLogoInstagram className='text-white text-[25px] cursor-pointer' />
              <FaLinkedinIn className='text-white text-[25px] cursor-pointer' />
              <FaXTwitter className='text-white text-[25px] cursor-pointer' />
            </div>
          </div>
        </div>
      </div>

    
      <p className='flex justify-center md:justify-start items-center gap-2 font-poppins text-white text-[14px] md:text-[15px] leading-6 font-medium mt-4'>
        <FaRegCopyright /> HR hub. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer;
