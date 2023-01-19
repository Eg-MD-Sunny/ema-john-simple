import React from 'react';
import './Cart.css';

const Cart = (props) => {
    return (
        <div>
            <h2>Order Review</h2>
                <p class="text-value">Selected Items: {props.cart.length}</p>
        </div>
    );
};

export default Cart;