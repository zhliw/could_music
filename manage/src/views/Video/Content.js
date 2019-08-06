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





class Content extends React.Component{
    constructor(){
        super();
        this.state = {
            button:true
        }
    }
    componentDidMount(){
        this.props.getVideoList();
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
    render(){
        let videoList = this.props.videoList || [];
        return(
            <div id={"myDiv"}>
                {
                    videoList.map((v,i)=>{
                        return(
                            <div key={i} className={"videoContent"}>
                                {
                                    v.type/1 === 1?(<p className={"videoContentImgWarp"}><video  onClick={this.start.bind(this,v.data.vid)} className={"videoContentImg"} id={v.data.vid} poster={v.data.coverUrl} src={v.data.urlInfo.url.replace(/\s*/g,"")} alt=""></video>
                                        <button type="button" ref={v.data.vid} className={"iconfont icon-bofang1 videobutton"} style={{fontSize:"1rem"}}  onClick={this.start.bind(this,v.data.vid)}></button> </p>):(<p></p>)
                                }
                                <div className={"videoContentP"}>
                                    <p>{v.data.title}</p>
                                </div>
                                <div className={"videoContentBottom"}>
                                    {
                                        v.data.creator?<p><img src={v.data.creator.avatarUrl} alt=""/><span>{v.data.creator.nickname}</span></p>:""
                                    }
                                    <div style={{display:"flex",width:"3.2rem",justifyContent:"space-between",marginTop:"0.1rem"}}>
                                        <p>点赞{v.data.praisedCount}</p>
                                        <p>评论{v.data.commentCount}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <input type="button" value={"加载更多"} onClick={()=>{this.props.changeVideoList()}}/>
            </div>
        )
    }
}
export default connect((state) => ({videoList:state.Video.videoList}), (dispatch) => bindActionCreators(videos, dispatch))(Content)
