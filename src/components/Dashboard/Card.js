import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Youtube from "react-youtube";
// import Movie from "../../components/Dashboard/movie";

const Card = (movie) => {
  
  const API_key = "654f6c47d2ac801fcad4f0f304eea430";
  const base_url = "https://api.themoviedb.org/3";
  let img_path = "https://image.tmdb.org/t/p/w500";
  const [playing, setPlaying] = useState(false);
  const [trailer, setTrailer] = useState(null);
 const [selectedMovie, setSelectedMovie] = useState([]);
  const [movies, setMovies] = useState([]);
  const [NewMovie, setNewMovie] = useState({title: "Loading Movies"});



  useEffect(() => {
    fetchMovies()
}, [])

const fetchMovies = async (event) => {
    if (event) {
        event.preventDefault()
    }

}

const fetchMovie = async (id) => {
    const {data} = await axios.get(`${base_url}movie/${id}`, {
        params: {
            api_key: API_key,
            append_to_response: "videos"
        }
    })

    if (data.videos && data.videos.results) {
        const trailer = data.videos.results.find(vid => vid.name === "Official Trailer")
        setTrailer(trailer ? trailer : data.videos.results[0])
    }

    console.log(data.results[0])
    setMovies(data.results)
    setNewMovie(data.results[0])

    if (data.results.length) {
        await fetchMovie(data.results[0].id)
    }
    setNewMovie(data)
}


const selectMovie = (NewMovie) => {
    fetchMovie(movie.id)
    setPlaying(false)
    setNewMovie(NewMovie)
    window.scrollTo(0, 0)
}



  return (
    <>
      
        {playing ? (
          <>
            <Youtube
              // videoId={trailer.key}
              className={"youtube amru"}
              containerClassName={"youtube-container amru"}
            />
            <button
              onClick={() => setPlaying(false)}
              className={"button close-video"}
            >
              Close
            </button>
          </>
        ) : (
          "" 
         )}
        <div className="movie">
        <button
          className={"button play-video"}
          onClick={() => setPlaying(true)}
          type="button"
        >
          Trailer
        </button>
        <img src={img_path + movie.info.poster_path} className="poster"></img>
         <div className="movie-details" onClick={() => selectMovie(movie)}>
         <div className="box">
           <h4 className="title">{movie.info.title}</h4>
           <p className="rating">{movie.info.vote_average}</p>
         </div>
         <div className="overview">
           <h3>overview</h3>
           {movie.info.overview}
         </div>
       </div>
       </div>
       
      
    </>
  );
};
export default Card;
