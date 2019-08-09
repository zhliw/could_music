import actionType from '../../actionType/MyMusic';
import axios from 'axios'
export const getUserMessage = (payload) => {
    return {
        type: actionType.GET_USER_MESSAGE,
        payload
    }
}
export const getUserPlayList= (payload)=>{
    return{
        type: actionType.GET_USER_PLAYLIST,
        payload
    }
}
export const getRecentPlay=(payload)=>{
    return {
        type:actionType.GET_RECENT_PLAY,
        payload
    }
}
export default {
    getUserMessage(){
        return async (dispatch) => {
            const data = await axios.get('/user/subcount');
            dispatch(getUserMessage(data));
        }
    },
    getUserPlayList(id){
        return async (dispatch) =>{
            let createdPlaylistCount=[];
            let subPlaylistCount=[]
            const {playlist}=await axios.get('/user/playlist?uid='+id)
            playlist.map(v=>{
                if(v.userId===id){
                    createdPlaylistCount.push(v)
                }else {
                    subPlaylistCount.push(v)
                }
            })
            dispatch(getUserPlayList([createdPlaylistCount,subPlaylistCount]))
        }
    },
    getRecentPlay(id){
        return async (dispatch) => {
            const data = await axios.get('/user/record?uid='+id+'&type=1');
            dispatch(getRecentPlay(data.weekData));
        }
    }
}
