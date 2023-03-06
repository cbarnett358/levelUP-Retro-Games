//make react component
import React from 'react';


function HeroSection() {


    return (
        <section className='
        z-0
        flex
        justify-center
        items-center
        h-fit
        drop-shadow-lg
        pt-20
        pb-60

        bg-gray-800
        '>
          <div className='
          flex
          flex-col
          mx-4
          text-center
          items-center
          '>

            <h1 className='
            text-6xl
            font-bold
            text-white

            '>levelUP Games</h1>
            <p className='
            text-2xl
            text-white
            '>The best place to find the latest and greatest games</p>
            <button className='
            bg-pink-600
            text-white
            font-bold
            py-4
            px-8

            rounded-lg
            mt-6
            '>Get Started</button>
          </div>
        </section>
    )
}

export default HeroSection;

