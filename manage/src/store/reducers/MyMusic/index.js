import initState from '../../state/MyMusic';
import actionType from '../../actionType/MyMusic';

export default function (state = initState, {type, payload}) {
    state = JSON.parse(JSON.stringify(state));
    if (type === actionType.GET_USER_MESSAGE) {
        state.userMessage = payload;
    }
    if(type === actionType.GET_USER_PLAYLIST){
        state.playList = payload;
    }
    if(type === actionType.GET_RECENT_PLAY){
        state.recentPlay = payload;
    }
    if(type===actionType.GET_RECOMMEND){
        state.recommend=payload
    }
    if(type===actionType.GET_SUBLIST){
        state.sublist=payload
    }
    if (type===actionType.GET_DJDETAIL){
        state.djdetail=payload
    }
    if(type===actionType.GET_DJPROGRAM){
        state.djProgram=payload
    }
    return state;
}
