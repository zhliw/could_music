import React from "react";
import "../../assets/css/video/index.css"
import {
    NavLink,
    Route
} from "react-router-dom"
import Content from "./Content"
import MyLink from "../../router/NavLink"
export default class Video extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    render(){
        return(
            <div className={"video"}>
                <div className={"videoHeader"}>
                    <ul className={"videoHeaderUl"}>
                        <li><NavLink activeClassName={"activeNav"} to={"/video/4107"}>说唱</NavLink></li>
                        <li><NavLink activeClassName={"activeNav"} to={"/video/3109"}>街舞</NavLink></li>
                        <li><NavLink activeClassName={"activeNav"} to={"/video/11106"}>热血动漫</NavLink></li>
                        <li><NavLink activeClassName={"activeNav"} to={"/video/26141"}>广告</NavLink></li>
                        <li><NavLink activeClassName={"activeNav"} to={"/video/58100"}>现场</NavLink></li>
                        <li><NavLink activeClassName={"activeNav"} to={"/video/60100"}>翻唱</NavLink></li>
                        <li><NavLink activeClassName={"activeNav"} to={"/video/1000"}>MV</NavLink></li>
                        <li><NavLink activeClassName={"activeNav"} to={"/video/1101"}>舞蹈</NavLink></li>
                        <li><NavLink activeClassName={"activeNav"} to={"/video/57104"}>ACG音乐</NavLink></li>
                        <li><NavLink activeClassName={"activeNav"} to={"/video/58101"}>听BGM</NavLink></li>
                    </ul>
                </div>
                <div className={"videoCenter"}>
                    <Route exact path={"/video/:id"} component={Content}></Route>
                </div>
                <div className={"videoBottom"}>
                    <MyLink></MyLink>
                </div>
            </div>
        )
    }
}