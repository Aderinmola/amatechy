import React from 'react'
import { Link } from 'react-router-dom'
import KnowUs from '../KnowUs/KnowUs'
import './AboutHeader.css'

function AboutHeader() {
    return (
        <div className="aboutHeader__container">
            <div className="aboutHeader">
                <header className="about__section">
                    <div className="logo">
                        <h1>Amatechy</h1>
                    </div>
                    <div className="menu-items">
                        <ul>
                            <Link to="/">
                                <li>Home</li>
                            </Link>
                            <Link to="/gallery">
                                <li>Gallery</li>
                            </Link>
                        </ul>
                    </div>
                </header>

                <div className="about__us">
                    <h1>About Us</h1>
                </div>

                <div className="vision__mission">
                    <div className="new__vision">
                        <h3>Our Bision</h3>
                        <p>We are dedicated to make every woman realise their potentials in the technology world, building the technology confidence and goal in the female world and building quality technology life of women by keeping them with 21st century technology skills</p>
                    </div>
                    <div className="new__mission">
                        <h3>Our Mission</h3>
                        <p>We are dedicated to make every woman realise their potentials in the technology world, building the technology confidence and goal in the female world and building quality technology life of women by keeping them with 21st century technology skills</p>
                    </div>
                </div>

                <div className="initiative">
                    <p>
                    It is an initiative designed to demystify technology and begin empowering our young generation with useful digital IT skills. During each of our events, 30-60 women will build their first web application (BLOG) using <span className="primary__text">HTML
                    </span>, <span className="primary__text">CSS</span>, <span className="primary__text">Python</span> and <span className="primary__text">Django</span>. Also for the discover global day of engineers: the girls learn how to use scratch software and also build some electronics devices.
                    </p>
                </div>
            </div>

            <KnowUs />
        </div>
    )
}

export default AboutHeader
