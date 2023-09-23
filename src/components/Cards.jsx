import React from 'react'

const Cards = ({img, title1, title2, Price, size}) => {
  return (
    <div className='flex justify-around m-7'>  
        <div className='flex flex-col bg-background-light-250 rounded-xl w-64 relative overflow-clip items-center'>
            <img src={img} alt="" className='w-64' />
                <div className='bg-background-light-300 rounded-[150px] w-[350px] h-[300px] absolute -bottom-[180px] px-12'>
                    <p className='text-center mt-5 font-medium'>
                            {title1} 
                    </p>
                    <p className='text-center font-medium'>
                            {title2} 
                    </p>
                    <div className='underline bg-[#1D1D1D] h-0.5 w-1/2 mx-auto rounded-lg'></div>
                    <div className='flex flex-row justify-around m-2'>
                        <p>
                            {Price}
                        </p>
                        <p>
                            {size}
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Cards