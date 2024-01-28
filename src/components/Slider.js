import React from 'react'
import F1 from '../assets/images/foto.jpg';
import F2 from '../assets/images/image.png';
import F3 from '../assets/images/picture.jpg'
import F4 from '../assets/images/Poster photo.png'



function Slider() {
    return (
        <>
            <div id="carouselExample" class="carousel slide my-1">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={F4} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={F3} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={F2} class="d-block w-100" alt="..." />
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