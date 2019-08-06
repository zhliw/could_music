import {
    combineReducers
} from "redux";
import cloudVillage from './CloudVillage';
import Video from './Video';
import login from './Login'
import myMusic from './MyMusic'
export default combineReducers({
    Video,
    cloudVillage,
    login,
    myMusic
})