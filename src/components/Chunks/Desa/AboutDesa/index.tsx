/* eslint-disable prettier/prettier */
import { IconMan, IconGirl, IconPeople } from '@/components/Icon'
import { Container } from '@/components/Layouts'

export const AboutDesa: React.FC = () => {
  return (
    <div tw="relative">
      <Container tw="py-5 relative">
        {/* Tentang */}
        <div className="flex flex-col space-y-5 text-lg text-gray-700">
          <p>
            Desa Langonsari adalah salah satu desa dari 6 (enam) desa yang berada di wilayah Kecamatan Pameungpeuk Kabupaten
            Bandung, yang terbentuk dari pemekaran Desa Sukasari pada tahun 1982 yang berdasarkan :
          </p>

          <ul className="pl-5 list-decimal">
            <li>Surat Keputusan Gubernur Jawa Barat Nomor : 146/SK.1968-Pemdes/1982, Tanggal 30 Nopember 1982.</li>
            <li>Surat Keputusan Bupati Bandung Nomor : 146/SK.PM.024-BK-HUK/1983, Tanggal 27 Juli 1983</li>
          </ul>

          <p>
            Langonsari berasal dari kata Palalangon yang artinya saung tinggi di pinggir hutan atau huma untuk mengintai
            binatang buruan dan Sari atau Asri yang artinya Indah, sehingga secara harapiah Langonsari berarti suatu bangunan
            indah tempat mengintai dengan harapan menjadi pusat perhatian banyak orang.
          </p>

          <p>
            Desa Langonsari merupakan desa yang berbukit dan mempunyai batas wilayah dengan desa-desa yang lain diantaranya :
          </p>

          <div tw="flex space-y-3 flex-col">
            <div tw="flex md:flex-row md:space-x-3 flex-col">
              <p tw="md:w-44">
                Sebelah Utara<span tw="inline md:hidden">: </span>
              </p>
              <p>
                <span tw="hidden md:inline">: </span>Desa Malakasari Kecamatan Baleendah.
              </p>
            </div>
            <div tw="flex md:flex-row md:space-x-3 flex-col">
              <p tw="md:w-44">
                Sebelah Timur<span tw="inline md:hidden">: </span>
              </p>
              <p>
                <span tw="hidden md:inline">: </span>Kelurahan Andir Kecamatan Baleendah.
              </p>
            </div>
            <div tw="flex md:flex-row md:space-x-3 flex-col">
              <p tw="md:w-44">
                Sebelah Selatan<span tw="inline md:hidden">: </span>
              </p>
              <p>
                <span tw="hidden md:inline">: </span>Desa Bojongmanggu Kecamatan Pameungpeuk.
              </p>
            </div>
            <div tw="flex md:flex-row md:space-x-3 flex-col">
              <p tw="md:w-44">
                Sebelah Barat<span tw="inline md:hidden">: </span>
              </p>
              <p>
                <span tw="hidden md:inline">: </span>Desa Sukasari Kecamatan Pameungpeuk.
              </p>
            </div>
            <div tw="flex md:flex-row md:space-x-3 flex-col">
              <p>
                Koordinat Desa Langonsari terletak<span tw="inline md:hidden">: </span>
              </p>
              <p>
                <span tw="hidden md:inline">: </span>107.60434 LS/LU-70.20245 BT/BB
              </p>
            </div>
          </div>
        </div>

        {/* Data penduduk */}
        <div tw="flex justify-center flex-col space-y-7 items-center w-full mx-auto p-5 bg-primary md:bg-info-desa bg-cover bg-no-repeat bg-center rounded-3xl my-10 text-white h-full text-center">
          <h1 tw="text-3xl font-semibold">Data Penduduk</h1>
          <div className="grid w-full h-full grid-rows-3 md:w-11/12 gap-y-9 md:grid-rows-none md:grid-cols-3 md:gap-x-4 md:gap-y-0">
            <div className="flex flex-col items-center space-y-3">
              <IconMan width={41} height={40} />
              <div tw="flex md:space-y-0 flex-col">
                <h2 className="text-2xl font-bold">9.688</h2>
                <p className="text-base font-medium">LAKI-LAKI</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <IconGirl width={41} height={40} />
              <div tw="flex md:space-y-0 flex-col">
                <h2 className="text-2xl font-bold">8.989</h2>
                <p className="text-base font-medium">PEREMPUAN</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <IconPeople width={41} height={40} />
              <div tw="flex md:space-y-0 flex-col">
                <h2 className="text-2xl font-bold">18.677</h2>
                <p className="text-base font-medium">TOTAL</p>
              </div>
            </div>
          </div>
        </div>

        {/* Potensi */}
        <div tw="text-lg text-gray-700 flex flex-col space-y-5">
          <h1 className="text-3xl font-bold text-primary">Profil Potensi Desa</h1>
          <p>
            Potensi desa adalah segenap sumber daya alam dan sumber daya manusia yang dimiliki desa sebagai modal dasar yang
            perlu dikelola dan dikembangkan bagi kelangsungan dan perkembangan desa.
          </p>
          <h6 className="pt-5 text-lg font-bold">Potensi Fisik dan Non Fisik :</h6>
          <ul className="flex flex-col pl-5 space-y-4 list-disc">
            <li>
              Sumber Daya Alam
              <p>
                Sumber daya alam yang dimiliki desa seperti lahan kosong, sungai, sawah,perkebunan, hutan, pegunungan yang
                pada saat ini belum dimanfaatkan secara maksimal.
              </p>
            </li>
            <li>
              Sumber Daya Manusia
              <p>
                Potensi yang dimiliki Desa adalah tenaga, kader kesehatan,kader pertanian, dan tersedianya SDM yang memadai
                ini bisa dilihat dari tabel tingkat pendidikan di atas rata-rata adalah SMP/SMA.
              </p>
            </li>
            <li>
              Sumber Daya Sosial
              <p>
                Potensi sumber daya sosial yang dimiliki Desa adalah banyaknya lembaga-lembaga yanga ada dimasyarakat seperti
                LPM,Gapoktan,Kelompok Pengajian, UP2K, Posyandu, Karang Taruna ,dan lain-lain.
              </p>
            </li>
            <li>
              Sumber Daya Ekonomi
              <p>
                Potensi sumber daya ekonomi yang dimiliki Desa adalah adanya Lahan-Lahan Pertanian, Perkebunan, maupun
                Peralatan Kerja Seperti Peternakan,Perikanan.
              </p>
            </li>
          </ul>
          <h6 className="pt-5 text-lg font-bold">Potensi Desa Langonsari: :</h6>
          <p>
            Potensi yang ada di Desa Langonsari untuk mendukung kemajuan Desa, baik dari sumber daya alam, sumber daya
            manusia, kelembagaan, sarana prasarana maupun ekonomi dan sosial budaya. terutama Desa Langonsari sebagai Sentra
            Peci di Kabupaten Bandung.
          </p>
        </div>
      </Container>
    </div>
  )
}
