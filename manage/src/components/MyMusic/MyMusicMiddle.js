import React from 'react';
import {
    connect
} from 'react-redux';
import {
    withRouter
} from "react-router-dom"
import {bindActionCreators} from "redux";
import myMusicCreator from "../../store/actionCreator/MyMusic";
import Fold from './common/Fold'
import { Collapse } from 'antd';
import myMusic from "../../store/reducers/MyMusic";
const { Panel } = Collapse;

class MyMusicMiddle extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        this.props.getUserMessage();
        this.props.getUserPlayList(432441345);
        this.props.getRecentPlay(432441345);
    }
    render() {
        let userMessage=this.props.userMessage||{};
        let playList=this.props.playList||[];
        let recentPlay=this.props.recentPlay||[]
        return (
            < div style={{flex: '1', overflow: 'auto'}}>
                <div className={'MyMusic-Middle'}>
                    < div style={{display: 'flex'}}>
                        <div style={{fontSize:'0.5rem',background:'#fff'}} className={'iconfont MyMusic-Middle-left icon-zuijinbofang'}></div>
                        < div className={'MyMusic-Middle-right'}> 最近播放（{recentPlay.length}）
                        </div>
                    </div>
                    < div style={{display: 'flex'}}>
                        <div style={{fontSize:'0.8rem',background:'#fff'}} className={'iconfont MyMusic-Middle-left icon-diantai'}></div>
                        < div className={'MyMusic-Middle-right'}> 我的电台（{userMessage.djRadioCount}）
                        </div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div style={{fontSize:'0.5rem',background:'#fff'}} className={'iconfont MyMusic-Middle-left icon-wodeshoucang'}></div>
                        <div className={'MyMusic-Middle-right'}> 我的收藏（{userMessage.artistCount}）
                        </div>
                    </div>
                </div>
                <div className={'MyMusic-Bottom'}>
                    {
                        userMessage.createdPlaylistCount>0?<Fold message={playList[0]}>创建的歌单</Fold>:null
                    }
                    {
                        userMessage.subPlaylistCount>0?<Fold message={playList[1]}>收藏的歌单</Fold>:null
                    }
                    <div style={{height:'1rem'}}></div>
                </div>
            </div>
        )
    }
}
export default withRouter(connect((state) => ({userMessage: state.myMusic.userMessage,playList:state.myMusic.playList,recentPlay:state.myMusic.recentPlay}), (dispatch) => bindActionCreators(myMusicCreator, dispatch))(MyMusicMiddle))