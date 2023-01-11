import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, img, seller, price, ratings} = props.product;
    console.log(props)
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='product-name'>{name}</p>
            <div className="product-info">
                <p className='product-price'>Price: ${price}</p>
                <div className="manufac-info">
                    <p><small>Manufacturer:{seller}</small></p>
                    <p><small>Rating:{ratings} Stars</small></p>
                </div>
            </div>
            <button onClick={()=>props.handleaddToCart(props.product)} className='btn-cart'>
                <p className='cart-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
        
    );
};

export default Product;