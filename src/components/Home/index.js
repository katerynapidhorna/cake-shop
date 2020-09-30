import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchAllProductsThunk from "../../store/products/actions";
import selectProducts from "../../store/products/selectors";
import { Link } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchAllProductsThunk());
  }, [dispatch]);

  console.log(products);
  return (
    <div>
      <div className="products-container">
        {products &&
          products.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/cupcakes/${item.id}`}>
                  <img src={item.imgUrl} />
                </Link>
                <h3>{item.name}</h3>
              </div>
            );
          })}
      </div>
    </div>
  );
}
