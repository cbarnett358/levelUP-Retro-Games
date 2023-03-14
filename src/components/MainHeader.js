//make react component
import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';



function cartItemsTotal (cart) {
  let total = 0;
  cart.map((product) => {
      total += product.quantity;
  })
  return total;
}


function MainHeader() {
  
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
        <section
        className="bg-primary ">
         <nav className='drop-shadow-lg  p-8 mb-0 flex justify-between text-white'>
 <div className="flex ">
        <Image src="/levelUP_Logo.png " alt="levelUP Games" width={200} height={200} className="" /> 
        </div>

        

        <div key={total} className="flex items-center">
        <span className="material-icons">shopping_bag</span>
        <p className="text-tertiary text-xs font-bold">{cartItemsTotal(cart)}</p>
        </div>
       


            
 
           <ul className='
           flex
          space-x-4
          mt-2
           '>
         
             <li >        <span className="material-icons ">account_circle</span> 
 </li>
             <li>        <span className="material-icons">sell</span> 
 </li>
             <li>        <span className="material-icons">shopping_bag</span> 
 </li>
             
           </ul>
         </nav>
 
 
        </section> 
    )
}

export default MainHeader;

