import React, { useState } from 'react';
import background from '../assets/Backgroundtop.png';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className='relative flex flex-row items-center lg:h-screen'
      style={{ 
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        minHeight: '300px',
      }}
    >
      <div className='absolute inset-0 bg-white opacity-50'></div>

      <div className='flex flex-col ml-[150px] md:ml-[200px] lg:ml-[400px] relative'>
          <h1 className='text-3xl md:text-4xl lg:text-8xl font-extrabold text-[#5D4638] mb-4'>Cheers to <br /> Excellence</h1>
          <h2 className='hidden md:block text-2xl lg:text-3xl font-bold text-[#5D4638]'>Where Quality Meets Convenience <br /> at Our Liquor Haven</h2>
          <button 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                  backgroundColor: isHovered ? '#FAE920' : '#02A1E9',
                  color: isHovered ? '#02A1E9' : '#FAE920',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 'bold'
              }}
              className='mt-4 md:mt-8 px-4 md:px-6 py-1 md:py-2 rounded-lg focus:outline-none transition-colors duration-200'
          >
              Buy Now!
          </button>
      </div>
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 h-6 w-24 overflow-hidden'>
          {/* This container helps with positioning and hiding the bottom 3/4 of the circle */}
          <div className='w-24 h-24 bg-[#02A1E9] rounded-full absolute bottom-full'></div>
          {/* The circle is positioned so that it's fully above the bottom edge of the container */}
      </div>

    </div>
  );
}

export default Hero;