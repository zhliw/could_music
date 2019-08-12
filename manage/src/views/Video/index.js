import React from "react";
import "../../assets/css/video/index.css"
import {
    NavLink,
    Route
} from "react-router-dom"
import Content from "./Content"
import MyLink from "../../router/NavLink"
import router from "../../router/index"
export default class Video extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            routerChildren:[]
        }
    }
    componentWillMount(){
        this.setState({
            routerChildren:router.find(v=>v.to==="/video").children
        })
    }
    render(){
        return(
            <div className={"video"}>
                <div className={"videoHeader"}>
                    <ul className={"videoHeaderUl"}>
                        {
                            this.state.routerChildren.map((v,i)=>{
                                return(
                                    <li key={i}><NavLink exact={v.exact} activeClassName={"activeNav"} to={v.to}>{v.content}</NavLink></li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div id={"videoCenter"} className={"videoCenter"}>
                    {
                        this.state.routerChildren.map((v,i)=>{
                            return(
                                <Route key={i} exact={v.exact} path={v.path} component={Content}></Route>
                            )
                        })
                    }
                </div>
                <div className={"videoBottom"}>
                    <MyLink></MyLink>
                </div>
            </div>
        )
    }
}