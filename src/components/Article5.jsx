import React , { useContext }from 'react'
import { DarkModeContext } from '../context/darkmode';
import Article5_pict from'../assets/Article5.svg'

const Article5 = () => {
    const [theme, setTheme] = useContext(DarkModeContext)
    return (
        <div className = {`
         w-full`}>
            <div className='py-16 px-10 lg:px-32'>
                <div className='flex flex-col gap-4'>
                    <h1 className={`
                         text-center text-xl lg:text-3xl font-bold mt-3`}>
                        MANFAAT SAKE UNTUK KESEHATAN KULIT
                    </h1>
                    <p className={`
                        mt-3 text-md lg:text-xl text-center`}>
                        Jika minuman alkohol lain memiliki dampak buruk terhadap kesehatan kulit seperti membuat kulit wajah terlihat tua, sake justru kebalikannya. 
                        Minuman alkohol dari negara Jepang yang dibuat dari beras dan bercita rasa manis ini ternyata memiliki beberapa manfaat untuk kecantikan. 
                        Sake jepang yang kerap kali digunakan oleh perusahaan kosmetik adalah Japanese Sake Extract. Atau dikenal dengan nama latin Leuconostoc Rice 
                        Ferment Filtrate Extract. Bahan ini menjadi salah satu ingredient penting yang membawa banyak manfaat untuk kesehatan kulit. Dengan banyaknya 
                        manfaat yang berasal dari bahan tersebut, sake jepang kemudian kerap kali ditemukan pada produk skincare seperti facial wash, toner, serum, dan lain 
                        sebagainya. Berikut adalah manfaat sake untuk kesehatan kulit.
                    </p>
                </div>

                <div className='flex flex-col gap-4 mt-4'>
                    <h1 className={`
                        text-center text-xl lg:text-3xl font-bold mt-3`}>
                        Membantu Mencerahkan Kulit
                    </h1>
                    <p className={`
                        mt-3 text-md lg:text-xl text-center`}>
                        Manfaat sake jepang untuk kesehatan kulit yang pertama adalah membantu memberi cerah alami pada kulit. Sake jepang mengandung asam kojic, 
                        di mana kandungan tersebut bisa membantu lebih mencerahkan kulit kamu.
                        Kandungan asam kojic ini akan membantu menghambat pembentukan melanin, 
                        sehingga kulit akan tampil lebih cerah bercahaya. Selain itu, kandungan ini juga bisa memperbaiki warna kulit akibat hiperpigmentasi.
                    </p>
                </div>

                <div className='flex flex-col gap-4 mt-4'>
                    <h1 className={`
                        text-center text-xl lg:text-3xl font-bold mt-3`}>
                        Meratakan Warna Kulit
                    </h1>
                    <p className={`
                        mt-3 text-md lg:text-xl text-center`}>
                        Kandungan asam kojic pada sake jepang masih memiliki peranan penting untuk kulit kamu. Terlebih saat wajah yang 
                        terus-menerus terpapar sinar matahari, dan menjadikan kulit wajah timbut bintik-bitik hitam.
                        Kandungan ini bisa membantu memudarkan bahkan menghilangkan bintik-bintik hitam di wajah, sehingga kulit wajah bisa cerah secara merata, 
                        dan tidak belang saat dilihat. Dengan adanya bahan sake jepang pada produk skincare, kamu bisa mendapatkan manfaat ini, sehingga tampilan kulit 
                        bisa lebih optimal
                    </p>
                </div>

                <div className='flex flex-col gap-4 mt-4'>
                    <h1 className={`
                        text-center text-xl lg:text-3xl font-bold mt-3`}>
                        Dapat Mencegah Timbulnya Jerawat
                    </h1>
                    <p className={`
                        mt-3 text-md lg:text-xl text-center`}>
                        Manfaat sake jepang untuk kesehatan kulit yang ketiga adalah bisa membantu mencegah timbulnya jerawat pada kulit kamu. 
                        Sekali lagi, karena sake jepang mengandung asam kojic, kandungan tersebut nyatanya juga berguna untuk mencegah timbulnya jerawat.
                        Efek jangka panjang dari asam kojic kemudian menjadikan kulit kamu lebih sehat dan terhindar dari masalah jerawat.
                        Kemudian zat aktif pada sake jepang juga bisa membantu mengontrol produksi sebum pada pori-pori kulit. Tidak hanya itu, 
                        kandungan aktif dalam sake jepang juga bisa membantu mengencangkan sekaligus mengecilkan pori-pori kulit. Dengan pori-pori yang mencecil,
                        kotoran dan debu penyebab jerawat tak akan masuk ke dalamnya. Menjadikan jerawat tidak muncul dipermukaan kulit kamu. Jadi, kamu bisa terbebas dari 
                        masalah yang satu ini.
                    </p>
                </div>

                <div className='flex flex-col gap-4 mt-4'>
                    <h1 className={`
                        text-center text-xl lg:text-3xl font-bold mt-3`}>
                        Menghidrasi Kulit dengan Baik
                    </h1>
                    <p className={`
                        mt-3 text-md lg:text-xl text-center`}>
                        Manfaat sake jepang untuk kesehatan kulit yang selanjutnya adalah bisa membantu menghidrasi kulit dengan sangat baik. 
                        Skincare yang mengandung sake jepang nyatanya merupakan pilihan yang tepat untuk si pemiliki kulit kering.
                        Sake jepang ini mengandung asam amino dan gliserol, di mana kedua kandungan tadi sangat bagus dalam membantu menghidrasi kulit kamu. 
                        Kandungan asam amino ini juga bisa membantu mempertahankan kelembapan kulitmu. Selain itu, kandungan asam amino di dalam sake jepang juga bisa membantu 
                        mencegah penguapan pada kulit. Sehingga menjadikan kulitmu tidak mudah kering, dan memiliki kelembapan yang kebih tahan lama
                    </p>
                </div>

                <div className='flex flex-col gap-4 mt-4'>
                    <h1 className={`
                        text-center text-xl lg:text-3xl font-bold mt-3`}>
                        Dapat Melembutkan Kulit
                    </h1>
                    <p className={`
                        mt-3 text-md lg:text-xl text-center`}>
                        Manfaat sake jepang untuk kesehatan kulit yang ke enam yaitu dapat membantu melembutkan kulit. Dengan adanya proses fermentasi dari sake jepang ini, 
                        menyebabkan terbentuknya enzim-enzim yang aktif dalam mengangkat sel-sel kulit mati. Dengan adanya enzim-enzim tersebut, sake jepang dapat digunakan untuk 
                        mengeksfoliasi kulit, dan tentunya dari proses tersebut sel-sel kulit mati bisa terangkat dengan baik.
                        Kandungan asam amino dan sakarida di dalam sake jepang ini juga bisa membantu menghaluskan kulit. Karena sel-sel kulit mati tadi sudah terangkat dengan baik, 
                        dan menjadikan tekstur kulit lebih lembut dan halus. Terlebih, tidak sedikit perempuan-perempuan Jepang berendam dengan menggunakan Sake, karena bisa membantu 
                        membuat kulit lebih lembut dari sebelumnya!
                    </p>
                </div>

                <div className='flex flex-col gap-4 mt-4'>
                    <h1 className={`
                        text-center text-xl lg:text-3xl font-bold mt-3`}>
                        Mampu Mencegah Munculnya Tanda-Tanda Penuaan
                    </h1>
                    <p className={`
                        mt-3 text-md lg:text-xl text-center`}>
                        Manfaat sake jepang untuk kesehatan kulit yang lainnya adalah dengan membantu mencegah tanda-tanda penuaan pada kulit. 
                        Selain asam amino yang terkandung dalam sake jepang, bahan ini kaya akan kandungan asam ferulic. Asam furic ini merupakan antioksidan yang baik dalam 
                        menghalangi sinar UV masuk pada kulit.
                        Kandungan skincare yang mengandung sake jepang bisa membantumu melawan tanda-tanda penuaan yang diakibatkan oleh sinar UV ini. Terlebih paparan sinar 
                        UV bisa menyebabkan bintik hitam, garis halus, dan kerutan yang menggangu tampilan kulut. Dengan begitu, kamu bisa menggunakan skincare berbahan dasar 
                        sake jepang untuk melawan tanda-tanda penuaan tersebut. Sehingga, mampu menjadikan kulit kamu akan selalu tampil cantik dan awet muda.
                    </p>
                </div>

                <div className='flex flex-col gap-4 mt-4'>
                    <h1 className={`
                        text-center text-xl lg:text-3xl font-bold mt-3`}>
                        Menutrisi Kulit
                    </h1>
                    <p className={`
                        mt-3 text-md lg:text-xl text-center`}>
                        Manfaat sake jepang untuk kesehatan kulit yang terakhir adalah mampu menutrisi kulit. Dari penjelasan di atas dapat dilihat bahwa sake jepang mengandung banyak 
                        sekali manfaat yang bisa membantu mengoptimalkan tampilan kulit. Dengan kandungan-kandungan terbaik tersebut, menjadikan sake jepang juga membantu memberikan nutrisi 
                        untuk kulit. Kulit akan terlihat lebih cerah, 
                        dan kulit juga akan terasa lebih lembut dari sebelumnya. Jadi, menggunakan sake jepang sebagai salah satu bahan yang bisa membantu menyehatkan kulit.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Article5