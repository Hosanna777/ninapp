import { useState } from 'react';
import type { CartItem } from '../../../types/cart';
import type { Product } from '../../../types/product';
import {
  addCartItem,
  getCartPreviewText,
  getSubtotalText,
  getTotalCartItems,
  removeCartItem,
  updateCartItemQuantity,
} from '../model/cart';

function useCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  return {
    cartItems,
    cartPreviewText: getCartPreviewText(cartItems),
    subtotalText: getSubtotalText(cartItems),
    totalCartItems: getTotalCartItems(cartItems),
    addToCart: (product: Product) => {
      setCartItems((current) => addCartItem(current, product));
    },
    removeFromCart: (productId: number) => {
      setCartItems((current) => removeCartItem(current, productId));
    },
    updateCartQuantity: (productId: number, delta: number) => {
      setCartItems((current) => updateCartItemQuantity(current, productId, delta));
    },
  };
}

export default useCart;
