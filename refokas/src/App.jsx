import React from 'react'
import Navbar from './Components/Navbar'
import Work from './Components/Work'
import Stripes from './Components/Stripes'
import Products from './Components/Products'

function App() {
  return (
    <div>
      <div className='w-full h-screen bg-zinc-900 font-["Satoshi"] text-white'>
        <Navbar></Navbar>
        <Work></Work>
        <Stripes></Stripes>
        <Products></Products>
      </div>
    </div>
  )
}

export default App
