export const WRITING_REGISTRATION_TEXT = "WRITING_REGISTRATION_TEXT";
export const SUBMIT_LOGIN = "SUBMIT_LOGIN";
export const SUBMIT_REGISTRATION = "SUBMIT_REGISTRATION";
export const WRITING_LOGIN_TEXT = "WRITING_LOGIN_TEXT";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const CHECK_TOKEN = "CHECK_TOKEN";
export const LOGOUT = "LOGOUT";
export const WRITING_ADD_WORKER_TEXT = "WRITING_ADD_WORKER_TEXT";
export const SELECT_DROP_DOWN = "SELECT_DROP_DOWN";
export const SUBMIT_WORKER = "SUBMIT_WORKER";





export const writingRegistrationText = (text, field) => ({

    type: WRITING_REGISTRATION_TEXT, payload: text, field
});
export const writingLoginText = (text, field) => ({

    type: WRITING_LOGIN_TEXT, payload: text, field
});
export const submitLogin = (data) => ({

    type: SUBMIT_LOGIN, payload: data
});
export const submitRegistration = (data) => ({

    type: SUBMIT_REGISTRATION, payload: data
});
export const setCurrentUser = (data) => ({

    type: SET_CURRENT_USER, payload: data
});
export const checkToken = () => ({

    type: CHECK_TOKEN,
});
export const logOut = () => ({
    type: LOGOUT,
});
export const writingAddWorkerText = (text, field) => ({
    type: WRITING_ADD_WORKER_TEXT, payload:text, field
});
export const selectDropDown = (select, field, stateProperty) => ({

    type: SELECT_DROP_DOWN, payload: select, field, stateProperty
});
export const submitWorker = (data) => ({

    type: SUBMIT_WORKER, payload: data
});
