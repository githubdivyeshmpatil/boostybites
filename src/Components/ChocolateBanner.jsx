import React, { useState } from 'react';
import bgImage from "../assets/images/slider-bg1.png";
import img1 from "../assets/images/choclate.png";
import img2 from "../assets/images/choclate.png";
import img3 from "../assets/images/choclate.png";
import bgImage1 from "../assets/images/slider-bg2.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import arrowImg from "../assets/images/white-arrow.png";

function ChocolateBanner() {
  const slides = [
    {
      image: img1,
      text: {
        small: "Chocolate",
        large: "Boosty Bites",
      },
    },
    {
      image: img2,
      text: {
        small: "Enjoy",
        large: "Delight",
      },
    },
    {
      image: img3,
      text: {
        small: "Treats",
        large: "Inside",
      },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
      setFade(true);
    }, 300);
  };

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setFade(true);
    }, 300);
  };

  return (
    <div className="relative flex flex-col md:flex-row h-screen w-full">
      {/* Arrows: Responsive Position */}
      <div className="absolute md:top-1/2 md:left-4 bottom-4 left-1/2 transform md:-translate-y-1/2 -translate-x-1/2 md:translate-x-0 flex md:flex-col gap-2 z-30">
        <button
          onClick={handlePrev}
          className="bg-white text-[#5c2e0b] w-10 h-10 md:w-16 md:h-16 flex items-center justify-center shadow-md hover:bg-gray-100 transition"
        >
          <FaArrowLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          className="bg-white text-[#5c2e0b] w-10 h-10 md:w-16 md:h-16 flex items-center justify-center shadow-md hover:bg-gray-100 transition"
        >
          <FaArrowRight size={20} />
        </button>
      </div>

      {/* Left Column with Text */}
      <div
        className="w-full md:w-[70%] h-[60vh] md:h-full bg-cover bg-center flex flex-col justify-center items-center md:items-start relative px-4 md:pr-2 text-white text-center md:text-left"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h2 className="font-aura drop-shadow-xl transition-opacity duration-500 ease-in-out md:ml-32">
          <span className="text-4xl sm:text-5xl md:text-6xl font-bold block">
            {slides[currentIndex].text.small}
          </span>
          <span className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold block leading-tight">
            {slides[currentIndex].text.large}
          </span>
          <button className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 flex items-center gap-2 text-white text-base sm:text-lg font-semibold transition">
            Read More
<img src={arrowImg} alt="arrow" className="w-12 sm:w-16 h-6 sm:h-7" />
          </button>
        </h2>
      </div>

      {/* Right Column with Background */}
      <div
        className="w-full md:w-[30%] h-[30vh] md:h-full bg-center flex items-center justify-center p-4 md:p-6 relative z-10"
        style={{
          backgroundImage: `url(${bgImage1})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Center Image */}
      <img
        src={slides[currentIndex].image}
        alt="Decoration"
        className={`absolute top-[65%] md:top-1/2 left-1/2 md:left-[75%] transform -translate-x-1/2 -translate-y-1/2 w-52 h-52 md:w-[500px] md:h-[500px] object-contain z-20 transition-opacity duration-500 ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}

export default ChocolateBanner;
