import React from 'react'
import Courses from '../components/courses/Courses'
import Gallery from '../components/gallery/Gallery'
import Header from '../components/header/Header'
import Mission from '../components/mission/Mission'

function Home() {
    return (
        <div>
            <Header />
            <Mission />
            <Gallery />
            <Courses />
        </div>
    )
}

export default Home
