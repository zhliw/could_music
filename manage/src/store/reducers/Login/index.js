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
    if(type === actionType.ATTENTION){
        localStorage.userAttention = JSON.stringify(payload)
        state.userAttention =  payload
    }
    if(type === actionType.FANS){
        localStorage.userFans = JSON.stringify(payload)
        state.userFans =  payload
    }
    if(type === actionType.USERPLAYLIST){
        localStorage.userPlayList = JSON.stringify(payload)
        state.userPlayList =  payload
    }
    if(type === actionType.USERACTIVE){
        localStorage.userActive = JSON.stringify(payload)
        state.userActive =  payload
    }
    return state
}