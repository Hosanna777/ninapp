import type { CSSProperties } from 'react';
import ProductCard from '../components/ProductCard';
import SectionHeading from '../components/SectionHeading';
import DataState from '../components/DataState';
import { categories, stats, testimonials } from '../data/siteContent';
import type { Product } from '../types/product';

type HomeViewProps = {
  cartPreviewText: string;
  carouselIndex: number;
  carouselProducts: Product[];
  isCarouselAnimating: boolean;
  isProductsLoading: boolean;
  productsError: string;
  subtotalText: string;
  totalCartItems: number;
  onCarouselTransitionEnd: () => void;
  onGoProducts: () => void;
  onOpenProduct: (product: Product) => void;
  onShowNextSlide: () => void;
  onShowPreviousSlide: () => void;
};

function HomeView({
  cartPreviewText,
  carouselIndex,
  carouselProducts,
  isCarouselAnimating,
  isProductsLoading,
  productsError,
  subtotalText,
  totalCartItems,
  onCarouselTransitionEnd,
  onGoProducts,
  onOpenProduct,
  onShowNextSlide,
  onShowPreviousSlide,
}: HomeViewProps) {
  return (
    <>
      <div className="hero-grid">
        <section className="hero-copy">
          <span className="eyebrow">Spring 2026 Collection</span>
          <h1>日常をアップデートする、静かな主役のためのECサイト。</h1>
          <p>
            派手さではなく、質感と使い心地で選ばれるアイテムを集めたライフスタイルストア。
            モダンなビジュアルと明快な購入導線をひとつの体験にまとめました。
          </p>
          <div className="hero-actions">
            <button className="primary-button" type="button" onClick={onGoProducts}>
              商品一覧を見る
            </button>
            <button className="ghost-button" type="button">
              Lookbook
            </button>
          </div>
          <div className="stats-row">
            {stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <aside className="hero-panel">
          <div className="panel-card main-card">
            <span>Featured Drop</span>
            <h2>Form follows feeling.</h2>
            <p>厳選した3つの新作を、今週限定のキュレーションで紹介。</p>
          </div>
          <div className="panel-card floating-card">
            <span>Cart Preview</span>
            <strong>{totalCartItems} items</strong>
            <p>{cartPreviewText}</p>
            <em>Subtotal {subtotalText}</em>
          </div>
        </aside>
      </div>

      <section className="category-strip" id="story">
        {categories.map((category) => (
          <article className="category-card" key={category.name}>
            <p>{category.name}</p>
            <span>{category.count}</span>
          </article>
        ))}
      </section>

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

      <section className="editorial-band">
        <SectionHeading label="Editorial Focus" title="商品だけで終わらない体験設計" />
        <div className="editorial-grid">
          <article>
            <strong>Immersive layout</strong>
            <p>大きなタイポグラフィと余白を基調に、ブランド感のあるトップビューを構成。</p>
          </article>
          <article>
            <strong>Clear conversion path</strong>
            <p>カテゴリ、特集、商品カード、カート要約までを視線移動に合わせて配置。</p>
          </article>
          <article>
            <strong>Responsive by default</strong>
            <p>デスクトップとモバイル双方で崩れないレイアウトに調整し、操作密度も最適化。</p>
          </article>
        </div>
      </section>

      <section className="reviews-section" id="reviews">
        <SectionHeading label="Customer Voices" title="レビュー" />
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.name} className="testimonial-card">
              <p>{testimonial.quote}</p>
              <footer>{testimonial.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    </>
  );
}

export default HomeView;
