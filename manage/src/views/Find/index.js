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
                            <div key={i}>
                                <Link to={v.to}>{v.context}</Link>
                            </div>
                        )
                    })
                }
                {
                    this.props.children.map((v,i)=>{
                        return (
                            <div key={i}>
                                <Route path={v.path} component={v.component}></Route>
                            </div>
                        )
                    })
                }
                </Router>
            </div>
        )
    }
}