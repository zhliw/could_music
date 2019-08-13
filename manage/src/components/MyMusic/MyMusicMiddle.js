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
import { Collapse,Button } from 'antd';
import MyFM from "./MyFM"
import RecentPlay from "./RecentPlay"
import myMusic from "../../store/reducers/MyMusic";

const { Panel } = Collapse;
class MyMusicMiddle extends React.Component {
    constructor(){
        super()
        this.myDianObj={
            top:'创建的歌单',
            msg:[
                {
                    title:"歌单管理",
                    className:'iconfont icon--duoxuantiankong'
                },
                {
                    title:"创建新歌单",
                    className:'iconfont icon-jia'
                },
                {
                    title:"恢复歌单",
                    className:'iconfont icon-history1'
                }
            ]
        }
        this.myCountDianObj={
            top:'收藏的歌单',
            msg:[{
                    title:"歌单管理",
                    className:'iconfont icon--duoxuantiankong'
                }]
        }
    }
    componentDidMount() {
        if (localStorage.userInfo){
            this.props.getUserMessage();
            this.props.getUserPlayList(JSON.parse(localStorage.userInfo).account.id);
            this.props.getRecentPlay(JSON.parse(localStorage.userInfo).account.id);
        }

    }
    render() {
        // console.log(this.props.userMessage)
        let userMessage=this.props.userMessage||{};
        let playList=this.props.playList||[];
        let recentPlay=this.props.recentPlay||[];
        // console.log(userMessage,32456)

        return (
            < div style={{flex: '1', overflow: 'auto'}}>
                <div className={'MyMusic-Middle'}>
                    < div style={{display: 'flex'}}>
                        <div style={{fontSize:'0.5rem',background:'#fff'}} className={'iconfont MyMusic-Middle-left icon-zuijinbofang'}></div>
                        < div className={'MyMusic-Middle-right'} onClick={()=>{
                            this.props.history.push('/RecentPlay',JSON.parse(localStorage.userInfo).account.id)
                        }}> 最近播放（{recentPlay.length||0}）
                        </div>
                    </div>
                    < div style={{display: 'flex'}}>
                        <div style={{fontSize:'0.8rem',background:'#fff'}} className={'iconfont MyMusic-Middle-left icon-diantai'}></div>
                        < div className={'MyMusic-Middle-right'} onClick={()=>{
                            this.props.history.push('/MyFM')
                        }}> 我的电台（{userMessage.djRadioCount||0}）
                        </div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div style={{fontSize:'0.5rem',background:'#fff'}} className={'iconfont MyMusic-Middle-left icon-wodeshoucang'}></div>
                        <div className={'MyMusic-Middle-right'}> 我的收藏（{userMessage.artistCount||0}）
                        </div>
                    </div>
                </div>
                {
                    localStorage.userInfo?(<div className={'MyMusic-Bottom'}>
                        {
                            userMessage.createdPlaylistCount>0?<Fold myDianObj={this.myDianObj} message={playList[0]}>创建的歌单</Fold>:null
                        }
                        {
                            userMessage.subPlaylistCount>0?<Fold myDianObj={this.myCountDianObj} message={playList[1]}>收藏的歌单</Fold>:null
                        }
                        <div style={{height:'1rem'}}></div></div>):(<Button onClick={()=>{
                            this.props.history.push('/user/login')}} style={{marginTop:"1.5rem",borderRadius:"0.25rem",fontSize:"0.3rem",background:"#f00",color:"#fff"}}>请登录</Button>)

                }

            </div>
        )
    }
}
export default withRouter(connect((state) => ({userMessage: state.myMusic.userMessage,playList:state.myMusic.playList,recentPlay:state.myMusic.recentPlay}), (dispatch) => bindActionCreators(myMusicCreator, dispatch))(MyMusicMiddle))