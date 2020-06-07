import { FORMS_GET } from "../../constants/ActionTypes";

const forms = (state = {}, action) => {
    switch (action.type) {
        case FORMS_GET:
            if(!action.forms) return state;
            return action.forms;
        default:
            return state;
    }
};

export default forms;
