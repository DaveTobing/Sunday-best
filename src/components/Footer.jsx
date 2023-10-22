import React from 'react';
import background from '../assets/Background.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className='bg-background-400 relative lg:h-screen'>
      {/* Background image without opacity */}
      <div 
        className='absolute top-0 left-0 w-full h-full z-0'
        style={{
          backgroundImage: `url(${background})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      {/* Content div */}
      <div className='flex mx-16 lg:mx-60 items-center z-10 relative'>
        <div className='flex flex-col mt-10 lg:mt-60 lg:gap-6'>
          <h1 className='text-3xl lg:text-7xl font-bold text-textcolor-300 mb-3'>
            Contact Us
          </h1>
          <ul className='flex flex-col gap-2'>
            <li>
              <Link to='https://api.whatsapp.com/send/?phone=62818688448&text&type=phone_number&app_absent=0'>
                <p className='text-md lg:text-3xl font-medium text-textcolor-750'>+62 818-688-448</p>
              </Link>
            </li>
            <li>
              <Link to='mailto:sundaybeststoreid@gmail.com?subject=Having%20Interest'>
                <p className='text-md lg:text-3xl font-medium text-textcolor-750'>sundaybeststoreid@gmail.com</p>
              </Link>
            </li>
          </ul>
          <div className="space-y-3 mt-6">
            <div className="uppercase font-bold text-textcolor-750">Social media</div>
            <div className="flex justify-start space-x-3">
              <Link to='https://www.instagram.com/sundaybestid/'>
                <FontAwesomeIcon icon={faInstagram} style={{fontSize: '1.5rem'}}/>
              </Link>
              <Link to='https://www.youtube.com/@sundaybeststore'>
                <FontAwesomeIcon icon={faYoutube} style={{fontSize: '1.5rem'}}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
