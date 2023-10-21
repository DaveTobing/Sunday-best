import React , { useContext }from 'react'
import { DarkModeContext } from '../context/darkmode'
import Article1_Wine from'../assets/Article1_Wine.svg'
import Article2_sake from'../assets/Article2_sake.svg'
import Article3_Jantung from'../assets/Article3_Jantung.svg'
import Article4 from'../assets/Article4.svg'
import Article5 from'../assets/Article5.svg'
import { Link } from 'react-router-dom'

const Article = () => {
  return (
    <div className='bg-background-400 flex flex-col justify-center'>
      <div className='flex flex-col justify-center items-center lg:mx-48 '>
        <h1
        className={`text-textcolor-600 font-bold font-signika text-2xl lg:text-5xl uppercase mb-4 mt-10`} 
        >
        Article
        </h1>
      </div>
        <div className='flex flex-col lg:grid lg:grid-cols-2 lg:mx-48 mx-2'>
          <Link to='/Article4'>
            <div className='bg-background-200 rounded-lg hover:scale-105 duration-300 hover:cursor-pointer shadow-lg w-[345px] md:w-[400px] lg:w-[500px] lg:h-[550px]'>
              <div>
                <img src={Article4} alt="" className='w-[400px] lg:w-[500px] rounded-lg' />
              </div>
              <div className='my-4 mx-5'>
                <h1 className='text-xl lg:text-2xl font-lora font-bold gap-4 text-center'>
                  SEJARAH WINE <br />DARI MASA KE MASA
                </h1>
                <p className='text-md lg:text-lg font-lora'>
                  Wine merupakan salah satu jenis alkohol yang paling populer di dunia. Jika ditarik mundur sejarahnya, wine telah muncul di daerah Mesopotamia sejak 6000 SM
                </p>
              </div>
            </div>
          </Link>

          <div className='flex flex-col lg:grid lg:grid-rows-2 gap-8'>
              <Link to='/Article1'>
                  <div className='bg-background-200 rounded-lg hover:scale-105 duration-300 hover:cursor-pointer shadow-lg h-[140px] lg:h-[130px] flex flex-row'>
                    <div>
                      <img src={Article1_Wine} alt="" className='h-[140px] lg:h-[130px] w-[400px] lg:w-[350px] rounded-lg'/>
                    </div>
                    <div className='flex flex-col justify-center mx-4'>
                      <h1 className='text-sm lg:text-md font-lora font-bold gap-4 uppercase'>
                        Alkohol Tersehat yang Dapat Anda Konsumsi
                      </h1>
                      <p className='text-xs font-lora'>
                        Kita semua tahu bahwa minuman alkohol memiliki dampak negatif bagi kesehatan, namun ada juga keuntungan yang jika mengkonsumsi sekedarnya. 
                      </p>
                    </div>
                  </div>
              </Link>


            <Link to='/Article2'>
              <div className='bg-background-200 rounded-lg hover:scale-105 duration-300 hover:cursor-pointer shadow-lg h-[145px] lg:h-[130px] flex flex-row'>
                <div>
                  <img src={Article2_sake} alt="" className='h-[145px] lg:h-[130px] w-[350px] rounded-lg'/>
                </div>
                <div className='flex flex-col justify-center mx-2'>
                  <h1 className='text-sm lg:text-md font-lora font-bold gap-4 uppercase'>
                    MACAM-MACAM MINUMAN KERAS DAN KADAR ALKOHOLNYA
                  </h1>
                  <p className='text-xs font-lora'>
                    Kita semua tahu bahwa minuman alkohol memiliki dampak negatif bagi kesehatan, namun ada juga keuntungan yang jika mengkonsumsi sekedarnya. 
                  </p>
                </div>
              </div>
            </Link>

            <Link to='/Article3'>
              <div className='bg-background-200 rounded-lg hover:scale-105 duration-300 hover:cursor-pointer shadow-lg h-[140px] lg:h-[130px] flex flex-row'>
                <div>
                  <img src={Article3_Jantung} alt="" className='h-[140px] lg:h-[130px] w-[350px] rounded-lg'/>
                </div>
                <div className='flex flex-col justify-center mx-2'>
                  <h1 className='text-sm lg:text-md font-lora font-bold gap-4 uppercase'>
                    MANFAAT MINUMAN ALKOHOL JIKA DIMINUM DALAM PORSI WAJAR
                  </h1>
                  <p className='text-xs font-lora'>
                    Kita semua tahu bahwa minuman alkohol memiliki dampak buruk bagi kesehatan, namun ternyata minuman alkohol juga memiliki manfaat untuk kesehatan
                  </p>
                </div>
              </div>
            </Link >

            <Link to='/Article5'>
              <div className='bg-background-200 rounded-lg hover:scale-105 duration-300 hover:cursor-pointer shadow-lg h-[140px] lg:h-[130px] flex flex-row'>
                  <div>
                    <img src={Article5} alt="" className='h-[140px] lg:h-[130px] w-[350px] rounded-lg'/>
                  </div>
                  <div className='flex flex-col justify-center mx-2'>
                    <h1 className='text-sm lg:text-md font-lora font-bold gap-4 uppercase'>
                      MANFAAT SAKE UNTUK KESEHATAN KULIT
                    </h1>
                    <p className='text-xs lg:text-md font-lora'>
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