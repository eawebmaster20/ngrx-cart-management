import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { VariablesService } from '../../services/variables.service';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { addToCart, decreaseQuantity, fetchProducts, increaseQuantity, removeFromCart } from '../../state/cartState/cart.actions';
import { fetchProductsSelector, selectCartItems, selectTotalOrder} from '../../state/cartState/cart.selectors';
import { ICart, IProduct } from '../../interfaces/product-item';
import { CartState } from '../../state/cartState/cart.reducer';
import { ModalComponent } from '../modal/modal.component';
import {
  MatDialog
} from '@angular/material/dialog';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  readonly dialog = inject(MatDialog);
  products: Observable<IProduct[]> = this.store.select(fetchProductsSelector);
  cart: Observable<ICart[]> = this.store.select(selectCartItems);
  totalOrder: Observable<any> = this.store.select(selectTotalOrder);
  constructor(
    public variables: VariablesService,
    private store: Store<{ cart: CartState }>
  ) {

    this.store.dispatch(fetchProducts());////////
    // this.products.subscribe((res) => {
    //   console.log('Products from selector:', res);  // Debug log to check the fetched products
    // });

    this.cart.subscribe(res => {
      // console.log('Cart items:', res);
    });

  }
  changeIcon(state:boolean, hoveredItem:string){
    this.variables[`${hoveredItem}`] = state
    console.log(this.variables[`${hoveredItem}`]);
    
  }

  getQuantity(product: IProduct): Observable<number> {
    return this.cart.pipe(
      map(cartItems => {
        const cartItem = cartItems.find(item => item.id === product.id);
        return cartItem ? cartItem.quantity : 0;
      })
    );
  }

  increaseQuantity(item: IProduct) {
    this.store.dispatch(increaseQuantity({ productId: item.id }));
  }

  decreaseQuantity(item: IProduct) {
    this.store.dispatch(decreaseQuantity({ productId: item.id }));
  }

  addToCart(product:any) {
    const item = {product:{...product, quantity:1}}
    console.log(item)
    this.store.dispatch(addToCart(item))
  }
  isInCart(product: IProduct): Observable<boolean> {
    return this.cart.pipe(
      map(items => items.some(item => item.id === product.id))
    );
  }
  removeFromCart(productId:number){
    this.store.dispatch(removeFromCart({productId:productId}))
  }

  confirmOrder(){
    this.variables.showModal = !this.variables.showModal
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.style.overflow="hidden"
  }

}

