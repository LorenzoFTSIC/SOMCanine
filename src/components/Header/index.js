import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light navAdjust">
        <Link className="navbar-brand" to="/">State of Mind Canine</Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="w-100 navbar-nav d-flex justify-content-end">
              <Link className="nav-item nav-link active hoverBlue" to="/">Home</Link>
              <Link className="nav-item nav-link hoverBlue" to="/About">About Me</Link>
              <Link className="nav-item nav-link hoverBlue" to="/Services">Services</Link>
              <Link className="nav-item nav-link hoverBlue" to="/Contact">Contact</Link>
            </div>
        </div>

        <Dropdown className="navbar-toggler p-0">
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="border-secondary text-dark">
          <span className="navbar-toggler-icon d-flex justify-content-center"></span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Link to="/" className="d-flex justify-content-center nav-item nav-link py-1 hoverBlue">Home</Link>
            <Link to="/About" className="d-flex justify-content-center nav-item nav-link py-1 hoverBlue">About</Link>
            <Link to="/Services" className="d-flex justify-content-center nav-item nav-link py-1 hoverBlue">Services</Link>
            <Link to="/Contact" className="d-flex justify-content-center nav-item nav-link py-1 hoverBlue">Contact</Link>
            {/* <Dropdown.Item href="/" className="d-flex justify-content-center">
              <Link to="/" className="nav-item nav-link ">Home</Link></Dropdown.Item>
            <Dropdown.Item href="/About" className="d-flex justify-content-center">
              <Link to="/About" className="nav-item nav-link">About Me</Link></Dropdown.Item>
            <Dropdown.Item href="/Packages" className="d-flex justify-content-center">
              <Link to="/Packages" className="nav-item nav-link">Packages</Link></Dropdown.Item> */}
          </Dropdown.Menu>
        </Dropdown>

        {/* <Dropdown className="navbar-toggler p-0">
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="border-secondary">
            <p className="text-dark">
              Test
            </p>
            <span className="navbar-toggler-icon d-flex justify-content-center"></span>
          </Dropdown.Toggle>
        </Dropdown> */}

        
      </nav>

  );
};


export default Header;