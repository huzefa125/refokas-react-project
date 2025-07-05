import React from 'react'
import Card from './Card'

function Cards() {
   
  return (
    <div>
        <div className='w-full'>
            <div className='max-w-screen-xl h-max mx-auto py-20 flex 
            md:flex-row gap-2 mr-15 ml-15'>
                <Card width={"basis-1/3"} project={""} />
                <Card width={"basis-2/3"} project={"start a project"}/>
                </div>
            
        </div>
    </div>
  )
}

export default Cards
