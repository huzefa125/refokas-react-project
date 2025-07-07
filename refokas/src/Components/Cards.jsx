import React from 'react'
import Card from './Card'

function Cards() {
   
  return (
    <div>
        <div className='w-full'>
            <div className='max-w-screen-xl h-max mx-auto py-8 md:py-20 flex flex-col
            md:flex-row gap-4 md:gap-2 px-2 md:px-0'>
                <Card width={"w-full md:basis-1/3"} project={""} />
                <Card width={"w-full md:basis-2/3"} project={"start a project"} hover={"bg-violet-500"} />
                </div>
            
        </div>
    </div>
  )
}

export default Cards
