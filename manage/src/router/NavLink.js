import React from "react"
import {
    NavLink
} from "react-router-dom";
import router from "./"
export default class MyNav extends React.Component {
    render() {
        return (
            <div>
                {
                    router.map((v,i)=>{
                        return(
                            <NavLink key={i} to={v.to} exact={v.exact}>{v.context}|</NavLink>
                        )
                    })
                }
            </div>
        )
    }
}