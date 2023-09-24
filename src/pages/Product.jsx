import React from 'react'
import { Select } from '@chakra-ui/select'
import Picture from '../assets/pict.svg'


export default function Product ({result}) {


  return (
    <div className='mt-10'>
      <div className='grid grid-cols-6 flex-row'>
      <div className='flex flex-col col-start-1 col-end-2 bg-background-light-200 mx-6 rounded-lg h-48 w-48'>
        <p className='font-bold text-left p-2'>Products</p>
        <div className='underline bg-[#1D1D1D] h-0.5'>
        </div>
        <ul className='items-center p-2'>
          <li className='text-center p-2'>
            All Products
          </li>
          <li className='text-center p-2'>
            Soju Import
          </li>
          <li className='text-center p-2'>
            Australian Wine
          </li>
        </ul>
      </div>
      <div className='col-start-2 col-end-7'>
          <div className=''>
            <div className='flex flex-row justify-between mr-48'>
              <div className='mt-5'>
                  <h1 className='font-bold'>All Products</h1>
              </div>
              <div className='flex gap-16 mt-5' >
                <h1 className='font-bold'>Sort</h1>
                <Select placeholder='Filter'>
                  <option value="Alphabet">Alphabet</option>
                  <option value="Price">Price</option>
                </Select>
              </div>
            </div>
          </div>
          <div className='flex flex-row w-full flex-wrap'>
              {result}
          </div>
      </div>

    </div>

    {/* <div className='bg-black rounded-lg h-0.5 mx-32'>
    </div> */}

    {/* <div className='flex m-10 relative justify-center'>
      <img src={Picture} alt="" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <p className="text-white text-4xl font-bold">
          Join our member and get 
        </p>
        <p className="text-white text-4xl font-bold">
          discount up to 50%
        </p>
      </div>
    </div> */}
    </div>
  )
}