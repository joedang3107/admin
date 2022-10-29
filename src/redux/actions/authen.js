
import * as type from '../const/index'

export const LoginAction = (data) => {
    
    return { type: type.USER_LOGIN, payload: data}
}