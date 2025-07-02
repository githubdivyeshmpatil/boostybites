import React from 'react'
import { Helmet } from 'react-helmet'
import ChocolateBanner from '../Components/ChocolateBanner'
import AboutCompany from '../Components/AboutCompany'
import Title from '../Components/Title'
import ChocolateVisionSection from '../Components/ChocolateVisionSection'
import ChocolateSlider from '../Components/ChocolateSlider'
import NutraceuticalChocolates from '../Components/NutraceuticalChocolates'
import DistributionAvailability from '../Components/DistributionAvailability'
import FunctionalChocolateSlider from '../Components/FunctionalChocolates'
import Navbar from '../Components/Navbar'
import OfferChocolateSection from '../Components/OfferChocolateSection'

function Home() {
  return (
    <>
      {/* ✅ SEO Helmet Meta Tags */}
      <Helmet>
        <title>Boosty Bites premium chocolate</title>
        <meta
          name="description"
          content="Boosty Bites offers premium functional and nutraceutical chocolates for kids and adults. Explore delicious and nutritious chocolates made with love and science."
        />
        <meta
          name="keywords"
          content="functional chocolate, healthy chocolate, Boosty Bites, kids chocolate, nutraceutical chocolates, fitness chocolate"
        />
        <meta name="robots" content="index, follow" />

        {/* ✅ Social Sharing Meta Tags */}
        <meta property="og:title" content="Boosty Bites | Functional & Nutraceutical Chocolates" />
        <meta
          property="og:description"
          content="Explore the evolution of chocolate with Boosty Bites—premium, nutritious, and delicious."
        />
        <meta
          property="og:image"
          content="http://boostybites.interior360.app/images/og-home.jpg"
        />
        <meta property="og:url" content="http://boostybites.interior360.app/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Wrapper with responsive container and overflow-x-hidden */}
      <div className="w-full overflow-x-hidden">
        <Navbar />
        <ChocolateBanner />

        <div className="mt-6 md:mt-10 lg:mt-16 px-4">
          <AboutCompany />
        </div>

        <Title
          text="The Future of Chocolate"
          dec="Chocolate is evolving—from being just a sweet treat to becoming a functional food. Consumers today demand more from their confections: better ingredients, health benefits, ethical sourcing, and environmental responsibility."
        />
        <ChocolateVisionSection />

        <Title
          text="Our chocolate products"
          dec="Smooth, rich, and irresistible—made with natural sweeteners and premium cocoa. Available in"
        />
        <ChocolateSlider />

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

        <DistributionAvailability />
        <OfferChocolateSection />
      </div>
    </>
  )
}

export default Home
