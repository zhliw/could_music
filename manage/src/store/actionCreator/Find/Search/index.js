import axios from 'axios'
import searchType from '../../../actionType/Find/Search'
function searchList(payload){
    console.log('sssss',payload)
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
            console.log(11111,data.result.songs)
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