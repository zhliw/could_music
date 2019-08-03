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
               
                </Router>
            </div>
        )
    }
}