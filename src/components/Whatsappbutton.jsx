import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Whatsappbutton = () => {
    const handleWhatsAppClick = () => {
        window.open('https://api.whatsapp.com/send/?phone=62818688448&text&type=phone_number&app_absent=0', '_blank')
        };
    return (
        <button
            className="fixed right-2 bottom-5 lg:right-5 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full z-[5]"
            onClick={handleWhatsAppClick}
            >
            <FontAwesomeIcon icon={faWhatsapp} style= {{fontSize: '1.5rem'}}/>
    </button>
    )
}

export default Whatsappbutton