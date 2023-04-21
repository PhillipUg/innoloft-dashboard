import { configureStore } from '@reduxjs/toolkit';
import configReducer from './reducers/configReducer';
import productReducer from './reducers/productReducer';
import trlReducer from './reducers/trlReducer';

const store = configureStore({
  reducer: {
    trl: trlReducer,
    product: productReducer,
    config: configReducer,
  },
});

export default store;
