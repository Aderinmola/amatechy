import React from 'react'
import './GalleryImage.css'

function GalleryImage({src, alt, text}) {

    return (
        <div claassName="each__gallery__image">
            <img className="image__test" src={src} alt={alt} />
            <p>{text}</p>
        </div>
    )
}

export default GalleryImage
