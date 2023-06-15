import React from 'react'
import port from '../assets/img/port.png'
import resume from '../assets/MohamedDanis-resume.pdf'
import './Hero.css'

function Hero() {

  return (
    <div className=" max-w-7xl mx-auto h-[33.5rem] bg-white rounded-[3.12rem] flex flex-col md:flex-row">
      <div className='px-8 py-8 md:pt-24 md:pl-24 h-full'>
        <h1 className='font-enigmat z-2 text-primeblu  md:text-6xl sm:text-4xl md:leading-normal 	 text-[30px]'>Heloo,<br></br> I'm Mohamed Danis<br></br>Front-end Developer</h1>
        <a href={resume} download>

        <button className='mt-8'>
          <span class="button_top "> Resume
          </span>
        </button>
        </a>
      </div>
      <div className='h-full pl-28 z-[2]'>
        <img src={port} className="h-[61%]  mt-[-2rem]  md:h-full md:mt-0" alt="" />
      </div>
      <div className="cont z-1">
        <div className="shape1"></div>
        <div className="shape2"></div>
      </div>
    </div>
  )
}

export default Hero