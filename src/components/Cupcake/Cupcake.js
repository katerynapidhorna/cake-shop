import React, { useEffect } from "react";
import "./product.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import fetchProductDetailThunk from "../../store/productDetail/actions";
import productDetail from "../../store/productDetail/selectors";
import ProductForm from "./ProductForm";

export default function Cupcake() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(productDetail);

  useEffect(() => {
    dispatch(fetchProductDetailThunk(id));
  }, [dispatch]);

  console.log("product", product);

  return (
    <div className="product-wrap">
      <div>
        <img src={`${product.imgUrl}`}></img>
        <p>Name: {product.name}</p>
        <p>Ingredients: {product.ingredients}</p>
        <p>Price: {product.price}€</p>
      </div>
      <div>
        <ProductForm />
      </div>
    </div>
  );
}
