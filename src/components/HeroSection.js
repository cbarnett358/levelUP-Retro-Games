//make react component
import React from 'react';
function HeroSection() {


    return (
        <section
        className='bg-light
        flex justify-center items-center h-fit pt-8 pb-40
 drop-shadow-lg 
        
        '
        >
      

      <div className="flex flex-col-reverse md:flex-row justify-center items-center mx-24">
        <div className="flex flex-col justify-center items-center md:items-start md:justify-start md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-secondary md:text-left 
          font-mainfont
          ">levelUP Your Collection</h1>
          <p className="text-dark text-center mt-2 md:text-left font-mainfont">We buy and sell retro games and consoles. also trade in also trade in also trade in also trade in also trade in also trade in also trade in also trade in also trade in also trade in also trade in also trade in We also trade in games for cash or store credit.</p>
          <div className="flex flex-col md:flex-row justify-center items-center mt-4 space-x-4">
            <button className='
            bg-secondary
            text-light
            font-bold
            py-2
            px-4
            font-mainfont
            rounded-lg
            '>Shop Now</button>
            <button className='
            bg-tertiary
            text-dark
            font-bold
            py-2
            px-4
            font-mainfont

            rounded-lg
            md:mr-4
            '>Trade In</button>

            </div>

        </div>
        <div className="flex justify-center items-center md:w-1/2">
          <img className='
          w-3/4
          '
          
          src="./leveluphero.png" alt="leveluphero" />
 
        </div>
      </div>


        </section>
        
    )
}

export default HeroSection;

