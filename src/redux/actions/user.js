import * as type from '../const/index'

export const FetchUserAction = (data) => {
    return { type: type.FETCH_USER, payload: data}
}

export const ChangePasswordAction = (data) => {
    return { type: type.UPDATE_PASSWORD, payload: data}
}

export const FetchPasswordAction = (data) => {
    return { type: type.FETCH_PASSWORD, payload: data}
}