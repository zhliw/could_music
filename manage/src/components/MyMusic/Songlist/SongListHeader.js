import React from 'react'
import {
    connect
} from 'react-redux';
import {bindActionCreators} from "redux";
import '../../../assets/css/MyMusic/songList.css'
import {Icon} from 'antd'
import myPublicCreator from "../../../store/actionCreator/Public";
class SongListHeader extends React.Component{
    constructor(){
        super()
    }
    render() {
        return(
            <div className={"song_List_Header"}>
                <div>
                    <Icon type="arrow-left" onClick={()=>{
                        this.props.removeSongList()
                        window.history.go(-1)
                    }} style={{fontSize:'0.4rem'}}/>
                    <i style={{fontSize:'0.32rem',marginLeft:'0.3rem'}}>歌单</i>
                </div>
                <div>
                    <Icon type="search" style={{fontSize:'0.4rem'}}/>
                </div>
            </div>
        )
    }
}
export default connect((state) => ({songList: state.allPublic.songList}), (dispatch) => bindActionCreators(myPublicCreator,dispatch))(SongListHeader)
