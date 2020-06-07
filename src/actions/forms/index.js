import forms from "../../api/forms/forms";
import * as types from "../../constants/ActionTypes";

export const formsQuery = (query = {}) => ({
    filterById: (Id) => formsQuery({ ...query, Id }),
    // run: () => getForms(query),
    runMocked: () => getMockedForms(),
});

// Todo: Add getForms and hook up to an actual API

export const getMockedForms = () => (dispatch) => {
    forms.getMockedForms((forms) => {
        dispatch({type: types.FORMS_GET, data: forms});
    });
};
