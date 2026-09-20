import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Landing = () => {
  

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
            <form className="input__wrapper">
              <input type="text" placeholder="Search by title, year or IMDb ID"></input>
              <div className="search__wrapper">
                <button type="submit">
                  <FontAwesomeIcon icon="magnifying-glass" />
                </button>
              </div>
            </form>
            <button className="search__btn click">S E A R C H</button>
          </div>
        </header>
      </section>
    </>
  )
}

export default Landing;