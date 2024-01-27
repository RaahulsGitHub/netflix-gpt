import React from 'react'

function VideoTitle({title, overview}) {
  return (
    <div className='pt-80 pl-16 w-screen aspect-video z-10 border border-gray-800 text-white bg-gradient-to-r from-black'>
        <div>
            <div className='w-3/12 py-2'>
            <h1 className='text-4xl font-bold'>{title}</h1>
            </div>
            <div className='py-2'>
                <p className='text-base w-96'>{overview}</p>
            </div>
        </div>
        <div className='py-2 my-3'>
            <button className='w-36 mr-1 p-3 text-lg rounded-lg bg-white text-black hover:bg-opacity-80'>▶️Play</button>
            <button className='w-36 ml-1 p-3 text-lg rounded-lg bg-gray-500 text-white bg-opacity-50'>ℹ️ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle