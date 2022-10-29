import { call, put, takeEvery } from 'redux-saga/effects'
import * as Api from '../../apis/index'
import * as type from '../const/index'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchProjects(action) {
    try {
        const data = yield call(Api.fetchProjects, action.payload);
        yield put({type: type.FETCH_PROJECTS_SUCCEEDED, payload: {data}});
    } catch (e) {
          yield put({type: type.FETCH_PROJECTS_FAILED, message: e.message});
    }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
    yield takeEvery(type.FETCH_PROJECTS, fetchProjects);
}


export default mySaga;