import React from 'react'
import Products from './Products'
import Button from './Button'

function Product({val}) {
  return (
    <div >
      <div className='w-full bg-zinc-900 py-20 text-white'>
        <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-0'>
          <h1 className='text-3xl md:text-6xl capitalize font-semibold ml-0 md:ml-12'>{val.title}</h1>
          <div className='w-full md:w-1/3 mt-6 md:mt-0'>
            <p className='mb-7 mr-0 md:mr-20 pr-0 md:pr-10'>{val.description}</p>
            <div className='flex items-center gap-5'>
              {val.live && <Button />}
              {val.case && <Button title='Case Study' />}
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Product
