import React from "react"
import {
    NavLink,
    withRouter
} from "react-router-dom";
import router from "./"
class MyNav extends React.Component {
    render() {
        return (
            <div className={"footer"}>
                <div style={{width:"100%"}} className={"top"}>
                    {
                        router.map((v,i)=>{
                            return(
                                v.isShow?<NavLink  style={{width:"0.54rem",height:"0.54rem",lineHeight:"0.54rem",textAlign:"center",borderRadius:"50%"}} activeStyle={{color:"#fff",background:"#f00"}} key={i} to={v.to} exact={v.exact}>
                                    <div className={v.iconName+" iconfont"} style={{fontSize:"18px"}}></div>
                                </NavLink>:null
                            )
                        })
                    }
                </div>
                <div style={{width:"100%"}} className={"top"}>
                    {
                        router.map((v,i)=>{
                            return(
                                v.isShow?<NavLink activeStyle={{color:"#f00"}} key={i} to={v.to} exact={v.exact}>
                                    <p style={{width:"50px"}}>{v.context}</p>
                                </NavLink>:null
                            )
                        })
                    }
                </div>

            </div>
        )
    }
}
export default withRouter(MyNav);