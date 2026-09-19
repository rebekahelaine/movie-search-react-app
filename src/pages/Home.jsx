import React from 'react'
import ntmlogo from '../assets/ntm_logo_v2.jpg'
import { Link } from 'react-router-dom'
import pirates from '../assets/pirates.jpg'
import goonies from '../assets/goonies.jpeg'
import batman from '../assets/dark-knight.jpg'
import bourne from '../assets/bourne-ultimatum.jpg'
import frequency from '../assets/frequency.jpg'
import everAfter from '../assets/ever-after.jpeg'

const Home = () => {
  return (
    <>
      <section id="landing-page">
        <header class="header">
          <div class="header__content">
            <h1 class="title">Name The Movie</h1>
            <h2 class="title subtitle">
              Find Your Favorites, <span class="coral">Learn New Ones</span>
            </h2>
            <p class="header__para">
              Discover and explore your favorite movies with our easy-to-use
              platform.
            </p>
            <Link to="/movies">
              <button className="search__btn click">S E A R C H</button>
            </Link>
          </div>
        </header>
      </section>
      <section id="movie__posters">
        <div class="container">
          <div class="row">
            <h2 class="section__title">Our All-Time Faves</h2>
            <ul class="movie__list">
              <li class="movie__wrapper">
                <img
                  src={pirates}
                  alt="Pirates of the Caribbean"
                  class="movie__poster"
                />
              </li>
              <li class="movie__wrapper">
                <img
                  src={goonies}
                  alt="Goonies"
                  class="movie__poster"
                />
              </li>
              <li class="movie__wrapper">
                <img
                  src={batman}
                  alt="The Dark Knight"
                  class="movie__poster"
                />
              </li>
              <li class="movie__wrapper">
                <img
                  src={bourne}
                  alt="Bourne Ultimatum"
                  class="movie__poster"
                />
              </li>
              <li class="movie__wrapper">
                <img
                  src={frequency}
                  alt="Frequency"
                  class="movie__poster"
                />
              </li>
              <li class="movie__wrapper">
                <img
                  src={everAfter}
                  alt="Ever After"
                  class="movie__poster"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;