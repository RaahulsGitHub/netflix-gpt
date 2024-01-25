import React from 'react'

function VideoTitle({title, overview}) {
  return (
    <div className='pt-80 pl-14 w-screen aspect-video z-20 border border-gray-800 text-white'>
        <div>
            <div className=''>
            <h1 className='text-3xl font-bold'>{title}</h1>
            </div>
            <div className='py-1'>
                <p className='text-lg w-96'>{overview}</p>
            </div>
        </div>
        <div className='py-3 my-2'>
            <button className='w-36 mr-1 p-2 border border-gray-400 rounded-lg'>▶️Play</button>
            <button className='w-36 ml-1 p-2 border border-gray-400 rounded-lg'>ℹ️ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle