//make react component
import React from 'react';
import Image from 'next/image';


function MainHeader() {


    return (
        <section
        className="bg-purple-600 ">
         <nav className='drop-shadow-lg p-10 mb-0 flex justify-between text-white'>
 <div className="flex ">
         <span className="material-icons">menu</span> 
        <Image src="/levelUP_Logo.png " alt="levelUP Games" width={200} height={200} className="ml-4" /> 
        </div>
 
           <ul className='
           flex
          space-x-4
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

