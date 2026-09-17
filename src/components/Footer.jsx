import React from 'react'
import ntmLogo from '../assets/ntm_logo_v2.jpg'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="row footer__row">
          <Link to="/">
            <figure>
              <img src={ntmLogo} className="ntm-logo" alt=""/>
            </figure>
          </Link>
          <div className="footer__links">
            <Link to="/" className="footer__link link__hover-effect">Home</Link>
            <Link to="/movies" className="footer__link link__hover-effect">Search</Link>
            <span className="footer__link no-cursor">About</span>
          </div>
          <p className="footer__copyright">Copyright &copy; Name The Movie 2026</p>
        </div>
      </div>
    </>
  )
}

export default Footer