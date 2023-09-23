import React from 'react'
import image from '../assets/image1.png'
import banner2 from '../assets/banner2.svg'
import banner3 from '../assets/banner3.svg'
import Rectangle from '../assets/Rectangle.svg'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero = () => {
  return (
    <Carousel showArrows={false} autoPlay={true} interval={10000} infiniteLoop={true} showStatus={false} showThumbs={false}>
        <div className='bg-background-light-400 h-full grid-cols-2 flex flex-row justify-around'>
            <div className='flex flex-col justify-center gap-6 items-start'>
                <h1 className='text-5xl text-[#1D1D1D] font-signika'>Offering a wide range of</h1>
                <h1 className='text-5xl text-[#FEEB09] font-signika'>beers,</h1>
                <h1 className='text-5xl text-[#FEEB09] font-signika'>wines,</h1>
                <h1 className='text-5xl text-[#FEEB09] font-signika'>and spirits</h1>
                <div className='bg-background-light-300 w-36 h-14 rounded-lg'>
                    <Link to = '/Product'>
                        <button className='font-bold mt-4 font-signika text-lg'>Shop the Spirits</button>
                    </Link>
                </div>
            </div>
            <div className='flex items-center'>
                <img src={image} className='w-full h-4/6' />
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