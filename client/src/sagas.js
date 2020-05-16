import {
    submitRegistration,
    submitLogin,
    checkToken,
    submitWorker,
} from './functionsForSagas'
import {put, takeEvery, call, all} from 'redux-saga/effects'

export function* workerSubmitRegistration(d) {

    try {
        const response = yield call(submitRegistration, d);
        const data = response.data;
        localStorage.setItem('token', data.token);
        // yield put({type: 'SET_PROFILE_USER', payload: data.user})
    } catch (error) {
        yield put({type: 'STATUS_REGISTRATION', payload: error.response.status});
    }
}
export function* workerSubmitLogin(d) {

    try {
        const response = yield call(submitLogin, d);
        const data = response.data;
        localStorage.setItem('token', data.token);
        yield put({type: 'SET_CURRENT_USER', payload: data.username})
    } catch (error) {
        yield put({type: 'STATUS_REGISTRATION', payload: error.response.status});
    }
}
export function* workerCheckToken() {

    try {
        const response = yield call(checkToken);
        const data = response.data;
        yield put({type: 'SET_CURRENT_USER', payload: data.username})
    } catch (error) {
        yield put({type: 'STATUS_REGISTRATION', payload: error.response.status});
    }
}
export function* workerSubmitWorker(d) {

    try {
        const response = yield call(submitWorker,d);
        const data = response.data;
        // yield put({type: 'SET_CURRENT_USER', payload: data.username})
    } catch (error) {
        // yield put({type: 'STATUS_REGISTRATION', payload: error.response.status});
    }
}



export function* watchSubmitRegistration() {

    yield takeEvery('SUBMIT_REGISTRATION', workerSubmitRegistration)
}
export function* watchSubmitLogin() {

    yield takeEvery('SUBMIT_LOGIN', workerSubmitLogin)
}
export function* watchCheckToken() {

    yield takeEvery('CHECK_TOKEN', workerCheckToken)
}
export function* watchSubmitWorker() {

    yield takeEvery('SUBMIT_WORKER', workerSubmitWorker)
}

export default function* rootSaga() {
    yield all([
        watchSubmitRegistration(),
        watchSubmitLogin(),
        watchCheckToken(),
        watchSubmitWorker(),
    ])
}