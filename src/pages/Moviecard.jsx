import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Movie from '../components/ui/Movie'

const Moviecard = ({ movie }) => {
  return (
    <>
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
        </div>
      </main>
     </div>
    </>
  )
}

export default Moviecard