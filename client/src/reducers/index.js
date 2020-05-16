import {
    WRITING_REGISTRATION_TEXT,
    WRITING_LOGIN_TEXT,
    SET_CURRENT_USER,
    LOGOUT,
    WRITING_ADD_WORKER_TEXT,
    SELECT_DROP_DOWN,

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
    workerToAdd:{},
    workerToEdit:{}
};

const reducer = (state = initState, {type, payload, field,stateProperty }) => {

    switch (type) {
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