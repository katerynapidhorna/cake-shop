import axios from "axios";



export function setProductDetail(data) {
  return {
    type: "FETCH_PRODUCT_DETAIL_SUCCESS",
    payload: data,
  };
}


export default function fetchProductDetailThunk(id) {
  return async (dispatch, getState) => {
    const productDetail = await axios.get(
      `http://localhost:5000/cupcakes/${id}`
      );
    console.log(productDetail.data);
    dispatch(setProductDetail(productDetail.data));
  };
}


