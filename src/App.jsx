import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skill from './components/skill'
import Marquee from "react-fast-marquee";



function App() {
  return (
    <div className='w-full h-screen bg-ground'>
      
        <Navbar />
        {/* <Header/> */}
        <Hero />
        <Marquee>
        <div className='flex justify-evenly md:justify-evenly lg:justify-evenly mt-4 text-xl overflow-x-auto'>
          <div className='md:w-[165px] md:h-[58px]  bg-[#95A672] rounded-full py-2 px-5'>HTML</div>
          <div className='md:w-[165px] md:h-[58px] bg-[#95A672] rounded-full'>CSS</div>
          <div className='md:w-[165px] md:h-[58px] bg-[#95A672] rounded-full'>JS</div>
          <div className='md:w-[165px] md:h-[58px] bg-[#95A672] rounded-full'>React.js</div>
          <div className='md:w-[165px] md:h-[58px] w-auto bg-[#95A672] rounded-full'>Tailwind</div>
          <div className='md:w-[165px] md:h-[58px] bg-[#95A672] rounded-full'>Py</div>
       
        </div>
        </Marquee>
    </div>
  )
}

export default App
