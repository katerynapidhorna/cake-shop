import { combineReducers } from "redux";
import products from "./products/reducer";
import productDetail from "./productDetail/reducer"

export default combineReducers({
  products,
  productDetail,
});
