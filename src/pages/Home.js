import React from 'react';
import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Jumbotron from 'react-bootstrap/Jumbotron';


const Home = () => {
    return (
        <div className="App">
            <header className="text-center bg-image" id="jumbotron">
                <div className="mask w-100 h-100" id="mask">
                    <div className="d-flex justify-content-start align-items-center h-100">
                        <div className="text-white w-75 container">
                            <h1 className="mb-3 text-start ms-4 px-4 w-75 row">Transform the dog you have into the dog you want!</h1>
                            <h4 className="mb-3 text-start ms-4 px-4 w-75 row">Your dream dog is one call away!</h4>
                            {/* <a className="btn btn-outline-light btn-lg" href="#!" role="button">Call to action</a> */}
                            <div className="d-flex justify-content-start ms-4 px-4 w-75">
                                <Link to="/Contact" className="btn btn-outline-light btn-lg row mask" id="mask2">Free Consultation!</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="endorsementBox d-flex justify-content-center">
                <div className="endorsement shadow-lg text-body">
                    <p>"SSBR is very blessed to have an amazing trainer who truly cares about each dog as an individual.
                    Without Alessandro, several of our dogs wouldn’t have had a chance at their forever home. Highly 
                    recommend!"</p>
                    <p>~Haley Kazee (Southern States Bully Rescue)</p>
                </div>
            </section>
        </div>
  );
};

export default Home;