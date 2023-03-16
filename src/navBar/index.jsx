import React from 'react';
import { BsUmbrella, BsBag } from "react-icons/bs";
import { GiPillow } from "react-icons/gi";
import { CiShoppingTag } from "react-icons/ci";
import logo from '../img/logo.png';
import './index.css';


function Navbar() {
    return (
        <header className='primary-header'>
            <div className='navbar container'>
                <img src={logo} className='logo' />
                <ul className='nav-list'>
                    <li href='#PUFI PUFF'>
                        <a href='#PUFF'><CiShoppingTag style={{color: '#fff', fontSize: '30px'}}/><b>PUFI PUFF</b></a>
                    </li>
                    <hr/>
                    <li href='#PUFI RAIN'>
                        <a href='#RAIN'><BsUmbrella style={{color: '#fff', fontSize: '30px'}}/><b>PUFI RAIN</b></a>
                    </li>
                    <hr/>
                    <li href='#PUFI CART'>
                        <a href='#CART'><BsBag style={{color: '#fff', fontSize: '30px'}}/><b>PUFI CART</b></a>
                    </li>
                    <hr/>
                    <li href='#PUFI NAP'>
                        <a href='#NAP'><GiPillow style={{color: '#fff', fontSize: '30px'}}/><b>PUFI NAP</b></a>
                    </li>
                </ul>
                <div className='cont-butt'>
                    <button className='button'>MI CUENTA</button>
                    <a className='separador'>|</a>
                    <button className='button'>MI COMPRA</button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;