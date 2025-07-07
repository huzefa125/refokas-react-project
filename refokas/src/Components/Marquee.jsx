import React from 'react'
import { motion } from "framer-motion";
function Marquee({imagesurl}) {
  return (
    <div>
      <motion.div 
        initial={{x: "0vw"}} 
        animate={{x : "-100vw"}} 
        transition={{ease:"linear",duration:10, repeat: Infinity}} 
        className='flex w-full mt-10 py-4 md:py-8 gap-8 md:gap-15 whitespace-nowrap overflow-hidden'>
        {imagesurl.map((url, idx) => (
          <img key={idx} src={url} className='w-[15vw] md:w-[6vw] flex-shrink-0' alt='' />
        ))}
      </motion.div> 
      <motion.div 
        initial={{x: "0vw"}} 
        animate={{x : "-100vw"}} 
        transition={{ease:"linear",duration:10, repeat: Infinity}} 
        className='flex w-full mt-10 py-4 md:py-8 gap-8 md:gap-15 whitespace-nowrap overflow-hidden'>
        {imagesurl.map((url, idx) => (
          <img key={idx} src={url} className='w-[15vw] md:w-[6vw] flex-shrink-0' alt='' />
        ))}
      </motion.div> 
    </div>
  )
}
export default Marquee
