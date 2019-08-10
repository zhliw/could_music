import React from 'react'
import {
    connect
} from 'react-redux'
import {bindActionCreators} from "redux";
import {
    withRouter
} from "react-router-dom"
import SongPlayHeader from './SongPlayHeader'
import SongPlayMain from './SongPlayMain'
import SongPlayFoot from './SongPlayFoot'
import '../../../assets/css/MyMusic/songPlay.css'
import myPublicCreator from "../../../store/actionCreator/Public";
class SongPlay extends React.Component{
    render() {
        return (
            <div className={'SongPlay'}>
                <SongPlayHeader></SongPlayHeader>
                <SongPlayMain></SongPlayMain>
                <SongPlayFoot></SongPlayFoot>
            </div>
        )
    }
}
export default withRouter(connect((state)=>({myLyric:state.allPublic.myLyric,songPlayUrl:state.allPublic.songPlayUrl}),(dispatch) => bindActionCreators(myPublicCreator,dispatch))(SongPlay))