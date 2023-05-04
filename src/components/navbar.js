import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <section data-bs-version="5.1" className="menu cid-s48OLK6784" id="menu1-h">
      <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
        <div className="container-fluid">
          <div className="navbar-brand">
            <span className="navbar-logo">
              <a href="/">
                <img src="assets/images/mbr-121x161.png" alt="Mobirise Website Builder" style={{ height: "3.8rem" }} />
              </a>
            </span>
            <span className="navbar-caption-wrap">
              <a className="navbar-caption text-primary display-7" href="/">
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

                  <Link className="dropdown-item" to="/career">Career</Link>
                  <a className="dropdown-item" href="/finance.html">Finance</a>
                  <Link className="dropdown-item" to="/gallery">Gallery</Link>
                  <Link className="dropdown-item" to="/journal">Journal</Link>
                  <Link className="dropdown-item" to="/recipes">Health</Link>
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
                  <a className="dropdown-item" href="https://www.goodreads.com" target="_blank">Books</a>
                  <a className="dropdown-item" href="https://www.chess.com" target="_blank">Chess</a>
                  <Link className="dropdown-item" to="/history">History</Link>
                  <Link className="dropdown-item" to="/houseplants">Houseplants</Link>
                  <Link className="dropdown-item" to="/mac">Mac Miller</Link>
                  <Link className="dropdown-item" to="/mathematics">Mathematics</Link>
                  <Link className="dropdown-item" to="/philosophy">Philosophy</Link>




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
                  <a className="dropdown-item" href="https://github.com/johnhollingsworth27" target="_blank">GitHub</a>
                  <a className="dropdown-item" href="https://chat.openai.com/" target="_blank">GPT</a>
                  <a className="dropdown-item" href="obsidian://" target="_blank">Obsidian</a>

                </div>
              </li>
            </ul>
            <div className="icons-menu">
              

            </div>





          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
