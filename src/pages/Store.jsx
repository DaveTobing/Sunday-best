import React from 'react'

const Store = () => {
  return (
    <div className='bg-background-400 lg:h-screen'>
        <div className='hidden lg:block'>
            <h1 className='text-[#545454] text-5xl font-extrabold text-center uppercase'>
                Our Store
            </h1>
            <div className='flex flex-col lg:grid lg:grid-rows-2 justify-center items-center mx-10 lg:mx-60 mt-16 gap-10'>
                <div className='flex flex-col lg:flex-row items-center'>
                    
                    <div className='mb-4 lg:mb-0'>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15865.292501243615!2d106.7834317!3d-6.2210537!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f587f268af27%3A0x66c596fc12810d0b!2sSUNDAYBESTID!5e0!3m2!1sen!2sid!4v1695556531819!5m2!1sen!2sid" 
                            width="300" 
                            height="250" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    
                    <div className='text-center lg:text-left pl-8 lg:pl-12 mt-3 lg:mt-0'>
                        <h2 className='font-bold text-3xl text-textcolor-300'>SUNDAYBEST.ID PERMATA HIJAU</h2>
                        <p className='font-semibold text-xl'>Grand ITC Permata Hijau Jl. Arteri Permata Hijau <br /> No.2, Grogol Utara, Kec. Kby. Lama, Kota Jakarta <br /> Selatan, Daerah Khusus Ibukota Jakarta 12210</p>
                        <a href="https://www.google.com/maps/place/SUNDAYBESTID/@-6.219347,106.783689,14z/data=!4m6!3m5!1s0x2e69f587f268af27:0x66c596fc12810d0b!8m2!3d-6.2210537!4d106.7834317!16s%2Fg%2F11l2cmw998?hl=en&entry=ttu" className='underline text-xl'>Direction</a>
                        <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4 mt-4'>
                            <h2 className='text-3xl text-textcolor-300'>Opening Hours</h2>
                            <p className='pl-4 text-xl'>Monday - Sunday <br /> 10.30am - 09.00pm</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row-reverse items-center'>
                    
                    <div className='mb-4 lg:mb-0 lg:pl-12'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15862.752398020079!2d106.6730287!3d-6.304648!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e5588351fd7d%3A0x3121b709a41a52ca!2sPremiere%20Billiard%20BSD!5e0!3m2!1sen!2sid!4v1697975384954!5m2!1sen!2sid"  
                            width="300" 
                            height="250" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    
                    <div className='text-center lg:text-right pl-8 lg:pl-12 mt-5 lg:mt-0'>
                        <h2 className='font-bold text-3xl text-textcolor-300'>SUNDAYBEST.ID BSD</h2>
                        <p className='font-semibold text-xl'>BSD city, Jl. Anggrek Ungu No.5, RT.1/RW.10, Rawa <br />Buntu, Serpong Sub-District, South Tangerang <br /> City, Banten 15310</p>
                        <a href="https://www.google.com/maps/place/Premiere+Billiard+BSD/@-6.304648,106.6730287,15z/data=!4m6!3m5!1s0x2e69e5588351fd7d:0x3121b709a41a52ca!8m2!3d-6.304648!4d106.6730287!16s%2Fg%2F11mwsv0qs0?entry=ttu" className='underline text-xl'>Direction</a>
                        <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-4 mt-4'>
                            <h2 className='text-3xl text-textcolor-300'>Opening Hours</h2>
                            <p className='pl-4 text-xl'>SOON!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='lg:hidden my-3'>
            <h1 className='text-[#02A1E9]'>.</h1>
            <h1 className='mx-auto text-[#545454] text-5xl font-extrabold text-center mt-2 uppercase'>
                Our Store
            </h1>
            <div className="mx-auto w-11/12 bg-white p-5 rounded-md shadow-lg mt-5">
                <div className='flex flex-col lg:flex-row items-center mb-4 lg:mb-0'>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15865.292501243615!2d106.7834317!3d-6.2210537!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f587f268af27%3A0x66c596fc12810d0b!2sSUNDAYBESTID!5e0!3m2!1sen!2sid!4v1695556531819!5m2!1sen!2sid" 
                        width="200" 
                        height="166" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <h2 className='font-bold text-3xl text-textcolor-300 text-center mb-4'>SUNDAYBEST.ID PERMATA HIJAU</h2>
                <p className='font-semibold text-xl text-center mb-2'>Grand ITC Permata Hijau Jl. Arteri Permata Hijau</p>
                <p className='font-semibold text-xl text-center mb-4'>No.2, Grogol Utara, Kec. Kby. Lama, Kota Jakarta <br /> Selatan, Daerah Khusus Ibukota Jakarta 12210</p>
                <a href="https://www.google.com/maps/place/SUNDAYBESTID/@-6.219347,106.783689,14z/data=!4m6!3m5!1s0x2e69f587f268af27:0x66c596fc12810d0b!8m2!3d-6.2210537!4d106.7834317!16s%2Fg%2F11l2cmw998?hl=en&entry=ttu" className='underline text-xl text-center block mb-4'>Direction</a>
                <h2 className='text-3xl text-[#545454] text-center mb-2'>Opening Hours</h2>
                <p className='text-xl text-center'>Monday - Sunday</p>
                <p className='text-xl text-center mb-4'>10.30am - 09.00pm</p>
            </div>

            <div className="mx-auto w-11/12 bg-white p-5 rounded-md shadow-lg mt-10">
                <div className='flex flex-col lg:flex-row items-center mb-4 lg:mb-0 lg:pl-12'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15862.752398020079!2d106.6730287!3d-6.304648!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e5588351fd7d%3A0x3121b709a41a52ca!2sPremiere%20Billiard%20BSD!5e0!3m2!1sen!2sid!4v1697975384954!5m2!1sen!2sid"  
                        width="200" 
                        height="166" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <h2 className='font-bold text-3xl text-textcolor-300 text-center mb-4'>SUNDAYBEST.ID BSD</h2>
                <p className='font-semibold text-xl text-center mb-2'>BSD city, Jl. Anggrek Ungu No.5</p>
                <p className='font-semibold text-xl text-center mb-4'>Rawa Buntu, Serpong Sub-District, South Tangerang City, Banten 15310</p>
                <a href="https://www.google.com/maps/place/Premiere+Billiard+BSD/@-6.304648,106.6730287,15z/data=!4m6!3m5!1s0x2e69e5588351fd7d:0x3121b709a41a52ca!8m2!3d-6.304648!4d106.6730287!16s%2Fg%2F11mwsv0qs0?entry=ttu" className='underline text-xl text-center block mb-4'>Direction</a>
                <h2 className='text-3xl text-[#545454] text-center mb-2'>Opening Hours</h2>
                <p className='text-xl text-center'>SOON!</p>
                <h1></h1>
                <h1></h1>
                <h1></h1>
            </div>
            <div className="mx-auto w-11/12 p-5 rounded-md shadow-lg mt-2"></div>
        </div>
    </div>
  )
}

export default Store
