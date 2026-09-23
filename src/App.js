import './index.css';
import React, { useState, useEffect } from 'react';
import Home from './pages/Home.jsx'
import Movies from './pages/Movies.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [searchInput, setSearchInput] = useState("")
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchMovies() {
    const { data } = await axios.get(`https://www.omdbapi.com/?apikey=dcea2402&s=${encodeURIComponent(searchInput)}`)
    setMovies(data)
  }
  useEffect(() => {
    if (searchInput)
    fetchMovies()
  },[searchInput])

  function onSearch() {
    fetchMovies(searchInput)
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home searchInput={searchInput} setSearchInput={setSearchInput} />}></Route>
          <Route path="/movies" element={<Movies searchInput={searchInput} setSearchInput={setSearchInput} fetchMovies={fetchMovies} onSearch={onSearch} movies={movies} />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
