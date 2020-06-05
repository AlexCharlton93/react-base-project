import axios from 'axios';
// import Endpoints from '../../endpoints/Endpoints';

export const formsQuery = (query = {}) => ({
    filterById: Id => formsQuery({ ...query, Id }),
    run: () => apiForms(query),
    runMocked: () => apiFormsMocked(query)
});

const apiForms = queryParams => async dispatch => {
    // dispatch(apiGet(Endpoints.FORMS_GET, ['forms'], queryParams));
    axios.get('https://apiname.co.uk/api/forms').then(res => {
        // Todo: This needs work, need to integrate redux...
    });
}

const apiFormsMocked = () => {
    const forms = [
        {
            id: '1',
            name: 'test form',
            questions: [
                {
                    id: "1",
                    question: "Welcome to DynoForm",
                    ordinal: 1,
                    text: "Let us know what you are interested in, and we will do the rest",
                    type: "horizontal",
                    answerType: "information-only",
                    buttonId: "3fbf796c-f078-4926-9641-95893584d123",
                    buttonText: "Lets do this!",
                    validationRequired: false,
                    validationRule: "",
                    Answers: []
                }
            ],
        },
        {

        }
    ];

    return forms;
}
