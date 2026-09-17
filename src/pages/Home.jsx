import React from 'react'
import ntmlogo from '../assets/ntm_logo_v2.jpg'
import { Link } from 'react-router-dom'

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
    </>
  )
}

export default Home;