import * as type from '../const/index'

export const AddPfm4Action = (data) => {
    return { type: type.ADD_PFM_4, payload: data }
}

export const FetchPfms4Action = (data) => {
    return { type: type.FETCH_PFMS_4, payload: data }
}

export const DeletePfm4Action = (id) => {
    return { type: type.DELETE_PFM_4, payload: id }
}

export const EditPfm4Action = (data) => {
    return { type: type.EDIT_PFM_4, payload: data }   
}

export const FetchPfm4Action = (id) => {
    return { type: type.FETCH_PFM_4, payload: id }
}
