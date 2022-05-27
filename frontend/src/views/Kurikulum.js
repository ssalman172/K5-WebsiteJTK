import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Banner from '../components/Banner';

const categories = [
  '2016',
  '2019',
  'merdeka-belajar'
]

const Kurikulum = () => {
  const selectionActiveClass = "color-navyblue underline font-bold";
  const selectionNotActiveClass =
    "color-navyblue font-normal opacity-50 hover:underline hover:opacity-100 hover:cursor-pointer";
  const sub_url = useParams().category;

  return (
    <div>
      <Banner title="Artikel" img="/img/artikel-news/artikel-banner.png" />
      <div className="w-7/12 mr-auto ml-auto font-lora">
        <div className="flex text-4xl w-full justify-around mt3">
          {
            categories.map((elem) => {
              return (
                <Link to={`/kurikulum/${elem}`}>
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
        <div className='mt-5 h-[1000px] w-full border'>
          <h1>Belum ada :(</h1>
        </div>
        <div className='mt-5 mb-5 ml-auto mr-auto w-max'>
          <button className='text-xl font-bold border-2 border-[#142E46] hover:cursor-pointer bg-[#1A2C43] text-white p-2'>Unduh</button>
        </div>
      </div>
    </div>
  )
}

export default Kurikulum