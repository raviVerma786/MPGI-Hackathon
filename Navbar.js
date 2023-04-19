import React from 'react';
// import LogIn from './LogIn';

export default function Navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark py-3 px-2 fixed-top opacity-75" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Beat Hunger</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
      </ul>
      <button class="btn btn-outline-primary" type="logIn">Log-In</button>
    </div>
  </div>
</nav>
    </>
  )
}
