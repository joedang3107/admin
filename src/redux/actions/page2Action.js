import * as type from '../const/index'

export const AddPfm2Action = (data) => {
    return { type: type.ADD_PFM_2, payload: data }
}

export const FetchPfms2Action = (data) => {
    return { type: type.FETCH_PFMS_2, payload: data }
}

export const DeletePfm2Action = (id) => {
    return { type: type.DELETE_PFM_2, payload: id }
}

export const EditPfm2Action = (data) => {
    return { type: type.EDIT_PFM_2, payload: data }   
}

export const FetchPfm2Action = (id) => {
    return { type: type.FETCH_PFM_2, payload: id }
}
