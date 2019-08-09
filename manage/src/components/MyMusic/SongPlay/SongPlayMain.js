import React from 'react'
import play from '../../../common/play'
import {timeToData} from '../../../common/filters'
import {Icon} from 'antd'
export default class SongPlayMain extends React.Component{
    constructor(){
        super()
        this.state={
            duration:0,
            timeupdate:0,
        }
    }
    componentDidMount() {
        const _this=this;
        this.audio=document.getElementById("allPlay")
        this.audio.addEventListener("canplay", function () {   //当浏览器能够开始播放指定的音频/视频时，发生 canplay 事件。
            _this.setState({
                duration:_this.audio.duration
            })
        });
        this.audio.addEventListener("timeupdate", function () { //播放时间改变   这个会一直打印
            console.log(_this.audio.currentTime)
            // _this.setState({
            //     timeupdate:
            // })
        });
        this.audio.addEventListener("playing", function () {   //当音频/视频在已因缓冲而暂停或停止后已就绪时
            //可以干些什么
            _this.audio.play()
        });
    }
    stop(){
        if(this.audio.paused){
            this.audio.play()
        }else {
            this.audio.pause()
        }
    }
    render() {
        return (
            <div className={'SongPlayMain'}>
                <div>
                </div>
                <div className={'progressShow'}>
                    <div>00:00</div>
                    <div className={'myProgress'}>
                        <div className={'progressGo'}></div>
                        <span className={'smallPoint'}></span>
                    </div>
                    <div>05:12</div>
                </div>

                <Icon type="step-backward" />
                <Icon type="play-circle" onClick={this.stop.bind(this)} />
                <Icon type="step-forward" />
            </div>
        )
    }

}
