import axios from 'axios'
import searchType from '../../../actionType/Find/Search'
function searchList(payload){
    return {
        type:searchType.SEARCHLIST,
        payload
    }
}
function theSong(payload){
    return{
        type:searchType.THESONG,
        payload
    }
}
export default{ 
    searchList(keyword){
        return async (dispatch) => {
            const data=await axios(`/search?keywords=${keyword}`)
            dispatch(searchList(data.result.songs))
        }
    },

    theSong(id){
        return async(dispatch)=>{
            const data=await axios(`/song/url?id=${id}`)
            dispatch(theSong(data))
        }
    }
}