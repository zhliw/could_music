import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreators from '../../store/actionCreator/Login'
class Code extends React.Component{
    constructor(){
        super()
        this.state = {
            code:''
        }
    }
    handlerChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        return(
            <div>
                <div className="ygz_phonelogin">
                    <div className={'header'}>
                        <i className={'icon-gouwuche iconfont'} onClick={()=>{
                            this.props.history.go(-1)
                        }}></i>
                        <span>手机号验证</span>
                    </div>
                    <div className={'codeInfo'}>
                        <p className={'codeTop'}>验证码已发送至</p>
                        <p className={'codeDown'}>+86{localStorage.userPhone}</p>
                    </div>
                    <input type={'text'} value={this.state.code} onChange={this.handlerChange.bind(this)} name={'code'} placeholder={'请输入四位验证码'}/>
                    <div onClick={this.upPassWord.bind(this)} className={'upPSBtn'} style={{margin:'1rem auto'}}>提交</div>
                </div>
                
            </div>
        )
    }
    upPassWord(){
        const data = this.axios.get(`/register/cellphone?phone=${this.props.location.state.userPhone}&password=${this.props.location.state.userPassWord}&captcha=${this.state.code}`)
        if(data){
            this.props.history.push('/user/userPassWord')
        }else{
            alert('服务器错误,请稍后再试!')
        }
    }
}

export default connect((state)=>({registerInfo:state.login.registerInfo}),(dispatch)=>bindActionCreators(actionCreators,dispatch))(Code)