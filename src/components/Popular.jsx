import React, { useContext } from 'react'
import Bottle from '../assets/bottle.svg'
import { DarkModeContext } from '../context/darkmode'


const Popular = () => {
const [theme, setTheme] = useContext(DarkModeContext)
  return (
    <div className={`flex flex-col justify-center h-screen `} >
        <div className='m-10'>
            <h1
                className={` text-2xl lg:text-5xl font-bold font-signika text-center uppercase mb-4`} 
                >
                Our Popular Booze
            </h1>
           
            <h2  className={`font-semibold font-signika text-lg lg:text-xl text-center uppercase `} >
                Your Premier Destination for Exceptional Spirits. <br />
                Offering you wide range of liquor and spirits.
            </h2>
        </div>

        <div className='flex flex-col items-center lg:flex-row grid-cols-4 justify-around m-10 gap-4'>  
            <div className='flex flex-col bg-background-light-250 rounded-xl w-64 relative overflow-clip items-center'>
                <div className='flex flex-col w-64 relative overflow-clip items-center'>
                    <img src={Bottle} alt="" className='w-64 filter grayscale' />
                    <div className='bg-background-250 opacity-50  w-[350px] h-[300px] absolute -bottom-[250px] px-12 items-center'>
                            <p className='text-center text-xl font-bold my-2'>
                                    CAPTAIN MORGAN 
                            </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col bg-background-light-250 rounded-xl w-64 relative overflow-clip items-center'>
                <div className='flex flex-col w-64 relative overflow-clip items-center'>
                    <img src={Bottle} alt="" className='w-64 filter grayscale' />
                    <div className='bg-background-250 opacity-50  w-[350px] h-[300px] absolute -bottom-[250px] px-12 items-center'>
                            <p className='text-center text-xl font-bold my-2'>
                                    CAPTAIN MORGAN 
                            </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col bg-background-light-250 rounded-xl w-64 relative overflow-clip items-center'>
                <div className='flex flex-col w-64 relative overflow-clip items-center'>
                    <img src={Bottle} alt="" className='w-64 filter grayscale' />
                    <div className='bg-background-250 opacity-50  w-[350px] h-[300px] absolute -bottom-[250px] px-12 items-center'>
                            <p className='text-center text-xl font-bold my-2'>
                                    CAPTAIN MORGAN 
                            </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col bg-background-light-250 rounded-xl w-64 relative overflow-clip items-center'>
                <div className='flex flex-col w-64 relative overflow-clip items-center'>
                    <img src={Bottle} alt="" className='w-64 filter grayscale' />
                    <div className='bg-background-250 opacity-50  w-[350px] h-[300px] absolute -bottom-[250px] px-12 items-center'>
                            <p className='text-center text-xl font-bold my-2'>
                                    CAPTAIN MORGAN 
                            </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center'>
            <div className='flex justify-center bg-background-750 w-32 h-14'>
                <button className='text-textcolor-400 text-lg font-bold'>Shop Now</button>
            </div>
        </div>

    </div>
  )
}

export default Popular