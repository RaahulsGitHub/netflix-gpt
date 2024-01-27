import React from "react";
import useVideoBg from "../hooks/useVideoBg";
import { useSelector } from "react-redux";


function VideoBackground({ movieId}) {
  useVideoBg(movieId);
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  return (
      <div className="absolute w-screen  aspect-video">

      <iframe
        className="w-screen aspect-video h-12/12"
        src={
          "https://www.youtube.com/embed/"+trailerVideo?.key+
          "?si=ouUgQwSQcE_nwi73&controls=0&autoplay=1&mute=1"
        }
      ></iframe>
    </div>
  );
}

export default VideoBackground;
