import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { cartReducer } from './state/cartState/cart.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { CartEffects } from './state/cartState/cart.effects';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideStore(),
    provideHttpClient(withFetch()),
    provideState({
      name: 'cart',
      reducer:cartReducer
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: false }),
    provideEffects(CartEffects), provideAnimationsAsync(),
  ],
};
