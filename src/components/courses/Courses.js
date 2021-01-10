import React from 'react'
import Course from '../course/Course'
import Footer from '../footer/Footer'
import './Courses.css'

function Courses() {
    return (
        <div className="courses__container">
            <div className="courses courses__top">
                <h1>Courses available</h1>
                <div className="courses__available">
                    <Course />
                    <Course />
                    <Course />
                    <Course />
                    <Course />
                    <Course />
                </div>
                <div className="courses__register">Register Now</div>
            </div>

        <Footer />
        </div>
    )
}

export default Courses
