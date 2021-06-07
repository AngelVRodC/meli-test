export const serializeProduct = (product) => ({
  id: product?.id,
  title: product?.title,
  picture: product?.thumbnail,
  condition: product?.condition,
  free_shipping: product?.shipping?.free_shipping,
  price: {
    amount: product?.price,
    currency: product?.prices?.presentation?.display_currency ||  product?.currency_id,
  }
});