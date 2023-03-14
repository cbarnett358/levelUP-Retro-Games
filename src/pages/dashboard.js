import Head from 'next/head'
import 'material-icons/iconfont/material-icons.css';
import HeroSection from '@/components/HeroSection';
import QuickLinks from '@/components/QuickLinks';
import MainHeader from '@/components/MainHeader';
import { useEffect, useState } from 'react';
import ProductCards from '@/components/ProductCards';

//search for products by name, price, or category and return results



export default function Dashboard() {
const [dataResponse, setdataResponse] = useState([]);







  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = `http://localhost:3000/api/getdata`;
      const response = await fetch (apiUrlEndpoint);
      const res = await response.json();
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

      <main className='bg-white'>
       
    <MainHeader></MainHeader>

    <HeroSection></HeroSection>


    <QuickLinks></QuickLinks>
    <section className='container mx-20'>
       <div >
        <h2 className="text-2xl py-10">Shop Games</h2>



      
<ProductCards></ProductCards>


        <div className="flex justify-between">
          <div className="w-1/4">
            <div className="flex flex-col">
              <h3 className="text-xl">Sort By</h3>
              <div className="flex flex-col">
                <label className="inline-flex items-center mt-3">
                  <input type="radio" className="form-radio" name="accountType" value="personal" />
                  <span className="ml-2">Price: Low to High</span>
                </label>
                <label className="inline-flex items-center mt-3">
                  <input type="radio" className="form-radio" name="accountType" value="personal" />
                  <span className="ml-2">Price: High to Low</span>
                </label>
                <label className="inline-flex items-center mt-3">

                  <input type="radio" className="form-radio" name="accountType" value="personal" />
                  <span className="ml-2">Newest</span>
                </label>
                <label className="inline-flex items-center mt-3">
                  <input type="radio" className="form-radio" name="accountType" value="personal" />

                  <span className="ml-2">Oldest</span>

                </label>

              </div>

            </div>

          </div>

          <div className="w-3/4">
            <div className="flex flex-wrap justify-between">

    </div>
          </div>
        </div>  


        <div className="flex justify-left mt-4">
  
</div>
       </div>
        </section>

      


      </main>
    </>
  )
}