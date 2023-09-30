import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Cards ({title, category, type, price, size, link_tokopedia, link_shopee, link_blibli, gambar}) {
    const[showModal, setShowModal] = useState(false)

    const openModal = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };
  return (
    <div className='flex md:justify-around my-4 md:m-7' >  
        <div className='flex flex-col bg-background-light-250 rounded-xl w-[160px] md:w-64 relative overflow-clip items-center hover:scale-110 duration-300 hover:cursor-pointer' onClick={openModal}>
            <img src={gambar} alt="" className='w-64 h-88'/>
                <div className='bg-background-light-300 rounded-[150px] w-[350px] h-[300px] -bottom-[200px] absolute md:-bottom-[180px] px-12'>
                    <p className='text-center mt-5 font-medium font-signika'>
                            {title} 
                    </p>
                    <div className='underline bg-[#1D1D1D] h-0.5 w-1/2 mx-auto rounded-lg'></div>
                    <div className='flex flex-row justify-around my-3 mx-8 lg:mx-2 font-signika'>
                        <p>
                            Rp{price}
                        </p>
                        <p>
                            {size}
                        </p>
                    </div>
                </div>
        </div>

    {/* Modal */}
    {showModal && (
      <div className="fixed inset-0 flex items-center justify-center z-[40] bg-gray-800 opacity-95 transition-opacity">
        <div className="absolute bg-background-light-100 p-4 w-[300px] h-[500px] rounded-lg md:w-[800px]">
          <div className='flex justify-between'>
            <div className='pl-6'>
            </div>
            <div className='flex flex-col items-center'>
              <h1 className='text-[#F1EA3E] font-bold text-2xl font-signika'>Detail</h1>
              <h1 className='font-bold text-2xl pl-1 font-signika'>Product</h1>
            </div>
            <div className='justify-end'>
              <FontAwesomeIcon icon={faXmark}  onClick={closeModal} style={{ fontSize: '1.5rem', color: '#01A2E7'}}/>
            </div>
          </div>
          <div className='grid grid-rows-2 mt-3 md:grid-cols-2 '>
            <div className='ml-[80px]'>
              <img src={gambar} alt="" className='w-32 rounded-lg md:w-72 md:h-96' />
            </div>
            <div className='flex flex-col justify-around mt-[-20px] ml-[30px]'>
              <div className='bg-[#1D1D1D] bg-opacity-20 rounded-lg w-[230px] md:w-[380px] h-[80px]'>
                <div className='flex flex-row gap-4 items-center justify-start m-2'>
                  <h1 className='font-bold text-xl text-[#0175B8] font-signika'>{title}</h1>
                </div>
                <div className='m-2 justify-between flex flex-row'>
                  <p className='text-[#F1EA3E] text-xl font-medium font-signika'>Rp{price}</p>
                  <p className='text-[#0175B8] text-xl font-medium font-signika'>{size}</p>
                </div>
              </div>
              <Link to={link_tokopedia}>
                <button className='bg-[#1D1D1D] bg-opacity-20 rounded-lg w-[230px] md:w-[380px] h-[50px] text-[#0175B8] font-bold text-xl font-signika hover:cursor-pointer'>
                    Buy now at Tokopedia
                </button>
              </Link>
              <Link to={link_shopee}>
                <button className='bg-[#1D1D1D] bg-opacity-20 rounded-lg w-[230px] md:w-[380px] h-[50px] text-[#0175B8] font-bold text-xl font-signika hover:cursor-pointer'>
                    Buy now at Shopee
                </button>
              </Link>
              <Link to={link_blibli}>
                <button className='bg-[#1D1D1D] bg-opacity-20 rounded-lg w-[230px] md:w-[380px] h-[50px] text-[#0175B8] font-bold text-xl font-signika hover:cursor-pointer'>
                    Buy now at Blibli
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )}
    </div>


  )
}

