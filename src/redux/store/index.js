import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import authensaga from '../saga/authensaga'
import projectsaga from '../saga/projectsaga'
import kpisaga from '../saga/kpisaga'
import pfm1saga from '../saga/pfm1saga'
import pfm2saga from '../saga/pfm2saga'
import pfm3saga from '../saga/pfm3saga'
import pfm4saga from '../saga/pfm4saga'
import usersaga from '../saga/usersaga'

import reducerAll from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
    reducerAll,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)

// then run the saga
sagaMiddleware.run(authensaga)
sagaMiddleware.run(projectsaga)
sagaMiddleware.run(pfm1saga)
sagaMiddleware.run(pfm2saga)
sagaMiddleware.run(pfm3saga)
sagaMiddleware.run(pfm4saga)
sagaMiddleware.run(kpisaga)
sagaMiddleware.run(usersaga)


// store.subscribe(() => {
//     console.log(store.getState());
// })

export default store;