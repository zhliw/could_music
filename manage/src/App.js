import React from 'react';
import './App.css';
import GuardRouter from './router/GuardRouter'
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
                                <Route key={i} exact={v.exact} path={v.path} render={()=><GuardRouter {...v}></GuardRouter>}></Route>
                            )
                        })
                    }
                </Router>
            </div>
        );
    }
}

export default App;
