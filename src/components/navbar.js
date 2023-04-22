import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <section data-bs-version="5.1" className="menu cid-s48OLK6784" id="menu1-h">
      <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
        <div className="container-fluid">
          <div className="navbar-brand">
            <span className="navbar-logo">
              <a href="index.html">
                <img src="assets/images/mbr-84x119.png" alt="Mobirise Website Builder" style={{ height: "3.8rem" }} />
              </a>
            </span>
            <span className="navbar-caption-wrap">
              <a className="navbar-caption text-primary display-7" href="index.html">
                balconythoughts
              </a>
            </span>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-bs-toggle="collapse"
            data-target="#navbarSupportedContent"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          {/* ... */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
              <li className="nav-item dropdown">
                <a
                  className="nav-link link dropdown-toggle text-primary display-4"
                  href="#"
                  data-toggle="dropdown-submenu"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  Personal
                </a>
                <div className="dropdown-menu">
                <Link className="dropdown-item" to="/academics">Academics</Link>

                  <a className="dropdown-item" href="/career.html">Career</a>
                  <a className="dropdown-item" href="/exercise.html">Exercise</a>
                  <a className="dropdown-item" href="/finance.html">Finance</a>
                <Link className="dropdown-item" to="/journal">Journal</Link>
                  <a className="dropdown-item" href="/recipes.html">Recipes</a>
                  <a className="dropdown-item" href="/mental health.html">Mental Health</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link link dropdown-toggle text-primary display-4"
                  href="#"
                  data-toggle="dropdown-submenu"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  Interests
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/philosophy.html">Philosophy</a>
                  <a className="dropdown-item" href="/houseplants.html">Houseplants</a>
                  <a className="dropdown-item" href="https://www.chess.com">Chess</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link link dropdown-toggle text-primary display-4"
                  href="#"
                  data-toggle="dropdown-submenu"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  Tech
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="https://chat.openai.com/">GPT</a>
                </div>
              </li>
            </ul>
            {/* ... */}
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
