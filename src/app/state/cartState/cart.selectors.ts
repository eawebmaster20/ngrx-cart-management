import { createSelector } from "@ngrx/store";

export const counterSelectorFeature = (state:number)=>state;
export const incrementItemQuantitySelector = createSelector(counterSelectorFeature, (state:number)=>state)