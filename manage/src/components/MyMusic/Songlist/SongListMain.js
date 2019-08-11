import React from 'react'
import MusicTag from './MusicTag'
import {numDis} from '../../../common/filters'
export default class SongListMain extends React.Component{
    constructor(){
        super()
    }
    render() {
        return(
                <div  className={"SongListMain"}>
                    <div className={'SongListMainaa'}>
                        <div style={{height:'1.5rem'}}></div>
                        <div className={"SongListMainSniky"}>
                            <i className={'iconfont icon-bofang'}></i>
                            <div style={{flex:'1',paddingLeft:'0.2rem'}}>
                                播放全部
                                <span>(共{this.props.playlist.trackCount}首)</span>
                            </div>
                            <div>
                                {
                                    this.props.playlist.userId!==JSON.parse(localStorage.userInfo).account.id?<div><span className={"iconfont icon--duoxuantiankong"}></span><span>{numDis(this.props.playlist.subscribedCount)}</span></div>:""
                                }
                            </div>
                        </div>
                    </div>
                    {
                        this.props.playlist.tracks.map((v,i)=>{
                                return (
                                    this.props.privileges[i].st===-200? <MusicTag songs={this.props} {...v} {...{background:'red',count:i+1}} key={v.id}></MusicTag>: <MusicTag songs={this.props} {...v} {...{count:i+1}} key={v.id}></MusicTag>
                                )
                            })
                    }

                </div>
    )
    }
}