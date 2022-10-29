import { call, put, takeEvery } from 'redux-saga/effects'
import * as Api from "../../apis"
import * as type from "../const"

function* addPfm4(action) {
    try {
        yield call(Api.addPfm4, action.payload);
        yield put({
            type: type.ADD_PFM_4_SUCCEEDED
        });
    } catch (e) {
        yield put({ type: type.ADD_PFM_4_FAILED, message: e.message });
    }
}

function* fetchPfms4(action) {
    try {
        let data = yield call(Api.fetchPfms4, action.payload);
        yield put({
            type: type.FETCH_PFMS_4_SUCCEEDED, payload: {data}
        });
    } catch (e) {
        yield put({ type: type.FETCH_PFMS_4_FAILED, message: e.message });
    }
}


function* deletePfm4(action) {
    try {
        yield call(Api.deletePfm4, action.payload);
        yield put({
            type: type.DELETE_PFM_4_SUCCEEDED
        });
    } catch (e) {
        yield put({ type: type.DELETE_PFM_4_FAILED, message: e.message });
    }
}

function* editPfm4(action) {
    try {
        yield call(Api.editPfm4, action.payload);
        yield put({
            type: type.EDIT_PFM_4_SUCCEEDED
        });
    } catch (e) {
        yield put({ type: type.EDIT_PFM_4_FAILED, message: e.message });
    }
}

function* fetchPfm4(action) {
    try {
        let data = yield call(Api.fetchPfm4, action.payload);
        yield put({
            type: type.FETCH_PFM_4_SUCCEEDED, payload: {data}
        });
    } catch (e) {
        yield put({ type: type.FETCH_PFM_4_FAILED, message: e.message });
    }
}

function* mySaga() {
    yield takeEvery(type.ADD_PFM_4, addPfm4);
    yield takeEvery(type.FETCH_PFMS_4, fetchPfms4);
    yield takeEvery(type.DELETE_PFM_4, deletePfm4);
    yield takeEvery(type.EDIT_PFM_4, editPfm4);
    yield takeEvery(type.FETCH_PFM_4, fetchPfm4);
}

export default mySaga;