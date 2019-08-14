import React from "react"

export default class DetailPage extends React.Component {
    render() {
        // console.log(this.props,82333333333333)
        // console.log(this.props.djdetail.djRadio,23333333333)
        // document.getElementsByTagName("html")[0].scrollTop = 0
        return(

            <div className={"detailContent"} style={{padding:"0 0.2rem"}}>
                {
                    this.props.djdetail&&this.props.djdetail.djRadio?<div className={"details"}>
                        <div className={"module"}>
                            <h3>主播</h3>
                            <div className={"nickHead"}onClick={()=>{
                                this.props.history.push("/UserMessage",this.props.djdetail.djRadio.dj.userId)
                            }}>
                                <div className={"nickPic"}><img src={this.props.djdetail.djRadio.dj.avatarUrl}/>
                                </div>
                                <div className={"hostIntroduce"}>
                                    <div className={"hostName"}>{this.props.djdetail.djRadio.dj.nickname}</div>
                                    <div className={"signature"}>{this.props.djdetail.djRadio.dj.signature}</div>
                                </div>
                                <div className={"arrow"}> ></div>
                            </div>
                        </div>
                        <div className={"briefIntro"}>
                            <h3>电台内容简介</h3>
                            <div className={"briefStyle"}>分类：<span>{this.props.djdetail.djRadio.category}</span>
                            </div>
                            <div className={"briefText"}>{this.props.djdetail.djRadio.desc}</div>
                        </div>

                        <div>
                            {
                                this.props.djdetail.djRadio.commentDatas.length>0?<h3>精彩评论</h3>:null
                            }
                                    {
                                        this.props.djdetail.djRadio.commentDatas.map((v, i) => {
                                            return (
                                                <div key={i}>
                                                    <div className={"comments"}>
                                                        <div className={"userProfile"} onClick={()=>{
                                                            this.props.history.push("/UserMessage",v.userProfile.userId)
                                                        }}>
                                                            <img src={v.userProfile.avatarUrl}/>
                                                        </div>
                                                        <div className={"commentsContent"}>
                                                            <div className={"nickname"}>{v.userProfile.nickname}</div>
                                                            <div className={"discuss"}>{v.content}</div>
                                                            <div className={"programName"}>--{v.programName}</div>
                                                        </div>
                                                    </div>
                                                </div>

                                            )

                                        })
                                    }


                        </div>
                    </div> : null
                }

            </div>
        )
    }
}