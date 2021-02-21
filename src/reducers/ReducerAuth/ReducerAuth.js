import { AUTHENTICATE_SUCCESS } from '../../actions/ActionAuthenticate';

const ReducerAuth = (state = {}, action) => {
  switch (action.type) {
    case AUTHENTICATE_SUCCESS:
      if (!action.data) return state;
      return action.data;
    default:
      return state;
  }
};

export default ReducerAuth;
