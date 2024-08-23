import { createAction, props } from "@ngrx/store";
import { ICart, IProduct } from "../../interfaces/product-item";


export const actionList={
    FETCH_PRODUCTS: '[Product list component] fetch products',
    ADD_TO_CART: '[Product] add to cart',
    REMOVE_FROM_CART: '[Product] remove from cart',
    CLEAR_CART: '[Product] clear cart',
    FETCH_PRODUCTS_SUCCESS: '[product list] api call success',
    INCREMENT_ITEM_QUANTITY: '[Counter Component] Increment counter',
    DECREMENT_ITEM_QUANTITY: '[Counter Component] Decrement',
    DELETE_CART_ITEM: '[Counter Component] Decrement',
}
export const addToCart = createAction(actionList.ADD_TO_CART, props<{product:ICart}>());
export const removeFromCart = createAction(actionList.REMOVE_FROM_CART, props<{productId: number}>());
export const clearCart = createAction(actionList.CLEAR_CART);
export const fetchProducts = createAction(actionList.FETCH_PRODUCTS);
export const fetchProductsSucess = createAction(actionList.FETCH_PRODUCTS_SUCCESS, props<{ payload: IProduct[] }>());
// export const increaseItemQuantityAction = createAction(actionList.INCREMENT_ITEM_QUANTITY, props<{payload:IProduct[]}>);
// export const decreaseItemQuantityAction = createAction(actionList.DECREMENT_ITEM_QUANTITY);
export const increaseQuantity = createAction(
    actionList.INCREMENT_ITEM_QUANTITY,
    props<{ productId: number }>()
  );
  
  export const decreaseQuantity = createAction(
    actionList.DECREMENT_ITEM_QUANTITY,
    props<{ productId: number }>()
  );