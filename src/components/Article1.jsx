import React , { useContext }from 'react'
import { DarkModeContext } from '../context/darkmode';
import Article1_Champagne from'../assets/Article1_Champagne.svg'
import Article1_Tequila from'../assets/Article1_Tequila.svg'
import Article1_Whiskey from'../assets/Article1_Whiskey.svg'
import Article1_Wine from'../assets/Article1_Wine.svg'

const Article1 = () => {
    const [theme, setTheme] = useContext(DarkModeContext)
    return (
        <div className = {`
            ${theme ? "bg-background-dark-200" : "bg-background-dark-400" } w-full`}>
            <div className='py-16 px-32'>
                <div className='flex flex-col items-center gap-4'>
                    <h1 
                    className={`
                    ${theme ? "text-light-600" : "text-light-450" } text-center text-3xl font-lora font-bold`}>Alkohol Tersehat yang Dapat Anda Konsumsi</h1>
                    <p className={`
                    ${theme ? "text-light-600" : "text-light-450" } mt-3 text-xl font-lora`}> 
                        Kita semua tahu bahwa minuman alkohol memiliki dampak negatif bagi kesehatan, 
                        namun ada juga keuntungan yang jika mengkonsumsi sekedarnya. Namun, kita tetap harus 
                        menekankan bahwa alkohol itu adalah racun dan tidak sehat, 
                        tapi beberapa penelitian menunjukkan bahwa minum satu atau dua gelas sehari sebenarnya dapat memberikan 
                        beberapa manfaat perlindungan bagi kesehatan jantung dan menurut saya, dan bisa membantu kita untuk rileks. 
                        Jika Anda memang peminum alkohol, ada pilihan alkohol sehat yang bisa Anda buat. 
                        Inilah yang perlu Anda ketahui tentang alkohol paling sehat
                    </p>
                </div>

                <div className='flex flex-col items-center gap-4 mt-4'>
                    <h1 className={`
                    ${theme ? "text-light-600" : "text-light-450" } text-3xl font-lora font-bold mt-3`}>Red Wine</h1>
                    <img src={Article1_Wine} alt="" className='rounded-lg'/>
                    <p className={`
                        ${theme ? "text-light-600" : "text-light-450" } mt-3 text-xl font-lora`}>
                        Jika membicarakan tentang minuman alkohol yang agak sehat, red wine berada di list tertinggi. 
                        Red wine mengandung antioksidan yang dapat melindungi sel Anda dari kerusakan, dan polifenol yang dapat 
                        meningkatkan kesehatan jantung. White wine dan rose wine juga mengandung zat tersebut, hanya dalam jumlah yang lebih kecil.
                        Penelitian menunjukkan bahwa anggur merah dikaitkan dengan peningkatan:
                        Kesehatan jantung
                        Kepadatan tulang
                        Kesehatan otak
                    </p>
                </div>

                <div className='flex flex-col items-center gap-4 mt-4'>
                    <h1 className={`
                         ${theme ? "text-light-600" : "text-light-450" } text-3xl font-lora font-bold mt-3`}>Champagne</h1>
                    <img src={Article1_Champagne} alt="" className='rounded-lg'/>
                    <p  className={`
                        ${theme ? "text-light-600" : "text-light-450" } mt-3 text-xl font-lora`}>
                        Anggur yang digunakan untuk membuat champagne kaya akan senyawa fenolik, sejenis antioksidan yang dapat meningkatkan kesehatan otak dan membantu mengurangi 
                        risiko demensia.Faktanya, penelitian pada hewan tahun 2013 menemukan bahwa champagne meningkatkan daya ingat pada hewan pengerat tua. Meskipun temuan ini 
                        belum dapat dikonfirmasi pada otak manusia, para peneliti percaya bahwa hasilnya menjanjikan dan cocok dengan hasil serupa pada makanan kaya antioksidan 
                        lainnya seperti blueberry.
                    </p>
                </div>

                <div className='flex flex-col items-center gap-4 mt-4'>
                    <h1 className={`
                        ${theme ? "text-light-600" : "text-light-450" } text-3xl font-lora font-bold mt-3`}>Tequila</h1>
                    <img src={Article1_Tequila} alt="" className='rounded-lg'/>
                    <p  className={`
                        ${theme ? "text-light-600" : "text-light-450" } mt-3 text-xl font-lora`}>
                        Penelitian pada tikus menunjukkan bahwa mengonsumsi tanaman agave tequila dapat meningkatkan penyerapan kalsium dan meningkatkan kesehatan tulang. 
                        Namun, bagi manusia, meminum tequila masih diragukan dapat membantu mengatasi kekurangan kalsium atau kondisi tulang seperti osteoporosis. 
                        Namun, minuman keras bening seperti tequila umumnya merupakan pilihan minuman rendah kalori
                    </p>
                </div>

                <div className='flex flex-col items-center gap-4 mt-4'>
                    <h1 className={`
                        ${theme ? "text-light-600" : "text-light-450" } text-3xl font-lora font-bold mt-3`}>Whiskey</h1>
                    <img src={Article1_Whiskey} alt="" className='rounded-lg'/>
                    <p  className={`
                        ${theme ? "text-light-600" : "text-light-450" } mt-3 text-xl font-lora`}>
                    Kita semua pernah mendengar tentang manfaat antioksidan dari anggur merah — dan penelitian menemukan bahwa wiski dapat memiliki efek serupa.
                    Faktanya, penelitian tersebut menyimpulkan bahwa penggunaan alkohol dalam jumlah sedang ditambah peningkatan asupan antioksidan dapat membantu 
                    menurunkan risiko penyakit jantung. Namun, apakah alkohol benar-benar menyehatkan jantung masih diperdebatkan, dan mungkin 
                    lebih baik menikmati makanan kaya antioksidan lainnya. Alkohol tidak akan pernah dianggap sebagai makanan kesehatan. 
                    Namun jika Anda ingin memanjakan diri, ada pilihan yang lebih sehat yang harus Anda ambil. Kunci dari alkohol adalah meminumnya 
                    dalam jumlah sedang, dan mempertimbangkan manfaat kesehatan dibandingkan dengan dampak negatif dari meminum minuman beralkohol.
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Article1