
import React from 'react';
import { useEffect, useState } from 'react';


function deleteCart() {
    localStorage.removeItem('cart');
    window.location.reload();
}


export default function AddToCart() {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);  

    useEffect(() => {
        const cart = localStorage.getItem('cart');
        if (cart) {
           let cartList = JSON.parse(cart);
           let totalVal = 0; 
           cartList.map((product) => {
            
            totalVal  += product.product_price;
           })

           console.log('test',totalVal);
           setTotal(totalVal);
            setCart(JSON.parse(cart));
        }

      }, []);
    return (
        <div>
        <h1>Cart</h1>
        {cart.map((product) => {
            return (
                <div key={product.product_id}>
                    <h3>{product.product_name}</h3>
                    <p>{product.product_price}</p>
                    <p>{product.quantity}</p>

                </div>
            );
        })}
       <div>total: {total}</div>

       <button onClick={deleteCart}>Delete Cart</button>

        </div>
    );
    }

    