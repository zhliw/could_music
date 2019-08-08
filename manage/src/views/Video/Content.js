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
import { Spin, Alert,Modal, Button ,Drawer } from 'antd';





class Content extends React.Component{
    constructor(){
        super();
        this.state = {
            isMore:true,
            visible: false,
            videoInfo:{},
            videoSrc:{},
            videuRelevant:[],
            videoCommit:[],
            offset:1
        }
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


    getScrollTop(){
        var scrollTop = 0;
        if(document.getElementsByClassName("videoCenter")[0] && document.getElementsByClassName("videoCenter")[0].scrollTop) {
            scrollTop = document.getElementsByClassName("videoCenter")[0].scrollTop;
        } else if(document.body) {
            scrollTop = document.body.scrollTop;
        }
        return scrollTop;
    }
    getClientHeight() {
        var clientHeight = 0;
        if(document.body.clientHeight && document.getElementsByClassName("videoCenter")[0].clientHeight) {
            clientHeight = Math.min(document.body.clientHeight, document.getElementsByClassName("videoCenter")[0].clientHeight);
        } else {
            clientHeight = Math.max(document.body.clientHeight, document.getElementsByClassName("videoCenter")[0].clientHeight);
        }
        return clientHeight;
    }
    getScrollHeight() {
        return Math.max(document.body.scrollHeight, document.getElementsByClassName("videoCenter")[0].scrollHeight);
    }
    componentDidMount(){
        this.props.getVideoList();
        document.getElementsByClassName("videoCenter")[0].onscroll=()=>{
            if(this.getScrollTop() + this.getClientHeight() === this.getScrollHeight()){
                this.props.changeVideoList();
            }
        }
        document.getElementsByClassName("videoCenter")[0].scrollTop = 0
    }
    start(vid){
        var videL = document.getElementById(vid);
        console.log(videL.duration);
        if (videL.paused) {
            videL.play();
            this.refs[vid].style.display="none"
        } else {
            videL.pause();
            this.refs[vid].style.display="block"
        }
    }
    thumbsUp(vid){
        if(localStorage.userPhone){
            console.log(vid)
        }else {
            this.props.history.push("/user/login")
        }
    }
    getVideoInfo(vid){
        console.log(vid);
        var videL = document.getElementById(vid);
        let num = 0;
        videL.pause();
        this.axios.get("/video/detail?id="+vid).then(data=>{
            this.setState({
                videoInfo:data.data
            },()=>{
                // console.log(this.state.videoInfo);
                this.showDrawer()
                this.axios.get("/video/url?id="+vid).then(data=>{
                    // console.log(data);
                    this.setState({
                        videoSrc:data.urls
                    },()=>{
                        this.axios.get("/related/allvideo?id="+vid).then(data=>{
                            this.setState({
                                videuRelevant:data.data
                            },()=>{
                                this.axios.get("/comment/video?id="+vid+"&limit=20&offset="+20*num).then(data=>{
                                    this.setState({
                                        videoCommit:data.comments
                                    })
                                    console.log(data);
                                })
                            })
                        })
                    })
                })
            });
        })

    }
    render(){
        let videoList = this.props.videoList || [];
        return(
            <div id={"myDiv"}>
                <div style={{background:"#000"}}>
                {
                    this.state.visible?(<Drawer
                        bodyStyle={{
                            margin:0,
                            padding:0,
                            color:"rgba(0,0,0,0.8)",
                            height:"100%",
                            textAlign:"left",
                            position:"relative"
                        }}
                        destroyOnClose={true}
                        width="100%"
                        placement="right"
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                    >
                        <p><span onClick={this.onClose} style={{position:"absolute",top:"0.35rem",zIndex:"10",left:"0.35rem",color:"#ccc"}} className={"iconfont"}>&#xe6ac;</span></p>
                        <p style={{background:"#000"}}>
                            {
                                this.state.videoSrc.length>0?(<video width={"100%"} height={211} autoPlay controls src={this.state.videoSrc[0].url.replace(/\s*/g,"")} ></video>):""
                            }
                        </p>
                        <div style={{padding:"0 0.35rem"}}>
                            <p style={{fontSize:"0.34rem",padding:"0.2rem 0"}}>
                                {
                                    this.state.videoInfo.title
                                }
                            </p>
                            <div style={{display:"flex",justifyContent:"space-between"}}>
                                <p style={{width:"2rem",}}>{this.state.videoInfo.playTime}次观看</p>
                                {/*<div style={{display:"flex",justifyContent:"space-between"}}>*/}
                                {/*{*/}
                                {/*this.state.videoInfo.videoGroup.map((v,i)=>{*/}
                                {/*return(*/}
                                {/*<p key={i} style={{fontSize:"0.2rem",border:"0.01rem solid #ccc",flexShrink:"1",width:"auto",padding:"0.1rem 0.15rem",margin:"0 0.12rem",borderRadius:"0.2rem"}}>{v.name}</p>*/}
                                {/*)*/}
                                {/*})*/}
                                {/*}*/}
                                {/*</div>*/}
                            </div>
                            <div style={{display:"flex",justifyContent:"space-between",marginTop:"0.7rem"}}>
                                <p className={"iconfont"}>&#xe613;{this.state.videoInfo.praisedCount}</p>
                                <p className={"iconfont"}>&#xe632;{this.state.videoInfo.subscribeCount}</p>
                                <p className={"iconfont"}>&#xe628;{this.state.videoInfo.commentCount}</p>
                            </div>

                        </div>
                        <div style={{display:"flex", justifyContent:"space-between", height:"1rem",borderTop:"0.01rem solid #e4e4e4",borderBottom:"0.01rem solid #e4e4e4",padding:"0.2rem 0.35rem 0"}}>
                            <p><img style={{width:"0.6rem",height:"0.6rem",borderRadius:"50%",margin:"0 0.2rem 0 0"}} src={this.state.videoInfo.avatarUrl} alt=""/><span style={{fontSize:"0.26rem",color:"#000"}}>{this.state.videoInfo.creator.nickname}</span></p>
                            <p style={{height:"0.52rem",width:"1.24rem",background:"#ff403b",borderRadius:"0.26rem",color:"#fff",textAlign:"center",lineHeight:"0.52rem"}}>十<span style={{marginLeft:"0.08rem"}}>关注</span></p>
                        </div>
                        <div style={{padding:"0 0.35rem"}}>
                            <div>
                                <p style={{marginTop:"0.2rem",fontSize:"0.26rem",color:"#000",fontWeight:"600",lineHeight:"0.86rem"}}>相关推荐</p>
                                {
                                    this.state.videuRelevant.map((v,i)=>{
                                        return(
                                            <div key={i} style={{marginTop:"0.2rem",display:"flex",justifyContent:"space-between"}}>
                                                <img style={{width:"2.48rem",height:"1.4rem",borderRadius:"0.1rem"}} src={v.coverUrl} alt=""/>
                                                <div style={{width:"4.3rem",marginLeft:"0.1rem"}}>
                                                    <p style={{fontSize:"0.28rem",fontWeight:"500",color:"#000"}}>{v.title}</p>
                                                    <p style={{fontSize:"0.24rem",color:"#9d9d9d"}}>{v.durationms}, {v.creator[0].userName}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div>
                                <p style={{marginTop:"0.2rem",fontSize:"0.26rem",color:"#000",fontWeight:"600",lineHeight:"0.86rem"}}>精彩评论</p>
                                {
                                    this.state.videoCommit.map((v,i)=>{
                                        return(
                                            <div key={i} style={{display:"flex"}}>
                                                <div style={{width:"0.6rem",marginRight:"0.2rem",padding:"0.26rem 0"}}>
                                                    <img style={{width:"0.6rem",height:"0.6rem",borderRadius:"50%"}} src={v.user.avatarUrl} alt=""/>
                                                </div>
                                                <div style={{borderBottom:"0.01rem solid #ccc",width:"6.2rem"}}>
                                                    <div style={{display:"flex",justifyContent:"space-between",padding:"0.26rem 0 0"}}>
                                                        <div>
                                                            <h2 style={{fontSize:"0.24rem",color:"#000"}}>{v.user.nickname}</h2>
                                                            <h3 style={{fontSize:"0.16rem",color:"#9c9c9c"}}>{v.time}</h3>
                                                        </div>
                                                        <div className={"iconfont"}>&#xe613;{v.likedCount}</div>
                                                    </div>
                                                    <p style={{lineHeight:"0.48rem",fontSize:"0.28rem",color:"#000"}}>{v.content}</p>
                                                    {
                                                        v.beReplied.length>0?(<span style={{color:"#8598b3",lineHeight:"0.48rem",marginBottom:"0.24rem"}}>{v.beReplied.length}条回复></span>):""
                                                    }

                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                    </Drawer>):(<div></div>)
                }


            </div>
                {
                    videoList.map((v,i)=>{
                        return(
                            <div key={i} className={"videoContent"}>
                                {
                                    v.type/1 === 1?(<p className={"videoContentImgWarp"}><video  onClick={this.start.bind(this,v.data.vid)} className={"videoContentImg"} id={v.data.vid} poster={v.data.coverUrl} src={v.data.urlInfo.url.replace(/\s*/g,"")} alt=""></video>
                                        <button type="button" ref={v.data.vid} className={"iconfont icon-bofang1 videobutton"} style={{fontSize:"1rem"}}  onClick={this.start.bind(this,v.data.vid)}></button> </p>):(<p></p>)
                                }
                                <div className={"videoContentP"}  onClick={this.getVideoInfo.bind(this,v.data.vid)}>
                                    <p>{v.data.title}</p>
                                </div>

                                <div className={"videoContentBottom"}>
                                    <div>
                                        {
                                            v.data.creator?<p><img src={v.data.creator.avatarUrl} alt=""/><span>{v.data.creator.nickname}</span></p>:""
                                        }
                                    </div>
                                    <div style={{display:"flex",width:"3.2rem",justifyContent:"space-between",marginTop:"0.1rem"}}>
                                        <p onClick={this.thumbsUp.bind(this,v.data.vid)}><span id={"thumbsUp"} className={"icon-dianzan iconfont"} style={{color:"#ccc"}}></span>{v.data.praisedCount}</p>
                                        <p>评论{v.data.commentCount}</p>
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
export default connect((state) => ({videoList:state.Video.videoList}), (dispatch) => bindActionCreators(videos, dispatch))(Content)
