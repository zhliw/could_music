import initState from '../../state/Public';
import actionType from '../../actionType/Public';

export default function (state = initState, {type, payload}) {
    state = JSON.parse(JSON.stringify(state));
    if (type === actionType.GET_SONG_LIST) {
        state.songList = payload;
    }
    if (type === actionType.REMOVE_SONG_LIST) {
        state.songList = payload;
    }
    if(type === actionType.GET_USER_DETAIL) {
        state.userDetail=payload
    }
    if(type === actionType.GET_USER_EVENT) {
        state.userEvent=payload
    }
    if (type===actionType.GET_SONG_PLAY_URL){
        state.songPlayUrl=payload
    }
    return state;
}
