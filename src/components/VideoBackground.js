import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

function VideoBackground({ movieId }) {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  console.log(trailerVideo?.key);

  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/+" + movieId + "+/videos",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type == "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);

  <iframe
  src="https://www.youtube.com/embed/fFGx09aGBsk?si=ouUgQwSQcE_nwi73"
  title="YouTube video player"
  allowfullscreen
  ></iframe>;
  
  return (
      <div className="absolute w-screen  aspect-video">

      <iframe
        className="w-screen aspect-video h-[100%]"
        src={
          "https://www.youtube.com/embed/"+trailerVideo?.key+
          "?si=ouUgQwSQcE_nwi73&controls=0&autoplay=1&mute=1"
        }
      ></iframe>
    </div>
  );
}

export default VideoBackground;
