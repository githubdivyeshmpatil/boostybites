import React, { useEffect } from 'react'
import BackgroundSection from '../Components/BackgroundSection'
import aboutbg from '../assets/images/bg3.jpg'
import AboutCompany from '../Components/AboutCompany'

function About() {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
   <>
    <BackgroundSection
        imageUrl={aboutbg}
        className="h-[500px] p-10"
      >
      </BackgroundSection>
        <AboutCompany />
   </>
  )
}

export default About