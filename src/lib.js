export function getDiscountedValue(originalPrice, discount) {
  let disc = (discount / 100) * originalPrice;
  return originalPrice - disc;
}
