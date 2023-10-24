import React, { useContext } from 'react'
import { useState } from 'react';
import Cards from './Cards'; // Jangan lupa untuk mengimpor komponen Cards
import popularData from '../database/popular.js'; // Gantikan dengan path yang sesuai ke file popular.js Anda
import { DarkModeContext } from '../context/darkmode'
import { Link } from 'react-router-dom';

const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

const Popular = () => {
    const [theme, setTheme] = useContext(DarkModeContext);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={`flex flex-col justify-center items-center lg:mx-42`}>
            <div className='m-10 mt-20'>
                <h1 className={`text-xl lg:text-5xl font-extrabold text-center uppercase mb-4`}>
                    Our Popular Booze
                </h1>
                <h2 className={`text-md lg:text-xl font-bold italic text-center`}>
                    Your Premier Destination for Exceptional Spirits. <br />
                    Offering you wide range of liquor and spirits.
                </h2>
            </div>

            <div className='flex flex-wrap justify-center gap-20'>
                {popularData.map((product, index) => (
                    <Cards 
                        key={index}
                        title={product.title}
                        price={product.price}
                        size={product.size}
                        link_tokopedia={product.link_tokopedia}
                        link_shopee={product.link_shopee}
                        link_blibli={product.link_blibli}
                        gambar={product.gambar}
                    />
                ))}
            </div>

            <div className='flex justify-center mt-4 mb-20'>
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
        </div>
    )
}

export default Popular;
