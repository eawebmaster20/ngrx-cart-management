import { Injectable } from '@angular/core';
import { VariableData } from '../interfaces/variables';
import { IProduct } from '../interfaces/product-item';
@Injectable({
  providedIn: 'root'
})
export class VariablesService{
  [key: string]: any;
  showModal: boolean = false;
  imgUrls={
    reduceCart:'assets/reduce_cart.svg',
    reduceCartHovered:'assets/reduce_cart_hovered.svg',
    removeFromCart:'assets/remove_icon.svg',
    removeFromCartHovered:'assets/remove_icon_hovered.svg',
    addToCart:'assets/add_to_cart.svg',
    addToCartHovered:'assets/add_to_cart_hovered.svg',
    cartIcon:'assets/cart_icon.svg',
  }
  removeIconHovered:boolean = false
  addIconHovered:boolean = false
  cartInitialState:IProduct ={
    image: {
         thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
         mobile: "./assets/images/image-waffle-mobile.jpg",
         tablet: "./assets/images/image-waffle-tablet.jpg",
         desktop: "./assets/images/image-waffle-desktop.jpg"
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.50,
    id:1
 }
  constructor() {  }
}
