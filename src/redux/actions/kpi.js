import * as type from '../const/index'

export const fetchKpiAction = (data) => {
    
    return { type: type.FETCH_KPI, payload: data}
}   