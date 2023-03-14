//make react component
import React from 'react';
import Image from 'next/image';


function MainHeader() {


    return (
        <section
        className="bg-primary ">
         <nav className='drop-shadow-lg  p-8 mb-0 flex justify-between text-white'>
 <div className="flex ">
        <Image src="/levelUP_Logo.png " alt="levelUP Games" width={200} height={200} className="" /> 
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

