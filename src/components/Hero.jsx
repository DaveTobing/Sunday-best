import React from 'react'
import background from '../assets/Backgroundtop.png'

const Hero = () => {
  return (
      <div className='flex flex-row items-center lg:h-screen bg-background-100 opacity-70'
          style={{ 
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            minHeight: '300px',
          }}
        >
        <div className='flex flex-col ml-[150px] md:ml-[200px] lg:ml-[800px]'>
            <h1 className='text-3xl lg:text-8xl font-bold text-textcolor-600'>Cheers to <br /> Excellence</h1>
            <h1 className='text-xl lg:text-3xl font-bold text-textcolor-600'>Where Quality Meets Convenience <br /> at Our Liquor Haven</h1>
        </div>
      </div>

  )
}

export default Hero