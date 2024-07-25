import React from 'react';
import arrow_icon from "../assets/arrow_icon.png";

const Breadcrumb = (props) => {
  const { product } = props;

  return (
    <div className='flex items-center space-x-2 text-sm text-gray-600'>
      <span>HOME</span>
      <img className='w-3 h-3' src={arrow_icon} alt="arrow icon" />
      <span>SHOP</span>
      <img className='w-3 h-3' src={arrow_icon} alt="arrow icon" />
      <span>{product.category}</span>
      <img className='w-3 h-3' src={arrow_icon} alt="arrow icon" />
      <span>{product.name}</span>
    </div>
  );
}

export default Breadcrumb;
