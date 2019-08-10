import React from 'react'

export default class AboutTa extends React.Component{
    render() {
        return (
            <div className={"AboutTa"}>
                <div>
                    {
                        this.props.profile.allAuthTypes?
                            <div><h3>认证信息</h3>
                                {
                                    this.props.profile.allAuthTypes.map((v,i)=>{
                                        return (
                                            <p key={i}>{v.desc}</p>
                                        )
                                    })
                                }
                                <br/>
                            </div>:''
                    }
                </div>
                <div>
                    <h3>个人信息</h3>
                    <p>等级：{this.props.level}</p>
                    <p>性别：{this.props.profile.gender===1?'男':'女'}</p>
                    <br/>
                </div>
                <div>
                    <h3>个人介绍</h3>
                    <p>{this.props.profile.signature.length>0?this.props.profile.signature:"暂无个人介绍"}</p>
                    <br/>
                </div>
            </div>
        )
    }
}