import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, tap, map, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { actionList, decreaseQuantity, fetchProductsSucess, increaseQuantity } from './cart.actions';
import { IProduct } from '../../interfaces/product-item';
import { ApiService } from '../../services/apiservice/api.service';
import { EMPTY } from 'rxjs';

@Injectable()
export class CartEffects {
  constructor(
    private actions: Actions,
    private api: ApiService,
    private store: Store<{Products:IProduct}>
  ) {}

  loggerEffect = createEffect(
    () =>
      this.actions.pipe(
        ofType(increaseQuantity, decreaseQuantity),
        tap((action) => {
           console.log(action); 
        })
      ),
    { dispatch: false }
  );
  loadStoreProducts = createEffect(() =>
    this.actions.pipe(
      ofType(actionList.FETCH_PRODUCTS),
      exhaustMap(() =>
        this.api.fetchProducts().pipe(
          map((data) => {
            console.log('API data fetched:', data);  
            localStorage.setItem('data',JSON.stringify(data))
            return fetchProductsSucess({ payload: data });
          }),
          catchError((error) => {
            console.error('Error fetching products:', error);
            return EMPTY;
          })
        )
      )
    )
  );
  
  // loadStoreProducts = createEffect(() =>
  //   this.actions.pipe(
  //     ofType(actionList.FETCH_PRODUCTS),
  //     tap(() => console.log('Fetching products...')),
  //     exhaustMap(() =>
  //       this.api.fetchProducts().pipe(
  //         map((data) => fetchProductsSucess({ payload: data })), 
  //         catchError(() => EMPTY)
  //       )
  //     )
  //   )
  // );

}
