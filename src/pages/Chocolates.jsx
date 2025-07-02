import React, { useEffect } from 'react'
import BackgroundSection from '../Components/BackgroundSection'
import aboutbg4 from '../assets/images/chocolatebg.jpg'
import Title from '../Components/Title'
import ChocolateSlider from '../Components/ChocolateSlider'
import NutraceuticalChocolates from '../Components/NutraceuticalChocolates'
import FunctionalChocolateSlider from '../Components/FunctionalChocolates'

function Chocolates() {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
   <>
     <BackgroundSection
        imageUrl={aboutbg4}
        className="h-[500px] p-10"
      >
      </BackgroundSection>
      
   </>
  )
}

export default Chocolates