import DataState from '../components/DataState';
import type { Product } from '../types/product';

type ProductDetailViewProps = {
  product: Product | null;
  onAddToCart: (product: Product) => void;
  onGoCart: () => void;
  onGoProducts: () => void;
};

function ProductDetailView({
  product,
  onAddToCart,
  onGoCart,
  onGoProducts,
}: ProductDetailViewProps) {
  return (
    <section className="product-detail-section">
      <div className="product-detail-shell">
        {product ? (
          <>
            <div className="product-detail-media">
              <img className="product-detail-image" src={product.image} alt={product.name} />
            </div>
            <div className="product-detail-copy">
              <span className="eyebrow">{product.badge}</span>
              <h2>{product.name}</h2>
              <p className="product-detail-description">{product.description}</p>
              <p className="product-detail-lead">
                服にも部屋にもなじむ、やわらかな色と実用性を両立した NINApp の定番アイテムです。
                オフホワイトを基調にした暮らしへ自然に溶け込み、毎日の所作を少しだけ軽く見せます。
              </p>
              <strong className="product-detail-price">{product.price}</strong>
              <div className="product-detail-actions">
                <button className="primary-button" type="button" onClick={() => onAddToCart(product)}>
                  カートに追加
                </button>
                <button className="ghost-button" type="button" onClick={onGoCart}>
                  カートを見る
                </button>
                <button className="ghost-button" type="button" onClick={onGoProducts}>
                  商品一覧へ戻る
                </button>
              </div>
            </div>
          </>
        ) : (
          <DataState message="商品が見つかりません。" />
        )}
      </div>
    </section>
  );
}

export default ProductDetailView;
