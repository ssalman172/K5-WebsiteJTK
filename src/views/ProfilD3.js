import React from 'react'
import Banner from '../components/Banner'
import VisiMisi from '../components/VisiMisi'

const ProfilD3 = () => {
  return (
    <div>
      <Banner img='/img/landing/banner.png' />
      <div className="prodi-container flex justify-center items-center">
        <div className="prodi-card flex flex-col items-center justify-center mr5">
          <p className="text-white text-8xl mb-5">D3</p>
          <p className="text-white text-2xl mb-5">Teknik Informatika</p>
        </div>
      </div>
      <div className='w-7/12 mr-auto ml-auto h-[540px] mt-10 mb-10'>
        <iframe className='w-full h-full'
          src="https://www.youtube.com/embed/sauzoenoYns">
        </iframe>
      </div>
      <VisiMisi
        visi="Menjadi Program Studi unggulan dan terdepan dalam program pendidikan diploma III Kerekayasaan
        Perangkat Lunak Aplikasi yang diakui baik di tingkat nasional maupun internasional."
        misi="Menyelenggarakan program pendidikan diploma III Kerekayasaan Perangkat Lunak Aplikasi yang diakui
        baik di tingkat nasional maupun internasional."
      />
      <div className='w-2/12 mr-auto ml-auto mt-20 mb-20'>
      <h1 className='font-bold text-2xl text-center mb-4'>Ketua Program Studi</h1>
        <div>
          <img src="/img/kaprodi_d3.png" className='rounded-full object-cover h-[300px] w-[300px] mr-auto ml-auto object-top'/>
        </div>
        <h1 className='font-bold text-xl text-center mt-4'>Ghifari Munawar, S.Kom., M.T</h1>
      </div>
    </div>
  )
}

export default ProfilD3