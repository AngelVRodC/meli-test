import { fetchProducts } from '../../api';
import { FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_SUCCESS } from './types';

const serializeProduct = (product) => ({
  id: product?.id,
  title: product?.title,
  picture: product?.thumbnail,
  condition: product?.condition,
  free_shipping: product?.shipping?.free_shipping,
  price: {
    amount: product?.price,
    currency: product?.prices?.presentation?.display_currency,
  }
})

export const fetchProductsAction = (query) =>
  (dispatch) => {
    fetchProducts(query)
      .then((response) => {
        console.log(payload);
        const payload = {
          items: response?.results?.slice(0, 4)?.map((item) => serializeProduct(item))
        }
        
        dispatch({
          type: FETCH_PRODUCTS_SUCCESS,
          payload
        })
      })
      .catch((error) => {
        dispatch({
          type: FETCH_PRODUCTS_ERROR,
          payload: error.message
        })
      });
  }