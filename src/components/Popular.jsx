import React from 'react'
import Bottle from '../assets/bottle.svg'

const Popular = () => {
  return (
    <div className='flex flex-col justify-center h-4/5 bg-background-light-200'>
        <div className='m-10'>
            <h1 className='text-center font-bold text-4xl'>
                Our Popular Booze
            </h1>
            <h2 className='text-center text-lg'>
                Offering a wide range of beers,wines and
            </h2>
            <h2 className='text-center text-lg'>
                spirits. All products 100% ORIGINAL
            </h2>
        </div>

        <div className='flex flex-row grid-cols-4 justify-around m-10'>  
            <div className='flex flex-col bg-background-light-250 rounded-xl w-64'>
                    <img src={Bottle} alt="" className='w-64' />
                        <div className='bg-background-light-300 rounded-t-3xl z-[2]'>
                            <p className='text-center'>
                                    Gordon's Gin 
                            </p>
                            <p className='text-center'>
                                    Premium Pink
                            </p>
                            <div className='underline bg-[#1D1D1D] h-0.5 w-1/2 mx-auto rounded-lg'></div>
                            <div className='flex flex-row gap-32'>
                                <p>
                                    Rp299.000
                                </p>
                                <p>
                                    700 ml
                                </p>
                            </div>
                        </div>
                </div>
            <div className='flex flex-col bg-background-light-250 rounded-xl w-64'>
                    <img src={Bottle} alt="" className='w-64' />
                        <div className='bg-background-light-300 rounded-t-3xl z-[2]'>  
                            <p className='text-center'>
                                Gordon's Gin 
                            </p>
                            <p className='text-center'>
                                Premium Pink
                            </p>
                            <div className='underline bg-[#1D1D1D] h-0.5 w-1/2 mx-auto rounded-lg'></div>
                            <div className='flex flex-row gap-32'>
                                <p>
                                    Rp299.000
                                </p>
                                <p>
                                    700 ml
                                </p>
                        </div>
                </div>
            </div>
            <div className='flex flex-col bg-background-light-250 rounded-xl w-64'>
                <img src={Bottle} alt="" className='w-64' />
                    <div className='bg-background-light-300 rounded-t-3xl z-[2]'>
                    <p className='text-center'>
                            Gordon's Gin 
                    </p>
                    <p className='text-center'>
                            Premium Pink
                    </p>
                    <div className='underline bg-[#1D1D1D] h-0.5 w-1/2 mx-auto rounded-lg'></div>
                    <div className='flex flex-row gap-32'>
                        <p>
                            Rp299.000
                        </p>
                        <p>
                            700 ml
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col bg-background-light-250 rounded-xl w-64'>
                <img src={Bottle} alt="" className='w-64' />
                    <div className='bg-background-light-300 rounded-t-3xl z-[2]'>
                    <p className='text-center'>
                            Gordon's Gin 
                    </p>
                    <p className='text-center'>
                            Premium Pink
                    </p>
                    <div className='underline bg-[#1D1D1D] h-0.5 w-1/2 mx-auto rounded-lg'></div>
                    <div className='flex flex-row gap-32'>
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