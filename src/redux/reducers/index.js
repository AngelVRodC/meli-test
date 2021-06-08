import { FETCH_DATA_ERROR, FETCH_DATA_SUCCESS } from '../actions/types';

const initialState = {
  author: {
    name: 'Angel',
    lastname: 'Rodriguez'
  },
  items: [],
  categories: [],
  error: null
}
 
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
      case FETCH_DATA_ERROR:
        return {
          ...state,
          error: action.payload
        }    
    default:
      return state;
  }
};

export default dataReducer;