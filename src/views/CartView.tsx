import CartItemRow from '../components/CartItemRow';
import CartSummaryPanel from '../components/CartSummaryPanel';
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
              <CartItemRow
                key={item.product.id}
                item={item}
                onOpenProduct={onOpenProduct}
                onRemoveFromCart={onRemoveFromCart}
                onUpdateCartQuantity={onUpdateCartQuantity}
              />
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
        <CartSummaryPanel
          hasItems={cartItems.length > 0}
          subtotalText={subtotalText}
          totalCartItems={totalCartItems}
        />
      </div>
    </section>
  );
}

export default CartView;
