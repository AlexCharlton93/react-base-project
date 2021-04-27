import { AUTHENTICATE_SUCCESS } from '../../actions/ActionAuthenticate';

const ReducerAuth = (state = {}, { data, type }) => {
  switch (type) {
    case AUTHENTICATE_SUCCESS:
      if (!data) return state;
      return data;
    default:
      return state;
  }
};

export default ReducerAuth;
