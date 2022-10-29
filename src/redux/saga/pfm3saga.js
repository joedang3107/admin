import { call, put, takeEvery } from 'redux-saga/effects'
import * as Api from "../../apis"
import * as type from "../const"

function* addPfm3(action) {
    try {
        yield call(Api.addPfm3, action.payload);
        yield put({
            type: type.ADD_PFM_3_SUCCEEDED
        });
    } catch (e) {
        yield put({ type: type.ADD_PFM_3_FAILED, message: e.message });
    }
}

function* fetchPfms3(action) {
    try {
        let data = yield call(Api.fetchPfms3, action.payload);
        yield put({
            type: type.FETCH_PFMS_3_SUCCEEDED, payload: {data}
        });
    } catch (e) {
        yield put({ type: type.FETCH_PFMS_3_FAILED, message: e.message });
    }
}

function* deletePfm3(action) {
    try {
        yield call(Api.deletePfm3, action.payload);
        yield put({
            type: type.DELETE_PFM_3_SUCCEEDED
        });
    } catch (e) {
        yield put({ type: type.DELETE_PFM_3_FAILED, message: e.message });
    }
}

function* editPfm3(action) {
    try {
        yield call(Api.editPfm3, action.payload);
        yield put({
            type: type.EDIT_PFM_3_SUCCEEDED
        });
    } catch (e) {
        yield put({ type: type.EDIT_PFM_3_FAILED, message: e.message });
    }
}

function* fetchPfm3(action) {
    try {
        let data = yield call(Api.fetchPfm3, action.payload);
        yield put({
            type: type.FETCH_PFM_3_SUCCEEDED, payload: {data}
        });
    } catch (e) {
        yield put({ type: type.FETCH_PFM_3_FAILED, message: e.message });
    }
}

function* mySaga() {
    yield takeEvery(type.ADD_PFM_3, addPfm3);
    yield takeEvery(type.FETCH_PFMS_3, fetchPfms3);
    yield takeEvery(type.DELETE_PFM_3, deletePfm3);
    yield takeEvery(type.EDIT_PFM_3, editPfm3);
    yield takeEvery(type.FETCH_PFM_3, fetchPfm3);
}

export default mySaga;