import React from "react"
import {
    Route,
    NavLink,
    withRouter
} from "react-router-dom";
import {
    connect
} from "react-redux";
import {bindActionCreators} from "redux"
import videos from "../../store/actionCreator/Video/index";
import {Spin, Alert, Modal, Button, Drawer} from 'antd';
import scroll from "../../common/video/scroll"
import {controlVideo} from "../../common/video/controlVideo"
import filters from "../../common/filters";
import Comment from "../../components/Video/Comment"


class Content extends React.Component {
    constructor() {
        super();
        this.state = {
            isMore: true,
            visible: false,
            videoInfo: {},
            videoSrc: {},
            videoRelevant: [],
            videoComment: [],
            offset: 1,
            commentValue: "",
            isLoading: false
        }
        this.timer = ""
    }

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    componentDidMount() {
        this.props.getVideoList();
        document.getElementById("videoCenter").onscroll = () => {
            if (scroll.getScrollTop("videoCenter")+ scroll.getClientHeight("videoCenter") == scroll.getScrollHeight("videoCenter")) {
                this.props.changeVideoList();
            }
        }
        document.getElementById("videoCenter").scrollTop = 0
    }



    submit(vid) {
        console.log(this.state.commentValue, this.state.videoInfo.vid)
        this.axios.get("/comment?t=1&type=5&id=" + this.state.videoInfo.vid + "&content=" + this.state.commentValue).then(data => {
            // console.log(data.comment,this.state.videoComment[0]);
            console.log(1111, data.comment, this.state.videoComment.length);
            this.setState({
                commentValue: "",
                isLoading: true
            })
            this.timer = setTimeout(() => {
                this.state.videoComment.unshift(data.comment);
                document.getElementById("videoCommont").innerText = document.getElementById("videoCommont").innerText / 1 + 1
                clearTimeout(this.timer);
                this.setState({
                    isLoading: false
                })
            }, 1500)

        })
    }

    thumbsUp(vid) {
        if (localStorage.userPhone) {
            console.log(vid)
        } else {
            this.props.history.push("/user/login")
        }
    }

    getVideoInfo(vid) {
        console.log(vid);
        if(document.getElementById(vid)){
            var videL = document.getElementById(vid);
            videL.pause();
        }
        this.axios.get("/video/detail?id=" + vid).then(data => {
            this.setState({
                videoInfo: data.data
            }, () => {
                this.showDrawer()
                this.getVideoSrc();
                this.getVideoRelevant();
                this.getComment();
            });
        })

    }

    getVideoSrc() {
        this.axios.get("/video/url?id=" + this.state.videoInfo.vid).then(data => {
            this.setState({
                videoSrc: data.urls
            })
        })
    }

    getVideoRelevant() {
        this.axios.get("/related/allvideo?id=" + this.state.videoInfo.vid).then(data => {
            console.log(data.data)
            this.setState({
                videoRelevant: data.data
            })
        })
    }

    getComment() {
        let num = 0;
        this.axios.get("/comment/video?id=" + this.state.videoInfo.vid + "&limit=20&offset=" + 20 * num).then(data => {
            this.setState({
                videoComment: data.comments
            })
            console.log(1111111111111111, data);
        })
    }

