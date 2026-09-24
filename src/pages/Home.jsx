import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import Landing from '../components/Landing.jsx'
import Featured from '../components/Featured.jsx'


const Home = ({ searchInput, setSearchInput, navigate, setDisplayTerm }) => {
  return (
    <>
      <Landing searchInput={searchInput} setSearchInput={setSearchInput} navigate={navigate} setDisplayTerm={setDisplayTerm} />
      <Featured />
    </>
  )
}

export default Home;