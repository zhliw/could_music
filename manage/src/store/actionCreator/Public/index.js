import actionType from '../../actionType/Public';
import axios from 'axios'

export const getSongList = (payload) => {
    return {
        type: actionType.GET_SONG_LIST,
        payload
    }
}
export const removeSongList=(payload)=>{
    return {
        type: actionType.REMOVE_SONG_LIST,
        payload
    }
}

export default {
    getSongList(id){
        return async (dispatch) => {
            const data = await axios.get('/playlist/detail?id='+id);
            dispatch(getSongList(data));
        }
    },
    removeSongList(){
        return (dispatch)=>{
            dispatch(removeSongList({}));
        }
    }
}