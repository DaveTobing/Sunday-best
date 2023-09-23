import React from 'react'
import { Select } from '@chakra-ui/select'

const Product = ({result}) => {
  return (
    <div className='grid-cols-2 flex flex-row bg-red-500'>
      <div className='flex flex-col bg-background-light-200 col-span-1 m-4 rounded-lg h-36 w-40'>
        <p className='font-bold text-left'>Products</p>
        <div className='underline bg-[#1D1D1D] h-0.5'>
        </div>
        <ul className='items-center'>
          <li className='text-center '>
            Semua Produk
          </li>
          <li className='text-center'>
            Soju Import
          </li>
          <li className='text-center'>
            Australian Wine
          </li>
        </ul>
      </div>
      <div className='flex col-span-2 m-4'>
          <div className='flex flex-row justify-around gap-32'>
            <h1 className='font-bold'>
              All Products
            </h1>
            <Select placeholder='Filter By'>
            <option value="">Alphabet</option>
            <option value="">Price</option>
            </Select>
            {/* <div>
              {result}
            </div> */}
          </div>
      </div>
    </div>
  )
}

export default Product