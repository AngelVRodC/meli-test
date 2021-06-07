import { FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_SUCCESS } from '../actions/types';

const initialState = {
  author: {
    name: 'Angel',
    lastname: 'Rodriguez'
  },
  items: [],
  categories: [],
  error: null
}
 
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        ...action.payload
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