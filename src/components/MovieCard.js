import React from 'react'

function MovieCard({poster_path}) {

  return (
    <div className='w-48 pr-4'>
        <img src={"https://image.tmdb.org/t/p/w500"+poster_path} alt="" />
    </div>
  )
}

export default MovieCard