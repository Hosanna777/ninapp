import type { Product } from '../types/product';

type ProductCardProps = {
  product: Product;
  className?: string;
  onClick?: () => void;
};

function ProductCard({
  product,
  className = '',
  onClick,
}: ProductCardProps) {
  return (
    <button
      className={`product-card product-card-button ${className}`.trim()}
      type="button"
      onClick={onClick}
      aria-label={`${product.name} の商品詳細を見る`}
    >
      <div className="product-image-wrap">
        <img className="product-image" src={product.image} alt={product.name} />
        <span className="product-badge">{product.badge}</span>
      </div>
      <div className="product-content">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <strong>{product.price}</strong>
      </div>
    </button>
  );
}

export default ProductCard;
