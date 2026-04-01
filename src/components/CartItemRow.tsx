import type { CartItem } from '../types/cart';

type CartItemRowProps = {
  item: CartItem;
  onOpenProduct: (product: CartItem['product']) => void;
  onRemoveFromCart: (productId: number) => void;
  onUpdateCartQuantity: (productId: number, delta: number) => void;
};

function CartItemRow({
  item,
  onOpenProduct,
  onRemoveFromCart,
  onUpdateCartQuantity,
}: CartItemRowProps) {
  return (
    <article className="cart-item">
      <button
        className="cart-item-media"
        type="button"
        onClick={() => onOpenProduct(item.product)}
        aria-label={`${item.product.name} の詳細を見る`}
      >
        <img
          src={item.product.image}
          alt={item.product.name}
          className="cart-item-image"
        />
      </button>
      <div className="cart-item-copy">
        <span className="eyebrow">{item.product.badge}</span>
        <h3>{item.product.name}</h3>
        <p>{item.product.description}</p>
        <strong>{item.product.price}</strong>
      </div>
      <div className="cart-item-controls">
        <div className="quantity-control">
          <button
            type="button"
            onClick={() => onUpdateCartQuantity(item.product.id, -1)}
            aria-label={`${item.product.name} の数量を減らす`}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            type="button"
            onClick={() => onUpdateCartQuantity(item.product.id, 1)}
            aria-label={`${item.product.name} の数量を増やす`}
          >
            +
          </button>
        </div>
        <button
          className="cart-remove-button"
          type="button"
          onClick={() => onRemoveFromCart(item.product.id)}
        >
          削除
        </button>
      </div>
    </article>
  );
}

export default CartItemRow;
