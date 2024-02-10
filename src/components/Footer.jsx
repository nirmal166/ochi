import React from 'react';

const Footer = () => {
  return (
    <footer className='w-full py-10 bg-gray-900 text-white'>
      <div className='container mx-auto flex flex-wrap justify-center items-center'>
        <div className='w-full md:w-1/2 text-center md:text-left'>
          <div className='mb-4'>
            <h2 className='text-2xl font-semibold'>Contact Us</h2>
          </div>
          <div className='flex flex-wrap gap-4'>
            <div>
              <h3 className='text-lg font-semibold'>Address:</h3>
              <p>123 Street Name, City, Country</p>
            </div>
            <div>
              <h3 className='text-lg font-semibold'>Phone:</h3>
              <p>+91 1234567890</p>
            </div>
            <div>
              <h3 className='text-lg font-semibold'>Email:</h3>
              <p>info@example.com</p>
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0'>
          <form className='flex gap-2'>
            <input
              type='text'
              placeholder='Enter your email'
              className='px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <button
              type='submit'
              className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




