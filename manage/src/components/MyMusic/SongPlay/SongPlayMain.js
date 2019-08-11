import React from 'react'
import {
    connect
} from 'react-redux'
import {bindActionCreators} from "redux";
import {
    withRouter
} from "react-router-dom"
import play from '../../../common/play'
import {timeToData} from '../../../common/filters'

import {Icon,Slider,message} from 'antd'
import myPublicCreator from "../../../store/actionCreator/Public";
import SongPlayList from './SongPlayList'
class SongPlayMain extends React.Component{
    constructor(){
        super()
        this.state={
            duration:0,
            timeupdate:0,
        }
        this.i=1;
        this.nowId=null;
    }
    componentDidMount() {
        this.audio=document.getElementById("allPlay");
        // this.lyricGo=document.getElementById("lyricGo")
        const _this=this;
        this.audio.addEventListener("canplay", function () {   //当浏览器能够开始播放指定的音频/视频时，发生 canplay 事件。
            _this.audio.play()
            _this.setState({
                duration:_this.audio.duration
            })
        });
        this.audio.addEventListener("timeupdate", function () { //播放时间改变   这个会一直打印
            // console.log(_this.props.lyric,_this.audio.currentTime)
            if (_this.props.lyric.length>0){
                try {
                    let index=_this.props.lyric.findIndex(v=>v[0]>_this.audio.currentTime)
                    _this.lyricGo=document.getElementById("lyricGo")
                    if(_this.lyricGo){
                        if(_this.lyricGo.children.length>0){
                            for (let i = 0; i < _this.lyricGo.children.length ; i++) {
                                _this.lyricGo.children[i].style.color=''
                            }
                            _this.lyricGo.children[index-1].style.color='red'
                            _this.lyricGo.style.top=4-0.6*(index-1)+'rem'
                        }
                    }
                }catch (e) {
                    console.log(e)
                }


            }
            _this.setState({
                timeupdate:_this.audio.currentTime
            })
        });
        this.audio.addEventListener("playing", function () {   //当音频/视频在已因缓冲而暂停或停止后已就绪时
            _this.audio.play()
        });
        this.audio.addEventListener("error", function () {   //请求数据时遇到错误
            message.info('网络连接错误')
        });
        this.audio.addEventListener("ended", function () {   //当播放完一首歌曲时也会触发
            if (!_this.audio.loop){
                _this.nextSong.call(_this,this.i===3?Math.round(this.props.songPlayList.length*Math.random()):1)
            }

        });
        this.nowId=this.props[0].id;
        this.audio.src=this.props[0].url;
    }
    nextSong(type){
        if (this.props.songPlayList.length>0){
            let index=this.props.songPlayList.findIndex(v=>v.id===this.nowId)
            if (index+type>=this.props.songPlayList.length)
                index=-1
            if (index+type <0 )
                index=this.props.songPlayList.length
            this.props.getMyLyric(this.props.songPlayList[index+type].id)
            this.props.getSongPlayUrl(this.props.songPlayList[index+type].id)
            this.nowId=this.props.songPlayList[index+type].id;
        }else {
            this.audio.loop=true
        }
    }
    isLoop(){
        ++this.i;
        this.i>3?(this.i=1):(this.i=this.i)
        if (this.i===2) this.audio.loop=true
        else this.audio.loop=false
    }
    render() {
        return (
            <div className={'SongPlayMain'}>
                {/*设置音量*/}
                <>
                    <div className="icon-wrapper">
                        <Icon type="sound" />
                        <Slider defaultValue={this.audio?this.audio.volume*100:100} onChange={(value)=>{
                            this.audio.volume=value/100
                        }}/>
                    </div>
                </>
                {/*歌词界面*/}
                <div className={'lyricShow'}>
                    <div id={'lyricGo'}>
                        {
                            this.props.lyric?this.props.lyric.map((v,i)=>{
                                return <div key={i} className={'eveLyric'}>{v[1]}</div>
                            }):null
                        }
                    </div>
                </div>
                {/*时间和啦啦啦*/}
                <div className={'progressShow'}>
                    <div className={'nowTime'}>{timeToData(this.state.timeupdate)}</div>
                    <Slider value={Math.round(this.state.timeupdate/this.state.duration*100)} onChange={(value)=>{
                        this.audio.currentTime =value/100*this.state.duration
                    }} tipFormatter={null}></Slider>
                    <div className={'allTime'}>{timeToData(this.state.duration)}</div>
                </div>
                {/*暂停与否*/}
                <div className={'songPlayButton'}>
                    <i style={{fontSize:'0.4rem'}} className={'iconfont '+(this.i===1?"icon-loop-6":(this.i===2?"icon-danquxunhuan":"icon-suiji-copy"))} onClick={this.isLoop.bind(this)}></i>
                    <Icon type="step-backward" onClick={()=>this.nextSong(-1)}/>
                    {
                        this.audio?this.audio.paused?<Icon type="play-circle" onClick={()=>this.audio.play()}/>:<Icon type="pause-circle" onClick={()=> this.audio.pause()} />:null
                    }
                    <Icon type="step-forward" onClick={()=>this.nextSong(1)} />
                    <SongPlayList songPlayList={this.props.songPlayList}></SongPlayList>
                </div>
            </div>
        )
    }

}
export default withRouter(connect((state)=>({myLyric:state.allPublic.myLyric,songPlayUrl:state.allPublic.songPlayUrl}),(dispatch) => bindActionCreators(myPublicCreator,dispatch))(SongPlayMain))
