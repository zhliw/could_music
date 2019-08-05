import {
    combineReducers
} from "redux";
import cloudVillage from './CloudVillage';
import login from './Login'
export default combineReducers({
    cloudVillage,
    login
})