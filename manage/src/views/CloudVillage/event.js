import React from "react";
import "../../assets/css/cloudVillage/events.scss"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import cloudVillageCreator from '../../store/actionCreator/CloudVillage'
import EventsVideo from "../../components/CloudVillage/EventsVideo"
import EventsPic from "../../components/CloudVillage/EventsPic";
import {Drawer, Button} from 'antd';
import EventsInfo from "../../components/CloudVillage/EventsInfo";

class Event extends React.Component {
    constructor() {
        super();
        this.state = {
            info: {},
            i: 0
        }
    }

    state = {visible: false};

    render() {
        let eventsList = this.props.eventsList || [];
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
                                        <img onClick={() => {
                                            this.props.history.push("/usermessage", v.user.userId)
                                        }} style={{width: ".8rem", height: "auto", borderRadius: "50%"}}
                                             src={v.user.avatarUrl} alt=""/>
                                    </div>
                                    <div onClick={this.getInfo.bind(this, v, i)} className={"left cv-video-item-r"}>
                                        <div onClick={() => {
                                            this.props.history.push("/usermessage", v.user.userId)
                                        }}>
                                            <p className={"left cv-video-userName"}>{v.user.nickname}</p>
                                            <p className={"cv-video-fans"}>{v.user.followeds}粉丝</p>
                                            <div className={"cv-video-msg"}>{JSON.parse(v.json).msg}</div>
                                        </div>

                                        {
                                            v.pics.length > 0 ? <EventsPic {...this.props} i={i}></EventsPic> : ""
                                        }
                                        {
                                            v.json.length > 0 ? <EventsVideo id={JSON.parse(v.json)}></EventsVideo> : ""
                                        }
                                        <div className={"cv-video-handle"}>
                                            <span className={"iconfont "}>&#xe616;<i>{v.insiteForwardCount}</i></span>
                                            <span className={"iconfont "}>&#xe641;<i>{v.info.commentCount}</i></span>
                                            <span className={"iconfont "}>&#xe613;<i>{v.info.likedCount}</i></span>
                                        </div>
                                    </div>
                                    {/*<Button type="primary" onClick={this.showDrawer}>*/}
                                    {/*    Open*/}
                                    {/*</Button>*/}

                                </div>

                            )
                        })
                    }
                    {
                        this.state.info.user ? (<Drawer
                            className={"cv-events-drawer"}
                            closable={false}
                            placement="right"
                            visible={this.state.visible}
                            // bodyStyle={{width:"7.5rem"}}
                            width={"100%"}
                        >
                            <header>
                                <i className={"iconfont"} onClick={this.onClose}>&#xe6ac;</i>
                                <b className={"cv-events-h"}>动态</b>
                                <i className={"iconfont"} onClick={this.onClose}>&#xe630;</i>
                            </header>
                            <div className={"left cv-video-userPic"}>
                                <img style={{width: ".8rem", height: "auto", borderRadius: "50%"}}
                                     src={this.state.info.user.avatarUrl} alt=""/>
                            </div>
                            <div className={"left cv-video-item-r"}>
                                <p className={"left cv-video-userName"}>{this.state.info.user.nickname}</p>
                                <p className={"cv-video-fans"}>{this.state.info.eventTime}</p>
                                <div className={"cv-video-msg"}>{JSON.parse(this.state.info.json).msg}</div>
                                {
                                    this.state.info.pics.length > 0 ?
                                        <EventsPic {...this.props} i={this.state.i}></EventsPic> : ""
                                }
                                {
                                    this.state.info.json.length > 0 ?
                                        <EventsVideo id={JSON.parse(this.state.info.json)}></EventsVideo> : ""
                                }
                                <div className={"cv-video-handle"}>
                                    <span className={"iconfont "}>&#xe616;
                                        <i>{this.state.info.insiteForwardCount}</i></span>
                                    <span className={"iconfont "}>&#xe641;
                                        <i>{this.state.info.info.commentCount}</i></span>
                                    <span className={"iconfont "}>&#xe613;
                                        <i>{this.state.info.info.likedCount}</i></span>
                                </div>
                            </div>

                        </Drawer>) : ""
                    }
                    {/*<EventsInfo info={this.state.info}></EventsInfo>*/}
                </div>
            </div>
        )
    }

    getInfo(v, i) {
        this.setState({
            visible: true,
            info: v,
            i
        });
    }


    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    componentDidMount() {
        this.props.getEventsList()
    }
}

export default connect((state) => ({eventsList: state.cloudVillage.eventsList}), (dispatch) => bindActionCreators(cloudVillageCreator, dispatch))(Event)
