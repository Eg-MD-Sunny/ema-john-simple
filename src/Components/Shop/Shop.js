import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {

    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='shop-container'>
            <div className="product-container">
                <h2>This is for products:{products.length}</h2>
                {
                    products.map(product=><p>{product.name}</p>)
                }
            </div>
            <div className="cart-container">
                <h4>Order Summery</h4>
            </div>
        </div>
    );
};

export default Shop;