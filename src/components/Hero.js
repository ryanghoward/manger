import React from "react";

const Hero = () => {
  return (
    <div className='mx-w-[1640px] mx-auto p-4'>
      <div className='max-h-[500px] relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-gray-200 mx-h-[500px] bg-black/40 flex flex-col justify-center'>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
            The <span className='text-pink-500'>Best</span>
          </h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
            {/* <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-cyan-500'> */}
            <span className='text-pink-500'>Foods </span>
            Delivered
          </h1>
        </div>
        <img
          className='w-full max-h-[500px] object-cover'
          src='https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='/'
        />
      </div>
    </div>
  );
};

export default Hero;
