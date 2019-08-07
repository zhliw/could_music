import actionType from "../../actionType/Video/index";
import axios from "axios"
export const getVideoList = (payload)=>{
    return {
        type:actionType.GET_VIDEO_LIST,
        payload
    }
}
export const changeVideoList = (payload)=>{
    return {
        type:actionType.CHANGE_VIDEO_LIST,
        payload
    }
}

export default {
    getVideoList(){
        return async(dispatch)=>{
            const num = Math.floor(Math.random()*1000);
            const path = window.location.pathname.replace("/video/","");
            if(path){
                const data = await axios.get("/video/group?id="+path+"&"+num);
                dispatch(getVideoList(data.datas));
            }else {
                const data = await axios.get("/video/group?id=59110&"+num);
                dispatch(getVideoList(data.datas));
            }
        }
    },
    changeVideoList(){
        return async(dispatch)=>{
            const num = Math.floor(Math.random()*1000);
            const path = window.location.pathname.replace("/video/","");
            if(path){
                const data = await axios.get("/video/group?id="+path+"&"+num);
                dispatch(changeVideoList(data.datas));
            }else {
                const data = await axios.get("/video/group?id=59110&"+num);
                dispatch(changeVideoList(data.datas));
            }
        }
    }

}