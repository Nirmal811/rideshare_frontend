import React from 'react';
import Logo from "../logo192.png";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <img
            className="img-thumbnail mx-auto d-block mb-2 my-2 me-2"
            src={Logo}
            width="40px"
            alt="logo"
          />
          <a className="navbar-brand" href="/rides">
            Ride Share
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="/rides">
                  Rides
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="/addride">
                  Add Ride
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="/secrets">
                  Secrets
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active" href="/register">
                  Register
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
