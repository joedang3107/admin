import * as type from '../const/index'

export const AddPfm1Action = (data) => {
    return { type: type.ADD_PFM_1, payload: data }
}

export const FetchPfms1Action = (data) => {
    return { type: type.FETCH_PFMS_1, payload: data }
}

export const DeletePfm1Action = (id) => {
    return { type: type.DELETE_PFM_1, payload: id }
}

export const EditPfm1Action = (data) => {
    return { type: type.EDIT_PFM_1, payload: data }   
}

export const FetchPfm1Action = (id) => {
    return { type: type.FETCH_PFM_1, payload: id }
}