import React from "react"
import { Tabs } from 'antd';
import {
    connect
} from 'react-redux';
import {
    withRouter
} from "react-router-dom"
import {bindActionCreators} from "redux";
import myMusicCreator from "../../../store/actionCreator/MyMusic"
import DetailPage from "../MyFM/DjDetail/DetailContent/DetailPage";
import Program from "../MyFM/DjDetail/DetailContent/Program";
import myMusic from "../../../store/reducers/MyMusic";

import Song from "./Song"
const { TabPane } = Tabs;
function callback(key) {
    // console.log(key)
}
class RecentPlay extends React.Component{
    componentDidMount() {
        this.props.getRecentPlay(JSON.parse(localStorage.userInfo).account.id);
    }
    render() {
        let recentPlay=this.props.recentPlay||[];
        // console.log(recentPlay)
        return(
            <div>
            <div className={"returnDj iconfont icon-fanhui"} onClick={() => {
                window.history.go(-1)
            }}>最近播放
            </div>
            <div>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="歌曲" key="1">
                        <Song recentPlay={recentPlay}></Song>
                    </TabPane>
                    <TabPane tab="直播" key="2">
                        暂不支持此功能
                    </TabPane>
                    <TabPane tab="视频" key="3">
                        没有这个数据噢
                    </TabPane>
                </Tabs>
            </div>
            </div>
        )
    }
}
export default withRouter(connect((state) => ({recentPlay:state.myMusic.recentPlay}), (dispatch) => bindActionCreators(myMusicCreator, dispatch))(RecentPlay))