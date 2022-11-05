import React from 'react';
import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Jumbotron from 'react-bootstrap/Jumbotron';
import pitty from "../assets/images/pitty.jpg"
import whitedog from "../assets/images/whitedog.jpg"
import beagle from "../assets/images/beagle.jpg"
import hank from "../assets/images/hank.jpg"

const Home = () => {
    return (
        <div className="App">
            <header className="text-center bg-image" id="jumbotron">
                <div className="mask w-100 h-100" id="mask">
                    <div className="d-flex justify-content-start align-items-center h-100">
                        <div className="text-white w-75 container">
                            <h1 className="mb-3 text-start ms-4 px-4 w-75 row">Transform the dog you have into the dog you want!</h1>
                            <h4 className="mb-3 text-start ms-4 px-4 w-75 row"><span className="grayscale">✔</span>Perfect Obedience</h4>
                            <h4 className="mb-3 text-start ms-4 px-4 w-75 row"><span className="grayscale">✔</span>No Jumping, Barking, Pulling</h4>
                            <h4 className="mb-3 text-start ms-4 px-4 w-75 row"><span className="grayscale">✔</span>Guaranteed Results</h4>
                            {/* <a className="btn btn-outline-light btn-lg" href="#!" role="button">Call to action</a> */}
                            <div className="d-flex justify-content-start" id="jumboBtnBox">
                                <Link to="/Contact" className="btn btn-outline-light btn-lg row mask" id="mask2">Free Consultation!</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="endorsementBox d-flex justify-content-center">
                {/* <div className="endorsement shadow-lg text-body">
                    <p>"SSBR is very blessed to have an amazing trainer who truly cares about each dog as an individual.
                    Without Alessandro, several of our dogs wouldn’t have had a chance at their forever home. Highly 
                    recommend!"</p>
                    <p className="endorser">~Haley Kazee (Southern States Bully Rescue)</p>
                </div> */}
                <blockquote className="otro-blockquote">
                "SSBR is very blessed to have an amazing trainer who truly cares about each dog as an individual.
                    Without Alessandro, several of our dogs wouldn’t have had a chance at their forever home. Highly 
                    recommend!"
                <span>~Haley Kazee (Southern States Bully Rescue)</span>
                </blockquote>
            </section>
            <article className="container">
                <div className="row">
                    <div className="cardBox container shadow">
                        <div className="row d-flex justify-content-center">
                                <img src={beagle} alt="puppy" className="rounded cardImg"/> 
                        </div>
                        <div className="row">
                            <h3 className="programHeader">Puppy Program</h3>
                            <p>Our Puppy Program is best suited for puppies under the age of 7
                                months focusing on preventing issues from coming up and teaching them basic obedience.</p>
                        </div>
                    </div>
                    <div className="cardBox container shadow">
                        <div className="row d-flex justify-content-center">
                                <img src={pitty} alt="happy pitbull" className="rounded cardImg"/> 
                        </div>
                        <div className="row">
                            <h3 className="programHeader">Private Lessons</h3>
                            <p>Our Private Lesson Program is best suited for dogs who need a little help with behavior, 
                            manners, and how to be calm in public.</p>
                        </div>
                    </div>
                    <div className="cardBox container shadow">
                        <div className="row d-flex justify-content-center">
                                <img src={whitedog} alt="small white dog in field" className="rounded cardImg"/> 
                        </div>
                        <div className="row">
                            <h3 className="programHeader">Doggy Bootcamp</h3>
                            <p>Our Doggy Bootcamp is best suited for families who want the hard work to be done for
                             them and have dogs who listen and behave in the house, on the walk, and out in public
                              no matter the distractions.</p>
                        </div>
                    </div>
                </div>

            </article>
        </div>
  );
};

export default Home;