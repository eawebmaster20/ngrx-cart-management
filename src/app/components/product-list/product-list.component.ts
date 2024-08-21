import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VariablesService } from '../../services/variables.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increaseItemQuantityAction } from '../../state/cartState/cart.actions';
import { IProduct } from '../../interfaces/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  // @Input() set Product(prod: Product) {
  //   this.product = prod;
  //   if (prod?.previousPrice > prod?.currentPrice)
  //     this.discount = ((prod.previousPrice - prod.currentPrice) / prod.previousPrice) * 100;
  //   // console.log(this.discount);
  //   console.log(prod);
  //   this.photoUrl = StoreService.getPhotoUrlByDisplayTypeLocal(this.product.photos, PHOTO_DISPLAY_TYPES.COVER, true, true);
  // }


  // get Product() {
  //   return this.product;
  // }
  counter:Observable<IProduct> = this.store.select('Products');
  constructor(
    public variables:VariablesService,
    private store:Store<{Products:IProduct}>
  ){
    
  }
  changeIcon(state:boolean, hoveredItem:string){
    this.variables[`${hoveredItem}`] = state
    console.log(this.variables[`${hoveredItem}`]);
    
  }
  goToProduct() {
  //   this.storeService.setSelectedProductLocal(this.product).then(() => {
  //     this.router.navigateByUrl(Urls.productDetails + '/' + this.product?.id);
  //   });
  }

  getCategory() {
    // if (this.product?.productCategoryItems?.length > 0) {
    //   return this.product?.productCategoryItems[0]?.name
    // }
    // return '';
  }


  // get IsNew() {
  //   if (UtilityService.calcDatesDiffInDays(this.product?.dateCreated) <= 7) // within 7 days means new
  //     return true;
  //   return false;
  // }

  increaseProductInCart(){
    this.store.dispatch(increaseItemQuantityAction())
  }

  addToCart() {

  }
}

