import React from 'react'
// import Mydian from '../common/Mydian'
import {
    withRouter
} from "react-router-dom"
import {
    connect
} from 'react-redux'
import {bindActionCreators} from "redux";
import {message} from 'antd'
import myPublicCreator from "../../../store/actionCreator/Public";
 class MusicTag extends React.Component{

    render() {
        return (
            <div style={{background:this.props.background?'#cccccc':""}} className={'MusicTag'} onClick={!this.props.background?()=>{
                this.props.history.push('/SongPlay',{songid:this.props.id,songlistid:this.props.songs.playlist.id})
            }:()=>{
                message.info('暂无版权')
            }}>
                <span className={'MusicTagCount'}>{this.props.count}</span>
                <div className={'MusicTagShow'}>
                    <div className={"MusicTagShowTop"}>
                        <span>{this.props.name}</span>
                        {
                            this.props.alia.length>0?<i>({this.props.alia})</i>:''
                        }
                    </div>
                    <div className={'MusicTagShowBot'}>{this.props.ar[0].name}-{this.props.al.name}</div>
                </div>
                <div className={"MusicTagMore"} style={{lineHeight:'1rem',width:'1.5rem'}}>
                    {
                        this.props.mv? <span className={"iconfont icon-shipin"}></span>:<span></span>
                    }
                    <span className={"iconfont icon-gengduo2"}></span>
                    {/*<Mydian></Mydian>*/}
                </div>
            </div>
        )
    }
}

export default withRouter(connect((state) => ({songPlayList:state.allPublic.songPlayList}),(dispatch) => bindActionCreators(myPublicCreator,dispatch))(MusicTag))