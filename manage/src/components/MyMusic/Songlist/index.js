import React from 'react'
import SongListHeader from './SongListHeader'
import SongListMain from './SongListMain'
import SongListTop from './SongListTop'
import {
    connect
} from 'react-redux'
import {bindActionCreators} from "redux";
import {
    withRouter
} from "react-router-dom"

import myPublicCreator from "../../../store/actionCreator/Public";
class SongList extends React.Component{
    constructor(){
        super()
    }
    componentDidMount() {
        if(this.props.location.state){
            this.props.getSongList(this.props.location.state)
        }
    }
    render() {
        console.log(this.props.songList.playlist)
        return(
            <>
                {
                    this.props.songList.playlist?<div className={"songList"}>
                        <SongListHeader></SongListHeader>
                        <div className={"songListBot"}>
                            <SongListTop {...this.props.songList.playlist}></SongListTop>
                            <SongListMain {...this.props.songList}></SongListMain>
                        </div>
                    </div>:''
                }
            </>
        )
    }
}
export default withRouter(connect((state) => ({songList: state.allPublic.songList}), (dispatch) => bindActionCreators(myPublicCreator,dispatch))(SongList))