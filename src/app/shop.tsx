"use client";
import React, { useContext } from 'react';
import { CartContext } from './context';

const Shop = () => {
  const obj = useContext(CartContext);
  console.log(obj);

  const arr = [
    { name: "Joggers", id: 1 },
    { name: "Paints", id: 2 },
    { name: "T-Shirts", id: 3 },
  ];

  return (
    <div className="ml-10 bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
      <h1 className="text-left text-[24px] font-bold mb-4 text-gray-800">Shopping</h1>
      <ol className="list-decimal pl-6 space-y-3">
        {arr.map((val, i) => {
          return (
            <li
              key={i}
              className="flex justify-between items-center bg-gray-50 hover:bg-gray-100 p-3 rounded-md transition-all duration-200"
            >
              <span className="text-gray-700">{val.name}</span>
              <button
                className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600 transition-all duration-200"
                onClick={() => obj.add({ name: val.name, id: val.id })}
              >
                Add to Cart
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Shop;
