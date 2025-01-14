import React from 'react'
import Logo from "../logo192.png";

export default function Navbar() {
  return (
    <div>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="container-fluid">
        <img
                className="img-thumbnail mx-auto d-block mb-2 my-2 me-2"
                src={Logo}
                width='40px'
                alt="logo"
            />
          <a class="navbar-brand" href="/rides">
            Ride Share
            </a>
          <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse collapse" id="navbarCollapse" >
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item mx-2">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link active" aria-current="page" href="/rides">Rides</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link active" aria-current="page" href="/addride">Add Ride</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link active" aria-current="page" href="/secrets">Secrets</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link active" aria-current="register" href="/register">Register</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>      
    </div>
  )
}
