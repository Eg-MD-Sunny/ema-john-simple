import React from 'react';
import './Cart.css';

const Cart = (props) => {

    // console.log(props.cart);
    let total = 0;
    let shipping = 0;
    for(const product of props.cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;

    return (
        <div className="Cart">
            <h2 className='order-potion'>Order Review</h2>
                <p class="text-value">Selected Items: {props.cart.length}</p>
                <p class="text-value">Total Price: ${total}</p>
                <p class="text-value">Total Shipping Charge: ${shipping}</p>
                <p class="text-value">Tax: {tax}</p>
                <h2>Grand Total:{grandTotal}</h2>
        </div>
    );
};

export default Cart;