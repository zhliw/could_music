import React from "react" ;
import { Drawer, Button } from 'antd';
export default class EventsInfo extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        console.log(111)
        return (
            <Drawer
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
                    { this.props.user.nickname}
                    <img style={{width:".8rem" ,height:"auto",borderRadius:"50%"}} src={this.props.user.avatarUrl} alt=""/>
                </div>

            </Drawer>
        );
    }
}