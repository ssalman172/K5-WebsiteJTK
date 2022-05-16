import React from 'react'
import Banner from '../components/Banner'
import VisiMisi from '../components/VisiMisi'

const misi = [
  'Menyelenggarakan program pendidikan yang menghasilkan sarjana terapan di bidang Rekayasa Perangkat Lunak yang kompeten, bermoral, berjiwa wirausaha, berwawasan lingkungan serta mampu bersaing di tingkat nasional maupun internasional',
  'Melaksanakan penelitian dibidang Teknologi Informasi yang dapat diterapkan pada Industri atau masyarakat ditingkat nasional maupun internasional',
  'Melakukan pengabdian kepada masyarakat melalui diseminasi ilmu dan penerapannya di lingkup nasional.'
]

const ProfilD4 = () => {
  return (
    <div>
      <Banner img='/img/landing/banner.png' />
      <div className="prodi-container flex justify-center items-center">
        <div className="prodi-card flex flex-col items-center justify-center mr5">
          <p className="text-white text-8xl mb-5">D4</p>
          <p className="text-white text-2xl mb-5">Teknik Informatika</p>
        </div>
      </div>
      <div className='w-7/12 mr-auto ml-auto h-[540px] mt-10 mb-10'>
        <iframe className='w-full h-full'
          src="https://www.youtube.com/embed/sauzoenoYns">
        </iframe>
      </div>
      <VisiMisi
        visi="Menjadi Program Studi unggulan pada jenjang pendidikan diploma IV di bidang Teknik Informatika sehingga mampu menghasilkan tenaga profesional pengembang perangkat lunak yang kompeten, memiliki semangat terus berkembang,bermoral, dan berjiwa wirausaha."
        misi={misi}
      />
      <div className='w-2/12 mr-auto ml-auto mt-20 mb-20'>
      <h1 className='font-bold text-2xl text-center mb-4'>Ketua Program Studi</h1>
        <div>
          <img src="/img/sample_profile_img.png" className='rounded-full object-cover h-[300px] w-[300px] mr-auto ml-auto object-top'/>
        </div>
        <h1 className='font-bold text-xl text-center mt-4'>Santi Sundari, S.Si., M.T.</h1>
      </div>
    </div>
  )
}

export default ProfilD4