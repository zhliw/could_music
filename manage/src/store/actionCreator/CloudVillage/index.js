import actionType from '../../actionType/CloudVillage';
import axios from 'axios'

export const getHotComments = (payload) => {
    return {
        type: actionType.GET_HOT_COMMENTS,
        payload
    }
}

export default {
    getHotComments(){
        return async (dispatch) => {
            const data = await axios.get("/comment/hot?id=186016&type=0");
            dispatch(getHotComments(data.hotComments));
        }
    }
}
