import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Movie from '../components/ui/Movie.jsx'

const Movies = () => {
  return (
    <>
      <div className="header__content movie__search--container">
        <h1 className="title">Name The Movie</h1>
        <h2 className="title subtitle">Browse Our <span className="coral">Movie Library</span></h2>
        <form className="input__wrapper">
          <input type="text" placeholder="Search by title, year or IMDb ID"></input>
          <div className="search__wrapper">
            <button type="submit">
              <FontAwesomeIcon icon="magnifying-glass" />
            </button>
          </div>
        </form>
        <select className="filterbar" defaultValue="DEFAULT">
          <option value="DEFAULT" disabled>Sort</option>
          <option value="A_TO_Z">Titles A-Z</option>
          <option value="Z_TO_A">Titles Z-A</option>
          <option value="NEW_TO_OLD">Newest to Oldest</option>
          <option value="OLD_TO_NEW">Oldest to Newest</option>
        </select>
      </div>
      <div id="search-results" className="results__list">

      </div>
    </>
  )
}

export default Movies