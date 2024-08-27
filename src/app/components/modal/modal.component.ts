import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ICart } from '../../interfaces/product-item';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { selectCartItems, selectTotalOrder } from '../../state/cartState/cart.selectors';
import { CartState } from '../../state/cartState/cart.reducer';
import { Store } from '@ngrx/store';
import { VariablesService } from '../../services/variables.service';
import { CommonModule } from '@angular/common';
import { clearCart, removeFromCart } from '../../state/cartState/cart.actions';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
    cart: Observable<ICart[]> = this.store.select(selectCartItems);
    totalOrder: Observable<any> = this.store.select(selectTotalOrder);
    constructor(
      public variables: VariablesService,
      private store: Store<{ cart: CartState }>
    ){
    }
    trackById(index: number, item: ICart) {
      return item.id;
    }
  
    confirmOrder(event: Event) {
      if((event.target as HTMLElement).getAttribute('id') === 'confirmOrder'){
        this.variables.showModal = !this.variables.showModal
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.body.style.overflow="scroll"
        this.store.dispatch(clearCart())
      }
    }
}
