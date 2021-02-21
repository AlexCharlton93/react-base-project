import axios from 'axios';

export const USER_REGISTER_START = 'ActionUserRegisterStart';
export const USER_REGISTER_SUCCESS = 'ActionUserRegisterSuccess';
export const USER_REGISTER_FAIL = 'ActionUserRegisterFail';

const USER_URI = 'user';

export const actionUserRegister = async(dispatch, email, password, confirmPassword) => {
  dispatch({ type: USER_REGISTER_START });

  try {
    const { data } = await axios.post(
      // TODO: process.env
      `http://localhost:3001/api/1.0/${USER_URI}`,
      {
        confirmPassword,
        emailAddress: email,
        password,
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
