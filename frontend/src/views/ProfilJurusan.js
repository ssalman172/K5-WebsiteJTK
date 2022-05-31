import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import VisiMisi from '../components/VisiMisi'
import { BASE_URL } from '../datasource/consts'
import { fetchAll } from '../datasource/routes/profilJurusan'

const ProfilJurusan = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchAll().then((newData) => {
      setData(newData);
    })
  }, []);

  return (
    <div>
      <Banner img="/img/landing/banner.png" />
      <div className='font-lora w-7/12 ml-auto mr-auto mt-10 mb-12'>
        <h1 className='font-bold text-5xl text-center'>Sambutan Ketua Jurusan</h1>
        <div className='flex items-center mt-10'>
          <div className='w-[25%]'>
            <div>
              <img src={BASE_URL+data[0]?.FotoKetuaJurusan.url} className='rounded-full object-cover w-full mr-auto ml-auto object-center'/>
            </div>
            <h1 className='font-bold text-xl text-center mt-4'>Bambang Wisnuadhi, S.Si., M.T.</h1>
          </div>
          <div className='ml-12 text-justify w-[75%]'>
            <p>{data[0]?.SambutanKetuaJurusan}</p>
          </div>
        </div>
        <h1 className='font-bold text-5xl mt-14'>Sejarah JTK POLBAN</h1>
        <div className='flex items-center mt-10 text-justify'>
          {/* THIS IS SERIUSLY JUST A PLACEHOLDER, BAD DESIGN */}
          <p>{data[0]?.SejarahJTKPolban}</p>
        </div>
      </div>
      <VisiMisi 
        visi={data[0]?.Visi} 
        misi={data[0]?.Misi.includes(';') ? data[0]?.Misi.split(';') : data[0]?.Misi}
      />
    </div>
  )
}

export default ProfilJurusan