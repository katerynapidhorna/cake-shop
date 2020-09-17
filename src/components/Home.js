import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchAllProductsThunk from "../store/products/actions";
import selectProducts from "../store/products/selectors";

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchAllProductsThunk());
  }, [dispatch]);

  console.log(products);
  return (
    <div>
      <h1>Home page</h1>
      <div>
        {products &&
          products.map((item) => {
            return (
              <div key={item.id}>
                <h3>{item.name}</h3>
                <img src={item.imgUrl} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
