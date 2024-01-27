import React from 'react'
import Foto from '../assets/foto.jpg'
import Picture from '../assets/picture.jpg'
import Image from '../assets/image.png'


function Slider() {
    return (
        <>
            <div id="carouselExample" class="carousel slide my-3">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Foto} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Picture} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Image} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Slider