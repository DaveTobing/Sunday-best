import React, { useState } from 'react'
import Logo from '../assets/Logo2.svg'
import Courier from '../assets/courier.svg'
import Order from '../assets/order.svg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
  const[showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <footer className="px-4 divide-y bg-background-light-400 h-full">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <div className="flex justify-center space-x-3 lg:justify-start">
            <div className="flex items-center justify-center w-12 h-12 rounded-full ml-10">
              <img src={Logo} alt="" />
            </div>
            <span className="self-center text-2xl font-semibold">Sunday Best</span>
          </div>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="font-bold uppercase ">Categories</h3>
            <ul className="space-y-1 grid grid-cols-3 items-center">
              <li>
                <Link to= '/' className='font-semibold font-signika uppercase hover:underline' >Soju</Link>
              </li>
              <li>
                <Link to= '/' className='font-semibold font-signika uppercase hover:underline '>Sake</Link>
              </li>
              <li>
                <Link to= '/' className='font-semibold uppercase font-signika hover:underline'>Wine</Link>
              </li>
              <li>
                <Link to= '/' className='font-semibold uppercase font-signika hover:underline' >Brandy</Link>
              </li>
              <li>
                <Link to= '/' className='font-semibold uppercase font-signika hover:underline' >Whisky</Link>
              </li>
              <li>
                <Link to= '/' className='font-semibold uppercase font-signika hover:underline' >Gin</Link>
              </li>
              <li>
                <Link to= '/' className='font-semibold uppercase font-signika hover:underline' >Vodka</Link>
              </li>
              <li>
                <Link to= '/' className='font-semibold uppercase font-signika hover:underline' >Rum</Link>
              </li>
              <li>
                <Link to= '/' className='font-semibold uppercase font-signika hover:underline' >Tequila</Link>
              </li>
              <li>
                <Link to= '/' className='font-semibold uppercase font-signika hover:underline' >Cognac</Link>
              </li>
              <li>
                <Link to= '/' className='font-semibold uppercase font-signika hover:underline' >Beers</Link>
              </li>
              <li>
                <Link to= '/' className='font-semibold uppercase font-signika hover:underline' >Others</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className=" uppercase font-bold">About Us</h3>
            <ul className="space-y-1">
              <li>
                <Link>
                    <p className='font-medium'>News</p>
                </Link>
              </li>
              <li>
                <Link>
                    <p className='font-medium'>Partnership</p>
                </Link>
              </li>
              <li>
                <Link>
                    <p className='font-medium'>FAQ</p>
                </Link>
              </li>
              <li>
                <Link onClick={openModal}>
                    <p className='font-medium'>How to Order</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-">
            <h3 className="uppercase font-bold">Get In Touch</h3>
            <ul className="space-y-1">
              <li>
                <Link to='https://api.whatsapp.com/send/?phone=62818688448&text&type=phone_number&app_absent=0'>
                  <p className='font-medium'>+62 818-688-448</p>
                </Link>
              </li>
              <li>
                <Link to='mailto:sundaybeststoreid@gmail.com?subject=Having%20Interest'>
                  <p className='font-medium'>sundaybeststoreid@gmail.com</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase font-bold">Social media</div>
            <div className="flex justify-start space-x-3">
              <Link to='https://www.instagram.com/sundaybestid/'>
                <FontAwesomeIcon icon={faInstagram} style= {{fontSize: '1.5rem'}}/>
              </Link>
              {/* <Link to='https://www.instagram.com/sundaybestid/'>
                <FontAwesomeIcon icon={faFacebook} style= {{fontSize: '1.5rem'}}/>
              </Link>
              <Link to='https://www.instagram.com/sundaybestid/'>
                  <FontAwesomeIcon icon={faLinkedin} style= {{fontSize: '1.5rem'}}/>
              </Link> */}
              <Link to='https://www.youtube.com/@sundaybeststore'>
                  <FontAwesomeIcon icon={faYoutube} style= {{fontSize: '1.5rem'}}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center font-bold">© 2023 SundayBest. ALL RIGHTS RESERVED.</div>

    {/* Modal */}
    {showModal && (
      <div className="fixed inset-0 flex items-center justify-center z-[40] bg-gray-800 opacity-95 transition-opacity">
        <div className="absolute bg-background-light-100 p-4 w-[800px] h-[500px] rounded-lg">
          <div className='flex justify-between'>
            <div className='pl-6'>
            </div>
            <div className='flex flex-col items-center'>
              <h1 className='text-[#FFCB45] font-bold text-xl'>How it works</h1>
              <h1 className='font-bold text-2xl pl-1'>What We Serve</h1>
              <h2 className='font-semibold text-center'>
                Product Quality is Our Priority, And Always Gurantees <br /> Halal And Safety Until It is in Your Hands
              </h2>
            </div>
            <div className='justify-end'>
              <FontAwesomeIcon icon={faXmark}  onClick={closeModal} style={{ fontSize: '1.5rem', color: '#01A2E7'}}/>
            </div>
          </div>
          <div className='grid grid-cols-3 mt-10 items-center'>
            <div className='flex flex-col justify-center items-center gap-4'>
              <img src={Logo} alt="" className='w-32'/>
              <h1 className='font-semibold font-signika'>Visit Our Web</h1>
              <p className='text-center'>Choose what to <br /> order through our <br />web</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-4 mt-6'>
              <img src={Order} alt="" className='w-24'/>
              <h1 className='font-semibold font-signika'>Finish Order</h1>
              <p className='text-center'>We will direct you <br /> to Tokopedia or <br />Shopee to finish <br />order</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-4 mb-[40px]'>
              <img src={Courier} alt="" className='w-[118px]'/>
              <h1 className='font-semibold font-signika'>Visit Our Web</h1>
              <p className='text-center'>The best quality of<br /> booze for yoi</p>
            </div>
          </div>
        </div>
      </div>
    )}

</footer>
  )
}