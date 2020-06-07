// import axios from 'axios';
// import _forms from "./forms.json";
// import { FORMS_GET } from "../../constants/ActionTypes";
import forms from "../../api/forms/forms";
import * as types from "../../constants/ActionTypes";

// export const formsQuery = (query = {}) => ({
//     filterById: (Id) => formsQuery({ ...query, Id }),
//     // run: () => getForms(query),
//     runMocked: () => getMockedForms(query),
// });

const receiveForms = (forms) => ({
    type: types.FORMS_GET,
    forms,
});

export const getAllForms = () => (dispatch) => {
    forms.getForms((forms) => {
        dispatch(receiveForms(forms));
    });
};
