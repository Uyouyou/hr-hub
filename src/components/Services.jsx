import React from 'react';
import { GiMagnifyingGlass, GiStarShuriken, GiPieChart } from 'react-icons/gi';
import { MdAssignmentInd } from 'react-icons/md';
import { RiEmotionHappyLine } from 'react-icons/ri';
import { FaUsers, FaPinterest, FaGoogle } from 'react-icons/fa';
import { SiAirtable, SiNetflix } from 'react-icons/si';
import { FaAtlassian } from 'react-icons/fa6';

const services = [
  {
    title: "Talent Acquisition",
    icon: <GiMagnifyingGlass />,
    body: "Streamline your recruitment process with our tailored talent acquisition strategies."
  },
  {
    title: "Employee Onboarding",
    icon: <MdAssignmentInd />,
    body: "Enhance your onboarding experience with our comprehensive solutions for smooth transitions."
  },
  {
    title: "Performance Management",
    icon: <GiStarShuriken />,
    body: "Implement effective performance management systems that foster continuous feedback and development."
  },
  {
    title: "Employee Engagement",
    icon: <RiEmotionHappyLine />,
    body: "Boost employee engagement with our innovative programs that promote a positive workplace culture."
  },
  {
    title: "Workforce Analytics",
    icon: <GiPieChart />,
    body: "Utilize data-driven insights to optimize talent management and enhance performance."
  },
  {
    title: "Diversity and Inclusion",
    icon: <FaUsers />,
    body: "Champion diversity and inclusion in your workplace with our specialized programs."
  }
];

const Services = () => {
  return (
    <section className='w-full h-full flex flex-col items-center px-4'>
      <div className='flex flex-col items-center space-y-5 mt-16'>
        <h2 className='font-poppins text-gray-700 text-[28px] md:text-[30px] leading-7 font-semibold text-center'>
          Services We Offer
        </h2>
        <p className='font-poppins text-gray-700 text-[16px] md:text-[18px] leading-6 font-medium text-center'>
          Transform your HR operations with expert consulting, training programs, <br /> and advanced technology solutions.
        </p>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full max-w-6xl">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="text-4xl mb-4 text-[#3498db]">{service.icon}</div>
            <h3 className="font-poppins text-xl font-bold mb-2">{service.title}</h3>
            <p className="font-poppins text-gray-700">{service.body}</p>
          </div>
        ))}
      </div>

    
      <div className='flex flex-wrap justify-center items-center gap-8 mt-16'>
        <span className='flex items-center font-poppins text-gray-700 text-[16px] leading-6 font-semibold gap-2'>
          <FaPinterest size={30} /> Pinterest
        </span>
        <span className='flex items-center font-poppins text-gray-700 text-[16px] leading-6 font-semibold gap-2'>
          <SiAirtable size={30} /> Airtable
        </span>
        <span className='flex items-center font-poppins text-gray-700 text-[16px] leading-6 font-semibold gap-2'>
          <SiNetflix size={30} /> Netflix
        </span>
        <span className='flex items-center font-poppins text-gray-700 text-[16px] leading-6 font-semibold gap-2'>
          <FaAtlassian size={30} /> Atlassian
        </span>
        <span className='flex items-center font-poppins text-gray-700 text-[16px] leading-6 font-semibold gap-2'>
          <FaGoogle size={30} /> Google
        </span>
      </div>
    </section>
  );
}

export default Services;
