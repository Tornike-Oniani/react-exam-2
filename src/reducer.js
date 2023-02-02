import { combineReducers } from 'redux';

import catalogReducer from './features/catalog/catalogSlice';
import cartReducer from './features/cart/cartSlice';

const rootReducer = combineReducers({
  catalog: catalogReducer,
  cart: cartReducer,
});

export default rootReducer;
