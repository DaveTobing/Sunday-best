import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import blibli from '../assets/blibli_logo.svg'
import tokopedia from '../assets/tokopedia_logo.svg'
import shopee from '../assets/shopee_logo.svg'

function formatPrice(price) {
  const numPrice = typeof price === "number" ? price : parseFloat(price);

  if (Math.floor(numPrice) !== numPrice) {  // Jika ada desimal
      return `Rp${numPrice.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
  } else {  // Jika tidak ada desimal
      return `Rp${numPrice.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}.000`;
  }
}

export default function Cards ({title, price, size, link_tokopedia, link_shopee, link_blibli, gambar}) {
    const[showModal, setShowModal] = useState(false)

    const openModal = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };

    // Adjust font size if title is too long
    const titleFontSize = title.length > 20 ? 'text-sm' : 'text-md';
    const titleFontSize2 = title.length > 20 ? 'text-sm' : 'text-md';
    const titleClass = title.length > 15 ? 'truncate' : '';

    return (
      <div className='flex md:justify-around my-4 md:m-7'>  
          <div className='flex flex-col rounded-xl w-[230px] md:w-64 relative overflow-clip items-center hover:scale-105 duration-300 hover:cursor-pointer' onClick={openModal}>
              <img src={gambar} alt="" className='w-36 lg:w-64 lg:h-96'/>
              <div className='bg-background-300 w-[200px] h-[300px] -bottom-[200px] lg:w-[390px] lg:h-[320px] lg:-bottom-[220px] absolute md:-bottom-[180px] lg:px-12'>
                  <p className={`text-center mt-3 font-bold ${titleFontSize2} ${titleClass}`} style={{ maxWidth: '340px' }}>
                      {title} 
                  </p>
                  <div className='underline bg-[#1D1D1D] h-0.5 w-1/2 mx-auto rounded-lg'></div>
                  <div className='flex flex-row justify-around my-3 lg:mx-2'>
                    <div>
                      <p className='font-medium text-sm lg:text-lg'>
                          {formatPrice(price)}
                      </p>
                    </div>
                    <div>
                      <p className='font-medium text-sm lg:text-lg'>
                          {size}
                      </p>
                    </div>

                  </div>
              </div>
          </div>

    {/* Modal */}
    {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-[40]"
            style={{ backgroundColor: 'rgba(128, 128, 128, 0.7)', backdropFilter: 'blur(5px)' }}>
            <div className="relative w-[90%] h-[80%] md:w-[800px] md:h-[500px] p-4 rounded-lg"
                style={{ backgroundImage: "url('/bgl.png')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backdropFilter: 'none' }}>
                
                {/* Close button */}
                <FontAwesomeIcon icon={faXmark} onClick={closeModal} className="absolute top-4 right-4" style={{ fontSize: '2rem', color: '#F1EA3E', cursor: 'pointer' }}/>

                {/* Modal Header */}
                <div className='flex flex-col items-center'>
                    <h1 className={`font-bold ${titleFontSize} text-lg lg:text-2xl text-[#F1EA3E]`}>Detail</h1>
                    <h1 className='font-bold text-lg lg:text-2xl pl-1 '>Product</h1>
                </div>

              {/* Modal Content */}
              <div className='flex flex-col md:grid md:grid-cols-2 items-center mt-0.5 gap-4'>
                <div className='flex justify-center'>
                  <img src={gambar} alt="" className='rounded-xl w-[40%] md:w-54 md:h-96 lg:w-[70%]'  />
                </div>

                <div className='flex flex-col justify-around items-center gap-4 md:ml-0 md:0'>
                  <div className='bg-[#1D1D1D] bg-opacity-20 rounded-lg w-full p-2'>
                    <h1 className={`font-bold ${titleFontSize} text-[#0175B8] text-sm text-center md:text-left`}>{title}</h1>
                    <div className='flex justify-around md:justify-between mt-2'>
                      <p className='text-[#F1EA3E] text-sm lg:text-xl font-semibold '>{formatPrice(price)}</p>
                      <p className='text-[#F1EA3E] text-sm lg:text-xl font-semibold '>{size}</p>
                    </div>
                  </div>
                  <Link to={link_tokopedia}>
                    <button className='flex flex-row items-center justify-around bg-[#387136] rounded-lg w-[250px] md:w-[380px] h-[50px] text-[#6ECC6B] font-bold md:text-xl  hover:cursor-pointer '>
                      <img src={tokopedia} alt="" className='w-12'/>
                        <p className='mr-3'>Buy now at Tokopedia</p>
                    </button>
                  </Link>
                  <Link to={link_shopee}>
                    <button className='flex flex-row items-center justify-around bg-[#9F492E] rounded-lg w-[250px] md:w-[380px] h-[50px] text-[#FF8761] font-bold md:text-xl  hover:cursor-pointer '>
                      <img src={shopee} alt="" className='w-10 mt-4'/>
                        <p className='mr-1'>Buy now at Shopee</p>
                    </button>
                  </Link>
                  <Link to={link_blibli}>
                    <button className='flex flex-row items-center justify-around bg-[#176189] rounded-lg w-[250px] md:w-[380px] h-[50px] text-[#30B6FF] font-bold md:text-xl hover:cursor-pointer '>
                        <img src={blibli} alt="" className='w-[80px] md:w-[90px]'/>
                        <p className='mr-3'>Buy now at Blibli</p>
                    </button>
                  </Link>
                </div>
                {/* <div className='flex flex-col items-center md:items-start gap-2 w-full px-2'> */}
                  {/* Product Details */}
                  {/* <div className='bg-[#1D1D1D] bg-opacity-20 rounded-lg w-full p-2'>
                    <h1 className={`font-bold ${titleFontSize} text-[#0175B8] text-sm text-center md:text-left`}>{title}</h1>
                    <div className='flex justify-around md:justify-between mt-2'>
                      <p className='text-[#F1EA3E] text-sm lg:text-xl font-semibold '>Rp{price}</p>
                      <p className='text-[#F1EA3E] text-sm lg:text-xl font-semibold '>{size}</p>
                    </div>
                  </div> */}


                  {/* Purchase Buttons */}
                  {/* <div className='w-full space-y-2 gap-5'>
                    {/* Tokopedia */}
                    {/* <Link to={link_tokopedia}>
                      <button className='flex items-center justify-center  bg-[#387136] w-full rounded-lg h-[50px] text-[#6ECC6B] font-bold hover:cursor-pointer '>
                        <img src={tokopedia} alt="" className='w-10 mr-2'/>
                        <h1 className='text-sm'>Buy now at Tokopedia</h1>
                      </button>
                    </Link>  */}
                    
                    {/* Shopee */}
                    {/* <Link to={link_shopee}>
                    <button className='flex flex-row items-center justify-center gap-2 bg-[#9F492E] w-full rounded-lg h-[50px] text-[#FF8761] font-bold hover:cursor-pointer '>
                      <img src={shopee} alt="" className='w-10 mt-4'/>
                      <p className='text-sm'>Buy now at Shopee</p>
                    </button>
                    </Link> */}
                    
                    {/* Blibli */}
                    {/* <Link to={link_blibli}>
                      <button className='flex flex-row items-center justify-center bg-[#176189] w-full rounded-lg h-[50px] text-[#30B6FF] font-bold hover:cursor-pointer '>
                        <img src={blibli} alt="" className='w-16 lg:w-20 mr-2'/>
                        <h1 className='text-sm'>Buy now at Blibli</h1>
                      </button>
                    </Link>
                  </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

