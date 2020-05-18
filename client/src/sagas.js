import {
    submitRegistration,
    submitLogin,
    checkToken,
    submitWorker,
    getWorkers,
    setWorkerToDelete,
    updateWorker
} from './functionsForSagas'
import {put, takeEvery, call, all} from 'redux-saga/effects'

export function* workerSubmitRegistration(d) {

    try {
        const response = yield call(submitRegistration, d);
        const data = response.data;
        localStorage.setItem('token', data.token);
        yield put({type: 'SET_CURRENT_USER', payload: data.user.username})
    } catch (error) {
        yield put({type: 'ERROR_TOAST', payload: error.response.data});
    }
}

export function* workerSubmitLogin(d) {

    try {
        const response = yield call(submitLogin, d);
        const data = response.data;
        localStorage.setItem('token', data.token);
        yield put({type: 'SET_CURRENT_USER', payload: data.username})
    } catch (error) {
        yield put({type: 'ERROR_TOAST', payload: error.response.data});
    }
}

export function* workerCheckToken() {

    try {
        const response = yield call(checkToken);
        const data = response.data;
        yield put({type: 'SET_CURRENT_USER', payload: data.username})
    } catch (error) {
        console.log(error)
    }
}

export function* workerSubmitWorker(d) {

    try {
        const response = yield call(submitWorker, d);
        const data = response.data;
        yield put({type: 'SET_WORKER_TO_WORKERS', payload: data})
    } catch (error) {
        yield put({type: 'ERROR_TOAST', payload: error.response.data});
    }
}

export function* workerSetWorkerToDelete(d) {

    try {
        const response = yield call(setWorkerToDelete, d);
        const data = response.data;
        yield put({type: 'REMOVE_DELETED_WORKER', payload: data})
    } catch (error) {
        yield put({type: 'ERROR_TOAST', payload: error.response.data});
    }
}

export function* workerUpdateWorker(d) {

    try {
        const response = yield call(updateWorker, d);
        const data = response.data;
        yield put({type: 'SET_UPDATED_WORKER', payload: data})
    } catch (error) {
        yield put({type: 'ERROR_TOAST', payload: error.response.data});
    }
}

export function* workerGetWorkers(d) {
    try {
        const response = yield call(getWorkers, d);
        const data = response.data;
        yield put({type: 'SET_WORKERS', payload: data})
    } catch (error) {
        yield put({type: 'ERROR_TOAST', payload: error.response.data});
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

export function* watchGetWorkers() {

    yield takeEvery('GET_WORKERS', workerGetWorkers)
}

export function* watchSetWorkerToDelete() {

    yield takeEvery('SET_WORKER_TO_DELETE', workerSetWorkerToDelete)
}

export function* watchUpdateWorker() {

    yield takeEvery('UPDATE_WORKER', workerUpdateWorker)
}

export default function* rootSaga() {
    yield all([
        watchSubmitRegistration(),
        watchSubmitLogin(),
        watchCheckToken(),
        watchSubmitWorker(),
        watchGetWorkers(),
        watchSetWorkerToDelete(),
        watchUpdateWorker(),
    ])
}