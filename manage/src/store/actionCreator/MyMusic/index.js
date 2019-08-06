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
export default {
    getUserMessage(){
        return async (dispatch) => {
            const data = await axios.get('/user/subcount');
            dispatch(getUserMessage(data));
        }
    },
    getUserPlayList(){
        return async (dispatch) =>{
            let createdPlaylistCount=[];
            let subPlaylistCount=[]
            const {playlist}=await axios.get('/user/playlist?uid=432441345')
            playlist.map(v=>{
                if(v.subscribed){
                    subPlaylistCount.push(v)
                }else {
                    createdPlaylistCount.push(v)
                }
            })
            dispatch(getUserPlayList([createdPlaylistCount,subPlaylistCount]))
        }
    }
}
