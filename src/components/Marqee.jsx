import { motion } from 'framer-motion';
import React from 'react';

const Marquee = () => {
  return (
    <div className='w-full py-16 bg-[#004D43] overflow-hidden'>
      <div className='border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap'>
        <motion.h1
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{ ease: 'linear', repeat: Infinity, duration: 5 }}
          className='text-[10vw] leading-none font-["founders-Grotesk_X-Condesed"] uppercase pt-6.5 mt-2 text-white'
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{ ease: 'linear', repeat: Infinity, duration: 5 }}
          className='text-[10vw] leading-none font-["founders-Grotesk_X-Condesed"] uppercase pt-6.5 mt-2 text-white'
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{ ease: 'linear', repeat: Infinity, duration: 5 }}
          className='text-[10vw] leading-none font-["founders-Grotesk_X-Condesed"] uppercase pt-6.5 mt-2 text-white'
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;

