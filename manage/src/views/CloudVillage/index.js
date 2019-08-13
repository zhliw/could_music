import React from "react";
import {
    NavLink,
    Link,
    Route
} from "react-router-dom";
import "../../assets/css/cloudVillage/main.scss"
import Event from "./event";
import Square from "./Square"

export default class CloudVillage extends React.Component {
    componentWillMount() {
        //判断是否登录
        document.title = "网易云云村"
    }
    render() {
        return (
            <div className={"cv-scroll"}>
                {/*头部*/}
                <div className={"cloudVillage"}>

                    <div className={"cloudVillage-header"}>
                        <div className={"cloudVillage-header-l"}>
                            <NavLink className={"iconfont"} to={"/"}>&#xe75c;</NavLink>
                        </div>

                        <div className={"cloudVillage-header-m"}>
                            <NavLink activeClassName="cloudVillage-m" exact to={"/cloudvillage"}>广场</NavLink>
                            <NavLink activeClassName="cloudVillage-m" to={"/cloudvillage/2"}>动态</NavLink>
                        </div>

                        <div className={"cloudVillage-header-r"}>
                            <NavLink className={"iconfont"} to={"/"}>&#xe630;</NavLink>
                        </div>
                    </div>

                </div>
                {/*主体*/}
                <Route className={"cloudVillage-main"} exact path={"/cloudvillage"} component={Square}></Route>
                <Route path={"/cloudvillage/2"} component={Event}></Route>
                {/*底部*/}
                {/*footer*/}
                <this.MyNav></this.MyNav>
            </div>

        )
    }
}