import { combineReducers } from 'redux';
import quoteReducer from './quoteReducer';
import planReducer from './planReducer';

export default combineReducers({
  quote: quoteReducer,
  plan: planReducer,
});