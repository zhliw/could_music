import React from "react"
import {
    NavLink
} from "react-router-dom";
import router from "./"
export default class MyNav extends React.Component {
    render() {
        return (
            <div className={"footer"}>
                <div style={{width:"100%"}} className={"top"}>
                    {
                        router.map((v,i)=>{
                            return(
                                <NavLink  style={{width:"0.54rem",height:"0.54rem",lineHeight:"0.54rem",textAlign:"center",borderRadius:"50%"}} activeStyle={{color:"#fff",background:"linear-gradient(#ff3b32,#ff564d)"}} key={i} to={v.to} exact={v.exact}>
                                    <div className={v.iconName+" iconfont"} style={{fontSize:"18px"}}></div>
                                </NavLink>
                            )
                        })
                    }
                </div>
                <div style={{width:"100%"}} className={"top"}>
                    {
                        router.map((v,i)=>{
                            return(
                                <NavLink activeStyle={{color:"#ff3d2f"}} key={i} to={v.to} exact={v.exact}>
                                    <p style={{width:"50px"}}>{v.context}</p>
                                </NavLink>
                            )
                        })
                    }
                </div>

            </div>
        )
    }
}