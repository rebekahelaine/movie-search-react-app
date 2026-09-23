import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';



const Movie = ({ movie }) => {
  return (
    <>
      <div className="result__card ">
        <Link to="/moviecard">
           <img className="result__poster" src={movie.Poster}></img>
        </Link>
        <div className="result__info">
          <Link to="/moviecard">
            <h4 className="result__title">{movie.Title}</h4>
          </Link>
          <p className="movie__type"><em>{movie.Type}</em></p>
          <p className="movie__year">{movie.Year}</p>
          <p className="imdb">IMDb ID: {movie.imdbID}</p>
        </div>
      </div>
    </>
  )
}

export default Movie;