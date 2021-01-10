import React from 'react'
import Card from '../card/Card'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <div className="header">
                <header>
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
                            <Link to="/about">
                                <li>About</li>
                            </Link>
                        </ul>
                    </div>
                </header>


                <button className="donate">Donate Now</button>

                <div className="card1">
                    <Card title="Our Vision" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente velit veniam deleniti nobis consequatur, optio omnis perspiciatis enim eaque in, doloribus at fugit ab eligendi beatae eos exercitationem nisi doloremque." />
                    <Card title="Our Mission" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente velit veniam deleniti nobis consequatur, optio omnis perspiciatis enim eaque in, doloribus at fugit ab eligendi beatae eos exercitationem nisi doloremque." />
                </div>
    
            </div>
        </div>
    )
}

export default Header
