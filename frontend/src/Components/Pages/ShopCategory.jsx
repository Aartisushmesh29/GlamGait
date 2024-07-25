import React, { useState } from "react";
import Item from "../Item/Item.jsx";
import data_product from "../assets/data.js";
import dropdown_icon from "../assets/dropdown_icon.png"
const ShopCategory = ({ category , banner }) => {
  let products = [];

  switch (category) {
    case "women":
      products = data_product.filter((product) => product.category === "Women");
      break;
    case "men":
      products = data_product.filter((product) => product.category === "Men");
      break;
    case "kids":
      products = data_product.filter((product) => product.category === "Kids");
      break;
    default:
      // Handle default case or error
      break;
  }  

  

  return (
    <div className="grid justify-items-center dark:bg-gray-900">
      <div className="flex flex-col justify-center">
        <h1 className="text-center text-4xl py-6 uppercase dark:text-gray-50">
          Popular in {category}
        </h1>
        <img className="mb-4" src={banner} alt="" />
        <div>Showing 1 to 12 out of 36 
          <button > 
            <input type="" />
            Sort by 
            <img className="h-6" src={dropdown_icon} alt="" />
            </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center hover:border-blue-400 dark:hover:border-blue-400">
          {products.map((item,i) => (
            <Item
              key={i} // Ensure a unique key, preferably the product ID
              id={item.id}
              category={category}
              name={item.name}
              image={item.image}
              old_price={item.old_price}
              new_price={item.new_price}
            />
          ))}
        </div>
        
      
      <div className="flex justify-center items-center ml-80 m-40 w-40 h-11 rounded-full bg-slate-300 text-gray-600 font-bold">
        Show More
      </div>
      </div>
    </div> 
  );
};

export default ShopCategory;