import { combineReducers } from 'redux'
import ReducerAuth from './ReducerAuth';
import ReducerUser from './ReducerUser';

const rootReducer = combineReducers({
  ReducerAuth,
  ReducerUser,
})

export default rootReducer;
