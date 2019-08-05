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
    return state;
}
