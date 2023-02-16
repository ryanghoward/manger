import React, { useState } from "react";
import { data } from "../data/data.js";

const Food = () => {
  // console.log(names);
  const [foods, setFoods] = useState(data);

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
      {/* Display Images */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='font-bold bg-pink-500 text-white p-1 rounded-full'>
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
