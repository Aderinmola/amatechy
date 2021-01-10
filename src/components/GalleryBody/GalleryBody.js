import React from 'react'
import DescriptionImage from '../DescriptionImage/DescriptionImage'
import './GalleryBody.css'
import Img1 from '../../img/gallery1.JPG'
import Img2 from '../../img/gallery2.JPG'
import Img3 from '../../img/gallery3.JPG'
import Img4 from '../../img/gallery4.JPG'
import Img5 from '../../img/gallery5.JPG'
import Img6 from '../../img/gallery6.JPG'
import Img7 from '../../img/gallery7.JPG'
import Img8 from '../../img/gallery8.JPG'
import Img9 from '../../img/gallery9.JPG'
import Img10 from '../../img/gallery10.JPG'
import Img11 from '../../img/gallery11.JPG'
import Img12 from '../../img/gallery12.JPG'

function GalleryBody() {
    return (
        <div className="gallery__body__container">
            <div className="gallery__row">
                <div className="each">
                    <DescriptionImage image={Img1} />
                </div>
                <div className="each">
                    <DescriptionImage image={Img2} />
                </div>
                <div className="each">
                    <DescriptionImage image={Img3} />
                </div>
            </div>
            <div className="gallery__row">
                <div className="each">
                    <DescriptionImage image={Img4} />
                </div>
                <div className="each">
                    <DescriptionImage image={Img5} />
                </div>
                <div className="each">
                    <DescriptionImage image={Img6} />
                </div>
            </div>
            <div className="gallery__row">
                <div className="each">
                    <DescriptionImage image={Img7} />
                </div>
                <div className="each">
                    <DescriptionImage image={Img8} />
                </div>
                <div className="each">
                    <DescriptionImage image={Img9} />
                </div>
            </div>
            <div className="gallery__row">
                <div className="each">
                    <DescriptionImage image={Img10} />
                </div>
                <div className="each">
                    <DescriptionImage image={Img11} />
                </div>
                <div className="each">
                    <DescriptionImage image={Img12} />
                </div>
            </div>
            <div className="gallery__row">
                <div className="each">
                    <DescriptionImage image={Img1} />
                </div>
                <div className="each">
                    <DescriptionImage image={Img2} />
                </div>
                <div className="each">
                    <DescriptionImage image={Img3} />
                </div>
            </div>
            
            
            <div className="know__us__contact contact courses__bottom">
                <div className="footer__text">
                    <h3>Head Office</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.   Quasi fugiat </p>
                    <p>fugiat animi officiis et.</p>
                    <p>Atque, cum ducimus odio Quasi fugiat</p>
                    <p>dignissimos repel.</p>
                </div>
                <div className="footer__text">
                    <h3>Contact</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.   Quasi fugiat </p>
                    <p>fugiat animi officiis et.</p>
                    <p>Atque, cum ducimus odio Quasi fugiat</p>
                        <p>dignissimos repel.</p>
                </div>
            </div>
        </div>
    )
}

export default GalleryBody
