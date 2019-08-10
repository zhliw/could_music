import React from 'react'
import {Button,Icon} from 'antd'
export default class UserMessageT extends React.Component{
    render() {
        // console.log(2121,this.props)
        return(
            <div className={'UserMessageT'} style={{background:"url("+this.props.profile.backgroundUrl+")",backgroundSize:'cover'}}>
                <div className={"UserMessageT_top"}>
                    <div className={"UserMessageT_top_left"}><img src={this.props.profile.avatarUrl} alt=""/></div>
                        {/*需要判断是否为用户本人个人信息*/}
                    {
                        JSON.parse(localStorage.userInfo).account.id!==this.props.id?<div>
                            <Button type="danger">关注</Button>
                            <Button type="primary" ghost={true}><Icon type="mail" /></Button>
                            {
                                this.props.profile.artistId?<Button type="primary" ghost={true}>歌手页&gt;</Button>:""
                            }
                        </div>:<Button type="primary" ghost={true}>编辑</Button>
                    }

                </div>
                <div className={"UserMessageT_B"}>
                    <div style={{fontSize:"0.3rem"}}>{this.props.profile.nickname}</div>
                    <span>{this.props.profile.description}</span>
                    <div><span>关注 {this.props.profile.follows}</span> | <span>粉丝 {this.props.profile.followeds}</span></div>
                    <Button type="primary" ghost={true} size={"small"}>lv{this.props.level}</Button>
                </div>
            </div>
        )
    }
}