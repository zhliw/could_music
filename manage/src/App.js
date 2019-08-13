import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    NavLink,
    Route
} from "react-router-dom"
import router from "./router"
import {
    connect
} from 'react-redux'
import {bindActionCreators} from "redux";
import myPublicCreator from "./store/actionCreator/Public";

/***********************/
class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="App">
                <Router>
                    {
                        router.map((v, i) => {
                            return (
                                <Route key={i} exact={v.exact} path={v.path} component={v.component}></Route>
                            )
                        })
                    }
                </Router>
                <audio id={'allPlay'} src={this.props.songPlayUrl[0] ? this.props.songPlayUrl[0].url : null}></audio>
            </div>

        );
    }
}

export default connect((state) => ({
    myLyric: state.allPublic.myLyric,
    songPlayUrl: state.allPublic.songPlayUrl,
    songPlayList: state.allPublic.songPlayList
}), (dispatch) => bindActionCreators(myPublicCreator, dispatch))(App);
