import type { Product } from '../types/product';

export async function fetchProducts() {
  const response = await fetch('/mock/products.json', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('商品データの取得に失敗しました。');
  }

  return (await response.json()) as Product[];
}
