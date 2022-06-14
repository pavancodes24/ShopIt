import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  productsReducer,
  newProductReducer,
  productReducer,
  productDetailsReducer,
  newReviewReducer,
  productReviewsReducer,
  reviewReducer,
} from "../redux/reducers/productsReducer";

import {
  authReducer,
  userReducer,
  forgotPasswordReducer,
  allUsersReducer,
  userDetailsReducer,
} from "../redux/reducers/userReducers";

import { cartReducer } from "../redux/reducers/cartReducer";
import {
  newOrderReducer,
  myOrdersReducer,
  orderDetailsReducer,
  allOrdersReducer,
  orderReducer,
} from "../redux/reducers/orderReducer";

const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  newProduct: newProductReducer,
  product: productReducer,
  productReviews: productReviewsReducer,
  review: reviewReducer,
  auth: authReducer,
  user: userReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  allOrders: allOrdersReducer,
  orderDetails: orderDetailsReducer,
  order: orderReducer,
  newReview: newReviewReducer,
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
