import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'



function MainContainer() {
    const movies = useSelector(store=>store.movies?.nowPlayingMovies)
    if(!movies) return;
    
    const mainMovie = movies[1]
    // console.log(mainMovie.id)
    const {original_title, overview, id} = mainMovie;
  

  return (

    <div className='relative flex items-center h-screen mb-12 overflow-hidden'>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id}/>
    </div>
  
  )
}

export default MainContainer