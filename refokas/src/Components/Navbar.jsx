import React, { useState } from 'react'
import Button from './Button'
import { FiMenu, FiX } from 'react-icons/fi'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navLinks = ["Home", "Work", "Culture", null, "News"]

  return (
    <nav className="relative z-50 w-full bg-zinc-900">
      <div className='max-w-screen-xl w-full px-4 md:px-10 mx-auto py-4 md:py-6 flex flex-row items-center justify-between border-b-[1px] border-zinc-700'>
        {/* Logo */}
        <div className='flex items-center'>
          <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="logo" className="h-8 md:h-10" />
        </div>
        {/* Desktop Links */}
        <div className='hidden md:flex links gap-4 md:gap-14 ml-0 md:ml-20 flex-wrap items-center'>
          {navLinks.map((elem, index) => (
            elem === null ? (
              <span key={index} className='hidden md:inline-block w-px h-10 bg-zinc-700'></span>
            ) : (
              <a key={index} href="#" className='text-xs flex items-center gap-1 px-3 py-2 rounded-md hover:bg-zinc-800 transition-colors duration-150'>
                {index === 1 && (
                  <span style={{ boxShadow: "0 0 0.25em #00ff19" }} className='inline-block w-1 h-1 bg-green-500 rounded-full'></span>
                )}
                {elem}
              </a>
            )
          ))}
        </div>
        {/* Desktop Button */}
        <div className='hidden md:block ml-6'><Button /></div>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-zinc-500"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-900 border-b border-zinc-800 shadow-lg animate-fade-in z-40">
          <div className="flex flex-col items-center py-4 gap-2">
            {navLinks.map((elem, index) => (
              elem === null ? (
                <span key={index} className='w-4 h-px bg-zinc-700 my-2'></span>
              ) : (
                <a
                  key={index}
                  href="#"
                  className='w-full text-base flex items-center gap-2 px-6 py-3 rounded-md hover:bg-zinc-800 transition-colors duration-150 text-center'
                  onClick={() => setMenuOpen(false)}
                >
                  {index === 1 && (
                    <span style={{ boxShadow: "0 0 0.25em #00ff19" }} className='inline-block w-2 h-2 bg-green-500 rounded-full'></span>
                  )}
                  {elem}
                </a>
              )
            ))}
            <div className="w-full flex justify-center mt-2">
              <Button />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
