import 'material-icons/iconfont/material-icons.css';

import { useEffect, useState } from 'react';


export function ProductCards() {
        
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
        <section>
            
     <div  className='class="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4
     




     '>
        {dataResponse.map((product => {
          return(
            <div key={product.product_id}>



            <div
    className="block max-w-sm mt-sm rounded-lg bg-light shadow-lg ">
    <a href="#!">
    <img className="rounded-t-lg" src={"https://raw.githubusercontent.com/cbarnett358/levelUP-Images/main/levelup-game-covers/" + product.product_id + ".png"} />

      
    </a>
    <div className="p-6">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-pink-600 ">
        {product.product_name}
      </h5>
      <p className="mb-2 text-base text-dark">
      ${product.product_price}
      </p>
      <p className="mb-2 text-base text-dark">
      {product.product_platform}
      </p>
      
      <div className="flex mb-4 items-center">
          <span className="material-icons text-tertiary">star</span>
          <span className="material-icons text-tertiary">star</span>
          <span className="material-icons text-tertiary">star</span>
          <span className="material-icons text-tertiary">star</span>
          <span className="material-icons text-tertiary">star</span>
        </div>
      <div className="space-x-3">
      <button
        type="button"
        className="inline-block rounded bg-secondary text-light px-4 py-2 text-sm font-medium"
        data-te-ripple-init
        data-te-ripple-color="light">
        Add to Cart
      </button>
      <button
        type="button"
        className="inline-block rounded bg-tertiary text-dark px-4 py-2 text-sm font-medium"
        data-te-ripple-init
        data-te-ripple-color="light">
        Trade In
      </button>
      </div>
    </div>
  </div>


            </div>


          );
        }))}


        </div>

        </section> 
    )
}

export default ProductCards;

