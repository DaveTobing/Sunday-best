import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import blibli from '../assets/blibli_logo.svg'
import tokopedia from '../assets/tokopedia_logo.svg'
import shopee from '../assets/shopee_logo.svg'

export default function Cards ({title, price, size, link_tokopedia, link_shopee, link_blibli, gambar}) {
    const[showModal, setShowModal] = useState(false)

    const openModal = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };
  return (
    <div className='flex md:justify-around my-4 md:m-7' >  
        <div className='flex flex-col rounded-xl w-[160px] md:w-64 relative overflow-clip items-center hover:scale-105 duration-300 hover:cursor-pointer' onClick={openModal}>
            <img src={gambar} alt="" className='w-64 h-88'/>
                <div className='bg-background-300 w-[350px] h-[280px] -bottom-[200px] absolute md:-bottom-[180px] px-12'>
                    <p className='text-center mt-5 font-lora font-bold'>
                            {title} 
                    </p>
                    <div className='underline bg-[#1D1D1D] h-0.5 w-1/2 mx-auto rounded-lg'></div>
                    <div className='flex flex-row justify-around my-3 mx-8 lg:mx-2'>
                        <p className='font-lora font-bold'>
                            Rp{price}
                        </p>
                        <p className='font-lora font-bold'>
                            {size}
                        </p>
                    </div>
                </div>
        </div>

    {/* Modal */}
    {showModal && (
      <div className="fixed inset-0 flex items-center justify-center z-[40]"
        style={{ 
              backgroundColor: 'rgba(128, 128, 128, 0.7)', 
              backdropFilter: 'blur(5px)'
          }}>     
        <div className="w-[300px] h-[550px] absolute p-4 lg:w-[800px] lg:h-[500px] rounded-lg" 
        style={{ 
            backgroundImage: "url('/bgl.png')",
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat', 
            backgroundPosition: 'center',
            backdropFilter: 'none',
        }}>
          <div className='flex justify-between'>
            <div className='pl-6'>
            </div>
            <div className='flex flex-col items-center'>
              <h1 className='text-[#F1EA3E] font-lora font-bold text-2xl'>Detail</h1>
              <h1 className='font-bold text-2xl pl-1 font-lora'>Product</h1>
            </div>
            <div className='justify-end'>
              <FontAwesomeIcon icon={faXmark}  onClick={closeModal} style={{ fontSize: '2rem', color: '#F1EA3E',  cursor: 'pointer' }}/>
            </div>
          </div>
          <div className='grid grid-rows-2 mt-3 md:grid-cols-2 gap-4'>
            <div className='ml-[80px] md:ml-5'>
              <img src={gambar} alt="" className='w-32 rounded-lg md:w-72 md:h-96' />
            </div>
            <div className='flex flex-col justify-around mt-[-20px] ml-[15px] gap-2 md:ml-0 md:0'>
              <div className='bg-[#1D1D1D] bg-opacity-20 rounded-lg w-[250px] h-[60px] md:w-[380px] md:h-[80px]'>
                <div className='flex flex-row items-center justify-center jus md:justify-start md:m-2'>
                  <h1 className='font-bold text-xl text-[#0175B8] font-lora'>{title}</h1>
                </div>
                <div className='flex flex-row m-0 justify-around md:m-2 md:justify-between '>
                  <p className='text-[#F1EA3E] text-xl font-semibold font-lora'>Rp{price}</p>
                  <p className='text-[#F1EA3E] text-xl font-semibold font-lora'>{size}</p>
                </div>
              </div>
              <Link to={link_tokopedia}>
                <button className='flex flex-row items-center justify-around bg-[#387136] rounded-lg w-[250px] md:w-[380px] h-[50px] text-[#6ECC6B] font-bold md:text-xl  hover:cursor-pointer '>
                  <img src={tokopedia} alt="" className='w-12'/>
                    <p className='mr-3 font-lora'>Buy now at Tokopedia</p>
                </button>
              </Link>
              <Link to={link_shopee}>
                <button className='flex flex-row items-center justify-around bg-[#9F492E] rounded-lg w-[250px] md:w-[380px] h-[50px] text-[#FF8761] font-bold md:text-xl  hover:cursor-pointer '>
                  <img src={shopee} alt="" className='w-10 mt-4'/>
                    <p className='mr-1 font-lora'>Buy now at Shopee</p>
                </button>
              </Link>
              <Link to={link_blibli}>
                <button className='flex flex-row items-center justify-around bg-[#176189] rounded-lg w-[250px] md:w-[380px] h-[50px] text-[#30B6FF] font-bold md:text-xl hover:cursor-pointer '>
                    <img src={blibli} alt="" className='w-[80px] md:w-[90px]'/>
                    <p className='mr-3 font-lora'>Buy now at Blibli</p>
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

