import React from 'react'
import Slider from './Slider'
import Themovies from './Themovies'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <Slider/>
            <Themovies/>
            <div className='text-center'>
                <Link to="/movies" className='btn btn-info'>Filmat</Link>
            </div>
        </>
    )
}

export default Home