import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import pitty from "../assets/images/pitty.jpg"
import whitedog from "../assets/images/whitedog.jpg"
import beagle from "../assets/images/beagle.jpg"
import hank from "../assets/images/hank.jpg"

import ContactForm from "../components/ContactForm/index.js"
import ContactBtn from "../components/ContactBtn/index.js"


const Home = () => {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="App">
            <header className="text-center bg-image" id="jumbotron">
                <div className="mask w-100 h-100 mask">
                    <div className="d-flex justify-content-start align-items-center h-100">
                        <div className="text-white container jumboTextbox" id="jumboBigscreen">
                            <h1 className=" text-start row" id="jumboHeader">Transform the dog you have into the dog you want!</h1>
                            <h4 className=" text-start row" id="jumboSubheader"><span className="grayscale">✔</span>No more pulling</h4>
                            <h4 className=" text-start row" id="jumboSubheader"><span className="grayscale">✔</span>No more barking</h4>
                            <h4 className=" text-start row" id="jumboSubheader"><span className="grayscale">✔</span>Doesn't jump on guests</h4>
                            <h4 className=" text-start row" id="jumboSubheader"><span className="grayscale">✔</span>Doesn't run out the door</h4>
                            <h4 className="text-start row" id="jumboSubheader"><span className="grayscale">✔</span>Listens to commands(sit, stay, lay down, come)</h4>
                            <h4 className=" text-start row" id="jumboSubheader"><span className="grayscale">✔</span>Fixing behavior issues (anxiety, fear, aggression)</h4>
                            <h4 className=" text-start row" id="jumboSubheader"><span className="grayscale">✔</span>Onleash obedience around distractions</h4>
                            <h4 className=" text-start row" id="jumboSubheader"><span className="grayscale">✔</span>Offleash obedience around distractions</h4>
                            {/* <a className="btn btn-outline-light btn-lg" href="#!" role="button">Call to action</a> */}
                            <div className="d-flex justify-content-start" id="jumboBtnBox">
                                <Link to="/Contact" className="btn btn-outline-light btn-lg row mask consultBtn">Free Consultation!</Link>
                            </div>
                        </div>
                        <div className="contactBox w-100" id="jumboBigscreen">
                            <ContactForm/>
                        </div>
                        <div className="text-white container jumboTextbox w-100 align-self-center container" id="jumboSmallscreen">
                            <h1 className="text-start row text-center row" id="jumboHeader">Transform the dog you have into the dog you want!</h1>
                            <ContactBtn />
                        </div>
                    </div>
                </div>
            </header>
            <section className="mobileContactBox">
                <ContactForm />
            </section>
            <section className="endorsementBox d-flex justify-content-center">
                <blockquote className="otro-blockquote quoteText">
                "SSBR is very blessed to have an amazing trainer who truly cares about each dog as an individual.
                    Without Alessandro, several of our dogs wouldn’t have had a chance at their forever home. Highly 
                    recommend!"
                <span className="quoteAuthor">~Haley Kazee (Southern States Bully Rescue)</span>
                </blockquote>
            </section>
            <article className="container">
                <div className="row">
                    <div className="cardBox container shadow col-xxl-4">
                        <div className="row d-flex justify-content-center">
                                <img src={beagle} alt="puppy" className="rounded cardImg"/> 
                        </div>
                        <div className="row">
                            <h3 className="programHeader">Puppy Program</h3>
                            <p>Our Puppy Program is best suited for puppies under the age of 6
                                months focusing on preventing issues from coming up and teaching them basic obedience.</p>
                        </div>
                    </div>
                    <div className="cardBox container shadow col-xxl-4">
                        <div className="row d-flex justify-content-center">
                                <img src={pitty} alt="happy pitbull" className="rounded cardImg"/> 
                        </div>
                        <div className="row">
                            <h3 className="programHeader">Private Lessons</h3>
                            <p>Our Private Lesson Program is best suited for dogs who need a little help with behavior, 
                            manners, and how to be calm in public.</p>
                        </div>
                    </div>
                    <div className="cardBox container shadow col-xxl-4">
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
                <div className="wideEndorsement row d-flex align-items-center">   
                    <img src={hank} alt="two children and their dog(hank)" className="rounded-lg quoteImg"/>
                    <blockquote className="otro-blockquote quoteText" id="bigQuoteBody">
                    "When we got our rescue dog Hank, he was quite destructive. he did over $600 in damages to
                     our house within the first week. he peed and pooped in the house every day and would run off 
                     any chance hed get and even break out of his crate. when we got hooked up with Alessandro he 
                     took Hank in for a few weeks and he is now a totally different dog. we've stuck with his training
                      and still call him for suggestions if we need him. Hank has found his furever home because of
                       Alessandro."     
                    <span className="quoteAuthor">-Jenn Nero, Seffner Florida</span>
                    </blockquote>
                    <blockquote className="otro-blockquote quoteText" id="smallQuoteBody">
                    " . . . When we got hooked up with Alessandro he 
                     took Hank in for a few weeks and he is now a totally different dog. we've stuck with his training
                      and still call him for suggestions if we need him . . ."        
                        <Button variant="primary" onClick={handleShow} className="modalBtn">
                            Read More
                        </Button> 
                    <span className="quoteAuthor">-Jenn Nero, Seffner Florida</span>
                    </blockquote>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Jenn Nero, Seffner Florida:</Modal.Title>
                        </Modal.Header>
                        <Modal.Body >"When we got our rescue dog Hank, he was quite destructive. he did over $600 in damages to
                     our house within the first week. he peed and pooped in the house every day and would run off 
                     any chance hed get and even break out of his crate. when we got hooked up with Alessandro he 
                     took Hank in for a few weeks and he is now a totally different dog. we've stuck with his training
                      and still call him for suggestions if we need him. Hank has found his furever home because of
                       Alessandro." </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                
                <div className="d-flex justify-content-center">
                    <Link to="/Contact" className="btn btn-outline-light btn-lg row mask consultBtn" id="whiteBgConsult">FREE Consultation!</Link>
                </div>
                
            </article>
        </div>
  );
};

export default Home;