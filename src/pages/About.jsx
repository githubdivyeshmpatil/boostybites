import React, { useEffect } from 'react'
import BackgroundSection from '../Components/BackgroundSection'
import aboutbg from '../assets/images/boostybites_choco.png'
import AboutCompany from '../Components/AboutCompany'

function About() {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
   <>
    <div className="relative w-full">
     {/* Background Image */}
     <img
       src={aboutbg}
       alt="boosty bites"
       className="w-full h-auto object-contain object-top z-0 relative"
     />
   
     {/* Overlay (Positioned absolutely on top of image) */}
     <div className="absolute  z-10"></div>
   
     {/* Content Section */}
    
   </div>
        <AboutCompany />
   </>
  )
}

export default About