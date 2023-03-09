import Head from 'next/head'
import 'material-icons/iconfont/material-icons.css';
import HeroSection from '@/components/HeroSection';
import QuickLinks from '@/components/QuickLinks';
import MainHeader from '@/components/MainHeader';
import { useEffect, useState } from 'react';
 

export default function Home() {
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
    <>
      <Head>
        <title>levelUP Games</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
       
    <MainHeader></MainHeader>

    <HeroSection></HeroSection>

    <QuickLinks></QuickLinks>
    <section>
       <div className='container pt-10 mx-20'>
        <h2 className="text-2xl">Shop Games</h2>


        <div>
        {dataResponse.map((product => {
          return(
            <div key={product.product_id}>
            <div className="text-2xl text-secondary">{product.product_name}</div>
            <div className="text-dark">{product.product_description}</div>
            </div>


          );
        }))}


        </div>

        <div className="flex justify-left mt-4">
  <div
    className="block max-w-sm rounded-lg bg-light shadow-lg ">
    <a href="#!">
      <img 
        
        className="rounded-t-lg"
        src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
        alt="" />
    </a>
    <div className="p-6">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-pink-600 ">
        Card title
      </h5>
      <p className="mb-2 text-base text-neutral-800">
        Some quick example text to build on the card title and make up the
        bulk of the cards content.
      </p>
      <div className="flex mb-4 items-center">
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
        </div>
      <div className="space-x-3">
      <button
        type="button"
        className="inline-block rounded bg-pink-600 text-white px-4 py-2 text-sm font-medium"
        data-te-ripple-init
        data-te-ripple-color="light">
        Add to Cart
      </button>
      <button
        type="button"
        className="inline-block rounded bg-yellow-300 text-dark px-4 py-2 text-sm font-medium"
        data-te-ripple-init
        data-te-ripple-color="light">
        Trade In
      </button>
      </div>
    </div>
  </div>
</div>
       </div>
        </section>

      


      </main>
    </>
  )
}
