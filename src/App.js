import './index.css';
import React from 'react';
import Home from './pages/Home.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
