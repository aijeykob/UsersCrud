import {
    WRITING_REGISTRATION_TEXT,
    WRITING_LOGIN_TEXT,
    SET_CURRENT_USER,
    LOGOUT,
    WRITING_ADD_WORKER_TEXT,
    SELECT_DROP_DOWN,
    SET_WORKERS,
    WRITING_EDIT_WORKER_TEXT,
    SET_WORKER_TO_EDIT,
    SET_WORKER_TO_WORKERS,
    REMOVE_DELETED_WORKER,
    SET_UPDATED_WORKER,
    ERROR_TOAST,
    CHANGE_PAGE_PAGINATION,
    CHANGE_OFFSET,

} from '../actions/index';

const initState = {
    paginationWorkers: {
        total: null,
        offset: 0,
        activePage: 1,
    },
    error: {
        status: true,
        text: ''
    },
    registration: {
        username: '',
        password: '',
    },
    login: {
        username: '',
        password: ''
    },
    currentUser: '',
    workers: [],
    workerToAdd: {
        gender: 'male'
    },
    workerToEdit: {}
};

const reducer = (state = initState, {type, payload, field, stateProperty}) => {

    switch (type) {
        case SET_WORKERS:
            return {
                ...state,
                workers: payload.workersFromDb,
                paginationWorkers: {
                    ...state.paginationWorkers,
                    total: payload.total
                }

            };
        case ERROR_TOAST:
            return {
                ...state,
                error: {
                    ...state.error,
                    status: payload.status,
                    text: payload.text,
                }
            };
        case SET_UPDATED_WORKER:
            return {
                ...state,
                workers: state.workers.map(el => (el._id === payload._id ? {...payload} : el))
            };
        case SET_WORKER_TO_WORKERS:
            return {
                ...state,
                workers: [...state.workers, payload]
            };
        case REMOVE_DELETED_WORKER:
            return {
                ...state,
                workers: state.workers.filter(item => item._id !== payload.id)
            };
        case SET_WORKER_TO_EDIT:
            return {
                ...state,
                workerToEdit: payload
            };
        case SELECT_DROP_DOWN:
            return {
                ...state,
                [stateProperty]: {
                    ...(state[stateProperty]),
                    [field]: payload
                }
            };
        case WRITING_ADD_WORKER_TEXT:
            return {
                ...state,
                workerToAdd: {
                    ...state.workerToAdd,
                    [field]: payload
                }
            };
        case WRITING_EDIT_WORKER_TEXT:
            return {
                ...state,
                workerToEdit: {
                    ...state.workerToEdit,
                    [field]: payload
                }
            };
        case WRITING_REGISTRATION_TEXT:
            return {
                ...state,
                registration: {
                    ...state.registration,
                    [field]: payload
                }
            };
        case WRITING_LOGIN_TEXT:
            return {
                ...state,
                login: {
                    ...state.login,
                    [field]: payload
                }
            };
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload,
                error: {
                    ...state.error,
                    registration: {
                        status: true,
                        text: ''
                    }
                }
            };
        case LOGOUT:
            return {
                ...state,
                currentUser: ''
            };
        case CHANGE_PAGE_PAGINATION:
            return {
                ...state,
                paginationWorkers: {
                    ...state.paginationWorkers,
                    activePage: payload
                }
            };
        case CHANGE_OFFSET:
            return {
                ...state,
                paginationWorkers: {
                    ...state.paginationWorkers,
                    offset: payload
                }
            };
        default:
            return state
    }
};
export default reducer