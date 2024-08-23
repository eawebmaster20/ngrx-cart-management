import { createReducer, on } from "@ngrx/store";
import { addToCart, clearCart, increaseQuantity, fetchProducts, fetchProductsSucess, decreaseQuantity, removeFromCart } from "./cart.actions";
import { ICart, IProduct } from "../../interfaces/product-item";

export interface CartState {
  items: ICart[];
  productList: IProduct[];  
}
const cartInitialState:CartState={
  items: [],
  productList: []
}
export const cartReducer = createReducer(
    cartInitialState,
    on(addToCart, (state, {product})=>({...state, items:[...state.items, product]})),
    on(removeFromCart, (state, {productId})=>({...state, items:state.items.filter(item=>item.id !== productId)})),
    on(clearCart, state=>({...state, item:[]})),
    on(fetchProducts, (state) => state),
    on(fetchProductsSucess, (state, { payload }) => ({...state, productList: payload})),
    on(increaseQuantity, (state, { productId }) => ({
      ...state,
      items: state.items.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    })),
    on(decreaseQuantity, (state, { productId }) => ({
      ...state,
      items: state.items.map(item =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    }))
  );