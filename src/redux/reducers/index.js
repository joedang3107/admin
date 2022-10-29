import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { kpiReducer } from './kpiReducer'
import { pfm1Reducer } from './pfm1Reducer'
import { pfm2Reducer } from './pfm2Reducer'
import { pfm3Reducer } from './pfm3Reducer'
import { pfm4Reducer } from './pfm4Reducer'
import { userReducer } from './userReducer'
import { projectsReducer } from './projectReducer'

let reducerAll = combineReducers({ auth: authReducer, projects: projectsReducer, kpi: kpiReducer, pfm1: pfm1Reducer, pfm2: pfm2Reducer, pfm3: pfm3Reducer, pfm4: pfm4Reducer, user: userReducer })

export default reducerAll;
