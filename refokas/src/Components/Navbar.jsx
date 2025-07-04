import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div>
        <div className='max-w-screen-xl mx-40 py-6 flex items-center justify-between border-b-[1px] border-zinc-700'>
            <div className='nleft flex items-center'>
                <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
            <div className='links flex gap-14 ml-20'>
                {["Home", "Work", "Culture", null, "News"].map((elem, index) => (
                    elem === null ? (
                      <span key={index} className='w-px h-10 bg-zinc-700 inline-block'></span>
                    ) : (
                      <a key={index} href="#" className='text-xs flex items-center gap-1'>
                        {index === 1 && (
                          <span style={{ boxShadow: "0 0 0.25em #00ff19" }} className='inline-block w-1 h-1 bg-green-500 rounded-full'></span>
                        )}
                        {elem}
                      </a>
                    )
                ))}
            </div>
            </div>
             <div className='left'><Button></Button></div>
        </div>
       
    </div>
  )
}

export default Navbar
