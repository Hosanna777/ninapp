import type { CartItem } from '../../../types/cart';
import type { Product } from '../../../types/product';
import { formatPrice, parsePrice } from '../../../utils/cart';

export function addCartItem(items: CartItem[], product: Product) {
  const existingItem = items.find((item) => item.product.id === product.id);
  if (existingItem) {
    return items.map((item) =>
      item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
    );
  }

  return [...items, { product, quantity: 1 }];
}

export function updateCartItemQuantity(items: CartItem[], productId: number, delta: number) {
  return items
    .map((item) =>
      item.product.id === productId ? { ...item, quantity: item.quantity + delta } : item,
    )
    .filter((item) => item.quantity > 0);
}

export function removeCartItem(items: CartItem[], productId: number) {
  return items.filter((item) => item.product.id !== productId);
}

export function getTotalCartItems(items: CartItem[]) {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}

export function getSubtotalText(items: CartItem[]) {
  const subtotal = items.reduce(
    (sum, item) => sum + parsePrice(item.product.price) * item.quantity,
    0,
  );

  return formatPrice(subtotal);
}

export function getCartPreviewText(items: CartItem[]) {
  return items.length > 0
    ? items
        .slice(0, 2)
        .map((item) => item.product.name)
        .join(' / ')
    : 'まだ商品が追加されていません';
}
