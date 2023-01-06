import React from 'react';

const Movie = ({movie, selectMovie}) => {
    let img_path = "https://image.tmdb.org/t/p/w500";

    return (
        <>
        <div className="movie">
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


export default Movie;

