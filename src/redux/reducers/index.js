import { combineReducers } from 'redux';
import authReducer from '../slice/auth';
import productSlice from '../slice/products';


const rootReducer = combineReducers({
  auth: authReducer,
  product: productSlice,
});

export default rootReducer;
