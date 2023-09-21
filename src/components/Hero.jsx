import React from 'react'
import image from '../assets/image1.png'

const Hero = () => {
  return (
    <div className='bg-background-light-400 h-5/6 flex'>
        <div className='grid-cols-2'>
            <div className=''>
                <h1 className='text-4xl text-[#1D1D1D]'>Offering a wide range of</h1>
                <h1 className='text-4xl text-[#FEEB09]' >beers,</h1>
                <h1 className='text-4xl text-[#FEEB09]'>wines</h1>
                <h1 className='text-4xl text-[#FEEB09]'>and spirits</h1>
            </div>
            <div className='flex'>
                <img src={image} className='w-9/12' />
            </div>
        </div>
    </div>
  )
}

export default Hero