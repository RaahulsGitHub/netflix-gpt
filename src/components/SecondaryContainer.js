import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'


function SecondaryContainer() {

  const nowPlayingMovies = useSelector(store=>store.movies?.nowPlayingMovies)
  const popularMovies = useSelector(store=>store.movies?.popularMovies)
  const topRatedMovies = useSelector(store=>store.movies?.topRatedMovies)
  const upcomingMovies = useSelector(store=>store.movies?.upcomingMovies)
  // console.log("movies")
// console.log(moviesData)
return (
    
    <div className='bg-black'>
      <MoviesList title="Now Playing Movies" moviesData = {nowPlayingMovies} />
      <MoviesList title="Popular Movies" moviesData = {popularMovies} />
      <MoviesList title="Top Rated Movies" moviesData = {topRatedMovies} />
      <MoviesList title="Upcoming Movies" moviesData = {upcomingMovies} />
    </div>
    
  )
}

export default SecondaryContainer