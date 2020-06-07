import { FORMS_GET } from "../../constants/ActionTypes";

const forms = (state = {}, {type, data}) => {
    switch (type) {
        case FORMS_GET:
            if(!data) return state;
            return data;
        default:
            return state;
    }
};

export default forms;
