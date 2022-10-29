
import * as type from '../const'

let initialState = {
    addPfm1: {
        addPfmLoading: false,
        success: false,
        data: [],
        message: "",
    },
    fetchPfm1: {
        loading: false,
        data: [],
        message: "",
        total: 0
    },
    deletePfm1: {
        deletePfmLoading: false,
        deleteSuccess: false,
        message: "",
    },
    editPfm1: {
        editPfmLoading: false,
        data: [],
        editSuccess: false,
        message: "",
    },
    pfm: {
        data: {},
        loading: false,
        success: false,
        message: "",
    },
}

function pfm1Reducer(state = initialState, action) {

    switch (action.type) {
        case type.ADD_PFM_1:
            return {
                ...state,
                addPfm1: {
                    addPfmLoading: true,
                    success: false,
                    data: [],
                    message: "",
                }
            }

        case type.ADD_PFM_1_SUCCEEDED:
            return {
                ...state,
                addPfm1: {
                    addPfmLoading: false,
                    success: true,
                    data: [],
                    message: "Add pfm successed",
                }
            }

        case type.ADD_PFM_1_FAILED:
            return {
                ...state,
                addPfm1: {
                    addPfmLoading: false,
                    success: false,
                    data: [],
                    message: action.message,
                }
            }
        case type.FETCH_PFMS_1:
            return {
                ...state,
                fetchPfm1: {
                    loading: true,
                    data: [],
                    message: "",
                    total: 0
                }
            }

        case type.FETCH_PFMS_1_SUCCEEDED:
            return {
                ...state,
                fetchPfm1: {
                    loading: false,
                    data: action.payload.data.list,
                    message: "",
                    total: Number(action.payload.data.total)
                }
            }

        case type.FETCH_PFMS_1_FAILED:
            return {
                ...state,
                fetchPfm1: {
                    loading: false,
                    data: [],
                    message: action.message,
                    total: 0
                }
            }
        case type.DELETE_PFM_1:
            return {
                ...state,
                deletePfm1: {
                    deletePfmLoading: true,
                    deleteSuccess: false,
                    message: "",
                }
            }

        case type.DELETE_PFM_1_SUCCEEDED:
            return {
                ...state,
                deletePfm1: {
                    deletePfmLoading: false,
                    deleteSuccess: true,
                    message: "",
                }
            }

        case type.DELETE_PFM_1_FAILED:
            return {
                ...state,
                deletePfm1: {
                    deletePfmLoading: false,
                    deleteSuccess: false,
                    message: action.message,
                }
            }
        case type.EDIT_PFM_1:
            return {
                ...state,
                editPfm1: {
                    editPfmLoading: true,
                    data: [],
                    editSuccess: false,
                    message: "",
                }
            }

        case type.EDIT_PFM_1_SUCCEEDED:
            return {
                ...state,
                editPfm1: {
                    editPfmLoading: false,
                    data: action.data,
                    editSuccess: true,
                    message: "Edit pfm successed",
                }
            }

        case type.EDIT_PFM_1_FAILED:
            return {
                ...state,
                editPfm1: {
                    editPfmLoading: false,
                    data: [],
                    editSuccess: false,
                    message: action.message,
                }
            }
        case type.FETCH_PFM_1:
            return {
                ...state,
                pfm: {
                    data: {},
                    loading: true,
                    success: false,
                    message: "",
                }
            }

        case type.FETCH_PFM_1_SUCCEEDED:
            return {
                ...state,
                pfm: {
                    data: action.payload.data,
                    loading: false,
                    success: true,
                    message: "",
                }
            }

        case type.FETCH_PFM_1_FAILED:
            return {
                ...state,
                pfm: {
                    data: {},
                    loading: false,
                    success: false,
                    message: action.message,
                }
            }

        default:
            return state
    }
}

export { pfm1Reducer }