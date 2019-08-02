import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./assets/css/MyNavLink.css";
import './assets/css/Login.css'
import "./assets/js/rem.js";
import App from './App';
import MyNav from "./router/NavLink";
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import "./assets/font/iconfont.css"
import axios from "axios";
React.Component.prototype.MyNav = MyNav;
React.Component.prototype.axios = axios;
axios.interceptors.request.use(config=>{
    config.url = "/wyy"+config.url;
    return config
})
axios.interceptors.response.use(({data})=>{
    return data
})

=======
import "./assets/font/iconfont.css";
import "./assets/css/all.css";
>>>>>>> 12bcddd957def7e16ee18de00136f9ff9c8fdbae

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
