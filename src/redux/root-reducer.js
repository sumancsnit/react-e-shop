import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
//use localstorage persist
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
const persistConfig = {
  key: 'root', // from root level
  storage, // type of storage
  whitelist: ['cart'], // persist cart data onlint inside state
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

// modified version of root reducer
export default persistReducer(persistConfig, rootReducer);

// persist 2
