import SectionHeading from '../components/SectionHeading';
import type { CartItem } from '../types/cart';

type CartViewProps = {
  cartItems: CartItem[];
  subtotalText: string;
  totalCartItems: number;
  onGoProducts: () => void;
  onOpenProduct: (item: CartItem['product']) => void;
  onRemoveFromCart: (productId: number) => void;
  onUpdateCartQuantity: (productId: number, delta: number) => void;
};

function CartView({
  cartItems,
  subtotalText,
  totalCartItems,
  onGoProducts,
  onOpenProduct,
  onRemoveFromCart,
  onUpdateCartQuantity,
}: CartViewProps) {
  return (
    <section className="cart-section">
      <SectionHeading label="Shopping Cart" title="カート" />
      <div className="cart-shell">
        <div className="cart-list">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <article className="cart-item" key={item.product.id}>
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
            ))
          ) : (
            <div className="cart-empty-state">
              <h3>カートは空です</h3>
              <p>気になる商品を追加すると、ここに一覧で表示されます。</p>
              <button className="primary-button" type="button" onClick={onGoProducts}>
                商品一覧を見る
              </button>
            </div>
          )}
        </div>
        <aside className="cart-summary">
          <span className="eyebrow">Summary</span>
          <h3>注文概要</h3>
          <div className="cart-summary-row">
            <span>商品数</span>
            <strong>{totalCartItems}</strong>
          </div>
          <div className="cart-summary-row">
            <span>小計</span>
            <strong>{subtotalText}</strong>
          </div>
          <div className="cart-summary-row">
            <span>配送</span>
            <strong>{cartItems.length > 0 ? '無料' : '-'}</strong>
          </div>
          <button
            className="primary-button cart-checkout-button"
            type="button"
            disabled={cartItems.length === 0}
          >
            購入手続きへ
          </button>
        </aside>
      </div>
    </section>
  );
}

export default CartView;
