import { createAction } from "@ngrx/store";

export const increaseItemQuantityAction = createAction('[Counter Component] Increment counter');
export const decreaseItemQuantityAction = createAction('[Counter Component] Decrement');
export const deleteCartItem = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');