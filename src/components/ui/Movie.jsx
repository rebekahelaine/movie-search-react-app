import React from 'react'

const Movie = ({ movie }) => {
  return (
    <>
      <div className="movie__selected">
        <figure className="movie__selected--figure">
          <img src={movie.Poster} alt="movie poster" 
          className="movie__selected--img" />
        </figure>
        <div className="movie__selected--description">
          <h2 className="movie__selected--title">{movie.Title}</h2>
          <div className="movie__selected--details">
            <p className="movie__selected--subheading">{movie.Year}</p>
            <p className="movie__selected--subheading">{movie.Rated}</p>
            <p className="movie__selected--subheading">{movie.Runtime}</p>
          </div>
          <div className="movie__summary">
            <h3 className="movie__summary--title">About This Movie</h3>
            <p className="movie__summary--para"><span className="coral">Directed By:</span> {movie.Director}</p>
            <p className="movie__summary--para"><span className="coral">Genre:</span> {movie.Genre}</p>
            <p className="movie__summary--para"><span className="coral">Plot:</span> {movie.Plot}</p>
            <h3 className="movie__summary--title">Awards</h3>
            <p className="movie__summary--para">{movie.Awards}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Movie