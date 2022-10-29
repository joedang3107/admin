import { call, put, takeEvery } from 'redux-saga/effects'
import * as Api from "../../apis"
import * as type from "../const"

function* fetchUser(action) {
    try {
        let data = yield call(Api.fetchUser, action.payload);
        console.log(data);
        yield put({
            type: type.FETCH_USER_SUCCEEDED, payload: {data}
        });
    } catch (e) {
        yield put({ type: type.FETCH_USER_FAILED, message: e.message });
    }
}

function* updatePassword(action) {
    try {
        yield call(Api.updatePassword, action.payload);
        yield put({
            type: type.UPDATE_PASSWORD_SUCCEEDED
        });
    } catch (e) {
        yield put({ type: type.UPDATE_PASSWORD_FAILED, message: e.message });
    }
}

function* fetchPassword(action) {
    try {
        let data = yield call(Api.fetchPassword, action.payload);
        yield put({
            type: type.FETCH_PASSWORD_SUCCEEDED, payload: {data}
        });
    } catch (e) {
        yield put({ type: type.FETCH_PASSWORD_FAILED, message: e.message });
    }
}

function* mySaga() {
    yield takeEvery(type.FETCH_USER, fetchUser);
    yield takeEvery(type.UPDATE_PASSWORD, updatePassword);
    yield takeEvery(type.FETCH_PASSWORD, fetchPassword);
}

export default mySaga;