import { FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_SUCCESS } from '../actions/types';
 
const productsReducer = (state, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload
      }
      case FETCH_PRODUCTS_ERROR:
        return {
          ...state,
          error: action.payload
        }    
    default:
      return state;
  }
};

export default productsReducer;