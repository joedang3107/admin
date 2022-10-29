import { call, put, takeEvery } from 'redux-saga/effects'
import * as Api from "../../apis"
import * as type from "../const"

function* addPfm1(action) {
    try {
        yield call(Api.addPfm1, action.payload);
        yield put({
            type: type.ADD_PFM_1_SUCCEEDED
        });
    } catch (e) {
        yield put({ type: type.ADD_PFM_1_FAILED, message: e.message });
    }
}

function* fetchPfms1(action) {
    try {
        let data = yield call(Api.fetchPfms1, action.payload);
        yield put({
            type: type.FETCH_PFMS_1_SUCCEEDED, payload: {data}
        });
    } catch (e) {
        yield put({ type: type.FETCH_PFMS_1_FAILED, message: e.message });
    }
}

function* deletePfm1(action) {
    try {
        yield call(Api.deletePfm1, action.payload);
        yield put({
            type: type.DELETE_PFM_1_SUCCEEDED
        });
    } catch (e) {
        yield put({ type: type.DELETE_PFM_1_FAILED, message: e.message });
    }
}

function* editPfm1(action) {
    try {
        yield call(Api.editPfm1, action.payload);
        yield put({
            type: type.EDIT_PFM_1_SUCCEEDED
        });
    } catch (e) {
        yield put({ type: type.EDIT_PFM_1_FAILED, message: e.message });
    }
}

function* fetchPfm1(action) {
    try {
        let data = yield call(Api.fetchPfm1, action.payload);
        yield put({
            type: type.FETCH_PFM_1_SUCCEEDED, payload: {data}
        });
    } catch (e) {
        yield put({ type: type.FETCH_PFM_1_FAILED, message: e.message });
    }
}


function* mySaga() {
    yield takeEvery(type.ADD_PFM_1, addPfm1);
    yield takeEvery(type.FETCH_PFMS_1, fetchPfms1);
    yield takeEvery(type.DELETE_PFM_1, deletePfm1);
    yield takeEvery(type.EDIT_PFM_1, editPfm1);
    yield takeEvery(type.FETCH_PFM_1, fetchPfm1);
}

export default mySaga;