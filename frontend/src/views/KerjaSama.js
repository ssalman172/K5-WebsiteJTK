import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Banner from '../components/Banner'
import ReactPaginate from 'react-paginate';
import Pagination from '../components/Pagination';

const images = [
  '/img/kerja-sama/MIT_logo.png',
  '/img/kerja-sama/gojek_logo.png',
  '/img/kerja-sama/google_logo.png',
  '/img/kerja-sama/google_logo.png',
  '/img/kerja-sama/gojek_logo.png',
  '/img/kerja-sama/MIT_logo.png',
  '/img/kerja-sama/gojek_logo.png',
  '/img/kerja-sama/google_logo.png',
  '/img/kerja-sama/MIT_logo.png',
  '/img/kerja-sama/gojek_logo.png',
  '/img/kerja-sama/google_logo.png',
  '/img/kerja-sama/MIT_logo.png',
  '/img/kerja-sama/gojek_logo.png',
  '/img/kerja-sama/google_logo.png',
  '/img/kerja-sama/MIT_logo.png',
  '/img/kerja-sama/gojek_logo.png',
  '/img/kerja-sama/google_logo.png',

];

const DaftarPrestasi = () => {
  const [currentItems, setCurrentItems] = useState([]);
  const selectionActiveClass = 'color-navyblue underline font-bold hover:cursor-pointer';
  const selectionNotActiveClass = 'color-navyblue font-normal opacity-50 hover:underline hover:opacity-100 hover:cursor-pointer';
  const sub_url = useParams().sub_url;

  return (
    <div>
      <Banner title='Info Kerja Sama' img='/img/kerja-sama/banner.png' />
      <div className='w-7/12 mr-auto ml-auto font-lora'>
        <div className='flex flex-col items-center mb3 mt3'>
          <div className="flex text-4xl w-full justify-around">
            <Link to='/kerja-sama/internasional'>
              <span
                className={sub_url === 'internasional' ? selectionActiveClass : selectionNotActiveClass}
              >
                Internasional
              </span>
            </Link>
            <Link to='/kerja-sama/nasional'>
              <span
                className={sub_url === 'nasional' ? selectionActiveClass : selectionNotActiveClass}
              >
                Nasional
              </span>
            </Link>
            <Link to='/kerja-sama/pengajuan'>
              <span
                className={sub_url === 'pengajuan' ? selectionActiveClass : selectionNotActiveClass}
              >
                Ajukan Kerjasama
              </span>
            </Link>
          </div>
          {(sub_url === 'internasional' || sub_url === 'nasional') &&
            <div className='grid grid-cols-3 gap-4 w-full mt-5'>
              {currentItems.map((item) => {
                return (
                  <img src={item} width={320} height={320} className='self-center justify-self-center' />
                )
              })}
            </div>}
        </div>
        {sub_url !== 'pengajuan' &&
        <div className='mb-5'>
          <Pagination
            itemsPerPage={9}
            wholeDataGetter={images}
            currentDataSetter={setCurrentItems}
          />
        </div>}
      </div>
      {(sub_url === 'pengajuan') &&
        <div className="flex relative font-lora m2">
          <div className="w-1/5"></div>
          <div className="flex w-4/5 min-h-[500px] bg-[#1A2C43] pt-9">
            <div className="w-1/5"></div>
            <div className="w-4/5">
              <h2 className="text-white text-4xl mb-8 font-bold">Formulir Pengajuan Kerjasama</h2>
              <form className="pr-[3%] w-full text-white text-base font-semibold">
                <input
                  type="text"
                  placeholder="Nama Mitra"
                  className="bg-[#1A2C43] pb-3 outline-none border-b border-[#FFFFFF] w-full mb-7"
                />
                <div className="flex mb-7">
                  <input
                    type="text"
                    placeholder="Nama PIC"
                    className="bg-[#1A2C43] pb-3 outline-none border-b border-[#FFFFFF] w-1/2 mr2"
                  />
                  <input
                    type="tel"
                    placeholder="Nomor Telepon PIC"
                    className="bg-[#1A2C43] pb-3 outline-none border-b border-[#FFFFFF] w-1/2"
                    pattern='\+?([ -]?\d+)+|\(\d+\)([ -]\d+)'
                  />
                </div>
                <div className="flex mb-7">
                  <input
                    type="email"
                    placeholder="Email Mitra"
                    className="bg-[#1A2C43] pb-3 outline-none border-b border-[#FFFFFF] w-1/2 mr2"
                  />
                  <input
                    type="email"
                    placeholder="Email PIC"
                    className="bg-[#1A2C43] pb-3 outline-none border-b border-[#FFFFFF] w-1/2"
                  />
                </div>
                <p className='bg-[#1A2C43] pb-3 text-[#9ba3af] font-normal'>
                  Drop file atau Jelajahi (PDF)
                </p>
                <input
                  type="file"
                  placeholder="Drop file atau Jelajahi (PDF)"
                  className="bg-[#1A2C43] pb-3 outline-none border-b border-[#FFFFFF] w-full h-[150px] resize-none mb-6 hover:cursor-pointer"
                />
                <input
                  type="submit"
                  value="Send"
                  className="bg-[#D65D0E] px-10 py-2 hover:cursor-pointer hover:bg-[#fc7f2c] mb-5"
                />
              </form>
            </div>
          </div>
          <div className="absolute top-[5%] w-1/3 h-[444px] bg-[#D65D0E] p-6 pl-8">
            <h2 className="text-4xl font-bold mb-[7%]">Hubungi Kami</h2>
            <div className="flex text-base font-semibold text-white items-center mb5">
              <img
                src="/img/icons/info-kontak/location.png"
                className="w-[64px] h-[64px] mr5 -ml-[2%]"
              />
              <div>
                <p className="mb2">
                  Jl. Gegerkalong Hilir, Ciwaruga, Kec. Parongpong, Kabupaten
                  Bandung Barat, Jawa Barat
                </p>
                <p>Kode Pos 40559 | Kotak Pos Bandung 1234</p>
              </div>
            </div>
            <div className="flex text-base font-semibold text-white items-center mb5">
              <img
                src="/img/icons/info-kontak/call.png"
                className="w-[64px] h-[64px] mr5 -ml-[2%]"
              />
              <div>
                <p className="mb2">022 – 2013789 | 022 – 2015271</p>
                <p className="mb2">022 – 2013898 (Hunting)</p>
                <p>022 – 2013889 (Fax)</p>
              </div>
            </div>
            <div className="flex text-base font-semibold text-white items-center mb5">
              <img
                src="/img/icons/info-kontak/email.png"
                className="w-[64px] h-[64px] mr5 -ml-[2%]"
              />
              <p>humas@jtk.polban.ac.id</p>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default DaftarPrestasi