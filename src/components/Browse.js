import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header"
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";

function Browse() {
 
useNowPlayingMovies()

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