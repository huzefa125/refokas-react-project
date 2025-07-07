import React from 'react'

function Footer() {
  return (
    <div className="w-full"> {/* Removed overflow-x-hidden from here, will apply globally */}
        <div className='w-full'>
            <div className='max-w-screen-xl py-8 md:py-10 px-4 md:px-0 flex flex-col md:flex-row gap-8 md:gap-32 md:ml-15'>
                <div className='basis-1/2 mb-6 md:mb-0'>
                    <h1 className='text-4xl sm:text-6xl md:text-[11.5rem] font-semibold leading-none tracking-tighter break-words'>refokas.</h1>
                </div>
                <div className='basis-1/2 flex flex-col md:flex-row gap-6 md:gap-10 md:ml-10'>
                    <div>
                        <h4 className='font-bold text-zinc-400'>Socials</h4>
                        {["Instagram","twitter","LinkdIn"].map((elem, index) => (
                            <a key={index} className='block mt-3 text-zinc-600 text-base sm:text-lg md:text-xl hover:text-white transition-colors duration-150'>{elem}</a>
                        ))}
                    </div>
                    <div className='md:ml-10'>
                        <h4 className='font-bold text-zinc-400'>Sitemap</h4>
                        {["Home","work","Career","Contact"].map((ele,index)=>(
                            <a href="" key={index} className='block mt-3 text-zinc-600 text-base sm:text-lg md:text-xl hover:text-white transition-colors duration-150'>{ele}</a>
                        ))}
                    </div>
                </div>
                <div className='md:mr-20 md:mb-20 mt-6 md:mt-0'>
                    <div className='whitespace-normal md:whitespace-nowrap text-sm sm:text-base md:text-lg'>
                    <p>Refokus is pioneering digital<br /> agency driven by design and <br />empowered by technology.</p>
                        </div>
                        <div className='p-2 md:p-5 md:pl-10'>
                            <button className='bg-blue-600 rounded-md m-1 p-2 sm:p-3 text-base sm:text-lg md:text-base whitespace-nowrap hover:bg-blue-700 transition-colors duration-150'>Enterprise Partner</button>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
