import React , { useContext }from 'react'
import { DarkModeContext } from '../context/darkmode';
import Article3_Jantung from'../assets/Article3_Jantung.svg'
import Article3_Kesehatan from'../assets/Article3_Kesehatan.svg'
import Article3_diabetes from'../assets/Article3_diabetes.svg'
import Article3_alzheimer from'../assets/Article3_alzheimer.svg'
import Article3_gigi from'../assets/Article3_gigi.svg'
import Article3_ginjal from'../assets/Article3_ginjal.svg'


const Article3 = () => {
    const [theme, setTheme] = useContext(DarkModeContext)
    return (
        <div
            className = {`
            w-full`}>
            <div className='py-16 px-10 lg:px-32'>
                <div className='flex flex-col items-center gap-4'>
                    <h1 className={`
                        text-center text-xl lg:text-3xl font-bold mt-3`}>
                        MANFAAT MINUMAN ALKOHOL JIKA DIMINUM DALAM PORSI WAJAR
                    </h1>
                    <p  className={`
                        mt-3 text-md lg:text-xl text-center`}>
                        Kita semua tahu bahwa minuman alkohol memiliki dampak buruk bagi kesehatan, namun ternyata minuman alkohol juga memiliki manfaat untuk kesehatan. Beberapa manfaatnya 
                        ialah mengurangi risiko penggumpalan darah, penyakit Alzheimer, hingga pembentukan batu ginjal. Manfaat ini dapat diperoleh jika minuman alkohol dikonsumsi dalam batas wajar. 
                        Berikut ini adalah manfaat dari mengkonsumsi minuman beralkohol dengan porsi yang wajar:
                    </p>
                </div>

                <div className='flex flex-col items-center gap-4 mt-4'>
                    <h1 className={`
                        text-center text-xl lg:text-3xl font-bold mt-3`}>
                        Baik untuk jantung
                    </h1>
                    <img src={Article3_Jantung} alt="" className='rounded-lg'/>
                    <p  className={`
                        mt-3 text-md lg:text-xl text-center`}>
                        American Heart Association menyebut manfaat minum alkohol bagi kesehatan jantung termasuk meningkatkan high density-lipoprotein (HDL) 
                        atau kolesterol baik dan menurunkan low density-lipoprotein (LDL) atau kolesterol jahat.
                        Manfaat lainnya adalah mengurangi risiko penggumpalan darah yang dapat menyebabkan penyumbatan arteri. Penyumbatan arteri itu sendiri merupakan faktor 
                        risiko dari serangan jantung dan stroke.
                        Penelitian dari The American journal of clinical nutrition (2017) menemukan bahwa minum alkohol secukupnya berpotensi penurunan kadar kolesterol HDL, 
                        tergantung pada jenis minumannya.
                    </p>
                </div>

                <div className='flex flex-col items-center gap-4 mt-4'>
                    <h1 className={`
                        text-center text-xl lg:text-3xl font-bold mt-3`}>
                         Berpotensi menurunkan resiko alzheimer dan parkinson
                    </h1>
                    <img src={Article3_alzheimer} alt="" className='rounded-lg'/>
                    <p  className={`
                         mt-3 text-md lg:text-xl text-center`}>
                        Bir selama ini dikenal sebagai minuman tinggi kalori tapi rendah zat gizi. Namun, berbagai studi menemukan bahwa bir mengandung tiamin (vitamin B1) 
                        dan riboflavin (vitamin B2), juga mineral kalsium, magnesium, dan selenium yang lebih banyak daripada wine.
                        Para peneliti menduga hal ini disebabkan oleh bahan dasar yang digunakan untuk membuat bir, yaitu jelai (sejenis tumbuhan biji-bijian) atau hops (pucuk pohon cemara).
                        Sebuah studi terbitan Journal of Agriculture and Food Chemistry (2015) melaporkan senyawa aktif dalam hops, berpotensi melindungi dari risiko penyakit 
                        Alzheimer dan penyakit Parkinson.
                        Namun, penelitian dan uji klinis pada manusia masih diperlukan untuk memastikan manfaat tersebut. Pasalnya, 
                        penelitian baru sebatas uji pada sel (in vitro) di laboratorium. 
                    </p>
                </div>

                <div className='flex flex-col items-center gap-4 mt-4'>
                    <h1 className={`
                        text-center text-xl lg:text-3xl font-bold mt-3`}>
                        Menjaga kesehatan ginjal
                    </h1>
                    <img src={Article3_ginjal} alt="" className='rounded-lg'/>
                    <p  className={`
                       mt-3 text-md lg:text-xl text-center`}>
                        Selain baik untuk jantung, minuman beralkohol yang dikonsumsi sewajarnya ternyata memiliki manfaat memelihara kesehatan ginjal.
                        Ulasan dalam Clinical journal of the American Society of Nephrology (2013) menunjukkan kalau konsumsi bir berpotensi menurunkan risiko pembentukan batu 
                        ginjal hingga sekitar 41 persen. Sementara itu, anggur putih berpotensi menurunkan risiko pembentukan batu ginjal hingga 33 persen. 
                        Selain itu, konsumsi rutin dari dua jenis minuman keras ini diketahui berpotensi menurunkan risiko kemunculan batu empedu selama dikonsumsi sewajarnya. 
                        Itu disebabkan senyawa aktif dalam bir dan wine yang bekerja meningkatkan kolesterol baik sementara menurunkan kadar kolesterol buruk yang terkandung dalam 
                        empedu.
                    </p>
                </div>

                <div className='flex flex-col items-center gap-4 mt-4'>
                    <h1 className={`
                         text-center text-xl lg:text-3xl font-bold mt-3`}>
                        Menjaga kesehatan mulut dan gigi
                    </h1>
                    <img src={Article3_gigi} alt="" className='rounded-lg'/>
                    <p  className={`
                       mt-3 text-md lg:text-xl text-center`}>
                        Vodka merupakan jenis minuman keras yang memiliki kadar alkohol tinggi dan juga memiliki sifat antibakteri. Dua sifat inilah yang bisa menjadikan vodka sebagai 
                        obat kumur alternatif untuk membunuh bakteri penyebab bau mulut dan kerusakan gigi. 
                        Jika Anda ingin menambahkan faktor sehatnya, Anda bisa tambahkan beberapa batang cengkeh, lembaran daun mint, 
                        atau sebatang kayu manis dalam botol “obat kumur vodka”.
                    </p>
                </div>

                <div className='flex flex-col items-center gap-4 mt-4'>
                    <h1 className={`
                         text-center text-xl lg:text-3xl font-bold mt-3`}>
                        Memelihara kesehatan mata
                    </h1>
                    <img src={Article3_Kesehatan} alt="" className='rounded-lg'/>
                    <p  className={`
                        mt-3 text-md lg:text-xl text-center`}>
                        Segelas red wine memiliki kandungan zat besi, magnesium, kalium, serta lutein dan zeaxanthin yang lebih tinggi ketimbang white wine. 
                        Semua senyawa tersebut bisa mengurangi risiko katarak dan degenerasi makula, yaitu hilangnya penglihatan sentral akibat kerusakan pada tengah retina.
                    </p>
                </div>

                <div className='flex flex-col items-center gap-4 mt-4'>
                    <h1 className={`
                         text-center text-xl lg:text-3xl font-bold mt-3`}>
                        Berpotensi mencegah diabetes
                    </h1>
                    <img src={Article3_diabetes} alt="" className='rounded-lg'/>
                    <p  className={`
                        mt-3 text-md lg:text-xl text-center`}>
                        Manfaat kesehatan dari minum alkohol ini mungkin mengejutkan, tetapi minum dalam jumlah sedang dapat membantu menurunkan risiko diabetes tipe 2 
                        Hal tersebut tercatat di dalam ulasan American Journal of Public Health (2016). Menurut penelitian, minum satu hingga dua minuman per hari memiliki 
                        risiko 40% lebih rendah terkena penyakit ini dibandingkan dengan orang yang tidak minum alkohol. Minum 15 gram alkohol per hari juga berpotensi 
                        meningkatkan sensitivitas insulin, yang dapat membantu mencegah diabetes. Di sisi lain, penting untuk dicatat bahwa penelitian ini juga menunjukkan 
                        peningkatan risiko diabetes dengan konsumsi alkohol berlebihan.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Article3