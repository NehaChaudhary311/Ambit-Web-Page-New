import React from 'react';
import { useState, useEffect } from 'react';
import desktopImage from '../assets/images/writing-coffee-dark.jpg';
import mobileImage from '../assets/images/writing-coffee-dark.jpg';
import Hero from '../components/Hero';
import TypicalText from '../components/TypicalText';
import CarouselTry from '../components/CarouselTry';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './HomePage.css';



function HomePage(props) {

    return(
        <div className="background">
            <Navbar>
            
                <Nav className="ml-auto">
                <Link className="nav-link" to="/signin">Signin</Link>
                </Nav>
             </Navbar>
            <Hero title={props.title} />
            <TypicalText></TypicalText>
            <CarouselTry />
        </div>
    );

}

export default HomePage;