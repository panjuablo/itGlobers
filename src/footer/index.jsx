import React from 'react';
import { MdSecurity } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import './index.css';


function Footer() {
    return (
        <footer className='primary-footer'>
            <div className='Container-Footer'>

                <div className='DivFooter'>
                    <h1>Pufi</h1>
                </div>

                <div className='DivFooter'>
                    <ul className='ul'>
                        <li>PUFI RAIN</li>
                        <li>PUFI PUFF</li>
                        <li>PUFFI CART</li>
                        <li>PUFI NAP</li>

                    </ul>
                </div>

                <div>
                    <div className="line2">
                    </div>
                </div>

                <div className='DivFooter'>
                    <ul className='ul'>
                        <li>CONTACTO</li>
                        <li>AYUDA</li>
                        <li>CÓMO COMPRAR</li>
                        <li>TÉRMINOS Y CONDICIONES</li>
                    </ul>
                </div>

                <div>
                    <div className="line2">
                    </div>
                </div>

                <div className='DivFooter'>
                    <div className='Compra-100'>
                        <p>COMPRA 100% SEGURA</p>
                    </div>
                    <div className='Compra-Segura'>
                        <a><MdSecurity style={{ color: 'black', fontSize: '50px' }} /></a>
                        <p className='p-Compra'>COMPRÁ CON <br /> LA GARANTIA <br /> DE PUFFI</p>
                    </div>
                </div>

                <div>
                    <div className="line2">
                    </div>
                </div>

                <div className='redes-sociales'>
                    <p>SEGUINOS EN </p>
                    <div className='divSocials'>
                        <a><FaFacebookF style={{ color: 'black', fontSize: '20px' }} /></a>
                        <a><BsTwitter style={{ color: 'black', fontSize: '20px' }} /></a>
                        <a><BsInstagram style={{ color: 'black', fontSize: '20px' }} /></a>
                    </div>
                </div>
                <hr></hr>


            </div>

            <divisor className="cntLine3">
                <div className="line3">
                </div>
            </divisor>
            <div className='P-Copyright'>
                <p>PUFI Copyright 2017 - Todos los derechos reservados</p>
            </div>
        </footer>
    );
};

export default Footer;