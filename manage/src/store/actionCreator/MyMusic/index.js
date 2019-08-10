import actionType from '../../actionType/MyMusic';
import axios from 'axios'

export const getUserMessage = (payload) => {
    return {
        type: actionType.GET_USER_MESSAGE,
        payload
    }
}
export const getUserPlayList = (payload) => {
    return {
        type: actionType.GET_USER_PLAYLIST,
        payload
    }
}
export const getRecentPlay = (payload) => {
    return {
        type: actionType.GET_RECENT_PLAY,
        payload
    }
}
export const getCommend = (payload) => {
    return {
        type: actionType.GET_RECOMMEND,
        payload
    }
}
export const getSublist=(payload)=>{
    return{
        type:actionType.GET_SUBLIST,
        payload
    }
}
export const getDjDetail=(payload)=>{
    return{
        type:actionType.GET_DJDETAIL,
        payload
    }
}
export const getProgram=(payload)=>{
    return{
        type:actionType.GET_DJPROGRAM,
        payload
    }
}
export default {
    getUserMessage() {
        return async (dispatch) => {
            const data = await axios.get('/user/subcount');
            dispatch(getUserMessage(data));
        }
    },
    getUserPlayList(id) {
        return async (dispatch) => {
            let createdPlaylistCount = [];
            let subPlaylistCount = []
            const {playlist} = await axios.get('/user/playlist?uid=' + id)
            playlist.map(v => {
                if (v.subscribed) {
                    subPlaylistCount.push(v)
                } else {
                    createdPlaylistCount.push(v)
                }
            })
            dispatch(getUserPlayList([createdPlaylistCount, subPlaylistCount]))
        }
    },
    getRecentPlay(id) {
        return async (dispatch) => {
            const data = await axios.get('/user/record?uid=' + id + '&type=1');
            dispatch(getRecentPlay(data.weekData));
        }
    },
    getCommend() {
        return async (dispatch) => {
            const {data} = await axios.get("/dj/category/recommend");
            // console.log(data)
            let results = [];
            let len = data.length
            for (let i = 0; i < 6; i++) {
                results.push(data[parseInt(Math.random() * len)])
            }
            // let radios=Math.floor((Math.random()*results.radios[0].length))
            //  console.log(results)
            let radios = []
            for (let i = 0; i < results.length; i++) {
                radios.push(results[i].radios[parseInt(results[i].radios.length * Math.random())])
            }
            // console.log(radios, 987654)
            dispatch(getCommend(radios));
        }
    },
    getSublist(){
        return async(dispatch)=>{
            const data=await axios.get("/dj/sublist");
            // console.log(1111111111111,data);
            dispatch(getSublist(data))
        }
    },
    getDjDetail(id){
        return async (dispatch)=>{
            this.getSublist();
            const data=await axios.get("/dj/detail?rid="+id)
            // console.log(802333333333,data);
            dispatch(getDjDetail(data));
        }
    },
    getProgram(id){
        return async(dispatch)=>{
            const data=await axios.get("/dj/program?rid="+id)
            dispatch(getProgram(data))
        }
    }
}
