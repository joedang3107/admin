import * as type from '../const/index'


let initialState = {

    fetchLeave: {
        success: false,
        loading: false,
        data: [],
        message: "",
    },
    addLeave: {
        success: false,
        addLeaveloading: false,
        data: [],
        message: "",
    },
    deleteLeave: {
        deleteSuccess: false,
        loading: false,
        data: [],
        message: "",
    }
}


function leaveReducer(state = initialState, action) {
    switch (action.type) {

        case type.FETCH_LEAVE:
            return {
                ...state,
                fetchLeave: {
                    success: false,
                    loading: true,
                    data: [],
                    message: "",
                }

            }
        case type.FETCH_LEAVE_SUCCEEDED:
            return {
                ...state,
                fetchLeave: {
                    success: true,
                    loading: false,
                    message: "",
                    data: action.payload.data,
                }
            }
        case type.FETCH_LEAVE_FAILED:
            return {
                ...state,
                fetchLeave: {
                    success: false,
                    loading: false,
                    data: [],
                    message: action.payload.message,
                }
            }

        case type.ADD_LEAVE:
            return {
                ...state,
                addLeave: {
                    success: false,
                    addLeaveloading: true,
                    data: [],
                    message: "",
                }

            }
        case type.ADD_LEAVE_SUCCEEDED:
            return {
                ...state,
                addLeave: {
                    success: true,
                    addLeaveloading: false,
                    message: "Successful",
                    data: action.data,
                }
            }
        case type.ADD_LEAVE_FAILED:
            return {
                ...state,
                addLeave: {
                    success: false,
                    addLeaveloading: false,
                    data: [],
                    message: action.message,
                }
            }
        case type.DELETE_LEAVE:
            return {
                ...state,
                deleteLeave: {
                    deleteSuccess: false,
                    loading: true,
                    data: [],
                    message: "",
                }

            }
        case type.DELETE_LEAVE_SUCCEEDED:
            return {
                ...state,
                deleteLeave: {
                    deleteSuccess: true,
                    loading: false,
                    message: "",
                    data: action.data,
                }
            }
        case type.DELETE_LEAVE_FAILED:
            return {
                ...state,
                deleteLeave: {
                    deleteSuccess: false,
                    loading: false,
                    data: [],
                    message: action.message,
                }
            }

        default:
            return state;
    }
}

export { leaveReducer }