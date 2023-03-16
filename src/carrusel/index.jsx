import React from 'react';
import carr1 from '../img/carr1.png';
import carr2 from '../img/carr2.jpg';
import carr3 from '../img/carr3.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function Carrusel() {
    return (
        <div className='carrousel'>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={carr1} className="d-block w-100" alt="image 1" />
                    </div>
                    <div className="carousel-item">
                        <img src={carr2} className="d-block w-100" alt="image 2" />
                    </div>
                    <div className="carousel-item">
                        <img src={carr3} className="d-block w-100" alt="image 3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='butt-shop'>
                <button type="button" className="btn btn-outline-light btn-lg">SHOP</button>
            </div>
        </div>


    );
}

export default Carrusel;
