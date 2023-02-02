import { combineReducers } from 'redux';

import catalogReducer from './features/catalog/catalogSlice';
import cartReducer from './features/cart/cartSlice';
import orderHistoryReducer from './features/orderHistory/orderHistorySlice';

const rootReducer = combineReducers({
  catalog: catalogReducer,
  cart: cartReducer,
  orderHistory: orderHistoryReducer,
});

export default rootReducer;
