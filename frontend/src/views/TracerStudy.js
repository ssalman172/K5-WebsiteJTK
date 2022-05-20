import React from 'react'
import { Link, useParams } from 'react-router-dom';

const years = [
  '2019',
  '2020',
  '2021',
  '2022'
]

const TracerStudy = () => {
  const selectionActiveClass = "color-navyblue underline font-bold";
  const selectionNotActiveClass =
    "color-navyblue font-normal opacity-50 hover:underline hover:opacity-100 hover:cursor-pointer";
  const sub_url = useParams().sub_url;

  return (
    <>
      <div className="w-7/12 mr-auto ml-auto font-lora">
        <div className="flex text-4xl w-full justify-around mt3">
          {
            years.map((elem) => {
              return (
                <Link to={`/tracer-study/${elem}`}>
                  <span
                    className={
                      sub_url === elem
                        ? selectionActiveClass
                        : selectionNotActiveClass
                    }
                  >
                    {elem}
                  </span>
                </Link>
              )
            })
          }
        </div>
      </div>
      <div className="flex relative font-lora m2">
        <div className="w-1/5"></div>
        <div className="flex w-4/5 min-h-[500px] bg-[#1A2C43] pt-9">
          <div className="w-1/5"></div>
          <div className="w-4/5 text-white text-2xl">
            <p >
              Tracer Study bertujuan untuk merekam jejak aktivitas alumni setelah 1 tahun lulus dari JTK POLBAN.
            </p>
            <p className='mt-6'>
              Pelacakan ini dimaksudkan untuk memantau perkembangan karir setiap alumni.
            </p>
            <div className='mt5'>
              <button>
                <img src="/img/tracer-study/file.png" alt="" />
                <p className='hover:underline mt-4'>
                  Download File
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute top-[5%] w-1/3 h-[444px] bg-[#D65D0E] p-6 pl-8 font-lora">
          <h2 className="text-4xl font-bold mb-[7%]">Hubungi Kami</h2>
          <div className='text-white text-2xl'>
            <p>
              Tracer Study JTK 2022 merupakan riset pelacakan alumni dengan responden alumni JTK lulusan 2022. Sebanyak 2569 alumni terlibat dalam pengisian kuesioner Tracer Study. Hasil analisis dari penelitian ini dituangkan dalam buku Laporan Hasil Tracer Study JTK 2022.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default TracerStudy