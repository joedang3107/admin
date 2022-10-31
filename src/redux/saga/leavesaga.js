import { call, put, takeEvery } from 'redux-saga/effects'
import * as Api from '../../apis/index'
import * as type from '../const/index'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions

function* fetchLeave(action) {
    try {
        let data = yield call(Api.fetchLeave, action.payload);
        yield put({type: type.FETCH_LEAVE_SUCCEEDED, payload: {data}});
    } catch (e) {
          yield put({type: type.FETCH_LEAVE_FAILED, message: e.message});
    }
}

function* addLeave(action) {
    try {
        yield call(Api.addLeave, action.payload);
        yield put({type: type.ADD_LEAVE_SUCCEEDED});
    } catch (e) {
          yield put({type: type.ADD_LEAVE_FAILED, message: e.message});
    }
}

function* deleteLeave(action) {
    try {
        yield call(Api.deleteLeave, action.payload);
        yield put({type: type.DELETE_LEAVE_SUCCEEDED});
    } catch (e) {
          yield put({type: type.DELETE_LEAVE_FAILED, message: e.message});
    }
}

function* mySaga() {
    yield takeEvery(type.FETCH_LEAVE, fetchLeave);
    yield takeEvery(type.ADD_LEAVE, addLeave);
    yield takeEvery(type.DELETE_LEAVE, deleteLeave);
}


export default mySaga;