import React from 'react'
import Partnerhsip1 from '../assets/Partnership1.png'
import Partnerhsip2 from '../assets/Partnership2.png'
import Foosball from '../assets/Foosball.png'
import Netflix from '../assets/Netflix&Chill.png'
import Billiard from '../assets/Billiard.png'
import Listening from '../assets/Listening Bar.png'

const Partnership = () => {
  return (
    <div className='bg-background-150 '>
            <div className='flex flex-col lg:grid lg:grid-cols-2 mx-10 lg:mx-48 py-10 gap-6'>
                <div className='bg-red-500'>
                    qweqwe
                </div>
                <div className='flex flex-col items-center lg:items-start'>
                    <h1 className='text-2xl lg:text-6xl text-textcolor-400 font-bold'>Partnership</h1>
                    <p className='text-md lg:text-2xl mt-2 lg:mt-6 text-center lg:text-left'>We open opportunities for partnership collaboration with various types of partnership packages.</p>
                    <div className='flex justify-center w-48 h-14 lg:w-56 lg:h-14 bg-background-750 mt-6 items-center'>
                        <p className='text-textcolor-400 lg:text-xl font-bold'>Download Proposal</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col lg:grid lg:grid-cols-2 mx-10 lg:mx-48 lg:py-10 gap-6'>
                <div className='flex flex-col'>
                    <div className='hidden lg:inline-block'>
                        <img src={Partnerhsip1} alt="" />
                    </div>
                    <div className='mt-3 lg:mt-10'>
                        <p className='text-sm lg:text-lg text-center'>
                        Sundaybest presents a grand and mysterious 1920s era atmosphere, with classic interior design and an exclusive collection of alcoholic drinks. 
                        Enjoy a shopping experience with a knowledgeable team, while exploring rare wines and long-aged whiskies. 
                        This concept can serve online and offline purchases with first class service.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col items-center lg:items-start pt-10 lg:pt-0'>
                    <h1 className='text-2xl lg:text-6xl text-textcolor-400 font-bold uppercase'>retail store package</h1>
                    <p className='text-md lg:text-2xl mt-6 text-textcolor-650 italic text-center'>Timeless Elegance : Discover the Retail Heaven</p>
                    <div className='flex justify-center w-36 h-14 lg:w-48 lg:h-14 bg-background-750 mt-6 items-center'>
                        <p className='text-textcolor-400 lg:text-xl font-bold'>Join Us Now</p>
                    </div>
                    <div className='mt-16'>
                        <p className='text-textcolor-400 uppercase text-center'>what’s included in the package?</p>
                        <ul className='list-disc ml-5 items-center'>
                            <li>Construction and Equipment</li>
                            <li>Initial stock purchase</li>
                            <li>Legality</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='flex flex-col lg:grid lg:grid-cols-2 mx-10 lg:mx-48 lg:py-10 gap-6 pt-10 lg:pt-0'>
                <div className='flex flex-col items-center  lg:items-start'>
                    <h1 className='text-2xl lg:text-6xl text-textcolor-400 font-bold uppercase'>mini bar <br /> package</h1>
                    <p className='text-md lg:text-2xl mt-6 text-textcolor-650 italic'>A Fusion of Flavor and Fun</p>
                    <div className='flex justify-center w-48 h-14 bg-background-750 mt-6 items-center'>
                        <p className='text-textcolor-400 text-xl font-bold'>Join Us Now</p>
                    </div>
                    <div className='mt-10'>
                        <p className='text-sm lg:text-lg text-center'>
                            Sundaybest presents an unforgettable new experience, combining a retail store theme with an interesting entertainment touch. 
                            Customers can spend time at Sundaybest while enjoying drinks purchased at the retail store. 
                            Each Sundaybest has various forms of entertainment so that customers can experience new experiences every time they visit the store.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='hidden lg:inline-block'>
                        <img src={Partnerhsip2} alt="" />
                    </div>
                    <div className='lg:mt-6 lg:pl-32 mb-6 lg:mb-0'>
                        <p className='text-textcolor-400 uppercase text-center'>what’s included in the package?</p>
                        <ul className='list-disc ml-5 items-center'>
                            <li>Construction and Equipment</li>
                            <li>Initial stock purchase</li>
                            <li>Legality</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='bg-background-400 flex flex-col'>
                <div className='pt-16 flex flex-col'>
                    <h1 className='text-textcolor-300 text-2xl lg:text-4xl font-bold text-center'>MAKE IT YOUR OWN!</h1>
                    <p className='text-textcolor-650 text-center text-md lg:text-xl pt-5'>
                        In the Minibar concept, we present 4 types of entertainment concepts that you can 
                        <br /> choose to present in your shop. Have a more interesting concept? We can present 
                        <br /> your concept too!
                    </p>
                </div>
                <div className='flex flex-col lg:flex-row gap-7 justify-center pt-8 mb-10 items-center'>
                    <img src={Netflix} alt=""   className='w-64 lg:w-fit'/>
                    <img src={Listening} alt="" className='w-64 lg:w-fit' />
                    <img src={Billiard} alt=""  className='w-64 lg:w-fit'/>
                    <img src={Foosball} alt=""  className='w-64 lg:w-fit'/>
                </div>
            </div>
    </div>
  )
}

export default Partnership