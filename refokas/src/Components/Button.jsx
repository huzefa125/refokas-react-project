import React from 'react'
import { IoIosReturnRight } from 'react-icons/io'

function Button({title= "Get Started"}) {
  return (
    <div>
      <button className='min-w-32 md:min-w-40 px-3 py-2 bg-zinc-100 text-black rounded-full flex justify-between items-center gap-2 text-sm md:text-base'>
       {title} <span className='text-sm font-medium'><IoIosReturnRight /></span>
      </button>
    </div>
  )
}

export default Button