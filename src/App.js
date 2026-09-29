import './index.css';
import React, { useState, useEffect, useCallback } from 'react';
import Home from './pages/Home.jsx'
import Movies from './pages/Movies.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Moviecard from './pages/Moviecard.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [searchInput, setSearchInput] = useState("")
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [displayTerm, setDisplayTerm] = useState("")
  const [sortOrder, setSortOrder] = useState('DEFAULT')


  const fetchMovies = useCallback (async () => {
    const { data } = await axios.get(`https://www.omdbapi.com/?apikey=dcea2402&s=${encodeURIComponent(displayTerm)}`)
    setMovies(data)
    setLoading(false)
  }, [displayTerm])
  
  useEffect(() => {
    if (displayTerm) {
      fetchMovies()
    }
  },[displayTerm, fetchMovies])

  function onSearch() {
    fetchMovies(searchInput)
  }

  function resetSearch() {
    setSearchInput('')
    setDisplayTerm('')
    setMovies([])
    setLoading(true)
    setSortOrder('DEFAULT')
  }

  return (
    <Router>
      <div className="App">
        <Nav resetSearch={resetSearch} />
        <Routes>
          <Route path="/" element={<Home searchInput={searchInput} setSearchInput={setSearchInput} setDisplayTerm={setDisplayTerm} />}></Route>
          <Route path="/movies" element={<Movies searchInput={searchInput} setSearchInput={setSearchInput} displayTerm={displayTerm} setDisplayTerm={setDisplayTerm} fetchMovies={fetchMovies} onSearch={onSearch} movies={movies} loading={loading} setLoading={setLoading} sortOrder={sortOrder} setSortOrder={setSortOrder} />}></Route>
          <Route path="/movie/:imdbID" element={<Moviecard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
