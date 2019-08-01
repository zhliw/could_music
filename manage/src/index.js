import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./assets/css/MyNavLink.css"
import "./assets/js/rem.js"
import "./assets/font/iconfont.css"
import App from './App';
import MyNav from "./router/NavLink"
import * as serviceWorker from './serviceWorker';

React.Component.prototype.MyNav = MyNav
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
