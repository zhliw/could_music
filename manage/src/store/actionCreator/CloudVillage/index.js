import actionType from '../../actionType/CloudVillage';
import axios from 'axios'

export const getHotComments = (payload) => {
    return {
        type: actionType.GET_HOT_COMMENTS,
        payload
    }
}
export const getNewMV = (payload)=>{
    return{
        type: actionType.GET_NEW_MV,
        payload
    }
}

export default {
    getHotComments(){
        return async (dispatch) => {
            const data = await axios.get("/comment/hot?id=186016&type=0");
            dispatch(getHotComments(data.hotComments));
        }
    },
    getNewMV(i=1){
        return async (dispatch) =>{
            const {data} =await axios.get("/mv/first?limit="+10*i);
            dispatch(getNewMV(data))
        }
    }

}
