import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ntmLogo from '../assets/ntm_logo_v2.jpg';
import { Link } from 'react-router-dom';

const Nav = ({ numberOfItems }) => {
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
      <nav>
        <div className="nav__container">
          <Link to="/">
            <img src={ntmLogo} alt="" className="ntm-logo" />
          </Link>
          <ul className="nav__links">
            <li className="nav__list">
              <Link to="/" className="nav__link">
                Home
              </Link>
            </li>
            <li className="nav__list">
              <Link to="/" className="nav__link">
                Search
              </Link>
            </li>
            <button className="btn__menu" onClick={openMenu}>
              <FontAwesomeIcon icon="bars" />
            </button>
          </ul>
          <div className="menu__backdrop">
            <button className="btn__menu btn__menu--close" onClick={closeMenu}>
              <FontAwesomeIcon icon="times" />
            </button>
            <ul className="menu__links">
              <li className="menu__list">
                <Link to="/" className="menu__link">
                  Home
                </Link>
              </li>
              <li className="menu__list">
                <Link to="/" className="menu__link">
                  Movies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Nav;