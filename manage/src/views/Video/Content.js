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
            HotMvList:[],
            OtherList:[]
        }
    }
    componentDidMount(){
        this.getHotMVList();
    }
    getHotMVList(){
        this.axios.get("/mv/all?area=内地&limit=10&offset=10").then(data=>{
            console.log(data.data)
            this.setState({
                HotMvList:[...this.state.HotMvList,...data.data]
            })
        });
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <div>111</div>
                {
                    this.state.HotMvList.map((v,i)=>{
                        return(
                            <div key={i} className={"videoContent"}>
                                <p><img className={"videoContentImg"} src={v.cover} alt=""/></p>
                                <div className={"videoContentP"}>
                                    <p>{v.name}</p>
                                </div>
                                <div className={"videoContentBottom"}>
                                    <p><img  src="http://p1.music.126.net/vkv7mQC9lC8YLhkg3zrr_w==/109951164254978666.jpg" alt=""/><span>{v.artistName}</span></p>
                                    <div style={{display:"flex",width:"3.2rem",justifyContent:"space-between",marginTop:"0.1rem"}}>
                                        <p>点赞</p>
                                        <p>评论</p>
                                        <p>更多</p>
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
export default withRouter(Content)