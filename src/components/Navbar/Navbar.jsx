import React from 'react'
import {Link } from 'react-router-dom'
import './assets/Navbar.css'
export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light by-5">
  <div className="container-fluid">
    <Link class="navbar-brand" to="">
      <i className='fas fa-shop px-2'></i>
      Store Door
    </Link>
    <div className="centering collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mx-auto mb-lg-0 px-auto  ">
        <li className="nav-item  ">
          <Link className="nav-Link text-dark active text-decoration-none mx-1" aria-current="page" to=''>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link text-dark text-decoration-none mx-1" to='About'>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link text-dark text-decoration-none mx-1" to='Services'>Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link text-dark text-decoration-none mx-1" to='Contacts'>Contacts</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link text-dark text-decoration-none mx-1" to='Categories'>Categories</Link>
        </li>

        {/* <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle ms-1 p-0" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </li> */}
      </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mx-auto mb-lg-0 ">
        <li className="nav-item  ">
          <Link className="nav-Link text-dark active text-decoration-none mx-1" aria-current="page" to='Login'>Login</Link>
        </li>
        <li className="nav-item  ">
          <Link className="nav-Link text-dark active text-decoration-none mx-1" aria-current="page" to='Register'>Register</Link>
        </li>
      </ul>
    </div>

  </div>
</nav>
    </>
  )
}