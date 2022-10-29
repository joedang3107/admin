
import * as type from '../const'

let initialState = {
    addPfm3: {
        addPfmLoading: false,
        success: false,
        data: [],
        message: "",
    },
    fetchPfm3: {
        loading: false,
        data: [],
        message: "",
        total: 0
    },
    deletePfm3: {
        deletePfmLoading: false,
        deleteSuccess: false,
        message: "",
    },
    editPfm3: {
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
    }
}

function pfm3Reducer(state = initialState, action) {

    switch (action.type) {

        case type.ADD_PFM_3:
            return {
                ...state,
                addPfm3: {
                    addPfmLoading: true,
                    success: false,
                    data: [],
                    message: "",
                }
            }

        case type.ADD_PFM_3_SUCCEEDED:
            return {
                ...state,
                addPfm3: {
                    addPfmLoading: false,
                    success: true,
                    data: [],
                    message: "Add pfm success!",
                }
            }

        case type.ADD_PFM_3_FAILED:
            return {
                ...state,
                addPfm3: {
                    addPfmLoading: false,
                    success: false,
                    data: [],
                    message: action.message,
                }
            }

        case type.FETCH_PFMS_3:
            return {
                ...state,
                fetchPfm3: {
                    loading: true,
                    data: [],
                    message: "",
                    total: 0
                }
            }

        case type.FETCH_PFMS_3_SUCCEEDED:
            return {
                ...state,
                fetchPfm3: {
                    loading: false,
                    data: action.payload.data.list,
                    message: "",
                    total: Number(action.payload.data.total)
                }
            }

        case type.FETCH_PFMS_3_FAILED:
            return {
                ...state,
                fetchPfm3: {
                    loading: false,
                    data: [],
                    message: action.message,
                    total: 0
                }
            }
        case type.DELETE_PFM_3:
            return {
                ...state,
                deletePfm3: {
                    deletePfmLoading: true,
                    deleteSuccess: false,
                    message: "",
                }
            }

        case type.DELETE_PFM_3_SUCCEEDED:
            return {
                ...state,
                deletePfm3: {
                    deletePfmLoading: false,
                    deleteSuccess: true,
                    message: "",
                }
            }

        case type.DELETE_PFM_3_FAILED:
            return {
                ...state,
                deletePfm3: {
                    deletePfmLoading: false,
                    deleteSuccess: false,
                    message: action.message,
                }
            }
        case type.EDIT_PFM_3:
            return {
                ...state,
                editPfm3: {
                    editPfmLoading: true,
                    data: [],
                    editSuccess: false,
                    message: "",
                }
            }

        case type.EDIT_PFM_3_SUCCEEDED:
            return {
                ...state,
                editPfm3: {
                    editPfmLoading: false,
                    data: action.data,
                    editSuccess: true,
                    message: "Edit pfm successed",
                }
            }

        case type.EDIT_PFM_3_FAILED:
            return {
                ...state,
                editPfm3: {
                    editPfmLoading: false,
                    data: [],
                    editSuccess: false,
                    message: action.message,
                }
            }
        case type.FETCH_PFM_3:
            return {
                ...state,
                pfm: {
                    data: {},
                    loading: true,
                    success: false,
                    message: "",
                }
            }

        case type.FETCH_PFM_3_SUCCEEDED:
            return {
                ...state,
                pfm: {
                    data: action.payload.data,
                    loading: false,
                    success: true,
                    message: "",
                }
            }

        case type.FETCH_PFM_3_FAILED:
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

export { pfm3Reducer }