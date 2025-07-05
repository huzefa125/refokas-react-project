import React  from 'react'
import { IoIosArrowRoundForward } from "react-icons/io"
function Card({width,project}) {
  return (
    <div className={`${width} w-full mt-30`}> {/* Set fixed responsive width and full height */}
      <div className='bg-zinc-800 p-5 rounded-xl h-full flex flex-col justify-between'> {/* Make card content fill height and space out */}
        <div>
          <div className={`${width} flex justify-between items-center`}>
              <h3>One Heading </h3>
              <IoIosArrowRoundForward />
          </div>
          <h1 className='text-3xl font-medium mt-10'>whatever heading.</h1>
        </div>
        <div className='down w-full mt-50'>
          <h1 className='text-6xl font-semibold tracking-tighter  leading-none whitespace-nowrap'>{`${project}`}</h1>
          <button className='rounded-full py-2 px-3 border-zinc-50 border-[1px] mt-5'>Contant Us</button>
          <p className='text-sm text-zinc-500 font-medium '>Lorem ipsum dolor sit,consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  )
}
export default Card
