import { Component, inject, input } from '@angular/core';
import { CartItem } from '../../../shared/models/cart';
import { CartService } from '../../../core/services/cart.service';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { CurrencyPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [
    RouterLink,
    MatIcon,
    CurrencyPipe,
    MatButton
  ],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  item = input.required<CartItem>();

  cartService = inject(CartService);

  incrementQuantity() {
    this.cartService.addItemToCart(this.item());
  }

  decrementQuantity() {
    this.cartService.removeItemFromCart(this.item().productId);
  }

  removeItemFromCart() {
    this.cartService.removeItemFromCart(this.item().productId, this.item().quantity);
  }
}
