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
    return state;
}
