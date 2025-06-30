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
       <div className="mt-6 md:mt-10 lg:mt-16 ">
          <Title
            text="Our chocolate products"
            dec="Smooth, rich, and irresistible—made with natural sweeteners and premium cocoa. Available in"
          />
          <ChocolateSlider />
        </div>

        <div className="">
          <Title
            text="Nutraceutical Chocolates for Kids"
            dec="A first-of-its-kind range designed for growing children—each bar is loaded with essential nutrients."
          />
          <NutraceuticalChocolates />

          <Title
            text="Functional Chocolate Squares"
            dec="Perfect for adults and fitness enthusiasts."
          />
          <FunctionalChocolateSlider />
        </div>
   </>
  )
}

export default Chocolates