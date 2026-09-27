import React from 'react'

const Movie = ({ movie }) => {
  return (
    <>
      <div className="movie__selected">
        <figure className="movie__selected--figure">
          <img src={movie.url} alt="movie poster" 
          className="movie__selected--img" />
        </figure>
        <div className="movie__selected--description">
          <h2 className="movie__selected--title">{movie.Title}</h2>
          <p className="movie__selected--subheading">{movie.Year}</p>
          <p className="movie__selected--subheading">{movie.Rated}</p>
          <p className="movie__selected--subheading">{movie.Runtime}</p>
          <div className="movie__summary">
            <h3 className="movie__summary--title">About This Movie</h3>
            <p className="movie__summary--para">Directed By: {movie.Director}</p>
            <p className="movie__summary--para">Plot: {movie.Plot}</p>
            <p className="movie__summary--para">Directed By: {movie.Director}</p>
            <h3 className="movie__summary--title">Awards</h3>
            <p className="movie__summary--para">{movie.Awards}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Movie