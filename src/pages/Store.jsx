import React from 'react'

const Store = () => {
  return (
    <div className='bg-background-400 lg:h-screen'>
        <h1 className='text-textcolor-600 text-5xl font-bold text-center'>
            Our Store
        </h1>
        <div className='flex flex-col lg:grid lg:grid-rows-2 justify-center mx-10 lg:mx-60 mt-16 gap-10'>
            <div className='flex flex-col lg:flex-row'>
                <div className='inline-block lg:hidden '>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15865.292501243615!2d106.7834317!3d-6.2210537!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f587f268af27%3A0x66c596fc12810d0b!2sSUNDAYBESTID!5e0!3m2!1sen!2sid!4v1695556531819!5m2!1sen!2sid" 
                        width="300" 
                        height="250" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div className='hidden lg:inline-block'>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15865.292501243615!2d106.7834317!3d-6.2210537!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f587f268af27%3A0x66c596fc12810d0b!2sSUNDAYBESTID!5e0!3m2!1sen!2sid!4v1695556531819!5m2!1sen!2sid" 
                        width="400" 
                        height="250" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div className='pl-8 lg:pl-12 mt-5 lg:mt-0'>
                    <div className='mb-4'>
                        <h2 className='font-bold text-3xl text-textcolor-300'>SUNDAYBEST.ID PERMATA HIJAU</h2>
                    </div>
                    <div className='mb-4'>
                        <p className='font-semibold text-center lg:text-left text-xl'>Grand ITC Permata Hijau Jl. Arteri Permata Hijau <br /> No.2, Grogol Utara, Kec. Kby. Lama, Kota Jakarta <br /> Selatan, Daerah Khusus Ibukota Jakarta 12210</p>
                    </div>
                    <div className='flex justify-center lg:justify-normal font-bold mb-4'>
                        <a href="" className='underline text-xl'>Direction</a>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center gap-4'>
                        <h2 className='text-3xl text-textcolor-300'>Opening Hours</h2>
                        <p className='pl-4 text-xl'>Monday - Sunday <br /> 10.30am - 09.00pm</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row'>
                <div className='inline-block lg:hidden'>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15865.292501243615!2d106.7834317!3d-6.2210537!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f587f268af27%3A0x66c596fc12810d0b!2sSUNDAYBESTID!5e0!3m2!1sen!2sid!4v1695556531819!5m2!1sen!2sid" 
                        width="300" 
                        height="250" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div className=''>
                    <div className='mb-4'>
                        <h2 className='font-bold text-3xl text-textcolor-300 text-center lg:text-right'>SUNDAYBEST.ID BSD</h2>
                    </div>
                    <div className='mb-4'>
                        <p className='font-semibold text-center lg:text-right text-xl'>BSD city, Jl. Anggrek Ungu No.5, RT.1/RW.10, Rawa <br />Buntu, Serpong Sub-District, South Tangerang <br /> City, Banten 15310</p>
                    </div>
                    <div className='flex justify-center lg:justify-end font-bold mb-4'>
                        <a href="" className='underline text-xl'>Direction</a>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-4'>
                        <h2 className='inline-block lg:hidden pl-4 text-3xl text-textcolor-300'>Opening Hours</h2>
                        <p className='text-xl'>SOON!</p>
                        <h2 className='hidden lg:inline-block  pl-4 text-3xl text-textcolor-300'>Opening Hours</h2>
                    </div>
                </div>
                <div className='pl-12 hidden lg:inline-block'>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15865.292501243615!2d106.7834317!3d-6.2210537!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f587f268af27%3A0x66c596fc12810d0b!2sSUNDAYBESTID!5e0!3m2!1sen!2sid!4v1695556531819!5m2!1sen!2sid" 
                        width="400" 
                        height="250" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Store