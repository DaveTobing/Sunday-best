import React , { useContext }from 'react'
import { DarkModeContext } from '../context/darkmode'
import Article1_Wine from'../assets/Article1_Wine.svg'
import Article2_sake from'../assets/Article2_sake.svg'
import Article3_Jantung from'../assets/Article3_Jantung.svg'
import Article4 from'../assets/Article4.svg'
import Article5 from'../assets/Article5.svg'
import { Link } from 'react-router-dom'

const handleClick = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}


const Article = () => {
  return (
    <div className='bg-background-400 flex flex-col justify-center'>
      <div className='flex flex-col justify-center items-center lg:mx-48'>
        <h1
        className={`text-textcolor-600 font-extrabold text-2xl lg:text-5xl uppercase mb-4 mt-10`} 
        >
        Article
        </h1>
        <h2 className={`text-textcolor-600 text-md lg:text-xl font-bold italic text-center`}>
            The Best News and Facts Regarding Liquors
        </h2>
      </div>

      {/* Main content wrapper */}
      <div className='flex flex-col lg:grid lg:grid-cols-2 lg:mx-48 mx-2 mt-8'>
        
        {/* For mobile and tablet, I've adjusted the big card's width and height to match the smaller ones */}
        <Link to='/Article4' onClick={handleClick}>
          <div className='bg-background-200 rounded-lg hover:scale-105 duration-300 hover:cursor-pointer shadow-lg w-full lg:w-[500px] h-auto lg:h-[550px] mb-8 lg:mb-0'>
            <div>
              <img src={Article4} alt="" className='w-full lg:w-[500px] rounded-lg' />
            </div>
            <div className='my-4 mx-5'>
              <h1 className='text-xl lg:text-2xl font-bold gap-4 text-center'>
                SEJARAH WINE <br />DARI MASA KE MASA
              </h1>
              <p className='text-md lg:text-lg'>
                Wine merupakan salah satu jenis alkohol yang paling populer di dunia. Jika ditarik mundur sejarahnya, wine telah muncul di daerah Mesopotamia sejak 6000 SM
              </p>
            </div>
          </div>
        </Link>

          <div className='flex flex-col lg:grid lg:grid-rows-2 gap-8'>
              <Link to='/Article1' onClick={handleClick}>
                  <div className='bg-background-200 rounded-lg hover:scale-105 duration-300 hover:cursor-pointer shadow-lg h-[140px] lg:h-[130px] flex flex-row'>
                    <div>
                      <img src={Article1_Wine} alt="" className='h-[140px] lg:h-[130px] w-[400px] lg:w-[350px] rounded-lg'/>
                    </div>
                    <div className='flex flex-col justify-center mx-4'>
                      <h1 className='text-sm lg:text-md font-bold gap-4 uppercase'>
                        Alkohol Tersehat yang Dapat Anda Konsumsi
                      </h1>
                      <p className='text-xs'>
                        Kita semua tahu bahwa minuman alkohol memiliki dampak negatif bagi kesehatan, namun ada juga keuntungan yang jika mengkonsumsi sekedarnya. 
                      </p>
                    </div>
                  </div>
              </Link>


            <Link to='/Article2' onClick={handleClick}>
              <div className='bg-background-200 rounded-lg hover:scale-105 duration-300 hover:cursor-pointer shadow-lg h-[145px] lg:h-[130px] flex flex-row'>
                <div>
                  <img src={Article2_sake} alt="" className='h-[145px] lg:h-[130px] w-[350px] rounded-lg'/>
                </div>
                <div className='flex flex-col justify-center mx-2'>
                  <h1 className='text-sm lg:text-md font-bold gap-4 uppercase'>
                    MACAM-MACAM MINUMAN KERAS DAN KADAR ALKOHOLNYA
                  </h1>
                  <p className='text-xs'>
                    Kita semua tahu bahwa minuman alkohol memiliki dampak negatif bagi kesehatan, namun ada juga keuntungan yang jika mengkonsumsi sekedarnya. 
                  </p>
                </div>
              </div>
            </Link>

            <Link to='/Article3' onClick={handleClick}>
              <div className='bg-background-200 rounded-lg hover:scale-105 duration-300 hover:cursor-pointer shadow-lg h-[140px] lg:h-[130px] flex flex-row'>
                <div>
                  <img src={Article3_Jantung} alt="" className='h-[140px] lg:h-[130px] w-[350px] rounded-lg'/>
                </div>
                <div className='flex flex-col justify-center mx-2'>
                  <h1 className='text-sm lg:text-md font-bold gap-4 uppercase'>
                    MANFAAT MINUMAN ALKOHOL JIKA DIMINUM DALAM PORSI WAJAR
                  </h1>
                  <p className='text-xs'>
                    Kita semua tahu bahwa minuman alkohol memiliki dampak buruk bagi kesehatan, namun ternyata minuman alkohol juga memiliki manfaat untuk kesehatan
                  </p>
                </div>
              </div>
            </Link >

            <Link to='/Article5' onClick={handleClick}>
              <div className='bg-background-200 rounded-lg hover:scale-105 duration-300 hover:cursor-pointer shadow-lg h-[140px] lg:h-[130px] flex flex-row'>
                  <div>
                    <img src={Article5} alt="" className='h-[140px] lg:h-[130px] w-[350px] rounded-lg'/>
                  </div>
                  <div className='flex flex-col justify-center mx-2'>
                    <h1 className='text-sm lg:text-md font-bold gap-4 uppercase'>
                      MANFAAT SAKE UNTUK KESEHATAN KULIT
                    </h1>
                    <p className='text-xs lg:text-md'>
                      Jika minuman alkohol lain memiliki dampak buruk terhadap kesehatan kulit seperti membuat kulit wajah terlihat tua, sake justru kebalikannya
                    </p>
                  </div>
                </div>
            </Link>
          </div>
        </div>
        <div className='mb-10'>
        </div>
    </div>
  )
}

export default Article