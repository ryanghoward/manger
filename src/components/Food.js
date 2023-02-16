import React from "react";
import { data } from "../data/data.js";

const Food = () => {
  // console.log(names);
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-pink-500 font-bold text-4xl text-center'>
        Top Rated Menu Items
      </h1>
      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Filter Type */}
        <div>
          <p className='font-bold text-gray-700'>Filter by Type</p>
          <div className='flex justify-between flex-wrap'>
            <button className='m-1 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white'>
              All
            </button>
            <button className='m-1 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white'>
              Burgers
            </button>
            <button className='m-1 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white'>
              Pizzas
            </button>
            <button className='m-1 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white'>
              Salads
            </button>
            <button className='m-1 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white'>
              Chicken
            </button>
          </div>
        </div>
        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-700'>Filter by Price</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button className='m-1 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white'>
              $
            </button>
            <button className='m-1 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white'>
              $$
            </button>
            <button className='m-1 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white'>
              $$$
            </button>
            <button className='m-1 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white'>
              $$$$
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
