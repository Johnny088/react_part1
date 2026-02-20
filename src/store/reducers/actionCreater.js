import * as carActions from './carReducer/actions';
import * as brandReducer from './brandReducer/actions';
export const actions = {
  ...carActions,
  ...brandReducer,
};
