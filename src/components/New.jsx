import React from 'react'
import Bottle from '../assets/bottle.svg'

const New = () => {
  return (
    <div className='flex flex-col justify-center h-4/5 bg-background-light-200'>
        <div className='m-10'>
            <h1 className='text-center font-bold text-4xl'>
                New Booze Out
            </h1>
        </div>

    <div className='flex flex-row grid-cols-4 justify-around m-10'>  
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

export default New