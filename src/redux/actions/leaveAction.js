import * as type from '../const/index'

export const AddLeaveAction = (data) => {
    return { type: type.ADD_LEAVE, payload: data }
}

export const FetchLeaveAction = (data) => {
    return { type: type.FETCH_LEAVE, payload: data }
}

export const DeleteLeaveAction = (id) => {
    return { type: type.DELETE_LEAVE, payload: id }
}