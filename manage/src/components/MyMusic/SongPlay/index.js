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
import '../../../assets/css/MyMusic/songPlay.css'
import myPublicCreator from "../../../store/actionCreator/Public";
import {myLyric} from '../../../common/filters'
class SongPlay extends React.Component{
    constructor(){
        super()
    }
    componentDidMount() {
        this.props.getMyLyric(this.props.location.state.songid)
        this.props.getSongPlayUrl(this.props.location.state.songid)
        if (this.props.location.state.songlistid){
            this.props.getSongList(this.props.location.state.songlistid)
        }

    }

    render() {
        if (Object.keys(this.props.songList).length>0 && this.props.songPlayList.length < 1){
            let newArr=[]
            for(let i=0;i<this.props.songList.playlist.tracks.length;i++){
                if (this.props.songList.privileges[i].st!==-200){
                    newArr.push(this.props.songList.playlist.tracks[i])
                }
            }
            this.props.getSongPlayList(newArr)
        }
        return (
            <>
                {
                    <div className={'SongPlay'}>
                        <SongPlayHeader></SongPlayHeader>
                        {
                            this.props.songPlayUrl.length>0?<SongPlayMain {...this.props.songPlayUrl} songPlayList={this.props.songPlayList} lyric={myLyric(this.props.myLyric.lyric?this.props.myLyric.lyric:"")}></SongPlayMain>:null
                        }
                    </div>
                }
            </>
        )
    }
}
export default withRouter(connect((state)=>({songList:state.allPublic.songList,myLyric:state.allPublic.myLyric,songPlayUrl:state.allPublic.songPlayUrl,songPlayList:state.allPublic.songPlayList}),(dispatch) => bindActionCreators(myPublicCreator,dispatch))(SongPlay))