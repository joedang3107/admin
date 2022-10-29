import * as type from '../const/index'

export const AddPfm3Action = (data) => {
    return { type: type.ADD_PFM_3, payload: data }
}

export const FetchPfms3Action = (data) => {
    return { type: type.FETCH_PFMS_3, payload: data }
}

export const DeletePfm3Action = (id) => {
    return { type: type.DELETE_PFM_3, payload: id }
}

export const EditPfm3Action = (data) => {
    return { type: type.EDIT_PFM_3, payload: data }   
}

export const FetchPfm3Action = (id) => {
    return { type: type.FETCH_PFM_3, payload: id }
}
