type CartSummaryPanelProps = {
  hasItems: boolean;
  subtotalText: string;
  totalCartItems: number;
};

function CartSummaryPanel({
  hasItems,
  subtotalText,
  totalCartItems,
}: CartSummaryPanelProps) {
  return (
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
        <strong>{hasItems ? '無料' : '-'}</strong>
      </div>
      <button
        className="primary-button cart-checkout-button"
        type="button"
        disabled={!hasItems}
      >
        購入手続きへ
      </button>
    </aside>
  );
}

export default CartSummaryPanel;
