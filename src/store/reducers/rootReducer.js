import { combineReducers } from '@reduxjs/toolkit';
import { carReducer } from './carReducer/carReducer';
export const rootReducer = combineReducers({
  car: carReducer,
});
