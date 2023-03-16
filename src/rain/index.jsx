import React from 'react';
import umbrellas from '../img/umbrellaFinal.png';
import umbrella from '../img/umbrella.png';
import './index.css';


function Rain() {
    return (
        <div className='rain' id='RAIN'>
            <div className='cont'>
                <img src={umbrellas} alt='umbrella' />
                <div className='shop'>
                    <button type="button" className="btn btn-outline-light btn-lg">SHOP</button>
                </div>
            </div>
            <div className='description'>
                <img className='imageUmbrella' src={umbrella} alt='not found' />
                <h2>Puffi RAIN</h2>
                <div className='divsito'></div>
                <h5>Descripción del producto. Este es un <br /> texto simulado  </h5>
                <p> > VER MAS</p>
            </div>
        </div>
    );
};

export default Rain;