import React from "react";
import { Link,Route,BrowserRouter as Router } from 'react-router-dom'
export default class Find extends React.Component{
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        return(
            <div>
                <this.MyNav></this.MyNav>
                <Router>
                {
                    this.props.children.map((v,i)=>{
                        return (
                                <Link to={v.to} key={i}>{v.context}</Link>
                        )
                    })
                }
                {
                    this.props.children.map((v,i)=>{
                        return (
                                <Route key={i} path={v.path} component={v.component}></Route>
                        )
                    })
                }
                </Router>
            </div>
        )
    }
}