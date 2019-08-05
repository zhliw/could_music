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
            console.log("actionCreator-->getComments");
            const data = await axios.get("/comment/hot?id=186016&type=0");
            console.log(data)
            dispatch(getHotComments(data.hotComments));
        }
    }
}
