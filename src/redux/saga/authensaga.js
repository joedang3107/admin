import { call, put, takeEvery } from 'redux-saga/effects'
import * as authApi from '../../apis/index'
import { saveToken } from '../../helpers/storage';
import * as type from '../const/index'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* login(action) {
    try {
        const data = yield call(authApi.login, action.payload);
        console.log(data);
        if (data.success) {
          saveToken(data.token)
          yield put({type: type.USER_LOGIN_SUCCEEDED, payload: {
            username: data.username,
            token: data.token
          }});
        } else  {
          yield put({type: type.USER_LOGIN_FAILED, message: data.message});
        } 
    } catch (e) {
          yield put({type: type.USER_LOGIN_FAILED, message: e.message});
    }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
    yield takeEvery(type.USER_LOGIN, login);
}


export default mySaga;