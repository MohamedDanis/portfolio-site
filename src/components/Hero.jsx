import React from 'react'
import port from '../assets/img/port.png'
import resume from '../assets/MohamedDanis-resume.pdf'

function Hero() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume; // Replace with the path to your file
    link.download = 'Danis-Resume'; // Replace with the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="  w-full h-[33.5rem] bg-white rounded-[3.12rem] flex flex-col md:flex-row">
      <div className='px-8 py-8 md:pt-24 md:pl-24 h-full'>
        <h1 className='font-enigmat text-primeblu  md:text-6xl md:leading-normal 	 text-[30px]'>Heloo,<br></br> I'm Mohamed Danis<br></br>Front-end Developer</h1>
        <a href={resume} download>

        <button className='mt-8'>
          <span class="button_top "> Resume
          </span>
        </button>
        </a>
      </div>
      <div className='h-full'>
        <img src={port} className="h-[61%] ml-24 mt-[-2rem]  md:h-full md:mt-0" alt="" />
      </div>
    </div>
  )
}

export default Hero