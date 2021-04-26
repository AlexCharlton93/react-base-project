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

    dispatch({ type: AUTHENTICATE_SUCCESS });
    localStorage.setItem('token', data.token);
  }
  catch (error) {
    dispatch({ type: AUTHENTICATE_FAIL });
  }
};