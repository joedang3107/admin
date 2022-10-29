
import * as type from '../const'

let initialState = {
    addPfm4: {
        addPfmLoading: false,
        success: false,
        data: [],
        message: "",
    },
    fetchPfm4: {
        loading: false,
        data: [],
        message: "",
        total: 0
    },
    deletePfm4: {
        deletePfmLoading: false,
        deleteSuccess: false,
        message: "",
    },
    editPfm4: {
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

function pfm4Reducer(state = initialState, action) {

    switch (action.type) {

        case type.ADD_PFM_4:
            return {
                ...state,
                addPfm4: {
                    addPfmLoading: true,
                    success: false,
                    data: [],
                    message: "",
                }
            }

        case type.ADD_PFM_4_SUCCEEDED:
            return {
                ...state,
                addPfm4: {
                    addPfmLoading: false,
                    success: true,
                    data: [],
                    message: "Add pfm success!",
                }
            }

        case type.ADD_PFM_4_FAILED:
            return {
                ...state,
                addPfm4: {
                    addPfmLoading: false,
                    success: false,
                    data: [],
                    message: action.message,
                }
            }

        case type.FETCH_PFMS_4:
            return {
                ...state,
                fetchPfm4: {
                    loading: true,
                    data: [],
                    message: "",
                    total: 0
                }
            }

        case type.FETCH_PFMS_4_SUCCEEDED:
            return {
                ...state,
                fetchPfm4: {
                    loading: false,
                    data: action.payload.data.list,
                    message: "",
                    total: Number(action.payload.data.total)
                }
            }

        case type.FETCH_PFMS_4_FAILED:
            return {
                ...state,
                fetchPfm4: {
                    loading: false,
                    data: [],
                    message: action.message,
                    total: 0
                }
            }
        case type.DELETE_PFM_4:
            return {
                ...state,
                deletePfm4: {
                    deletePfmLoading: true,
                    deleteSuccess: false,
                    message: "",
                }
            }

        case type.DELETE_PFM_4_SUCCEEDED:
            return {
                ...state,
                deletePfm4: {
                    deletePfmLoading: false,
                    deleteSuccess: true,
                    message: "",
                }
            }

        case type.DELETE_PFM_4_FAILED:
            return {
                ...state,
                deletePfm4: {
                    deletePfmLoading: false,
                    deleteSuccess: false,
                    message: action.message,
                }
            }
        case type.EDIT_PFM_4:
            return {
                ...state,
                editPfm4: {
                    editPfmLoading: true,
                    data: [],
                    editSuccess: false,
                    message: "",
                }
            }

        case type.EDIT_PFM_4_SUCCEEDED:
            return {
                ...state,
                editPfm4: {
                    editPfmLoading: false,
                    data: action.data,
                    editSuccess: true,
                    message: "Edit pfm successed",
                }
            }

        case type.EDIT_PFM_4_FAILED:
            return {
                ...state,
                editPfm4: {
                    editPfmLoading: false,
                    data: [],
                    editSuccess: false,
                    message: action.message,
                }
            }
        case type.FETCH_PFM_4:
            return {
                ...state,
                pfm: {
                    data: {},
                    loading: true,
                    success: false,
                    message: "",
                }
            }

        case type.FETCH_PFM_4_SUCCEEDED:
            return {
                ...state,
                pfm: {
                    data: action.payload.data,
                    loading: false,
                    success: true,
                    message: "",
                }
            }

        case type.FETCH_PFM_4_FAILED:
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

export { pfm4Reducer }