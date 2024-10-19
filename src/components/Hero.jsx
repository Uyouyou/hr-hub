import React from 'react';

const Hero = () => {
  return (
    <section className='w-full flex flex-col items-center bg-[#3498db] py-16 md:py-20 lg:py-24 px-4'>
      <div className='flex flex-col items-center space-y-8 md:space-y-12 lg:space-y-16 mt-[5rem] md:mt-[7rem] lg:mt-[4rem]'>
        <h1 className='font-poppins text-[28px] md:text-[35px] lg:text-[40px] leading-7 font-bold text-white text-center'>
          Empowering Your Workforce Potential
        </h1>
        <p className='font-poppins text-[18px] md:text-[22px] lg:text-[25px] leading-5 font-medium text-white text-center'>
          Streamline HR processes and boost employee engagement with our innovative solutions
        </p>
        <div className='flex flex-col md:flex-row justify-center md:justify-between items-center space-y-4 md:space-y-0 space-x-0 md:space-x-5 lg:mr-[3rem]'>
          <button className='bg-[#708090] text-white hover:bg-[#8899a9] px-6 py-2 rounded-lg transition duration-500 ease-in-out font-poppins font-medium leading-5 text-[16px] md:text-[18px]'>
            Learn more
          </button>
          <button className='bg-white text-gray-700 hover:bg-gray-100 px-6 py-2 rounded-lg transition duration-500 ease-in-out font-poppins font-medium leading-5 text-[16px] md:text-[18px]'>
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
