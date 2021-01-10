import React from 'react'
import GalleryImage from '../galleryImage/GalleryImage'
import './Gallery.css'
import img13 from '../../img/gallery13.jpg'
import img14 from '../../img/gallery14.jpg'
import img15 from '../../img/gallery15.jpg'
import img16 from '../../img/gallery16.jpg'
import img17 from '../../img/gallery17.jpg'
import img18 from '../../img/gallery18.jpg'
import img19 from '../../img/gallery19.jpg'
import img20 from '../../img/gallery20.jpg'
import img21 from '../../img/gallery21.jpg'
import img22 from '../../img/gallery22.jpg'
// import img2 from 'src/img/header.jpg'

function Gallery() {
    return (
        <div className="gallery__container">
            <div className="gallery">
                <div className="heading">
                    Gallery
                </div>
                <div className="gallery__content">
                    <div className="gallery__image">
                        <GalleryImage src={img13} alt="Gallery image" />
                    </div>
                    <div className="gallery__image">
                        <GalleryImage src={img14} alt="Gallery image" />
                    </div>
                    <div className="gallery__image">
                        <GalleryImage src={img15} alt="Gallery image" />
                    </div>
                    <div className="gallery__image">
                        <GalleryImage src={img16} alt="Gallery image" />
                    </div>
                    <div className="gallery__image">
                        <GalleryImage src={img17} alt="Gallery image" />
                    </div>
                </div>

                <div className="gallery__content">
                    <div className="gallery__image">
                        <GalleryImage src={img18} alt="Gallery image" />
                    </div>
                    <div className="gallery__image">
                        <GalleryImage src={img19} alt="Gallery image" />
                    </div>
                    <div className="gallery__image">
                        <GalleryImage src={img20} alt="Gallery image" />
                    </div>
                    <div className="gallery__image">
                        <GalleryImage src={img21} alt="Gallery image" />
                    </div>
                    <div className="gallery__image">
                        <GalleryImage src={img22} alt="Gallery image" />
                    </div>
                </div>

                <p>View More</p>
            </div>
        </div>
    )
}

export default Gallery
