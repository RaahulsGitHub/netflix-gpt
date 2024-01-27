import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header"
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovise";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

function Browse() {
 
useNowPlayingMovies()
useTrendingMovies()
useTopRatedMovies()
useUpcomingMovies();
  return (
    <div>
        
      <div className="w-full">
        <Header />
        <MainContainer/>
        <SecondaryContainer/>
      </div>

    </div>
  );
}

export default Browse;