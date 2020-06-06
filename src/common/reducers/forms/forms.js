import { Endpoints } from '../../Endpoints';

const forms = (state = {}, action) => {
  switch (action.type) {
    case Endpoints.FORMS_GET:
      return action.filter
    default:
      return state
  }
}

export default forms
