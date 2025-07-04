import React from 'react'

function Stripe({ val }) {
  if (!val) return null;
  return (
    <div>
      <div className='max-w-72 px-10 py-4 border-t-2 border-b-2 border-r-2 border-l-2 ml-1 gap-3 border-zinc-700 flex-row flex justify-between items-center'>
        <img src={val.url} alt="award" className="h-8" />
        <span className='font-semibold mr-2'>{val.number}</span>
      </div>
    </div>
  )
}

export default Stripe

