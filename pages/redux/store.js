import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import reducer from './reducers';

const initialState = {
  products: [],
  error: null
}

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(thunk)
);

export default store;