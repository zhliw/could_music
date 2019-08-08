import React from 'react'
import MusicTag from './MusicTag'
export default class SongListMain extends React.Component{
    constructor(){
        super()
    }
    render() {
        return(
                <div  className={"SongListMain"}>
                    <div className={'SongListMainaa'}>
                        <div style={{height:'1.5rem'}}>

                        </div>
                        <div className={"SongListMainSniky"}>
                            <i className={'iconfont icon-bofang'}></i>
                            <div>
                                播放全部
                                <i>(共{this.props.playlist.trackCount}首)</i>
                            </div>
                            <div>33万</div>
                        </div>
                    </div>
                    {
                        this.props.playlist.tracks.map((v,i)=>{
                            return (
                                this.props.privileges[i].st===-200? <MusicTag {...v} {...{background:'red',count:i+1}} key={v.id}></MusicTag>: <MusicTag {...v} {...{count:i+1}} key={v.id}></MusicTag>
                            )
                        })
                    }

                </div>
    )
    }
}