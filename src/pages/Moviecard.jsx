import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Movie from '../components/ui/Movie'
import axios from 'axios';

const Moviecard = () => {
  const { imdbID } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchMovieDetails() {
      const { data } = await axios.get(`https://www.omdbapi.com/?apikey=dcea2402&i=${imdbID}`)
      setMovie(data)
      setLoading(false)
    }
    fetchMovieDetails()
  }, [imdbID])
  
  return (
    <>
    {loading ? (
      <div className="result__card">
          <div className="result__poster result__poster--skeleton"></div>
          <div className="result__info">
            <h4 className="result__title result__title--skeleton"> </h4>
            <p className="movie__type movie__info--skeleton"></p>
            <p className="movie__year movie__info--skeleton"></p>
            <p className="imdb movie__info--skeleton"></p>
          </div>
        </div>
      ) : (
      <div id="movie__body">
        <main id="movie__main">
          <div className="movie__container">
            <div className="row">
              <div className="movie__selected--top">
                <Link to="/movies" className="movie__link">
                  <FontAwesomeIcon icon="arrow-left" />
                </Link>
              </div>
              <Movie movie={movie} />
            </div>
          </div>
        </main>
      </div>
    )}
    </>
  )
}

export default Moviecard