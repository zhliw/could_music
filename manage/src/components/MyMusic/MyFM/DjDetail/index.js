import React from "react"
import {
    withRouter
} from "react-router-dom"
import {
    connect
} from "react-redux"
import {bindActionCreators} from "redux";
import myMusicCreator from "../../../../store/actionCreator/MyMusic";
import DetailHeader from "./DetailHeader"
import DetailContent from "./DetailContent"
import { Spin, Icon } from 'antd';
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
class DjDetail extends React.Component {
    componentDidMount() {
        this.props.getDjDetail(this.props.location.state);
    }

    render() {
        let djdetail = this.props.djdetail || {};
        return (
            <div>
                {
                    Object.keys(djdetail).length?
                    <>
                    <DetailHeader djdetail={djdetail}></DetailHeader>
                    <DetailContent djdetail={djdetail} programId={this.props.location.state} ></DetailContent></>:<Spin indicator={antIcon} />
            }

            </div>
        )
    }
}

export default withRouter(connect((state) => ({djdetail: state.myMusic.djdetail}), (dispatch) => bindActionCreators(myMusicCreator, dispatch))(DjDetail));