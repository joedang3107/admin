import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import { getToken } from './helpers/storage';
import jwt from 'jsonwebtoken'

import './index.css';


let token = getToken()

if (token) {
  console.log(token);
  let decodeData = jwt.decode(token)
  console.log(decodeData);

  let exp = decodeData.exp * 1000 // timestamp milliseconds
  let curTimeStamp = new Date().getTime()

  if (exp > curTimeStamp) {
    alert("valid")
    // if token still valid thì gán lại trạng thái login  
    store.dispatch({
      type: "USER_LOGIN_SUCCEEDED", payload: {
        username: decodeData.username,
        token
      }
    })
  } else {
    // alert("expiredired")
    // redirect to login
  }
}


ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    {alert("username: admin, password: 12345")}
    <App />
  </Provider>
  /* </React.StrictMode> */
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
