import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../assets/remove_icon.png'; // Correct import

const CartItems = () => {
  const { getTotalAmount, products, cartItems, removeFromCart } = useContext(ShopContext);

  // Calculate the subtotal
  const subtotal = products.reduce((sum, product) => {
    return sum + (product.new_price * cartItems[product.id]);
  }, 0);

  return (
    <div className="container mx-auto p-4">
      <div className="hidden md:grid grid-cols-6 gap-4 font-bold border-b-2 pb-2">
        <p className="col-span-1">Product</p>
        <p className="col-span-2">Title</p>
        <p className="col-span-1">Price</p>
        <p className="col-span-1">Quantity</p>
        <p className="col-span-1">Total</p>
      </div>
      <hr className="hidden md:block" />
      {products.map((product) => {
          if (cartItems[product.id] > 0) {
              return (
                  <div key={product.id} className="flex flex-col md:grid md:grid-cols-6 gap-4 items-center border-b-2 py-2">
              <div className="w-full md:w-auto col-span-1">
                <img src={product.image} alt={product.name} className="w-16 h-16 object-cover mx-auto md:mx-0" />
              </div>
              <p className="col-span-2 text-center md:text-left">{product.name}</p>
              <p className="col-span-1 text-center md:text-left">${product.new_price}</p>
              <div className="col-span-1 text-center md:text-left">
                <button className="px-4 py-2 bg-gray-200 rounded">{cartItems[product.id]}</button>
              </div>
              <p className="col-span-1 text-center md:text-left">${product.new_price * cartItems[product.id]}</p>
              <div className="col-span-1 text-center md:text-left">
                <p className="col-span-1">Remove</p>
                <img src={remove_icon} onClick={() => removeFromCart(product.id)} alt="Remove" className="w-6 h-6 cursor-pointer mx-auto md:mx-0" />
              </div>
            </div>
          );
        }
        return null;
      })}

      <div className="mt-8">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h1 className="text-2xl font-bold mb-4">Cart Totals</h1>
          <div>
            <div className="flex justify-between mb-2">
              <p className="text-lg">Subtotal</p>
              <p className="text-lg">${getTotalAmount()}</p>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between mb-2">
              <p className="text-lg">Shipping Fee</p>
              <p className="text-lg">Free</p>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold text-xl">
              <h3>Total</h3>
              <h3>${getTotalAmount()}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
