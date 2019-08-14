import React from "react"
import {
    connect
} from "react-redux"
import {
    withRouter
} from "react-router-dom"
import {bindActionCreators} from "redux";
import myMusicCreator from "../../../../../store/actionCreator/MyMusic";
import myMusic from "../../../../../store/reducers/MyMusic"
import DetailPage from "./DetailPage"
import Program from "./Program"
import { Tabs } from 'antd';

const { TabPane } = Tabs;
function callback(key) {
    // console.log(key)
}
class DetailHeader extends React.Component {
    componentDidMount() {
        this.props.getProgram(this.props.location.state,1111111111);
    }
    render() {
        let djProgram = this.props.djProgram || {};
        return (
            <div>
                {
                    Object.keys(djProgram).length>0?<div className={"detailBottom"}>
                        <Tabs defaultActiveKey="1" onChange={callback}>
                            <TabPane tab="详情" key="1">
                                <DetailPage {...this.props}></DetailPage>
                            </TabPane>
                            <TabPane tab={"节目"+djProgram.count} key="2">
                                <Program djProgram={djProgram}></Program>
                            </TabPane>
                        </Tabs>
                    </div>:null
                }
            </div>
        )
    }
}
export default withRouter(connect((state) => ({djProgram: state.myMusic.djProgram}), (dispatch) => bindActionCreators(myMusicCreator, dispatch))(DetailHeader))