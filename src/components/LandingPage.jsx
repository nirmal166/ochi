
import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
const LandingPage = () => {

  return (
  
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20'>
            {["We Create","Eye Opening","Presentations"].map((item,index)=>{
          return <div className="masker">
           <div className='w-fit flex '>
            {index ===1 && (<motion.div initial={{width:0}} 
            animate={{width:"9vw"}} 
            transition={{ease:[0.76,0,0.24,1],duration:1}}
            className='w-[9vw] h-[5vw] bg-red-500 relative top-[1.2vw]'></motion.div>)}
          <h1 className=' flex items-center uppercase text-9xl leading-none tracking-tighter font-medium'>
            {item}
          </h1>
          </div>
               </div>
            })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">

    {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(

     <p className="text-md font-light tracking-tight leading-none">{item}</p>
    ))}
    <div className='start flex items-center gap-5'>
    <div className='px-5 py-2 border-1px border-zinc-500 rounded-full font-light text-sm capitalize'>
        start the project</div>
        <div className="w-10 h-10 flex justify-center items-center border-[2px] border-zinc-500 rounded-full">
            <span className="rotate-45[deg]"></span>
            <FaArrowUpLong />
    </div>
    </div>
    </div>
    </div>
  )
}

export default LandingPage
