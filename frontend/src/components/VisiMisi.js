import React from 'react'

const VisiMisi = (props) => {

  const misiText = () => {
    if (Array.isArray(props.misi)) {
      return (
        <ol className='mt-4 list-decimal pl-4'>
          {props.misi.map((elem) => {
            return (
            <li className='mt-2'>
              {elem}
            </li>
            )
          })}
        </ol>
      )
    } else {
      return (
        <p className='mt-4'>
          {props.misi}
        </p>
      )
    }
  }

  return (
    <div className="bg-[url('/public/img/visi_misi_bg.jpg')] bg-cover min-h-[618px] bg-center font-lora pt-5 pb-5">
      <div className='w-7/12 ml-auto mr-auto'>
        <h1 className='font-bold text-5xl'>Visi dan Misi</h1>
        <div className='mt-10'>
          <h1 className='font-bold text-4xl'>Visi</h1>
          <p className='mt-4'>
            {props.visi}
          </p>
        </div>
        <div className='mt-10'>
          <h1 className='font-bold text-4xl'>Misi</h1>
          {misiText()}
        </div>
      </div>
    </div>
  )
}

export default VisiMisi