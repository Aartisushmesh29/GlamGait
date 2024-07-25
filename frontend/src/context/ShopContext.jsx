import React, { useState } from 'react'

import data_product from "../Components/assets/data.js"

export const ShopContext = React.createContext(null);

const getDefaultCart = ()=>{
  let cart = {};
  for(let index  = 0 ; index < data_product.length+1; index++ ){
    cart[index] = 0;
  }
  return cart;
}
const ShopContextProvider = (props) =>{
    const [products,setProducts] = useState(data_product);
    const [cartItems , setCartItems]  = useState(getDefaultCart());
    const addToCart =(itemId)=>{
      setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}))
      console.log(itemId)
    }
    const removeFromCart =(itemId)=>{
      setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
    }
    const getTotalAmount =() =>{
      let totalAmount = 0;
      for(const item in cartItems){
        if(cartItems[item]>0){
          let itemInfo = data_product.find((products)=>products.id === Number(item));
          if(itemInfo){
        
            totalAmount += itemInfo.new_price *cartItems[item];
          }
        }
      }
      return totalAmount;
    }
     return (
      <ShopContext.Provider value = {{products, cartItems ,addToCart,removeFromCart,getTotalAmount}}>
          {props.children}
        </ShopContext.Provider>


    )
}
export default ShopContextProvider;
