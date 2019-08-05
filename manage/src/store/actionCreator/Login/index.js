import axios from 'axios'
import actionType from "../../actionType/Login";
function isRegister(payload){
    return {
        type:actionType.IS_REGISTER,
        payload
    }
}
function userLogin(payload){
    return {
        type:actionType.USER_LOGIN,
        payload
    }
}

export default {
    isRegister(phone){
        return async (dispatch)=>{
            const data = await axios.get('/cellphone/existence/check?phone='+phone)
            dispatch(isRegister(data))
        }
    },
    userLogin(obj){
        return async(dispatch)=>{
            const data = await axios.get(`/login/cellphone?phone=${obj.phone}&password=${obj.passWord}`)
            if(data.code===200){
                dispatch(userLogin(data))
            }
        }
    }
}