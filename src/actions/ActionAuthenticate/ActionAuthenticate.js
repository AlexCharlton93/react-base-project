import axios from 'axios';

export const AUTHENTICATE_START = 'ActionAuthenticateStart';
export const AUTHENTICATE_SUCCESS = 'ActionAuthenticateSuccess';
export const AUTHENTICATE_FAIL = 'ActionAuthenticateFail';

const AUTHENTICATE_URI = 'auth/login';

export const actionAuthenticate = async(dispatch, email, password) => {
  dispatch({ type: AUTHENTICATE_START });

  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_NODE_API_URI}${AUTHENTICATE_URI}`,
      {
        emailAddress: email,
        password,
      }
    );

    localStorage.setItem('token', data.token);

    dispatch({
      data,
      type: AUTHENTICATE_SUCCESS,
    });
  }
  catch (error) {
    dispatch({
      data: error.error,
      type: AUTHENTICATE_FAIL,
    });
  }
};
