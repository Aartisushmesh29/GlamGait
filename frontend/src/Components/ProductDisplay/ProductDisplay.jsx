import React, { useContext } from 'react';
import star_icon from "../assets/star_icon.png";
import star_icon_dull from "../assets/star_icon_dull.png";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext);
  return (
    <div className='max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md'>
      <div className='flex flex-col md:flex-row'>
        <div className='flex md:flex-col md:w-1/4 space-x-2 md:space-x-0 md:space-y-2 mb-4 md:mb-0'>
          <img className='w-24 h-24 object-cover border' src={product.image} alt="Product Thumbnail" />
          <img className='w-24 h-24 object-cover border' src={product.image} alt="Product Thumbnail" />
          <img className='w-24 h-24 object-cover border' src={product.image} alt="Product Thumbnail" />
          <img className='w-24 h-24 object-cover border' src={product.image} alt="Product Thumbnail" />
        </div>
        <div className='flex-1'>
          <img className='w-full h-96 object-cover rounded-md' src={product.image} alt="Product Main" />
        </div>
      </div>
      <div className='mt-6'>
        <h1 className='text-3xl font-bold text-gray-800 mb-2'>{product.name}</h1>
        <div className='flex items-center mb-4'>
          <img className='w-5 h-5' src={star_icon} alt="Star Icon" />
          <img className='w-5 h-5' src={star_icon} alt="Star Icon" />
          <img className='w-5 h-5' src={star_icon} alt="Star Icon" />
          <img className='w-5 h-5' src={star_icon} alt="Star Icon" />
          <img className='w-5 h-5' src={star_icon_dull} alt="Dull Star Icon" />
          <p className='text-sm text-gray-600 ml-2'>(122)</p>
        </div>
        <div className='flex items-center mb-4'>
          <div className='text-gray-500 line-through mr-2'>${product.old_price}</div>
          <div className='text-red-600 font-semibold text-xl'>${product.new_price}</div>
        </div>
        <div className='mb-4 text-gray-700'>
          Step into unparalleled comfort with our Premium Comfort Running Shoes. Designed with advanced foam cushioning, a breathable mesh upper, and a durable rubber outsole for superior grip, these shoes provide the perfect blend of style and functionality. Ideal for both casual wear and workouts.
        </div>
        <div className='mb-4'>
          <h2 className='text-lg font-semibold text-gray-800 mb-2'>Select Size</h2>
          <div className='flex space-x-2'>
            <div className='p-2 border rounded cursor-pointer'>S</div>
            <div className='p-2 border rounded cursor-pointer'>M</div>
            <div className='p-2 border rounded cursor-pointer'>L</div>
            <div className='p-2 border rounded cursor-pointer'>XL</div>
            <div className='p-2 border rounded cursor-pointer'>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}} className='w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300'>ADD TO CART</button>
        <div className='mt-4 text-gray-600'>
          <p><span className='font-semibold'>Category:</span> Women, Shoes, Sandal</p>
          <p><span className='font-semibold'>Tags:</span> Modern Latest, Shoes, Sandal</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
