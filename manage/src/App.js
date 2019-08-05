import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    NavLink,
    Route
} from "react-router-dom"
import router from "./router"

/***********************/
class App extends React.Component{
    render(){
        return (
            <div className="App">
                <Router>
                    {
                        router.map((v,i)=>{
                            return(
                                <Route key={i} exact={v.exact} path={v.path} component={v.component}></Route>
                            )
                        })
                    }
                </Router>
            </div>
        );      
    }
}

export default App;
