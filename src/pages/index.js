import Head from 'next/head'
import 'material-icons/iconfont/material-icons.css';
import HeroSection from '@/components/HeroSection';
import QuickLinks from '@/components/QuickLinks';
import MainHeader from '@/components/MainHeader';
import { useEffect, useState } from 'react';
import ProductCards from '@/components/ProductCards';
import Dashboard from './dashboard';

//search for products by name, price, or category and return results



export default function Home() {
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
    <Dashboard></Dashboard>
    
  )
  
}
