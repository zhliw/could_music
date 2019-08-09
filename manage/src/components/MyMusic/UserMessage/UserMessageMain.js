import React from 'react'
import {
    connect
} from 'react-redux'
import {bindActionCreators} from "redux";
import myMusicCreator from "../../../store/actionCreator/MyMusic";
import AboutTa from './AboutTa'
import UserEvent from './UserEvent'
import UserMusic from './UserMusic'
import { Tabs } from 'antd';
const { TabPane } = Tabs;
class UserMessageMain extends React.Component{
    componentDidMount() {
        if(this.props.id)
        this.props.getUserPlayList(this.props.id)
    }
    callb(key) {
        console.log(key);
    }
    render() {
        // console.log(9999,this.props.playList)
        return(
            <div className={'UserMessageMain'}>
                <div className={'UserMessageMainaa'}>
                    {/*<div style={{height:'1.5rem'}}>*/}
                    {/*</div>*/}
                    <div className={"UserMessageMainSniky"}>
                        <Tabs defaultActiveKey="1" onChange={this.callb}>
                            <TabPane tab="音乐" key="1">
                                <UserMusic userDetail={this.props.userDetail} playList={this.props.playList}></UserMusic>
                            </TabPane>
                            <TabPane tab="动态" key="2">
                                {
                                    this.props.userEvent.events.length>0?<UserEvent {...this.props.userEvent}></UserEvent>:<div>暂无相关动态</div>
                                }
                            </TabPane>
                            <TabPane tab="关于TA" key="3">
                                <AboutTa {...this.props.userDetail}></AboutTa>
                            </TabPane>
                        </Tabs>,
                    </div>
                </div>
            </div>
        )
    }
}
export default connect((state) => ({playList:state.myMusic.playList}), (dispatch) => bindActionCreators(myMusicCreator, dispatch))(UserMessageMain)