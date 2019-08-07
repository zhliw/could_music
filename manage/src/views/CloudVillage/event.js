import React from "react";
import "../../assets/css/cloudVillage/events.scss"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import cloudVillageCreator from '../../store/actionCreator/CloudVillage'
import EventsVideo from "../../components/CloudVillage/EventsVideo"

class Event extends React.Component {
    render() {
        console.log(this.props.eventsList)
        let eventsList = this.props.eventsList || []
        return (
            <div className={"cv-event"}>
                <header>
                    <div className={"cv-event-public"}><i className={"iconfont"}>#</i>发动态</div>
                    <div className={"cv-event-public"}><i className={"iconfont"}>#</i>发布视频</div>
                </header>
                <div className={"cv-event-main"}>
                    {
                        eventsList.map((v, i) => {
                            return (
                                <div className={"cv-video-item"} key={i}>
                                    <div className={"left cv-video-userPic"}>
                                        <img style={{width:".8rem" ,height:"auto",borderRadius:"50%"}} src={v.user.avatarUrl} alt=""/>
                                    </div>
                                    <div className={"left cv-video-item-r"}>
                                        <p className={"left cv-video-userName"}>{v.user.nickname}</p>
                                        <p className={"cv-video-fans"}>{v.user.followeds}粉丝</p>
                                        <div className={"cv-video-msg"}>{JSON.parse(v.json).msg}</div>
                                        {
                                            v.json.length>0?<EventsVideo id={JSON.parse(v.json)}></EventsVideo>:""
                                            // JSON.parse(v.json).videoId?"":<EventsVideo id={JSON.parse(v.json).videoId}></EventsVideo>
                                            // video: JSON.parse(v.json).videoId
                                            // JSON.parse(v.json).song?<audio src={JSON.parse(v.json).song.id}></audio>:<video src={}></video>
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.getEventsList()
    }
}

export default connect((state) => ({eventsList: state.cloudVillage.eventsList}), (dispatch) => bindActionCreators(cloudVillageCreator, dispatch))(Event)
// export default connect((state) => ({hotComments: state.cloudVillage.hotComments,newMV:state.cloudVillage.newMV}), (dispatch) => bindActionCreators(cloudVillageCreator, dispatch))(Square)