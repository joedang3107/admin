import * as type from '../const/index'

export const fetchProjectsAction = (data) => {
    
    return { type: type.FETCH_PROJECTS, payload: data}
}