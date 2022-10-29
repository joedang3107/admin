import { call, put, takeEvery } from 'redux-saga/effects'
import * as Api from "../../apis"
import * as type from "../const"

function* addPfmPage2(action) {
    try {
        yield call(Api.addPfm2, action.payload);
        yield put({
            type: type.ADD_PFM_2_SUCCEEDED
        });
    } catch (e) {
        yield put({ type: type.ADD_PFM_2_FAILED, message: e.message });
    }
}

function* fetchPfms2(action) {
    try {
        let data = yield call(Api.fetchPfms2, action.payload);
        yield put({
            type: type.FETCH_PFMS_2_SUCCEEDED, payload: {data}
        });
    } catch (e) {
        yield put({ type: type.FETCH_PFMS_2_FAILED, message: e.message });
    }
}


function* deletePfm2(action) {
    try {
        yield call(Api.deletePfm2, action.payload);
        yield put({
            type: type.DELETE_PFM_2_SUCCEEDED
        });
    } catch (e) {
        yield put({ type: type.DELETE_PFM_2_FAILED, message: e.message });
    }
}

function* editPfm2(action) {
    try {
        yield call(Api.editPfm2, action.payload);
        yield put({
            type: type.EDIT_PFM_2_SUCCEEDED
        });
    } catch (e) {
        yield put({ type: type.EDIT_PFM_2_FAILED, message: e.message });
    }
}

function* fetchPfm2(action) {
    try {
        let data = yield call(Api.fetchPfm2, action.payload);
        yield put({
            type: type.FETCH_PFM_2_SUCCEEDED, payload: {data}
        });
    } catch (e) {
        yield put({ type: type.FETCH_PFM_2_FAILED, message: e.message });
    }
}

function* mySaga() {
    yield takeEvery(type.ADD_PFM_2, addPfmPage2);
    yield takeEvery(type.FETCH_PFMS_2, fetchPfms2);
    yield takeEvery(type.DELETE_PFM_2, deletePfm2);
    yield takeEvery(type.EDIT_PFM_2, editPfm2);
    yield takeEvery(type.FETCH_PFM_2, fetchPfm2);
}

export default mySaga;