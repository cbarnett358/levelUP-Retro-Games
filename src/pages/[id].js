import 'material-icons/iconfont/material-icons.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';




export default function Home() {
    const router = useRouter();
    const {id} = router.query;
    const [dataResponse, setdataResponse] = useState([]);

  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = `http://localhost:3000/api/getdata-lib`;
      const postData = {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id 
          
        }),
      };


      const response = await fetch (apiUrlEndpoint, postData);
      const res = await response.json();
      setdataResponse(res.products);
    }
    getPageData();
  }, [router.query.id, router.isReady]);

  return (
    
    <div className="container">
{dataResponse.map((product) => {
  <p>ss</p>
  return (
    <div key={product.product_id}>
      <h1>{product.product_name}</h1>
      <p>{product.product_description}</p>
      <p>{product.product_price}</p>
      
    </div>
  );
})}

    </div>
  )
}





