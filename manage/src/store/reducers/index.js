import {
    combineReducers
} from "redux";
import cloudVillage from './CloudVillage';
import Video from './Video';
import login from './Login'
import myMusic from './MyMusic'
import find from './Find'
export default combineReducers({
    Video,
    cloudVillage,
    login,
    myMusic,
    find
})