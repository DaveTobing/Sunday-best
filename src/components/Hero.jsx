import React from 'react'
import image from '../assets/image1.png'
import banner2 from '../assets/banner2.svg'
import banner3 from '../assets/banner3.svg'
import bg3 from '../assets/bg3.png';  // <-- Importing the bg3 image
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero = () => {
  return (
    <Carousel showArrows={false} autoPlay={false} interval={20000} infiniteLoop={true} showStatus={false} showThumbs={false}>
        <div 
            className='bg-background-light-400 h-full grid-cols-2 flex flex-row justify-around'
            style={{ 
                backgroundImage: `url(${bg3})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat',
                width: '100%',
                minHeight: '160px',
            }}
        >
            <div className='flex flex-col items-start mt-4 md:justify-center md:gap-6 md:mt-0'>
                <h1 className='text-lg md:text-5xl font-semibold text-[#1D1D1D] font-signika'>Offering the best quality of</h1>
                <h1 className='text-lg md:text-6xl font-bold text-[#FEEB09] font-signika'>liquors at the most</h1>
                <h1 className='text-lg md:text-6xl font-bold text-[#FEEB09] font-signika'>affordable prices</h1>
                <div className='bg-background-light-300 w-32 h-8 md:w-36 md:h-14 rounded-lg '>
                    <Link to = '/Product'>
                        <button className='font-bold font-signika text-sm mt-1.5 md:text-lg md:mt-3.5'>Shop the Liquors</button>
                    </Link>
                </div>
            </div>
            <div className='flex items-center'>
                <img className='w-full md:h-4/6' />
            </div>
        </div>

        <div>
            <img src={banner2} alt="" />
        </div>

        <div>
            <img src={banner3} alt="" />
        </div>

    </Carousel>

  )
}

export default Hero