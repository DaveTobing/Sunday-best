import React , { useContext }from 'react'
import { DarkModeContext } from '../context/darkmode';
import Article2_absinthe from'../assets/Article2_absinthe.svg'
import Article2_bir from'../assets/Article2_bir.svg'
import Article2_brandy from'../assets/Article2_brandy.svg'
import Article2_rum from'../assets/Article2_rum.svg'
import Article2_sake from'../assets/Article2_sake.svg'
import Article2_soju from'../assets/Article2_soju.svg'
import Article2_tequila from'../assets/Article2_tequila.svg'
import Article2_vodka from'../assets/Article2_vodka.svg'
import Article2_whiskey from'../assets/Article2_whiskey.svg'
import Article2_wine from'../assets/Article2_wine.svg'

const Article2 = () => {
    const [theme, setTheme] = useContext(DarkModeContext)
    return (
        <div className = {`w-full`}>
                <div className='py-16 px-10 lg:px-32'>
                    <div className='flex flex-col items-center gap-4'>
                    <h1 className={`
                        text-center text-xl lg:text-3xl font-bold mt-3`}>Alkohol Tersehat yang Dapat Anda Konsumsi</h1>
                    <p  className={`
                        mt-3 text-md lg:text-xl text-center`}> 
                        Jika anda penggemar minuman keras, anda pasti sudah tahu jika minuman alkohol hadir dengan kadar alkohol yang beragam di tiap jenis minuman. 
                        Kadar alkohol yang terdapat pada minuman keras akan mempengaruhi respons tubuh Anda setelah meminumnya. Anda yang meminum alkohol dalam konsentrasi 
                        tinggi akan berpotensi untuk mabuk hingga tak sadarkan diri. Agar tidak merusak kesehatan, sebaiknya periksa dulu kandungan alkohol pada minuman keras yang hendak diminum. 
                        Berikut adalah enis-jenis minuman keras dan kadar alkoholnya.
                    </p>
                </div>

                <div className='flex flex-col items-center gap-4 mt-4'>
                    <h1 className={`
                        text-center text-xl lg:text-3xl font-bold mt-3`}>Bir</h1>
                    <img src={Article2_bir} alt="" className='rounded-lg'/>
                    <p  className={`
                        mt-3 text-md lg:text-xl text-center`}>
                        Bir merupakan salah satu minuman beralkohol yang paling populer. Menariknya, bir juga menjadi minuman yang paling banyak dikonsumsi setelah air putih dan teh.
                        Minuman ini terbuat dari fermentasi biji-bijian, seperti beras, jagung, dan gandum. Hadir dengan rasa yang kuat dan lezat, minuman ini hanya mengandung 2-8% alkohol saja. 
                        Tentu kadar rendah alkohol tersebut dikarenakan bahan pembuatannya yang berasal dari fermentasi biji-bijian. 
                    </p>
                </div>

                <div className='flex flex-col items-center gap-4 mt-4'>
                    <h1 className={`
                        text-center text-xl lg:text-3xl font-bold mt-3`}>Wine</h1>
                    <img src={Article2_wine} alt="" className='rounded-lg'/>
                    <p  className={`
                        mt-3 text-md lg:text-xl text-center`}>
                        Wine atau anggur adalah minuman keras berikutnya yang populer. Berbeda dari bir yang terbuat dari fermentasi biji-bijian, wine terbuat dari sari anggur. 
                        Fermentasinya dilakukan dalam waktu yang sangat lama, sehingga menghasilkan wine yang berkualitas. Kadar alkohol yang dimiliki oleh wine berkisar 8-14%
                    </p>
                </div>

                <div className='flex flex-col items-center gap-4 mt-4'>
                    <h1 className={`
                       text-center text-xl lg:text-3xl font-bold mt-3`}>Sake</h1>
                    <img src={Article2_sake} alt="" className='rounded-lg'/>
                    <p  className={`
                        mt-3 text-md lg:text-xl text-center`}>
                        Minuman beralkohol berikutnya yang masuk dalam daftar adalah sake. Sake berasal dari Jepang dan sering dinikmati saat musim dingin. 
                        Minuman ini terbuat dari fermentasi beras. Sake memiliki kadar alkohol yang cukup tinggi, yaitu 16%.
                    </p>
                </div>

                <div className='flex flex-col items-center gap-4 mt-4'>
                    <h1 className={`
                       text-center text-xl lg:text-3xl font-bold mt-3`}>Soju</h1>
                    <img src={Article2_soju} alt="" className='rounded-lg'/>
                    <p  className={`
                       mt-3 text-md lg:text-xl text-center`}>
                        Soju adalah arak khas Korea yang juga memiliki kemiripan dengan vodka dan sake. Tak hanya di Korea, kini soju tengah populer 
                        di berbagai belahan dunia berkat pengaruh gelombang Hallyu.
                        Soju umumnya hadir dengan kadar alkohol 20-40%. Namun ada pula soju yang menawarkan kadar alkohol lebih rendah.
                    </p>
                </div>

                <div className='flex flex-col items-center gap-4 mt-4'>
                    <h1 className={`
                        text-center text-xl lg:text-3xl font-bold mt-3`}>Tequila</h1>
                    <img src={Article2_tequila} alt="" className='rounded-lg'/>
                    <p  className={`
                        mt-3 text-md lg:text-xl text-center`}>
                        Tequila adalah minuman keras yang berasal dari Amerika Tengah. Minuman ini terbuat dari tanaman agave biru dari Meksiko. Rasanya cenderung manis, 
                        karena mengandung gula yang cukup tinggi. Minuman beralkohol ini dikenal sebagai minuman yang mampu memberikan semangat. Kadar alkohol pada tequila berkisar 40%.
                    </p>
                </div>

                <div className='flex flex-col items-center gap-4 mt-4'>
                    <h1 className={`
                        text-center text-xl lg:text-3xl font-bold mt-3`}>Vodka</h1>
                    <img src={Article2_vodka} alt="" className='rounded-lg' />
                    <p  className={`
                        mt-3 text-md lg:text-xl text-center`}>
                        agi yang mencari minuman beralkohol dengan kadar alkohol cukup tinggi, Vodka bisa menjadi pilihan. Vodka umumnya hadir dengan kadar alkohol 35-60%. 
                        Minuman keras ini dibuat dari fermentasi biji-bijian, seperti gandum hitam dan jagung. Menurut ahli kimia dari Rusia, kadar alkohol yang sempurna bagi vodka adalah 38%. 
                    </p>
                </div>

                <div className='flex flex-col items-center gap-4 mt-4'>
                    <h1 className={`
                        text-center text-xl lg:text-3xl font-bold mt-3`}>Brandy</h1>
                    <img src={Article2_brandy} alt="" className='rounded-lg' />
                    <p  className={`
                        mt-3 text-md lg:text-xl text-center`}>
                        Selain wine, ada pula brandy yang merupakan minuman beralkohol dari anggur. Minuman ini terbuat dari juniper berry yang telah melalui proses 
                        fermentasi dan disuling. Salah satu brandy yang populer adalah Cognag.
                        Brandy memiliki kadar alkohol berkisar 35-60%. Persentase ini terbilang cukup tinggi dibanding 
                        minuman beralkohol lain yang berasal dari fermentasi tanaman.
                    </p>
                </div>

                <div className='flex flex-col items-center gap-4 mt-4'>
                    <h1 className={`
                       text-center text-xl lg:text-3xl font-bold mt-3`}>Whiskey</h1>
                    <img src={Article2_whiskey} alt="" className='rounded-lg' />
                    <p  className={`
                        mt-3 text-md lg:text-xl text-center`}>
                        Minuman berikutnya yang masuk dalam daftar adalah whiskey. Whiskey adalah minuman beralkohol yang terbuat dari fermentasi serealia, sepeti gandum, gandum hitam, dan jagung. 
                        Proses fermentasinya dilakukan di dalam tong kayu. Whiskey memiliki warna yang bening hingga kecoklatan. Kadar alkohol yang dimiliki berkisar 40-50%.
                    </p>
                </div>

                <div className='flex flex-col items-center gap-4 mt-4'>
                    <h1 className={`
                       text-center text-xl lg:text-3xl font-bold mt-3`}>Rum</h1>
                    <img src={Article2_rum} alt="" className='rounded-lg' />
                    <p  className={`
                        mt-3 text-md lg:text-xl text-center`}>
                        Rum merupakan minuman beralkohol yang terbuat dari fermentasi tebu atau molase. Ada dua jenis rum yang bisa ditemukan di pasaran, 
                        yaitu rum putih dan rum coklat. Kedua rum ini kerap dicampurkan ke dalam hidangan penutup dan koktail.
                        Bila berbicara mengenai kandungan alkoholnya, konsentrasi alkohol rum tidak jauh berbeda dari wiski. 
                        Biasanya rum memiliki kadar alkohol sekitar 37,5%. 
                    </p>
                </div>

                <div className='flex flex-col items-center gap-4 mt-4'>
                    <h1 className={`
                        text-center text-xl lg:text-3xl font-bold mt-3`}>Absinthe</h1>
                    <img src={Article2_absinthe} alt="" className='rounded-lg' />
                    <p  className={`
                        mt-3 text-md lg:text-xl text-center`}>
                        Minuman beralkohol terakhir dalam daftar adalah absinthe. Minuman ini terbuat dari berbagai acam daun dan tumbuhan, seperti adas, fennel, apsintus, ketumbar, 
                        daun tiffany, juniper, pala, serta hisop. Absinthe umumnya diberi perisa adas atau anise serta terbuat dari apsintus atau wormwood.
                        Absinthe memiliki kadar alkohol yang sangat tinggi, yaitu 40-90%. Kadar alkoholnya yang tinggi membuat minuman ini dianggap sebagai 
                        halusinogen dan sempat dilarang dikonsumsi di beberapa negara.
                    </p>
                </div>

                </div>
        </div>
    )
}

export default Article2