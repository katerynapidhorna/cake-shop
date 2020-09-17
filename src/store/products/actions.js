import Axios from "axios";

import axios from "axios";

export default function fetchAllProductsThunk() {
  return async (dispatch, getState) => {
    const products = await axios.get("http://localhost:5000/cupcakes");
    console.log(products);
    dispatch(setProducts(products.data));
  };
}

export function setProducts(data) {
  return {
    type: "SET_PRODUCTS",
    payload: data,
  };
}
