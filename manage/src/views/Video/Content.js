import React from "react"
import {
    Route,
    NavLink,
    withRouter
} from "react-router-dom"
class Content extends React.Component{
    constructor(){
        super();
        this.state = {
            id:"",
            HotMvList:[]
        }
    }
    componentDidMount(){
        const num = Math.floor(Math.random()*1000)
        const path = this.props.location.pathname.replace("/video/","")
        if(path){
            this.axios.get("/video/group?id="+path+"&"+num).then(data=>{
                this.setState({
                    HotMvList:[...this.state.HotMvList,...data.datas]
                })
            });
        }else {
            this.axios.get("/video/group?id=59110&"+num).then(data=>{
                this.setState({
                    HotMvList:[...this.state.HotMvList,...data.datas]
                })
            });
        }
    }
    enter(){
        alert("hahhahhahh")
    }
    render(){
        return(
            <div>
                {
                    this.state.HotMvList.map((v,i)=>{
                        return(
                            <div key={i} className={"videoContent"} onClick={this.enter.bind(this)}>
                                <p><img className={"videoContentImg"} src={v.data.coverUrl} alt=""/></p>
                                <div className={"videoContentP"}>
                                    <p>{v.data.title}</p>
                                </div>
                                <div className={"videoContentBottom"}>
                                    {
                                        v.data.creator?<p><img src={v.data.creator.avatarUrl} alt=""/><span>{v.data.creator.nickname}</span></p>:""
                                    }
                                    <div style={{display:"flex",width:"3.2rem",justifyContent:"space-between",marginTop:"0.1rem"}}>
                                        <p>点赞{v.data.praisedCount}</p>
                                        <p>分享{v.data.shareCount}</p>
                                        <p>评论{v.data.commentCount}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default Content