import React from 'react'

function Footer() {
  return (
    <div className="w-full"> {/* Removed overflow-x-hidden from here, will apply globally */}
        <div className='w-full'>
            <div className='max-w-screen-xl py-10 px-4 md:px-0 flex flex-col md:flex-row gap-8 md:gap-32 md:ml-15'>
                <div className='basis-1/2'>
                    <h1 className='text-6xl md:text-[11.5rem] font-semibold leading-none tracking-tighter'>refokas.</h1>
                </div>
                <div className='basis-1/2 flex flex-col md:flex-row gap-6 md:gap-10 md:ml-10'>
                    <div className=''>
                        <h4>socials</h4>
                        {["Instagram","twitter","LinkdIn"].map((elem, index) => (
                            <a key={index} className='block mt-3 text-zinc-600'>{elem}</a>
                        ))}
                    </div>
                    <div className='md:ml-10'>
                        <h4 className='font-bold text-zinc-400'>Sitemap</h4>
                        {["Home","work","Career","Contact"].map((ele,index)=>(
                            <a href="" key={index} className='block mt-3 text-zinc-600'>{ele}</a>
                        ))}
                    </div>
                </div>
                <div className='md:mr-20 md:mb-20'>
                    <div className='whitespace-normal md:whitespace-nowrap'>
                    <p>Refokus is pioneering digital<br></br> agency driven by design and <br></br>empowered by technology.</p>
                        </div>
                        <div className='p-2 md:p-5 md:pl-10'>
                            <button className='bg-blue-600 rounded-md m-1 p-1 text-sm md:text-base whitespace-nowrap'>Enterprise Partner</button>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
