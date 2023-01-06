import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, img, seller, price, ratings} = props.product;
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
            <button className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
        
    );
};

export default Product;