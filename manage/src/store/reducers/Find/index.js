import stateInit from '../../state/Find/Search'
import searchType from '../../actionType/Find/Search'
export default function (state=stateInit,{type,payload}) {
    // 深复制
    state = JSON.parse(JSON.stringify(state));
    if(type === searchType.SEARCHLIST){
        state.search.push(payload);
    }
    if(type === searchType.THESONG){
        state.theSong=payload;
    }
    return state;
}