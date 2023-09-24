import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import Phone from '../assets/phone.svg'
import Instagram from '../assets/instagram.svg'
import Search from '../assets/Search.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  const[showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex bg-background-light-300 flex-col justify-center">
        <div className='flex flex-row mx-60 my-4 justify-between'>
          <div className='flex flex-row items-center gap-8 justify-start'>
            <div className='bg-background-light-400 rounded-lg h-7 w-48'>
                <p className='text-light-300 text-center mt-0.5 font-semibold font-signika'>21+ Legal Drinking Age</p>
            </div>
            <Link to='https://www.instagram.com/sundaybestid/'>
                <img src={Instagram} alt="" className='w-6 h-6'/>
            </Link>
          </div>

          <div className='justify-end flex flex-row items-center mx-10 gap-8'>
            <div>
                  <FontAwesomeIcon icon={faPhone} style= {{fontSize: '1.5rem'}}/>
            </div>
            <div className=''>
                  <div className='flex flex-row'>
                      <p className='text-sm font-semibold font-signika'>+62 818-688-448 - WA ONLY</p>
                  </div>
            </div>
          </div>
        </div>

        <div className='underline bg-background-light-400 h-[1.5px] w-full mx-auto rounded-lg'></div>
        <div className='flex flex-row mx-60 my-4 justify-between items-center'>
          <div className='flex flex-row items-center gap-4 justify-start'>
            <img src={logo} className='w-14' />
            <p className='font-semibold font-signika text-2xl'>SundayBest.id</p>
          </div>

            <div className='flex gap-16'>
              <Link to= '/' className='font-semibold font-signika uppercase hover:underline' >Home</Link>
              <Link to= '/product' className='font-semibold font-signika uppercase hover:underline ' >Product</Link>
              <Link to= '/' onClick={openModal} className='font-semibold uppercase font-signika hover:underline'>Store</Link>
              <Link to= '/' className='font-semibold uppercase font-signika hover:underline' >Partnership</Link>
            </div>
            <div className='mx-10 gap-8'>
              <img src={Search} alt="" />
            </div>
        </div>

      {/* Modal */}
      {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-[40] bg-gray-800 opacity-95 transition-opacity">
            <div className="absolute bg-background-light-100 p-4 w-[800px] h-[500px] rounded-lg">
              <div className='flex justify-between'>
                <div className='pl-5'>
                
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <h1 className='text-[#F1EA3E] font-bold text-2xl'>Store</h1>
                  <h1 className='font-bold text-2xl pl-2'>Location</h1>
                </div>
                <div className='justify-end'>
                    <FontAwesomeIcon icon={faXmark}  onClick={closeModal} style={{ fontSize: '1.5rem', color: '#01A2E7'}}/>
                </div>
              </div>
              <div className='grid grid-cols-2 mt-3'>
              <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15928.329487665482!2d98.709508!3d3.5685193!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031314ba64a0a6b%3A0x5fa98bc76021873c!2sMenteng%20Skate%20Park!5e0!3m2!1sen!2sid!4v1695482975125!5m2!1sen!2sid" 
                width="350" 
                height="350" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">

                </iframe>
              </div>
              <div className='flex flex-col justify-around'>
                <div>
                  <div className='flex flex-row gap-4 items-center'>
                    <FontAwesomeIcon icon={faLocationDot} style= {{color:'#0175B8', fontSize: '1.5rem'}} />
                    <h1 className='font-bold text-xl text-[#0175B8]'>Sunday Best Cibubur</h1>
                  </div>
                  <p>
                  Jl. Jambore No.1, RW.7, Cibubur, Kec. Ciracas, 
                  Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13720
                  </p>
                </div>
                <div>
                  <div className='flex flex-row gap-4 items-center'>
                    <FontAwesomeIcon icon={faLocationDot} style= {{color:'#0175B8', fontSize: '1.5rem'}} />
                    <h1 className='font-bold text-xl text-[#0175B8]'>Sunday Best Cibubur</h1>
                  </div>
                  <p>
                  Jl. Jambore No.1, RW.7, Cibubur, Kec. Ciracas, 
                  Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13720
                  </p>
                </div>
                <div>
                  <div className='flex flex-row gap-4 items-center'>
                    <FontAwesomeIcon icon={faLocationDot} style= {{color:'#0175B8', fontSize: '1.5rem'}} />
                    <h1 className='font-bold text-xl text-[#0175B8]'>Sunday Best Cibubur</h1>
                  </div>
                  <p>
                  Jl. Jambore No.1, RW.7, Cibubur, Kec. Ciracas, 
                  Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13720
                  </p>
                </div>
              </div>

            </div>
            </div>

          </div>
        )}
  
    </div>

  )
}

