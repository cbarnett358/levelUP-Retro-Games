//make react component
import React from 'react';


function QuickLinks() {


    return (
        <section
className=' bg-tertiary flex justify-center items-center h-fit py-8
-mt-28 mx-20 drop-shadow-lg rounded-2xl
'


>
<div className="flex 
justify-between  space-x-20 text-center


">
  <div >
  <span className="material-icons text-dark">sell</span> 
   <h2 className='text-dark font-mainfont text-2xl'>Trade In</h2> 
<p className='
px-4 text-dark text-center content'>Got usessspod retro games? Trade them in today for cash or store credit.</p>

   <button className='
            
            text-pink-600
            font-bold
            py-2
            px-4
            underline
            rounded-lg
            
            '>Get Started</button>
    </div>
  <div className="">
     <span className="text-dark material-icons">sell</span> 
   <h2 className='text-dark'>Trade In</h2> 
<p className='
px-4 text-dark'>Got used retro games? Trade them in today for cash or store credit.</p>

   <button className='
            
            text-pink-600
            font-bold
            py-2
            px-4
            underline
            rounded-lg
            
            '>Get Started</button></div>
  <div className=""> 
  <span className="text-dark material-icons">sell</span> 
   <h2 className='text-dark'>Trade In</h2> 
<p className='
px-4 text-dark'>Got used retro games? Trade them in today for cash or store credit.</p>

   <button className='
            
            text-pink-600
            font-bold
            py-2
            px-4
            underline
            rounded-lg
            
            '>Get Started</button></div>
</div>

  </section>
        
    )
}

export default QuickLinks;

