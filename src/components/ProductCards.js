import 'material-icons/iconfont/material-icons.css';
import { useEffect, useState } from 'react';





//limit product_name to 10 characters on the product page
export function limitProductTitle(productName) {
    if (productName.length > 35) {
        return productName.substring(0, 25) + "...";
    }
    return productName;
}

export function addToCart(product) {
  console.log('hey',product);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productExists = cart.find((p) => p.product_id === product.product_id);
    if (productExists) {
        productExists.quantity++;
        productExists.price++;
    } else {
        cart.push({ ...product, quantity: 1, price: product.product_price });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
}



//function for trading in that subtracts the price of the product from the total
export function tradeIn(product) {
    
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productExists = cart.find((p) => p.product_id === product.product_id);
    if (productExists) {
        productExists.quantity--;
        productExists.price--;
    } else {
        cart.push({ ...product, quantity: 1, price: product.product_price });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
}



export function ProductRating({ rating }) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        
        if (i <= rating) {
            stars.push(<i key={i} className="material-icons">star</i>);
        } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            stars.push(<i key={i} className="material-icons">star_half</i>);
        } else {
            stars.push(<i key={i} className="material-icons">star_border</i>);
        }
    }
    return <div>{stars}</div>;
}



export function ProductCards() {
        
       
    const [dataResponse, setdataResponse] = useState([]);



    useEffect(() => {
      async function getPageData() {
        const apiUrlEndpoint = `http://localhost:3000/api/getdata`;
        const response = await fetch (apiUrlEndpoint);
        const res = await response.json();
        console.log(res.products);
        setdataResponse(res.products);
      }
      getPageData();
    }, []);
    

    return (
            
   

     <div  className='   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
      
        {dataResponse.map((product) => {
          return(
            <div key={product.product_id}>



            <div
    className="block max-w-sm mt-sm rounded-lg bg-light shadow-lg ">
    <a href="#!">
    <img className="rounded-t-lg" src={"https://raw.githubusercontent.com/cbarnett358/levelUP-Images/main/levelup-game-covers/" + product.product_id + ".png"} alt="Game Cover Art"/>

      
    </a>
    <div className="p-6">
      
      <h5
        className="mb-2 font-mainfont text-2xl  font-bold leading-tight text-pink-600 
        
        ">
        {limitProductTitle(product.product_name)}
      </h5>
      
      <p className="text-xl mb-2 font-mainfont text-dark">
      ${product.product_price}
      </p>

<div className="text-base text-tertiary ">
      <ProductRating rating={product.product_rating} />
      </div>
      <p className="mb-2 text-base font-mainfont text-dark text-lg ">
      Platform: {product.product_platform}
      </p>




        <a href="{product.product_id}" className=" font-mainfont text-xl font-thin text-pink-600
        ">
        View Product
        </a>
      <div className="space-x-3">
        
      <button
        key={product.product_id}
        onClick={() => addToCart(product)}

        type="button"
        className="font-mainfont mt-4 inline-block rounded bg-secondary text-light px-4 py-2 text-lg font-bold
        shadow-md  hover:bg-pink-500 hover:text-xl
        "
        data-te-ripple-init


          

        data-te-ripple-color="light">    
        Add to Cart
      </button>
   
     <button
        type="button"
        className="font-mainfont inline-block rounded bg-tertiary text-dark px-4 py-2 text-lg font-bold
        hover:bg-yellow-400 shadow-md hover:text-xl
        "
        data-te-ripple-init
        onClick={() => tradeIn(product)}
        data-te-ripple-color="light">
        Trade In
      </button>
   
      </div>
<div>
  
      </div>
      
    </div>
  </div>

<p className="mb-2 text-base text-dark">

</p>

            </div>


          );
        })}


        </div>

    )
}

export default ProductCards;

