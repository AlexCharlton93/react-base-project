import axios from 'axios';

export const USER_REGISTER_START = 'ActionUserRegisterStart';
export const USER_REGISTER_SUCCESS = 'ActionUserRegisterSuccess';
export const USER_REGISTER_FAIL = 'ActionUserRegisterFail';

const USER_URI = 'user';

export const actionUserRegister = async(dispatch, user) => {
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
      payload: data,
      type: USER_REGISTER_SUCCESS,
    });
  }
  catch (error) {
    dispatch({ type: USER_REGISTER_FAIL });
  }
};
