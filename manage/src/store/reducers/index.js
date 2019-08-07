import {
    combineReducers
} from "redux";
import cloudVillage from './CloudVillage';
import login from './Login'
import myMusic from './MyMusic'
import allPublic from './Public'
export default combineReducers({
    cloudVillage,
    login,
    myMusic,
    allPublic
})