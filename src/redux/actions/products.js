import { listProductAPI } from '../apis/products';
import {
  productRequest,
  productSuccess,
  productFailure,
} from '../slice/products';

export const listProducts = credentials => async dispatch => {
  try {
    dispatch(productRequest());
    const response = await listProductAPI(credentials);
    console.log("response", response)
    dispatch(productSuccess(response.data.data));
  } catch (error) {
    console.log("error", error)
    dispatch(productFailure(error));
  }
};

