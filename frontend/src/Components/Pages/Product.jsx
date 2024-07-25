import React ,{useContext} from "react";
import { useParams } from "react-router-dom";
import {ShopContext} from "../../context/ShopContext";
import Breadcurm from "../Breadcrums/Breadcurm";
import ProductDisplay from "../ProductDisplay/ProductDisplay";

const Product = () => {
  const {products} =  useContext(ShopContext);
  const {productId} = useParams();
  const product = products.find((e) => e.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }
  return (

    <div>
      <Breadcurm product={product}/>
      <ProductDisplay product = {product} />
    </div>
  )
};

export default Product;
