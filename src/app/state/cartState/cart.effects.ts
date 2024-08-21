import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { decreaseItemQuantityAction, deleteCartItem, increaseItemQuantityAction, reset } from './cart.actions';
import { IProduct } from '../../interfaces/product-item';

@Injectable()
export class CartEffects {
  constructor(
    private actions: Actions,
    // private counterLogiService: LogicService,
    private store: Store<{Products:IProduct}>
  ) {}

  loggerEffect = createEffect(
    () =>
      this.actions.pipe(
        ofType(increaseItemQuantityAction, decreaseItemQuantityAction, deleteCartItem, reset),
        tap((action) => {
           console.log(action); 
        })
      ),
    { dispatch: false }
  );

  beyondZeroErrorEffect = createEffect(
    () =>
      this.actions.pipe(
        ofType(increaseItemQuantityAction),
        withLatestFrom(this.store.select('Products')), 
        tap((res) => {
          console.log(res)
          // console.log(counterState)
            // if (action.type === '[Counter Component] Decrement' && counterState ===0) {
            //     this.counterLogiService.minimumCounterReached = true;                
            //     setTimeout(() => {
            //         this.counterLogiService.minimumCounterReached = false
            //         this.counterLogiService.logAction(action.type)
            //     }, 1000);
            //     console.log(`Action: ${action.type} triggered. Current counter state: ${counterState}`);
            // }
        })
      ),
    { dispatch: false } 
  );
}
