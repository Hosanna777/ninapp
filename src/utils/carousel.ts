export function normalizeCarouselIndex(
  index: number,
  productsLength: number,
  loopStart: number,
) {
  const normalized =
    ((index - loopStart) % productsLength + productsLength) % productsLength;

  return loopStart + normalized;
}
