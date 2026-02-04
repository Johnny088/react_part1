import { combineReducers } from '@reduxjs/toolkit';
import { authorReducer } from './authorReducer/authorReducer';

export const rootReducer = combineReducers({
  author: authorReducer,
});
