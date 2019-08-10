import React from 'react'
import {
    connect
} from 'react-redux'
import {bindActionCreators} from "redux";
import {
    withRouter
} from "react-router-dom"
import UserMessageTop from './UserMessageTop'
import UserMessageT from './UserMessageT'
import '../../../assets/css/MyMusic/userMessage.css'
import UserMessageMain from './UserMessageMain'
import myPublicCreator from "../../../store/actionCreator/Public";
class UserMessage extends React.Component{
    componentDidMount() {
        this.props.getUserDetail(this.props.location.state)
        this.props.getUserEvent(this.props.location.state)
    }

    render() {
        const userDetail=this.props.userDetail || {}
        const userEvent=this.props.userEvent || {}
        return (
            <div className={'UserMessage'}>
                <UserMessageTop ></UserMessageTop>
                <div className={"userMessageBot"}>
                    {
                        Object.keys(userDetail).length>0?<UserMessageT {...{id:this.props.location.state}} {...userDetail}></UserMessageT>:""
                    }
                    {
                        Object.keys(userDetail).length>0&&Object.keys(userEvent).length>0?<UserMessageMain {...{id:this.props.location.state}} userEvent={userEvent} userDetail={userDetail}></UserMessageMain>:''
                    }

                </div>
            </div>
        )
    }
}
export default withRouter(connect((state) => ({userDetail: state.allPublic.userDetail,userEvent: state.allPublic.userEvent}),(dispatch) => bindActionCreators(myPublicCreator,dispatch))(UserMessage))