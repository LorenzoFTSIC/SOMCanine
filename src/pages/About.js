import React from 'react';
import Header from "../components/Header/index.js"


import logo from '../logo.svg';



const About = () => {
    return (
        <div className="App">
            <Header />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                About page in development
                </p>
            </header>
            </div>
  );
};

export default About;