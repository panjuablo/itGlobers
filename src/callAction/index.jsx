import React from 'react';
import collage from '../img/collage.jpg'
import ContactForm from './newsletter'
import './index.css';


function Call() {
    return (
        <div className='call'>
            <p className='Instagram'>INSTAGRAM</p>
            <h1 className='ESPUFI'>#ESPUFI</h1>
            <img src={collage} alt='collage' className='image'/>
            <p className='Instagram'>NEWSLETTER</p>
            <h1 className='ESPUFI'>SUSCRIBETE</h1>
            <p>Y enterate de todas las novedades</p>
            <ContactForm/>
        </div>
    );
};

export default Call;