import { fetchProducts } from '../../api';
import { FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_SUCCESS } from './types';

export const fetchProductsAction = (query) =>
  (dispatch) => {
    fetchProducts(query)
      .then((response) => {
        const payload = response.results.slice(0, 4);
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