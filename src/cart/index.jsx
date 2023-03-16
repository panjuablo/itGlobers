import React from 'react';
import carts from '../img/images.jpg';
import cart from '../img/allBag2.jpeg';
import './index.css';


function Cart() {
    return (
        <div className='cart'id='CART'>
            <div className='cont'>
                <img src={carts} alt='bag girl' />
            </div>
            <div className='description'>
                <img className='imageUmbrella' src={cart} alt='not found' />
                <h2>Puffi CART</h2>
                <div className='divsito'></div>
                <h5>Descripción del producto. Este es un <br /> texto simulado  </h5>
                <p> > VER MAS</p>
            </div>
        </div>
    );
};

export default Cart;