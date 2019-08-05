import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./assets/css/MyNavLink.css";
import './assets/css/Login.css'
import "./assets/js/rem.js";
import './assets/css/Find/find.css'
import App from './App';
import MyNav from "./router/NavLink";
import "./assets/font/iconfont.css"
import "./assets/font/iconfont.css";
import "./assets/css/all.css";
import axios from "axios";
import * as serviceWorker from './serviceWorker';
//Find_Return
import Return from './components/Find/return'
import Play from './views/Find/indexComponent/Play'
//Find返回的全局组件
import store from './store'
import {
    Provider
} from 'react-redux'
React.Component.prototype.Return=Return
React.Component.prototype.Play=Play
React.Component.prototype.MyNav = MyNav;
React.Component.prototype.axios = axios;
axios.interceptors.request.use(config=>{
    config.url = "/wyy"+config.url;
    return config
})
axios.interceptors.response.use(({data})=>{
    return data
})
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
