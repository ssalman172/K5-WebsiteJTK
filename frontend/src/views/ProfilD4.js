import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import EmbedVideo from '../components/EmbedVideo'
import VisiMisi from '../components/VisiMisi'
import { BASE_URL } from '../datasource/consts'
import { fetchAll } from '../datasource/routes/profilD4'

const ProfilD4 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchAll().then((newData) => {
      setData(newData);
    })
  }, []);

  return (
    <div>
      <Banner img='/img/landing/banner.png' />
      <div className="prodi-container flex justify-center items-center">
        <div className="prodi-card flex flex-col items-center justify-center">
          <p className="text-white text-8xl mb-5">D4</p>
          <p className="text-white text-2xl mb-5">Teknik Informatika</p>
        </div>
      </div>
      <div className='w-7/12 mr-auto ml-auto h-[540px] mt-10 mb-10'>
        <EmbedVideo url='https://www.youtube.com/embed/sauzoenoYns'/>
      </div>
      <VisiMisi
        visi={data[0]?.Visi}
        misi={data[0]?.Misi.includes(';') ? data[0]?.Misi.split(';') : data[0]?.Misi}
      />
      <div className='w-2/12 mr-auto ml-auto mt-20 mb-20'>
      <h1 className='font-bold text-2xl text-center mb-4'>Ketua Program Studi</h1>
        <div>
          <img src={BASE_URL+data[0]?.FotoKetuaProdi.url} className='rounded-full object-cover h-[300px] w-[300px] mr-auto ml-auto object-top'/>
        </div>
        <h1 className='font-bold text-xl text-center mt-4'>{data[0]?.NamaKetuaProdi}</h1>
      </div>
    </div>
  )
}

export default ProfilD4