import { createReducer, on } from "@ngrx/store";
import { decreaseItemQuantityAction, deleteCartItem, increaseItemQuantityAction, reset } from "./cart.actions";
import { IProduct } from "../../interfaces/product-item";

const cartInitialState:IProduct ={
    image: {
         thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
         mobile: "./assets/images/image-waffle-mobile.jpg",
         tablet: "./assets/images/image-waffle-tablet.jpg",
         desktop: "./assets/images/image-waffle-desktop.jpg"
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.50
 }
export const cartReducer = createReducer(
    cartInitialState,
    on(increaseItemQuantityAction, (state) => state),
    on(decreaseItemQuantityAction, (state) => state),
    on(deleteCartItem, (state) => state)
  );