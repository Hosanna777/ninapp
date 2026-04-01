import { useEffect, useState } from 'react';
import { fetchProducts } from '../../../api/products';
import type { Product } from '../../../types/product';
import { normalizeCarouselIndex } from '../../../utils/carousel';

const carouselRepeatCount = 7;

function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isCarouselAnimating, setIsCarouselAnimating] = useState(true);
  const [isProductsLoading, setIsProductsLoading] = useState(true);
  const [productsError, setProductsError] = useState('');

  const productsLength = products.length;
  const carouselLoopStart = productsLength * Math.floor(carouselRepeatCount / 2);
  const carouselProducts = Array.from({ length: carouselRepeatCount }, () => products).flat();

  useEffect(() => {
    if (productsLength === 0) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setIsCarouselAnimating(true);
      setCarouselIndex((current) => current + 1);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [productsLength]);

  useEffect(() => {
    let isActive = true;

    async function loadProducts() {
      try {
        setIsProductsLoading(true);
        const items = await fetchProducts();
        if (!isActive) return;

        setProducts(items);
        setSelectedProduct(items[0] ?? null);
        setCarouselIndex(items.length * Math.floor(carouselRepeatCount / 2));
        setProductsError('');
      } catch (error) {
        if (!isActive) return;
        setProductsError(
          error instanceof Error ? error.message : '商品データの取得に失敗しました。',
        );
      } finally {
        if (isActive) {
          setIsProductsLoading(false);
        }
      }
    }

    loadProducts();

    return () => {
      isActive = false;
    };
  }, []);

  const handleCarouselTransitionEnd = () => {
    if (productsLength === 0) return;

    const normalizedIndex = normalizeCarouselIndex(
      carouselIndex,
      productsLength,
      carouselLoopStart,
    );
    if (normalizedIndex === carouselIndex) return;

    setIsCarouselAnimating(false);
    setCarouselIndex(normalizedIndex);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setIsCarouselAnimating(true);
      });
    });
  };

  return {
    carouselIndex,
    carouselProducts,
    isCarouselAnimating,
    isProductsLoading,
    products,
    productsError,
    selectedProduct,
    handleCarouselTransitionEnd,
    selectProduct: setSelectedProduct,
    showNextSlide: () => {
      if (productsLength === 0) return;
      setIsCarouselAnimating(true);
      setCarouselIndex((current) => current + 1);
    },
    showPreviousSlide: () => {
      if (productsLength === 0) return;
      setIsCarouselAnimating(true);
      setCarouselIndex((current) => current - 1);
    },
  };
}

export default useProducts;
