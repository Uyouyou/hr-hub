import React from 'react';
import Diverse from '../assets/diverse.avif';
import Team from '../assets/team.avif';

const About = () => {
  return (
    <section className="w-full h-full flex flex-col items-center">
      <div className="flex flex-col items-center space-y-5 mt-[4rem] lg:mt-8">
        <h1 className="font-poppins text-gray-700 text-[30px] leading-7 font-semibold">
          Our Purpose
        </h1>
        <p className="font-poppins text-gray-700 text-[18px] leading-6 font-medium text-center max-w-[800px]">
          We empower organizations with innovative HR solutions to build engaged, diverse, and productive workforces.
        </p>
      </div>

     
      <div className="flex flex-col lg:flex-row justify-between items-center space-y-5 lg:space-y-0 lg:space-x-10 mt-[4rem] lg:mt-8 lg:px-20">
        <div className="w-full lg:w-1/2">
          <h2 className="font-poppins text-gray-700 text-[20px] leading-7 font-medium text-center lg:text-left px-4 lg:px-0">
            Our mission is to revolutionize HR management by delivering cutting-edge technology solutions that streamline HR processes, enhance employee engagement, optimize talent management, and improve workforce productivity.
          </h2>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={Diverse}
            alt="3D image of collaboration"
            className="w-[90%] lg:w-[80%] rounded-md"
          />
        </div>
      </div>

     
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center space-y-5 lg:space-y-0 lg:space-x-10 mt-8 lg:px-20">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={Team}
            alt="3D image of collaboration"
            className="w-[90%] lg:w-[80%] rounded-md"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="font-poppins text-gray-700 text-[20px] leading-7 font-medium text-center lg:text-left px-4 lg:px-0">
            Our vision is to empower organizations to build a highly productive, engaged, and diverse workforce through innovative HR solutions that foster inclusion, optimize talent acquisition, and improve employee retention. 
          </h2>
        </div>
      </div>
    </section>
  );
};

export default About;
