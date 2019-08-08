import initState from '../../state/CloudVillage';
import actionType from '../../actionType/CloudVillage';

export default function (state = initState, {type, payload}) {
    state = JSON.parse(JSON.stringify(state));
    if (type === actionType.GET_HOT_COMMENTS) {
        state.hotComments = payload;
    } else if (type === actionType.GET_NEW_MV) {
        state.newMV = payload;
        console.log("newMV", payload)
    } else if (type === actionType.GET_EVENTS_LIST) {
        state.eventsList = payload
    }
    return state;
}
