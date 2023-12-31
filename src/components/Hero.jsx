import React, { useState } from 'react';
import banner2 from '../assets/banner2.svg'
import banner3 from '../assets/banner3.svg'
import background from '../assets/Backgroundtop.png';
import tokopedia from '../assets/tokopedia_words.svg';
import blibli from '../assets/blibli_logo.svg';
import shoppe from '../assets/shopee_logo2.svg';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const handleClick = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <Carousel showArrows={true} autoPlay={true} interval={20000} infiniteLoop={true} showStatus={false} showThumbs={false}>
            <div
              className='relative flex flex-row items-center lg:h-full'
              style={{ 
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                minHeight: '150px',
              }}
            >
              <div className='absolute inset-0 bg-white opacity-50'></div>
              <div className='flex flex-col ml-[150px] md:ml-[200px] lg:ml-[400px] text-left relative'>
                  <h1 className='text-3xl md:text-4xl lg:text-8xl font-extrabold text-[#5D4638] mb-4'>Cheers to <br /> Excellence</h1>
                  <h2 className='hidden md:block text-2xl lg:text-3xl font-bold text-[#5D4638]'>Where Quality Meets Convenience <br /> at Our Liquor Haven</h2>
                  <Link to= '/product'>
                    <button 
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={handleClick}
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
                  </Link>
              </div>
              <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 h-6 w-24 overflow-hidden'>
                  {/* This container helps with positioning and hiding the bottom 3/4 of the circle */}
                  <div className='w-24 h-24 bg-[#02A1E9] rounded-full absolute bottom-full'></div>
                  {/* The circle is positioned so that it's fully above the bottom edge of the container */}
              </div>

            </div>

            <div>
              <img src={banner2} alt=""/>
            </div>

            <div>
                <img src={banner3} alt="" />
            </div>
      </Carousel>
      <div className='bg-background-150'>
        <div className='flex flex-row justify-around mx-4 lg:mx-10 py-10 items-center'>
          <Link to='https://www.tokopedia.com/amp/sundaybestid'>
            <img src={tokopedia} alt="" className='w-28 lg:w-40 saturate-0 pt-2'/>
          </Link>
          <Link to='https://shopee.co.id/sundaybestid?smtt=0.286446929-1662525177.9'>
            <img src={shoppe} alt="" className='w-24 lg:w-32 saturate-0'/>
          </Link>
          <Link to='https://www.blibli.com/merchant/sundaybest-id-official-store/SUI-70129 '>
            <img src={blibli} alt="" className='w-24 lg:w-28 saturate-0'/>
          </Link>
        </div>


      </div>
    </div>

  );
}

export default Hero;