import DataState from '../components/DataState';
import ProductCard from '../components/ProductCard';
import SectionHeading from '../components/SectionHeading';
import type { Product } from '../types/product';

type ProductsViewProps = {
  isProductsLoading: boolean;
  products: Product[];
  productsError: string;
  onOpenProduct: (product: Product) => void;
};

function ProductsView({
  isProductsLoading,
  products,
  productsError,
  onOpenProduct,
}: ProductsViewProps) {
  return (
    <section className="featured-section">
      <SectionHeading label="Featured Products" title="商品一覧" />
      <div className="product-list-shell">
        <div className="product-list-header">
          <div>
            <span className="eyebrow">Product List</span>
            <h3>全商品</h3>
          </div>
          <p>商品画像、商品名、短い説明、価格を視線順に整理した一覧画面です。</p>
        </div>
        <div className="product-grid">
          {isProductsLoading ? (
            <DataState message="商品を読み込んでいます..." />
          ) : productsError ? (
            <DataState message={productsError} />
          ) : (
            products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => onOpenProduct(product)}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default ProductsView;
