import React from "react";
import { connect } from 'react-redux'
import actionCreator from '../../store/actionCreator/Login'
import {bindActionCreators} from "redux"
class UserPassWord extends React.Component{
    constructor(){
        super()
        this.state = {
            passWord:''
        }
    }
    handlerChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    userLogin(){
        this.props.userLogin({
            phone:localStorage.userPhone,
            passWord:this.state.passWord
        })
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.userInfo.code===200){
            localStorage.userInfo = JSON.stringify(nextProps.userInfo)
        }
    }
    render(){
        return (
            <div>
                <div className={'ygz_phonelogin'}>
                    <header>
                        <i className={'icon-gouwuche iconfont'} onClick={()=>{
                            this.props.history.go(-1)
                        }}></i>
                        <span>手机号登录</span>
                    </header>
                    <div className={'login'}>
                        <p className={'phone'} style={{top:'0'}}><input name={'passWord'} type={'password'} value={this.state.passWord} onChange={this.handlerChange.bind(this)} autoFocus placeholder={'输入密码'}/></p>
                        <div className={'loginBtn'} style={{top:'2.5rem'}} onClick={this.userLogin.bind(this)}>立即登录</div>
                        <span className={'upps'} onClick={()=>{
                            this.props.history.push('/user/uppassword')
                        }}>重设密码 ></span>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect((state)=>({userInfo:state.login.userInfo}),(dispatch)=>bindActionCreators(actionCreator,dispatch))(UserPassWord)
