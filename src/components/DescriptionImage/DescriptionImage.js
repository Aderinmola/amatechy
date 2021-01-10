import React from 'react'
import './DescriptionImage.css'

function DescriptionImage({ image, alt }) {
    return (
        <div className="description__image">
            <img className="image__test__describe" src={image} alt={alt} />
            <p>Description</p>
        </div>
    )
}

export default DescriptionImage
