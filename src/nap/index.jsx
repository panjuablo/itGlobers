import React from 'react';
import naps from '../img/pillow2.jpg';
import nap from '../img/pillow.png';
import './index.css';


function Nap() {
    return (
        <div className='nap' id='NAP'>
            <div className='description'>
                <img className='imageNap' src={nap} alt='not found' />
                <h2>Puffi NAP</h2>
                <div className='divsito'></div>
                <h5>Descripción del producto. Este es un <br /> texto simulado  </h5>
                <p> > VER MAS</p>
            </div>
            <div className='cont'>
                <img src={naps} alt='colchoneta' />
            </div>
        </div>
    );
};

export default Nap;