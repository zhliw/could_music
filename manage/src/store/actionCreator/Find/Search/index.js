import axios from 'axios'
import searchType from '../../../actionType/Find/Search'
function searchList(payload){
    console.log('sssss',payload)
    return {
        type:searchType.SEARCHLIST,
        payload
    }
}
export default{ 
    searchList(keyword){
        return async (dispatch) => {
            const data=await axios(`/search?keywords=${keyword}`)
            console.log(11111,data)
            dispatch(searchList(data))
        }
    }
}