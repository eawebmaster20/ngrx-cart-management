import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ICart } from '../../interfaces/product-item';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
    @Input() cart: ICart[] = [];
    @Input() totalOrder: number = 0;
    @Input() variables: any;
    
    @Output() orderConfirmed = new EventEmitter<void>();
    @Output() removeItemFromCart = new EventEmitter<number>();
  
    trackById(index: number, item: ICart) {
      return item.id;
    }
  
    confirmOrder() {
      this.orderConfirmed.emit();
    }
  
    removeItem(productId: number) {
      this.removeItemFromCart.emit(productId);
    }
}
