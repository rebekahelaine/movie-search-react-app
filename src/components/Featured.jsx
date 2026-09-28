import React from 'react';
import { Link } from 'react-router-dom'
import pirates from '../assets/pirates.jpg'
import goonies from '../assets/goonies.jpeg'
import batman from '../assets/dark-knight.jpg'
import bourne from '../assets/bourne-ultimatum.jpg'
import frequency from '../assets/frequency.jpg'
import everAfter from '../assets/ever-after.jpeg'

const Featured = () => {
  return (
    <>
      <section id="movie__posters">
        <div class="container">
          <div class="row">
            <h2 class="section__title">Our All-Time Faves</h2>
            <ul class="movie__list">
              <li class="movie__wrapper">
                <Link to="/movie/tt0325980">
                  <img
                    src={pirates}
                    alt="Pirates of the Caribbean"
                    class="movie__poster"
                  />
                </Link>
              </li>
              <li class="movie__wrapper">
                <Link to="/movie/tt0089218">
                  <img
                    src={goonies}
                    alt="Goonies"
                    class="movie__poster"
                  />
                </Link>
              </li>
              <li class="movie__wrapper">
                <Link to="/movie/tt0468569">
                  <img
                    src={batman}
                    alt="The Dark Knight"
                    class="movie__poster"
                  />
                </Link>
              </li>
              <li class="movie__wrapper">
                <Link to="/movie/tt0440963">
                  <img
                    src={bourne}
                    alt="Bourne Ultimatum"
                    class="movie__poster"
                  />
                </Link>
              </li>
              <li class="movie__wrapper">
                <Link to="/movie/tt0186151">
                  <img
                    src={frequency}
                    alt="Frequency"
                    class="movie__poster"
                  />
                </Link>
              </li>
              <li class="movie__wrapper">
                <Link to="/movie/tt0120631">
                  <img
                    src={everAfter}
                    alt="Ever After"
                    class="movie__poster"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Featured;