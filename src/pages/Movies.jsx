import React, { useEffect, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Movie from '../components/ui/Movie.jsx'

const Movies = ({ searchInput, setSearchInput, fetchMovies, onSearch, movies, loading, setLoading, displayTerm, setDisplayTerm }) => {
  const [sortOrder, setSortOrder] = useState('DEFAULT')

  const sortedResults = useMemo(() => {
    if (!movies || !movies.Search) return null
  })

  return (
    <>
      <div className="header__content movie__search--container">
        <h1 className="title">Name The Movie</h1>
        <h2 className="title subtitle">Browse Our <span className="coral">Movie Library</span></h2>
        <form className="input__wrapper" onSubmit={(event) => {
          event.preventDefault();
          setDisplayTerm(searchInput);
          setSearchInput('')
          onSearch();
        }}>
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
        <select className="filterbar" defaultValue="DEFAULT" onChange={(event) => filterMovies(event.target.value)}>
          <option value="DEFAULT" disabled>Sort</option>
          <option value="A_TO_Z">Titles A-Z</option>
          <option value="Z_TO_A">Titles Z-A</option>
          <option value="NEW_TO_OLD">Newest to Oldest</option>
          <option value="OLD_TO_NEW">Oldest to Newest</option>
        </select>
      </div>
      {displayTerm && (
        <h2 className="results__header">Results for <span className="coral">"{displayTerm}"</span></h2>
      )}
      {displayTerm && loading ? (
        <div className="result__card">
          <div className="result__poster result__poster--skeleton"></div>
          <div className="result__info">
            <h4 className="result__title result__title--skeleton"></h4>
            <p className="movie__type movie__info--skeleton"></p>
            <p className="movie__year movie__info--skeleton"></p>
            <p className="imdb movie__info--skeleton"></p>
          </div>
        </div>
        ) : displayTerm && (
        <div id="search-results" className="results__list">
          {movies && movies.Search && movies.Search.slice(0, 6).map((movie) => 
            <Movie key={movie.imdbID} movie={movie}/>
          )}
        </div>
      )}
      
    </>
  )
}

export default Movies