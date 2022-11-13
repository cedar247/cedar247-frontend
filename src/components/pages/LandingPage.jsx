import React from 'react';

import '../CSS/LandingPage.css';
import Navbar from '../layouts/NavBar';

export function LandingPage() {
    return (
        <div className="wrapper">
            <Navbar items={[{"item": "Home", "link": "#Home"},
                {"item": "About", "link": "#About"},
                {"item": "Services", "link": "#Services"},
                {"item": "Contact", "link": "#Contact"}]}></Navbar>
            <div id="Home" className="cover" >
                <div>
                    {/* src={require('../images/plane.png')} */}
                    <img src={require('../Images/logo.png')} style={{height: 400}} alt="logo"/>
                </div>
                <div className="text-center">
                    <h1>cedar247</h1>
                    <h4>Schedule your shifts here!</h4>
                    {/* <p>B Airways is blah blah ...</p> */}
                    <a href="/signIn" className="btn - btn-primary rounded-pill ps-5 pe-5">Get Started &rarr;</a>
                </div>

            </div>
            <div id="About" className="cover">
            <div>
                    {/* src={require('../images/plane.png')} */}
                    <img src={require('../Images/about.jpg')} style={{height: 400}} alt="about"/>
                </div>
                <h4 className="text-center">Snap Schedule roster scheduler gives you an easy-to-use graphi
                cal user interface <br></br> and powerful software tools that make scheduling emp
                loyees, editing information, analyzing data, <br></br>and distributing employee work s
                chedules easy and simple.</h4>
            </div>
            <div id="Services" className="cover">
            <div>
                    {/* src={require('../images/plane.png')} */}
                    <img src={require('../Images/services.png')} style={{height: 400}} alt="service"/>
                </div>
                <h1>Services</h1>
                <h4>sdsdvsds </h4>
            </div>
            <div id="Contact" className="cover">
            <div>
                    {/* src={require('../images/plane.png')} */}
                    <img src={require('../Images/contact.png')} style={{height: 400}} alt="contact"/>
                </div>
                <h4>Contact Us On</h4>
                <div className="d-flex justify-content-evenly">
                    <img
                        src={"https://img.shields.io/badge/-Facebook-blue?style=for-the-badge&labelColor=blue&logo=facebook&logoColor=white"} alt=""/>
                    <img
                        src={"https://img.shields.io/badge/-Twitter-9cf?style=for-the-badge&labelColor=9cf&logo=twitter&logoColor=white"} alt=""/>
                    <img
                        src={"https://img.shields.io/badge/-Instagram-ff69b4?style=for-the-badge&labelColor=ff69b4&logo=instagram&logoColor=white"} alt=""/>
                    <img
                        src={"https://img.shields.io/badge/-LinkedIn-blue?style=for-the-badge&labelColor=blue&logo=linkedin&logoColor=white"} alt=""/>
                </div>
            </div>
        </div>
    );
}