import React from 'react';
import { Link } from 'react-router-dom';

// import Auth from '../../utils/auth';

const styles = {
  header: {
    minHeight: '150px',
    backgroundColor: "#282c34",
    textAlign: 'center',
  },
//   h1: {
//     backgroundColor: "#282c34",
//     margin: "0",
//   }
};

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light navAdjust">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="w-100 navbar-nav d-flex justify-content-end">
            <a className="nav-item nav-link active" href="#">Home</a>
            <a className="nav-item nav-link" href="#">About Me</a>
            <a className="nav-item nav-link" href="#">Pricing</a>
            </div>
        </div>
        </nav>
  );
};


export default Header;