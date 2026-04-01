import CategoryStrip from '../components/CategoryStrip';
import EditorialSection from '../components/EditorialSection';
import HeroSection from '../components/HeroSection';
import PopularCarousel from '../components/PopularCarousel';
import TestimonialsSection from '../components/TestimonialsSection';
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
      <HeroSection
        cartPreviewText={cartPreviewText}
        subtotalText={subtotalText}
        totalCartItems={totalCartItems}
        onGoProducts={onGoProducts}
      />
      <CategoryStrip />
      <PopularCarousel
        carouselIndex={carouselIndex}
        carouselProducts={carouselProducts}
        isCarouselAnimating={isCarouselAnimating}
        isProductsLoading={isProductsLoading}
        productsError={productsError}
        onCarouselTransitionEnd={onCarouselTransitionEnd}
        onGoProducts={onGoProducts}
        onOpenProduct={onOpenProduct}
        onShowNextSlide={onShowNextSlide}
        onShowPreviousSlide={onShowPreviousSlide}
      />
      <EditorialSection />
      <TestimonialsSection />
    </>
  );
}

export default HomeView;
