import React , { useContext }from 'react'
import { DarkModeContext } from '../context/darkmode';
import Article4_pict from'../assets/Article4.svg'


const Article4 = () => {
    const [theme, setTheme] = useContext(DarkModeContext)
    return (
        <div
        className = {`
        ${theme ? "bg-background-dark-200" : "bg-background-dark-400" } w-full`} >
            <div className='py-16 px-32'>
                <div className='flex flex-col items-center gap-4'>
                    <h1 className={`
                        ${theme ? "text-light-600" : "text-light-450" } text-center text-3xl font-lora font-bold mt-3`}>SEJARAH WINE DARI MASA KE MASA</h1>
                    <p className={`
                        ${theme ? "text-light-600" : "text-light-450" } mt-3 text-xl font-lora`}>
                        Wine merupakan salah satu jenis alkohol yang paling populer di dunia. Jika ditarik mundur sejarahnya, 
                        wine telah muncul di daerah Mesopotamia sejak 6000 SM. Wine diproduksi secara tidak sengaja. Pada mulanya, 
                        terdapat sekumpulan wanita di Mesopotamia yang memetik buah anggur dan dikumpulkan dalam sebuah tong besar. 
                        Alhasil, buah anggur yang berada di paling bawah tergencet kemudian pecah dan tercampur dengan 
                        ragi alami yang terdapat di bagian kulit luar buah anggur – wine pun tercipta.
                    </p>
                </div>
                
                <div className='flex flex-col gap-4 mt-4'>
                    <h1 className={`
                        ${theme ? "text-light-600" : "text-light-450" } text-3xl font-lora font-bold mt-3`}> 7000 SM</h1>
                    <p className={`
                        ${theme ? "text-light-600" : "text-light-450" } mt-3 text-xl font-lora`}>
                        Wine tertua yang pernah ditemukan berasal dari Lembah Sungai Kuning di Cina. Di sini, penduduknya memfermentasi madu, beras, dan berbagai buah-buahan dan disimpan 
                        dalam wadah tembikar besar (seperti guci tanah liat raksasa), yang kemudian dikubur di dalam tanah. Selama lebih dari beberapa ribu tahun, 
                        metode ini disebarkan dan masih digunakan di beberapa negara hingga saat ini.
                    </p>
                </div>

                <div className='flex flex-col gap-4 mt-4'>
                    <h1 className={`
                        ${theme ? "text-light-600" : "text-light-450" } text-3xl font-lora font-bold mt-3`}>5000 SM</h1>
                    <p className={`
                        ${theme ? "text-light-600" : "text-light-450" } mt-3 text-xl font-lora`}>
                    Para arkeolog menemukan bahwa wine telah dibuat 7.000 tahun yang lalu di zaman modern Iran, yang pada saat itu merupakan pemukiman permanen pertama di Timur Tengah. 
                    </p>
                </div>

                <div className='flex flex-col gap-4 mt-4'>
                    <h1 className={`
                        ${theme ? "text-light-600" : "text-light-450" } text-3xl font-lora font-bold mt-3`}>4000 SM</h1>
                    <p className={`
                        ${theme ? "text-light-600" : "text-light-450" } mt-3 text-xl font-lora`}>
                        Para leluhur di Sisilia mulai menanam anggur sejak dini. Kemudian mereka mulai membuat Marsala, 
                        wine dengan tambahan alkohol yang terkenal, yang dibuat dari anggur ras asli dengan cara pembuatan wine yang unik.
                    </p>
                </div>

                <div className='flex flex-col gap-4 mt-4'>
                    <h1 className={`
                        ${theme ? "text-light-600" : "text-light-450" } text-3xl font-lora font-bold mt-3`}>1600-1000 SM</h1>
                    <p className={`
                        ${theme ? "text-light-600" : "text-light-450" } mt-3 text-xl font-lora`}>
                    Selama masa inilah sejarawan meyakini bahwa wine mulai dikirimkan secara rutin dalam budaya Israel dan Yunani kuno. 
                    Wine diperdagangkan dan dikonsumsi untuk menemani masyarakat selama perjalanan mereka, wine tersebut disimpan dalam kantong berbahan kulit kambing. 
                    </p>
                </div>

                <div className='flex flex-col gap-4 mt-4'>
                    <h1 className={`
                        ${theme ? "text-light-600" : "text-light-450" } text-3xl font-lora font-bold mt-3`}>900 SM</h1>
                    <p className={`
                        ${theme ? "text-light-600" : "text-light-450" } mt-3 text-xl font-lora`}>
                    Kita sekarang sedang memasuki era dimana praktek pembuatan wine dilakukan secara modern. Peradaban seperti yang dilakukan di Eropa Utara, yang dilimpahi oleh pohon ek, 
                    mereka mulai menggunakan gentong kayu ek untuk menyimpan wine mereka. Kami membayangkan, dari metode 
                    inilah mereka mengetahui bahwa pohon ek itu dapat mempengaruhi rasa, dan perlahan-lahan mengoksidasi wine,
                    praktik yang masih kita lakukan hingga saat ini.
                    </p>
                </div>

                <div className='flex flex-col gap-4 mt-4'>
                    <h1 className={`
                        ${theme ? "text-light-600" : "text-light-450" } text-3xl font-lora font-bold mt-3`}>1000</h1>
                    <p className={`
                        ${theme ? "text-light-600" : "text-light-450" } mt-3 text-xl font-lora`}>
                    Selama ratusan tahun hingga saat ini, keterampilan membuat wine dan metode transportasi mulai berkembang. 
                    Keterampilan dan metode tersebut dibagikan ke seluruh dunia. 
                    Sekitar tahun 1000, Chateau de Goulaine dibangun, yang diyakini sebagai kilang wine tertua.
                    </p>
                </div>

                <div className='flex flex-col gap-4 mt-4'>
                    <h1 className={`
                        ${theme ? "text-light-600" : "text-light-450" } text-3xl font-lora font-bold mt-3`}>1400-1500</h1>
                    <p className={`
                        ${theme ? "text-light-600" : "text-light-450" } mt-3 text-xl font-lora`}>
                    Kebudayaan Eropa menemukan wine bersoda setelah wine yang sedang dikirim untuk diperdagangkan mengalami 
                    fermentasi sekunder, sehingga menciptakan wine bersoda. Juga sekitar waktu yang sama, 
                    tanaman merambat populer yang tumbuh subur di Eropa ini dikirim ke Amerika Selatan untuk dibudidayakan
                    </p>
                </div>

                <div className='flex flex-col gap-4 mt-4'>
                    <h1 className={`
                        ${theme ? "text-light-600" : "text-light-450" } text-3xl font-lora font-bold mt-3`}>1740</h1>
                    <p className={`
                        ${theme ? "text-light-600" : "text-light-450" } mt-3 text-xl font-lora`}>
                    Botol kaca modern mulai dirancang. Meskipun mereka sudah mulai menggunakan botol kaca seratus tahun sebelumnya, 
                    namun gabus penyumbatnya selalu mengering dan membuatnya sulit untuk dikirim
                    </p>
                </div>

                <div className='flex flex-col gap-4 mt-4'>
                    <h1 className={`
                        ${theme ? "text-light-600" : "text-light-450" } text-3xl font-lora font-bold mt-3`}>1964</h1>
                    <p className={`
                        ${theme ? "text-light-600" : "text-light-450" } mt-3 text-xl font-lora`}>
                        Wine dalam kotak mulai diperkenalkan
                    </p>
                </div>

                <div className='flex flex-col gap-4 mt-4'>
                    <h1 className={`
                        ${theme ? "text-light-600" : "text-light-450" } text-3xl font-lora font-bold mt-3`}>2010</h1>
                    <p className={`
                        ${theme ? "text-light-600" : "text-light-450" } mt-3 text-xl font-lora`}>
                    Cabernet Sauvignon adalah anggur merah yang paling banyak ditanam di dunia, 
                    Airen adalah anggur hijau yang paling banyak ditanam di dunia
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Article4