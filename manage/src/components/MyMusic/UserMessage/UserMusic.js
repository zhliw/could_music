import React from 'react'
import Mesg from '../common/mesg'
import {numDis} from '../../../common/filters'
export default class UserMusic extends React.Component{
    render() {
        return (
            <div>
                <div className={"UserMusic_Top"}>
                    <span>歌单{this.props.playList[0].length+1}</span>
                    <span>共被收藏{numDis(this.props.userDetail.profile.playlistBeSubscribedCount)}次</span>
                </div>
                {
                    this.props.playList[0].map((v,i)=>{
                        return (<Mesg {...v} key={i}><span>,播放{numDis(this.props.playList[0][i].playCount)}次</span></Mesg>)
                    })
                }
                <div className={"UserMusic_Bot"}>
                    <span>收藏的歌单{this.props.playList[1].length}</span>
                </div>
                {
                    this.props.playList[1].map((v,i)=>{
                        return (<Mesg {...v} key={i}><span>,by{this.props.playList[1][i].creator.nickname},{numDis(this.props.playList[1][i].playCount)}次</span></Mesg>)
                    })
                }
            </div>
        )
    }
}