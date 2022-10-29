
import * as type from '../const'

let initialState = {
    fetchUser: {
        message: "",
        data: [],
        username: []
    },
    updatePassword: {
        success: false,
        loading: false,
        message: "",
        data: [],
    },
    fetchPassword: {
        success: false,
        loading: false,
        message: "",
        password: [],
    },
}

function userReducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {

        case type.FETCH_USER:
            return {
                ...state,
                fetchUser: {
                    data: [],
                    message: "",
                    username: []
                }
            }

        case type.FETCH_USER_SUCCEEDED:
            return {
                ...state,
                fetchUser: {
                    data: action.payload.data,
                    message: "",
                    username: action.payload.data[0].username
                }
            }

        case type.FETCH_USER_FAILED:
            return {
                ...state,
                fetchUser: {
                    data: [],
                    message: action.message,
                    username: []
                }
            }

        case type.UPDATE_PASSWORD:
            return {
                ...state,
                updatePassword: {
                    success: false,
                    loading: true,
                    data: [],
                    message: "",
                }
            }

        case type.UPDATE_PASSWORD_SUCCEEDED:
            return {
                ...state,
                updatePassword: {
                    success: true,
                    loading: false,
                    data: action.data,
                    message: "Update password successful",
                }
            }

        case type.UPDATE_PASSWORD_FAILED:
            return {
                ...state,
                updatePassword: {
                    success: false,
                    loading: false,
                    data: [],
                    message: action.message,
                }
            }
        case type.FETCH_PASSWORD:
            return {
                ...state,
                fetchPassword: {
                    success: false,
                    loading: true,
                    password: [],
                    message: "",
                }
            }

        case type.FETCH_PASSWORD_SUCCEEDED:
            return {
                ...state,
                fetchPassword: {
                    success: true,
                    loading: false,
                    password: action.payload.data,
                    message: "",
                }
            }

        case type.FETCH_PASSWORD_FAILED:
            return {
                ...state,
                fetchPassword: {
                    success: false,
                    loading: false,
                    password: [],
                    message: action.message,
                }
            }
        default:
            return state
    }
}

export { userReducer }