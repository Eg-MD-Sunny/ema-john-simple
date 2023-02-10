import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        fetch('datas.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
  
    const handleaddToCart = (product) =>{
        // console.log(product);
        const newCart = [...cart,product];
        setCart(newCart);
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product 
                        key={product.id}
                        product={product}
                        handleaddToCart={handleaddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;