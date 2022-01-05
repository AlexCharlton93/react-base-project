import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { AppDispatch } from '../../redux';

export const USER_REGISTER_START = 'ActionUserRegisterStart';
export const USER_REGISTER_SUCCESS = 'ActionUserRegisterSuccess';
export const USER_REGISTER_FAIL = 'ActionUserRegisterFail';

const USER_URI = 'user';

export const actionUserRegister = async(user) => async(dispatch: AppDispatch) => {
  dispatch({ type: USER_REGISTER_START });

  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_NODE_API_URI}${USER_URI}`,
      {
        confirmPassword: user.confirmPassword,
        emailAddress: user.email,
        password: user.password
      }
    );

    dispatch({
      data,
      type: USER_REGISTER_SUCCESS,
    });
  }  catch (error) {
    const errorMessage = error.response.data.message ? error.response.data.message : error.response.statusText;

    dispatch({
      data: error.error,
      type: USER_REGISTER_FAIL,
    });

    toastr.error('Error', `${errorMessage}`);
  }
};
