
import * as type from '../const'

let initialState = {

    addPfm2: {
        addPfmLoading: false,
        success: false,
        data: [],
        message: "",
    },
    fetchPfm2: {
        loading: false,
        data: [],
        message: "",
        total: 0
    },
    deletePfm2: {
        deletePfmLoading: false,
        deleteSuccess: false,
        message: "",
    },
    editPfm2: {
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

function pfm2Reducer(state = initialState, action) {

    switch (action.type) {
        case type.ADD_PFM_2:
            return {
                ...state,
                addPfm2: {
                    addPfmLoading: true,
                    success: false,
                    data: [],
                    message: "",
                }
            }

        case type.ADD_PFM_2_SUCCEEDED:
            return {
                ...state,
                addPfm2: {
                    addPfmLoading: false,
                    success: true,
                    data: [],
                    message: "Add pfm success!",
                }
            }

        case type.ADD_PFM_2_FAILED:
            return {
                ...state,
                addPfm2: {
                    addPfmLoading: false,
                    success: false,
                    data: [],
                    message: action.message,
                }
            }

        case type.FETCH_PFMS_2:
            return {
                ...state,
                fetchPfm2: {
                    loading: true,
                    data: [],
                    message: "",
                    total: 0
                }
            }

        case type.FETCH_PFMS_2_SUCCEEDED:
            return {
                ...state,
                fetchPfm2: {
                    loading: false,
                    data: action.payload.data.list,
                    message: "",
                    total: Number(action.payload.data.total)
                }
            }

        case type.FETCH_PFMS_2_FAILED:
            return {
                ...state,
                fetchPfm2: {
                    loading: false,
                    data: [],
                    message: action.message,
                    total: 0
                }
            }
        case type.DELETE_PFM_2:
            return {
                ...state,
                deletePfm2: {
                    deletePfmLoading: true,
                    deleteSuccess: false,
                    message: "",
                }
            }

        case type.DELETE_PFM_2_SUCCEEDED:
            return {
                ...state,
                deletePfm2: {
                    deletePfmLoading: false,
                    deleteSuccess: true,
                    message: "",
                }
            }

        case type.DELETE_PFM_2_FAILED:
            return {
                ...state,
                deletePfm2: {
                    deletePfmLoading: false,
                    deleteSuccess: false,
                    message: action.message,
                }
            }
        case type.EDIT_PFM_2:
            return {
                ...state,
                editPfm2: {
                    editPfmLoading: true,
                    data: [],
                    editSuccess: false,
                    message: "",
                }
            }

        case type.EDIT_PFM_2_SUCCEEDED:
            return {
                ...state,
                editPfm2: {
                    editPfmLoading: false,
                    data: action.data,
                    editSuccess: true,
                    message: "Edit pfm successed",
                }
            }

        case type.EDIT_PFM_2_FAILED:
            return {
                ...state,
                editPfm2: {
                    editPfmLoading: false,
                    data: [],
                    editSuccess: false,
                    message: action.message,
                }
            }
        case type.FETCH_PFM_2:
            return {
                ...state,
                pfm: {
                    data: {},
                    loading: true,
                    success: false,
                    message: "",
                }
            }

        case type.FETCH_PFM_2_SUCCEEDED:
            return {
                ...state,
                pfm: {
                    data: action.payload.data,
                    loading: false,
                    success: true,
                    message: "",
                }
            }

        case type.FETCH_PFM_2_FAILED:
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

export { pfm2Reducer }