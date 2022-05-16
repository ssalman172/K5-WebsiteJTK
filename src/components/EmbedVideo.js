import React from 'react'

const EmbedVideo = (props) => {
  return (
    <iframe className='w-full h-full' allow="fullscreen;"
      src={props.url}>
    </iframe>
  )
}

export default EmbedVideo