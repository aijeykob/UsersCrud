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
export const GET_WORKERS = "GET_WORKERS";
export const SET_WORKERS = "SET_WORKERS";
export const WRITING_EDIT_WORKER_TEXT = "WRITING_EDIT_WORKER_TEXT";
export const SET_WORKER_TO_EDIT = "SET_WORKER_TO_EDIT";
export const SET_WORKER_TO_WORKERS = "SET_WORKER_TO_WORKERS";
export const SET_WORKER_TO_DELETE = "SET_WORKER_TO_DELETE";
export const REMOVE_DELETED_WORKER = "REMOVE_DELETED_WORKER";
export const UPDATE_WORKER = "UPDATE_WORKER";
export const SET_UPDATED_WORKER = "SET_UPDATED_WORKER";
export const ERROR_TOAST = "ERROR_TOAST";
export const CHANGE_OFFSET = "CHANGE_OFFSET";
export const CHANGE_PAGE_PAGINATION = "CHANGE_PAGE_PAGINATION";


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
export const getWorkers = (d) => ({
    type: GET_WORKERS, payload: d
});
export const setWorkers = () => ({
    type: SET_WORKERS,
});
export const writingAddWorkerText = (text, field) => ({
    type: WRITING_ADD_WORKER_TEXT, payload: text, field
});
export const writingEditWorkerText = (text, field) => ({
    type: WRITING_EDIT_WORKER_TEXT, payload: text, field
});
export const selectDropDown = (select, field, stateProperty) => ({

    type: SELECT_DROP_DOWN, payload: select, field, stateProperty
});
export const submitWorker = (data) => ({

    type: SUBMIT_WORKER, payload: data
});
export const updateWorker = (data) => ({

    type: UPDATE_WORKER, payload: data
});
export const setWorkerToEdit = (id) => ({
    type: SET_WORKER_TO_EDIT, payload: id
});
export const setUpdatedWorker = (data) => ({
    type: SET_UPDATED_WORKER, payload: data
});
export const setWorkerToWorkers = (data) => ({
    type: SET_WORKER_TO_WORKERS, payload: data
});
export const setWorkerToDelete = (id) => ({
    type: SET_WORKER_TO_DELETE, payload: id
});
export const removeDeletedWorker = (id) => ({
    type: REMOVE_DELETED_WORKER, payload: id
});
export const errorToast = (data) => ({
    type: ERROR_TOAST, payload: data
});
export const changeOffset = (offset) => ({
    type: CHANGE_OFFSET, payload: offset
});
export const changePagePagination = (page) => ({
    type: CHANGE_PAGE_PAGINATION, payload: page
});