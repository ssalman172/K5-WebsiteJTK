import React from 'react'

const Banner = (props) => {
  return (
    <div>
      <div className='relative'>
        <img style={{height: '560px'}} className={`w-full object-cover ${props.title && 'brightness-75'}`} src={props.img} alt="banner" />
        <h1 className='absolute text-7xl text-white left-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%] font-lora'>{props.title}</h1>
      </div>
    </div>
  )
}

export default Banner