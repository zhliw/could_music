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
            // const num = Math.floor(Math.random()*10000);
            let path;
            if(window.location.pathname === "/video"){
                path = '';
            }else {
                path = window.location.pathname.replace("/video/","")
            }
            if(path){
                const data = await axios.get("/video/group?id="+path+"&"+0);
                dispatch(getVideoList(data.datas));
            }else {
                const data = await axios.get("/video/group?id=59110&"+0);
                dispatch(getVideoList(data.datas));
            }
        }
    },
    changeVideoList(){
        return async(dispatch)=>{
            const num = Math.floor(Math.random()*10000);
            let path;
            if(window.location.pathname === "/video"){
                path = '';
            }else {
                path = window.location.pathname.replace("/video/","")
            }
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