import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import fetchProductDetailThunk from "../../store/productDetail/actions";
import productDetail from "../../store/productDetail/selectors";

export default function Cupcake() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(productDetail);

  useEffect(() => {
    dispatch(fetchProductDetailThunk(id));
  }, [dispatch]);

  console.log("product", product);

  return (
    <div>
      <h2>Cupcake</h2>
      {/* <img
      src={`${product.imgUrl}`}></img>; */}
    </div>
  );
}
