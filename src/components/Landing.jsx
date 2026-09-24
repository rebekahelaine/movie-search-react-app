import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Landing = ({ searchInput, setSearchInput, onSearch, setDisplayTerm }) => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisplayTerm(searchInput)
    navigate('/movies');
  }

  return (
    <>
      <section id="landing-page">
        <header className="header">
          <div className="header__content">
            <h1 className="title">Name The Movie</h1>
            <h2 className="title subtitle">
              Find Your Favorites, <span className="coral">Learn New Ones</span>
            </h2>
            <p className="header__para">
              Discover and explore your favorite movies with our easy-to-use
              platform.
            </p>
            <form className="input__wrapper" onSubmit={handleSubmit}>
              <input 
                type="text" 
                placeholder="Search by title, year or IMDb ID"
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
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