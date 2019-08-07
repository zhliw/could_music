import React from 'react';
import "../../assets/css/cloudVillage/video.scss"

export default class CloudVillageVideo extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            pauseBtn: true,
            detail: [],
            foucsState: 1
        }
    }

    render() {
        console.log(32, this.state.foucsState)
        return (
            <div className={"cv"}>
                <div className={"cv-video"}>

                    <button className={"iconfont cv-mv-back "}
                            onClick={() => this.props.history.go(-1)}>&#xe6ac;</button>
                    <video className={"cv-mv-bottom"} src={this.state.data.url}></video>
                    <video className={"cv-mv-top"} src={this.state.data.url} onClick={this.pause.bind(this)}></video>
                    {
                        this.state.pauseBtn ? <button className={"iconfont cv-mv-btn"}
                                                      style={{position: "absolute", zIndex: "6", width: ".5rem"}}
                                                      onClick={this.pause.bind(this)}
                                                      id={"button"}>&#xe6a4;</button> : null
                    }
                </div>
                {/*    用户信息  */}
                <div className={"cv-video-user"}>
                    <span>@ {this.state.detail.artistName}</span>
                    <p>{this.state.detail.briefDesc}</p>
                </div>
                {/*    关注   */}
                <div className={"cv-video-fouce"}>
                    <img style={{width: ".7rem", height: ".7rem", borderRadius: "50%"}} src={this.state.detail.cover}
                         alt=""/>
                    <span className={"right cv-isHave"} onClick={this.foucs.bind(this)}> 收藏ta</span>
                </div>
                {/*    底部、转、赞、评  */}
                <div className={"cv-video-bottom"}>
                    {/*转*/}
                    <span className={"iconfont cv-video-relay"}>&#xe616;<i>{this.state.detail.shareCount}</i></span>
                    {/*评*/}
                    <span className={"iconfont cv-video-commit"}>&#xe641;<i>{this.state.detail.shareCount}</i></span>
                    {/*赞*/}
                    <span className={"iconfont cv-video-up"}>&#xe613;<i>{this.state.detail.shareCount}</i></span>
                </div>
            </div>

        );
    }

    foucs() {

        if (!localStorage.userInfo) {
            this.props.history.push("/user/login");
        } else {
            // 关注接口 1为关注 其它为取消关注  /artist/sub?id=6452&t=1
            this.axios.get("/artist/sub?id=" + this.state.detail.artistId / 1 + "&t=" + this.state.foucsState / 1).then((data) => {
                console.log(111, data)
                if (this.state.foucsState === 1) {
                    document.getElementsByClassName("cv-isHave")[0].remove();
                    document.getElementsByClassName("cv-video-fouce")[0].style.background = "none";
                    document.getElementsByClassName("cv-video-fouce")[0].style.textAlign = "center";
                    this.setState({
                        foucsState: 0
                    })
                } 
            })
        }
    }

    pause() {
        var videL = document.getElementsByClassName('cv-mv-top')[0];
        var button = document.getElementById('button');
        this.setState({
            pauseBtn: !this.state.pauseBtn
        })
        if (videL.paused) {
            videL.play();
            document.getElementsByClassName('cv-mv-bottom')[0].play()

        } else {
            videL.pause();
            document.getElementsByClassName('cv-mv-bottom')[0].pause()
        }
    }

    async componentDidMount() {
        const {data} = await this.axios.get("/mv/url?id=" + this.props.match.params.id);
        const detail = await this.axios.get("/mv/detail?mvid=" + this.props.match.params.id);
        this.setState({
            data,
            detail: detail.data
        })
        if (localStorage.userInfo) {
            const sublist = await this.axios.get("/artist/sublist")
            console.log(10, sublist.data)
            const isHave = sublist.data.findIndex((v, i) => v.id === this.state.detail.artistId);
            if (isHave >= 0) {
                document.getElementsByClassName("cv-isHave")[0].remove();
                document.getElementsByClassName("cv-video-fouce")[0].style.background = "none";
                document.getElementsByClassName("cv-video-fouce")[0].style.textAlign = "center";
                this.setState({
                    foucsState: 0
                })
            }
        }
    }
}
