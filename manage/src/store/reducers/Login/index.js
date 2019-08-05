import actionType from "../../actionType/Login";
import initState from '../../state/Login'
export default function(state=initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state))
    if(type === actionType.IS_REGISTER){
        state.registerInfo = payload
    }
    if(type === actionType.USER_LOGIN){
        state.userInfo = payload
    }
    return state
}