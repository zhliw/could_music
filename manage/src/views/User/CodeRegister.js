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
    async verifyCode(){
        const data = await this.axios.get('/captcha/verify?phone='+localStorage.userPhone+'&captcha='+this.state.code)
        console.log(data)
        if(data.code===200){
            this.props.history.push({
                pathname:'/user/userregister',
                state:{
                    code:this.state.code
                }
            })
        }
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
                    <div  className={'upPSBtn'} style={{margin:'1rem auto'}} onClick={this.verifyCode.bind(this)}>提交</div>
                </div>
                
            </div>
        )
    }
    async componentDidMount(){
        const data = await this.axios.get('/captcha/sent?phone='+localStorage.userPhone)
        console.log(data)
    }
}

export default connect((state)=>({registerInfo:state.login.registerInfo}),(dispatch)=>bindActionCreators(actionCreators,dispatch))(Code)