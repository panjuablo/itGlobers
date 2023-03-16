import React from 'react';
import puffs from '../img/colchoneta.jpg';
import puff from '../img/colchoin.png';
import './index.css';


function Puff() {
    return (
        <div className='puff' id='PUFF'>
            <div className='description'>
                <img className='imageUmbrella' src={puff} alt='not found' />
                <h2>Puffi PUFF</h2>
                <div className='divsito'></div>
                <h5>Descripción del producto. Este es un <br /> texto simulado  </h5>
                <p> > VER MAS</p>
            </div>
            <div className='cont'>
                <img src={puffs} alt='colchoneta' />
            </div>
        </div>
    );
};

export default Puff;