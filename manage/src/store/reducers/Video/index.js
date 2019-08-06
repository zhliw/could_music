import initVideoList from "../../state/Video/index";
import actionType from "../../actionType/Video/index";

export default function (state = initVideoList,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type === actionType.GET_VIDEO_LIST){
        state.videoList = []
        state.videoList =payload;
    }else if(type === actionType.CHANGE_VIDEO_LIST){
        state.videoList = [...state.videoList,...payload];
    }
    return state;
}