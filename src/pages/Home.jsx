import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import Landing from '../components/Landing.jsx'
import Featured from '../components/Featured.jsx'


const Home = ({ searchInput, setSearchInput, navigate }) => {
  return (
    <>
      <Landing searchInput={searchInput} setSearchInput={setSearchInput} navigate={navigate} />
      <Featured />
    </>
  )
}

export default Home;