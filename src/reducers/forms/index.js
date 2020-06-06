import { FORMS_GET } from '../../constants/ActionTypes';

const forms = (state = {}, {type, filter}) => {
  switch (type) {
    case FORMS_GET:
      return filter
    default:
      return state
  }
}

export default forms;
