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

} from '../actions/index';

const initState = {
    registration:{
        username:'',
        password:''
    },
    login:{
        username:'',
        password:''
    },
    currentUser:'',
    workers:[],
    workerToAdd:{
        gender:'male'
    },
    workerToEdit:{}
};

const reducer = (state = initState, {type, payload, field,stateProperty }) => {

    switch (type) {
        case SET_WORKERS:
            return {
                ...state,
                workers: payload
            };
        case SET_UPDATED_WORKER:
            return {
                ...state,
                workers: state.workers.map(el => (el._id === payload._id?{...payload}:el))
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
                currentUser: payload
            };
        case LOGOUT:
            return {
                ...state,
                currentUser:''
            };
        default:
            return state
    }
};
export default reducer