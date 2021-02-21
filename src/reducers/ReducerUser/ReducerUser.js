import { USER_REGISTER_SUCCESS } from '../../actions/ActionUser';

const ReducerAuth = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_SUCCESS:
      if (!action.data) return state;
      return action.data;
    default:
      return state;
  }
};

export default ReducerAuth;
