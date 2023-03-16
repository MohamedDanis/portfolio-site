import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Navbar from './components/Navbar'


function App() {
  return (
    <div className='w-full h-screen bg-ground'>
      <div className="container">
       <Navbar/>
        {/* <Header/> */}
        <Hero/>
      </div>
    </div>
  )
}

export default App
