import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";
import GPTSearchPage from "./gptSearchPage";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovise";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";

function Browse() {
  useNowPlayingMovies();
  useTrendingMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const showGptSearchView = useSelector((store)=>store.gpt.showGptSearch)
  return (
    <div>
      <div className="w-full">
        <Header />
        {showGptSearchView ?(<GPTSearchPage />):(
        <>
        <MainContainer />
        <SecondaryContainer />
        </>)}
      </div>
    </div>
  );
}

export default Browse;
