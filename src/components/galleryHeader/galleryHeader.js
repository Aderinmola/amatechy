import React from 'react'
import './galleryHeader.css'
import { Link } from 'react-router-dom'
import GalleryBody from '../GalleryBody/GalleryBody'

function GalleryHeader() {
    return (
        <div className="galleryHeader__container">
            <div className="galleryHeader">
                <header className="gallery__section">
                    <div className="logo">
                        <h1>Amatechy</h1>
                    </div>
                    <div className="menu-items">
                        <ul>
                            <Link to="/">
                                <li className="gallery__home">Home</li>
                            </Link>
                            <Link to="/about">
                                <li className="gallery__home">About</li>
                            </Link>
                        </ul>
                    </div>
                </header>
                <section></section>
            </div>
            <GalleryBody />
        </div>
    )
}

export default GalleryHeader
