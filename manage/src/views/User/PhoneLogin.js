import React from "react";
import { connect } from 'react-redux'
import actionCreator from '../../store/actionCreator/Login'
import {bindActionCreators} from "redux"
class PhoneLogin extends React.Component{
    constructor(){
        super()
        this.state = {
            phone:''
        }
    }
    componentWillReceiveProps(nextProps){
        console.log(2222,nextProps.registerInfo)
        //判断是否注册过，已经注册跳转到输入密码，否则跳转到注册
        if(nextProps.registerInfo.exist===1){
            localStorage.userPhone = this.state.phone
            this.props.history.push('/user/userPassWord')
        }else{
            localStorage.userPhone = this.state.phone
            this.props.history.push('/user/coderegister')
        }
    }
    handlerChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    isRegister(){
        this.props.isRegister(this.state.phone)
    }
    render(){
        return (
            <div className={'ygz_phonelogin'}>
                <div className={'header'}>
                    <i className={'icon-gouwuche iconfont'} onClick={()=>{
                        this.props.history.go(-1)
                    }}></i>
                    <span>手机号登录</span>
                </div>
                <div className={'login'}>
                    <p>未注册的手机号登录后将自动创建账号</p>
                    <p className={'phone'}><span>+86</span><input name={'phone'} value={this.state.phone} onChange={this.handlerChange.bind(this)} type={'text'} autoFocus placeholder={'输入手机号'}/></p>
                    <div className={'loginBtn'} onClick={this.isRegister.bind(this)}>下一步</div>
                </div>
            </div>
        )
    }
}

export default connect((state)=>({registerInfo:state.login.registerInfo}),(dispatch)=>bindActionCreators(actionCreator,dispatch))(PhoneLogin)