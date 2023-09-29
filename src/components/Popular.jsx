import React, { useContext } from 'react'
import Bottle from '../assets/bottle.svg'
import { DarkModeContext } from '../context/darkmode'


const Popular = () => {
const [theme, setTheme] = useContext(DarkModeContext)
  return (
    <div className={`
    ${theme ? "bg-background-dark-200" : "bg-background-dark-400" } flex flex-col justify-center h-4/5 `} 
    >
        <div className='m-10'>
            <h1
                className={`
                    ${theme ? "text-light-600" : "text-light-450" } text-2xl lg:text-5xl font-bold font-signika text-center uppercase mb-4`} 
                >
                Our Popular Booze
            </h1>
           
            <h2  className={`
                ${theme ? "text-light-600" : "text-light-100" } font-semibold font-signika text-lg lg:text-xl text-center uppercase `} >
                Offering a wide range of beers,wines and <br /> spirits. All products 100% ORIGINAL
            </h2>
        </div>

        <div className='flex flex-col items-center lg:flex-row grid-cols-4 justify-around m-10 gap-4'>  
            <div className='flex flex-col bg-background-light-250 rounded-xl w-64 relative overflow-clip items-center'>
                    <img src={Bottle} alt="" className='w-64' />
                        <div className='bg-background-light-300 rounded-[150px] w-[350px] h-[300px] absolute -bottom-[180px] px-12'>
                            <p className='text-center mt-5 font-medium'>
                                    Gordon's Gin 
                            </p>
                            <p className='text-center font-medium'>
                                    Premium Pink
                            </p>
                            <div className='underline bg-[#1D1D1D] h-0.5 w-1/2 mx-auto rounded-lg'></div>
                            <div className='flex flex-row justify-around m-2'>
                                <p>
                                    Rp299.000
                                </p>
                                <p>
                                    700 ml
                                </p>
                            </div>
                        </div>
                </div>
            <div className='flex flex-col bg-background-light-250 rounded-xl w-64 relative overflow-clip items-center'>
                    <img src={Bottle} alt="" className='w-64' />
                        <div className='bg-background-light-300 rounded-[150px] w-[350px] h-[300px] absolute -bottom-[180px] px-12'> 
                            <p className='text-center mt-5 font-medium'>
                                Gordon's Gin 
                            </p>
                            <p className='text-center font-medium'>
                                Premium Pink
                            </p>
                            <div className='underline bg-[#1D1D1D] h-0.5 w-1/2 mx-auto rounded-lg'></div>
                            <div className='flex flex-row justify-around m-2'>
                                <p>
                                    Rp299.000
                                </p>
                                <p>
                                    700 ml
                                </p>
                            </div>
                </div>
            </div>
            <div className='flex flex-col bg-background-light-250 rounded-xl w-64 relative overflow-clip items-center'>
                <img src={Bottle} alt="" className='w-64' />
                    <div className='bg-background-light-300 rounded-[150px] w-[350px] h-[300px] absolute -bottom-[180px] px-12'>
                    <p className='text-center mt-5 font-medium'>
                            Gordon's Gin 
                    </p>
                    <p className='text-center font-medium'>
                            Premium Pink
                    </p>
                    <div className='underline bg-[#1D1D1D] h-0.5 w-1/2 mx-auto rounded-lg'></div>
                    <div className='flex flex-row justify-around m-2'>
                            <p>
                                Rp299.000
                            </p>
                            <p>
                                700 ml
                            </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col bg-background-light-250 rounded-xl w-64 relative overflow-clip items-center'>
                <img src={Bottle} alt="" className='w-64' />
                    <div className='bg-background-light-300 rounded-[150px] w-[350px] h-[300px] absolute -bottom-[180px] px-12'>
                    <p className='text-center mt-5 font-medium'>
                            Gordon's Gin 
                    </p>
                    <p className='text-center font-medium'>
                            Premium Pink
                    </p>
                    <div className='underline bg-[#1D1D1D] h-0.5 w-1/2 mx-auto rounded-lg'></div>
                    <div className='flex flex-row justify-around m-2'>
                            <p>
                                Rp299.000
                            </p>
                            <p>
                                700 ml
                            </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Popular