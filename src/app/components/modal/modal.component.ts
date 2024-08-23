import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ICart } from '../../interfaces/product-item';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { selectCartItems, selectTotalOrder } from '../../state/cartState/cart.selectors';
import { CartState } from '../../state/cartState/cart.reducer';
import { Store } from '@ngrx/store';
import { VariablesService } from '../../services/variables.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
    // @Input() cart: ICart[] = [];
    // @Input() totalOrder: number = 0;
    // @Input() variables: any;
    
    // @Output() orderConfirmed = new EventEmitter<void>();
    // @Output() removeItemFromCart = new EventEmitter<number>();
    data = inject(MAT_DIALOG_DATA);
    cart: Observable<ICart[]> = this.store.select(selectCartItems);
    totalOrder: Observable<any> = this.store.select(selectTotalOrder);
    constructor(
      public variables: VariablesService,
      private store: Store<{ cart: CartState }>
    ){
      console.log(this.data);
    }
    trackById(index: number, item: ICart) {
      return item.id;
    }
  
    confirmOrder() {
      // this.orderConfirmed.emit();
    }
  
    removeItem(productId: number) {
      // this.removeItemFromCart.emit(productId);
    }
}
