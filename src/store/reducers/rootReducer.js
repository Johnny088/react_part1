import { combineReducers } from '@reduxjs/toolkit';
import { carReducer } from './carReducer/carReducer';
import { brandReducer } from './brandReducer/brandReducer';
export const rootReducer = combineReducers({
  car: carReducer,
  brand: brandReducer,
});
