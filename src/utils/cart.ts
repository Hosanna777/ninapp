export function parsePrice(price: string) {
  return Number(price.replace(/[^\d]/g, ''));
}

export function formatPrice(value: number) {
  return `¥${value.toLocaleString('ja-JP')}`;
}
