import { USER_REGISTER_SUCCESS } from '../../actions/ActionUser';

const ReducerAuth = (state = {}, { data, type }) => {
  switch (type) {
    case USER_REGISTER_SUCCESS:
      if (!data) return state;
      return data;
    default:
      return state;
  }
};

export default ReducerAuth;
