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
    constructor(){
        super()
    }
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
                <audio id={'allPlay'} src={'http://m7.music.126.net/20190809182443/b57f3b967c8c0b32ea9900ada3229c06/ymusic/0653/0452/525f/19d29f005838d661fef8e557608089ec.mp3'}></audio>
            </div>
        );      
    }
}

export default App;
