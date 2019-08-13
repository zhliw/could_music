import actionType from '../../actionType/CloudVillage';
import axios from 'axios'

export const getHotComments = (payload) => {
    return {
        type: actionType.GET_HOT_COMMENTS,
        payload
    }
}
export const getNewMV = (payload) => {
    return {
        type: actionType.GET_NEW_MV,
        payload
    }
}
export const getEventsList = (payload) => {
    return {
        type: actionType.GET_EVENTS_LIST,
        payload
    }
}


export default {
    getHotComments() {
        return async (dispatch) => {
            const data = await axios.get("/comment/hot?id=186016&type=0");
            dispatch(getHotComments(data.hotComments));
        }
    },
    getNewMV(i = 1,_this) {
        return async (dispatch) => {
            const {data} = await axios.get("/mv/first?limit=" + 10 * i);
            if (_this.props.newMV.length!==data.length) _this.waterfall(data);
            dispatch(getNewMV(data));

        }
    },
    getEventsList(m = 1) {
        return async (dispatch) => {
            const data = await axios.get("/event?pagesize=" + 20 * m + "&lasttime=1556740526369");
            dispatch(getEventsList(data.event))
        }
    },
    del() {
        return (dispatch) => {
           dispatch({
               type:"DEL",
               payload:[]
           })
        }
    }

}
