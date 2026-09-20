import './index.css';
import React, { useState } from 'react';
import Home from './pages/Home.jsx'
import Movies from './pages/Movies.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([])

  async function fetchMovies() {
    const { data } = await axios.get(`https://www.omdbapi.com/?apikey=dcea2402&s=`)
  }
  fetchMovies()

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
