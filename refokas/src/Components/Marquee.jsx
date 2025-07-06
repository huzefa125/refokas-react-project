import React from 'react'

function Marquee({imagesurl}) {
  return (
    <div>
      <div className='flex w-full mt-10 md:mt-50 gap-8 md:gap-15 whitespace-nowrap overflow-hidden'>
        {imagesurl.map((url, idx) => (
          <img key={idx} src={url} className='w-[15vw] md:w-[6vw] flex-shrink-0' alt='' />
        ))}
        
      </div>
        <div className='flex w-full mt-10 py-4 md:py-8 gap-8 md:gap-15 whitespace-nowrap overflow-hidden'>
        {imagesurl.map((url, idx) => (
          <img key={idx} src={url} className='w-[15vw] md:w-[6vw] flex-shrink-0' alt='' />
        ))}
        
      </div>
    </div>
  )
}

export default Marquee
