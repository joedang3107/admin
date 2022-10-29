import * as type from '../const/index'


let initialState = {
    kpi: {
        loading: false,
        data: [],
        message: "",
        // total: 0
    },
}


function kpiReducer (state = initialState, action) {
    switch (action.type) {
        case type.FETCH_KPI:
            return {
                ...state,
                kpi: {
                    loading: true,
                    data: [],
                    message: "",
                    // total: 0
                }

            }
        case type.FETCH_KPI_SUCCEEDED:
            return {
                ...state,
                kpi: {
                    loading: false,
                    message: "",
                    data: action.payload.data,
                    // total: Number(action.payload.data.total)  
                }
            }
        case type.FETCH_KPI_FAILED:
            return {
                ...state,
                kpi: {
                    loading: false,
                    data: [],
                    message: action.message, 
                    // total: 0
                }
            }

        default:
            return state;
    }
}

export { kpiReducer }