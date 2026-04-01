import type { CSSProperties } from 'react';
import DataState from './DataState';
import ProductCard from './ProductCard';
import SectionHeading from './SectionHeading';
import type { Product } from '../types/product';

type PopularCarouselProps = {
  carouselIndex: number;
  carouselProducts: Product[];
  isCarouselAnimating: boolean;
  isProductsLoading: boolean;
  productsError: string;
  onCarouselTransitionEnd: () => void;
  onGoProducts: () => void;
  onOpenProduct: (product: Product) => void;
  onShowNextSlide: () => void;
  onShowPreviousSlide: () => void;
};

function PopularCarousel({
  carouselIndex,
  carouselProducts,
  isCarouselAnimating,
  isProductsLoading,
  productsError,
  onCarouselTransitionEnd,
  onGoProducts,
  onOpenProduct,
  onShowNextSlide,
  onShowPreviousSlide,
}: PopularCarouselProps) {
  return (
    <section className="popular-section">
      <SectionHeading label="Popular Products" title="人気商品" />
      <div className="popular-carousel-shell">
        <div className="popular-copy">
          <p>人気商品を横一列に配置し、5秒ごとに次の商品群へスライドします。</p>
        </div>
        <div className="popular-viewport">
          {isProductsLoading ? (
            <DataState message="商品を読み込んでいます..." />
          ) : productsError ? (
            <DataState message={productsError} />
          ) : (
            <div
              className={`popular-track ${isCarouselAnimating ? 'is-animating' : ''}`}
              onTransitionEnd={onCarouselTransitionEnd}
              style={{ '--carousel-index': carouselIndex } as CSSProperties}
            >
              {carouselProducts.map((product, index) => (
                <ProductCard
                  key={`${product.id}-${index}`}
                  product={product}
                  className="popular-product-card"
                  onClick={() => onOpenProduct(product)}
                />
              ))}
            </div>
          )}
        </div>
        <button
          className="carousel-arrow carousel-arrow-left"
          type="button"
          onClick={onShowPreviousSlide}
          aria-label="前の商品へ移動"
        >
          <span>‹</span>
        </button>
        <button
          className="carousel-arrow carousel-arrow-right"
          type="button"
          onClick={onShowNextSlide}
          aria-label="次の商品へ移動"
        >
          <span>›</span>
        </button>
        <div className="popular-actions">
          <button className="primary-button popular-button" type="button" onClick={onGoProducts}>
            商品一覧へ
          </button>
        </div>
      </div>
    </section>
  );
}

export default PopularCarousel;
