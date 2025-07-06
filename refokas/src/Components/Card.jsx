import React  from 'react'
import { IoIosArrowRoundForward } from "react-icons/io"
function Card({width,project,hover}) {
  return (
    <div className={`${width} w-full mt-30`}>
      <div className={`bg-zinc-700 p-5 rounded-xl h-full hover:bg-violet-900 flex flex-col justify-between ${hover ? `hover:${hover}` : ''}`}>
        <div>
          <div className={`${width} flex justify-between items-center`}>
              <h3>One Heading </h3>
              <IoIosArrowRoundForward />
          </div>
          <h1 className='text-xl md:text-3xl font-medium mt-6 md:mt-10'>whatever heading.</h1>
        </div>
        <div className='down w-full mt-50'>
          <h1 className='text-3xl md:text-6xl font-semibold tracking-tighter leading-none whitespace-nowrap'>{`${project}`}</h1>
          <button className='rounded-full py-2 px-3 border-zinc-50 border-[1px] mt-5'>Contant Us</button>
          <p className='text-sm text-zinc-500 font-medium '>Lorem ipsum dolor sit,consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  )
}
export default Card
