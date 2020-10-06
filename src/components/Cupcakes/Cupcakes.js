import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {useHistory} from "react-router-dom"

import { Button } from "react-bootstrap";

import fetchAllProductsThunk from "../../store/products/actions";
import selectProducts from "../../store/products/selectors";

export default function Cupcakes() {
  const history = useHistory();
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchAllProductsThunk());
  }, [dispatch]);

  console.log(products);

  const goToCupCake = (id) => {
    history.push(`/cupcakes/${id}`);
  };

  return (
    <div>
      <div className="products-container" margin-bottom="2rem">
        {products &&
          products.map((item) => {
            return (
              <div key={item.id}>
                <img src={item.imgUrl} />
                <h3>{item.name}</h3>
                <h3>{`€${item.price}`}</h3>
                <h3> {`Ingredients: ${item.ingredients}`}</h3>
                <Button onClick={() => goToCupCake(item.id)} variant="dark" size="lg" >
    +
  </Button>
              </div>
            );
          })}
      </div>
    </div>
  );
}