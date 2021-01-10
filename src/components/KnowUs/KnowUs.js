import React from 'react'
import './KnowUs.css'

function KnowUs() {
    return (
        <>
        <div className="know__us__container">
            <h1>Get to Know us Better!</h1>
            <p>Send us a message</p>
            <div className="inputs">
                <div className="name__email">
                    <input type="text" placeholder="Name" /> <br/>
                    <input type="text" placeholder="Email" />
                </div>
                <div className="message">
                    <input type="text" placeholder="Message"/>
                </div>
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
        </>
    )
}

export default KnowUs
