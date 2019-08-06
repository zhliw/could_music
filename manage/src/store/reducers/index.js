import {
    combineReducers
} from "redux";
import cloudVillage from './CloudVillage';
import login from './Login'
import myMusic from './MyMusic'
export default combineReducers({
    cloudVillage,
    login,
    myMusic
})