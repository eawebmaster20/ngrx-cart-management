import { createSelector } from "@ngrx/store";
import { CartState } from "./cart.reducer";
import { ICart } from "../../interfaces/product-item";

export const counterSelectorFeature = (state:number)=>state;
export const incrementItemQuantitySelector = createSelector(counterSelectorFeature, (state:number)=>state)


export const fetchProductsSelectorFeature = (state:any)=>state.cart;
export const fetchProductsSelector = createSelector(fetchProductsSelectorFeature, (state: CartState) => state.productList)

export const selectCart = (state:any)=>state.cart;
export const selectCartItems = createSelector(selectCart, (state:CartState)=>state.items)

export const selectTotalOrder = createSelector(
    selectCartItems,
    (cartItems: ICart[]) => cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  );