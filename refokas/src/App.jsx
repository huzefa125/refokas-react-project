import React from 'react'
import Navbar from './Components/Navbar'
import Work from './Components/Work'
import Stripes from './Components/Stripes'
import Products from './Components/Products'
import Marquees from './Components/Marquees'
import Cards from './Components/Cards'
import Footer from './Components/Footer'

function App() {
  return (
    <div className='w-full min-h-screen bg-zinc-900 font-["Satoshi"] text-white overflow-x-hidden'>
      <Navbar />
      <div className='mb-12'>
        <Work />
      </div>
      <div className='mb-12'>
        <Stripes />
      </div>
      <div className='mb-12'>
        <Products />
      </div>
      <div className='mb-12'>
        <Marquees />
      </div>
      <div className='mb-12'>
        <Cards />
      </div>
      <Footer />
    </div>
  )
}

export default App
