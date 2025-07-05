import React from 'react'
import Navbar from './Components/Navbar'
import Work from './Components/Work'
import Stripes from './Components/Stripes'
import Products from './Components/Products'
import Marquees from './Components/Marquees'
import Cards from './Components/Cards'

function App() {
  return (
    <div className='w-full min-h-screen bg-zinc-900 font-["Satoshi"] text-white'>
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <div className="mt-200">
        <Marquees />
        <Cards></Cards>
      </div>
    </div>
  )
}

export default App