    render() {
        let videoList = this.props.videoList || [];
        return (
            <div id={"myDiv"}>

                <div style={{background: "#000"}}>
                    {
                        this.state.visible ? (<Drawer
                            bodyStyle={{
                                margin: 0,
                                padding: 0,
                                color: "rgba(0,0,0,0.8)",
                                height: "100%",
                                textAlign: "left",
                                position: "relative",
                                display: "flex",
                                flexDirection: "column",
                                overflow: "hidden"
                            }}
                            destroyOnClose={true}
                            width="100%"
                            placement="right"
                            closable={false}
                            onClose={this.onClose}
                            visible={this.state.visible}
                        >
                            <div>
                                {
                                    this.state.isLoading ? <div
                                        style={{position: "fixed", top: "6.6rem", left: "3.4rem", zIndex: "10000"}}>
                                        <Spin size={"large"}/><p>发布评论中......</p></div> : ""
                                }
                                <p><span onClick={this.onClose} style={{
                                    position: "absolute",
                                    top: "0.35rem",
                                    zIndex: "10",
                                    left: "0.35rem",
                                    color: "#ccc"
                                }} className={"iconfont"}>&#xe6ac;</span></p>

                                <p style={{background: "#000"}}>
                                    {
                                        this.state.videoSrc.length > 0 ? (
                                            <video width={"100%"} height={210} style={{verticalAlign: "middle"}}
                                                   autoPlay controls
                                                   src={this.state.videoSrc[0].url.replace(/\s*/g, "")}></video>) : ""
                                    }
                                </p>
                            </div>
                            <div style={{flex: "1", overflow: "auto"}}>
                                <div style={{padding: "0 0.35rem"}}>
                                    <p style={{fontSize: "0.34rem", padding: "0.2rem 0"}}>
                                        {
                                            this.state.videoInfo.title
                                        }
                                    </p>
                                    <div style={{display: "flex", justifyContent: "space-between"}}>
                                        <p style={{width: "2rem",}}>{this.state.videoInfo.playTime}次观看</p>
                                    </div>
                                    <div
                                        style={{display: "flex", justifyContent: "space-between", marginTop: "0.7rem"}}>
                                        <p className={"iconfont"}>&#xe613;{this.state.videoInfo.praisedCount}</p>
                                        <p className={"iconfont"}>&#xe632;{this.state.videoInfo.subscribeCount}</p>
                                        <p className={"icon-youcexinxi iconfont"}
                                           id={"videoCommont"}>{this.state.videoInfo.commentCount}</p>
                                    </div>
                                </div>
                                <div style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    height: "1rem",
                                    borderTop: "0.01rem solid #e4e4e4",
                                    borderBottom: "0.01rem solid #e4e4e4",
                                    padding: "0.2rem 0.35rem 0",
                                    background: "#fff",
                                    position: "sticky",
                                    top: "0"
                                }}>
                                    <p><img style={{
                                        width: "0.6rem",
                                        height: "0.6rem",
                                        borderRadius: "50%",
                                        margin: "0 0.2rem 0 0"
                                    }} src={this.state.videoInfo.avatarUrl} alt=""/><span style={{
                                        fontSize: "0.26rem",
                                        color: "#000"
                                    }}>{this.state.videoInfo.creator.nickname}</span></p>
                                    <p style={{
                                        height: "0.52rem",
                                        width: "1.24rem",
                                        background: "#ff403b",
                                        borderRadius: "0.26rem",
                                        color: "#fff",
                                        textAlign: "center",
                                        lineHeight: "0.52rem"
                                    }}>十<span style={{marginLeft: "0.08rem"}}>关注</span></p>
                                </div>






                                <div style={{padding: "0 0.35rem"}}>
                                    <div>
                                        <p style={{
                                            marginTop: "0.2rem",
                                            fontSize: "0.26rem",
                                            color: "#000",
                                            fontWeight: "600",
                                            lineHeight: "0.86rem"
                                        }}>相关推荐</p>
                                        {
                                            this.state.videoRelevant.map((v, i) => {
                                                return (
                                                    <div key={i} style={{
                                                        marginTop: "0.2rem",
                                                        display: "flex",
                                                        justifyContent: "space-between"
                                                    }} onClick={this.getVideoInfo.bind(this,v.vid)}>
                                                        <img style={{
                                                            width: "2.48rem",
                                                            height: "1.4rem",
                                                            borderRadius: "0.1rem"
                                                        }} src={v.coverUrl} alt=""/>
                                                        <div style={{width: "4.3rem", marginLeft: "0.1rem"}}>
                                                            <p style={{
                                                                fontSize: "0.28rem",
                                                                fontWeight: "500",
                                                                color: "#000"
                                                            }}>{v.title}</p>
                                                            <p style={{
                                                                fontSize: "0.24rem",
                                                                color: "#9d9d9d"
                                                            }}>{v.durationms}, {v.creator[0].userName}</p>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div>
                                        <p style={{
                                            marginTop: "0.2rem",
                                            fontSize: "0.26rem",
                                            color: "#000",
                                            fontWeight: "600",
                                            lineHeight: "0.86rem"
                                        }}>精彩评论</p>
                                        {
                                            this.state.videoComment.map((v, i) => {
                                                return (
                                                    <div key={i} style={{display: "flex"}}>
                                                        <div style={{
                                                            width: "0.6rem",
                                                            marginRight: "0.2rem",
                                                            padding: "0.26rem 0"
                                                        }}>
                                                            <img style={{
                                                                width: "0.6rem",
                                                                height: "0.6rem",
                                                                borderRadius: "50%"
                                                            }} src={v.user.avatarUrl} alt=""/>
                                                        </div>
                                                        <div style={{
                                                            borderBottom: "0.01rem solid #ccc",
                                                            width: "6.2rem"
                                                        }}>
                                                            <div style={{
                                                                display: "flex",
                                                                justifyContent: "space-between",
                                                                padding: "0.26rem 0 0"
                                                            }}>
                                                                <div>
                                                                    <h2 style={{
                                                                        fontSize: "0.24rem",
                                                                        color: "#000"
                                                                    }}>{v.user.nickname}</h2>
                                                                    <h3 style={{
                                                                        fontSize: "0.16rem",
                                                                        color: "#9c9c9c"
                                                                    }}>{filters.date(v.time)}</h3>
                                                                </div>
                                                                <div className={"iconfont"}>&#xe613;{v.likedCount}</div>
                                                            </div>
                                                            <p style={{
                                                                lineHeight: "0.48rem",
                                                                fontSize: "0.28rem",
                                                                color: "#000"
                                                            }}>{v.content}</p>
                                                            {
                                                                v.beReplied && v.beReplied.length > 0 ? (<span style={{
                                                                    color: "#8598b3",
                                                                    lineHeight: "0.48rem",
                                                                    marginBottom: "0.24rem"
                                                                }}>{v.beReplied.length}条回复></span>) : ""
                                                            }

                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>








                            </div>
                            <div>
                                <p style={{height: "0.97rem", borderTop: "0.01rem solid #d5d5d5"}}>
                                    <input style={{
                                        border: "0",
                                        height: "100%",
                                        width: "80%",
                                        paddingLeft: "0.32rem",
                                        color: "#c0c0c0"
                                    }} type="text" onChange={() => {
                                        this.setState({commentValue: this.refs.commentValue.value})
                                    }} placeholder={"发表评论"} ref={"commentValue"} value={this.state.commentValue}/>
                                    <input type="button" value={"发送"} onClick={this.submit.bind(this)} style={{
                                        border: "0",
                                        height: "100%",
                                        color: "#fff",
                                        fontSize: "0.3rem",
                                        borderRadius: "0.2rem",
                                        background: "#ff483f",
                                        width: "20%"
                                    }}/>
                                </p>
                            </div>
                        </Drawer>) : (<div></div>)
                    }
                </div>
                {
                    videoList.map((v, i) => {
                        return (
                            <div key={i} className={"videoContent"}>
                                {
                                    v.type / 1 === 1 ? (<p className={"videoContentImgWarp"}>
                                        <video onClick={controlVideo.bind(this,this,v.data.vid)} className={"videoContentImg"}
                                               id={v.data.vid} poster={v.data.coverUrl}
                                               src={v.data.urlInfo.url.replace(/\s*/g, "")} alt=""></video>
                                        <button type="button" ref={v.data.vid}
                                                className={"iconfont icon-bofang1 videobutton"}
                                                style={{fontSize: "1rem"}}
                                                onClick={controlVideo.bind(this,this,v.data.vid)}></button>
                                    </p>) : (<p></p>)
                                }
                                <div className={"videoContentP"} onClick={this.getVideoInfo.bind(this, v.data.vid)}>
                                    <p>{v.data.title}</p>
                                </div>

                                <div className={"videoContentBottom"}>
                                    <div>
                                        {
                                            v.data.creator ? <p><img src={v.data.creator.avatarUrl}
                                                                     alt=""/><span>{v.data.creator.nickname}</span>
                                            </p> : ""
                                        }
                                    </div>
                                    <div style={{
                                        display: "flex",
                                        width: "3.2rem",
                                        justifyContent: "space-between",
                                        marginTop: "0.1rem"
                                    }}>
                                        <p onClick={this.thumbsUp.bind(this, v.data.vid)} className={"iconfont icon-dianzan"}>{v.data.praisedCount}</p>
                                        <p className={"iconfont icon-youcexinxi"}>{v.data.commentCount}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <div>
                    <Spin size="small"/>
                </div>
            </div>
        )

    }
}

export default connect((state) => ({videoList: state.Video.videoList}), (dispatch) => bindActionCreators(videos, dispatch))(Content)
