import React from 'react'

function Marquee({imagesurl}) {
  return (
    <div>
      <div className='flex w-full mt-50 gap-15 whitespace-nowrap overflow-hidden'>
        {imagesurl.map((url, idx) => (
          <img key={idx} src={url} className='w-[6vw] flex-shrink-0 ' alt='' />
        ))}
        
      </div>
        <div className='flex w-full mt-10 py-8 gap-15 whitespace-nowrap overflow-hidden'>
        {imagesurl.map((url, idx) => (
          <img key={idx} src={url} className='w-[6vw] flex-shrink-0 ' alt='' />
        ))}
        
      </div>
    </div>
  )
}

export default Marquee
