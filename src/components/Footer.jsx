import React, { useState } from 'react'
import Logo from '../assets/Logo2.svg'
import Courier from '../assets/courier.svg'
import Order from '../assets/order.svg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

const handleClick = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

const handleClick2 = () => {
  window.scrollTo({
    top: 0,
    left: 0,
  });
}

export default function Footer() {
  const[showModal, setShowModal] = useState(false)
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const openPrivacyModal = () => {
    setShowPrivacyModal(true);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setShowPrivacyModal(false);
  };

  return (
    <footer className="px-4 divide-y bg-background-300 h-full">
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
          <div className="space-y-2">
            <h3 className="font-bold uppercase">Categories</h3>
            <ul className="space-y-1 grid grid-cols-3 items-center">
              <li>
                <Link to= '/product' onClick={handleClick2} className='font-semibold hover:underline' >Soju</Link>
              </li>
              <li>
                <Link to= '/product' onClick={handleClick2} className='font-semibold hover:underline '>Sake</Link>
              </li>
              <li>
                <Link to= '/product' onClick={handleClick2} className='font-semibold hover:underline'>Wine</Link>
              </li>
              <li>
                <Link to= '/product' onClick={handleClick2} className='font-semibold hover:underline' >Brandy</Link>
              </li>
              <li>
                <Link to= '/product' onClick={handleClick2} className='font-semibold hover:underline' >Whisky</Link>
              </li>
              <li>
                <Link to= '/product' onClick={handleClick2} className='font-semibold hover:underline' >Gin</Link>
              </li>
              <li>
                <Link to= '/product' onClick={handleClick2} className='font-semibold hover:underline' >Vodka</Link>
              </li>
              <li>
                <Link to= '/product' onClick={handleClick2} className='font-semibold hover:underline' >Rum</Link>
              </li>
              <li>
                <Link to= '/product' onClick={handleClick2} className='font-semibold hover:underline' >Tequila</Link>
              </li>
              <li>
                <Link to= '/product' onClick={handleClick2} className='font-semibold hover:underline' >Cognac</Link>
              </li>
              <li>
                <Link to= '/product' onClick={handleClick2} className='font-semibold hover:underline' >Beers</Link>
              </li>
              <li>
                <Link to= '/product' onClick={handleClick2} className='font-semibold hover:underline' >Others</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3 space-x-9">
            <h3 className="uppercase font-bold">‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ About Us</h3>
            <ul className="space-y-1">
              <li>
                <Link to= '/article1' onClick={handleClick}>
                    <p className='font-semibold'>News</p>
                </Link>
              </li>
              <li>
                <Link to= '/partnership' onClick={handleClick}>
                    <p className='font-semibold '>Partnership</p>
                </Link>
              </li>
              <li>
                <Link onClick={openPrivacyModal}>
                    <p className='font-semibold '>Privacy Policy</p>
                </Link>
              </li>
              <li>
                <Link onClick={openModal}>
                    <p className='font-semibold '>How to Order</p>
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="uppercase font-bold ">Get In Touch</h3>
            <ul className="space-y-1">
              <li>
                <Link to='https://api.whatsapp.com/send/?phone=62818688448&text&type=phone_number&app_absent=0'>
                  <p className='font-semibold'>+62 818-688-448</p>
                </Link>
              </li>
              <li>
                <Link to='mailto:sundaybeststoreid@gmail.com?subject=Having%20Interest'>
                  <p className='font-semibold text-sm'>info@sundaybest.id</p>
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
      <div className="fixed inset-0 flex items-center justify-center z-[40] bg-gray-800 opacity-100 transition-opacity"
         style={{ backgroundColor: 'rgba(128, 128, 128, 0.7)', backdropFilter: 'blur(5px)' }}>
        <div className="absolute bg-background-light-100 p-4 w-[90%] h-[90%] md:w-[800px] md:h-[500px] rounded-lg"
        style={{ backgroundImage: "url('/bgl.png')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backdropFilter: 'none' }}>
          <div className='flex justify-between'>
            <div className='pl-6'>
            </div>
            <div className='flex flex-col items-center'>
              <h1 className='text-[#FFCB45] font-bold lg:text-2xl text-xl'>How It Works</h1>
              <h2 className='font-semibold text-sm lg:text-base text-center'>
                Product Quality Is Our Priority, It's Always Guaranteed <br /> Halal And Safety Until It Is In Your Hands
              </h2>
            </div>
            <div className='justify-end'>
              <FontAwesomeIcon icon={faXmark}  onClick={closeModal} style={{ fontSize: '1.5rem', color: '#F1EA3E', cursor: 'pointer'}}/>
            </div>
          </div>
          <div className='flex flex-wrap justify-center mx-5 lg:grid lg:grid-cols-3 mt-10 items-center gap-3'>
            <div className='flex flex-col items-center gap-3 lg:gap-4'>
              <img src={Logo} alt="" className='w-20 md:w-32'/>
              <h1 className='font-semibold text-sm lg:text-base'>Visit Our Web</h1>
              <p className='text-center text-sm lg:text-base'>Choose what to <br /> order through our <br />web</p>
            </div>
            <div className='flex flex-col items-center gap-3 mt-4 lg:gap-4 lg:mt-6'>
              <img src={Order} alt="" className='w-16 md:w-24'/>
              <h1 className='font-semibold text-sm lg:text-base'>Finish Order</h1>
              <p className='text-center text-sm lg:text-base'>We will direct you <br /> to Tokopedia or <br />Shopee to finish <br />order</p>
            </div>
            <div className='flex  flex-col items-center gap-3 lg:gap-4 mb-[40px]'>
              <img src={Courier} alt="" className='w-16 md:w-[118px]'/>
              <h1 className='font-semibold text-sm lg:text-base'>Visit Our Web</h1>
              <p className='text-center text-sm lg:text-base'>The best quality of<br /> booze for you</p>
            </div>
          </div>
        </div>
      </div>
    )}

    {/* Privacy Policy Modal */}
    {showPrivacyModal && (
      <div className="fixed inset-0 flex items-center justify-center z-[40] bg-gray-800 opacity-100 transition-opacity"
            style={{ backgroundColor: 'rgba(128, 128, 128, 0.7)', backdropFilter: 'blur(5px)' }}>
          <div className="absolute bg-background-light-100 p-4 w-[90%] h-[90%] md:w-[800px] md:h-[500px] rounded-lg text-justify"
                style={{ backgroundImage: "url('/bgl.png')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backdropFilter: 'none' }}>
              <div className='flex justify-between'>
                  <div className='pl-6'>
                  </div>
                  <div className='flex flex-col items-center pl-6'>
                      <h1 className='text-[#FFCB45] font-bold lg:text-2xl text-xl'>Privacy Policy</h1>
                  </div>
                  <div className='justify-end'>
                      <FontAwesomeIcon icon={faXmark} onClick={closeModal} style={{ fontSize: '1.5rem', color: '#F1EA3E', cursor: 'pointer' }}/>
                  </div>
              </div>
              <div className='mt-10 px-4 overflow-y-auto' style={{ maxHeight: '70%' }}>
                <strong>Privacy Policy for Sundaybest.ID</strong>

                <p>[Last Updated: 08/2023]</p>
                <br></br>
                <p>Thank you for choosing Sundaybest. This Privacy Policy is intended to inform you about how we collect, use, and protect your personal information when you visit our platform and use our services. By accessing or using the Sundaybest platform, you agree to the terms outlined in this Privacy Policy. Please read this policy carefully to understand how we handle your information.</p>
                <br></br>
                <strong>Changes to this Privacy Policy</strong>

                <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically. Your continued use of Sundaybest after any changes are made constitutes your acceptance of the revised Privacy Policy.</p>
                <br></br>
                <strong>Collection of Personal Information</strong>

                <p>Sundaybest is committed to protecting your privacy and will not sell or distribute your personal information to third parties. We collect and use personal information solely for the purpose of enhancing your experience with our platform. Personal information that may be collected when you create an account includes:</p>

                <ul>
                    <li>1. Name</li>
                    <li>2. Email Address</li>
                    <li>3. Mobile Number</li>
                </ul>

                <p>You have the option to provide this information voluntarily during registration. We will never collect personal information without your consent.</p>
                <br></br>
                <strong>Collection of Information and Computer Data</strong>

                <p>When you visit Sundaybest, our website may automatically collect information and computer data through your web browser. This data is used for internal purposes, such as improving our services, enhancing user experience, and ensuring platform security. We do not share this information with third parties.</p>
                <br></br>
                <strong>Accessing Your Information</strong>

                <p>If you have a Sundaybest account, you can access, review, and update your personal information in your account settings. Your account information may include:</p>

                <ul>
                    <li>1. Name</li>
                    <li>2. Email Address</li>
                    <li>3. Mobile Number</li>
                </ul>

                <p>We strongly recommend that you safeguard your account credentials, including your username and password, to prevent unauthorized access. Sundaybest is not responsible for any misuse of your account information, except as outlined in our Terms & Conditions.</p>
                <br></br>
                <strong>Security</strong>

                <p>Your security is of utmost importance to SundayBest. We are dedicated to providing a safe and user-friendly platform for all our customers. In the event of a data breach that exposes your personal information under our control, we will notify you promptly in accordance with our policies. We will make every effort to notify you as soon as possible via the email address you have provided to us.</p>
                <br></br>
                <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at info@sundaybest.id.</p>

                <p>Thank you for choosing Sundaybest.</p>
                <br></br>
                <p>
                    PT Bahagia Setiap Minggu <br />
                    Grand ITC Permata Hijau, Jl. Arteri Permata Hijau No.2, Grogol Utara, Kec. Kby. Lama <br />
                    Jakarta Selatan, DKI Jakarta <br />
                    info@sundaybest.id
                </p>
              </div>
          </div>
      </div>
    )}

</footer>
  )
}