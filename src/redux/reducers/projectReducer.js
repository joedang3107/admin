import * as type from '../const/index'


let initialState = {
    projects: {
        loading: false,
        data: [],
        message: "",
        total: 0
    },
}


function projectsReducer (state = initialState, action) {
    switch (action.type) {
        case type.FETCH_PROJECTS:
            return {
                ...state,
                projects: {
                    loading: true,
                    data: [],
                    message: "",
                    total: 0
                }

            }
        case type.FETCH_PROJECTS_SUCCEEDED:
            return {
                ...state,
                projects: {
                    loading: false,
                    message: "",
                    data: action.payload.data.list,
                    total: Number(action.payload.data.total)  
                }
            }
        case type.FETCH_PROJECTS_FAILED:
            return {
                ...state,
                projects: {
                    loading: false,
                    data: [],
                    message: action.message, 
                    total: 0
                }
            }

        default:
            return state;
    }
}

export { projectsReducer }