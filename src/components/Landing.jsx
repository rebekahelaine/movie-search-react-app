import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Landing = ({ searchInput, setSearchInput, onSearch }) => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/movies');
  }

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
            <form className="input__wrapper" onSubmit={handleSubmit}>
              <input 
                type="text" 
                placeholder="Search by title, year or IMDb ID"
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
                onKeyPress={(event) => event.key === 'Enter' && onSearch()}
              />
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