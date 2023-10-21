import React from 'react'
import banner2 from '../assets/banner2.svg'
import banner3 from '../assets/banner3.svg'
import bg3 from '../assets/bg3.png';  // <-- Importing the bg3 image
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero = () => {
  return (
    <div className='flex flex-row justify-end mx-60 items-center'>
        <div className='flex flex-col items-start mt-7 md:justify-center md:gap-6 lg:mt-0 hover:cursor-default'>
            <h1 className='text-lg md:text-3xl lg:text-7xl font-semibold text-textcolor-600 font-signika'>Cheers to <br /> Excellence</h1>
            <h1 className='text-lg md:text-3xl lg:text-3xl font-bold text-textcolor-600 font-signika'>Where Quality Meets Convenience <br /> at Our Liquor Haven</h1>
        </div>
    </div>
  )
}

export default Hero