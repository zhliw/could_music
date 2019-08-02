import React from "react";
import {
    NavLink,
    Route
} from 'react-router-dom'
import "../../assets/css/cloudVillage/main.scss"
import Main from "./Main";


export default class CloudVillage extends React.Component{
    render(){
        return(
            <div>
                {/*头部*/}
                <div className={"cloudVillage"}>

                    <div className={"cloudVillage-header"}>
                        <div className={"cloudVillage-header-l"}>
                            <NavLink className={"iconfont"} to={"/"}>&#xe75c;</NavLink>
                        </div>

                        <div className={"cloudVillage-header-m"}>
                            <NavLink activeClassName="cloudVillage-m" exact to={"/cloudvillage/1"}>广场</NavLink>
                            <NavLink activeClassName="cloudVillage-m" to={"/cloudvillage/2"}>动态</NavLink>
                        </div>

                        <div className={"cloudVillage-header-r"}>
                            <NavLink className={"iconfont"} to={"/"}>&#xe630;</NavLink>
                        </div>
                    </div>

                </div>
                {/*主体*/}
                <Route className={"cloudVillage-main"} path={"/cloudvillage/:type"} component={Main}></Route>
                <this.MyNav></this.MyNav>
            </div>

        )
    }
}