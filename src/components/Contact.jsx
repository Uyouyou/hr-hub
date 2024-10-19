import React, { useState } from 'react';

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [fullText, setFullText] = useState('');

  const formSubmit = (e) => {
    e.preventDefault();

    const formData = {
      fullName,
      email,
      fullText,
    };

    console.log('Form Data:', formData); 

    setFullName('');
    setEmail('');
    setFullText('');
  };

  return (
    <section className='w-full h-full flex flex-col items-center px-4'>
     
      <div className='flex flex-col items-center space-y-5 mt-[6rem] md:mt-[5rem]'>
        <h2 className='font-poppins text-gray-700 text-[24px] md:text-[30px] lg:text-[32px] leading-7 font-semibold text-center'>
          Contact Us
        </h2>
        <p className='font-poppins text-gray-700 text-[16px] md:text-[18px] lg:text-[20px] leading-6 font-medium text-center'>
          Get in touch with us to see how we can help you today.
        </p>
      </div>

      <form 
        action="#" 
        className='flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full max-w-[600px] gap-6 mt-[2rem] md:mt-[3rem] mb-[6rem]'
        onSubmit={formSubmit}
      >
        <input 
          type="text" 
          placeholder='Full Name' 
          value={fullName} 
          className='w-full h-[45px] md:h-[50px] lg:h-[55px] rounded-lg text-gray-700 outline-gray-700 font-poppins px-4' 
          onChange={(e) => setFullName(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder='Email Address' 
          value={email} 
          className='w-full h-[45px] md:h-[50px] lg:h-[55px] rounded-lg text-gray-700 outline-gray-700 font-poppins px-4' 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <textarea 
          id="message" 
          name="message" 
          rows="4" 
          value={fullText} 
          placeholder="Type your message here..." 
          className='w-full h-[150px] md:h-[200px] lg:h-[250px] text-gray-700 outline-gray-700 font-poppins px-4 py-2 rounded-lg resize-none' 
          onChange={(e) => setFullText(e.target.value)}
        ></textarea>
        <button 
          type="submit" 
          className='bg-[#3498db] text-white px-6 py-2 rounded-lg transition duration-500 ease-in-out font-poppins font-medium leading-5 text-[16px] md:text-[18px] lg:text-[20px] cursor-pointer w-full max-w-[150px]'>
          Submit
        </button>
      </form>
    </section>
  )
}

export default Contact;
