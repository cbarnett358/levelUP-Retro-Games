import React from 'react';
import { useEffect, useState } from 'react';


function deleteCart() {
    localStorage.removeItem('cart');
    window.location.reload();
}



function cartItemsTotal (cart) {
    let total = 0;
    cart.map((product) => {
        total += product.quantity;
    })
    return total;
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
        <main className='bg-white
        h-screen
        '>
        <div className='bg-light'>
        <h1 className=' text-red'>Cart</h1>
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
         <div>total products: {cartItemsTotal(cart)}</div>  

       <button
       className='mt-4 bg-secondary text-light font-mainfont text-xl p-1'
       onClick={deleteCart}>Delete Cart</button>

        </div>
        </main>
    );
    }

    