import React from "react"
import {
    connect
} from 'react-redux';
import {
    withRouter
} from "react-router-dom"
import {bindActionCreators} from "redux";
import "../../../assets/css/MyMusic/dj.css"
import myMusicCreator from "../../../store/actionCreator/MyMusic";
import Recommend from "./Recommend"
import CreateDj from "./CreateDj"
import Moreradio from "./Moreradio"

class MyFM extends React.Component {
    componentDidMount() {
        this.props.getCommend();
    }

    render() {
        let recommend = this.props.recommend || [];
        // console.log(recommend, 8023333)
        // console.log(this.props)
        return (
            <div className={"MyDj"}>
                <CreateDj></CreateDj>
                <Recommend recommend={recommend}></Recommend>
                <Moreradio {...this.props}></Moreradio>
            </div>
        )
    }
}

export default withRouter(connect((state) => ({recommend: state.myMusic.recommend}), (dispatch) => bindActionCreators(myMusicCreator, dispatch))(MyFM))