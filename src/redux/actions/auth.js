import {loginUserAPI, verifyUserOTPAPI} from '../apis/auth';
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  verifyOTPSuccess,
} from '../slice/auth';
import { setLocalData } from '../../utils/helpers';

export const loginUser = credentials => async dispatch => {
  try {
    dispatch(loginRequest());
    const response = await loginUserAPI(credentials);
    dispatch(loginSuccess(response.data.data));
  } catch (error) {
    dispatch(loginFailure(error));
  }
};

export const verifyAuthOTP = credentials => async dispatch => {
  try {
    dispatch(loginRequest());
    const response = await verifyUserOTPAPI(credentials);
    await setLocalData('userToken', response.data.data.accessToken);
    dispatch(verifyOTPSuccess(response.data.data));
  } catch (error) {
    dispatch(loginFailure(error));
  }
};
